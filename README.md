## Blog Frontend

This is the **frontend** of the blog application, where users can register, log in, create posts, edit posts, delete posts, and view all posts. The frontend connects to the [Blog Backend API]([[https://github.com/your-backend-repo-link](https://github.com/AbdullaAlHarun/blog-backend-api)](https://github.com/AbdullaAlHarun/blog-backend-api)) for all server-side operations.

## Features
- User Registration
- User Login with JWT Authentication
- Display All Posts with User Names
- Create New Posts
- Edit Existing Posts
- Delete Posts
- Logout Functionality

## Technologies Used
- **HTML5**: Structure of the app.
- **CSS (TailwindCSS)**: Styling and responsiveness.
- **JavaScript (Vanilla)**: Frontend logic and API integration.
- **Vercel**: Deployment.

## Project Structure
```plaintext
/blog-frontend/
├── index.html          # Login page
├── register.html       # Registration page
├── home.html           # Home page (display posts)
├── createpost.html     # Create post page
├── editpost.html       # Edit post page
├── js/
│   ├── auth.js         # Handles login and registration
│   ├── posts.js        # Handles fetching, creating, editing, and deleting posts
├── css/
│   └── styles.css      # Optional custom styles
├── vercel.json         # Vercel deployment configuration
```

## Setup and Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/AbdullaAlHarun/blog-frontend.git
cd blog-frontend

## 2. Install Dependencies
This project uses TailwindCSS via CDN, so there’s no need for additional dependency installation.

## Running Locally
You can serve the index.html file locally using a simple HTTP server like Live Server or Python:

## Using VS Code Live Server
Open the project in VS Code.
Right-click on index.html and select Open with Live Server.
Then visit http://localhost:5500/index.html.

## Deployment
The project is deployed on Vercel.
You can view the live version here: Frontend Live URL.

## API Endpoints
This project integrates with the Blog Backend API. Below are the key endpoints used:

HTTP Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in a user
GET	/api/posts	Fetch all posts
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Edit an existing post
DELETE	/api/posts/:id	Delete a post

## How to Use
- Register: Go to the registration page (register.html) and create a new account.
- Login: Log in with your credentials on the login page (index.html).
- View Posts: After logging in, view all posts on the home page (home.html).
- Create Posts: Use the "Create Post" page (createpost.html) to add new content.
- Edit/Delete Posts: On the home page, edit or delete posts directly from the card options.

## Contributing
Contributions are welcome! If you'd like to contribute, feel free to fork the repository and submit a pull request.
