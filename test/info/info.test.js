/* global test expect */

import { Info } from '../../src/luxon';

//------
// .months()
//------
test('Info.months lists all the months', () => {
  expect(Info.months('long')).toEqual([
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
  ]);

  expect(Info.months('short', { localeCode: 'en' })).toEqual([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]);

  expect(Info.months('narrow', { localeCode: 'en' })).toEqual([
    'J',
    'F',
    'M',
    'A',
    'M',
    'J',
    'J',
    'A',
    'S',
    'O',
    'N',
    'D'
  ]);

  expect(Info.months('numeric', { localeCode: 'en' })).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ]);
});

test('Info.months respects the numbering system', () => {
  expect(Info.months('numeric', { localeCode: 'en', numberingSystem: 'beng' })).toEqual([
    '১',
    '২',
    '৩',
    '৪',
    '৫',
    '৬',
    '৭',
    '৮',
    '৯',
    '১০',
    '১১',
    '১২'
  ]);
});

test('Info.months respects the calendar', () => {
  expect(Info.months('long', { localeCode: 'en', outputCalendar: 'islamic' })).toEqual([
    'Rabiʻ I',
    'Rabiʻ II',
    'Jumada I',
    'Jumada II',
    'Rajab',
    'Shaʻban',
    'Ramadan',
    'Shawwal',
    'Dhuʻl-Qiʻdah',
    'Dhuʻl-Hijjah',
    'Safar',
    'Rabiʻ I'
  ]);
});

test('Info.months respects the locale', () => {
  expect(Info.months('numeric', { localeCode: 'bn' })).toEqual([
    '১',
    '২',
    '৩',
    '৪',
    '৫',
    '৬',
    '৭',
    '৮',
    '৯',
    '১০',
    '১১',
    '১২'
  ]);
  expect(Info.monthsFormat('long', { localeCode: 'ru' })).toEqual([
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]);
});

//------
// .monthsFormat()
//------
test('Info.monthsFormat lists all the months', () => {
  expect(Info.monthsFormat('long', { localeCode: 'en' })).toEqual([
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
  ]);

  // this passes, but is wrong. These are the same as the standalone values
  expect(Info.monthsFormat('long', { localeCode: 'ru' })).toEqual([
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]);

  expect(Info.monthsFormat('short', { localeCode: 'en' })).toEqual([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]);

  expect(Info.monthsFormat('numeric', { localeCode: 'en' })).toEqual([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ]);
});

//------
// .weekdays()
//------
test('Info.weekdays lists all the weekdays', () => {
  expect(Info.weekdays('long', { localeCode: 'en' })).toEqual([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]);

  expect(Info.weekdays('short', { localeCode: 'en' })).toEqual([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]);

  expect(Info.weekdays('narrow', { localeCode: 'en' })).toEqual([
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S'
  ]);

  expect(Info.weekdays('long', { localeCode: 'ru' })).toEqual([
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
  ]);
});

//------
// .weekdaysFormat()
//------
test('Info.weekdaysFormat lists all the weekdays', () => {
  expect(Info.weekdaysFormat('long', { localeCode: 'en' })).toEqual([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]);

  expect(Info.weekdaysFormat('short', { localeCode: 'en' })).toEqual([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ]);
});

//------
// .meridiems()
//------
test('Info.weekdaysFormat lists all the weekdays', () => {
  expect(Info.meridiems({ localeCode: 'en' })).toEqual(['AM', 'PM']);
  expect(Info.meridiems({ localeCode: 'de' })).toEqual(['vorm.', 'nachm.']);
});

//------
// .eras()
//------

test('Info.eras lists both eras', () => {
  expect(Info.eras()).toEqual(['BC', 'AD']);
  expect(Info.eras('short')).toEqual(['BC', 'AD']);
  expect(Info.eras('long')).toEqual(['Before Christ', 'Anno Domini']);
  expect(Info.eras('short', { localeCode: 'fr' })).toEqual(['av. J.-C.', 'ap. J.-C.']);
  expect(Info.eras('long', { localeCode: 'fr' })).toEqual([
    'avant Jésus-Christ',
    'après Jésus-Christ'
  ]);
});
