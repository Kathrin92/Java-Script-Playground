import './style.scss';

const container = document.createElement('div');
container.className = 'countdown';
document.body.appendChild(container);

setTimeout(() => {
  container.innerText = 'READY...';

  setTimeout(() => {
    container.innerText = 'STEADY...';

    setTimeout(() => {
      container.innerText = 'GO!!!';
    }, 1000);
  }, 1000);
}, 1000);
