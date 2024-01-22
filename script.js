// header date
var currentDate = $('#currentDay');

var today = dayjs().format('dddd, MMMM YYYY');


 function displayDate() {
    currentDate.text(today);
  };

  displayDate();
setInterval(displayDate, 1000);

// Colour-code for time blocks

function colorCode() {

    var currentTime = dayjs().format("H");

    $('tr').each(function(i, el) {
        var tableRow = $(el);
        var tableEvent = tableRow.find('.event');
        var thisId = tableRow.attr('id');
        var thisHourString = thisId.replace('h-', '');
        var thisRowHour = parseInt(thisHourString);
        if (thisRowHour == currentTime) {
            tableEvent.addClass('present');
            tableEvent.removeClass('future');
            tableEvent.removeClass('past');
        } else if (thisRowHour > currentTime) {
            tableEvent.addClass('future');
            tableEvent.removeClass('past');
            tableEvent.removeClass('present');
        } else {
            tableEvent.addClass('past');
            tableEvent.removeClass('present');
            tableEvent.removeClass('future');
        }
    });
    
}
colorCode();
setInterval(colorCode, 1000);


//Saving to local storage

$('.saveBtn').on('click', function () {

    var text = $(this).siblings('.event').children('textarea').val();
    var time = $(this).parent().attr('id');
    console.log(text);
    console.log(time);
 
    localStorage.setItem(time, text);
})


// Getting event from local storage in case of a page refresh

var h9 = localStorage.getItem("h-9");
$('textarea[name="h9"]').val(h9);

var h10 = localStorage.getItem("h-10");
$('textarea[name="h10"]').val(h10);

var h11 = localStorage.getItem("h-11");
$('textarea[name="h11"]').val(h11);

var h12 = localStorage.getItem("h-12");
$('textarea[name="h12"]').val(h12);

var h13 = localStorage.getItem("h-13");
$('textarea[name="h13"]').val(h13);

var h14 = localStorage.getItem("h-14");
$('textarea[name="h14"]').val(h14);

var h15 = localStorage.getItem("h-15");
$('textarea[name="h15"]').val(h15);

var h16 = localStorage.getItem("h-16");
$('textarea[name="h16"]').val(h16);

var h17 = localStorage.getItem("h-17");
$('textarea[name="h17"]').val(h17);



