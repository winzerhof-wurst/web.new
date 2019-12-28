<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <p>
              Die Tage sind kurz, das Licht oft nur fahl<br>
              Es weihnachtet schon in Schrattenthal.<br>
              Ein freudiges Warten liegt in der Luft<br>
              Aus der Backstube dringt süßer Duft<br>
              Und macht unsere Herzen innig und weit<br>
              In dieser besinnlichen Zeit.
            </p>
            <p>
              So wünschen wir euch, liebe Kunden und Gäste<br>
              Zum bevorstehenden Weihnachtsfest<br>
              Gesundheit, Freude, Zufriedenheit<br>
              Heute, morgen und allezeit.
            </p>
            <img class="img-fluid"
                     :src="require('../../images/201912_weingarten.jpg')"
                     alt="Weingarten im Winter">
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
