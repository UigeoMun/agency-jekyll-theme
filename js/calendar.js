$(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    defaultView: 'agendaWeek',
    
    weekends: true, // will hide Saturdays and Sundays
    header: {
      left: 'agendaWeek,agendaDay',
      center: 'title',
      right: 'addEvent'
    },
    customButtons: {
      addEvent: {
        text: 'New Appointment',
        click: function() {
          $('#event_add').modal({keyboard: false});
        }
      }
    },
    contentHeight: 500,
    eventLimit: true, // for all non-agenda views
    views: {
      agenda: {
        eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
      }
    },
    googleCalendarApiKey: 'AIzaSyBO2KtR_-kySyeIZWvC8tvPfIfz6SnaYXA',
    events: {
      googleCalendarId: 'ugmun@deepbio.co.kr',
      className: 'event-1'
    },


  })

  

  

});
