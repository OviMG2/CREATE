import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./Projects.module.scss";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

const ActionsDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="dropdown"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                {/* Icon Here */}
            </IconButton>
            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {}}>Overview/Edit</MenuItem>
                <MenuItem onClick={() => {}}>Duplicate</MenuItem>
                <MenuItem onClick={() => {}}>Unpin</MenuItem>
                <MenuItem onClick={() => {}}>Rename</MenuItem>
                <MenuItem onClick={() => {}}>Delete</MenuItem>
            </Menu>
        </div>
    );
};

const ProjectItem = ({ city, name, creationDate, ...props }) => {
    const getBackgroundImage = () => {
        if (city === "gothenburg") {
            return 'url("/city-images/gothenburg.png")';
        } else if (city === "vienna") {
            return 'url("/city-images/vienna.png")';
        } else if (city === "rennes") {
            return 'url("/city-images/rennes.png")';
        }
        return "";
    };

    return (
        <div
            style={{
                width: "300px",
                height: "250px",
                border: "1px solid gray",
                boxShadow: "1px 1px 5px gray",
                borderRadius: "2px"
            }}
        >
            <div
                style={{
                    backgroundImage: getBackgroundImage(),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "70%"
                }}
            ></div>
            <div
                style={{
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 15px",
                    borderTop: "2px solid gray"
                }}
            >
                <div style={{ flexGrow: "1" }}>
                    <strong style={{ fontSize: "18px" }}>{name}</strong>
                    <div>Created in {creationDate}</div>
                </div>
                <ActionsDropdown />
            </div>
        </div>
    );
};

function Projects() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/login");
    };

    const handleCreateNewProject = () => {
        navigate("/create-project");
    };

    const handleTutorial = () => {
        navigate("/tutorial"); // Navighează la pagina TutorialUserManual
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>CREATE</div>
                <span className={styles.description}>
                    Embedding advanced urban material stock methods within governance
                    processes to enable circular economy and cities resilience
                </span>
            </div>
            <h1>Welcome to CREATE</h1>
            <div className={styles.container}>
                <div>
                    <strong>
                        <h2>Your Projects</h2>
                    </strong>
                    <div className={styles.projectsWrapper}>
                        <ProjectItem
                            name={"Gothenburg"}
                            creationDate={"11-02-2022"}
                            city={"gothenburg"}
                        />
                        <ProjectItem
                            name={"Vienna"}
                            creationDate={"15-03-2023"}
                            city={"vienna"}
                        />
                        <ProjectItem
                            name={"Rennes"}
                            creationDate={"25-08-2023"}
                            city={"rennes"}
                        />
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.descriptionText}>
                        CREATE tool supports you to analysis material stock inventory in
                        Gothenburg, Vienna and Rennes by customizing material sourcing
                        solutions tailored to the needs of users.
                        <br></br>
                        <br></br>
                        CREATE provides material stock inventory both at building and
                        component layer (last one is currently just available for
                        Gothenburg city). Due to limitation in acquiring the material
                        quality and the accurate availability time, this tool allows
                        property owners to enter/modify data to improve and enrich the
                        inventory database. For those editable values, default data will
                        be shown in black or grey (if they are based on general
                        assumption) while project specific data or owner entered/changed
                        data will be shown in green.
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "",
                                width: "150px",
                                padding: "10px"
                            }}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "#02b876", width: "150px", padding: "10px" }}
                            onClick={handleCreateNewProject}
                        >
                            Create a new project
                        </Button>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: "#8a2be2", width: "150px", padding: "10px" }}
                            onClick={handleTutorial} // Adaugă onClick pentru Tutorial
                        >
                            Tutorial/User manual
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
