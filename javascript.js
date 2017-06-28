var car = {
color: "blue",
seats: 4,
weight: 2000,
state: false,
speed:0,
}
car.start = function () {
  this.state = true
}

car ["accelerate"] = function () {
  this.speed = 5
}

car.stop = function () {
  this.speed = 0
  this.state = false
}
