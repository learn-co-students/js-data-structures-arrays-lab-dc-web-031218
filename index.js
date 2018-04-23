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
  const driver2 = [...drivers, name];
  return driver2;
}
function prependDriver(name) {
  const driver1 = [name, ...drivers];
  return driver1;
}

function removeLastDriver() {
  const lastDriver = [...drivers.slice(0,drivers.length-1)];
  return lastDriver;
}
function removeFirstDriver() {
  const firstDriver = [...drivers.slice(1)];
  return firstDriver;
}
