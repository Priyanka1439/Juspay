# Components

This folder contains all the reusable components for the E-Commerce Dashboard.

## Component Structure

```
components/
├── index.js              # Exports all components
├── Sidebar.js            # Left navigation sidebar
├── Header.js             # Top header with search and theme toggle
├── KPICards.js           # Key Performance Indicator cards
├── Charts.js             # All chart components (Bar, Line, Pie charts)
├── TopProductsTable.js   # Top selling products table
├── RightSidebar.js       # Right sidebar with notifications and activities
└── README.md             # This file
```

## Components Overview

### Sidebar.js
- **Purpose**: Left navigation sidebar with menu items
- **Features**: 
  - ByeWind branding
  - Navigation sections (Favorites, Recently, Pages)
  - Account, Corporate, Blog, Social categories
- **Props**: None (static component)

### Header.js
- **Purpose**: Top header bar with search and controls
- **Features**:
  - Breadcrumb navigation
  - Search bar with keyboard shortcut
  - Theme toggle button
  - Notifications badge
  - User profile icon
- **Props**:
  - `onToggleTheme`: Function to toggle theme
  - `isDarkMode`: Boolean indicating current theme
  - `onDrawerToggle`: Function to toggle mobile drawer

### KPICards.js
- **Purpose**: Display key performance indicators
- **Features**:
  - Customers, Orders, Revenue, Growth metrics
  - Trend indicators with up/down arrows
  - Color-coded chips for changes
- **Props**: None (uses static data)

### Charts.js
- **Purpose**: All chart visualizations
- **Features**:
  - Projections vs Actuals (Bar Chart)
  - Revenue Trends (Line Chart)
  - Revenue by Location (Map placeholder)
  - Total Sales (Donut Chart)
- **Props**: None (uses static data)

### TopProductsTable.js
- **Purpose**: Display top selling products in a table
- **Features**:
  - Product name, price, quantity, amount
  - Responsive table design
- **Props**: None (uses static data)

### RightSidebar.js
- **Purpose**: Right sidebar with notifications and activities
- **Features**:
  - Notifications feed
  - Activities timeline
  - Contacts directory with avatars
- **Props**: None (uses static data)

## Usage

All components are exported from the main `index.js` file:

```javascript
import { Sidebar, Header, KPICards, Charts, TopProductsTable, RightSidebar } from './components';
```

## Dependencies

- **Material-UI**: All components use Material-UI components
- **Recharts**: Charts component uses Recharts for data visualization
- **React**: All components are React functional components

## Styling

All components use Material-UI's `sx` prop for styling and are fully responsive. The components automatically adapt to the current theme (light/dark mode).

## Future Enhancements

- Add prop validation with PropTypes
- Make components more configurable with props
- Add loading states and error handling
- Implement real-time data updates
- Add animation and transitions
