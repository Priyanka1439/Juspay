import React from 'react';
import { Grid, Card, CardContent, Box, Typography, Chip } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import './styles/KPICards.css';

const KPICards = ({ isDarkMode = false }) => {
    const kpiData = [
        { title: 'Customers', value: '3,781', change: '+11.01%', trend: 'up', color: '#1976d2' },
        { title: 'Orders', value: '1,219', change: '-0.03%', trend: 'down', color: '#dc004e' },
        { title: 'Revenue', value: '$695', change: '+15.03%', trend: 'up', color: '#2e7d32' },
        { title: 'Growth', value: '30.1%', change: '+6.08%', trend: 'up', color: '#ed6c02' },
    ];

    return (
        <>
            {kpiData.map((kpi, index) => (
                <Grid size={6} key={index}>
                    <Card className={`kpi-card ${isDarkMode ? 'dark-theme' : ''}`} sx={{ height: '100%' }}>
                        <CardContent className="kpi-card-content" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box className="kpi-card-main" sx={{ flexGrow: 1 }}>
                                    <Typography className="kpi-card-title" gutterBottom>
                                        {kpi.title}
                                    </Typography>
                                    <Typography variant="h4" component="div" className="kpi-card-value">
                                        {kpi.value}
                                    </Typography>
                                    <Chip
                                        label={kpi.change}
                                        className={`kpi-chip ${kpi.trend === 'up' ? 'success' : 'error'}`}
                                        size="small"
                                        icon={kpi.trend === 'up' ? <TrendingUp className="kpi-chip-icon" /> : <TrendingDown className="kpi-chip-icon" />}
                                    />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default KPICards;
