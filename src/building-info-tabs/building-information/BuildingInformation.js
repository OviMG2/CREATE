import React, { useState } from "react";
import styles from "./BuildingInformation.module.scss";
import {
	Button,
	Select,
	MenuItem,
	Slider,
	Tooltip,
	IconButton,
} from "@mui/material";
import WMSMap from "../../map/WMSMap";
import { useNavigate } from "react-router-dom";

function BuildingInformation() {
	const [value, setValue] = useState([1920, 2050]);
	const [buildingUse, setBuildingUse] = useState(0);
	const [buildingType, setBuildingType] = useState(0);
	const [buildingStructure, setBuildingStructure] = useState(0);
	const [buildingSize, setBuildingSize] = useState(0);
	const [ownershipType, setOwnershipType] = useState(0);
	const [demolitionYear, setDemolitionYear] = useState([1920, 2050]);

	const navigate = useNavigate();

	const handleBack = () => {
        navigate("/select_perim");
    };

	const handleBuildingUseChange = (event) => {
		setBuildingUse(event.target.value);
	};

	const handleBuildingTypeChange = (event) => {
		setBuildingType(event.target.value);
	};

	const handleBuildingStructureChange = (event) => {
		setBuildingStructure(event.target.value);
	};

	const handleBuildingSizeChange = (event) => {
		setBuildingSize(event.target.value);
	};

	const handleOwnershipTypeChange = (event) => {
		setOwnershipType(event.target.value);
	};

	const handleConstructionYearChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleDemolitionYearChange = (event, newValue) => {
		setDemolitionYear(newValue);
	};

	const handleApplyFilters = () => {
		const filters = {
			buildingUse,
			buildingType,
			buildingStructure,
			buildingSize,
			ownershipType,
			constructionYear: value,
			demolitionYear,
		};
		console.log("Applied Filters:", filters);
		// Aici poți adăuga logica pentru a trimite datele către un server sau pentru a actualiza harta
	};

    return (
		<div className={styles.buildingInformationContainer}>
			<div className={styles.filtersWrapper}>
				<div className={styles.filterItem}>
					<div>Building Use</div>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "10px" }}
					>
						<Select
							labelId="building-use-select-label"
							id="building-use-select"
							value={buildingUse}
							onChange={handleBuildingUseChange}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
							<MenuItem value={1}>Residential</MenuItem>
							<MenuItem value={2}>Office</MenuItem>
						</Select>
						<Select
							labelId="building-type-select-label"
							id="building-type-select"
							value={buildingType}
							onChange={handleBuildingTypeChange}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
							<MenuItem value={1}>Multi Family/MF</MenuItem>
							<MenuItem value={2}>Single Family/SF</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Building Structure</div>
					<div>
						<Select
							labelId="building-structure-select-label"
							id="building-structure-select"
							value={buildingStructure}
							onChange={handleBuildingStructureChange}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Building Size</div>
					<div>
						<Select
							labelId="building-size-select-label"
							id="building-size-select"
							value={buildingSize}
							onChange={handleBuildingSizeChange}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
							<MenuItem value={1}>{"<500 m²"}</MenuItem>
							<MenuItem value={2}>500-2000  m²</MenuItem>
							<MenuItem value={3}>2000-5000  m²</MenuItem>
							<MenuItem value={4}>5000-10000  m²</MenuItem>
							<MenuItem value={5}>{">10000 m²"}</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Ownership type</div>
					<div>
						<Select
							labelId="ownership-type-select-label"
							id="ownership-type-select"
							value={ownershipType}
							onChange={handleOwnershipTypeChange}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
							<MenuItem value={1}>Private</MenuItem>
							<MenuItem value={2}>Public</MenuItem>
							<MenuItem value={3}>Mixt</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Construction year</div>
					<div>
						<Slider
							value={value}
							valueLabelDisplay="auto"
							getAriaLabel={() => "Construction year"}
							onChange={handleConstructionYearChange}
							min={1920}
							max={2050}
							marks={[
								{
									value: 1920,
									label: "1920",
								},
								{
									value: 2050,
									label: "2050",
								},
							]}
						/>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>
						Demolition year{" "}
						<Tooltip
							title={
								<div>
									<div></div>
								</div>
							}
						>
							<IconButton>{/* <HelpOutlineIcon /> */}</IconButton>
						</Tooltip>
					</div>
					<div>
						<Slider
							value={demolitionYear}
							valueLabelDisplay="auto"
							getAriaLabel={() => "Demolition year"}
							onChange={handleDemolitionYearChange}
							min={1920}
							max={2050}
							marks={[
								{
									value: 1920,
									label: "1920",
								},
								{
									value: 2050,
									label: "2050",
								},
							]}
						/>
					</div>
				</div>
				<div className={styles.buttonsWrapper}>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={() => {
							setBuildingUse(0);
							setBuildingType(0);
							setBuildingStructure(0);
							setBuildingSize(0);
							setOwnershipType(0);
							setValue([1920, 2050]);
							setDemolitionYear([1920, 2050]);
						}}
					>
						Reset filters
					</Button>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={handleApplyFilters}
					>
						Apply filters
					</Button>
				</div>
			</div>
			<div className={styles.mapWrapper}>
				<WMSMap height={"550px"} />
				<div className={styles.titleWrapper}>
					<div className={styles.title}>CREATE</div>
					<span className={styles.description}>
						Embedding advanced urban material stock methods within governance
						processes to enable circular economy and cities resilience
					</span>
				</div>
			</div>
			<div className={styles.infoWrapper}>
				<div>
					<div>
						Number of selected building:<b>18</b>
					</div>
					<div>
						Total gross flor area: <b>120 m2</b>
					</div>
					<br></br>
					<br></br>
					<div>
						<b>
							{
								"<< Click on each selected building to see the detailed information"
							}
						</b>
					</div>
				</div>
				<div className={styles.buttonsWrapper}>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#424242",
						}}
						onClick={handleBack}
					>
						Back
					</Button>
					<Button
						variant="contained"
						style={{ backgroundColor: "#02b876" }}
					>
						Save and continue
					</Button>
				</div>
			</div>
		</div>
	);
}

export default BuildingInformation;
