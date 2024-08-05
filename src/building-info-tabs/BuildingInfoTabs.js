import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./BuildingInfoTabs.module.scss";
import BuildingInformation from "./building-information/BuildingInformation";
import MaterialContent from "./material-content/MaterialContent";
import MaterialQuality from "./material-quality/MaterialQuality";
function BuildingInfoTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const buildingInfoTabs = [
        <BuildingInformation />,
        <MaterialContent />,
        <MaterialQuality />,
	];

	return (
		<div className={styles.container}>
			<Tabs value={value} onChange={handleChange} variant="fullWidth">
				<Tab label="Building Information" value="0" />
				<Tab label="Material Content" value="1" />
				<Tab label="Material Quality/Recovery" value="2" />
			</Tabs>
			{buildingInfoTabs[value]}
		</div>
	);
}

export default BuildingInfoTabs;
