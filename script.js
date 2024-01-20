// header date
var currentDate = $("#currentDay");

var today = dayjs().format("dddd, MMMM YYYY");
currentDate.text(today);

 function displayDate() {
    currentDate.text(today);
  };

setInterval(displayDate, 1000);



  