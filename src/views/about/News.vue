<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Weinlese 2019</h2>
            <p>
              Bereits Anfang Oktober können wir die diesjährige Ernte erfolgreich abschließen. Traditionell feiern wir dieses Ereignis mit einem mit Rebzweigen geschmückten Traktor, der die letzte Fuhr Weintrauben zum Presshaus bringt.
            </p>
             <img class="img-fluid"
                     :src="require('../../images/201910_weinlese.jpg')"
                     alt="Weinlese 2019 am Winzerhof Wurst">
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
