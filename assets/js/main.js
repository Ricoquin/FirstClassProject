
//  var firebaseConfig = {
//     apiKey: "AIzaSyDnr6DupJmH878UPVSano0uqAkSmejcFzk",
//     authDomain: "fir-activity-84cab.firebaseapp.com",
//     databaseURL: "https://fir-activity-84cab.firebaseio.com",
//     projectId: "fir-activity-84cab",
//     storageBucket: "fir-activity-84cab.appspot.com",
//     messagingSenderId: "418786824354",
//     appId: "1:418786824354:web:d05ffcb0f8dd103dbc07fb",
//    measurementId: "G-36GHTG8FS5"
//  };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);


var lat = ["39.057803"]
var long = ["-94.585649"]

$(".data-image").on("click", function(){

  var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=kansascitymo&key=AIzaSyCKFSH4p45OU8PBa0zWRvuXXUW1xIwsNGQ";



  var map;
  var service;
  var createMarker;
  
    var myLocation = new google.maps.LatLng(lat[0], long[0]);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 15
      });
  
    var request = {
      location: myLocation,
      radius: '200',
      type: ['restaurant', 'bar','hotels','hospital','museaum' ]
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  
  
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var createMarker = results[i]
          createMarker([i])
        }
      }
    }


    });
  


//  $("dataId").append(myInitCallback);

//  var searchVal = $(this).attr("data-id")
//  console.log(searchVal);

 
  //$(".gcse-search").html(searchVal)


// })


/*
const myInitCallback = function() {
    if (document.readyState == 'complete') {
      // Document is ready when CSE element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render(
          {
            div: "customSearch",
            tag: 'search'
           });
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function() {
         // Render an element with both search box and search results in div with id 'test'.
          google.search.cse.element.render(
              {
                div:"search_wrapper",
                id: "customSearch",
                tag: 'search'
              });
      }, true);
    }
  };

  
  window.__gcse = {
    parsetags: 'explicit',
    initializationCallback: myInitCallback
  };
*/


