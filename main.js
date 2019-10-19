{/* <script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzhKDdl7fh1lznrJLB9MA_S2yQk__agBQ",
    authDomain: "fir-act17.firebaseapp.com",
    databaseURL: "https://fir-act17.firebaseio.com",
    projectId: "fir-act17",
    storageBucket: "fir-act17.appspot.com",
    messagingSenderId: "222512331135",
    appId: "1:222512331135:web:a6c82b385fcaab6188c24a",
    measurementId: "G-S7WSQG846Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */}

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

//             });
//           }   
//       });
//   }); 

// baguetteBox.run('.baguetteBoxThree', {
//     animation: 'fadeIn',
//     noScrollbars: true
// });

//   $(function() {

//     var $ =$('#');

$(".img-fluid").on("click", function() {
  // Grabbing and storing the data-animal property value from the button
  var catagories = $(this).attr("data-id");
  $(".topics").css("display:none;")
  console.log("hit");
  
  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL:
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var animalDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var animalImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(animalDiv);