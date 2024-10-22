// Simulated database for users
let users = {
    'admin': {
        password: 'adminpass',
        permissions: ['add', 'view', 'delete', 'reports'] // Admin has all permissions
    }
};

// Function to check login credentials
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (users[username] && users[username].password === password) {
        errorMessage.innerHTML = ''; // Clear error message
        if (username === 'admin') {
            document.getElementById('adminArea').style.display = 'block';
        } else {
            window.location.href = 'dashboard.html'; // Redirect regular users to the dashboard
        }
    } else {
        errorMessage.innerHTML = 'Invalid username or password.';
    }
});

// Admin creating new accounts with specific permissions
document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const permissions = [document.getElementById('permissions').value];

    if (!users[newUsername]) {
        users[newUsername] = {
            password: newPassword,
            permissions: permissions
        };

        alert(`User ${newUsername} created with ${permissions} permission.`);
        document.getElementById('createAccountForm').reset();
    } else {
        alert('Username already exists!');
    }
});
