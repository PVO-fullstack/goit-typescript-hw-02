/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thuthday,
  Friday,
  Saturday,
  Sunday
}

type Day = keyof typeof WeekDays

function isWeekend(day:Day) {
  if (day === "Saturday" || day === "Sunday") {
  return true
} else false

}

isWeekend("Monday");