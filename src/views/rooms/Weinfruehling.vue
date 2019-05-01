<template>
  <Content>
    <h1>Gästezimmer</h1>

    <ContentTile>
      <h2>Weinfrühling</h2>
      <p>Unser Weinfrühlingzimmer erstrahlt in herrlichen Grün- und Gelbtönen. Diese Farben lassen sich auch in der Natur wiederfinden, wenn alles wieder zu sprießen und wachsen beginnt, wie beispielsweise die jungen Blätter am Weinstock oder der Löwenzahn zwischen den Reihen. Den Ausblick über die Dächer von Schrattenthal sowie den Blick in unseren liebevoll gestalteten Innenhof können Sie vom Balkon des Zimmers genießen. Im Weinfrühlingzimmer können bis zu 3 Personen übernachten.</p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/weinfruehling_01.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/weinfruehling_02.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/weinfruehling_03.jpg')"
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

