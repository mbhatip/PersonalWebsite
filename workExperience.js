export const loadDOM = function (listOfJobs) {
  const $workSection = $('#workSection');

  listOfJobs.forEach(job => {
    $workSection.append(workCard(job))
});
};

export const workCard = function(job) {
  return `
  <style>
  #educContainer{
    background-color: black;
  }

  </style>
  <div class="card mb-5">
  <div class="container" id="educContainer">
  <div class="columns is-vcentered">
  <div class="column is-one-quarter">

  <div class="card-image">
    <figure class="image pl-5">
      <img src=${job.img} alt="Placeholder image">
    </figure>
  </div>

  </div>

  <div class="column is-one-half">

  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="is-size-4	has-text-primary has-text-weight-bold">${job.companyName}</p>
        <p class="is-size-5 has-text-primary has-text-weight-medium	">${job.jobTitle}</p>
        <p class="is-size-6 has-text-white">${job.dates}</p>
        <p class="is-size-6 has-text-white is-italic	">${job.location}</p>
        <p class="is-size-6 has-text-white pt-3">${job.bullet1}</p>
        <p class="is-size-6 has-text-white pb-3">${job.bullet2}</p>

        <div class="tags">
        ${job.tag1}
        ${job.tag2}
        ${job.tag3}
        ${job.tag4}
        ${job.tag5}
        ${job.tag6}
        ${job.tag7}
        ${job.tag8}


        </div>

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
  companyName: "JP Morgan Chase & Co",
  jobTitle: "Incoming Software Engineer Intern",
  dates: "June 2021 to Present",
  location: "Bournemouth, UK",
  img: "https://jpmcsso.jpmorgan.com/sso/custom/web/components/APEX/images/Logo2008_JPMC_White.png",
  bullet1: "",
  bullet2: "",
  tag1: `<span class="tag is-info is-light">Java</span>`,
  tag2: `<span class="tag is-info is-light">FinnTech</span>`,
  tag3: ``,
  tag4: ``,
  tag5: ``,
  tag6: ``,
  tag7: ``,
  tag8: ``


  
}, 
{
  id: 2,
  companyName: "London School of Hygiene and Tropical Medicine",
  jobTitle: "Asociate Research Consultant",
  dates: "February 2021 to Present",
  location: "London, UK",
  img: "https://www.lshtm.ac.uk/themes/custom/lshtm/images/logo-white.svg",
  bullet1: "- Collaborated with international partners across 3 countries (UK, US and China) for a study on elderly sexual health",
  bullet2: "- Co-authored studies and directed analysis of the NATSAL and ELSA databases to garner and communicate insights from the largest and most detailed scientific studies of sexual behaviour in the world",
  tag1: `<span class="tag is-link is-light">SAS</span>`,
  tag2: `<span class="tag is-link is-light">Python</span>`,
  tag3: `<span class="tag is-success is-light">Latent Class Analysis</span>`,
  tag4: ``,
  tag5: `<span class="tag is-danger is-light">Excel</span>`,
  tag6: `<span class="tag is-danger is-light">JMP</span>`,
  tag7: ``,
  tag8: ``


},
{
  id: 3,
  companyName: "Google Cloud",
  jobTitle: "Cloud Data Analyst Programme",
  dates: "July 2020 to August 2020",
  location: "Remote, USA",
  img: "https://www.aptusdatalabs.com/wp-content/uploads/2020/10/1200px-Google_Cloud_Logo.svg.png",
  bullet1: "- Guided by Google Engineers to use Google Cloud Platform tools such as BigQuery, DataPrep and Data Studio",
  bullet2: "- Analysed over 20 large public datasets using advanced SQL and other GCP tools to garner and communicate insights",
  tag1: `<span class="tag is-link is-light">SQL</span>`,
  tag2: `<span class="tag is-link is-light">Python</span>`,
  tag3: `<span class="tag is-success is-light">Machine Learning</span>`,
  tag4: `<span class="tag is-success is-light">Cloud Computing</span>`,
  tag5: `<span class="tag is-success is-light">Data Visualization</span>`,
  tag6: `<span class="tag is-danger is-light">BigQuery</span>`,
  tag7: `<span class="tag is-danger is-light">Google Cloud Platform</span>`,
  tag8: ``

},
{
  id: 4,
  companyName: "The University of North Carolina at Chapel Hill",
  jobTitle: "Preventative Maintenance Technician",
  dates: "February 2020 to July 2020",
  location: "Chapel Hill, NC",
  img: "https://d1gntqhqj0rbcs.cloudfront.net/assets/111/whiteunclogo.png",
  bullet1: "- Reduced downtime 15% by working with a team of 12 technicians to maintain ITS Hardware/Software in UNC Classrooms",
  bullet2: "",
  tag1: `<span class="tag is-success is-light">Hardware</span>`,
  tag2: `<span class="tag is-success is-light">Tech Support</span>`,
  tag3: ``,
  tag4: ``,
  tag5: ``,
  tag6: ``,
  tag7: ``,
  tag8: ``
}
];