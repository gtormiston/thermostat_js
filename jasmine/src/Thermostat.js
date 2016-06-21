'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype = {

  isPowerSavingModeOn: function(){
    return this.powerSavingMode === true;
  },
  switchPowerSavingMode: function(){
    this.powerSavingMode === true ? this.powerSavingMode = false : this.powerSavingMode = true;
  },
  upButton: function() {
    if(this.isMaximumTemperature()) {
      return;
    }
    this.temperature++;
  },
  downButton: function() {
    if(this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  },
  isMinimumTemperature: function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  },
  isMaximumTemperature: function() {
    if(this.isPowerSavingModeOn()) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
  },
  temperatureReset: function(){
      this.temperature = this.DEFAULT_TEMPERATURE;
  },
  energyUsage: function(){
    if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if(this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMPERATURE_PSM_ON) {
      return 'medium-usage';
    }
    return 'high-usage';
  }


};
