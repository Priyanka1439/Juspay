import React from 'react';
import { Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './styles/TopProductsTable.css';

const TopProductsTable = ({ isDarkMode = false }) => {
    const topProducts = [
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
    ];

    return (
        <Grid item xs={12} md={6}>
            <Card className={`products-card ${isDarkMode ? 'dark-theme' : ''}`}>
                <CardContent className="products-card-content">
                    <Typography variant="h6" gutterBottom className="products-title">
                        Top Selling Products
                    </Typography>
                    <TableContainer className="products-table-container">
                        <Table size="small" className="products-table">
                            <TableHead className={`products-table-head ${isDarkMode ? 'dark-theme' : ''}`}>
                                <TableRow>
                                    <TableCell className="products-table-cell">Name</TableCell>
                                    <TableCell align="right" className="products-table-cell products-table-cell-right">Price</TableCell>
                                    <TableCell align="right" className="products-table-cell products-table-cell-right">Quantity</TableCell>
                                    <TableCell align="right" className="products-table-cell products-table-cell-right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topProducts.map((product, index) => (
                                    <TableRow key={index} className={`products-table-row ${isDarkMode ? 'dark-theme' : ''}`}>
                                        <TableCell className={`products-table-cell-data ${isDarkMode ? 'dark-theme' : ''}`}>{product.name}</TableCell>
                                        <TableCell align="right" className={`products-table-cell-price ${isDarkMode ? 'dark-theme' : ''}`}>${product.price}</TableCell>
                                        <TableCell align="right" className={`products-table-cell-quantity ${isDarkMode ? 'dark-theme' : ''}`}>{product.quantity}</TableCell>
                                        <TableCell align="right" className={`products-table-cell-amount ${isDarkMode ? 'dark-theme' : ''}`}>${product.amount.toFixed(2)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TopProductsTable;
