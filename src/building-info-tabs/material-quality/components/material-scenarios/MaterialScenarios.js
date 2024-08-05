import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styles from "./MaterialScenarios.module.scss";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "@mui/material";
import { Data } from "@react-google-maps/api";
const MaterialQualityData = [
	{
		id: 1,
		neededInformation: "Accesibility Requirements",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 2,
		neededInformation: "Acoustic Performance",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 3,
		neededInformation: "Aesthetic Information",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 4,
		neededInformation: "Components Condition",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 5,
		neededInformation: "Connection Details",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 6,
		neededInformation: "Dimensions and Shape",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 7,
		neededInformation: "Fire Performance",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 8,
		neededInformation: "Material Composition",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 9,
		neededInformation: "Structural and functional status",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 10,
		neededInformation: "Building take-down method",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 11,
		neededInformation: "Potential damage or contamination",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
	{
		id: 12,
		neededInformation: "Others",
		providedInformation: "",
		uploadedDocument: "Uploaded Document",
	},
];
const DataTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>
							<b>Needed Information</b>
						</TableCell>
						<TableCell>
							<b>Provided Information</b>
						</TableCell>
						<TableCell>
							<b>Uploaded Document/Picture</b>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{MaterialQualityData.map((data, index) => (
						<TableRow key={index}>
							<TableCell>{data.id}</TableCell>
							<TableCell>{data.neededInformation}</TableCell>
							<TableCell>{data.providedInformation}</TableCell>
							<TableCell>{data.uploadedDocument}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
const MaterialScenariosModal = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="xl"
			fullWidth={true}
			PaperProps={{
				style: {
					width: "60%",
					height: "90%",
					maxWidth: "none",
					maxHeight: "none",
				},
			}}
		>
			<DialogContent className={styles.dialogContent}>
				<div className={styles.dialogTitle}>
					<b>Material Quality Form: </b>
					<span>Concrete, Structural Beam</span>
				</div>
				<div className={styles.buildingInfo}>
					<div>Address</div>
					<div>ID</div>
					<div>Use</div>
					<div>Owner</div>
					<div>Availability Time</div>
					<div>Available Quantity</div>
				</div>
				<div>
					<DataTable></DataTable>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MaterialScenariosModal;
