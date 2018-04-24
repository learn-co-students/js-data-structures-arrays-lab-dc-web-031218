// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
	drivers.push(name);
}

function destructivelyPrependDriver(name){
	drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
	drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name){
	drivers.shift(name);
}

function appendDriver(name){
	newdrivers = [...drivers, name]
	return newdrivers;
}

function prependDriver(name){
	newdriver = [name, ...drivers]
	return newdriver;
}

function removeLastDriver(){
	newdriverz = drivers.slice(0,2)
	return newdriverz;
}

function removeFirstDriver(){
	driverz = drivers.slice(1,3)
	return driverz;
}