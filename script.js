const apiKey = '80456aafc8fab7b69b3ae5cf1c0a4a14';

$(document).ready(function () {
  $('#searchBtn').click(function () {
    const city = $('#cityInput').val().trim();
    if (!city) return;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    $.getJSON(apiUrl)
      .done(function (data) {
        $('#cityName').text(data.name);
        $('#temp').text(data.main.temp);
        $('#humidity').text(data.main.humidity);
        $('#wind').text(data.wind.speed);
        $('#condition').text(data.weather[0].description);

        $('#weatherResult').removeClass('d-none');
        $('#errorMsg').addClass('d-none');
      })
      .fail(function () {
        $('#weatherResult').addClass('d-none');
        $('#errorMsg').removeClass('d-none');
      });
  });
});
