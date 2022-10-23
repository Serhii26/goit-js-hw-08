import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdate, 1000));
function timeUpdate(event) {
  const time = event.seconds;
  localStorage.setItem(STORAGE_KEY, time);
}

const timeStop = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(timeStop);

// function play () {
// 	let iframe = $('#vimeo-player')[0];
// 	let player = new Vimeo.Player(iframe);
// 	let status = $('.status');

// 	player.on('pause', function() {
// 		status.text('paused');
// 	});

// 	player.on('ended', function() {
// 		status.text('ended');
// 	});

// 	player.on('timeupdate', function(data) {
// 		status.text(data.seconds + 's played');
// 	});

// 	$('button').on('click', function() {
// 		var method = $(this).text().toLowerCase();
// 		player[method]();
// 	});
// };

// player.setCurrentTime(STORAGE_KEY).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
//   seconds = STORAGE_KEY
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
