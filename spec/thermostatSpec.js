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
      thermostat.up(1);
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
    it('has a max temp of 25 if power saving is on', function () {
      thermostat.up(10);
      expect(thermostat.temperature).toEqual(25);
    });
    it('has a max temp of 32 if power saving is off', function () {
      thermostat.power_saving = false;
      thermostat.up(15);
      expect(thermostat.temperature).toEqual(32);
    });
    it('resets the temp to 20 with the reset function', function () {
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('temp is 15 is low-usage', function () {
      thermostat.down(5);
      expect(thermostat.current_usage()).toEqual("low-usage");
    });
    it('temp is 20 is medium-usage', function () {
      expect(thermostat.current_usage()).toEqual("medium-usage");
    });
    it('temp is 30 is high-usage', function () {
      thermostat.up(10);
      expect(thermostat.current_usage()).toEqual("high-usage");
    });
  });
});
