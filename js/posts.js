const token = localStorage.getItem('token');

// Redirect to login if token is not available
if (!token) {
    alert("Unauthorized access. Please login.");
    window.location.href = 'index.html';
}

// Function to fetch and display posts on home page
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('/api/posts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }

        const posts = await response.json();
        const postsContainer = document.getElementById('postsContainer');
        
        postsContainer.innerHTML = ''; // Clear previous posts

        if (!Array.isArray(posts) || posts.length === 0) {
            postsContainer.innerHTML = "<p class='text-center text-gray-500'>No posts available.</p>";
            return;
        }

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'p-4 bg-white rounded shadow mb-4';
            postEl.innerHTML = `
                <h2 class="text-xl font-bold">${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postEl);
        });

    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('postsContainer').innerHTML = "<p class='text-center text-red-500'>Failed to load posts.</p>";
    }
}

// Check if we're on the home page and fetch posts
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('postsContainer')) {
        fetchAndDisplayPosts();
    }
});

// Function to handle post submission (Create Post Page)
async function createPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert('Please fill in all fields');
        return;
    }

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create post');
        }

        alert('Post created successfully!');
        window.location.href = 'home.html';  // Redirect to home page after creation

    } catch (error) {
        console.error('Error creating post:', error);
        alert('Error creating post. Please try again.');
    }
}

// Attach event listener to the create post form
if (document.getElementById('postForm')) {
    document.getElementById('postForm').addEventListener('submit', createPost);
}

// Logout functionality
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});
