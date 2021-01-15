<template>
    <ContentTile>
        <h2>Bauernmarkt Leonding / Ober&ouml;sterreich</h2>
        <p>
                Am Leondinger Wochenmarkt gibt es jeden Samstag frische und saisonale Spezialitäten der hiesigen Bauern.
                Jeden dritten Samstag im Monat sind auch wir vor Ort, um unsere Produkte anzubieten.
        </p>
        <div class="row">
            <div class="col-md-7 col-sm-12">
                <img class="img-fluid"
                     :src="require('../images/leonding2.jpg')"
                     alt="Bauernmarkt Leonding">
            </div>
            <div class="col-md-5 col-sm-12">
                <p>
                    <h3>Termine</h3>
                    <ul>
                        <li v-for="d in marketDates"
                            :key="d.date.getTime()">
                              <s v-if="d.canceled">{{formatDate(d.date)}}</s>
                              <template v-else>{{formatDate(d.date)}}</template>
                            </li>
                    </ul>
                </p>
                <p>
                    Wir sind von 7.00 Uhr bis 12.00 am Leondinger Stadtplatz (in den Wintermonaten im Atrium) mit unseren Weinen und Schmankerln
                    an den oben genannten Tagen vertreten. &nbsp;
                </p>
            </div>
        </div>
        <p>
            Der Lokalsender LT1 hat einen Beitrag über den Wochenmarkt gesendet.<br>
            <iframe src='https://www.lt1.at/programm/einbetten/23-03-2018/episode/frisches-vom-standl' width='800' height='480' frameborder='0' allowfullscreen></iframe>
        </p>
    </ContentTile>
</template>

<script>
import ContentTile from "./ContentTile.vue";

export default {
  components: {
    ContentTile
  },
  data() {
    var marketDates = [
      { date: new Date(2021, 0, 16) },
      { date: new Date(2021, 1, 20) },
      { date: new Date(2021, 2, 20) },
      { date: new Date(2021, 3, 10) },
      { date: new Date(2021, 4, 15) },
      { date: new Date(2021, 5, 19) },
      { date: new Date(2021, 6, 17) },
      { date: new Date(2021, 7, 21) },
      { date: new Date(2021, 8, 18) },
      { date: new Date(2021, 9, 16) },
      { date: new Date(2021, 10, 20) },
      { date: new Date(2021, 11, 18) },
    ];
    var today = new Date();

    return {
      marketDates: marketDates.filter(function(entry) {
        return (
          entry.date.getFullYear() > today.getFullYear() ||
          (
            entry.date.getFullYear() >= today.getFullYear() &&
            entry.date.getMonth() >= today.getMonth()
          )
        );
      })
    };
  },
  methods: {
    formatDate(d) {
      var months = {
        1: "Jänner",
        2: "Februar",
        3: "März",
        4: "April",
        5: "Mai",
        6: "Juni",
        7: "Juli",
        8: "August",
        9: "September",
        10: "Oktober",
        11: "November",
        12: "Dezember"
      };

      return (
        d.getDate() + ". " + months[d.getMonth() + 1] + " " + d.getFullYear()
      );
    }
  }
};
</script>
