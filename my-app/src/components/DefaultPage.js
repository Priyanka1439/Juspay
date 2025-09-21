import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip as MuiTooltip } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { styled } from '@mui/material/styles';
import './styles/DefaultPage.css';

// const Item = styled(Box)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//         backgroundColor: '#1A2027',
//     }),
// }));

const KPICard = styled(Card)(({ theme, isHighlighted }) => ({
    height: '100%',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    backgroundColor: isHighlighted ? '#f0f9ff' : '#ffffff',
    border: isHighlighted ? '1px solid #e0f2fe' : '1px solid #f0f0f0',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)',
    },
}));

const DefaultPage = ({ isDarkMode }) => {
    return (
        <Box className={`default-page ${isDarkMode ? 'dark-theme' : ''}`}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#111827' }}>
                eCommerce
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} className='kpi-cards'>
                {/* Left Column - KPI Cards 2x2 */}
                <Grid size={{ xs: 12, md: 6 }} className='kpi-cards'>
                    <Grid container spacing={{ xs: 1, sm: 2 }}>
                        {/* Row 1 */}
                        <Grid size={{ xs: 6, sm: 6 }}>
                            <KPICard isHighlighted={true}>
                                <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            color: '#6b7280',
                                            fontSize: { xs: '12px', sm: '14px' },
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            mb: 1
                                        }}
                                    >
                                        Customers
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#111827',
                                            mb: 1,
                                            fontSize: { xs: '1.5rem', sm: '2rem' }
                                        }}
                                    >
                                        3,781
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingUp sx={{ fontSize: { xs: 14, sm: 16 }, color: '#10b981' }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#10b981',
                                                fontWeight: 600,
                                                fontSize: { xs: '12px', sm: '14px' }
                                            }}
                                        >
                                            +11.01%
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </KPICard>
                        </Grid>

                        <Grid size={{ xs: 6, sm: 6 }}>
                            <KPICard>
                                <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            color: '#6b7280',
                                            fontSize: { xs: '12px', sm: '14px' },
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            mb: 1
                                        }}
                                    >
                                        Orders
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#111827',
                                            mb: 1,
                                            fontSize: { xs: '1.5rem', sm: '2rem' }
                                        }}
                                    >
                                        1,219
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingDown sx={{ fontSize: { xs: 14, sm: 16 }, color: '#ef4444' }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#ef4444',
                                                fontWeight: 600,
                                                fontSize: { xs: '12px', sm: '14px' }
                                            }}
                                        >
                                            -0.03%
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </KPICard>
                        </Grid>

                        {/* Row 2 */}
                        <Grid size={{ xs: 6, sm: 6 }}>
                            <KPICard>
                                <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            color: '#6b7280',
                                            fontSize: { xs: '12px', sm: '14px' },
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            mb: 1
                                        }}
                                    >
                                        Revenue
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#111827',
                                            mb: 1,
                                            fontSize: { xs: '1.5rem', sm: '2rem' }
                                        }}
                                    >
                                        $695
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingUp sx={{ fontSize: { xs: 14, sm: 16 }, color: '#10b981' }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#10b981',
                                                fontWeight: 600,
                                                fontSize: { xs: '12px', sm: '14px' }
                                            }}
                                        >
                                            +15.03%
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </KPICard>
                        </Grid>

                        <Grid size={{ xs: 6, sm: 6 }}>
                            <KPICard isHighlighted={true}>
                                <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            color: '#6b7280',
                                            fontSize: { xs: '12px', sm: '14px' },
                                            fontWeight: 500,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            mb: 1
                                        }}
                                    >
                                        Growth
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#111827',
                                            mb: 1,
                                            fontSize: { xs: '1.5rem', sm: '2rem' }
                                        }}
                                    >
                                        30.1%
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <TrendingUp sx={{ fontSize: { xs: 14, sm: 16 }, color: '#10b981' }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#10b981',
                                                fontWeight: 600,
                                                fontSize: { xs: '12px', sm: '14px' }
                                            }}
                                        >
                                            +6.08%
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </KPICard>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right Column - Bar Chart */}
                <Grid size={{ xs: 12, md: 6 }} className='kpi-cards'>
                    <Card sx={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #f0f0f0',
                        height: '100%'
                    }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.125rem' },
                                    fontWeight: 600,
                                    mb: { xs: 2, sm: 2.5 },
                                    color: '#111827'
                                }}
                            >
                                Projections vs Actuals
                            </Typography>
                            <Box sx={{ height: { xs: 250, sm: 300, md: 350 }, flexGrow: 1 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={[
                                        { month: 'Jan', projections: 10, actuals: 12 },
                                        { month: 'Feb', projections: 15, actuals: 18 },
                                        { month: 'Mar', projections: 20, actuals: 22 },
                                        { month: 'Apr', projections: 25, actuals: 24 },
                                        { month: 'May', projections: 28, actuals: 30 },
                                        { month: 'Jun', projections: 30, actuals: 32 },
                                    ]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            </Grid>

            {/* Revenue Charts Row */}
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
                {/* Revenue Line Chart */}
                <Grid size={{ xs: 12, lg: 8 }}>
                    <Card sx={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #f0f0f0',
                        height: { xs: '350px', sm: '400px' }
                    }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: { xs: 'flex-start', sm: 'center' },
                                mb: 3,
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 2, sm: 0 }
                            }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: '1.125rem', sm: '1.25rem' },
                                        fontWeight: 600,
                                        color: '#111827'
                                    }}
                                >
                                    Revenue
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    gap: { xs: 2, sm: 3 },
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    width: { xs: '100%', sm: 'auto' }
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Box sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            backgroundColor: '#000000'
                                        }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '14px' }}>
                                            Current Week
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#111827', fontWeight: 600, fontSize: '14px' }}>
                                            $58,211
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Box sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            backgroundColor: '#3b82f6'
                                        }} />
                                        <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '14px' }}>
                                            Previous Week
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#111827', fontWeight: 600, fontSize: '14px' }}>
                                            $68,768
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ height: { xs: 200, sm: 250, md: 300 }, flexGrow: 1 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={[
                                        { month: 'Jan', currentWeek: 12, previousWeek: 7 },
                                        { month: 'Feb', currentWeek: 10, previousWeek: 17 },
                                        { month: 'Mar', currentWeek: 7, previousWeek: 12 },
                                        { month: 'Apr', currentWeek: 10, previousWeek: 9 },
                                        { month: 'May', currentWeek: 15, previousWeek: 18 },
                                        { month: 'Jun', currentWeek: 20, previousWeek: 23 },
                                    ]} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
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
                                            domain={[0, 30]}
                                            tickFormatter={(value) => `${value}M`}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#ffffff',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            }}
                                            formatter={(value, name) => [`${value}M`, name === 'currentWeek' ? 'Current Week' : 'Previous Week']}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="currentWeek"
                                            stroke="#000000"
                                            strokeWidth={3}
                                            dot={false}
                                            strokeDasharray="5 5"
                                            name="Current Week"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="previousWeek"
                                            stroke="#3b82f6"
                                            strokeWidth={3}
                                            dot={false}
                                            name="Previous Week"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Revenue by Location */}
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Card sx={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #f0f0f0',
                        height: { xs: 'auto', lg: '400px' }
                    }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: '1.125rem', sm: '1.25rem' },
                                        fontWeight: 600,
                                        color: '#111827',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-8px',
                                            left: 0,
                                            width: '40px',
                                            height: '3px',
                                            backgroundColor: '#8b5cf6',
                                            borderRadius: '2px'
                                        }
                                    }}
                                >
                                    Revenue by Location
                                </Typography>
                            </Box>

                            {/* World Map Placeholder */}
                            <Box sx={{
                                height: { xs: 100, sm: 120 },
                                backgroundColor: '#f8fafc',
                                borderRadius: '8px',
                                mb: 3,
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
                                    position: 'relative'
                                }}>
                                    {/* Simplified world map representation */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '20%',
                                        left: '15%',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#000000',
                                        border: '2px solid #ffffff',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }} />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '25%',
                                        left: '8%',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#000000',
                                        border: '2px solid #ffffff',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }} />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '60%',
                                        left: '75%',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#000000',
                                        border: '2px solid #ffffff',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }} />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '70%',
                                        left: '85%',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#000000',
                                        border: '2px solid #ffffff',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }} />
                                </Box>
                            </Box>

                            {/* Location Revenue List */}
                            <Box sx={{ flexGrow: 1 }}>
                                {[
                                    { location: 'New York', revenue: '72K', percentage: 100 },
                                    { location: 'Singapore', revenue: '61K', percentage: 85 },
                                    { location: 'San Francisco', revenue: '39K', percentage: 54 },
                                    { location: 'Sydney', revenue: '25K', percentage: 35 }
                                ].map((item, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                            <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '14px' }}>
                                                {item.location}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#111827', fontWeight: 600, fontSize: '14px' }}>
                                                {item.revenue}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            width: '100%',
                                            height: '6px',
                                            backgroundColor: '#f0f0f0',
                                            borderRadius: '3px',
                                            overflow: 'hidden'
                                        }}>
                                            <Box sx={{
                                                width: `${item.percentage}%`,
                                                height: '100%',
                                                backgroundColor: '#3b82f6',
                                                borderRadius: '3px',
                                                transition: 'width 0.3s ease'
                                            }} />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Bottom Row - Top Selling Products and Total Sales */}
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
                {/* Top Selling Products Table */}
                <Grid size={{ xs: 12, lg: 8 }}>
                    <Card sx={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #f0f0f0'
                    }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                                    fontWeight: 600,
                                    color: '#111827',
                                    mb: 3
                                }}
                            >
                                Top Selling Products
                            </Typography>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#f8fafc' }}>
                                            <TableCell sx={{
                                                fontWeight: 600,
                                                color: '#6b7280',
                                                fontSize: '14px',
                                                borderBottom: '1px solid #e5e7eb',
                                                py: 2
                                            }}>
                                                Name
                                            </TableCell>
                                            <TableCell sx={{
                                                fontWeight: 600,
                                                color: '#6b7280',
                                                fontSize: '14px',
                                                borderBottom: '1px solid #e5e7eb',
                                                py: 2,
                                                textAlign: 'right'
                                            }}>
                                                Price
                                            </TableCell>
                                            <TableCell sx={{
                                                fontWeight: 600,
                                                color: '#6b7280',
                                                fontSize: '14px',
                                                borderBottom: '1px solid #e5e7eb',
                                                py: 2,
                                                textAlign: 'right'
                                            }}>
                                                <MuiTooltip title="Himanshu Sahu" placement="top">
                                                    <span style={{ cursor: 'help' }}>Quantity</span>
                                                </MuiTooltip>
                                            </TableCell>
                                            <TableCell sx={{
                                                fontWeight: 600,
                                                color: '#6b7280',
                                                fontSize: '14px',
                                                borderBottom: '1px solid #e5e7eb',
                                                py: 2,
                                                textAlign: 'right'
                                            }}>
                                                Amount
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {[
                                            {
                                                name: 'ASOS Ridley High Waist',
                                                price: '$79.49',
                                                quantity: '6.5',
                                                amount: '$518.18'
                                            },
                                            {
                                                name: 'Marco Lightweight Shirt',
                                                price: '$128.50',
                                                quantity: '37',
                                                amount: '$4,754.50'
                                            },
                                            {
                                                name: 'Half Sleeve Shirt',
                                                price: '$39.99',
                                                quantity: '64',
                                                amount: '$2,559.36'
                                            },
                                            {
                                                name: 'Lightweight Jacket',
                                                price: '$20.00',
                                                quantity: '184',
                                                amount: '$3,680.00'
                                            },
                                            {
                                                name: 'Marco Shoes',
                                                price: '$79.49',
                                                quantity: '64',
                                                amount: '$1,965.81'
                                            }
                                        ].map((product, index) => (
                                            <TableRow
                                                key={index}
                                                hover
                                                sx={{
                                                    '&:hover': { backgroundColor: '#f8fafc' },
                                                    '&:last-child td': { borderBottom: 0 }
                                                }}
                                            >
                                                <TableCell sx={{
                                                    color: '#111827',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    py: 2,
                                                    borderBottom: '1px solid #f0f0f0'
                                                }}>
                                                    {product.name}
                                                </TableCell>
                                                <TableCell sx={{
                                                    color: '#111827',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    py: 2,
                                                    textAlign: 'right',
                                                    borderBottom: '1px solid #f0f0f0'
                                                }}>
                                                    {product.price}
                                                </TableCell>
                                                <TableCell sx={{
                                                    color: '#111827',
                                                    fontSize: '14px',
                                                    fontWeight: 500,
                                                    py: 2,
                                                    textAlign: 'right',
                                                    borderBottom: '1px solid #f0f0f0'
                                                }}>
                                                    {product.quantity}
                                                </TableCell>
                                                <TableCell sx={{
                                                    color: '#111827',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    py: 2,
                                                    textAlign: 'right',
                                                    borderBottom: '1px solid #f0f0f0'
                                                }}>
                                                    {product.amount}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Total Sales Donut Chart */}
                <Grid size={{ xs: 12, lg: 4 }}>
                    <Card sx={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #f0f0f0',
                        height: { xs: 'auto', lg: '100%' }
                    }}>
                        <CardContent sx={{ p: { xs: 2, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                                    fontWeight: 600,
                                    color: '#111827',
                                    mb: 3
                                }}
                            >
                                Total Sales
                            </Typography>

                            {/* Donut Chart */}
                            <Box sx={{
                                height: { xs: 150, sm: 180, md: 200 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { name: 'Direct', value: 300.56, color: '#000000' },
                                                { name: 'Affiliate', value: 135.18, color: '#10b981' },
                                                { name: 'Sponsored', value: 154.02, color: '#8b5cf6' },
                                                { name: 'E-mail', value: 48.96, color: '#3b82f6' }
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {[
                                                { name: 'Direct', value: 300.56, color: '#000000' },
                                                { name: 'Affiliate', value: 135.18, color: '#10b981' },
                                                { name: 'Sponsored', value: 154.02, color: '#8b5cf6' },
                                                { name: 'E-mail', value: 48.96, color: '#3b82f6' }
                                            ].map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#ffffff',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            }}
                                            formatter={(value) => [`$${value}`, '']}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>

                                {/* Center Label */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: '#374151',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                    color: '#ffffff',
                                    fontWeight: 600,
                                    fontSize: '14px'
                                }}>
                                    38.6%
                                </Box>
                            </Box>

                            {/* Legend */}
                            <Box sx={{ flexGrow: 1 }}>
                                {[
                                    { name: 'Direct', value: '$300.56', color: '#000000' },
                                    { name: 'Affiliate', value: '$135.18', color: '#10b981' },
                                    { name: 'Sponsored', value: '$154.02', color: '#8b5cf6' },
                                    { name: 'E-mail', value: '$48.96', color: '#3b82f6' }
                                ].map((item, index) => (
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        mb: 2
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                backgroundColor: item.color
                                            }} />
                                            <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '14px' }}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: '#111827', fontWeight: 600, fontSize: '14px' }}>
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DefaultPage;
