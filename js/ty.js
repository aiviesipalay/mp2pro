
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Serial</th>
      <th>Quantity</th>
      <th>Product Name</th>
      <th>Brand</th>
      <th>Assigned To</th>
      <th>From</th>
    </tr>
  </thead>
  <tbody id="record-table">
    <tr>
      <td>Available</td>
      <td>123456</td>
      <td>1</td>
      <td>Widget</td>
      <td>Acme</td>
      <td><button onclick="showAssignmentForm()">Assign</button></td>
      <td>Warehouse</td>
    </tr>
  </tbody>
</table>


function showAssignmentForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <label for="user-name">User Name:</label>
    <input type="text" id="user-name">
    <label for="assignment-date">Assignment Date:</label>
    <input type="date" id="assignment-date">
    <button onclick="assignItem()">Assign</button>
  `;
  document.body.appendChild(form);
}

function assignItem() {
  // Code to update the item's status to "Taken" and record the assignment
  // in a database or other data storage system goes here.
}
// side section
function toggleSideSection() {
  let sideSection = document.getElementById("side-section");
  sideSection.classList.toggle("show");
}
function toggleSideSection2() {
  let sideSection = document.getElementById("side-section2");
  sideSection.classList.toggle("show");
}