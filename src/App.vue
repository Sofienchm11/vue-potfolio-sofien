<template>
  <div id="app">
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand sofien_logo" href="#menu">Sofien</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right menu">
            <li><router-link to="/#aboutme">About me</router-link></li>
            <li><a href="#portfolio" class="menu-color">Portfolio</a></li>
            <li><a href="#process" class="menu-color">Process</a></li>
            <li><a href="#whatido" class="menu-color">What i do</a></li>
            <li><a href="#experience" class="menu-color">Experience</a></li>
            <li><a href="#review" class="menu-color">Testimonials</a></li>
            <li><a href="#contact" class="menu-color">HIRE ME</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Me</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/whatido">What i do</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px 0px;
  background-color: #2d313f;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
