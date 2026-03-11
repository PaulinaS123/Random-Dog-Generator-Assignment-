# Random-Dog-Generator-Assignment

# Random Dog Generator (React API Integration)

## Project Overview

This project is a small React web application that integrates with a third-party API to display random dog images. The goal of this assignment was to practice working with external APIs, understanding API documentation, and dynamically displaying data in a React application.

The application fetches a random dog image from the Dog CEO API and displays it on the screen when the user clicks a button.

---

## API Used

This project uses the **Dog CEO API**, which provides free access to random dog images.

API Endpoint Used:

https://dog.ceo/api/breeds/image/random

Example API Response:

```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
```

The application extracts the **image URL from the "message" field** and renders the image in the interface.

---

## Features

* Fetches random dog images from a third-party API
* Displays the image dynamically in the UI
* Allows users to generate multiple random dogs
* Includes simple error handling if the API request fails
* Clean centered layout with responsive styling

---

## Technologies Used

* React
* JavaScript (ES6+)
* Vite
* CSS
* Fetch API

---

## Project Structure

```
dog-api-app
│
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## How to Run the Application

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/random-dog-generator.git
```

2. Navigate to the project folder

```
cd random-dog-generator
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

5. Open the local development URL displayed in the terminal.

---

## How the Application Works

1. The user clicks the **"Get Random Dog"** button.
2. The application sends a request to the Dog CEO API using `fetch()`.
3. The API returns a JSON response containing a dog image URL.
4. React updates the component state with the new image URL.
5. The image is rendered dynamically on the page.

---

## Example Code for API Request

```javascript
const getDog = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogImage(data.message);
  } catch (error) {
    setError("Failed to load dog image.");
  }
};
```

This function fetches data from the API and updates the state so React re-renders the image.

---

## Test Cases

### Normal Test Cases

1. Click the **Get Random Dog** button
   Expected Result: A random dog image appears.

2. Click the button multiple times
   Expected Result: A new random dog image loads each time.

3. Refresh the page and click the button again
   Expected Result: The application successfully fetches and displays another image.

---

### Edge Test Cases

1. Internet connection disabled
   Expected Result: The application displays an error message.

2. API response delay
   Expected Result: The application still loads the image once the response is received.

3. API returns invalid data
   Expected Result: The application handles the error without crashing.

---

## Challenges Encountered

One challenge encountered during this project was learning how to correctly fetch data from an API and update the React state. Understanding how asynchronous functions (`async/await`) work was important to make sure the application handled API responses properly.

Another challenge was properly styling the application so the layout was centered and visually clean.

---

## Key Learning Outcomes

Through this assignment, I learned how to:

* Read and understand API documentation
* Integrate third-party APIs into a React application
* Work with asynchronous JavaScript using `fetch()` and `async/await`
* Manage application state in React
* Dynamically render external data in a user interface
* Implement basic error handling
* Structure a small React application using Vite

---

## Future Improvements

Possible improvements for this application include:

* Adding a loading spinner while the API request is in progress
* Allowing users to filter dogs by breed
* Adding animations or transitions when images change
* Improving the UI with a more advanced design system

---
## Video Demonstrtion 
**Youtube Link**: https://youtu.be/tYyQf0NRk3c


