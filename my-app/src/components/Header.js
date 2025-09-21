import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    InputAdornment,
    Badge,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Search,
    Notifications,
    LightMode,
    DarkMode,
    Star,
    History,
} from '@mui/icons-material';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import './styles/Header.css';

const Header = ({ onToggleTheme, isDarkMode, onDrawerToggle, drawerOpen = true, onRightSidebarToggle, rightSidebarOpen = true }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    console.log(isMobile, isTablet);
    return (
        <AppBar
            position="sticky"
            className={`header-appbar ${isDarkMode ? 'dark-theme' : ''}`}
            sx={{
                backgroundColor: '#ffffff',
                color: '#212121',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                borderBottom: '1px solid #e0e0e0',
                width: '100%',
                top: 0,
                zIndex: 1100,
                '&.dark-theme': {
                    backgroundColor: '#1e1e1e',
                    color: '#ffffff',
                }
            }}
        >
            <Toolbar
                className="header-toolbar"
                sx={{
                    minHeight: '64px !important',
                    padding: { xs: '0 16px', sm: '0 20px', md: '0 24px' },
                    justifyContent: 'space-between',
                    flexWrap: { xs: 'wrap', sm: 'nowrap' },
                    gap: { xs: 1, sm: 0 }
                }}
            >

                {/* Breadcrumb Section */}
                <Box
                    className="breadcrumb-container"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.5, sm: 1 },
                        flex: { xs: '1 1 auto', sm: '0 0 auto' },
                        minWidth: 0
                    }}
                >
                    <IconButton
                        color="#757575"
                        aria-label="toggle drawer"
                        edge="start"
                        className="breadcrumb-star"
                        onClick={onDrawerToggle}
                        sx={{
                            padding: { xs: 0.5, sm: 1 },
                            marginRight: { xs: 0.5, sm: 1 }
                        }}
                    >
                        <ViewSidebarIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                    </IconButton>
                    <Star className="breadcrumb-star" sx={{
                        fontSize: { xs: 16, sm: 20 },
                        display: { xs: 'none', sm: 'block' }
                    }} />
                    <Typography variant="body2" className="breadcrumb-text" sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        display: { xs: 'none', sm: 'block' }
                    }}>
                        Dashboards
                    </Typography>
                    <Typography variant="body2" className="breadcrumb-separator" sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        display: { xs: 'none', sm: 'block' }
                    }}>
                        /
                    </Typography>
                    <Typography variant="body2" className="breadcrumb-current" sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 600
                    }}>
                        Default
                    </Typography>
                </Box>

                {/* Right Icons */}
                <Box
                    className="right-icons-container"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.5, sm: 1, md: 1.5 },
                        marginLeft: 'auto',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        minWidth: 0
                    }}
                >
                    {/* Search Bar */}
                    <TextField
                        size="small"
                        placeholder="Search"
                        className="search-field"
                        sx={{
                            minWidth: { xs: '200px', sm: '300px', md: '400px' },
                            maxWidth: { xs: '100%', sm: '400px', md: '500px' },
                            flex: { xs: '1 1 100%', sm: '0 0 auto' },
                            order: { xs: 1, sm: 0 },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '24px',
                                backgroundColor: '#f5f5f5',
                                border: 'none',
                                boxShadow: 'none',
                                fontSize: { xs: '0.875rem', sm: '0.875rem' },
                                '&:hover': {
                                    backgroundColor: '#eeeeee',
                                },
                                '&.Mui-focused': {
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 0 0 1px #e0e0e0',
                                }
                            }
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search className="search-icon" sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Typography variant="caption" className="search-shortcut" sx={{
                                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                            display: { xs: 'none', sm: 'block' }
                                        }}>
                                            ⌘/
                                        </Typography>
                                    </InputAdornment>
                                ),
                            }
                        }}
                    />
                    <IconButton
                        color="inherit"
                        onClick={onToggleTheme}
                        className="right-icon-button"
                        sx={{
                            color: '#757575',
                            padding: { xs: '6px', sm: '8px' },
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            order: { xs: 2, sm: 0 },
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: '#212121',
                            }
                        }}
                    >
                        {isDarkMode ? <LightMode sx={{ fontSize: { xs: 18, sm: 20 } }} /> : <DarkMode sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                    </IconButton>

                    <IconButton
                        color="inherit"
                        className="right-icon-button"
                        sx={{
                            color: '#757575',
                            padding: { xs: '6px', sm: '8px' },
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            order: { xs: 3, sm: 0 },
                            display: { xs: 'none', sm: 'flex' },
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: '#212121',
                            }
                        }}
                    >
                        <History sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        className="right-icon-button"
                        sx={{
                            color: '#757575',
                            padding: { xs: '6px', sm: '8px' },
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            order: { xs: 4, sm: 0 },
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: '#212121',
                            }
                        }}
                    >
                        <Badge badgeContent={4} color="error">
                            <Notifications sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        </Badge>
                    </IconButton>

                    <IconButton
                        color="inherit"
                        onClick={onRightSidebarToggle}
                        className="right-icon-button"
                        sx={{
                            color: '#757575',
                            padding: { xs: '6px', sm: '8px' },
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            order: { xs: 5, sm: 0 },
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: '#212121',
                            }
                        }}
                    >
                        <ViewSidebarIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
