var firstName = 'John';
var lastName = 'Doe';
var age = 30;
var isSingle = false;
var canVote = true;

var test = null;

// My first comment
var fullName = firstName + ' ' + lastName;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof canVote);
console.log(test);

var user = {
  firstName: 'Mickey',
  lastName: 'Mouse',
  age: 30,
  isSingle: false,
  canVote: true,
  'full Name': 'Mickey Mouse'
};

console.log(user.lastName, user.firstName, user.age, user.isSingle, user.canVote);
console.log(user['lastName'], user['firstName'], user['age'], user['isSingle'], user['canVote'], user['full Name']);
console.log(typeof user);

// f(x, y) = x * y;
// f(1, 2) = 1 * 2; => 2
function getMultiple(x, y) {
  return x * y;
}

console.log(getMultiple(2, 4)); // f(x, y) = x * y /=> f(2, 4) = 2 * 4 /=> 8 
console.log(getMultiple(4, 4)); // f(x, y) = x * y /=> f(4, 4) = 4 * 4 /=> 16

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('John', 'Doe')); // f(fN, lN) = fN + lN /=> 'John' + ' ' + 'Doe' => 'John Doe'
console.log(getFullName('Jane', 'DOe')); // f(fN, lN) = fN + lN /=> 'Jane' + ' ' + 'Doe' => 'Jane Doe'
console.log(getFullName(user.firstName, user.lastName)); // f(fN, lN) = fN + lN /=> f('Mickie', 'Mouse') = 'Mickie' + ' ' + 'Doe' => 'Mickie Mouse'
console.log(typeof getFullName);

var users = ['John', 'Doe', 18, null];

console.log(users[0]);
console.log(users[2]);
console.log(typeof users);
console.log(typeof null);

console.log(1 + 2, 'addition'); // addition
console.log('1' + 2, 'concatenation'); // concatenation
console.log(1 - 2, 'subtraction'); // subtraction
console.log(1 * 2, 'multiplication'); // multiplication
console.log(2**2, 'exponentiation'); // exponentiation 
console.log(2 / 2, 'division'); // division
console.log(5 % 4, 'modulus (division remainder)'); //modulus (division remainder)

var testNum = 1;
console.log(++testNum, 'pre increment'); // pre increment => testNum = testNum + 1;
console.log(testNum++, 'post increment'); // post increment => testNum = testNum + 1;
console.log(testNum, 'end of increment');
 
console.log(--testNum, 'pre decrement'); // pre decrement => testNum = testNum - 1;
console.log(testNum--, 'post decrement'); // post decrement => testNum = testNum - 1;
console.log(testNum, 'end of decrement');

