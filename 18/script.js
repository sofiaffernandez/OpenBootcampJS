document.getElementById("myButton").addEventListener("click", function() {
    alert("click en el botón");
  });
  $(document).ready(function() {
    $("#myButton").click(function() {
      console.log("Hola, estoy utilizando jQuery");
    });
  });
  