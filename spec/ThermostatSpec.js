(function () {
   'use strict';
}());


describe('Thermostat', function(){
  var thermo;

  beforeEach(function(){
    thermo = new Thermostat();
  });

  describe('#temp', function(){
    it('shows temperature', function(){
      expect(thermo.temp()).toEqual(thermo.defaultTemp());
    });
  });

  describe('#increase', function(){
    it('increases temp by 1 degree', function(){
      expect(thermo.increase()).toEqual(thermo.defaultTemp()+1);
    });
  });

  describe('#decrease', function(){
    it('decreases temp by 1 degree', function(){
      expect(thermo.decrease()).toEqual(thermo.defaultTemp()-1);
    });
  });

  describe('#reset', function(){
    it('reset temp to default', function(){
      expect(thermo.reset()).toEqual(thermo.defaultTemp());
    });
  });



});
