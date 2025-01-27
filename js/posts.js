const token = localStorage.getItem('token');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/posts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

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

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});
