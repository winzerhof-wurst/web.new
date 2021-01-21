<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
          <img class="img-fluid"
                     :src="require('../../images/202101_weingarten.jpg')"
                     alt="Weingarten Schneiden Winzerhof Wurst">
        </ContentTile>

        <ContentTile>
          <h2>Weinviertel DAC Champion 2020</h2>
          <p>Jedes Jahr werden Ende Juni im Zuge der Retzer Weinwoche die Weine der Region ausgekostet und die besten prämiert. Wir dürfen uns heuer über einen Sortensieger erfreuen. Unser Weinviertel DAC Hochsteiner 2019 belegt den 1.Platz in der Kategorie Weinviertel DAC und trägt damit den Namen <em>Weinviertel DAC Champion 2020</em>.</p>
          <img class="img-fluid"
                     :src="require('../../images/202006_dac_champion.jpg')"
                     alt="Weinviertel DAC Champion 2020 Winzerhof Wurst">
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
