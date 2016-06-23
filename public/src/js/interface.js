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
  }

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var key = '&appid=f5ceec348230deb171e07ab0c5a85862&units=metric';
    $.get(api + city + key, function(data) {
    $('#current-temperature').text(data.main.temp);
    });
  });


});
