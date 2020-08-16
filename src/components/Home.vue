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
        Bordel is a <b> small community hackerspace </b> located in the basement of Paralelní Polis in Prague.
        Basically, It's room with a modular setup suitable for work, hacking or organizing smaller workshops.
        There is a bunch of <b> hw, tools, 3d printers, soldering gear, a workbench </b>and some music/noise instruments available for use.

        <b> The space doesn't have an ideological affiliation </b> nor explicit limitations of technological topics to be worked on. The topics of hosted events will be influenced by the users/members of the space.
        We are a <b> non-profit initiative </b> whose existence depends on community contributions and the courtesy of Paralelni Polis.
      </p>
    </div>

    <div class="row">
      <h1> God bless this mess! </h1>
    </div>
    <div class="row space">

      <div class="twelve columns cta">
        <div class="six offset-by-three columns">
          <h2> Are you a fan? </h2>
        </div>

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
    margin-top: 150px;
  }

  .cta h2 {
    background: black;
    text-align: center;
    color: #00FF00;
    padding: 10px;
    margin-bottom: 80px;
    transform: rotate(-3deg);
    border: dotted 1px #00FF00;
  }

  .cta-btn {
    height: 100px;
    width: 320px;
    font-size: 28px;
  }
</style>
