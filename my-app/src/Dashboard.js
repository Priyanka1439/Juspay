import React, { useState, useEffect } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Sidebar, Header, RightSidebar, DefaultPage, OrderListPage } from './components';

const drawerWidth = 280;

const Dashboard = ({ onToggleTheme, isDarkMode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    const [mobileOpen, setMobileOpen] = useState(false);
    const [desktopOpen, setDesktopOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('default');

    const handleDrawerToggle = () => {
        // On mobile/tablet, close right sidebar when opening left sidebar
        if (isMobile || isTablet) {
            if (!mobileOpen) {
                setRightSidebarOpen(false);
            }
        }
        setMobileOpen(!mobileOpen);
        setDesktopOpen(!desktopOpen);
    };

    const handleRightSidebarToggle = () => {
        // On mobile/tablet, close left sidebar when opening right sidebar
        if (isMobile || isTablet) {
            if (!rightSidebarOpen) {
                setMobileOpen(false);
                setDesktopOpen(false);
            }
        }
        setRightSidebarOpen(!rightSidebarOpen);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle window resize to close mobile drawers when switching to desktop
    useEffect(() => {
        if (!isMobile && !isTablet) {
            setMobileOpen(false);
        }
    }, [isMobile, isTablet]);

    const renderPage = () => {
        switch (currentPage) {
            case 'orderList':
                return <OrderListPage isDarkMode={isDarkMode} />;
            case 'default':
            default:
                return <DefaultPage isDarkMode={isDarkMode} />;
        }
    };

    return (
        <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
            {/* Left Sidebar - Desktop Only */}
            <Box
                component="aside"
                sx={{
                    display: { xs: 'none', md: desktopOpen ? 'block' : 'none' },
                    width: drawerWidth,
                    flexShrink: 0,
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflowY: 'auto',
                    backgroundColor: '#ffffff',
                    borderRight: '1px solid #e0e0e0',
                    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 1
                }}
            >
                <Sidebar
                    isDarkMode={isDarkMode}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </Box>

            {/* Main Content Area (includes header and content) */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: {
                        xs: '100%',
                        sm: rightSidebarOpen ? 'calc(100% - 300px)' : '100%',
                        md: desktopOpen && rightSidebarOpen ? 'calc(100% - 580px)' :
                            desktopOpen ? 'calc(100% - 280px)' :
                                rightSidebarOpen ? 'calc(100% - 300px)' : '100%'
                    },
                    transition: 'width 0.3s ease',
                    height: { xs: '100vh', sm: '100vh' },
                    overflow: 'hidden',
                    minWidth: 0, // Prevents flex item from overflowing
                    maxWidth: { xs: '100%', sm: 'none' } // Ensure content doesn't overflow on mobile
                }}
            >
                {/* Header */}
                <Header
                    onToggleTheme={onToggleTheme}
                    isDarkMode={isDarkMode}
                    onDrawerToggle={handleDrawerToggle}
                    drawerOpen={desktopOpen}
                    onRightSidebarToggle={handleRightSidebarToggle}
                    rightSidebarOpen={rightSidebarOpen}
                />

                {/* Content */}
                {renderPage()}
            </Box>

            {/* Right Sidebar - Desktop Only */}
            <Box
                component="aside"
                sx={{
                    display: { xs: 'none', sm: rightSidebarOpen ? 'block' : 'none' },
                    width: 350,
                    flexShrink: 0,
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflowY: 'auto',
                    backgroundColor: '#ffffff',
                    borderLeft: '1px solid #e0e0e0',
                    padding: '5px',
                    boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <RightSidebar isDarkMode={isDarkMode} onClose={handleRightSidebarToggle} />
            </Box>

            {/* Mobile/Tablet Left Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    zIndex: 1300,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: { xs: '100%', sm: drawerWidth },
                        maxWidth: { xs: '280px', sm: drawerWidth }
                    },
                }}
            >
                <Sidebar
                    isDarkMode={isDarkMode}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    onClose={handleDrawerToggle}
                />
            </Drawer>

            {/* Mobile/Tablet Right Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={rightSidebarOpen && (isMobile || isTablet)}
                onClose={handleRightSidebarToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    zIndex: 1300,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: { xs: '100%', sm: 350 },
                        maxWidth: { xs: '350px', sm: 350 },
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        height: '100vh'
                    },
                }}
            >
                <RightSidebar
                    isDarkMode={isDarkMode}
                    onClose={handleRightSidebarToggle}
                />
            </Drawer>
        </Box>
    );
};

export default Dashboard;
