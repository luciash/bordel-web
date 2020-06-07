<template>
  <footer class="Footer">
    <div class="bar container">
        <div class="canary row">
          <p>
            The hackerspace has never been contacted by any agency anywhere
            in the world in a way which requires that contact not to be disclosed.
          </p>
        </div>
      <div class="row last-line">
<!--        <div> Policy </div> | -->
        <div> <a href="https://paralelnipolis.cz" target="_blank"> Paralelni Polis </a> </div> |
        <div> <a href="https://flyingcircuit.com" target="_blank"> Flying Circuit </a> </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
    };
  },
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}

.Footer {
  height: 100px;
  /*margin-top: 40px;*/
  /*padding-bottom: 10px;*/
}
.canary {
  background-image: url(../assets/legal-canary.svg);
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: bottom center;
  display: block;
}

.canary p {
  opacity: 0;
  font-size: 16px;
  transition: opacity 2s ease-out;
}

.canary:hover p {
  opacity: 0.9;
  transition: opacity 0.25s ease-out;
}

.canary > p {
  text-align: center;
}

.last-line div {
  display: inline-block;
  padding: 0px 10px;
}
.last-line img {
  height: 30px;
  width: 30px;
  vertical-align: bottom;
}

.last-line div > a {
  text-decoration-line: none;
  color: white;
}
</style>
