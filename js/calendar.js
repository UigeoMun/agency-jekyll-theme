$(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    defaultView: 'agendaWeek',
    themeSystem: 'bootstrap4',
    weekends: true, // will hide Saturdays and Sundays
    header: {
      left: 'month,agendaWeek,',
      center: 'title',
    },
    contentHeight: 500,
    eventLimit: true, // for all non-agenda views
    views: {
      agenda: {
        eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
      }
    },
    // googleCalendarApiKey: 'AIzaSyBO2KtR_-kySyeIZWvC8tvPfIfz6SnaYXA',
    // events: {
    //   googleCalendarId: 'ugmun@deepbio.co.kr',
    //   className: 'event-1'
    // },
    events : [
      {
        title : 'USCAP D1',
        start : '2019-01-14'
      },
      {
        title : 'USCAP D2',
        start : '2019-01-15',
      },
      {
        title : 'USCAP D3',
        start : '2019-01-16',
      }
    ],
    eventSources: [

      // your event source
      {
       
        events: [ // put the array in the `events` property
          {
            title  : 'event1',
            start  : '2019-01-15T09:10',
            end    : '2019-01-15T11:40'
          },
          {
            title  : 'event1',
            start  : '2019-01-14T09:10',
            end    : '2019-01-14T15:40'
          },
          {
            title  : 'event2',
            start  : '2019-01-15T09:10',
            end    : '2019-01-15T11:40'
          },
          {
            title  : 'event3',
            start  : '2019-01-15T17:10',
            end    : '2019-01-15T19:40'
          },
          {
            title  : 'event3',
            start  : '2019-01-16T12:30:00',
            end  : '2019-01-16T13:00:00',
          }
        ],
        color: 'secondary',     // an option!
        textColor: 'white', // an option!

      },
    
  
      // any other event sources...
  
    ]
  
 

    
    



  })

  

  

});
