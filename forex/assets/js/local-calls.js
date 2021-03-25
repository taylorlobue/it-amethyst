function GetCurrencyValue() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ConvertToCurrency = document.getElementById("ConvertToCurrency").value;
        var apiKey = "7UuZWValpEj25hyY9XZ_Ha1lXIiFmRKA"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call
        https://api.polygon.io/v2/aggs/ticker/C:USDCRC/range/1/day/2021-03-01/2021-03-05?unadjusted=true&sort=asc&limit=120&apiKey=7UuZWValpEj25hyY9XZ_Ha1lXIiFmRKA
        
        /v2/aggs/ticker/{forexTicker}/range/{multiplier}/{timespan}/{from}/{to}
        */
        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + ConvertToCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=true&sort=asc&limit=120&apiKey=" + apiKey

        /* AJAX Method (POST or GET) */
        var myMethod1 = "GET";

        
        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod1,
              url: myURL1
            })

            /* AJAX complete - result is in msg */
            .done(function( msg1 ) {

                /* Your code to process the result goes here  
                    display the returned message */
                var stockdate = [];
                var stockvalue = [];
                var numdays = msg1.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        stockvalue[i] = msg1.results[i].c;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg1.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }

                var stockvaluetable = "";
                if (numdays > 0) {
                    stockvaluetable = stockvaluetable + "<table><caption>Currency Value</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        stockvaluetable = stockvaluetable + "<tr><td>" + stockdate[i] + "</td><td>" + stockvalue[i] + "</td></tr>";
                    }
                    stockvaluetable = stockvaluetable + "</table>";
                    document.getElementById("CurrencyValueTable").innerHTML = stockvaluetable;
                }
                
                

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Currency Value",
                        "data": stockvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
                
               
            });
            
            
        });
    }
}

function ClearForm() {
    document.getElementById("ConvertToCurrency").value = "";
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("CurrencyValueTable").innerHTML = "";
    document.getElementById("chartjs-0").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}