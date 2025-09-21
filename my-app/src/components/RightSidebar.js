import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, IconButton, useTheme, useMediaQuery } from '@mui/material';
import {
    BugReport,
    PersonAdd,
    BroadcastOnPersonal,
    Person,
    Close
} from '@mui/icons-material';
import './styles/RightSidebar.css';

const RightSidebar = ({ isDarkMode = false, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const notifications = [
        { text: 'You have a bug that need', time: 'Just now', icon: <BugReport /> },
        { text: 'New user registered', time: '59 minutes ago', icon: <PersonAdd /> },
        { text: 'You have a bug that needs...', time: '12 hours ago', icon: <BugReport /> },
        { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', icon: <BroadcastOnPersonal /> },
    ];

    const activities = [
        { text: 'You have a bug that needs...', time: 'Just now', avatar: '/api/placeholder/32/32' },
        { text: 'Released a new version', time: '59 minutes ago', avatar: '/api/placeholder/32/32' },
        { text: 'Submitted a bug', time: '12 hours ago', avatar: '/api/placeholder/32/32' },
        { text: 'Modified A data in Page X', time: 'Today, 11:59 AM', avatar: '/api/placeholder/32/32' },
        { text: 'Deleted a page in Project X', time: 'Feb 2, 2023', avatar: '/api/placeholder/32/32' },
    ];

    const contacts = [
        { name: 'Natali Craig', avatar: '/api/placeholder/32/32' },
        { name: 'Drew Cano', avatar: '/api/placeholder/32/32' },
        { name: 'Orlando Diggs', avatar: '/api/placeholder/32/32' },
        { name: 'Andi Lane', avatar: '/api/placeholder/32/32' },
        { name: 'Kate Morrison', avatar: '/api/placeholder/32/32' },
        { name: 'Koray Okumus', avatar: '/api/placeholder/32/32' },
    ];

    return (
        <Box className="right-sidebar-container">
            {/* Header with Close Button for Mobile/Tablet */}
            {(isMobile || isTablet) && onClose && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                    borderBottom: '1px solid #e0e0e0',
                    marginBottom: 2
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
                        Sidebar
                    </Typography>
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
                </Box>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Notifications */}
                <Card className={`right-sidebar-card notifications-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="right-sidebar-card-content">
                        <Typography variant="h6" gutterBottom className="right-sidebar-title">
                            Notifications
                        </Typography>
                        {notifications.map((notification, index) => (
                            <Box key={index} className={`notification-item ${isDarkMode ? 'dark-theme' : ''}`}>
                                <Box className="notification-icon">
                                    {notification.icon}
                                </Box>
                                <Box className="notification-content">
                                    <Typography variant="body2" className="notification-text">
                                        {notification.text}
                                    </Typography>
                                    <Typography variant="caption" className="notification-time">
                                        {notification.time}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </CardContent>
                </Card>

                {/* Activities */}
                <Card className={`right-sidebar-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="right-sidebar-card-content">
                        <Typography variant="h6" gutterBottom className="right-sidebar-title">
                            Activities
                        </Typography>
                        <Box className="activities-timeline">
                            {activities.map((activity, index) => (
                                <Box key={index} className={`activity-item ${isDarkMode ? 'dark-theme' : ''}`}>
                                    <Box className="activity-avatar-container">
                                        <Avatar
                                            src={activity.avatar}
                                            className="activity-avatar"
                                            sx={{ width: 32, height: 32 }}
                                        >
                                            <Person />
                                        </Avatar>
                                        {index < activities.length - 1 && <Box className="timeline-line" />}
                                    </Box>
                                    <Box className="activity-content">
                                        <Typography variant="body2" className="activity-text">
                                            {activity.text}
                                        </Typography>
                                        <Typography variant="caption" className="activity-time">
                                            {activity.time}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>

                {/* Contacts */}
                <Card className={`right-sidebar-card ${isDarkMode ? 'dark-theme' : ''}`}>
                    <CardContent className="right-sidebar-card-content">
                        <Typography variant="h6" gutterBottom className="right-sidebar-title">
                            Contacts
                        </Typography>
                        {contacts.map((contact, index) => (
                            <Box key={index} className="contact-item">
                                <Avatar
                                    src={contact.avatar}
                                    className="contact-avatar"
                                    sx={{ width: 32, height: 32 }}
                                >
                                    {contact.name.split(' ').map(n => n[0]).join('')}
                                </Avatar>
                                <Typography variant="body2" className={`contact-name ${isDarkMode ? 'dark-theme' : ''}`}>
                                    {contact.name}
                                </Typography>
                            </Box>
                        ))}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default RightSidebar;
