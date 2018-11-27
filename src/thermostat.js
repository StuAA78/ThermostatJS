
function Thermostat() {
  this.temperature = 20;
  this.power_saving = true;
}

Thermostat.prototype.up = function(temp) {
  var max_temp;
  if (this.power_saving) { max_temp = 25; } 
  else { max_temp = 32; }
  this.temperature + temp < max_temp ? this.temperature += temp : this.temperature = max_temp;
};

Thermostat.prototype.down = function(temp) {
  this.temperature - temp > 10 ? this.temperature -= temp : this.temperature = 10;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.current_usage = function() {
  if (this.temperature < 18) { return "low-usage"; } 
  else if (this.temperature < 25)  { return "medium-usage"; }
  else { return "high-usage"; }
};