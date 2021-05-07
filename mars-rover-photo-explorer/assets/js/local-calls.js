function handlechange() {
    
    if (document.getElementById("curiosity").checked) {
        document.getElementById("Date").value = "2012-08-06";
    }
    if (document.getElementById("opportunity").checked) 
        document.getElementById("Date").value = "2004-01-26";
    
    if (document.getElementById("spirit").checked) {
        document.getElementById("Date").value = "2004-01-05";
    }
}

/* I used three separate funtions because I could not get the function above to work*/
function curiosityDate() {
    document.getElementById("Date").value = "2012-08-06";
}

function opportunityDate() {
    document.getElementById("Date").value = "2004-01-26";
}

function spiritDate() {
    document.getElementById("Date").value = "2004-01-05";
}

function checkcount() {
    
            
            
            var Rover;
            if (document.getElementById("curiosity").checked) {
                Rover = document.getElementById("curiosity").value;
            }
            if (document.getElementById("opportunity").checked) {
                Rover = document.getElementById("opportunity").value;
            }
            if (document.getElementById("spirit").checked) {
                Rover = document.getElementById("spirit").value;
            }
            
            
            var Date = document.getElementById("Date").value;
            
            
            
            var apiKey = "b3IDijLEG9GBWRPGuL1JasEgeNbud6TDsXW3kMaE";
            
            var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + Date + "&api_key=" + apiKey;
            /* AJAX Method (POST or GET) */
            var myMethod1 = "GET";

        
        

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod1,
              url: myURL1
            })

            /* AJAX complete - result is in msg */
            .done(function( msg1 ) {
            
            var pc = msg1.photos.length; 
            document.getElementById("picturecount").innerHTML = pc;
            
            });

}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function first25() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    if (form.valid()) {
        
        const myNode = document.getElementById("gallery");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        }
        
        var Rover;
        if (document.getElementById("curiosity").checked) {
            Rover = document.getElementById("curiosity").value;
        }
        if (document.getElementById("opportunity").checked) {
            Rover = document.getElementById("opportunity").value;
        }
        if (document.getElementById("spirit").checked) {
            Rover = document.getElementById("spirit").value;
        }
        
        
        var Date = document.getElementById("Date").value;
        
        
        
        var apiKey = "b3IDijLEG9GBWRPGuL1JasEgeNbud6TDsXW3kMaE";
        
        var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + Date + "&api_key=" + apiKey;
        /* AJAX Method (POST or GET) */
        var myMethod1 = "GET";

        
        

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod1,
              url: myURL1
            })

            /* AJAX complete - result is in msg */
            .done(function( msg1 ) {
            
            
            for ( var i = 0; i < 25; i++) {
            // Note how we construct the name for image1, image2, etc...this sets the image source
            
            //do something to set the tool tip = msg.photos[i].camera.full_name;
            var anchor = document.createElement('a');
                anchor.href = msg1.photos[i].img_src;
                anchor.target = "_blank";
            var x = document.createElement("IMG");
                x.setAttribute("src", msg1.photos[i].img_src);
                x.setAttribute("width", "150");
                x.setAttribute("title", msg1.photos[i].camera.full_name);
                x.setAttribute("href", msg1.photos[i].img_src);
                
                
                anchor.appendChild(x);
                   
                document.getElementById("gallery").appendChild(anchor);

            }
            
            var pc = msg1.photos.length; 
            document.getElementById("picturecount").innerHTML = pc;
            
            });
            
    }
            
            
               
            
            
}    


function viewallphotos() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
        
        const myNode = document.getElementById("gallery");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        }
        
        var Rover;
        if (document.getElementById("curiosity").checked) {
            Rover = document.getElementById("curiosity").value;
        }
        if (document.getElementById("opportunity").checked) {
            Rover = document.getElementById("opportunity").value;
        }
        if (document.getElementById("spirit").checked) {
            Rover = document.getElementById("spirit").value;
        }
        
        
        var Date = document.getElementById("Date").value;
        
        
        
        var apiKey = "b3IDijLEG9GBWRPGuL1JasEgeNbud6TDsXW3kMaE";
        
        var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + Date + "&api_key=" + apiKey;
        /* AJAX Method (POST or GET) */
        var myMethod1 = "GET";

        
        

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod1,
              url: myURL1
            })

            /* AJAX complete - result is in msg */
            .done(function( msg1 ) {
            
            
            
            for ( var i = 0; i < msg1.photos.length; i++) {
            // Note how we construct the name for image1, image2, etc...this sets the image source
            
            //do something to set the tool tip = msg.photos[i].camera.full_name;
            var anchor = document.createElement('a');
                anchor.href = msg1.photos[i].img_src;
                anchor.target = "_blank";
            var x = document.createElement("IMG");
                x.setAttribute("src", msg1.photos[i].img_src);
                x.setAttribute("width", "150");
                x.setAttribute("title", msg1.photos[i].camera.full_name);
                x.setAttribute("href", msg1.photos[i].img_src);
                
                
                anchor.appendChild(x);
                   
                document.getElementById("gallery").appendChild(anchor);
                
                
                
                
            }
            
            
            
            });
            
            
          
  
    }

function clearform() {
    document.getElementById("curiosity").checked = false;
    document.getElementById("opportunity").checked = false;
    document.getElementById("spirit").checked = false;
    document.getElementById("Date").value = "";
    document.getElementById("picturecount").innerHTML = "";
    const myNode = document.getElementById("gallery");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
    }
   
}







/*

for (i = 0; i &lt; 25; i++) {
    // Note how we construct the name for image1, image2, etc...this sets the image source
    document.getElementById("image" + i).src = msg.photos[i].img_src;
    do something to set the tool tip = msg.photos[i].camera.full_name;
}

document.getElementById("image0").src = msg1.photos[0].img_src;
             document.getElementById("image1").src = msg1.photos[1].img_src;
             document.getElementById("image2").src = msg1.photos[2].img_src;
             document.getElementById("image3").src = msg1.photos[3].img_src;
             document.getElementById("image4").src = msg1.photos[4].img_src;
             document.getElementById("image5").src = msg1.photos[5].img_src;
             document.getElementById("image6").src = msg1.photos[6].img_src;
             document.getElementById("image7").src = msg1.photos[7].img_src;
             document.getElementById("image8").src = msg1.photos[8].img_src;
             document.getElementById("image9").src = msg1.photos[9].img_src;



/* Your API key for tmlobue@ualr.edu is:

b3IDijLEG9GBWRPGuL1JasEgeNbud6TDsXW3kMaE
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=b3IDijLEG9GBWRPGuL1JasEgeNbud6TDsXW3kMaE
For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

Account Email: tmlobue@ualr.edu
Account ID: cd565367-6846-4d6e-8df4-50545b1993de*/