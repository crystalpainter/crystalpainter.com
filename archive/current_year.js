theDate = new Date()

var months = new Array(
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
)

var day = theDate.getDate()

var textdate = 0

if (theDate.getYear() < 2000) textdate = 1900

textdate = theDate.getYear() + textdate

document.write(textdate)
