<template>
  <Content>
    <h1>Anfrage und Preise</h1>

    <ContentTile>
      <h2>Anfrage</h2>
      <Book/>
    </ContentTile>

    <ContentTile>
      <h2>Preise</h2>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <table class="table table-hover table-responsive">
            <thead>
              <th>Weinfr&uuml;hlig, Weinsommer &amp; Weinherbst</th>
              <th>Preis*</th>
            </thead>
            <tbody>
              <tr>
                <td>Sonntag bis Donnerstag</td>
                <td>€30,50</td>
              </tr>
              <tr>
                <td>Donnerstag bis Sonntag und Feiertag</td>
                <td>€33,50</td>
              </tr>
              <tr>
                <td>Einbettzimmer</td>
                <td>€38,50</td>
              </tr>
              <tr>
                <td>Aufpreis f&uuml;r eine Nacht</td>
                <td>€8,-</td>
              </tr>
              <tr>
                <td>Kinder im Zimmer der Eltern**</td>
                <td>€1,-</td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>* Preise pro Person und Nacht, inklusive Fr&uuml;hst&uuml;ck und N&auml;chtigungstaxe</small>
            <br>
            <small>** Preis pro Kind, Lebenjahr und Nacht. Gilt f&uuml;r Kinder bis 15 Jahre</small>
          </p>
          <table class="table table-hover table-responsive">
            <thead>
              <th>Genie&szlig;erzimmer*</th>
              <th>Preis**</th>
            </thead>
            <tbody>
              <tr>
                <td>Pro Person und Nacht</td>
                <td>€48,50</td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>* Buchbar ab zwei N&auml;chten</small>
            <br>
            <small>** Preise pro Person und Nacht, inklusive Fr&uuml;hst&uuml;ck und N&auml;chtigungstaxe</small>
          </p>
          <p>
            <strong>Haustiere sind nicht erlaubt!</strong>
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <h3>Stornogebühren</h3>Für Stornierungen verrechnen wir folgende Gebühren, bezogen auf den Nächtigungspreis.
          <table class="table table-hover table-responsive">
            <tbody>
              <tr>
                <td>bis drei Monate</td>
                <td>-</td>
              </tr>
              <tr>
                <td>drei bis ein Monat</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>ein Monat bis eine Woche</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>in der letzten Woche</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentTile>
  </Content>
</template>

<script>
import Book from "../../components/Book.vue";
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";

export default {
  components: {
    Book,
    Content,
    ContentTile
  }
};
</script>

