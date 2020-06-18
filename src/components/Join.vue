<template>
  <div class="Home">
    <div class="row">
      <div class="twelve columns">
      <h1> Membership </h1>
<!--      <p>-->
<!--        [CZ] Členové Bordelu získají přístup do hackerspacu v otevírací době PP, přístup ke všem nástrojům v dílně, prostor pro uskladnění rozdělaných projektů přístup na všechny akce pořádané hackerspacem.-->
<!--      </p>-->

      <p>
        Members of the Bordel space will get access to the room and all of the tooling during opening hours of Paralelni Polis (weekdays 8am - 8pm) or whenever there are people with keys in the building.
        Additionally, members will get access to selected events happening in Paralelni Polis.
      </p>
      </div>
    </div>
    <div class="row">

      <div class="six columns">
        <h2> Price </h2>
        <!--      <p>-->
        <!--        [CZ] Cena členství je 500 Kč měsíčně.-->
        <!--      </p>-->
        <p>
          Membership fee is <b>500 czk</b> monthly.
        </p>
      </div>
      <div class="six columns">
        <h2> Capacity </h2>
        <!--      <p>-->
        <!--        [CZ] Kapacita je limitována na 20 členů.-->
        <!--      </p>-->
        <p>
          Capacity is limited to <b>20 members</b>.
        </p>
      </div>

    </div>
    <Form></Form>
    <div class="row">
      <h1> Rules </h1>
      <ol>
        <li> Respect privacy of others </li>
        <li> Clean the mess before you leave. </li>
        <li> Keep your project in you box when you are not working on it </li>
        <li> Last person locks the door </li>
        <li> Don't mess with projects of other people before talking to them </li>
        <li> Fuck the rules! </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: 'Join',
  components: {
    Form,
  },
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

  ul {
    list-style:none;
  }

  li {
    line-height: 16px;
    font-size: 21px;
    text-align: left;
  }

  .Home {
    margin-top: 40px;
  }

</style>
