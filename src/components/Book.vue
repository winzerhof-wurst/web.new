<template>
    <form>
        <div class="row">
            <div class="form-group col-md-6 col-lg-3">
                <input type="date" class="form-control" id="date" :value="today" :min="today">
            </div>
            <div class="form-group col-md-6 col-lg-3">
                <select class="form-control" v-model="stays" :disabled="loading">
                    <option value="1">1 Nacht</option>
                    <option value="2" selected>2 Nächte</option>
                    <option value="3">3 Nächte</option>
                    <option value="4">4 Nächte</option>
                    <option value="5">5 Nächte</option>
                    <option value="6">6 Nächte</option>
                    <option value="7">7 Nächte</option>
                    <option value="8">8 Nächte</option>
                    <option value="9">9 Nächte</option>
                    <option value="10">10 Nächte</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-6 col-lg-3">
                <select class="form-control" v-model="persons" :disabled="loading">
                    <option value="1">1 Person</option>
                    <option value="2" selected>2 Personen</option>
                    <option value="3">3 Personen</option>
                    <option value="4">4 Personen</option>
                    <option value="5">5 Personen</option>
                    <option value="6">6 Personen</option>
                    <option value="7">7 Personen</option>
                    <option value="8">8 Personen</option>
                    <option value="9">9 Personen</option>
                    <option value="10">10 Personen</option>
                </select>
            </div>
            <div class="form-group col-md-6 col-lg-3">
                <select class="form-control" v-model="rooms" :disabled="loading">
                    <option value="1" selected>1 Zimmer</option>
                    <option value="2">2 Zimmer</option>
                    <option value="3">3 Zimmer</option>
                    <option value="4">3 Zimmer</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-12 col-lg-6">
                <label for="firstname">Vorname</label>
                <input type="text" class="form-control" id="firstname" v-model="firstname" placeholder="Vorname" :disabled="loading" required>
            </div>
            <div class="form-group col-md-12 col-lg-6">
                <label for="lastname">Nachname</label>
                <input type="text" class="form-control" id="lastname" v-model="lastname" placeholder="Nachname" :disabled="loading" required>
            </div>
            <div class="form-group col-md-12 col-lg-6">
                <label for="firstname">Telefonnummer</label>
                <input type="tel" class="form-control" id="telephone" v-model="telephone" placeholder="Telefonnummer" :disabled="loading" required>
            </div>
            <div class="form-group col-md-12 col-lg-6">
                <label for="lastname">E-Mail</label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="E-Mail" :disabled="loading" required>
            </div>
            <div class="form-group col-md-12 col-lg-6">
                <div id="alert-error" class="alert alert-danger" role="alert" v-if="error">Fehler beim Senden der Anfrage</div>
                <div id="alert-success" class="alert alert-success" role="alert" v-if="success">Ihre Anfrage wurde gesendet. Vielen Dank!</div>
                <button type="submit" class="btn btn-default" v-on:click="submit" :disabled="loading">Anfrage senden</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      today: new Date().toISOString().substring(0, "1970-01-01".length),
      date: undefined,
      persons: 2,
      rooms: 1,
      stays: 2,
      firstname: "",
      lastname: "",
      telephone: "",
      email: "",
      success: false,
      error: false
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      this.loading = true;
      this.success = false;
      this.error = false;

      this.$store
        .dispatch("sendBookingRequest", {
            persons: this.persons,
            rooms: this.rooms,
            stays: this.stays,
            firstname: this.firstname,
            lastname: this.lastname,
            telephone: this.telephone,
            email: this.email,
        })
        .then(() => {
          this.loading = false;
          this.success = true;
        }, 1200)
        .catch(e => {
          console.error(e);
          this.loading = false;
          this.error = true;
        });
    }
  }
};
</script>

