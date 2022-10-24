import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(event) {
  const time = event.seconds;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
  // console.log(time);
}

const timeSave = localStorage.getItem(STORAGE_KEY);

if (timeSave) {
  // iframe.seconds = timeSave;
  console.log(iframe.seconds);
  player.setCurrentTime(timeSave);
}

// player.setCurrentTime(timeSave);
