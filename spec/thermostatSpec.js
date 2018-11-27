'use strict';

describe('ThermostatJS', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Thermostat', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('goes up with up function', function () {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('goes down with down function', function () {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10', function () {
      thermostat.down(15);
      expect(thermostat.temperature).toEqual(10);
    });

  });
});
