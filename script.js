const btn = document.querySelector('.icon');
const icon = btn.querySelector('.fa-bars');
const x = document.getElementById('Links');
let menu = false;
btn.onclick = function () {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
  } else {
    x.style.display = 'block';
    icon.classList.replace('fa-bars', 'fa-times');
  }
};
btn.addEventListener('click', () => {
  if (!menu) {
    icon.classList.replace('fa-bars', 'fa-times');
    menu = true;
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    menu = false;
  }
});
x.addEventListener('click', () => {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.replace('fa-times', 'fa-bars');
    menu = false;
  } else {
    x.style.display = 'flow';
    menu = true;
  }
});