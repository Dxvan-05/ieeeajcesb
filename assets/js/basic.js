$(document).ready(function() {
    const date = new Date();

    const webMaster = {
        name: "Tonal Mathew",
        year: date.getFullYear(),
    };

    $(".copyright").html(` . Maintained  by <a target="_blank" href="https://github.com/tonalmathew">${webMaster.name}</a>`);

    $(
        ".credits"
    ).html(`© ${webMaster.year} IEEE SB AJCE. Made with <span style="color:red">&#10084;</span> by <a target="_blank"
								>Joyal Joseph</a></span>`);

    // News Updates
    let badge = 0;
    const newsUpdates = true;

    const UpdateNews = (newsUpdates) => {
        if (newsUpdates) {
            const newsList = {
                news: [
                    {
                        title: "ECO-LUTION",
                        description: "The WiE AG of IEEE SB AJCE brings to you ✨  LEARN . THINK . DO FIGMA , an unparalleled hands on experience with Figma. <br /> 📌 Speaker - <b> Mr. Vyshakh C R </b> <br /> (UX UI designer, Autosmarts)",
                        link: null,
                        date: 25,
                        month: "April",
                        year: 2021,
                        time: "11:00 am",
                    },
                ],
            };

            // To get Month Name
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            let todaysDate = new Date();
            let date = todaysDate.getDate();
            let month = monthNames[todaysDate.getMonth()];
            let year = todaysDate.getFullYear();


            // number of news
            badge = 0;
            // Updates the element with text new Updates
            $("#news-updates").text("New Updates");
            // Empties the Ul Element
            $(".news-list").empty();

            // Based on the number of news the cards are generated
            newsList.news.forEach((news) => {
                // checks whether the date of the event is greater than the present date
                if (date <= news.date && news.month == month && news.year == year) {
                    // increment the value based on the nuuumber of news.
                    badge++;
                    $(".badge-notify").text(`${badge}`);
                    // will append the card for each news.
                    if (news.link) {
                        $(".news-list").append(
                            `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}<a href="${news.link}"><small>( Register )</small></a></div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`
                        );
                    } else {
                        $(".news-list").append(
                            `<div class="card-news-list"><div class="card-title"><strong>${news.title}</strong></div><div class="card-content">${news.description}</div><div class="card-footer">${news.date}<sup>th</sup>${news.month} ${news.year} - ${news.time}</div></div>`
                        );
                    }
                }
            });
        } else {
            badge = 0;
            $(".badge-notify").text(`${badge}`);
            $("#news-updates").text("No News Updates");
        }

    };

    UpdateNews(newsUpdates); // function call
});