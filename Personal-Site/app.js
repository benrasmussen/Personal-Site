"use strict";

$('.gh').hide();

// Show main heading
$('.github-anchor').hover(function() {
    $('.gh').toggle();
});

$('.C').hide();

// Show main heading
$('.portfolio-anchor').hover(function() {
    $('.C').toggle();
});









// function hideIcons() {
//     $('.github-icon').hide();
//     $('.linkedin-icon').hide();
//     $('.portfolio-icon').hide();
//     $('.about-me-icon').hide();
// }
// hideIcons();
//
// function showIcons() {
//     $('.github-icon').hover().fadeIn();
//     $('.linkedin-icon').hide();
//     $('.portfolio-icon').hide();
//     $('.about-me-icon').hide();
// }







// function loadGif() {
//     $('.container-gif').html("<img src='./img/paddle.gif' class='load'>");
// }
// loadGif();

// hide form until called in getMovies function
// $('.add-movie-form').hide();
// $('.search-box').hide();
// $('.movie-table').hide();
// $('.container-gif').hide();


// this function shows the forms upon page load when called
// function formLoader() {
//     $('.add-movie-form').show();
//     $('.search-box').show();
//     $('.movie-table').show();
//     $('.container-loader').hide();
// }

    function clock() {

        var fullDate = new Date();
        var day = fullDate.getDay();
        var date = fullDate.getDate();
        var month = fullDate.getMonth();
        var hour = fullDate.getHours();
        var min = fullDate.getMinutes();
        var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        if (hour > 12) {
            hour += -12;
            min += " PM";
        } else if (hour < 12) {
            hour = "0" + hour;
            min += " AM";
        }
        if (min < 10) {
            min = "0" + min;
        }

        document.getElementById('day').innerHTML = daylist[day];
        document.getElementById('month').innerHTML = monthList[month] + " " + date + ",";
        document.getElementById('hours').innerHTML = hour;
        document.getElementById('minutes').innerHTML = ": " + min;

        setInterval(clock, 100);

    }
