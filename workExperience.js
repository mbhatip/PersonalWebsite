export const loadDOM = function (listOfJobs) {
  const $workSection = $('#workSection');

  listOfJobs.forEach(job => {
    $workSection.append(workCard(job))
});
};

export const workCard = function(job) {
  return `
  <div class="container">
  <div class="columns is-vcentered">
  <div class="column is-one-half">
  
  <div class="card">
  <div class="container">
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
        <p class="is-size-4	has-text-black has-text-weight-bold">${job.companyName}</p>
        <p class="is-size-5 has-text-black has-text-weight-medium	">${job.jobTitle}</p>
        <p class="is-size-6 has-text-dark">${job.dates}</p>
        <p class="is-size-6 has-text-dark is-italic	">${job.location}</p>
        <p class="is-size-6 has-text-dark">June 2021 to Present</p>
        <p class="is-size-6 has-text-dark">June 2021 to Present</p>
        <p class="is-size-6 has-text-dark">June 2021 to Present</p>


        <span class="tag is-info">Java</span> <span class="tag is-info">HTML/CSS</span> <span class="tag is-info">JavaScript</span>


      </div>
    </div>

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
  img: "https://www.summit4success.com/rax/images/business-directory/JP%20Morgan%20Chase.png",

}, 
{
  id: 2,
  companyName: "London School of Hygiene and Tropical Medicine",
  jobTitle: "Asociate Research Consultant",
  dates: "February 2021 to Present",
  location: "London, UK",
  img: "https://www.lshtm.ac.uk/sites/default/files/LSHTM-logo-bw.jpg",
},
{
  id: 3,
  companyName: "Google Cloud",
  jobTitle: "Cloud Data Analyst Programme",
  dates: "July 2020 to August 2020",
  location: "Remote, USA",
  img: "https://www.amd.com/system/files/2020-02/430445-google-cloud-logo-1260x300.png",
},
{
  id: 4,
  companyName: "University of North Carolina at Chapel Hill",
  jobTitle: "Preventative Maintenance Technician",
  dates: "February 2020 to July 2020",
  location: "Chapel Hill, NC",
  img: "https://i.pinimg.com/originals/15/3a/cb/153acbc4b616698ca3f4ddd028dc8aa4.jpg",
}
];