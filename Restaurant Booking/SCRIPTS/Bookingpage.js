var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var currentMonthWord = document.getElementById('currentMonth');
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
var timenow = now.getHours()+":"+now.getMinutes();
var sectionRightDate = document.getElementById('sectionRightDate')
var sectionLeftDate = document.getElementById('bookingDate')
var correctHours;
var correctMinutes;
var correctSeconds;
var correctTime;
var startTime = document.getElementById('startTime');
var endTime = document.getElementById('endTime');
sectionLeftDate.value = today;
copyToSectionRightDate();
getCorrectTimeformat();
startTime.value = correctTime;
numbermonthtoword();
for (var i = 0; i < 20; i++) {
  var table = document.createElement("DIV");
  table.innerHTML = "Table no."+ (i+1);
  document.getElementById('tablesContainer').appendChild(table);
  table.classList.add("table")
}



function copyToSectionRightDate() {
  sectionRightDate.value = sectionLeftDate.value;
  console.log("working");
}


function getCorrectTimeformat() {
  if (now.getHours()<10) {
    correctHours = "0"+now.getHours();
  }
  else {
    correctHours = now.getHours();
  }
  if (now.getMinutes()<10) {
    correctMinutes = "0"+now.getMinutes();
  }
  else {
    correctMinutes = now.getMinutes();
  }
  correctTime = correctHours+":"+correctMinutes;
  console.log(correctTime);

  document.getElementById('todayDate').innerHTML = (month)+"-"+(day)+"-"+now.getFullYear();
  document.getElementById('nowTime').innerHTML = correctTime;

}

function copyToEndTime() {
  startTime = document.getElementById('startTime');
  endTime = document.getElementById('endTime');
  console.log(startTime.getHours());
}

function numbermonthtoword() {
  if (month = 1) {
    currentMonthWord.innerHTML = "January";
  }
  else if (month = 2) {
    currentMonthWord.innerHTML = "February";
  }
  else if (month = 3) {
    currentMonthWord.innerHTML = "March";
  }
  else if (month = 4) {
    currentMonthWord.innerHTML = "April";
  }
  else if (month = 5) {
    currentMonthWord.innerHTML = "May";
  }
  else if (month = 6) {
    currentMonthWord.innerHTML = "June";
  }
  else if (month = 7) {
    currentMonthWord.innerHTML = "July";
  }
  else if (month = 8) {
    currentMonthWord.innerHTML = "August";
  }
  else if (month = 9) {
    currentMonthWord.innerHTML = "September";
  }
  else if (month = 10) {
    currentMonthWord.innerHTML = "October";
  }
  else if (month = 11) {
    currentMonthWord.innerHTML = "November";
  }
  else if (month = 12) {
    currentMonthWord.innerHTML = "December";
  }

}


//above is sript for date and time fields

var overlay = document.getElementById('overlay');
var overlaybg = document.getElementById('overlaysepbg');
var bookingRules = document.getElementById('bookingRules');
var tableLayout = document.getElementById('tableLayout');
var thisMonthEvent = document.getElementById('thisMonthEvent');
overlaybg.style.backgroundImage = "url('images/overlaybg1.jpg')";
closeoverlay();

function closeoverlay() {
  overlay.style.visibility = "hidden";
  overlaybg.style.visibility = "hidden";
  bookingRules.style.display = "none";
  tableLayout.style.display = "none";
  thisMonthEvent.style.display = "none";
}
function showoverlay() {
  overlay.style.visibility = "visible";
  overlaybg.style.visibility = "visible";
}

function showBookingRules() {
  bookingRules.style.display = "initial";
}
function showTableLayout() {
  tableLayout.style.display = "initial";
}
function showThisMonthEvent() {
  thisMonthEvent.style.display = "initial";
}
