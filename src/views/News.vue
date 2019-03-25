<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Weintour Weinviertel</h2>
            <p>
                Am 27. und 28. April ist es wieder soweit: wir öffnen im Zuge der Weintour unsere Türen. Verkosten und genießen Sie unseren neuen Jahrgang und erfahren Sie mehr über unser Weingut. An beiden Tagen sind wir von 10 bis 19 Uhr persönlich für Sie da.
            </p>
            <img class="img-fluid" alt="" :src="require('../images/201904_weintour.jpg')">
            <p>
                27. und 28. April 2019, jeweils von 10 bis 19 Uhr<br>
                Am Winzerhof
            </p>
            <p>
                Wir freuen uns über Ihren Besuch!
            </p>
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
        <NewsMarketLeonding />
    </Content>
</template>

<script>
import Content from "../components/Content.vue";
import ContentTile from "../components/ContentTile.vue";
import NewsMarketLeonding from "../components/NewsMarketLeonding.vue";
import NewsRentARebstock from "../components/NewsRentARebstock.vue";
import NewsRetzbacherhof from "../components/NewsRetzbacherhof.vue";
import NewsSchlossSchrattenthal from "../components/NewsSchlossSchrattenthal.vue";

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
