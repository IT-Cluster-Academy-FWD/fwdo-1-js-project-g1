var firstName = prompt('Яке Ваше ім\'я?');
var age = parseInt(prompt('Скільки Вам років?'), 10);
var ocupation = prompt('Ким Ви працюєте?');
var actor = prompt('Ваш улюблений актор?');
var color = prompt('Ваш улюблений колір?');
var canVote = age >= 18 ? 'вже дозволено' : 'ще не дозволено';

var message = 'Привіт ' + firstName + ', я бачу вам ' + age + ' років, як я бачу вам  ' + canVote + ' голосувати. Ви працюєте ' + ocupation + '. Я теж люблю ' + color + ' колір. ' + actor + ' теж один з моїх улюблених акторів.';


document.write(message);