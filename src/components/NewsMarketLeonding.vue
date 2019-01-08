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
                            :key="d.getTime()">{{formatDate(d)}}</li>
                    </ul>
                </p>
                <p>
                    Wir sind von 7.00 Uhr bis 12.00 am Leondinger Stadtplatz (in den Wintermonaten im Atrium) mit unseren Weinen und Schmankerln
                    an den oben genannten Tagen vertreten. &nbsp;
                </p>
            </div>
        </div>
        <p>
            Der Lokalsender LT1 hat kürzlich einen Beitrag über den Wochenmarkt gesendet.<br>
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
      new Date(2019, 0, 19),
      new Date(2019, 1, 16),
      new Date(2019, 2, 16),
      new Date(2019, 3, 20),
      new Date(2019, 4, 18),
      new Date(2019, 5, 15),
      new Date(2019, 6, 20),
      new Date(2019, 7, 17),
      new Date(2019, 8, 21),
      new Date(2019, 9, 19),
      new Date(2019, 10, 16),
      new Date(2019, 11, 21)
    ];
    var today = new Date();

    return {
      marketDates: marketDates.filter(function(date) {
        return (
          date.getFullYear() >= today.getFullYear() &&
          date.getMonth() >= today.getMonth()
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
