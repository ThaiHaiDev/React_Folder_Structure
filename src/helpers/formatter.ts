import moment from 'moment-timezone';

export function FormatDateTime(time: Date, formatOutput: string = 'DD/MM/YYYY', locale: string = 'en') {
  if (!time) {
    return '';
  }

  return moment(time).locale(locale).format(formatOutput);
}

export function FormatDateFullTime(
  time: Date | string,
  { locale, format } = {
    locale: true,
    format: 'HH:mm, DD/MM/YYYY',
  },
) {
  if (!time) {
    return '';
  }

  return moment(time).utc(locale).format(format);
}

export function formatBirthday(time: Date | string, locale = 'en') {
  if (!time) {
    return '';
  }

  return moment(time).locale(locale).format('DD/MM/YYYY');
}

export function formatStartDate(time: Date | string, subDate: number) {
  if (!time) {
    return '';
  }

  return moment(time).add(subDate, 'days').locale('en').format('DD/MM/YYYY');
}

export function convertToUTC(time: string) {
  return time ? moment(time).utc().format() : '';
}

export function formatStringAndNumber(s: string) {
  const pattern = /[@#$%^&*(),.?":{}|<>]/g;

  return s.replace(pattern, '');
}

/**
 * @func convert time to UTC with format full date time
 * @note when parse with func @formatDateFullTime need to use locale = false
 * @param time
 * @param format
 */
export function convertToUTCWithFormat(time: string, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!time) {
    return '';
  }

  return moment(time).utc().format(format);
}

export function parseUTCToTime(time: string, format = 'HH:mm, DD/MM/YYYY') {
  const timeZone = moment.tz.guess();

  return moment(time).utc(true).tz(timeZone).format(format);
}

export function formatterPhoneNumber(phone: string, prefix = '+84') {
  let formattedPhone = phone.replace('+84', '').replace(/[^0-9]/g, '');

  while (formattedPhone[0] === '0') {
    formattedPhone = formattedPhone.substring(1, formattedPhone.length);
  }

  return `${prefix}${formattedPhone}`;
}

export function revertPhoneNumber(phone: string) {
  if (!phone) {
    return '';
  }

  if (phone[0] === '0') {
    phone = phone.substring(1, phone.length);

    return `${phone}`;
  }

  if (phone[0] === '+') {
    phone = phone.substring(3, phone.length);
  }

  return `${phone}`;
}

export function msToTime(s: number) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return `${hrs < 10 ? `0${hrs}` : hrs}:${mins < 10 ? `0${mins}` : `${mins}`}:${secs < 10 ? `0${secs}` : secs}`;
}

export function getMonthName(index: number) {
  const months = [
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
    'December',
  ];

  return months[index - 1];
}

export function ordinal(num: number) {
  switch (num) {
    case 1:
      return num + 'st';
      break;
    case 2:
      return num + 'nd';
      break;
    case 3:
      return num + 'rd';
      break;
    default:
      return num + 'th';
      break;
  }
}

export function getYearCurrent() {
  return moment().format('YYYY');
}

export function getFullDayCurrent() {
  return moment().format('DD/MM/YYYY');
}

export function textSliceLimit(item: string, limit: number) {
  if (item && item.length > limit) {
    return item.slice(0, limit) + '...';
  }

  return item;
}

export function fixedNumber(num: number) {
  if (num === undefined) {
    return '';
  }
  if (num % 1 === 0) {
    return num;
  }

  return num.toFixed(2);
}
