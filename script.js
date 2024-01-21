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
        var $tableRow = $(el);
        var $tableHeading = $tableRow.find('th');
        var $tableEvent = $tableRow.find('.event');
        var thisId = $tableHeading.attr('id');
        var thisHourString = thisId.replace('h-', '');
        var thisRowHour = parseInt(thisHourString);
        if (thisRowHour == currentTime) {
            $tableEvent.addClass('present');
            $tableEvent.removeClass('future');
            $tableEvent.removeClass('past');
        } else if (thisRowHour > currentTime) {
            $tableEvent.addClass('future');
            $tableEvent.removeClass('past');
            $tableEvent.removeClass('present');
        } else {
            $tableEvent.addClass('past');
            $tableEvent.removeClass('present');
            $tableEvent.removeClass('future');
        }
    });
    
}
colorCode();
setInterval(colorCode, 1000);

// event adding function

var timeBlock = $('.row');
var eventBlock = $('.event')
timeBlock.on('click', function(){
    if (!eventBlock.find('textarea').length) {
        eventBlock.append('<textarea></textarea>');
    }
});