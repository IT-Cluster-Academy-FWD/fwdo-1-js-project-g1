const $car = document.getElementById('chose-car');
const $carColor = document.getElementById('car-color');
const $carModel = document.getElementById('car-model');
const $carYear = document.getElementById('car-year');
const $carList = document.querySelector(".car-list");
const $sortButton = document.querySelector('#sort-button');
const listOfCars = [];
$sortButton.disabled = true;

$car.addEventListener('submit', function(event) {
  event.preventDefault();
  const car = {
    color: $carColor.value,
    model: $carModel.value,
    year: $carYear.value,
  };
  $carList.innerHTML += '<li>' + car.model + '</li>'
});