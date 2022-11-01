import { DateTime } from 'luxon';
import { dateDisplay } from './values.js';

export default class Time {
  constructor() {
    this.now = DateTime.now();
  }

  showTime = () => {
    // Show Date Time
    dateDisplay.innerText = this.now.toLocaleString(DateTime.DATETIME_MED);
  }
}