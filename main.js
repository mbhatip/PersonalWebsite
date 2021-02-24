export const loadDOM = function() {
    const $root = $('#root');
    $root.append(navBar)
    $root.append(heroSection) 
};

export const navBar = function() {
    return `
    <div class="hero-head">
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
    <section class="hero is-medium is-link">
  <div class="hero-body">
    <p class="title">
      Medium hero
    </p>
    <p class="subtitle">
      Medium subtitle
    </p>
  </div>
</section>
    `
}

$(function() {
    loadDOM();
});