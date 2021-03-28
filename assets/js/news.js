function newsData() {
  const newsList = [
    {
      id: "1",
      name: "Webinar",
      type: "Webinar",
      description:
        "Developing a Culture of Continual Learning & Personal Branding",
      date: "May/19/2020",
    },
    {
      id: "2",
      name: "Webinar",
      type: "Webinar",
      description:
        "Open Source Programming & Design of Custom Library for Arduino IDE",
      date: "May/20/2020",
    },
    {
      id: "3",
      name: "Webinar",
      type: "Webinar",
      description: "Invisibility Cloak",
      date: "July/21/2020",
    },
    {
      id: "4",
      name: "Webinar",
      type: "Webinar",
      description: "Introduction To Machine Learning",
      date: "June/30/2020",
    },
    {
      id: "5",
      name: "Webinar",
      type: "Webinar",
      description: "Volunteering with IEEE",
      date: "June/30/2020",
    },
    {
      id: "6",
      name: "Webinar",
      type: "Webinar",
      description: "Canva",
      date: "July/30/2020",
    },
    {
      id: "7",
      name: "ExeCom Training",
      type: "ExeCom Training",
      description:
        "Student Branch ExeCom Training for IEEE SB AJCE and IEEE SB GECK",
      date: "February/14/2021",
    },
    {
      id: "8",
      name: "Scientastic",
      type: "event",
      badge: "8-day event",
      description: "Science Week Celebration 2021 (21st - 28th February)",
      date: "February/21/2021",
    },
    {
      id: "9",
      name: "Article Writing",
      type: "event",
      description:
        "Share your article and win amazing cash prize and certificates❗ Last date for submission February-27",
      date: "February/21/2021",
    },
    {
      id: "10",
      name: "Webinar",
      type: "webinar",
      description: "Science in everyday life : From Kitchen to Cryptography 👨‍💻",
      date: "February/27/2021",
    },
    {
      id: "11",
      name: "JAM",
      type: "Competition",
      description:
        "JAM comprtition on the topic : Science in everyday life 🧪  Last date for submission February-27",
      date: "February/23/2021",
    },
    {
      id: "12",
      name: "Poster Designing",
      type: "Competition",
      description:
        "Poster Designing Competition, Topic: Conservation of electricty (school level), 2021 International Year of Sustainable Development (Undergraduate level). Share your poster and win amazing cash prizes and certificates 🎉. Last date for submission February-27",
      date: "February/23/2021",
    },
    {
      id: "13",
      name: "Science Quiz",
      type: "Competition",
      description:
        "Test your knowledge of scientifc facts and applications by participating in our fun quiz ✨",
      date: "February/27/2021",
    },
  ];

  let events_2020 = [
    {
      id: 14,
      name: "Tech Talk - 2",
      date: "April/06/2020",
      type: "",
      description:
        "Tech talk was given by MrRichu Bini on the topic Basics of Arduino. The talk was very informative and captivating. It was enlightening to learn the basics of a fascinating open-source platform which could be used for creating interactive objects. Talk also included discussions on single-board microcontroller, Arduino variants and open - source hardware.",
    },
    {
      id: 15,
      type: "",
      name: "TECHNOJAM",
      date: "May/15/2020",
      description:
        "The student branch has presented an informative and technically profound Technojam which was open to all College students. The TechnoJam contest was held from 15th to 18th of May. Prizes worth Rs.1750 willbe awarded to the winners. A host of entries flocked in and the result, was a really tight competition where a lot of the contestants were neck to neck. At the end of the day, we have three winners based on thevarious judgement criteria. ",
    },
    {
      id: 16,
      type: "",

      name: "Pitch &amp; Protect–Pro event of IEEE KHM",
      date: " May/25/2020",
      description:
        "An online idea pitching cum debate team event was conducted by the SB in association with IEEE Kochi Hub as a part of the clusterevents conducted as pre events of IEEE KHM. Here the teams are  given a problem to which they have to provide an innovative solution and later they have to defend their idea during the debate. An effective team consisting of four teams was one of the success factors behind the programme.",
    },
    {
      id: 17,

      name: "DuoZest",
      type: "",

      date: "October/06/2020",

      description:
        "This event was a one hour session on AI in Medical Imaging .The webinar dealt with the use of Artificial Intelligence in Diagnostic Medical Imaging .It was a collaboration with IEEE student branch of UKF College of Engineering. All the attendees were provided with certificates .Around 50 participants were there and we received a lot of positive feedback .",
    },
    {
      id: 18,
      type: "",

      name: "LEARN. THINK. DO PHOTOSHOP",
      date: "August/2/2020",
      description:
        "A hands-on session on Photoshop was conducted by Mr. Geen Geo on 2nd August. Many key tools were introduced and explained to the participants. A poster designing competition was subsequently held on 3rd August and had 25 participants.",
    },
    {
      id: 19,

      name: "GAME OF CODES",

      date: " March/16/2020",
      type: "",

      description:
        "Game of codes was an intra-college online coding competition .There were about 60 participants .Competition was for four hours .Cash prizes for top 3 and top female coder were also awarded .",
    },
    {
      id: 20,
      type: "",

      name: "QuaRunTime",

      date: "May/28/2020",

      description:
        "QuaRunTime was a 6 days event conducted by CS Chapter IEEE AJCE SB. it was a series of event. We had a total of 262 registrations, out of them more than 50% were externals.  We  received around 100 feedbacks  conveying that the  event was very  interesting and useful .Cash awards worth  ₹2000 was awarded",
    },
    {
      id: 21,
      type: "",

      name: "HACK@AJCE",

      date: "October/17/2020",

      description:
        "This event  basically consisted of two talks by two speakers . The first session was taken by Abraham reji a Free software developer and Debian Contributor and his topic was about free open source software and its basics .James K Jose a Free Stack Web Developer and Open Source Enthusiast took  the second session about Introduction to Git .This session was  two and a half hours long . Later four repositories were created by the  SB and  this was made available to students to participate in hacktoberfest .",
    },
    {
      id: 22,

      name: " Introduction To Design Thinking",
      type: "",

      date: "November/14/2020",

      description:
        "Webinar was conducted on Saturday 14 November .Most of the participants were externals .In this session which is lasted for one hour,things were discussed about the basics of design and also taught to design with photoshop .We have received a lots of positive feedbacks conveying that the session was very useful .",
    },
    {
      id: 23,

      name: " Webinar on  LATEX",

      date: "November/14/2020",
      type: "",

      description:
        " On July 21st and 22nd a webinar was hosted by CSE Dept. of Amal Jyothi College Of Engineering in association with IEEE AJCE SB and ACM Chapter AJCE, on the topic LaTeX presented by Prof.Shiney Thomas, Associate Professor, CSE, Amal Jyothi College Of Engineering. We had a total of 217 registrations, out of which out of which there were Faculties of different colleges and Research scholars. We also had registration from different countries.",
    },
    {
      id: 24,
      name: " Mentor.Me",
      date: "November/14/2020",
      type: "",
      description:
        "This event was conducted by three CS Chapters namely IEEE CS SBC AJCE ,IEEE CS SBC MACE and IEEE CS SBC NSSCE . It is a two month long program which is still going on .10 teams have registered till now . Mentoring is for 5 weeks from the starting date .Mentor will guide the team and help them to implement the ideas .",
    },
    {
      id: 25,
      name: " WEEKLY MAGAZINE",
      date: "",
      type: "",
      description:
        "Technology is best when it brings people together... .We have decided to introduce a weekly magazine which comprises the current innovations in the field of Technology .A team was formed to work for this and we have released two Magazines online yet . We are releasing the Magazine on the weekends . ",
    },
    {
      id: 26,
      name: " Topic: phase locked loop-an application approach",
      date: "June/03/2020",
      type: "Webinar",
      description:
        "A webinar on Phase Locked Loop – an application approach was conducted on Wednesday, 3 June. The webinar session was well structured and include various topics like fundamentals of Phase Locked Loop, its working and significance in communication area. The session helped students to learn about the design of PLL under different applications. The participants count was around 63 and largely comprised of students. We got good responses in the chat box.",
    },
    {
      id: 27,
      name: " Unwind to be a professional",
      date: "August/29/2020",
      type: "Webinar",
      description:
        "This was a one hour session by Anu Abraham Mathew ,Chief Advisor -Student Council and Associate Professor, Department of ECE ,Amal Jyothi College of Engineering with 100 participants.",
    },
    {
      id: 28,
      name: "Vulnerability occurrence in softwares and their removal  ",
      date: "September/06/2020",
      type: "Webinar",
      description:
        "This was a one hour session took by Ms Swati Narang who is a certified ICT Trainer and Teacher at St.Xavier's school ,Delhi .Around 100 participants were there .",
    },
    {
      id: 29,
      name:
        "A closer look at the English language education in Indian schools  ",
      date: "September/19/2020",
      type: "Webinar",
      description:
        "This was a one hour session took by Isha Polson, B.Ed. Student in Regional Institute of Education ,Ajmer with 100 participants ",
    },
  ];

  let events_2019 = [
    {
      id: 30,
      name: "TALK ON “BEYOND THE SKY”",
      date: "January/19/2019",
      type: "Webinar",
      description:
        "As part of the science week, a meeting was conducted for the members. Our branch counsellor expanded the main theme ‘Beyond the sky’. Fellow student speakers gave talks on space stations. Careers and scope in space science were elaborated to students. Initiatives and pioneering undertaken by SpaceX were highlighted to students. A talk on the impact space exploration could have on population crisis was carried out. Prelims for the quiz on basic astronomy was conducted.",
    },
    {
      id: 31,
      name: "TALK ON “ENGINEERING AND WOMEN”",
      date: "January/20/2019",
      type: "Webinar",
      description:
        "WIE week started with an orientation for the WIE members based on the topic ‘Engineering and Women’ in association with IEEE WIE affinity group of AJCE SB. SB Vice Chair elaborated on women engineers in India and gender ratios. She described the different job sectors under engineering in India. A Talk on ‘The world we see is the work of an engineer’ was given by branch counsellor. He explained to students the roles and benefits a LinkedIn account has.",
    },
    {
      id: 32,
      name: " SPECTRUM TALK",
      date: "June/20/2019",
      type: "Webinar",
      description:
        "A talk based on the March edition of Spectrum magazine was held on 21 st March. The talk was given by Akin Babu Joseph, Chair of IAS Chapter IEEE AJCE SB. The members discussed various topics from the magazine",
    },
  ];

  let events_2018 = [
    {
      id: 33,
      name: "Management Session",
      date: "March/09/2018",
      type: "Webinar",
      description:
        "A session in Management and Entrepreneurship was hosted as a part of Minerva 3.0 to enlighten the hidden entrepreneur within them",
    },
    {
      id: 34,
      name: "Basic Electrical",
      date: "March/09/2018",
      type: "Webinar",
      description:
        "A basic electrical workshop was conducted which taught how electrical wiring is done in a house and how to change faulty electrical components",
    },
    {
      id: 35,
      name: "Assembling a PC",
      date: "March/09/2018",
      type: "Webinar",
      description:
        "The purpose of this workshop was to make people aware of how a computer is put together and the functions of different component.",
    },
  ];

  let events_2017 = [
    {
      id: 36,
      name: "Java Workshop ",
      date: "October/04/2017",
      type: "Webinar",
      description: "Billions of devices run on Java. Knowing java enables students to build innovative applications on the web, mobile, electronic devices etc",
    },
    {
      id: 37,
      name: "Java Workshop ",
      date: "October/06/2017",
      type: "Webinar",
      description: "The workshop in Android helps in familiarising the android app studio IDE and how to make your first app and launch it on the google playstore",
    },
    {
      id: 38,
      name: "Photoshop Workshop ",
      date: "October/09/2017",
      type: "Webinar",
      description: "Photoshop is used everywhere from poster making to App UI designing. This workshop is for creative students who can convert their imagination to a digital reality.",
    },
  ]
  let events = [...newsList, ...events_2020, ...events_2019, ...events_2018, ...events_2017];

  $("#calendar").evoCalendar();
  $("#calendar").evoCalendar("addCalendarEvent", events);
}

newsData();
