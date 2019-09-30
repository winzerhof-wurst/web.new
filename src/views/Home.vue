<template>
  <div id="home-wrapper">
    <h1 class="cover-heading text-center">Winzerhof Wurst</h1>
    <p class="lead text-center">Weinkultur mit Zukunft</p>

    <div id="home-navigation">
      <b-link :to="{name: 'about'}">Betrieb</b-link>
      <b-link :to="{name: 'news'}">Aktuelles</b-link>
      <b-link :to="{name: 'rooms'}">Gästezimmer</b-link>
      <b-link :to="{name: 'wines'}">Weinkarte</b-link>
    </div>

    <a id="home-rooms" href="/gaestezimmer">
      <div class="row clearfix">
        <div class="col-sm-2 hidden-xs"></div>
        <div class="col-sm-2 col-xs-6 text-center">
          <img
            class="img-fluid"
            :src="require('../images/logo_4blumen.png')"
            alt="4 Blumen"
          >
        </div>
        <div class="col-sm-2 col-xs-6 text-center">
          <img
            class="img-fluid"
            :src="require('../images/logo_uab.png')"
            alt="Urlaub am Bauernhof"
          >
        </div>
        <div class="col-sm-2 col-xs-6 text-center">
          <img
            class="img-fluid"
            :src="require('../images/logo_qp.png')"
            alt="Winzerhof Wurst"
          >
        </div>
        <div class="col-sm-2 col-xs-6 text-center">
          <img
            class="img-fluid"
            :src="require('../images/logo_traube.gif')"
            alt="Winzerhof Wurst"
          >
        </div>
        <div class="col-sm-2 hidden-xs"></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home-wrapper {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding-top: 100px;
  background-image: url("../images/home.jpg");
  background-position: center;
  background-size: cover;

  /* disable selection */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  cursor: default;
  overflow-y: auto;
}

.cover-heading {
  font-size: 4em;
}

#home-wrapper > h1 {
  color: #ad1430;
}
#home-wrapper .lead {
  color: #ffffcd;
}

h1.cover-heading {
  text-shadow: 0px 0px 50px white;
}
#home-wrapper .lead {
  text-shadow: 0px 0px 20px black;
}

#home-navigation {
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px;
}

#home-navigation a {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  height: 1.5em;
  margin: 0.8em;
  font-size: 1.5em;
  line-height: 1.5em;
  color: #ffffcd;
  background-color: rgba(39, 11, 16, 0.7);
  border-radius: 3px;
}

#home-rooms {
  width: 700px;
}

@media screen and (max-width: 800px) {
  #home-rooms {
    width: 80%;
  }
}

#home-rooms img {
  max-height: 35px;
}
</style>

