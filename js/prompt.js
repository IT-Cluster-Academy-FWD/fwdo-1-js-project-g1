var firsName = prompt('What is your name?');
var lastName = prompt('What is your last name?');
var age = parseInt(prompt('What is your age?'), 10);
var pet = prompt('Do you have pets?');
var haveCar = prompt('Do you have car (yes/no)?');
var havBike = prompt('Do you have bike (yes/no)?');
var message = 'Hello ' + firsName + ' ' + lastName + '. Yor age is ' + age + '!';
var canVote = age >= 18 ? 'Yes' : 'No';

if (age >= 18) {
  message += ' And you can vote.';
} else if (age > 16) {
  message += ' And you\'ll be soon able to vote.';
} else {
  message = message + ' And you can\'t vote.';
}

/*
if (pet === 'dog') {
  message += ' I see you like dogs!';
} else if (pet === 'cat') {
  message += ' I see you like cats!';
} else {
  message += ' Very nice pet!';
}
*/

switch (pet) {
  case 'dog':
    message += ' I see you like dogs!';
    break
  case 'cat':
    message += ' I see you like cats!';
    break
  default:
    message += ' Very nice pet!';
    break
}

if (havBike === 'yse' && haveCar === 'yes') {
  message += ' Cool you have bike and a car!';
} else if (haveCar === 'yes' || havBike === 'yes') {
  message += ' Nice ride';
} else if (haveCar !== 'yse' && havBike !== 'yes') {
  message += ' Walking is good for you!';
}

document.write(message);

