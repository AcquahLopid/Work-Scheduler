// sets clock that tells the day month number day and exact time
function tickingClock(){
setInterval(() => {
  var now = dayjs().format('dddd, MMMM DD hh:mm:ss A');
  $('#currentDay').text(now);
}, 1000);
}
tickingClock();

var currentHour = dayjs(); // get the current time
var hourContainer = document.querySelector('.hour'); // get the container element

var date = dayjs(); // get the current date
var startOfDate = date.startOf('day'); // get the start of the current day
var endOfDate = date.endOf('day'); // get the end of the current day

for (let hour = startOfDate; hour.isBefore(endOfDate); hour = hour.add(1, 'hour')) {
  var hourElement = document.createElement('div');
  hourElement.classList.add('hour'); // add a class for styling
  hourElement.innerText = hour.format('hA');
  hourElement.dataset.time = hour.toISOString();
  
  var textareaElement = document.createElement('textarea');
  textareaElement.classList.add('hour-textarea'); // add a class for styling
  textareaElement.dataset.time = hour.toISOString();
  var storedNote = localStorage.getItem(hour.toISOString()); // check if a note was previously stored for this hour
  if (storedNote) {
    textareaElement.value = storedNote;
  }
  
  if (hour.isBefore(currentHour, 'hour')) {
    hourElement.classList.add('past'); // add a class for styling
    // currentHour.style.color = "red";
  } else if (hour.isSame(currentHour, 'hour')) {
    hourElement.classList.add('present'); // add a class for styling
  } else {
    hourElement.classList.add('future'); // add a class for styling
  }
  
  hourElement.appendChild(textareaElement); // append the textarea element to the hour element
  hourContainer.appendChild(hourElement); // append the hour element to the container
  
}
  // Loop through all textarea elements
document.querySelectorAll('textarea').forEach((textarea) => {
    // Get the ID of the textarea
    var textareaId = textarea.id;
    // Check if there is saved data for this textarea in localStorage
    if (localStorage.getItem(textareaId)) {
      // Retrieve the saved data and set it as the value of the textarea
      textarea.value = localStorage.getItem(textareaId);
    }
  });