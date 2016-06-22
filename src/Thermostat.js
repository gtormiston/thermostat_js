(function () {
   'use strict';
}());

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this._current_temp = this.DEFAULT_TEMP;
  this.powerOn = true;
  this.maxTemp = 25;
  this.MIN_TEMP = 10;
}

Thermostat.prototype = {
  defaultTemp: function(){
      return this.DEFAULT_TEMP;
    },

  temp: function(){
    return this._current_temp;
  },

  increase: function(){
    if(this._current_temp < this.maxTemp) {
      return this._current_temp += 1;
    }
  },

  decrease: function(){
    if(this._current_temp > this.MIN_TEMP) {
      return this._current_temp -= 1;
    }
  },

  reset: function(){
    this._current_temp = this.DEFAULT_TEMP;
    return this._current_temp;
  },

  powerSave: function(){
    if(this.powerOn === false) {
      this.powerOn = true;
      this.maxTemp = 25;
      return true;
    } else {
      this.powerOn = false;
      this.maxTemp = 32;
      return false;
    }
  }

};
