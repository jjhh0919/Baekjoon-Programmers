function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const monthsDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b - 1;
  for (let i = 0; i < a - 1; i++) {
    day += monthsDay[i];
  }
  return week[day % 7];
}