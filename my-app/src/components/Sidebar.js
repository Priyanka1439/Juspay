import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Home,
    Folder,
    ShoppingCart,
    Dashboard as DashboardIcon,
    AccountCircle,
    Campaign,
    Description,
    Group,
    List as ListIcon,
    Close,
} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles/Sidebar.css';

const Sidebar = ({ isDarkMode = false, onPageChange, currentPage, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    // Helper function to create responsive ListItemButton
    const createListItemButton = (icon, text, page, isSelected = false) => (
        <ListItem disablePadding className="sidebar-list-item">
            <ListItemButton
                className="sidebar-list-item-button"
                onClick={() => onPageChange(page)}
                selected={isSelected}
                sx={{
                    padding: { xs: 1, sm: 1.5, md: 2 },
                    borderRadius: '8px',
                    margin: { xs: '1px 0', sm: '2px 0' },
                    minHeight: { xs: 40, sm: 44, md: 48 },
                    '&:hover': {
                        backgroundColor: '#f5f5f5',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        '&:hover': {
                            backgroundColor: '#e3f2fd',
                        }
                    }
                }}
            >
                <ListItemIcon
                    className="sidebar-list-item-icon"
                    sx={{
                        minWidth: { xs: 32, sm: 36, md: 40 },
                        color: isSelected ? '#1976d2' : '#757575',
                        justifyContent: 'center'
                    }}
                >
                    {React.cloneElement(icon, {
                        sx: { fontSize: { xs: 20, sm: 22, md: 24 } }
                    })}
                </ListItemIcon>
                <ListItemText
                    primary={text}
                    className="sidebar-list-item-text"
                    sx={{
                        '& .MuiListItemText-primary': {
                            color: isSelected ? '#1976d2' : '#212121',
                            fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.875rem' },
                            fontWeight: isSelected ? 600 : 400,
                            display: { xs: isMobile ? 'none' : 'block', sm: 'block' }
                        }
                    }}
                />
            </ListItemButton>
        </ListItem>
    );

    return (
        <Box
            className={`sidebar-container ${isDarkMode ? 'dark-theme' : ''}`}
            sx={{
                height: '100%',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                ...(isDarkMode && { backgroundColor: '#1e1e1e' })
            }}
        >
            <Box
                className="sidebar-header"
                sx={{
                    padding: { xs: 2, sm: 2, md: 2 },
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: { xs: 1, sm: 1, md: 1 },
                    minHeight: { xs: 56, sm: 64, md: 64 }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1, md: 1 } }}>
                    <AccountCircleIcon sx={{
                        fontSize: { xs: 24, sm: 28, md: 32 },
                        color: '#1976d2'
                    }} />
                    <Typography
                        variant="h6"
                        className="sidebar-logo"
                        sx={{
                            fontWeight: 'bold',
                            color: '#1976d2',
                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                            display: { xs: isMobile ? 'none' : 'block', sm: 'block' }
                        }}
                    >
                        ByeWind
                    </Typography>
                </Box>

                {/* Close Button for Mobile/Tablet */}
                {(isMobile || isTablet) && onClose && (
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: '#757575',
                            padding: 1,
                            '&:hover': {
                                backgroundColor: '#f5f5f5',
                                color: '#212121',
                            }
                        }}
                    >
                        <Close sx={{ fontSize: { xs: 20, sm: 22 } }} />
                    </IconButton>
                )}
            </Box>

            <List
                className="sidebar-list"
                sx={{
                    paddingLeft: { xs: 1, sm: 1, md: 1 },
                    paddingRight: { xs: 1, sm: 1, md: 1 },
                    flexGrow: 1,
                    overflowY: 'auto'
                }}
            >
                {createListItemButton(<Home />, "Overview", "default", currentPage === 'default')}
                {createListItemButton(<Folder />, "Projects", "default", false)}

                <Divider
                    className="sidebar-divider"
                    sx={{ margin: { xs: '4px 0', sm: '8px 0' } }}
                />

                <Typography
                    variant="subtitle2"
                    className="sidebar-section-title"
                    sx={{
                        paddingLeft: { xs: 2, sm: 2, md: 2 },
                        paddingRight: { xs: 2, sm: 2, md: 2 },
                        paddingTop: { xs: 1, sm: 1, md: 1 },
                        paddingBottom: { xs: 1, sm: 1, md: 1 },
                        color: '#757575',
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        fontWeight: 500,
                        display: { xs: isMobile ? 'none' : 'block', sm: 'block' }
                    }}
                >
                    Recently
                </Typography>

                {createListItemButton(<ShoppingCart />, "eCommerce", "default", currentPage === 'default')}
                {createListItemButton(<DashboardIcon />, "Dashboards", "default", false)}

                <Divider
                    className="sidebar-divider"
                    sx={{ margin: { xs: '4px 0', sm: '8px 0' } }}
                />

                <Typography
                    variant="subtitle2"
                    className="sidebar-section-title"
                    sx={{
                        paddingLeft: { xs: 2, sm: 2, md: 2 },
                        paddingRight: { xs: 2, sm: 2, md: 2 },
                        paddingTop: { xs: 1, sm: 1, md: 1 },
                        paddingBottom: { xs: 1, sm: 1, md: 1 },
                        color: '#757575',
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                        fontWeight: 500,
                        display: { xs: isMobile ? 'none' : 'block', sm: 'block' }
                    }}
                >
                    Pages
                </Typography>

                {createListItemButton(<ListIcon />, "Order List", "orderList", currentPage === 'orderList')}

                {['User Profile', 'Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'].map((text) => {
                    const icon = text === 'User Profile' ? <AccountCircle /> :
                        text === 'Campaigns' ? <Campaign /> :
                            text === 'Documents' ? <Description /> :
                                text === 'Followers' ? <Group /> : <Folder />;
                    return createListItemButton(icon, text, "default", false);
                })}

                <Divider
                    className="sidebar-divider"
                    sx={{ margin: { xs: '4px 0', sm: '8px 0' } }}
                />

                {['Account', 'Corporate', 'Blog', 'Social'].map((section) => (
                    <Typography
                        key={section}
                        variant="subtitle2"
                        className="sidebar-section-title"
                        sx={{
                            paddingLeft: { xs: 2, sm: 2, md: 2 },
                            paddingRight: { xs: 2, sm: 2, md: 2 },
                            paddingTop: { xs: 1, sm: 1, md: 1 },
                            paddingBottom: { xs: 1, sm: 1, md: 1 },
                            color: '#757575',
                            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                            fontWeight: 500,
                            display: { xs: isMobile ? 'none' : 'block', sm: 'block' }
                        }}
                    >
                        {section}
                    </Typography>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
