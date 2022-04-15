const btn = document.querySelector('.hamburguer');
const icon = btn.querySelector('.close');
const x = document.getElementById('Links');
let menu = false;
btn.onclick = function () {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    icon.classList.remove('hamburguer');
    icon.classList.add('close');
  } else {
    x.style.display = 'block';
  }
};
btn.addEventListener('click', () => {
  if (!menu) {
    menu = true;
  } else {
    icon.classList.remove('hamburguer');
    icon.classList.add('close');
    menu = false;
  }
});
x.addEventListener('click', () => {
  if (x.style.display === 'block') {
    x.style.display = 'none';
    menu = false;
  } else {
    x.style.display = 'flow';
    menu = true;
  }
});

const client = [
  {
    img: './pictures/client1.png" class=person alt="client1',
    name: 'Jerick Guzman.',
    city: '.Atlanta',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
  {
    img: './pictures/client2.png" class=person alt="client1',
    name: 'Jackson.',
    city: '.New York',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
  {
    img: './pictures/client3.png" class=person alt="client1',
    name: 'Angela cardenas.',
    city: '.Miami',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
  {
    img: './pictures/client4.png" class=person alt="client1',
    name: 'yessica Harold.',
    city: 'Texas',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
  {
    img: './pictures/client5.png" class=person alt="client1',
    name: 'Diego Molina.',
    city: '.Illinoise',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
  {
    img: './pictures/client6.png" class=person alt="client1',
    name: 'Abraham chantre.',
    city: '.Ohio',
    experience: 'treavelers car rentals was a great chiose good costumer service and also they are aware of the costumer was a great expirience ',
  },
];
const container = document.querySelector('.content');

client.forEach((result) => {
  const asosiado = `
  
  <img  src="${result.img}" class="person" alt="client1">
    <div class="voice">
    <h3>${result.name}</h3>
    <h5>${result.city} </h5>
    <p>${result.experience}    </p>
    </div>    
  `;
  container.innerHTML += asosiado;
});
