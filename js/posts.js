const token = localStorage.getItem('token');

// Function to handle post submission
document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

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

        const data = await response.json();
        alert('Post created successfully!');
        window.location.href = 'home.html';  // Redirect to home page after creating the post

    } catch (error) {
        console.error('Error creating post:', error);
        alert('Error creating post. Please try again.');
    }
});

// Function to fetch and display posts on home page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/posts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        const posts = await response.json();
        const postsContainer = document.getElementById('postsContainer');

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'p-4 bg-white rounded shadow';
            postEl.innerHTML = `<h2 class="text-xl font-bold">${post.title}</h2><p>${post.content}</p>`;
            postsContainer.appendChild(postEl);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});

// Logout functionality
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});
