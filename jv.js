const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');

const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const message = document.querySelector('.message');

let countSec = 0;
let countMin = 0;

const updateText = () => {
	seconds.innerHTML = `0${countSec}`.slice(-2);
	minutes.innerHTML = `0${countMin}`.slice(-2);
};

const countDown = () => {
	if (countSec === 0 && countMin === 0) {
  	return
  } else if (countSec === 0) {
  	--countMin;
    countSec = 59;
  } else {
  	--countSec;
  }

	updateText();
};

plus.onclick = () => {
	if (countSec === 59) {
  	++countMin;
    countSec = 0;
  } else {
  	++countSec;
  }
  
  updateText();
};

minus.onclick = () => {
	countDown();
};

start.onclick = () => {
	plus.disabled = true;
  minus.disabled = true;
  start.disabled = true;
  
  const intervalId = setInterval(countDown, 1000);
  const totalSec = countSec + countMin * 60;
  setTimeout(() => {
  	clearInterval(intervalId);
  	message.innerHTML = 'Done!';
  }, totalSec * 1000);
}
