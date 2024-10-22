document.getElementById('financeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const inAmount = document.getElementById('inAmount').value || 0;
    const outAmount = document.getElementById('outAmount').value || 0;
    const remarks = document.getElementById('remarks').value;
    const clientName = document.getElementById('clientName').value;

    const selectedDate = new Date(date);
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    const entry = {
        date: date,
        productName: productName,
        category: category,
        inAmount: inAmount,
        outAmount: outAmount,
        remarks: remarks,
        clientName: clientName,
        month: month,
        year: year
    };

    const financeEntries = JSON.parse(localStorage.getItem('financeEntries')) || [];
    financeEntries.push(entry);
    localStorage.setItem('financeEntries', JSON.stringify(financeEntries));

    addRowToTable(entry);
    document.getElementById('financeForm').reset();
});

function addRowToTable(entry) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td><input type="checkbox"></td>
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
}
