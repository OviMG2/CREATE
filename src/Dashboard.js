import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import { Button, TextField, Typography, Grid, InputAdornment, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'; // Importăm useNavigate

function Dashboard() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptConditions, setAcceptConditions] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Utilizăm useNavigate pentru a redirecționa

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
    
        if (!acceptConditions) {
          alert("You must accept the terms and conditions");
          return;
        }
    
        try {
          const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const result = await response.json();
          if (response.ok) {
            alert('Registration successful');
            navigate('/login');
          } else {
            alert(result.error || 'Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
    
      const handleClickShowPassword = () => setShowPassword((show) => !show);
    

    const handleSwitchToLogin = () => {
        // Logica pentru redirecționarea către pagina de login poate fi adăugată aici
        navigate('/login'); // Redirecționează către ruta '/login'
    }

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>CREATE</div>
                <span className={styles.description}>
                    Embedding advanced urban material stock methods within governance
                    processes to enable circular economy and cities resilience
                </span>
            </div>

            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                            <Typography variant="body1" className={styles.label}>
                                First Name
                            </Typography>
                                <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                autoFocus
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="body1" className={styles.label}>
                                    Last Name
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
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
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="body1" className={styles.label}>
                                    Confirm Password
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={acceptConditions}
                                            onChange={(e) => setAcceptConditions(e.target.checked)}
                                            name="acceptConditions"
                                            color="primary"
                                        />
                                    }
                                    label="Accept terms and conditions"
                                />
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Button type="submit" className={`${styles.signUpButton} customSignUpButton`}>
                                Submit
                            </Button>
                            {/* Butonul Back care va redirecționa către pagina de login */}
                            <Button onClick={handleSwitchToLogin} className={`${styles.signInButton} customSignInButton`}>
                                Back
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;
