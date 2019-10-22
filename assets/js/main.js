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

