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

// event adding function

var timeBlock = $('.row');
var eventBlock = $('.event');

timeBlock.on('click', function(){
    if (!eventBlock.find('textarea').length) {
        eventBlock.append('<textarea></textarea>');
        var textName = $(this).attr('id');
        $('textarea').attr('class', textName);
        $(this).children(".event").addClass(textName);

    }
});

//Saving to local storage

$('.saveBtn').on('click', function () {

    var text = $(this).siblings('.event').children('textarea').val();
    var time = $(this).parent().attr('id');
    console.log(text);
    console.log(time);
 
    localStorage.setItem(time, text);
})


// Getting event from local storage in case of a page refresh

var h10 = localStorage.getItem("h-10")

console.log(h10)

//$("h-10").children(".event").text(h10);

