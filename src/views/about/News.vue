<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
          <h2>Zwei gute Nachrichten</h2>
          <p>
            Die Frostnächte in den letzten Wochen haben unseren Weingärten keinen Schaden zugesetzt und treiben gerade aus. Noch dazu freuen wir uns über den lang ersehnten Regen, der wieder Wasser in den Boden zurück bringt.
          </p>
          <img class="img-fluid"
                     :src="require('../../images/20200421_weingarten.jpg')"
                     alt="Weingarten Winzerhof Wurst">
        </ContentTile>

        <ContentTile>
          <h2>Wein schenkt Freude</h2>
          <p>
            Liebe Weinfreude,<br>
            die jetzige Zeit ist für alle eine Herausforderung, aber gemeinsam schaffen wir das. Um euch etwas Freude zu Hause zu bereiten, möchten wir unsere Weine, vorallem den neuen Jahrgang, trotzdem zu euch bringen. Wir versenden die Weine gerne per DPD oder liefern Sie persönlich. Bei der persönlichen Zustellung achten wir darauf, dass wir uns nicht treffen, sondern der Wein wird kontaklos vor eurer Haustür mit Rechnung abgestellt.
          </p>
          <p>
            Wir freuen uns über eure Bestellung per Anruf oder Mail.<br>
            G'sund bleiben und z'Haus bleiben!
          </p>
          <img class="img-fluid"
                     :src="require('../../images/202004_wein_schenkt_freude.jpg')"
                     alt="Wein schenkt Freude">
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
