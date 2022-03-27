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
