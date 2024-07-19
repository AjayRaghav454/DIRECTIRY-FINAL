// Sample data, you can add more entries as needed
const directoryData = [
    ["John Doe", "IT", "Manager", "1234", "555-1234", "A-101"],
    ["Jane Smith", "HR", "Executive", "5678", "555-5678", "B-202"],
    ["Michael Johnson", "Finance", "CFO", "2345", "555-2345", "C-303"],
    ["Emily Davis", "Marketing", "Coordinator", "6789", "555-6789", "D-404"],
    ["William Brown", "Sales", "Salesman", "3456", "555-3456", "E-505"],
    ["Linda Wilson", "Customer Support", "Support Specialist", "7890", "555-7890", "F-606"],
    ["Chris Evans", "Operations", "Operations Manager", "4567", "555-4567", "G-707"],
    ["Anna Scott", "Legal", "Lawyer", "8901", "555-8901", "H-808"]
];

// Function to search the directory
function searchDirectory() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("directoryTable");
    tr = table.getElementsByTagName("tr");
    let noResults = true;

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    noResults = false;
                    break;
                }
            }
        }
    }

    document.getElementById("noResults").style.display = noResults ? "block" : "none";
}

// Function to populate the table with data
function populateTable(data) {
    const table = document.getElementById("directoryTable").getElementsByTagName('tbody')[0];
    table.innerHTML = ""; // Clear existing rows
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const newRow = table.insertRow();
        for (let j = 0; j < row.length; j++) {
            const cell = newRow.insertCell();
            cell.textContent = row[j];
        }
    }
}

// Populate the table on page load
document.addEventListener('DOMContentLoaded', function() {
    populateTable(directoryData);
});
