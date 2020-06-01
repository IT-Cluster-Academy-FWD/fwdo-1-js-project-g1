const $car = document.getElementById("selected-items-form");
const $carBrand = document.getElementById("choose-car");
const $carColor = document.getElementById("choose-color");
const $carYear = document.getElementById("choose-year");
const $listOfCars = document.querySelector(".list-of-cars");
const $sortButton = document.querySelector(".sort-button");
const cars = [];
$sortButton.disabled = true;

$car.addEventListener("submit", (event) => {
  event.preventDefault();
  const car = {
    brand: $carBrand.value,
    color: $carColor.value,
    year: $carYear.value
  };
  $listOfCars.innerHTML += '<li>' + car.brand + '</li>';
  cars.push(car);
  if (cars.length > 6) {
    $sortButton.disabled = false;
  }
});

const $redList = document.querySelector(".brand-list");
const $greenList = document.querySelector(".color-list");
const $yellowList = document.querySelector(".year-list");
$sortButton.addEventListener('click', () => {
  for (const car of cars) {
    if (car.color === 'red') {
      $redList.innerHTML += '<li>' + car.brand + ' ' + car.year + ' ' + car.color + '</li>' // -> <li>BMW, Read, 2001</li>
    } else if (car.color === 'green') {
      $greenList.innerHTML += '<li>' + car.brand + ' ' + car.year + ' ' + car.color + '</li>';
    } else if (car.color === 'yellow') {
      $yellowList.innerHTML +=  '<li>' + car.brand + ' ' + car.year + ' ' + car.color + '</li>';
    }
  }
});

