// Displaying the current day and year using Moment.js
var currentDay = $("#currentDay")
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do, YYYY");

// Selecting the textarea field using jQuery instead of document.queryselector('#classname')
var nineAM = $('#textinput9am')
var tenAM = $('#textinput10am')
var elevenAM = $('#textinput11am')
var twelvePM = $('#textinput12pm')
var onePM = $('#textinput1pm')
var twoPM = $('#textinput2pm')
var threePM = $('#textinput3pm')
var fourPM = $('#textinput4pm')
var fivePM = $('#textinput5pm')

// Save user input to local storage. 
$('.btn9am').click(function(event) {
  event.preventDefault() // makes sure it (the event) doesn't happen automatically
  localStorage.setItem('btn9am', nineAM.val()); // creates the key-value pair. key: btn9am, value: nineAM (the variable declared at the beginning)
  nineAM.text(nineAM.val()); // text input from user passed as an argument into the variable that gets saved
});

$('.btn10am').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn10am', tenAM.val());
  tenAM.text(tenAM.val());
});

$('.btn11am').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn11am', elevenAM.val());
  elevenAM.text(elevenAM.val());
});

$('.btn12pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn12pm', twelvePM.val());
  twelvePM.text(twelvePM.val());
});

$('.btn1pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn1pm', onePM.val());
  onePM.text(onePM.val());
});

$('.btn2pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn2pm', twoPM.val());
  twoPM.text(twoPM.val());
})

$('.btn3pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn3pm', threePM.val());
  threePM.text(threePM.val());
})

$('.btn4pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn4pm', fourPM.val());
  fourPM.text(fourPM.val());
})

$('.btn5pm').click(function(event) {
  event.preventDefault()
  localStorage.setItem('btn5pm', fivePM.val());
  fivePM.text(fivePM.val());
})

// Pull (or load) user input from local storage.
window.onload = function() { 

  var display9amEvent = localStorage.getItem('btn9am', nineAM.val());  
  nineAM.text(display9amEvent);
  var display10amEvent = localStorage.getItem('btn10am', tenAM.val());
  tenAM.text(display10amEvent);
  var display11amEvent = localStorage.getItem('btn11am', elevenAM.val());
  elevenAM.text(display11amEvent);
  var display12pmEvent = localStorage.getItem('btn12pm', twelvePM.val());
  twelvePM.text(display12pmEvent);
  var display1pmEvent = localStorage.getItem('btn1pm', onePM.val());
  onePM.text(display1pmEvent);
  var display2pmEvent = localStorage.getItem('btn2pm', twoPM.val());
  twoPM.text(display2pmEvent);
  var display3pmEvent = localStorage.getItem('btn3pm', threePM.val());
  threePM.text(display3pmEvent);
  var display4pmEvent = localStorage.getItem('btn4pm', fourPM.val());
  fourPM.text(display4pmEvent);
  var display5pmEvent = localStorage.getItem('btn5pm', fivePM.val());
  fivePM.text(display5pmEvent);
};

// Getting the current time from Moment
var currentMoment = moment();
var currentHour = currentMoment.hour();
console.log(currentMoment)
console.log(currentHour)

// Set color of textarea depending on the time 
$(".description").each(function(){
  var color = $(this).attr("name"); 
  
  if (color < currentHour) {
  $(this).addClass("past");    
  } else if (color == currentHour) {
  $(this).addClass("present");    
  } else {
  $(this).addClass("future");     
  }
});