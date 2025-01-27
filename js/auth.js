// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(`Login failed. Status: ${response.status}, Message: ${errorDetails.message}`);
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            window.location.href = 'home.html';
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed. Please try again.');
        }
    });
}

// Handle registration form submission
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(`Registration failed. Status: ${response.status}, Message: ${errorDetails.message}`);
            }

            alert('Registration successful! Please login.');
            window.location.href = 'index.html'; // Redirect to login page
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering. Please try again.');
        }
    });
}
