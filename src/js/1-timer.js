import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let userSelectedDate;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log('onClose');
    if (selectedDates[0].getTime() > new Date()) {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    } else {
      iziToast.error({
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    }
  },
};
flatpickr(input, options);

startBtn.addEventListener('click', event => {
  const timerId = setInterval(() => {}, 1000);
});
