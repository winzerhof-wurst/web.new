<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
          <h2>Leondinger Wochenmarkt 11.4.2020</h2>
          <p>
            Liebe Kunden,
          <p>
            um uns weiterhin gegenseitig zu schützen, werden wir diesen Samstag nicht am Wochenmarkt vertreten sein. Jedoch möchten wir trotzdem den Wein zu euch bringen.
          </p>
          <p>
            Bestellt eure gewünschten Produkte hier über unsere Website oder direkt bei Petra unter <a href="tel:004369912757723">069912757723</a>. Wir werden den Wein im Umkreis Linz und Leonding zustellen und die Rechnung der Ware beilegen.
          </p>
          <p>
            Wir danken für euer Verständnis und wünschen euch <b>Frohe Ostern!</b>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Wein schenkt Freude</h2>
          <p>
            Liebe Weinfreude,<br>
            die jetzige Zeit ist für alle eine Herausforderung, aber gemeinsam schaffen wir das. Um euch etwas Freude zu Hause zu bereiten, möchten wir unsere Weine, vorallem den neuen Jahrgang, trotzdem zu euch bringen. Wir versenden die Weine gerne per DPD oder liefern Sie persönlich. Bei der persönlichen Zustellung achten wir darauf, dass wir uns nicht treffen, sondern der Wein wird kontaklos vor eurer Haustür mit Rechnung abgestellt.
          </p>
          <p>
            Wir freuen uns über eure Bestellung per Anruf oder Mail.<br>
            G'sund bleiben und z'Haus bleiben!
          </p>
          <img class="img-fluid"
                     :src="require('../../images/202004_wein_schenkt_freude.jpg')"
                     alt="Wein schenkt Freude">
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
