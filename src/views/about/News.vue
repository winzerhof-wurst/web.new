<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
          <h2>Weintour Weinviertel</h2>
          <p>Es ist soweit, das Weinviertel öffnet seine Türen. Wir und unsere Winzerkollegen der Weinstraße Weinviertel möchten Sie zur Weintour am 26. und 27. Juni einladen. Kommen Sie in unseren Hof und verkosten Sie in gemütlicher Atmosphäre unsere Weine.</p>
          <img class="img-fluid"
                     :src="require('../../images/202106_weintour.jpg')"
                     alt="Weintour Weinviertel 2021">
        </ContentTile>

        <ContentTile>
          <h2>Rebblüte</h2>
          <p>In den Weingärten kann gerade die Rebblüte beobachtet werden. In der Regel wird etwa 100 Tage nach der Blüte der Wein geerntet. Darum wird die Ernte heuer etwa Ende September beginnen</p>
          <img class="img-fluid"
                     :src="require('../../images/202106_rebbluete.jpg')"
                     alt="Weintour Weinviertel 2021">
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
