// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT1wGkaoY24rwEZsyd8qgAnm6SGKxPnGk",
  authDomain: "hands-on-wellness.firebaseapp.com",
  databaseURL: "https://hands-on-wellness-default-rtdb.firebaseio.com",
  projectId: "hands-on-wellness",
  storageBucket: "hands-on-wellness.appspot.com",
  messagingSenderId: "679839802189",
  appId: "1:679839802189:web:7c423c3484e2b18d4e4d04"
};

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  alert("Succesfully we have received your message.")

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var number = getInputVal("number");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, number, message);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, number, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    number: number,
    message: message,
  });
  console.log(newMessageRef);
}
