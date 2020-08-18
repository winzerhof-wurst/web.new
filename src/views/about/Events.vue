<template>
    <Content>
        <h1>Termine</h1>

        <ContentTile>
          <p>
            Auf Grund der derzeitigen Lage sind vorerst einige Veranstaltungen abgesagt oder verschoben. Wir bitten um Verständnis und freuen uns wenn wir uns wieder gesund bei einem Achterl treffen können bei dem ein oder anderen (verschobenen) Event.
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Retzer Landpartie bei den Winzern</h2>
          <p>
            <em>Die 51. Retzer Weinwoche hat ihre Siegerweine gekürt!</em><br>
            Am 29. August 2020 öffnen von wir von 11-19 Uhr für Sie unseren Winzerhof.<br>
          </p>
          <p>
            Alle teilnehmenden Betriebe finden Sie auf <a href="https://www.retzer-weinwoche.at" target="_blank" rel="noopen noreferrer">retzer-weinwoche.at</a>.
          </p>
          <p>
            <i>29. August 2020, Winerhof Wurst, Schrattenthal</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Weinherbst bei der Blauen Elf</h2>
          <p>
            Alle Jahre wieder veranstaltet die Blaue Elf ihren Weinfrühling und so dürfen auch wir wieder mit dabei sein.
          </p>
          <p>
            <i>24. Oktober 2020, Teutschmannweg 1, Linz</i>
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
