// function Submit() {
//   alert('Thông tin vận chuyển được thêm thành công');
// }

// Declare the "transport" array
var transport = [];

// Function to handle form submission
function Submit() {
  // Get the input values
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var note = document.getElementById("note").value;

  // Create an object with the input values
  var transportData = {
    name: name,
    phone: phone,
    address: address,
    note: note,
    "id": 'VT' + (transport.length + 1)
  };

  // Push the transportData object to the "transport" array
  transport.push(transportData);

  // Call the API with the transport array
  callApi(transport);

  // Show success message
  alert("Thông tin vận chuyển được thêm thành công");
}

// Function to call the API with the transport array
function callApi(transport) {
  // Make an HTTP request to the API endpoint
  // Replace "API_ENDPOINT" with your actual API endpoint
  fetch("http://localhost:3000/transport", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ transport: transport })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the API response
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}