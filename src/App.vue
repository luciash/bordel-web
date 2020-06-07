<template>
  <div id="app">
    <div class="content">
      <Nav/>
      <div class="container">
        <router-view/>
      </div>
      <div class="push"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@import "styles/normalize.css";
@import "styles/skeleton.css";

@font-face {
  font-family: 'TTCommons';
  src: url('./assets/font/TTCommons-Light.eot'); /* IE9 Compat Modes */
  src: url('./assets/font/TTCommons-Light.woff') format('woff'), /* Pretty Modern Browsers */
       url('./assets/font/TTCommons-Light.ttf')  format('truetype'); /* Safari, Android, iOS */
}

#app {
  font-family: 'TTCommons';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background: black;
    color: silver;
    background-image: url(./assets/pp.png);
    background-position: right;
    background-position-x: 50vh;
    background-position-y: 20vh;
    background-repeat: no-repeat;
    background-size: 70vh;
  }

  h1, h2, h3, h4, h5 {
    text-align: left;
  }

  a {
    color: #00FF00;
  }

  a:hover {
    color: #fbde00;
  }


  p {
    font-size: 21px;
  }

  .content {
    min-height: 100%;
    margin-bottom: -100px;
  }

  .push {
    height: 100px;
  }

  .button.button-primary, button.button-primary, input[type="submit"].button-primary, input[type="reset"].button-primary, input[type="button"].button-primary {
      color: #000;
      background-color: rgba(0, 255, 0, 0.85);
      border-color: rgba(0, 255, 0, 0.85);
  }

  .button.button-primary:hover, button.button-primary:hover, input[type="submit"].button-primary:hover, input[type="reset"].button-primary:hover, input[type="button"].button-primary:hover, .button.button-primary:focus, button.button-primary:focus, input[type="submit"].button-primary:focus, input[type="reset"].button-primary:focus, input[type="button"].button-primary:focus {
    color: #000;
    background-color: rgb(0, 255, 0);
    border-color: rgb(0, 255, 0);
  }

</style>
