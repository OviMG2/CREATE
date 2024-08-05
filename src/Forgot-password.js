import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Grid, CircularProgress } from "@mui/material";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false); // Starea pentru a indica dacă email-ul a fost trimis
    const [isLoading, setIsLoading] = useState(false); // Starea pentru a indica încărcarea în timpul trimiterii

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulăm o încărcare pentru trimiterea email-ului
        setIsLoading(true);
        setTimeout(() => {
            // Aici ar trebui să adaugi logica pentru a trimite cererea de resetare a parolei către backend sau pentru a gestiona resetarea parolei
            console.log("Submit form for password reset with email:", email);
            // Exemplu simplu de marcarea că email-ul a fost trimis cu succes
            setIsEmailSent(true);
            setIsLoading(false);
        }, 2000); // Simulăm o întârziere de 2 secunde pentru trimiterea cererii
    };

    const handleBack = () => {
        navigate("/login"); // Redirecționează către pagina de login
    };

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography variant="h5">
                    Reset Password
                </Typography>
                {!isEmailSent ? (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={isLoading}
                                >
                                    {isLoading ? <CircularProgress size={24} /> : "Send Reset Link"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                ) : (
                    <div>
                        <Typography variant="body1" gutterBottom>
                            An email with instructions to reset your password has been sent to {email}.
                        </Typography>
                        <Button onClick={handleBack} variant="outlined" color="primary">
                            Back to Login
                        </Button>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default ForgotPassword;
