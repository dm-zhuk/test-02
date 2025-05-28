# TravelTrucks

## Overview

TravelTrucks is the front-end part of a web application designed for the rental
of campers. Built using React and Vite, this application provides users with an
intuitive interface to explore available campers, manage their favorites, and
make bookings seamlessly.

## Features

- **Multiple Pages**: The application consists of several key pages:

  - **Home Page**: Features a banner with a primary call to action.
    ![home](https://drive.google.com/uc?id=10hgM1DkBld-0gkpOHl3viZGyHUWHLQOQ)

  - **Catalog Page**: Displays all available campers with filtering options.
    ![catalog](https://drive.google.com/uc?id=1H_skK6DIYo7XKVyhOIhbNEtjVv-9TBFC)

  - **Favorites Page**: Allows users to save campers they love (extra feature).
    ![favorites](https://drive.google.com/uc?id=1vrfYeIANJkHjjwcZDcBRHXOEpfF9HYXL)

  - **Individual Camper Page**: Includes details, a photo gallery, user reviews,
    and a booking form.
    ![details](https://drive.google.com/uc?id=1kP-o02G2d-ncXpm9NToHGvGybbCNVwhH)
    ![reviews](https://drive.google.com/uc?id=1th4tZRnniCBswOtdHZKPFUzwa7QuVlzy)

## API Integration

The application uses a pre-built backend API available at MockAPI to manage
camper listings.

### Main Endpoints

- **GET /campers**: Retrieves all camper listings (can include filtering
  parameters).
- **GET /campers/:id**: Retrieves details for a specific camper by ID.

## Technical Stack

1. **Frameworks and Libraries**:

   - **Vite**: Used as the bundler for a fast development experience.
   - **React**: For building the user interface.
   - **Redux**: Manages the application state.
   - **React Router**: Handles routing between pages.
   - **Axios**: For making API requests.
   - **CSS Modules**: For styling components.

2. **Routing**:

   - `/` - Home Page.
   - `/catalog` - Catalog Page.
   - `/catalog/:id` - Individual Camper Page.
   - `/favorites` - Favorites Page.
   - `/404` - NotFound.

3. **State Management**:

   - Global state management using Redux to store the list of campers, filter
     states, and favorites.
   - Reset previous search results before making new API requests to ensure data
     accuracy.

4. **Dependencies**: The project utilizes several key libraries to enhance
   functionality:
   - `react-datepicker`: For selecting dates in the booking form.
   - `react-hot-toast`: For displaying notifications upon successful actions
     like bookings, filters, favorites applied.
   - `react-loader-spinner`: For showing loading indicators during asynchronous
     operations.

### Package.json Overview

![package-json](https://drive.google.com/uc?id=1NwHFzUj9X-ALWV2yDN401J83camvDl-U)

## Functionalities:

- **Navigation**: Users can click "View Now" on the home page to access the
  catalog.
- **Filtering**: Users can filter campers by:
  - Location (text input)
  - Amenities (multiple selections like vehicle equipment - checkbox, vehicle
    type - radio button)
- **Favorites**: Users can add campers to a favorites list, which persists
  across page refreshes.
- **Display Prices**: Rental prices are displayed in a user-friendly format
  (e.g., €9,000.00).
- **Detail Page Navigation**: Users can click "Show more" on camper cards to
  view details.
- **Load More**: A button to fetch additional camper cards based on selected
  filters.
- **User Reviews**: Reviews displayed on the camper detail page with a 5-star
  rating system.
- **Booking Form**: Users can fill out a form with a built-in calendar to book a
  camper, with a notification upon successful submission.

## Design:

- The application adheres to the provided design.
- The layout is primarily optimized for desktop.

## UI Kit:

The design of the TravelTrucks application is guided by a UI Kit that includes:

- **Colors**: A defined color palette for consistent styling.
- **Button Styles**: Standardized button designs for actions like "Search" and
  "Load More."
- **Form Elements**: Input fields for user data, including a calendar for date
  selection and a dropdown for location.
- **Icons**: Common icons to represent features like air conditioning, bathroom,
  kitchen, and more.
  ![ui-kit](https://drive.google.com/uc?id=1sTK3as_cnqiaCIzxcLcJKWLwp9OxLXg6)

## Links:

- **Design mockup**:
  [Figma Mockup](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1).
- **MockAPI**:
  [MockAPI Link](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers).
- **Source Code**: [GitHub Repository](https://github.com/dm-zhuk/test-02).
- **Live Demo**: [netlify.com](camperrental-222d1z.netlify.app).
