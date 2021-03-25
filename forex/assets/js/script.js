function GetStock() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var StockSymbol = document.getElementById("StockSymbol").value;
        var apiKey = "7UuZWValpEj25hyY9XZ_Ha1lXIiFmRKA"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call */
        var myURL1 = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey;

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

                /* Your code to process the result goes here - 
                   display the returned message */
                document.getElementById("company").innerHTML = msg1.name;
                document.getElementById("address").innerHTML = msg1.hq_address;
                document.getElementById("employees").innerHTML = msg1.employees;
                document.getElementById("ceo").innerHTML = msg1.ceo;
                document.getElementById("url").innerHTML = msg1.url;
                document.getElementById("url").href = msg1.url;
                document.getElementById("logo").src = msg1.logo;
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg1 ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("Stock1 Not Found - Status: " + msg1.status)
            });
        });    
        
        
 
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/" + StockSymbol + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;

        /* AJAX Method (POST or GET) */
        var myMethod2 = "GET";

        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod2,
              url: myURL2
            })

            /* AJAX complete - result is in msg */
            .done(function( msg2 ) {

                /* Your code to process the result goes here  
                    display the returned message */
                var stockdate = [];
                var stockvalue = [];
                var stockvolume = [];
                var numdays = msg2.results.length;
                if (numdays > 0) {
                    for (var i = 0; i < numdays; i++) {
                        /* stock close value */
                        stockvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        stockvolume[i] = msg2.results[i].v;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        var tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }

                var stockvaluetable = "";
                if (numdays > 0) {
                    stockvaluetable = stockvaluetable + "<table><caption>Stock Price</caption><tr><th>Date</th><th>Price</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        stockvaluetable = stockvaluetable + "<tr><td>" + stockdate[i] + "</td><td>" + stockvalue[i] + "</td></tr>";
                    }
                    stockvaluetable = stockvaluetable + "</table>"
                    document.getElementById("StockValueTable").innerHTML = stockvaluetable;
                }
                
                var stockvolumetable = "";
                if (numdays > 0) {
                    stockvolumetable = stockvolumetable + "<table><caption>Stock Volume</caption><tr><th>Date</th><th>Volume</th></tr>";
                    for (var i = 0; i < numdays; i++) {
                        stockvolumetable = stockvolumetable + "<tr><td>" + stockdate[i] + "</td><td>" + stockvolume[i] + "</td></tr>";
                    }
                    stockvolumetable = stockvolumetable + "</table>"
                    document.getElementById("StockVolumeTable").innerHTML = stockvolumetable;
                }

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Close",
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
                
                var ctx1 = document.getElementById("chartjs-1");
                var myChart = new Chart(ctx1, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Volume",
                        "data": stockvolume,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("Stock2 Not Found - Status: " + msg.status)
            });
        });
    }
}

function ClearForm() {
    document.getElementById("StockSymbol").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("company").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("employees").innerHTML = "";
    document.getElementById("ceo").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    document.getElementById("logo").src = "";
    document.getElementById("StockValueTable").innerHTML = "";
    document.getElementById("StockVolumeTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}