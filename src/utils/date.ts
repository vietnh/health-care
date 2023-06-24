import dayjs from 'dayjs'

export function formatDate(date: Date, format = 'yyyy-MM-dd') {
  return dayjs(date).format(format);
}