export const loadDOM = function (listOfJobs) {
  const $workSection = $('#achvSection');

  $workSection.append(achievementCard())

};

export const achievementCard = function() {
  return `
  <style>
  #educContainer{
    background-color: black;
  }

  </style>
  <div class="column">
  <div class="card mb-5">
  <div class="container" id="educContainer">

  <div class="card-image">
    <figure class="image pl-5">
      <img src="" alt="Placeholder image">
    </figure>
  </div>

  </div>

  <div class="column is-one-half">

  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="is-size-4	has-text-primary has-text-weight-bold">Morehead-Cain</p>
        <p class="is-size-5 has-text-white has-text-weight-medium	">LOL</p>
        <p class="is-size-6 has-text-white">LOL</p>
        <p class="is-size-6 has-text-white pt-3">LOL</p>
        <p class="is-size-6 has-text-white pb-3">LOL</p>

        <div class="tags">

        </div>

      </div>
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
  companyName: "The University of North Carolina at Chapel Hill",
  jobTitle: "Bachelor of Science - BSPH Computer Science and Biostatistics",
  dates: "Minor in Neuroscience",
  location: "",
  img: "https://d1gntqhqj0rbcs.cloudfront.net/assets/111/whiteunclogo.png",
  bullet1: "",
  bullet2: "",
  tag1: ``,
  tag2: ``,
  tag3: ``,
  tag4: ``,
  tag5: ``,
  tag6: ``,
  tag7: ``,
  tag8: `` 
}
];