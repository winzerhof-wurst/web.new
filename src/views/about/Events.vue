<template>
    <Content>
        <h1>Termine</h1>

        <ContentTile>
          <p>
            Auf Grund der derzeitigen Lage sind vorerst einige Veranstaltungen abgesagt oder verschoben. Wir bitten um Verständnis und freuen uns wenn wir uns wieder gesund bei einem Achterl treffen können bei dem ein oder anderen (verschobenen) Event.
          </p>
        </ContentTile>

        <NewsMarketLeonding />
    </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";
import NewsMarketLeonding from "../../components/NewsMarketLeonding.vue";

export default {
  components: {
    Content,
    ContentTile,
    NewsMarketLeonding,
  }
};
</script>
