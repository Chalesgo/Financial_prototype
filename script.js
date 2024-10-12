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

    let output = `
        <h2>Financial Entry:</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>In Amount:</strong> ${inAmount}</p>
        <p><strong>Out Amount:</strong> ${outAmount}</p>
        <p><strong>Remarks:</strong> ${remarks}</p>
        <p><strong>Client Name (if Receivable):</strong> ${clientName}</p>
        <p><strong>Month/Year:</strong> ${month}/${year}</p>
    `;

    document.getElementById('output').innerHTML = output;

    // Reset form
    document.getElementById('financeForm').reset();
});

document.getElementById('date').addEventListener('change', function () {
    const selectedDate = new Date(this.value);
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    document.getElementById('month').value = month;
    document.getElementById('year').value = year;
});
