<template>
  <Content>
    <h1>Gästezimmer</h1>

    <ContentTile>
      <h2>Weinsommer</h2>
      <p>Im Weinviertel laden neben dem Wein vorallem die warmen Sommerabende mit ihren wunderschönen Sonnenuntergängen ein, einige Nächte bei uns zu verbringen. Diese wunderschöne Abendstimmung mit Abendrot bieten wir Ihnen in unserem Weinsommerzimmer. Dieses Zimmer bietet Platz für bis zu 3 Personen.</p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/weinsommer_01.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
    </ContentTile>
  </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";

export default {
  components: {
    Content,
    ContentTile
  }
};
</script>

