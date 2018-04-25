// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  a = drivers.slice();
  a.push(name);
  return a;
}

function prependDriver(name) {
  a = drivers.slice();
  a.unshift(name);
  return a;
}

function removeLastDriver() {
  a = drivers.slice();
  a.pop();
  return a;
}

function removeFirstDriver() {
  a = drivers.slice();
  a.shift();
  return a;
}
