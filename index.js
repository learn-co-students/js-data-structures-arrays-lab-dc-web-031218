const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  const drivers2 = [...drivers, name];
  return drivers2;
}

function prependDriver(name) {
  const drivers2 = [name,...drivers];
  return drivers2;
}

function removeLastDriver() {
  // const copyOfDrivers = drivers.slice(-1);
  // return copyOfDrivers
  const copyOfDrivers = drivers.slice(0, drivers.length - 1);
  return copyOfDrivers;
}

function removeFirstDriver() {
  const copyOfDrivers = drivers.slice(1);
  return copyOfDrivers;
}
