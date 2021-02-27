export const loadDOM = function (listOfJobs) {
  const $workSection = $('#achvSection');

  listOfJobs.forEach(job => {
    $workSection.append(achievementCard(job))
  });

};

export const achievementCard = function(achv) {
  return `
  <style>
  #achvCard{
    background-color: black;
  }

  </style>
  <div class = "column">
  <div class="card" id="achvCard">
  <div class="card-image">
    <figure class="image is-1by1">
      <img src=${achv.img} alt="Placeholder image">
    </figure>
  </div>
  
  <div class="card-content">
    <div class="content">
    <p class="title is-6 pb-3 has-text-info">${achv.name}</p>
    <p class="subtitle is-7	has-text-white">${achv.description}</p>

    </div>
  </div>
</div>
</div>

  `
}

$(function () {
  loadDOM(workData);
});

/*
SEE DATA BELOW
*/

const workData = [
  {
  id: 1,
  name: "Morehead-Cain Scholar",
  description: "Prestigous merit scholarship awarded on leadership, scholarship and physical vigour",
  img: "https://pbs.twimg.com/profile_images/935221730867429376/1ZlBy2PM_400x400.jpg"
},
{
  id: 2,
  name: "Honors Carolina",
  description: "Highly competitive academic program admitting 10% of each incoming class",
  img: "assets/honorsLogo.png"
},
{
  id: 3,
  name: "US Programme Scholar",
  description: "Selected amongst the UK's brightest students to explore US higher education",
  img: "assets/suttonlogo.png"
},
{
  id: 4,
  name: "Young Entrepreneur of the Year",
  description: "Recognized at Slough Youth Awards 2018",
  img: "https://pbs.twimg.com/media/DN-hLv2WsAAbICq.jpg"
},
{
  id: 5,
  name: "US-UK Fulbright Commission",
  description: "Recieved support for US College applications.",
  img: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10730770_10152892259022474_5518224321102718617_n.png?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=cLsGWseFCNkAX8KHxCJ&_nc_ht=scontent-iad3-1.xx&oh=0bf7e59bdf0fc8194e9d66aa2794064c&oe=606078F4"
}
];