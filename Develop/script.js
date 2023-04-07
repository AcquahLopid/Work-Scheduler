// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// using jquery to make the screen scrollable
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

// sets clock that tells the day month number day and exact time
function tickingClock(){
setInterval(() => {
  var now = dayjs().format('dddd, MMMM DD hh:mm:ss A');
  $('#currentDay').text(now);
}, 1000);
}
tickingClock();

var dayStart = dayjs().startOf('day'); // set the start of the day
var currentTime = dayjs(); // get the current time
var pastTime = document.getElementsByClassName('past');

for (let i = 0; i <= 23; i++) {
  var time = dayStart.add(i, 'hour'); // set the time for each hour of the day


//   loop that iterates through times of the day and signifies which ones are past,present or future
  if (currentTime.isBefore(time)) {
    console.log(`${time.format("h A")} is in the future`);
    pastTime.style.color = 'blue';
  } else if (currentTime.isAfter(time)) {
    console.log(`${time.format("h A")} is in the past`);
  } else {
    console.log(`${time.format("h A")} is the current time`);
  }
}

window.addEventListener('scroll', function() {
    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Create a new block element
      var block = document.createElement('div');
      block.className = 'block';
      block.innerHTML = '<p>Some content</p>';
      
      // Append the new block to the page
      document.body.appendChild(block);
    }
  });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


