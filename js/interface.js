$(document).ready(function(){
  var thermo = new Thermostat();
    updateTemp();

  $('#increase').click(function(){
    thermo.increase();
    updateTemp();
  });
  $('#decrease').click(function(){
    thermo.decrease();
    updateTemp();
  });
  $('#reset').click(function(){
    thermo.reset();
    updateTemp();
  });
  $('#powerSave').click(function(){
    thermo.powerSave();
    $('#powersaving').text(thermo.powerSaveStatus());
  });

  function updateTemp(){
    $('#temperature').text(thermo.temp());
    $('#temperature').attr('class', thermo.energyUsage());
  };

});
