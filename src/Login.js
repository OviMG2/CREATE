import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss'; // import folosind module CSS
import { Button, TextField, Typography, Container, Grid, InputAdornment, IconButton } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            // Logica pentru înregistrare aici
        } else {
            if (username === "1" && password === "2") {
                localStorage.setItem('isAuthenticated', true); // Setăm autentificarea în localStorage
                navigate("/projects"); // Redirecționăm către pagina "Projects"
            } else {
                alert("Invalid username or password. Please try again.");
            }
        }
    };

    // const handleSwitchToSignUp = () => {
    //     setIsSignUp(true);
    // };
    const handleSwitchToSignUp = () => {
        setIsSignUp(true);
        localStorage.setItem('isAuthenticated', 'true'); // Setăm autentificarea în localStorage pentru a simula autentificarea după înregistrare
        navigate("/dashboard"); // Redirecționăm către Dashboard
    };

    const handleForgotPassword = () => {
        navigate("/forgot-password"); // Redirecționăm către pagina de resetare a parolei
    };
    

    const handleSwitchToLogin = () => {
        setIsSignUp(false);
    };


    return (
        <div className={styles.loginContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>CREATE</div>
                <span className={styles.description}>
                    Embedding advanced urban material stock methods within governance
                    processes to enable circular economy and cities resilience
                </span>
            </div>
            <Container component="main">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="body1" className={styles.label}>
                                Username/Email
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                name="username"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="body1" className={styles.label}>
                                Password
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button onClick={handleForgotPassword} className={styles.forgotPasswordLink}>
                                Forgot Password?
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Button type="submit" className={styles.signInButton}>
                                Sign In
                            </Button>
                            <Button onClick={handleSwitchToSignUp} className={styles.signUpButton}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}

export default Login;
