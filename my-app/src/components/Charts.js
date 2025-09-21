import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import './styles/Charts.css';

const Charts = ({ isDarkMode = false }) => {
    const projectionsData = [
        { month: 'Jan', projections: 10, actuals: 12 },
        { month: 'Feb', projections: 15, actuals: 18 },
        { month: 'Mar', projections: 20, actuals: 22 },
        { month: 'Apr', projections: 25, actuals: 24 },
        { month: 'May', projections: 28, actuals: 30 },
        { month: 'Jun', projections: 30, actuals: 32 },
    ];

    const revenueData = [
        { month: 'Jan', current: 20, previous: 18 },
        { month: 'Feb', current: 22, previous: 20 },
        { month: 'Mar', current: 24, previous: 22 },
        { month: 'Apr', current: 26, previous: 24 },
        { month: 'May', current: 28, previous: 26 },
        { month: 'Jun', current: 30, previous: 28 },
    ];

    const locationData = [
        { name: 'New York', value: 72, color: '#1976d2' },
        { name: 'San Francisco', value: 39, color: '#dc004e' },
        { name: 'Sydney', value: 25, color: '#2e7d32' },
        { name: 'Singapore', value: 61, color: '#ed6c02' },
    ];

    const salesData = [
        { name: 'Direct', value: 300.56, color: '#1976d2' },
        { name: 'Affiliate', value: 135.18, color: '#dc004e' },
        { name: 'Sponsored', value: 154.02, color: '#2e7d32' },
        { name: 'E-mail', value: 48.96, color: '#ed6c02' },
    ];

    return (
        <>
            {/* Projections vs Actuals Chart */}
            <Grid item xs={12} md={8}>
                <Card className={`chart-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="chart-card-content">
                        <Typography variant="h6" gutterBottom className="chart-title">
                            Projections vs Actuals
                        </Typography>
                        <Box className="chart-container">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={projectionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                        domain={[0, 35]}
                                        tickFormatter={(value) => `${value}M`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                    <Bar dataKey="projections" stackId="a" fill="#3b82f6" name="Projections" radius={[0, 0, 4, 4]} />
                                    <Bar dataKey="actuals" stackId="a" fill="#1d4ed8" name="Actuals" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Revenue Chart */}
            <Grid item xs={12} md={4}>
                <Card className={`chart-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="chart-card-content">
                        <Typography variant="h6" gutterBottom className="chart-title">
                            Revenue
                        </Typography>
                        <Box className="chart-container">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={revenueData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="current" stroke="#1976d2" strokeWidth={2} name="Current Week $58,211" />
                                    <Line type="monotone" dataKey="previous" stroke="#dc004e" strokeWidth={2} strokeDasharray="5 5" name="Previous Week $68,768" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Revenue by Location */}
            <Grid item xs={12} md={6}>
                <Card className={`chart-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="chart-card-content">
                        <Typography variant="h6" gutterBottom className="chart-title">
                            Revenue by Location
                        </Typography>
                        <Box className="chart-container-small">
                            <Box className="chart-map-placeholder">
                                <LocationOn className="chart-map-icon" />
                                <Typography variant="h6" className="chart-map-title">
                                    World Map Visualization
                                </Typography>
                                <Typography variant="body2" className="chart-map-subtitle">
                                    Interactive map showing revenue by location
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="chart-location-list">
                            {locationData.map((location, index) => (
                                <Box key={index} className="chart-location-item">
                                    <Typography variant="body2" className="chart-location-name">{location.name}</Typography>
                                    <Typography variant="body2" className="chart-location-value">
                                        {location.value}K
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Total Sales Donut Chart */}
            <Grid item xs={12} md={6}>
                <Card className={`chart-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="chart-card-content">
                        <Typography variant="h6" gutterBottom className="chart-title">
                            Total Sales
                        </Typography>
                        <Box className="chart-donut-container">
                            <Box className="chart-donut-chart">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={salesData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {salesData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box className="chart-donut-legend">
                                <Typography variant="h4" align="center" className="chart-donut-percentage">
                                    38.6%
                                </Typography>
                                {salesData.map((item, index) => (
                                    <Box key={index} className="chart-legend-item">
                                        <Box
                                            className="chart-legend-dot"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <Typography variant="body2" className="chart-legend-name">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" className="chart-legend-value">
                                            ${item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default Charts;
