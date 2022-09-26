/* eslint-disable */
import { DateTime } from './Luxon.js';

const loadDate = () => {
  const date = DateTime.now();

  const displayDate = document.querySelector('.time');

  displayDate.textContent = `${date.toLocaleString(DateTime.DATETIME_MED)}`;
};

export default loadDate;