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

var bookRef = firebase.database().ref("bookRef");

const bookform = document.getElementById("bookingform");
bookform.addEventListener("submit", form);

// Submit form
function form(e) {
  e.preventDefault();
  alert("Succesfully you have booked your Appointment")

  // Get values
  var bookName = getInputVal("bookName");
  var bookEmail = getInputVal("bookEmail");
  var bookNumber = getInputVal("bookNumber");
  var bookType = getInputVal("bookType");
  var bookDate = getInputVal("bookDate");
  var bookTime = getInputVal("bookTime");

  // Save message
  saveBook(bookName, bookEmail, bookNumber, bookType, bookDate, bookTime);

  // Clear form
  document.getElementById("bookingform").reset();
}
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveBook(
  bookName,
  bookEmail,
  bookNumber,
  bookType,
  bookDate,
  bookTime
) {
  var newBookRef = bookRef.push();
  newBookRef.set({
    bookName: bookName,
    bookEmail: bookEmail,
    bookNumber: bookNumber,
    bookType: bookType,
    bookDate: bookDate,
    bookTime: bookTime,
  });
  console.log(newBookRef);
}
