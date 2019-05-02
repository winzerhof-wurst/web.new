<template>
  <Content>
    <h1>Gästezimmer</h1>

    <ContentTile>
      <h2>Weinherbst</h2>
      <p>Weinherbst bedeutet für uns eine farbenfrohe Natur, die sich schön langsam ihre Ruhe sucht. Auch im Keller wird es wieder ruhiger nach der Ernte und die Weine reifen still in unseren Fässern. In unserem Weinherbstzimmer können Sie entspannen und Ruhe finden unter dem alten Stallgewölbe. Dieses Zimmer ist auch für Rollstuhlfahrer geeignet und findet Platz für bis zu 4 Personen.</p>
      <p>
      <img
        class="img-fluid center-block rounded"
        :src="require('../../images/rooms/weinherbst_01.jpg')"
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

