$(document).ready(function () {
  let events = [
    {
      eventName: "event name",
      image: "./images/2022/event-name-(FOLDER-NAME)/img.jpg",
      eventDate: "event date (text format)",
      report: "event description",
    },
  ];

  events.forEach((event) => {
    $(".event-cards")
      .append(`<div class="card border-dark mb-3 rounded event-card" >
        <div class="row no-gutters">
          <div class="col-md-4">
          <a class="venobox" href="${event.image}"><img src="${event.image}" alt="image alt" class="card-img card-img-class "/></a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${event.eventName}</h5>
              <p class="card-text my-0"><small class="text-muted">${event.eventDate} </small></p>
              <p class="card-text">${event.report}</p>
            </div>
          </div>
        </div>
      </div>`);
  });

  $(".venobox").venobox({});
});
