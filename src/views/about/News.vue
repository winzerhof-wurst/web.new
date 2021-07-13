<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
          <h2>Einstricken</h2>
          <p>
            Derzeit findet man uns im Weingarten beim "Einstricken". Wir sorgen dafür, dass sich alle Triebe im Drahtgerüst befinden und eine hohe und schöne Laubwand bilden.<br>
            Vor allem unser Hochsteiner macht seinem Namen Ehre und wächst, wie in diesem Bild ersichtlich, hoch hinaus.
          </p>
          <img class="img-fluid"
                     :src="require('../../images/202107_weingarten.jpg')"
                     alt="Einstricken im Weingarten des Winzerhof Wursts">
        </ContentTile>

        <ContentTile>
          <h2>Urlaub im Weinviertel</h2>
          <p>Nehmen Sie sich ein paar Tage Auszeit und genießen Sie die blühende Landschaft rund um Schrattenthal.</p>
          <img class="img-fluid"
                     :src="require('../../images/202006_weingarten.jpg')"
                     alt="Weingarten Winzerhof Wurst">
        </ContentTile>

        <ContentTile>
            <h2>Urlaub am Winzerhof</h2>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe width="640" height="360" src="https://www.youtube.com/embed/O2i49NVaYNs" frameborder="0" allowfullscreen></iframe>
            </div>
        </ContentTile>

        <NewsRetzbacherhof />
        <NewsSchlossSchrattenthal />
        <NewsRentARebstock />
    </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";
import NewsMarketLeonding from "../../components/NewsMarketLeonding.vue";
import NewsRentARebstock from "../../components/NewsRentARebstock.vue";
import NewsRetzbacherhof from "../../components/NewsRetzbacherhof.vue";
import NewsSchlossSchrattenthal from "../../components/NewsSchlossSchrattenthal.vue";

export default {
  components: {
    Content,
    ContentTile,
    NewsMarketLeonding,
    NewsRentARebstock,
    NewsRetzbacherhof,
    NewsSchlossSchrattenthal
  }
};
</script>
