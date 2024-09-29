// print
function getprint() {
      window.print();
}

// Add Row 
document.getElementById("add").addEventListener("click", function () {
      var html = `  <tr>
      <th scope="row">1</th>
      <td><input type="text" class="form-control"></td>
      <td><input type="number" class="form-control"></td>
      <td><input type="number" class="form-control"></td>
      <td><input type="number" class="form-control"></td>
      <td class="no-print text-center"><button class="btn btn-danger del">X</button></td>
    </tr>`

      var body = document.getElementById("tBody");
      body.insertAdjacentHTML("afterend", html);
})

// Remove Row

document.addEventListener('click', function (event) {
      if (event.target.classList.contains('del')) {
            var row = event.target.closest('tr');
            row.remove();
      }
});