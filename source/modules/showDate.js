import { DateTime } from '../../node_modules/luxon/src/luxon.js';
import { dateDisplay } from './values.js';

export default class Time {
  constructor() {
    this.now = DateTime.now();
  }

  showTime = () => {
    // Show Date Time Here
    dateDisplay.innerText = this.now.toLocaleString(DateTime.DATETIME_MED);
  }
}