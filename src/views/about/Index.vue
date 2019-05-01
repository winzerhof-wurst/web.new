<template>
  <Content>
    <h1>Unser Betrieb</h1>

    <ContentTile>
      <h2>Winzerhof Wurst</h2>
      <p>Unser Familienbetrieb befindet sich in Schrattenthal, der kleinsten Weinstadt im Weinviertel. Der Weinbau hat bei uns Tradition und unsere Wurzeln reichen bis in das Jahr 1836 zurück. Guten Wein zu machen ist eine Lebenseinstellung und bedarf jahrelanger Erfahrung. Die naturverbundene Weingartenarbeit vereint mit innovativer Kellertechnik sorgt für die Spitzenqualität unserer Weine - und das schmeckt man eben.</p>
      <p>Die Böden am Fuße des Manhartsberges sorgen nicht nur für hervorragenden Wein sondern auch für feinste Naturprodukte aus unserer Landwirtschaft wie Kürbiskerne und Kernöl.</p>
      <p>Die Symphonie von Weinbau und Landwirtschaft in Verbindung mit den Gästezimmern ermöglicht Genuss und Wohlfühlen in höchster Vollendung. „Erleben“ Sie das Werden des Weines von der Rebe bis ins Glas auf unserem Winzerhof und verweilen Sie einige Nächte in unseren Gästezimmern mit Blick auf den liebevoll restaurierten Innenhof.</p>
      <p>Wir führen unseren Betrieb mit Schwung und Elan, mit Liebe, Begeisterung und Engagement, bieten familiäres, kinderfreundliches Ambiente und freuen uns auf Ihren Besuch!</p>
      <p>
        <img
          class="img-fluid center-block rounded"
          :src="require('../../images/company_about_1.jpg')"
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

