let users = [];

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const role = document.getElementById('role').value;

    const user = {
        username: username,
        password: password,
        role: role
    };

    users.push(user);

    displayUsers();
    document.getElementById('userForm').reset();
});

function displayUsers() {
    let userListHtml = '<h2>Users</h2>';
    userListHtml += '<ul>';
    users.forEach(user => {
        userListHtml += `<li>${user.username} (${user.role})</li>`;
    });
    userListHtml += '</ul>';

    document.getElementById('userList').innerHTML = userListHtml;
}
