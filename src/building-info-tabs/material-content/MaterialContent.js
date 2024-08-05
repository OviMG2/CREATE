import React from "react";
import styles from "./MaterialContent.module.scss";
import {
	Button,
	Select,
	MenuItem,
	Slider,
	Tooltip,
	IconButton,
} from "@mui/material";
import WMSMap from "../../map/WMSMap";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MockData = [{ skin: 10, structure: 20, space: 30, total: 60 }];

const DataTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Skin</TableCell>
						<TableCell>Structure</TableCell>
						<TableCell>Space</TableCell>
						<TableCell>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{MockData.map((data, index) => (
						<TableRow key={index}>
							<TableCell>{data.skin}</TableCell>
							<TableCell>{data.structure}</TableCell>
							<TableCell>{data.space}</TableCell>
							<TableCell>{data.total}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function MaterialContent({ setWizardStep }) {
	const [value, setValue] = React.useState([1920, 2050]);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/select_perim");
    };
	return (
		<div className={styles.buildingInformationContainer}>
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
							<MenuItem value={0}>Wood</MenuItem>
							<MenuItem value={0}>Steel</MenuItem>
							<MenuItem value={0}>Bricks</MenuItem>
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
				<div className={styles.buttonsWrapper}>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={() => {}}
					>
						Reset filters
					</Button>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={() => {}}
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
						Total mass: <b>18000 kg</b>
					</div>
					<div>
						Total volume: <b>120 m3</b>
					</div>
					<br></br>
					<br></br>
					<div>
						<div className={styles.filterItem}>
							<div>Material Mass/Volume classification within</div>
							<div>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={0}
									onChange={() => {}}
									className={styles.select}
								>
									<MenuItem value={0}>Layers</MenuItem>
								</Select>
							</div>
						</div>
						<div className={styles.filterItem}>
							<div>Material Type</div>
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
					</div>
					<br></br>
					<DataTable></DataTable>
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

export default MaterialContent;
