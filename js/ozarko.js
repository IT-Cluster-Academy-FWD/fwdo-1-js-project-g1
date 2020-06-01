const selectedColor = document.getElementById('color');

const selectedBrand = document.getElementById('car-brand');

const selectedDate = document.getElementById('car-date');

const carArr = [];

const selectCarList = document.getElementsByClassName('car-list');

const sortButton = document.getElementById('car-sort-button');
sortButton.disabled = true;


const $selectedCarInfo = document.getElementById('choose-car-form');
$selectedCarInfo.addEventListener('submit', (event) => {
  event.preventDefault();
  const car = {
    color: selectedColor.value,
    brand: selectedBrand.value,
    date: selectedDate.value
  };
  selectCarList[0].innerHTML += '<li>' + car.brand + '</li>';
  carArr.push(car);
  if (carArr.length > 6) {
    sortButton.disabled = false;
  }
  console.log(carArr);
});

const greenCardList = document.getElementsByClassName('greenCarList');
const redCarList = document.getElementsByClassName('redCarList');
const pinkCarList = document.getElementsByClassName('pinkCarList');

sortButton.addEventListener('click', () => {
  for (const car of carArr) {
    if (car.color === 'green') {
      greenCardList.innerHTML += '<li> '
    }
  }
});






