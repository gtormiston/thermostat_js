(function () {
   'use strict';
}());

function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this._current_temp = this.DEFAULT_TEMP;
}

Thermostat.prototype = {
  defaultTemp: function(){
      return this.DEFAULT_TEMP;
    },

  temp: function(){
    return this._current_temp;
  },

  increase: function(){
    return this._current_temp += 1;
  },

  decrease: function(){
    return this._current_temp -= 1;
  },

  reset: function(){
    this._current_temp = this.DEFAULT_TEMP;
    return this._current_temp;
  }

};
