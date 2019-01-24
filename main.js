  $(document).ready(function () {
    setInterval(function () {
      let hour = new Date().getHours();
      if (hour < 10) {
        $('.hour').html('0' + hour);
      } else if (hour > 12) {
        hour = hour - 12;
        if (hour < 10) {
          $('.hour').html('0' + hour);
        } else {
          $('.hour').html(hour)
        }
      } else {
        $('.hour').html(hour);
      }
    }, 1000)

    setInterval(function () {
      let minutes = new Date().getMinutes();
      if (minutes < 10) {
        $('.minutes').html('0' + minutes);
      } else {
        $('.minutes').html(minutes);
      }
    })

    setInterval(function () {
      let seconds = new Date().getSeconds();
      if (seconds < 10) {
        $('.seconds').html('0' + seconds);
      } else {
        $('.seconds').html(seconds);
      }
    }, 1000);

    let weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    setInterval(function () {
      let d = new Date();
      let dow = weekday[d.getDay()];
      let mo = month[d.getMonth()];
      let num = d.getDate();
      let date = mo + " " + num;
      let yr = d.getFullYear();
      $('.day').html(dow);
      $('.month').html(date);
      $('.year').html(yr);


    }), 1000;

  })