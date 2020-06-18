<template>
  <div class="Home">
    <div class="row">
      <div class="twelve columns">
        <h2> Get in touch </h2>
        <p> Don't hesitate to reach out anytime <a href="mailto:bordel@paralelnipolis.cz>"> bordel@paralelnipolis.cz </a></p>
        <p> Or just drop us a line and visit us!</p>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="row">
      <div class="three columns">
        <h2> Address </h2>
        <ul>
          <li>
            Dělnická 43
          </li>
          <li>
            Praha 7
          </li>
          <li>
            170 00
          </li>
        </ul>
        <p>
          <a href="https://www.openstreetmap.org/?mlat=50.10340&amp;mlon=14.45050#map=19/50.10340/14.45050">
            OpenStreetMaps
          </a>
        </p>
      </div>
      <div class="nine columns map">
        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=14.448727369308473%2C50.10252234354523%2C14.452267885208132%2C50.10427369033035&amp;layer=mapnik&amp;marker=50.103398024941846%2C14.4504976272583" style="border: 1px solid black"></iframe>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
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

  .map > iframe {
    width: 100%;
    height: 300px;
  }

  ul {
    list-style:none;
  }

  li {
      line-height: 12px;
      font-size: 21px;
      text-align: left;
  }

  .Home {
    margin-top: 40px;
  }

</style>
