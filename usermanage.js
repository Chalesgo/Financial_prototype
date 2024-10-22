document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    
    // Load users from localStorage
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userTableBody.innerHTML = '';
        users.forEach((user, index) => {
            const row = userTableBody.insertRow();
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
        });
    }

    // Add user to localStorage
    document.getElementById('userForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, password, role });
        localStorage.setItem('users', JSON.stringify(users));

        loadUsers();
        document.getElementById('userForm').reset();
    });

    // Edit user
    window.editUser = function (index) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users[index];

        document.getElementById('username').value = user.username;
        document.getElementById('password').value = user.password;
        document.getElementById('role').value = user.role;

        deleteUser(index);
    };

    // Delete user
    window.deleteUser = function (index) {
        const users = JSON.parse(localStorage.getItem('users'));
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    };

    loadUsers();  // Initialize user table on page load
});

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser || loggedInUser.role !== 'admin') {
        alert('Access denied. Admins only.');
        window.location.href = 'login.html';  // Redirect to login page if not an admin
    }
});
