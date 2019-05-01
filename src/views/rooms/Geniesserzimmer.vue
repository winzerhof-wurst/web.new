<template>
  <Content>
    <h1>Gästezimmer</h1>

    <ContentTile>
      <h2>Genießerzimmer</h2>
      <p>Das Genießerzimmer bietet Komfort auf höchstem Niveau. Das Zimmer verfügt neben einem separaten Wohnzimmer auch einen eigenen Balkon, um unsere Weine zu genießen. Egal zu welcher Jahreszeit können Sie hier zu zweit oder aber auch als Familie Ihren Urlaub verbringen. In diesem Zimmer befindet sich auch eine kleine Kochnische, die mit einem Wasserkocher, einer Kaffeemaschine, einem Cerankochfeld sowie einem Kühlschrank ausgestattet ist. Je nach Ihren Wünschen können wir Ihnen nach Absprache auch Kochgeschirr für kleine Speisen zur Verfügung stellen.</p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/geniesserzimmer_03.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/geniesserzimmer_02.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/geniesserzimmer_01.jpg')"
          alt="Winzerhof Wurst"
        >
      </p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/rooms/geniesserzimmer_04.jpg')"
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

