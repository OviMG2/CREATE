import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import data from "./data2.json";
import proj4 from "proj4";
import L from "leaflet";
proj4.defs(
	"EPSG:3948",
	"+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
);

const convertToGPS = (x, y) => {
	return proj4("EPSG:3948", "EPSG:4326", [x, y]);
};

const MAX_RECTANGLE_WIDTH = 0.01; // Maximum width in degrees
const MAX_RECTANGLE_HEIGHT = 0.007; // Maximum height in degrees
L.Draw.Rectangle = L.Draw.Rectangle.extend({
	_onMouseMove: function (e) {
		const layerPoint = e.layerPoint;
		if (!this._startLatLng) return;

		const bounds = new L.LatLngBounds(
			this._startLatLng,
			this._map.layerPointToLatLng(layerPoint)
		);
		const width = Math.abs(bounds.getEast() - bounds.getWest());
		const height = Math.abs(bounds.getNorth() - bounds.getSouth());

		if (width <= MAX_RECTANGLE_WIDTH && height <= MAX_RECTANGLE_HEIGHT) {
			L.Draw.SimpleShape.prototype._onMouseMove.call(this, e);
		} else {
			const maxLatLng = this._map.layerPointToLatLng(layerPoint);
			if (width > MAX_RECTANGLE_WIDTH) {
				maxLatLng.lng =
					this._startLatLng.lng +
					(this._startLatLng.lng < maxLatLng.lng
						? MAX_RECTANGLE_WIDTH
						: -MAX_RECTANGLE_WIDTH);
			}
			if (height > MAX_RECTANGLE_HEIGHT) {
				maxLatLng.lat =
					this._startLatLng.lat +
					(this._startLatLng.lat < maxLatLng.lat
						? MAX_RECTANGLE_HEIGHT
						: -MAX_RECTANGLE_HEIGHT);
			}
			const newBounds = new L.LatLngBounds(this._startLatLng, maxLatLng);
			if (this._shape) {
				this._shape.setBounds(newBounds);
			}
		}
	},
	_onMouseDown: function (e) {
		this._startLatLng = this._map.mouseEventToLatLng(e.originalEvent);
		L.Draw.SimpleShape.prototype._onMouseDown.call(this, e);
	},
});
const Map = ({ setSmallMapBounds, height }) => {
	const [editableFG, setEditableFG] = useState(null);
	const editRef = useRef();
	 const onCreated = (e) => {
			const drawnItems = editableFG?.leafletElement._layers;
			const bounds = e.layer.getBounds();
			setSmallMapBounds(bounds);
			if (drawnItems) {
				if (Object.keys(drawnItems).length > 1) {
					Object.keys(drawnItems).forEach((layerid, index) => {
						if (index > 0) return;
						const layer = drawnItems[layerid];
						editableFG?.leafletElement.removeLayer(layer);
					});
				}
			}
			editRef.current._container.firstElementChild.hidden = true;
		};

	const parsedGeoJson = data.features.map((feature) => {
		return {
			...feature,
			geometry: {
				...feature.geometry,
				coordinates: feature.geometry.coordinates.map((coord) => {
					return coord.map((item) => convertToGPS(item[0], item[1]));
				}),
			},
		};
	});
	const onFeatureGroupReady = (reactFGref) => {
		setEditableFG(reactFGref);
	};
	console.log(convertToGPS(1352587.2783, 7221561.3508));
	return (
		<div>
			<MapContainer
				center={[48.09931065003477, -1.667626519810611]}
				zoom={13}
				style={{ height }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<FeatureGroup
					ref={(featureGroupRef) => {
						onFeatureGroupReady(featureGroupRef);
					}}
				>
					<EditControl
						onMounted={(e) => {
							editRef.current = e;
						}}
						position="topright"
						onCreated={onCreated}
						onDeleted={() => {
							editRef.current._container.firstElementChild.hidden = false;
						}}
						draw={{
							rectangle: true,
							circle: false,
							circlemarker: false,
							marker: false,
							polyline: false,
							polygon: false,
						}}
						edit={{
							edit: true,
							remove: true,
						}}
					/>
				</FeatureGroup>
				<GeoJSON data={parsedGeoJson} />
			</MapContainer>
		</div>
	);
};

export default Map;
