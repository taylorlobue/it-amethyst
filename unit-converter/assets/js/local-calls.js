function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Get FromValue from form
        var FromValue = document.getElementById("FromValue").value;

        // From Unit
        // Get the value associated with the From Unit that was checked
        var FromUnit;
        if (document.getElementById("fcentimeters").checked) {
            FromUnit = document.getElementById("fcentimeters").value;
        }
        if (document.getElementById("fmeters").checked) {
            FromUnit = document.getElementById("fmeters").value;
        }
        if (document.getElementById("fkilometers").checked) {
            FromUnit = document.getElementById("fkilometers").value;
        }
        if (document.getElementById("finches").checked) {
            FromUnit = document.getElementById("finches").value;
        }
        if (document.getElementById("ffeet").checked) {
            FromUnit = document.getElementById("ffeet").value;
        }
        if (document.getElementById("fyards").checked) {
            FromUnit = document.getElementById("fyards").value;
        }
        if (document.getElementById("fmiles").checked) {
            FromUnit = document.getElementById("fmiles").value;
        }
        
        // To Unit
        // Get the value associated with the To Unit that was checked
        var ToUnit;
        if (document.getElementById("centimeters").checked) {
            ToUnit = document.getElementById("centimeters").value;
        }
        if (document.getElementById("meters").checked) {
            ToUnit = document.getElementById("meters").value;
        }
        if (document.getElementById("kilometers").checked) {
            ToUnit = document.getElementById("kilometers").value;
        }
        if (document.getElementById("inches").checked) {
            ToUnit = document.getElementById("inches").value;
        }
        if (document.getElementById("feet").checked) {
            ToUnit = document.getElementById("feet").value;
        }
        if (document.getElementById("yards").checked) {
            ToUnit = document.getElementById("yards").value;
        }
        if (document.getElementById("miles").checked) {
            ToUnit = document.getElementById("miles").value;
        }
        
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        /* AJAX calculator requires Operand1, Operator, and Operand 2 */
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = FromValue;
        myData.FromUnit = FromUnit;
        myData.ToUnit = ToUnit;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("fcentimeters").checked = false;
    document.getElementById("fmeters").checked = false;
    document.getElementById("fkilometers").checked = false;
    document.getElementById("finches").checked = false;
    document.getElementById("ffeet").checked = false;
    document.getElementById("fyards").checked = false;
    document.getElementById("fmiles").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("centimeters").checked = false;
    document.getElementById("meters").checked = false;
    document.getElementById("kilometers").checked = false;
    document.getElementById("inches").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("yards").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});