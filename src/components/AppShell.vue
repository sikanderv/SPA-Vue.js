<template>
  <div class="container">
    <div>
      <div id="logo" :style="{ 'backgroundImage': 'url(\'' + image + '\')' }">
      </div>
      <div role="navigation" id="navbar">
        <b-nav>
          <b-nav-item><router-link v-bind:to="'/'" exact>Home</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/about'">About</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/pricing'">Pricing</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/reviews'">Reviews</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/contact'">Contact Us</router-link></b-nav-item>
        </b-nav>
      </div>
    </div>

    <slot/>

    <h2>PROFESSIONAL DRIVING INSTRUCTION</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppShell',
  data () {
    return {
      msg: 'My Driving School',
      tabIndex: 0,
      image: require('../assets/logo.png')
    }
  },

  methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

/* Import css files from Bootstrap-4 and Bootstrap-Vue */
@import '../styles/shared-styles.scss';
@import '~bootstrap/scss/bootstrap.scss';

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }


  #logo {
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
  }

  #navbar {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    border-bottom: 3px solid #fff;
    border-top: 3px solid #fff;
    margin: 45px 112px;
    padding: 5px;
    @apply --layout-vertical;
    @apply --layout-flex;
    color: var(--primary-text-color);
  }

  .nav-item {
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
  }

  .nav-item a {
    color: $white;
    text-decoration: none;
  }

  .nav-item a:hover {
    color: $secondary-text;
  }

</style>
