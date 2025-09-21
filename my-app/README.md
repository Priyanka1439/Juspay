# E-Commerce Dashboard

A modern, responsive e-commerce dashboard built with React and Material-UI, featuring both light and dark themes.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes
- **Modern UI**: Clean, professional interface using Material-UI components
- **Interactive Charts**: Data visualization using Recharts library
- **Real-time Data**: KPI cards, charts, and tables with sample data
- **Navigation**: Collapsible sidebar with organized menu structure
- **Notifications**: Real-time notifications and activity feed
- **Contacts**: User contact management

## Components

### Main Dashboard
- **KPI Cards**: Customers, Orders, Revenue, and Growth metrics
- **Charts**: Projections vs Actuals (Bar Chart), Revenue Trends (Line Chart)
- **Data Tables**: Top Selling Products with pricing and quantities
- **Maps**: Revenue by Location visualization
- **Sales Analytics**: Donut chart showing sales distribution

### Sidebar Navigation
- **Favorites**: Overview and Projects
- **Recently Used**: Quick access to frequently used sections
- **Pages**: User Profile, Campaigns, Documents, etc.
- **Account Management**: User settings and preferences

### Right Sidebar
- **Notifications**: Real-time alerts and updates
- **Activities**: Recent user actions and system events
- **Contacts**: Team member directory with avatars

## Technology Stack

- **React 19.1.1**: Frontend framework
- **Material-UI 5**: Component library and theming
- **Recharts**: Data visualization and charts
- **Emotion**: CSS-in-JS styling
- **React Router**: Navigation (ready for implementation)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

## Theme Customization

The application supports both light and dark themes. You can customize the themes by modifying the `src/theme.js` file:

- **Light Theme**: Clean, bright interface with subtle shadows
- **Dark Theme**: Dark background with high contrast text and elements

## Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── App.js              # Main application component
├── Dashboard.js        # Main dashboard component
├── theme.js           # Theme configuration
├── index.js           # Application entry point
└── components/        # Reusable components
    ├── index.js       # Component exports
    ├── Sidebar.js     # Left navigation sidebar
    ├── Header.js      # Top header with search and theme toggle
    ├── KPICards.js    # Key Performance Indicator cards
    ├── Charts.js      # All chart components
    ├── TopProductsTable.js # Top selling products table
    ├── RightSidebar.js # Right sidebar with notifications
    └── README.md      # Components documentation
```

## Future Enhancements

- [ ] Real-time data integration
- [ ] User authentication
- [ ] Data filtering and search
- [ ] Export functionality
- [ ] Advanced chart interactions
- [ ] Mobile app version
- [ ] Internationalization support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.