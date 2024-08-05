import React, { useState } from "react";
import styles from "./Create_project.module.scss"; //import SCSS module for styling
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
} from "@mui/material"; // import MUI components
import { useNavigate } from "react-router-dom"; // import useNavigate for navigation

function SelectCity({ setWizardStep, setStep, wizardStep, ...props }) {
    // hook for selected value
    const [selectedValue, setSelectedValue] = useState("gothenburg");
    // hook for navigation
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    // handle back button
    const handleBack = () => {
        navigate("/projects"); // Navighează la pagina de Projects
    };
    // handle next button
    const handleNext = () => {
        navigate("/select_perim")
    }

    return (
        <div className={styles.selectCityContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>CREATE</div>
                <span className={styles.description}>
                    Embedding advanced urban material stock methods within governance
                    processes to enable circular economy and cities resilience
                </span>
            </div>
            <div>
                <div>Choose the city you wish to continue with</div>
                <FormControl component="fieldset" className={styles.form}>
                    <RadioGroup
                        aria-label="city"
                        name="city"
                        value={selectedValue}
                        onChange={handleChange}
                    >
                        <div className={styles.citiesWrapper}>
                            <div className={styles.city}>
                                <img src="/city-images/gothenburg.png" alt="gothenburg" />
                                <FormControlLabel
                                    value="gothenburg"
                                    control={<Radio />}
                                    label="Gothenburg"
                                />
                            </div>
                            <div className={styles.city}>
                                <img src="/city-images/vienna.png" alt="vienna" />
                                <FormControlLabel
                                    value="vienna"
                                    control={<Radio />}
                                    label="Vienna"
                                />
                            </div>
                            <div className={styles.city}>
                                <img src="/city-images/rennes.png" alt="rennes" />
                                <FormControlLabel
                                    value="rennes"
                                    control={<Radio />}
                                    label="Rennes"
                                />
                            </div>
                        </div>
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={styles.buttonsWrapper}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default SelectCity;
