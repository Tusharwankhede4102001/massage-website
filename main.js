// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7oPwmlBKB01ks53zU_XA3eqpHv9--qV0",
  authDomain: "website-massage.firebaseapp.com",
  databaseURL: "https://website-massage-default-rtdb.firebaseio.com",
  projectId: "website-massage",
  storageBucket: "website-massage.appspot.com",
  messagingSenderId: "106161646711",
  appId: "1:106161646711:web:34a9e752fa09b6878baa72",
  measurementId: "G-BET90ETEKJ"
};

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

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
