import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Avatar,
    IconButton,
    TextField,
    InputAdornment
} from '@mui/material';
import {
    Add,
    FilterList,
    Sort,
    Search,
    ContentCopy,
    MoreVert,
    ChevronLeft,
    ChevronRight
} from '@mui/icons-material';
import './styles/DefaultPage.css';

const OrderListPage = ({ isDarkMode }) => {
    const [selectedRows, setSelectedRows] = useState([3]); // Row 4 is selected by default
    const [currentPage, setCurrentPage] = useState(1);

    // Sample order data matching the image
    const orders = [
        {
            id: '#CM9801',
            user: 'Natali Craig',
            project: 'Landing Page',
            address: 'Meadow Lane Oakland',
            date: 'Just now',
            status: 'In Progress',
            statusColor: '#8b5cf6',
            avatar: 'NC'
        },
        {
            id: '#CM9802',
            user: 'Kate Morrison',
            project: 'CRM Admin pages',
            address: 'Larry San Francisco',
            date: 'A minute ago',
            status: 'Complete',
            statusColor: '#10b981',
            avatar: 'KM'
        },
        {
            id: '#CM9803',
            user: 'Kate Morrison',
            project: 'Landing Page',
            address: 'Larry San Francisco',
            date: '1 hour ago',
            status: 'Pending',
            statusColor: '#3b82f6',
            avatar: 'KM'
        },
        {
            id: '#CM9804',
            user: 'Kate Morrison',
            project: 'CRM Admin pages',
            address: 'Larry San Francisco',
            date: 'Yesterday',
            status: 'Approved',
            statusColor: '#f59e0b',
            avatar: 'KM',
            selected: true
        },
        {
            id: '#CM9805',
            user: 'Kate Morrison',
            project: 'Landing Page',
            address: 'Nest Lane Olivette',
            date: 'Feb 2, 2023',
            status: 'Rejected',
            statusColor: '#6b7280',
            avatar: 'KM',
            hasCopyIcon: true
        },
        {
            id: '#CM9806',
            user: 'Natali Craig',
            project: 'CRM Admin pages',
            address: 'Meadow Lane Oakland',
            date: 'Feb 1, 2023',
            status: 'In Progress',
            statusColor: '#8b5cf6',
            avatar: 'NC'
        },
        {
            id: '#CM9807',
            user: 'Kate Morrison',
            project: 'Landing Page',
            address: 'Larry San Francisco',
            date: 'Jan 31, 2023',
            status: 'Complete',
            statusColor: '#10b981',
            avatar: 'KM'
        },
        {
            id: '#CM9808',
            user: 'Natali Craig',
            project: 'CRM Admin pages',
            address: 'Meadow Lane Oakland',
            date: 'Jan 30, 2023',
            status: 'Pending',
            statusColor: '#3b82f6',
            avatar: 'NC'
        },
        {
            id: '#CM9809',
            user: 'Kate Morrison',
            project: 'Landing Page',
            address: 'Larry San Francisco',
            date: 'Jan 29, 2023',
            status: 'Approved',
            statusColor: '#f59e0b',
            avatar: 'KM'
        },
        {
            id: '#CM9810',
            user: 'Natali Craig',
            project: 'CRM Admin pages',
            address: 'Meadow Lane Oakland',
            date: 'Jan 28, 2023',
            status: 'Rejected',
            statusColor: '#6b7280',
            avatar: 'NC',
            hasMoreIcon: true
        }
    ];

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedRows(orders.map((_, index) => index));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (index) => {
        setSelectedRows(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const getStatusDot = (color) => (
        <Box sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: color,
            display: 'inline-block',
            mr: 1
        }} />
    );

    return (
        <Box className={`default-page ${isDarkMode ? 'dark-theme' : ''}`}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', fontSize: '1.5rem' }}>
                    Order List
                </Typography>
            </Box>

            {/* Toolbar */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                mb: 3,
                p: 2,
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 0 }
            }}>
                {/* Left side - Action buttons */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton sx={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        '&:hover': { backgroundColor: '#e5e7eb' }
                    }}>
                        <Add />
                    </IconButton>
                    <IconButton sx={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        '&:hover': { backgroundColor: '#e5e7eb' }
                    }}>
                        <FilterList />
                    </IconButton>
                    <IconButton sx={{
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        '&:hover': { backgroundColor: '#e5e7eb' }
                    }}>
                        <Sort />
                    </IconButton>
                </Box>

                {/* Right side - Search */}
                <TextField
                    placeholder="Search"
                    size="small"
                    sx={{
                        width: { xs: '100%', sm: 200 },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            backgroundColor: '#f9fafb',
                            '& fieldset': {
                                borderColor: '#d1d5db',
                            },
                            '&:hover fieldset': {
                                borderColor: '#9ca3af',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3b82f6',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#374151',
                            fontSize: '14px'
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search sx={{ color: '#9ca3af', fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Table */}
            <Paper sx={{
                width: '100%',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: 'none'
            }}>
                <TableContainer sx={{
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#c1c1c1',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#a8a8a8',
                    },
                }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f9fafb' }}>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '50px', sm: 'auto' }
                                }}>
                                    <Checkbox
                                        checked={selectedRows.length === orders.length}
                                        indeterminate={selectedRows.length > 0 && selectedRows.length < orders.length}
                                        onChange={handleSelectAll}
                                        sx={{
                                            color: '#9ca3af',
                                            '&.Mui-checked': { color: '#3b82f6' }
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '100px', sm: 'auto' }
                                }}>
                                    Order ID
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '120px', sm: 'auto' }
                                }}>
                                    User
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '120px', sm: 'auto' }
                                }}>
                                    Project
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '150px', sm: 'auto' }
                                }}>
                                    Address
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '100px', sm: 'auto' }
                                }}>
                                    Date
                                </TableCell>
                                <TableCell sx={{
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    borderBottom: '1px solid #e5e7eb',
                                    py: { xs: 1, sm: 2 },
                                    px: { xs: 1, sm: 3 },
                                    minWidth: { xs: '120px', sm: 'auto' }
                                }}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, index) => (
                                <TableRow
                                    key={order.id}
                                    hover
                                    selected={selectedRows.includes(index)}
                                    sx={{
                                        backgroundColor: selectedRows.includes(index) ? '#f3f4f6' : 'transparent',
                                        '&:hover': { backgroundColor: selectedRows.includes(index) ? '#f3f4f6' : '#f9fafb' },
                                        '&:last-child td': { borderBottom: 0 }
                                    }}
                                >
                                    <TableCell sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 3 } }}>
                                        <Checkbox
                                            checked={selectedRows.includes(index)}
                                            onChange={() => handleSelectRow(index)}
                                            sx={{
                                                color: '#9ca3af',
                                                '&.Mui-checked': { color: '#3b82f6' }
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{
                                        color: '#374151',
                                        fontSize: { xs: '12px', sm: '14px' },
                                        fontWeight: 500,
                                        py: { xs: 1, sm: 2 },
                                        px: { xs: 1, sm: 3 }
                                    }}>
                                        {order.id}
                                    </TableCell>
                                    <TableCell sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 3 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                                            <Avatar sx={{
                                                width: { xs: 24, sm: 32 },
                                                height: { xs: 24, sm: 32 },
                                                fontSize: { xs: '10px', sm: '12px' },
                                                fontWeight: 600,
                                                bgcolor: index % 2 === 0 ? '#3b82f6' : '#10b981'
                                            }}>
                                                {order.avatar}
                                            </Avatar>
                                            <Typography variant="body2" sx={{
                                                fontWeight: 500,
                                                color: '#374151',
                                                fontSize: { xs: '12px', sm: '14px' }
                                            }}>
                                                {order.user}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{
                                        color: '#374151',
                                        fontSize: { xs: '12px', sm: '14px' },
                                        py: { xs: 1, sm: 2 },
                                        px: { xs: 1, sm: 3 }
                                    }}>
                                        {order.project}
                                    </TableCell>
                                    <TableCell sx={{
                                        color: '#374151',
                                        fontSize: { xs: '12px', sm: '14px' },
                                        py: { xs: 1, sm: 2 },
                                        px: { xs: 1, sm: 3 }
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
                                                {order.address}
                                            </Typography>
                                            {order.hasCopyIcon && (
                                                <IconButton size="small" sx={{ p: 0.5 }}>
                                                    <ContentCopy sx={{ fontSize: { xs: 14, sm: 16 }, color: '#9ca3af' }} />
                                                </IconButton>
                                            )}
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{
                                        color: '#374151',
                                        fontSize: { xs: '12px', sm: '14px' },
                                        py: { xs: 1, sm: 2 },
                                        px: { xs: 1, sm: 3 }
                                    }}>
                                        {order.date}
                                    </TableCell>
                                    <TableCell sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 3 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {getStatusDot(order.statusColor)}
                                            <Typography variant="body2" sx={{
                                                color: order.statusColor,
                                                fontSize: { xs: '12px', sm: '14px' },
                                                fontWeight: 500
                                            }}>
                                                {order.status}
                                            </Typography>
                                            {order.hasMoreIcon && (
                                                <IconButton size="small" sx={{ p: 0.5, ml: 1 }}>
                                                    <MoreVert sx={{ fontSize: { xs: 14, sm: 16 }, color: '#9ca3af' }} />
                                                </IconButton>
                                            )}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* Pagination */}
            <Box sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                alignItems: 'center',
                mt: 3,
                gap: { xs: 0.5, sm: 1 },
                flexWrap: 'wrap'
            }}>
                <IconButton size="small" sx={{ color: '#9ca3af' }}>
                    <ChevronLeft />
                </IconButton>
                {[1, 2, 3, 4, 5].map((page) => (
                    <Box
                        key={page}
                        sx={{
                            width: { xs: 28, sm: 32 },
                            height: { xs: 28, sm: 32 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '6px',
                            backgroundColor: page === currentPage ? '#f3f4f6' : 'transparent',
                            border: page === currentPage ? '1px solid #d1d5db' : '1px solid transparent',
                            color: page === currentPage ? '#374151' : '#9ca3af',
                            fontSize: { xs: '12px', sm: '14px' },
                            fontWeight: page === currentPage ? 600 : 400,
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: page === currentPage ? '#f3f4f6' : '#f9fafb'
                            }
                        }}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </Box>
                ))}
                <IconButton size="small" sx={{ color: '#9ca3af' }}>
                    <ChevronRight />
                </IconButton>
            </Box>
        </Box>
    );
};

export default OrderListPage;
