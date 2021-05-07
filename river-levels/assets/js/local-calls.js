function GetRiverLevels() {
    "use strict";

    /* URL for AJAX Call*/
    var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055660, 07055646, 07055680, 07055780&period=P7D&parameterCd=00065&siteStatus=active";
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
          .done(function( msg1 ) { });
                
                }
                );
}

