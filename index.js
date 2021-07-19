
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpOohXZr_HHC7hexmqecEGGJkeV6-2-FI",
    authDomain: "save-dogs-e54a3.firebaseapp.com",
    projectId: "save-dogs-e54a3",
    storageBucket: "save-dogs-e54a3.appspot.com",
    messagingSenderId: "746266812894",
    appId: "1:746266812894:web:18aed0d92608e0eb67fd4f"
  };


firebase.initializeApp(firebaseConfig);
var firestore= firebase.firestore();



const submitBtn = document.querySelector('#submit');

let userName= document.querySelector('#f1');
let number= document.querySelector('#f2');
let city= document.querySelector('#f3');
let state= document.querySelector('#f4');
let select= document.querySelector('#f5');

const db= firebase.firestore("contact data")

submitBtn.addEventListner('click', function(){
   let userNameInput = userName.value;
   let userNumberInput = number.value;
   let userCityInput = city.value;
   let userStateInput = state.value;
   let userSelectInput = select.value;

   db.doc().set({
      name:userName,
      number:number,
      city:city,
      state:state,
      select:select

   })
   .then(function(){
      console.log("data saved");
   })
   .catch(function(error)
   {
      console.log(error);

      
   });
});
