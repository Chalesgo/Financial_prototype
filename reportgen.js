document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const categoryFilter = document.getElementById('categoryFilter').value;

    const financeEntries = JSON.parse(localStorage.getItem('financeEntries')) || [];

    const filteredEntries = financeEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        return (entryDate >= startDate && entryDate <= endDate) &&
               (categoryFilter === "" || entry.category === categoryFilter);
    });

    const reportTableBody = document.getElementById('reportTable').getElementsByTagName('tbody')[0];
    reportTableBody.innerHTML = ''; // Clear previous results

    filteredEntries.forEach(entry => {
        const row = reportTableBody.insertRow();
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.productName}</td>
            <td>${entry.category}</td>
            <td>${entry.inAmount}</td>
            <td>${entry.outAmount}</td>
            <td>${entry.remarks}</td>
            <td>${entry.clientName}</td>
            <td>${entry.month}</td>
            <td>${entry.year}</td>
        `;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser || loggedInUser.role !== 'admin') {
        alert('Access denied. Admins only.');
        window.location.href = 'login.html';  // Redirect to login page if not an admin
    }
});
