<template>
  <div class="Home">
    <div class="row">
      <h1> Hackerspace </h1>
    </div>
    <div class="row">
<!--      <p>-->
<!--        [CZ] Bordel je hackerspace v suterénu Paralelní Polis. V podstatě o jednu místnost sloužící jak pro práci tak pro pořádání menších workshopů.-->
<!--        Členům je k dispozici nářadí, ponk, nahromaděná elektronika a zvukový setup.-->

<!--      </p>-->
      <p>
        Bordel is a small community run hackerspace in a basement of the Paralelní Polis building.
        It's room with modular setup suitable for work or organizing smaller workshops. There is a bunch of hw, tools, soldering gear, a workbench and some music/noise instruments available for the members.

        The space is a non-profit initiative whose existence depends on community contributions and the courtesy of Paralelni Polis.
        Bordel space is also the spot where a lot of the projects in Polis began their existence and we hope to keep on this trend by engaging fellow technologists.
      </p>
    </div>

    <div class="row">
      <h1> God bless this mess! </h1>
    </div>
    <div class="row space">
      <div class="twelve columns cta">
        <router-link to="/join">
          <button class="button-primary cta-btn"> Become a member </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    text-align: justify;
  }

  .Home {
    margin-top: 40px;
  }

  .space {
    background-color:rgba(0, 0, 0, 0.5);
    background-image: url("../assets/space.jpg");
    background-size: cover;
    position: static;
    height: 500px;
    width: 100%;
  }

  .cta {
    vertical-align: middle;
    margin-top: 225px;
  }

  .cta-btn {
    height: 50px;
    width: 250px;
  }
</style>
