TravelTrucks

Overview:
TravelTrucks is the front-end part of a web application designed for the rental of campers. Built using React and Vite, this application provides users with an intuitive interface to explore available campers, manage their favorites, and make bookings seamlessly.

Features:

- Multiple Pages: The application consists of several key pages:
  - Home Page: Features a banner with a primary call to action.
    ![home](https://files.fm/f/bztptpukm4)
  - Catalog Page: Displays all available campers with filtering options.
    ![catalog](https://files.fm/f/8w42tqybeu)
  - Favorites Page: Allows users to save campers they love (extra feature).
    ![favorites](https://files.fm/f/9zynkx4u85)
  - Individual Camper Page: Includes details, a photo gallery, user reviews, and a booking form.
    ![details](https://files.fm/f/emm7zmwdby)
    ![reviews](https://files.fm/f/gssg99h39e)

API Integration
The application uses a pre-built backend API available at MockAPI to manage camper listings.
Main Endpoints

- GET /campers: Retrieves all camper listings (can include filtering parameters).
- GET /campers/:id: Retrieves details for a specific camper by ID.
  Technical Stack

1. Frameworks and Libraries:
   - Vite: Used as the bundler for a fast development experience.
   - React: For building the user interface.
   - Redux: Manages the application state.
   - React Router: Handles routing between pages.
   - Axios: For making API requests.
   - CSS Modules: For styling components.
2. Routing:
   - / - Home Page.
   - /catalog - Catalog Page.
   - /catalog/:id - Individual Camper Page.
   - /favorites - Favorites Page.
   - - - NotFound.
3. State Management:
   _ Global state management using Redux to store the list of campers, filter states, and favorites.
   _ Reset previous search results before making new API requests to ensure data accuracy.
4. Dependencies
   The project utilizes several key libraries to enhance functionality:

- react-datepicker: For selecting dates in the booking form.
- react-hot-toast: For displaying notifications upon successful actions like bookings.
- react-loader-spinner: For showing loading indicators during asynchronous operations.
  Package.json Overview
  { ///
  "dependencies": {
  "@reduxjs/toolkit": "^2.3.0",
  "axios": "^1.7.7",
  "framer-motion": "^12.4.7",
  "modern-normalize": "^3.0.1",
  "normalize.css": "^8.0.1",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-loader-spinner": "^6.1.6",
  "react-redux": "^9.1.2",
  "react-router-dom": "^6.27.0",
  "redux-persist": "^6.0.0",
  "reselect": "^5.1.1",
  "styled-components": "^6.1.13",
  "styled-normalize": "^8.1.1"
  }, ///
  }

  Functionalities:

- Navigation: Users can click "View Now" on the home page to access the catalog.
- Filtering: Users can filter campers by:
  - Location (text input)
  - Amenities (multiple selections like -
    - Vehicle equipment -checkbox,
    - Vehicle type -radio button)
- Favorites: Users can add campers to a favorites list, which persists across page refreshes.
- Display Prices: Rental prices are displayed in a user-friendly format (e.g., €9,000.00).
- Detail Page Navigation: Users can click "Show more" on camper cards to view details.
- Load More: A button to fetch additional camper cards based on selected filters.
- User Reviews: Reviews displayed on the camper detail page with a 5-star rating system.
- Booking Form: Users can fill out a form with built-in calendar to book a camper, with a notification upon successful submission.

  Design:

- The application adheres to the provided design.
- The layout is primarily optimized for desktop.

  UI Kit:
  The design of the TravelTrucks application is guided by a UI Kit that includes:

- Colors: A defined color palette for consistent styling.
- Button Styles: Standardized button designs for actions like "Search" and "Load More."
- Form Elements: Input fields for user data, including a calendar for date selection and a dropdown for location.
- Icons: Common icons to represent features like air conditioning, bathroom, kitchen, and more.
  … Kit
  Links:
- Design mockup: https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1.
- MockAPI: https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers.
- Source Code: GitHub Repository https://github.com/dm-zhuk/test-02.
- Live Demo: Vercel.
