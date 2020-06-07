<template>
  <div class="Nav">
    <div class="bar container">
      <div class="row">
        <div class="six columns logo">
          <img src="../assets/bordel.png">
        </div>
        <div class="six columns menu">
          <ul>
            <li> <router-link to="/"> About </router-link> </li>
            <li> <router-link to="/join"> Join </router-link> </li>
            <li>
              <div class="dropdown">
                <div class="dropbtn">
<!--                  <router-link to="/team"> Teams </router-link>-->
                  <div> Projects </div>
                </div>
                  <div class="dropdown-content">
                  <router-link :to="'/project' + t.project.route" v-for="t in teams" v-bind:key="t">
                    {{ t.project.name }}
                  </router-link>
                </div>
              </div>
            </li>
            <li> <router-link to="/contact"> Contact </router-link> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teams from '../data/teams';

export default {
  name: 'Nav',
  data() {
    return {
      teams,
    };
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Nav {
  padding-top: 40px;
}

.menu {
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
}

.logo > img {
  height: 40px;
  background-size: 200px;
  text-align: left;
}

.logo {
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

li:last-child {
  margin-right: 0px;
}

a {
  color: white;
  /*text-decoration-style: dotted;*/
  text-decoration-line: none;
  vertical-align: center;
}

a:hover {
  color: #00FF00;
}

.dropdown {
  cursor: pointer;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  /*background-color: white;*/
  backdrop-filter: blur(5px);
  min-width: 100px;
  z-index: 1;
  padding-top: 10px;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: whitesmoke;
  text-decoration: none;
  display: block;
  text-align: left;
  padding-left: 5px;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  color: #00FF00;
  /*text-decoration-line: underline;*/

}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

@media (max-width: 550px) {
  .menu {
    position: inherit;
    text-align: center;
  }

  .logo {
    text-align: center;
  }

  li:last-child {
    margin-right: 10px;
  }
}
</style>
