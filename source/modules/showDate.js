/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */

import { DateTime } from '../../node_modules/luxon/src/luxon.js';
import { dateDisplay } from './values.js';

export default class Time {
  constructor() {
    this.now = DateTime.now();
  }

  showTime() {
    // Show Date Time
    dateDisplay.innerText = this.now.toLocaleString(DateTime.DATETIME_MED);
  }
}