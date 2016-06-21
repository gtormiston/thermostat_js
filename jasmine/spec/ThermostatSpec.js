'use strict';

describe('Thermostat', function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function() {
        expect(thermostat.temperature).toBe(20);
    });

    it('can reset with a button', function(){
      for (var i = 0; i < 11; i++) {
          thermostat.downButton();
      }
      thermostat.temperatureReset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the temperature', function() {
        expect(thermostat.temperature).toBe(20);
        thermostat.upButton();
        expect(thermostat.temperature).toBe(21);
    });

    it('decreases the temperature', function() {
        expect(thermostat.temperature).toBe(20);
        thermostat.downButton();
        expect(thermostat.temperature).toBe(19);
    });

    it('has a minimum temperature of 10', function() {
        for (var i = 0; i < 11; i++) {
            thermostat.downButton();
        }
        expect(thermostat.temperature).toEqual(10);
    });

    it('has power saving mode on by default', function() {
        expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });

    it('can switch PSM off', function() {
        thermostat.switchPowerSavingMode();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    describe('Power saving mode on', function() {
        it('has a maximum temperature of 25', function() {
            for (var i = 0; i < 6; i++) {
                thermostat.upButton();
            }
            expect(thermostat.temperature).toEqual(25);
        });
    });

    describe('Power saving mode off', function() {
        it('has a maximum temperature of 32', function() {
            spyOn(thermostat, 'isPowerSavingModeOn').and.returnValue(false);
            for (var i = 0; i < 13; i++) {
                thermostat.upButton();
            }
            expect(thermostat.temperature).toEqual(32);
        });
    });

    describe('usage levels',function(){
      describe('when the temperature less than 18', function(){
        it('is considered low energy usage',function(){
          for (var i = 0; i < 4; i++) {
              thermostat.downButton();
          }
          expect(thermostat.energyUsage()).toEqual('low-usage');
        });

      });
      describe('when the temperature is between 18 to 25', function(){
        it('is considered medium energy usage',function(){
          expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
      });
      describe('when the temperature anything else', function(){
        it('is considered high energy usage',function(){
          thermostat.powerSavingMode = false;
          for (var i = 0; i < 8; i++) {
              thermostat.upButton();
          }
          expect(thermostat.energyUsage()).toEqual('high-usage');
        });
      });


    });

});
