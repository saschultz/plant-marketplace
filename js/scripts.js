$(document).ready(function() {

  $("#formOrder").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var address1Input = $("input#addressLine1").val();
    var address2Input = $("input#addressLine2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var countryInput = $("input:radio[name=country]:checked").val();
    var plantSelect = $("#plant").val();

    $("#receiptName").text(firstNameInput);
    $("#receiptSurname").text(lastNameInput);
    $("#receiptPlant").text(plantSelect);
    $("#receiptAddress1").text(address1Input);
    $("#receiptAddress2").text(address2Input);
    $("#receiptCity").text(cityInput);
    $("#receiptState").text(stateInput);
    $("#receiptZip").text(zipInput);
    $("#receiptCountry").text(countryInput);


    $("#formOrder").hide();
    $("#receipt").show();
    $("h2").replaceWith("<h2>Order Confirmation</h2>");


    event.preventDefault();
  });

});
