export function calculateExperience(date) {
  let fromDate = date;
  try {
    var result = getDateDifference(fromDate, new Date());
    if (result && !isNaN(result.years)) {
      let finalExperiece = ''
      finalExperiece = result.years ? result.years + ' Year' + (result.years === 1 ? ' ' : 's ') : ' '
      finalExperiece += result.months ? result.months + ' Month' + (result.months === 1 ? ' ' : 's ') : ' '
      return finalExperiece
    }
  } catch (e) {
    console.error(e);
  }
}

export function getDateDifference(startDate, endDate) {
  if (startDate > endDate) {
    return null;
  }
  let startYear = startDate.getFullYear();
  let startMonth = startDate.getMonth();
  let startDay = startDate.getDate();

  let endYear = endDate.getFullYear();
  let endMonth = endDate.getMonth();
  let endDay = endDate.getDate();

  // We calculate February based on end year as it might be a leep year which might influence the number of days.
  let february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
  let daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
  let years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);

  let months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;

  // (12 + ...) % 12 makes sure index is always between 0 and 11
  let days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay;

  return {
    years: years,
    months: months,
    days: days
  };
}