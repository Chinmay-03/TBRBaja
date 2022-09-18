function calculateDaysBetweenDates(begin, end) {
  var beginDate = new Date(begin);
  var endDate = new Date(end);
  var days = (endDate - beginDate) / 1000 / 60 / 60 / 24;
  return days;
}
//function //code to turn dark mode on and off
function toggleDarkMode() {
  var body = document.body;
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
