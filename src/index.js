// import './styles.scss';

// const container = document.createElement('div');
// container.className = 'countdown';
// document.body.appendChild(container);
// // Nesting
// // setTimeout(() => {
// //   container.innerText = 'Ready';
// //   setTimeout(() => {
// //     container.innerText = 'Steady';

// //     setTimeout(() => {
// //       container.innerText = 'Go!!';
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // function waitFor(time) {
// //   return new Promise(resolve => {
// //     setTimeout(() => {
// //       resolve();
// //     }, time);
// //   });
// // }

// // Chaining
// // waitFor(2000)
// //   .then(() => {
// //     container.innerText = 'Ready';
// //     return waitFor(2000);
// //   })
// //   .then(() => {
// //     container.innerText = 'Steady';
// //     return waitFor(2000);
// //   })
// //   .then(() => {
// //     container.innerText = 'Go';
// //   });

// //Async
// // async function runCountdown() {
// //   await waitFor(2000);
// //   container.innerText = 'READY...';
// //   await waitFor(2000);
// //   container.innerText = 'STEADY...';
// //   await waitFor(2000);
// //   container.innerText = 'GOOO!!!';
// // }
// // runCountdown();

// // Returns a random number between 0 and 100 after 1000ms
// // Promise, resolve, setTimeout, Math.random, Math.floor

// // function getRandomNumber() {
// //   return new Promise(resolve => {
// //     resolve(13);
// //   });
// // }

// // async function run() {
// //   const randomNumber = await getRandomNumber();
// //   container.innerText = randomNumber;
// // }

// // run();

// // restart animation
// // function waitFor(time) {
// //   return new Promise(resolve => {
// //     setTimeout(() => {
// //       resolve();
// //     }, time);
// //   });
// // }

// // function setInnerText(text) {
// //     container.innerText = text;
// //   }

// //   async function animateZoomIn() {
// //     container.classList.remove('animate');
// //     await waitFor(10);
// //     container.classList.add('animate');
// //   }

// //   async function runCountdown() {
// //     await waitFor(1000);
// //     await animateZoomIn();
// //     setInnerText('Ready');
// //     await waitFor(1000);
// //     await animateZoomIn();
// //     setInnerText('Steady');
// //     await waitFor(1000);
// //     await animateZoomIn();
// //     setInnerText('Go!!!');
// //   }
// //   runCountdown();

// function waitFor(time) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve();
//       }, time);
//     });
//   }

// function setInnerText(text) {
//     container.innerText = text;
//   }

//   async function animateZoomIn() {
//     container.classList.remove('animate');
//     await waitFor(10);
//     container.classList.add('animate');
//   }

// return Math.floor(Math.random() * (max - min)) + min;
// }

// async function runCountdown() {
//   await waitFor(1000);
//   await animateZoomIn();
//   setInnerText('Ready');
//   await waitFor(1000);
//   await animateZoomIn();
//   setInnerText('Steady');
//   await waitFor(1000);
//   await animateZoomIn();
//   setInnerText('Go!!!');
//   await waitFor(1000);
//   const randomNumber = getRandomNumber(0, 100);
//   setInnerText(randomNumber);
// }
// runCountdown();

import './styles.scss';

const container = document.createElement('div');
container.className = 'countdown';
document.body.appendChild(container);

// Nesting
// setTimeout(() => {
//   container.innerText = 'Ready';
//   setTimeout(() => {
//     container.innerText = 'Steady';

//     setTimeout(() => {
//       container.innerText = 'Go!!';
//     }, 1000);
//   }, 1000);
// }, 1000);

function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// Chaining
// waitFor(2000)
//   .then(() => {
//     container.innerText = 'Ready';
//     return waitFor(2000);
//   })
//   .then(() => {
//     container.innerText = 'Steady';
//     return waitFor(2000);
//   })
//   .then(() => {
//     container.innerText = 'Go';
//   });

function setInnerText(text) {
  container.innerText = text;
}

async function animateZoomIn() {
  container.classList.remove('animate');
  await waitFor(10);
  container.classList.add('animate');
}

// Returns a random number between 0 and 100 after 1000ms
// Promise, resolve, setTimeout, Math.random, Math.floor
function getRandomNumber(min, max) {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      resolve(randomNumber);
    }, 2000);
  });
}

async function runCountdown() {
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('READY...');
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('STEADY...');
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('GOOO!!!');
  await waitFor(1000);
  const randomNumber = await getRandomNumber(0, 100);
  setInnerText(randomNumber);
}
runCountdown();

// async function run() {
//   const randomNumber = await getRandomNumber();
//   container.innerText = randomNumber;
// }

// run();
