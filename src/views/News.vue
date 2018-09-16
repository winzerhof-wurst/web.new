<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Radfreundlicher Beherbergungsbetrieb</h2>
            <p>
                <img class="img-fluid"
                     :src="require('../images/20180426_rad.jpg')"
                     alt="Radfreundlicher Beherbergungsbetrieb">
                <br> Radfahrer sind bei uns herzlich willkommen!
                <br> Wir freuen uns, dass unser Winzerhof alle Kriterien eines
                <i>radfreundlichen Beherbergungsbetriebs</i> erfüllt.
            </p>
        </ContentTile>

        <ContentTile>
            <h2>Sicherheitsplakette</h2>
            <p>
                <img class="img-fluid"
                     :src="require('../images/20180319_sicherer_bauernhof.jpg')"
                     alt="Sicherheitsplakette der SVB">
                <br> Im Zuge der Ab-Hof-Messe in Wieselburg durften wir stolz die Sicherheitsplakette der SVB entgegennehmen. Die SVB verleiht
                diese Plakette an Betriebe, die besonders viel Wert auf Arbeitssicherheit und Unfallverhütung legen.
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
