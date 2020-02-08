
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDltb3zvQywHM5CGlL2jp5O0FsC0_QmiAg",
    authDomain: "deepindex-web.firebaseapp.com",
    databaseURL: "https://deepindex-web.firebaseio.com",
    projectId: "deepindex-web",
    storageBucket: "deepindex-web.appspot.com",
    messagingSenderId: "940843166377",
    appId: "1:940843166377:web:c134f9e84407091243d7b8",
    measurementId: "G-99C2HNRQCB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');
$('#contact').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#contact_name').val(),
        email: $('#contact_email').val(),
        phone: $('#contact_phone').val(),
        message: $('#contact_message').val()
    });
 
    $('#success').show();
    $('#contactForm')[0].reset();
});
