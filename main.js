const beforeList = document.querySelector('.list__content--before');
const afterList = document.querySelector('.list__content--after');

const displayArray = (items, after, key) => {
  let list = after ? afterList : beforeList;
  if (key) {
    list.innerHTML = items.map(item => item.name).join('<br/>');
  } else {
    list.innerHTML = items.join('<br/>');
  }
}

/*
** Array simple avec nombres
*/
// const nbr = [0, 42, 12, 3, 99, 1];
// displayArray(nbr, false);
// nbr.sort();
// displayArray(nbr, true);

/*
** Array simples de strings
*/
// const fruits = ['Orange π', 'Pomme π', 'Fraise π', 'PastΓ¨que π', 'Banane π', 'Citron π'];
// displayArray(fruits, false);
// fruits.sort();
// displayArray(fruits, true);

/*
** Array d'objets
*/

const fruits = [{
  name: 'Orange π',
  position: 3,
  perime: '2022-01-01',
}, {
  name: 'Pomme π',
  position: 1,
  perime: '2021-01-01',
}, {
  name: 'Fraise π',
  position: 2,
  perime: '2021-02-01',
}, {
  name: 'PastΓ¨que π',
  position: 4,
  perime: '2021-03-01',
}, {
  name: 'Banane π',
  position: 6,
  perime: '2021-04-01',
}, {
  name: 'Citron π',
  position: 5,
  perime: '2021-05-01',
}];

displayArray(fruits, false, 'name');

/*
** TRI PAR NOM
*/

fruits.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});


/*
** TRI PAR DATE
*/

fruits.sort(function (a, b) {
  return new Date(a.perime) - new Date(b.perime);
});


/*
** TRI PAR POSITION
*/

fruits.sort(function (a, b) {
  return a.position - b.position;
});

displayArray(fruits, true, 'name');