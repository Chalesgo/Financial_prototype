document.getElementById('financeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const inAmount = document.getElementById('inAmount').value || 0;
    const outAmount = document.getElementById('outAmount').value || 0;
    const remarks = document.getElementById('remarks').value;
    const clientName = document.getElementById('clientName').value;

    // Extracting month and year from the selected date
    const selectedDate = new Date(date);
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    // Automatically set month and year
    document.getElementById('month').value = month;
    document.getElementById('year').value = year;

    // Append data as a new row in the table
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Create cells with data and checkbox for selection
    const selectCell = newRow.insertCell(0);
    selectCell.innerHTML = `<input type="checkbox" class="rowCheckbox">`;

    newRow.insertCell(1).innerHTML = date;
    newRow.insertCell(2).innerHTML = productName;
    newRow.insertCell(3).innerHTML = category;
    newRow.insertCell(4).innerHTML = inAmount;
    newRow.insertCell(5).innerHTML = outAmount;
    newRow.insertCell(6).innerHTML = remarks;
    newRow.insertCell(7).innerHTML = clientName;
    newRow.insertCell(8).innerHTML = month;
    newRow.insertCell(9).innerHTML = year;

    // Reset form
    document.getElementById('financeForm').reset();
});

// Deleting selected rows
document.getElementById('deleteButton').addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('.rowCheckbox:checked');

    checkboxes.forEach(function (checkbox) {
        const row = checkbox.closest('tr');
        row.remove(); // Remove the selected row
    });
});
