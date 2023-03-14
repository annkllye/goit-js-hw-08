import throttle from 'lodash.throttle';
import playerEl from '@vimeo/player';

const iframeEl = document.querySelector('iframe');
const player = new playerEl(iframeEl);


player.on('timeupdate', throttle(function (t) {
   localStorage.setItem("videoplayer-current-time",
      JSON.stringify(t))}, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds);
