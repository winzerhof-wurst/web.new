<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Retzer Weinwoche</h2>
            <p>
              Mit großer Freude dürfen wir uns heuer über gleich zwei Sortensieger bei der Retzer Weinwoche freuen. Unser H&P Weissweincuveé sowie unser Rosé-Merlot haben die Jury überzeugt und werden bei der Eröffnung am 20. Juni in Retz ausgezeichnet.
Sie können die <router-link :to="{name: 'wines'}">Weine</router-link> schon jetzt direkt bei uns erwerben.
            </p>
            <img class="img-fluid"
                     :src="require('../../images/201905_sortensieger.jpg')"
                     alt="Sortensieger Winzerhof Wurst der Retzer Weinwoche 2019">
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
