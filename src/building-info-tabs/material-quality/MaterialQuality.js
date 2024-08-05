import React, { useState } from "react";
import styles from "./MaterialQuality.module.scss";
import {
	Button,
	Select,
	MenuItem,
	Slider,
	Tooltip,
	IconButton,
} from "@mui/material";
import WMSMap from "../../map/WMSMap";
import MaterialScenariosModal from "./components/material-scenarios/MaterialScenarios";
import { useNavigate } from "react-router-dom";

const MockData = [{ skin: 10, structure: 20, space: 30, total: 60 }];

function MaterialQuality({setWizardStep}) {
	const [openScenarios, setOpenScenarios] = useState(false);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/select_perim");
    };
	return (
		<div className={styles.buildingInformationContainer}>
			<MaterialScenariosModal open={openScenarios} setOpen={setOpenScenarios} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
				}}
				className={styles.dropdownWrapper}
			>
				<div
					style={{
						paddingLeft: "30px",
						fontSize: "18px",
					}}
				>
					<b>Material Category: </b>
					<span>Concrete</span>
				</div>
				<div className={styles.filtersWrapper}>
					<div className={styles.filterItem}>
						<div>Category</div>
						<div>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={0}
								onChange={() => {}}
								className={styles.select}
							>
								<MenuItem value={0}>Concrete</MenuItem>
							</Select>
						</div>
					</div>
					<div className={styles.filterItem}>
						<div>Layer</div>
						<div>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={0}
								onChange={() => {}}
								className={styles.select}
							>
								<MenuItem value={0}>Select all</MenuItem>
							</Select>
						</div>
					</div>
					<div className={styles.filterItem}>
						<div>Element</div>
						<div>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={0}
								onChange={() => {}}
								className={styles.select}
							>
								<MenuItem value={0}>Select all</MenuItem>
							</Select>
						</div>
					</div>
					<div className={styles.buttonWrapper}>
						<Button
							variant="contained"
							style={{ width: "50%" }}
							color="secondary"
							onClick={() => {}}
						>
							Select
						</Button>
					</div>
				</div>
				<div
					style={{
						paddingLeft: "30px",
						paddingBottom: "60px",
					}}
				>
					<b>
						{
							">> Select a building to see its available material quality or possible end of life scenarios"
						}
					</b>
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
					<Button>Material Quality Form</Button>
					<Button
						onClick={() => {
							setOpenScenarios(true);
						}}
					>
						Chosen Material
					</Button>
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
						onClick={() => {}}
					>
						Save and continue
					</Button>
					<Button
						variant="contained"
						style={{ backgroundColor: "#7072d4" }}
						onClick={() => {}}
					>
						Export results
					</Button>
				</div>
			</div>
		</div>
	);
}

export default MaterialQuality;
