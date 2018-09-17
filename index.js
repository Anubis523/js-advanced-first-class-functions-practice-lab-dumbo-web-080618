// Code your solution in this file!
//Practice using forEach
//Practice using sort
//Practice using reduce
//logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(drivers){
  drivers.forEach(driver=> console.log(driver.name))
}
// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers,location){
  drivers.filter(driver => driver.hometown === location).forEach(eachDriver => console.log(eachDriver.name))
}
// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(drivers) {
  let temp = [...drivers]
  return temp.sort((a, b) => a.revenue - b.revenue)
}
// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
function driversByName(drivers){
  let temp_drivers = [...drivers]
  return temp_drivers.sort((a, b) => a.name.localeCompare(b.name))
}
// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
function totalRevenue(drivers){
  return drivers.reduce((acc, next)=>(acc += next.revenue), 0)
}
// averageRevenue() — Receives an array 
function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}