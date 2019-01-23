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

  })