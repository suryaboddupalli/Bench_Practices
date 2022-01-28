import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Card() {
    return (

        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{
                                pt: '56.25%',
                            }}
                            image="https://source.unsplash.com/random"
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography>
                                Title
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">open</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Container>
        </main>

    );
}