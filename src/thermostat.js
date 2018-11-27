
function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function(temp) {
  this.temperature - temp > 10 ? this.temperature -= temp : this.temperature = 10;
};
