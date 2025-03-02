import moment from 'moment'

export const DateFotmatter = (date) => {
  return moment(date).format('ll');
}
