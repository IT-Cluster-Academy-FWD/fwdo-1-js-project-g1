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
  }
  $carList.innerHTML += '<li>' + newCar.brand + '</li>';
});

