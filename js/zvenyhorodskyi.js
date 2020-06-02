const $carBrand = document.getElementById('brand');
const $carColor = document.getElementById('color');
const $carYear = document.getElementById('year');
const $carList = document.querySelector('.carList');
const $car = document.getElementById('chooseCar');
const listOfCars = [];

const sortAllCars = document.querySelector('.sortCars');
sortAllCars.disabled = true;

$car.addEventListener('submit', (event) => {
  event.preventDefault();
  let newCar = {
    brand: $carBrand.value,
    color: $carColor.value,
    year: $carYear.value,
  };
  $carList.innerHTML += '<li>' + newCar.brand + '</li>';
  listOfCars.push(newCar);
  listOfCars.sort(function (firstCar, secondCar) {
    return firstCar.year - secondCar.year;
  });
  if (listOfCars.length >= 6) {
    sortAllCars.disabled = false;
  }
});

const $blackList = document.querySelector('.black-list');
const $redList = document.querySelector('.red-list');
const $greenList = document.querySelector('.green-list');
sortAllCars.addEventListener('click', () => {
  for (const newCar of listOfCars) {
    if (newCar.color === 'black') {
      $blackList.innerHTML += '<li>' + newCar.year + ' ' + newCar.brand + ' ' + newCar.color + '</li>';
    } else if (newCar.color === 'red') {
      $redList.innerHTML += '<li>' + newCar.year + ' ' + newCar.brand + ' ' + newCar.color + '</li>';
      $redList.style.color = '#ff0000';
    } else if (newCar.color === 'green') {
      $greenList.innerHTML += '<li>' + newCar.year + ' ' + newCar.brand + ' ' + newCar.color + '</li>';
      $greenList.style.color = '#003300';
    }
  }
});
