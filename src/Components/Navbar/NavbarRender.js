/* eslint-disable arrow-body-style */
const NavbarRender = {
  simple: () => {
    return `
      <nav class="navbar bg-primary" role="navigation" aria-label="main navigation" id="navbar" data-sticky-top="0" data-sticky-animation="animation-slide-top" data-sticky-class-before="link-black" data-sticky-class-after="bg-white" data-testid="navbar">

        <div class="navbar-brand">
          <a class="navbar-item navbar-logo" href="https://abilis.io">
            Abilis
          </a>

          <a data-toggle-menu="#toggleMenu" role="button" class="navbar-toggle-4" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div id="toggleMenu" class="navbar-menu menu-mobile-primary-2">
          
          <ul class="navbar-start">
            <li class="navbar-item">
              <a>Home</a>
            </li>

            <li class="navbar-item">
              <a>Documentation</a>
            </li>

            <li class="navbar-item dropdown click">
              <a class="navbar-link">
                More
              </a>
              <ul class="navbar-dropdown-clicked navbar-dropdown-1 right bg-primary">
                <li class="navbar-item">
                  <a>About</a>
                </li>
                <li class="navbar-item">
                  <a>Jobs</a>
                </li>
                <li class="navbar-item">
                  <a>Contact</a>
                </li>
                <hr class="navbar-divider">
                <li class="navbar-item">
                  <a>Report an issue</a>
                </li>
              </ul>
            </li>
          </ul>

          <div class="navbar-end mobile-center">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" data-sticky-class-before="button-primary" data-sticky-class-after="button-info">
                  <strong>Sign up</strong>
                </a>
                <a class="button button-primary-light">
                  Log in
                </a>
              </div>
            </div>
          </div>

        </div>

      </nav>

      <section style="height: 100vh;"></section>
      <section style="height: 100vh;"></section>
      <section style="height: 100vh;" data-testid="scrollTarget"></section>
    `;
  },
  fast: () => {
    return `
      <nav class="navbar" role="navigation" aria-label="main navigation" id="navbar" data-sticky-type="navbar-sticky-fast" data-sticky-class-before="link-black" data-sticky-class-after="bg-white box-shadow-1">
        <div class="navbar-brand">
          <a class="navbar-item navbar-logo" href="https://abilis.io">
            Abilis
          </a>
    
          <a data-toggle-menu="#toggleMenu" role="button" class="navbar-toggle-2" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
    
        <div id="toggleMenu" class="navbar-menu menu-mobile-primary-2">
          
          <ul class="navbar-start">
            <li class="navbar-item">
              <a>Home</a>
            </li>
    
            <li class="navbar-item">
              <a>Documentation</a>
            </li>
    
            <li class="navbar-item dropdown click">
              <a class="navbar-link">
                More
              </a>
              <ul class="navbar-dropdown-clicked navbar-dropdown-1 right bg-primary">
                <li class="navbar-item">
                  <a>About</a>
                </li>
                <li class="navbar-item">
                  <a>Jobs</a>
                </li>
                <li class="navbar-item">
                  <a>Contact</a>
                </li>
                <hr class="navbar-divider">
                <li class="navbar-item">
                  <a>Report an issue</a>
                </li>
              </ul>
            </li>
          </ul>
    
          <div class="navbar-end mobile-center">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" data-sticky-class-before="button-primary" data-sticky-class-after="button-info">
                  <strong>Sign up</strong>
                </a>
                <a class="button button-primary-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
    
        </div>
    
      </nav>
    
      <section class="h-full"></section>
      <section class="h-full"></section>
      <section class="h-full"></section>
    `;
  },
};

export default NavbarRender;
