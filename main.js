export const loadDOM = function() {
    const $root = $('#root');
    $root.append(navBar)
    $root.append(heroSection) 
    $root.append(blankWhite) 
    $root.append(blankWhite) 


};

export const navBar = function() {
    return `
      <header class="navbar is-fixed-top is-transparent is-dark">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
            <p class="title is-5 has-text-white">Junead Khan</p>
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Resume
              </a>
              <a class="navbar-item">
                Projects
              </a>
              <a class="navbar-item">
              Contact
             </a>
              <span class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                <button class="button">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>GitHub</span>
              </button>
                </p>
                <p class="control">
                    <button class="button is-info">
                    <span class="icon" style="color: white;">
                    <i class="fa fa-linkedin"></i>
                    </span>
                    <span>LinkedIn</span>
                </button>
                </p>
            </div>
              </span>
            </div>
          </div>
        </div>
      </header>
    `
}

export const heroSection = function() {
    return `
    <section class="hero is-medium is-dark">
  <div class="hero-body">
  <div class="container">
  <div class="columns is-vcentered">
  <div class="column is-one-third">
  <figure class="image is-1by1">
  <img class="is-rounded" style="  max-width: 80%; max-height: 80%;" src="https://avatars.githubusercontent.com/u/54591708?s=460&u=93536f1f11be2df23349002c3feaf24c98c5328f&v=4"></figure></div>

  <div class="column is-two-thirds">
  <h1 class="title is-1 has-text-weight-bold"> Hey, I'm Junead Khan <span>👋🏽</span> </h1>
  <h1 class="title is-3">The University of North Carolina at Chapel Hill</h1>
  <h1 class="subtitle is-3">Computer Science and Biostatistics</h1>


  <div class="columns is-vcentered">
  <div class="column is-one-half"><h1 class="title is-5">Incoming Software Engineer Intern</h1><h1 class="subtitle is-5">JP Morgan Chase & Co</h1></div>

  <div class="column is-one-half"><h1 class="title is-5">Asosciate Research Consultant</h1><h1 class="subtitle is-5">London School of Hygiene and Tropical Medicine</h1></div>
  
  </div>
  <h1 class="subtitle is-3">_______</h1>


  <h1 class="subtitle is-5">Find me on LinkedIn and GitHub</h1>




  </div>


  </div>
  </div>
  </div>
</section>
    `
}

export const blankWhite = function() {
    return `
    <section class="hero is-medium is-primary">
  <div class="hero-body">
  <div class="container">
  <div class="columns is-vcentered">
  <div class="column is-one-half">
  
  <div class="card">
  <div class="container">
  <div class="columns is-vcentered">
  <div class="column is-one-quarter">

  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://www.logo.wine/a/logo/JPMorgan_Chase/JPMorgan_Chase-Logo.wine.svg" alt="Placeholder image">
    </figure>
  </div>

  </div>

  <div class="column is-one-half">

  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-5 has-text-black">JP Morgan Chase & Co</p>
        <p class="subtitle is-6 has-text-black">Incoming Software Engineer Intern</p>
        <span class="tag is-info">Java</span> <span class="tag is-info">HTML/CSS</span> <span class="tag is-info">JavaScript</span>


      </div>
    </div>

  </div>
  </div>
  </div>
  </div>

  </div>



  <div class="column is-two-thirds">
  <h1 class="title has-text-weight-bold"> Hey, I'm Junead Khan <span>👋🏽</span> </h1>
  <h1 class="title has-text-weight-bold"> Aspriing Software Engineer <span>👋🏽</span> </h1>
  <h1 class="title has-text-weight-bold"> Aspriing Software Engineer <span>👋🏽</span> </h1>

  <h1 class="title has-text-weight-bold"> Aspriing Software Engineer <span>👋🏽</span> </h1>
  <h1 class="title has-text-weight-bold"> Aspriing Software Engineer <span>👋🏽</span> </h1>
  <h1 class="title has-text-weight-bold"> Aspriing Software Engineer <span>👋🏽</span> </h1>

  
  </div>


  </div>
  </div>
  </div>
</section>
    `
}


$(function() {
    loadDOM();
});