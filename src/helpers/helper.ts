export function getTodaysDate() {
  const today = new Date();
  const dayOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ][today.getDay()];
  const dayOfMonth = today.getDate();
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ][today.getMonth()];
  return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}
