# Technical Documentation

## Overview

This portfolio website was developed using HTML, CSS, and JavaScript.  
The project follows a structured folder organization to maintain clarity and separation of concerns.

The website was initially created in Assignment 1 and later enhanced in Assignment 2 by adding interactive and dynamic features.

---

## Technologies Used

- HTML5 – Structure of the website
- CSS3 – Styling and responsive design
- JavaScript (Vanilla JS) – Interactivity and dynamic behavior
- Git & GitHub – Version control and deployment

---

## Project Structure

assignment-2/
├── index.html  
├── css/styles.css  
├── js/script.js  
├── assets/images/  
├── docs/  

The project separates styling, scripting, and assets into dedicated folders to improve maintainability.

---

## Key Features

### 1. Responsive Design
- Layout adapts to desktop and mobile devices.
- Flexbox and CSS Grid are used for layout structure.
- Media queries adjust layout for smaller screens.

### 2. Dark/Light Mode
- Implemented using a class toggle on the body element.
- User preference is stored in localStorage.
- Color themes are handled through conditional CSS.

### 3. Scroll Animations
- Implemented using the IntersectionObserver API.
- Sections and project cards animate into view when scrolling.
- Observer configuration prevents flickering effects.

### 4. Active Navigation Highlight
- The current visible section is detected using IntersectionObserver.
- The corresponding navigation link receives an active class.

### 5. Accessibility – Font Size Control
- Root font size is modified dynamically using JavaScript.
- rem units are used for scalable typography.
- Buttons allow increasing and decreasing text size within limits.

### 6. Dynamic Project Filtering (Assignment 2)
- Projects are filtered based on selected categories (All, C#, Java, Design).
- Implemented using data attributes and JavaScript event listeners.
- Updates the displayed content dynamically without reloading the page.

### 7. Time-Based Greeting (Assignment 2)
- Displays a greeting message based on the current time of day.
- Uses JavaScript Date object to determine morning, afternoon, or evening.

### 8. Form Validation and User Feedback (Assignment 2)
- Validates user input in the contact form.
- Checks for empty fields and valid email format.
- Displays error and success messages dynamically.

### 9. Hover Animations (Assignment 2)
- Project and skill cards include hover effects.
- Uses CSS transitions for smooth scaling and shadow effects.
- Enhances interactivity and user experience.

### 10. Glass UI Design
- Achieved using backdrop-filter and semi-transparent backgrounds.
- Soft gradients and subtle shadows enhance visual depth.

---

## Performance Considerations

- Minimal external dependencies.
- No heavy frameworks used.
- Optimized images stored locally.
- Efficient event handling using IntersectionObserver.

---

## Browser Compatibility

The website was tested on:
- Google Chrome
- Microsoft Edge

It is responsive and functions across modern browsers.

---

## Future Improvements

- Add backend support for sending real emails from the contact form.
- Improve animation timing and transitions.
- Enhance accessibility features further.