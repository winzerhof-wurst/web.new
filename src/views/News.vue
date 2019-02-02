<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Wir spenden €310 für das Ö3-Weihnachtswunder!</h2>
            <img class="img-fluid" alt="" :src="require('../images/20181221_weihnachtwunder.jpg')">
            <p>
                Wir möchten uns bei all unseren Kunden bedanken, denn durch den Verkauf unserer Binkerl
                und einem Teil unseres Trinkgeldes ist eine Spendensumme von €310 zusammenkommen. Mit
                dieser Spende wollen wir Familien in Österreich unterstützen.
            </p>
        </ContentTile>

        <ContentTile>
            <h2>Unser Genießerzimmer</h2>
            <p>
                <img class="img-fluid" alt="" :src="require('../images/20181021_geniesserzimmer.jpg')">
                <br>
                <br>
                <img class="img-fluid" alt="" :src="require('../images/rooms_geniesser_1.jpg')">
                <br>
                <br>
                <img class="img-fluid" alt="" :src="require('../images/rooms_geniesser_2.jpg')">
                <br>
                <br>
                Nach 10 Jahren erfolgreicher Vermietung unserer drei Gästezimmer bieten wir nun auch ein Genießerzimmer für Sie an. Genießen Sie das Weinviertel in einem noch geräumigeren Zimmer und eigenem Balkon.
                <br>
                Wir freuen uns auf Ihre Buchung!
            </p>
        </ContentTile>

        <ContentTile>
            <h2>Weinlese 2018</h2>
            <p>
                Es ist vollbracht. 3 Wochen früher als normal starteten wir am 27. August mit unserem Müller Thurgau in die Weinlese. Am 21. September ernteten wir unsere letzten Trauben, unseren Merlot. Wir freuen uns bereits auf den neuen Jahrgang.
            </p>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/GojiUh4saPY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </ContentTile>

        <ContentTile>
            <h2>Radfreundlicher Beherbergungsbetrieb</h2>
            <p>
                <img class="img-fluid"
                     :src="require('../images/20180426_rad.jpg')"
                     alt="Radfreundlicher Beherbergungsbetrieb">
                <br> Radfahrer sind bei uns herzlich willkommen!
                <br> Wir freuen uns, dass unser Winzerhof alle Kriterien eines
                <i>radfreundlichen Beherbergungsbetriebs</i> erfüllt.
            </p>
        </ContentTile>

        <ContentTile>
            <h2>Sicherheitsplakette</h2>
            <p>
                <img class="img-fluid"
                     :src="require('../images/20180319_sicherer_bauernhof.jpg')"
                     alt="Sicherheitsplakette der SVB">
                <br> Im Zuge der Ab-Hof-Messe in Wieselburg durften wir stolz die Sicherheitsplakette der SVB entgegennehmen. Die SVB verleiht
                diese Plakette an Betriebe, die besonders viel Wert auf Arbeitssicherheit und Unfallverhütung legen.
            </p>
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
        <NewsMarketLeonding />
    </Content>
</template>

<script>
import Content from "../components/Content.vue";
import ContentTile from "../components/ContentTile.vue";
import NewsMarketLeonding from "../components/NewsMarketLeonding.vue";
import NewsRentARebstock from "../components/NewsRentARebstock.vue";
import NewsRetzbacherhof from "../components/NewsRetzbacherhof.vue";
import NewsSchlossSchrattenthal from "../components/NewsSchlossSchrattenthal.vue";

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
