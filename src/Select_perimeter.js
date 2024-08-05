import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./SelectPerimeter.module.scss";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WMSMap from "./map/WMSMap";
import { useNavigate } from 'react-router-dom'; // Importă useNavigate

function SelectPerimeter() {
    const [smallMapBounds, setSmallMapBounds] = useState([]);
    console.log(smallMapBounds);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/create-project");
    };

    const handleNext = () => {
        navigate("/buildingTabs");
    }

    return (
        <div className={styles.selectPerimeterContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>CREATE</div>
                <span className={styles.description}>
                    Embedding advanced urban material stock methods within governance
                    processes to enable circular economy and cities resilience
                </span>
            </div>
            <div>
                <div>
                    General inventory data
                    <Tooltip
                        title={
                            <div className={styles.info}>
                                <h3>Inventory data includes:</h3>
                                <div>
                                    <u>Building information:</u> construction year, building use
                                    (archetype), number of floors probable/defined demolition or
                                    renovation.
                                </div>
                                <br></br>
                                <div>
                                    <u>Material quantity:</u> Available material (mass) in each
                                    building, element, component or layers
                                </div>
                                <br></br>
                                <div>
                                    <u>Material recycling/reusing estimation </u>
                                </div>
                                <br></br>
                                <div>
                                    <u> Material quality</u>: Will be available after
                                    pre-demolition audit/examination
                                </div>
                            </div>
                        }
                    >
                        <IconButton>
                            <HelpOutlineIcon />
                        </IconButton>
                    </Tooltip>
                    within the selected area
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.map}>
                        <WMSMap height={"400px"} setSmallMapBounds={setSmallMapBounds} />
                    </div>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <Button variant="contained" color="secondary" onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" color="secondary" onClick={handleNext}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default SelectPerimeter; // Exportă componenta implicit
