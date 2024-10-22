// Fetch data from the localStorage where it was stored in index.html
const financeEntries = JSON.parse(localStorage.getItem('financeEntries')) || [];

// Event listener for report form submission
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const categoryFilter = document.getElementById('categoryFilter').value;

    // Filter entries based on date range and category
    const filteredEntries = financeEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        return (entryDate >= startDate && entryDate <= endDate) &&
            (categoryFilter === "" || entry.category === categoryFilter);
    });

    // Display filtered data in report table
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
