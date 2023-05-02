const btn_toggle = document.querySelector('.btn-toggle');
const sidenav = document.querySelector('.side-nav');
const logo = document.querySelector('.logo');
const wrapper = document.querySelector('.wrapper');

btn_toggle.addEventListener("click", () => {
  sidenav.classList.toggle("active");
  if (sidenav.classList.contains('active')) {
    logo.style.display = "flex";
    wrapper.style.left = "240px";
    wrapper.style.width = "calc(100% - 240px)";
    return;
  }
  logo.style.display = "none";
  wrapper.style.left = "85px";
  wrapper.style.width = "calc(100% - 85px)";
});

// content
//Define the clearInputs() function:
function clearInputs() {
  document.getElementById("prodName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("date-received").value = "";
  document.getElementById("status").selectedIndex = 0;
}
//function generate serial
function generateSerial(productName, serialNumber) {
  let prefix = productName.substring(0, 3).toUpperCase();
  let suffix = ("0000" + serialNumber).slice(-4);
  return prefix + suffix;
}


function addItem() {
  // Get the form fields
 // Get form inputs
  const prodName = document.getElementById("prodName").value;
  const quantity = document.getElementById("quantity").value;
  const brand = document.getElementById("brand").value;
  const dateReceived = document.getElementById("date-received").value;
  const status = document.getElementById("status").value;



  // Get the record table
  let recordTable = document.getElementById("record-table");

  // Loop through the quantity input and append a new row for each iteration
  for (let i = 1; i <= quantity; i++) {
    // Generate the serial number for this row
    let serial = generateSerial(prodName, i);

    // Append a new row to the record table with the entered values
    let newRow = recordTable.insertRow();
    newRow.classList.add("record-row"); // add a class to the row for later reference
    newRow.innerHTML = `
      <td>${status}</td>
      <td>${serial}</td>
      <td>1</td>
      <td>${prodName}</td>
      <td>${brand}</td>
      <td>Not Assigned</td>
      <td>${dateReceived}</td>
    `;
  }
}



// side section
function toggleSideSection() {
  let sideSection = document.getElementById("side-section");
  sideSection.classList.toggle("show");
}
function toggleSideSection2() {
  let sideSection2 = document.getElementById("side-section-2");
  sideSection2.classList.toggle("show");
}

// Create new row element
let newRow = document.createElement("tr");

// Assign a unique data-id to the row
newRow.setAttribute("data-id", counter);

// Create columns for the row
let statusCol = document.createElement("td");
let serialCol = document.createElement("td");
let quantityCol = document.createElement("td");
let prodNameCol = document.createElement("td");
let brandCol = document.createElement("td");
let assignedToCol = document.createElement("td");
let fromCol = document.createElement("td");

// Set the column values
statusCol.innerText = status;
serialCol.innerText = counter;
quantityCol.innerText = quantity;

// function in filter

// summary
