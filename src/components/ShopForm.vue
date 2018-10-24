<template>
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="form-group col-md-6">
                <label for="firstname">Vorname</label>
                <input type="text" class="form-control" id="firstname" placeholder="Vorname" v-model="firstname" :disabled="loading">
            </div>
            <div class="form-group col-md-6">
                <label for="lastname">Nachname</label>
                <input type="text" class="form-control" id="lastname" placeholder="Nachname" v-model="lastname" :disabled="loading">
            </div>
        </div>
        <div class="container-fluid">
            <div class="form-group col-md-9">
                <label for="street">Straße</label>
                <input type="text" class="form-control" id="street" placeholder="Straße" v-model="street" :disabled="loading">
            </div>
            <div class="form-group col-md-3">
                <label for="nr">Nr.</label>
                <input type="text" class="form-control" id="nr" placeholder="Nr." v-model="nr" :disabled="loading">
            </div>
        </div>
        <div class="container-fluid">
            <div class="form-group col-md-3">
                <label for="zipcode">PLZ</label>
                <input type="text" class="form-control" id="zipcode" placeholder="PLZ" v-model="zipcode" :disabled="loading">
            </div>
            <div class="form-group col-md-9">
                <label for="city">Ort</label>
                <input type="text" class="form-control" id="city" placeholder="Ort" v-model="city" :disabled="loading">
            </div>
        </div>
        <div class="container-fluid">
            <div class="form-group col-md-6">
                <label for="telephone">Telefon</label>
                <input type="text" class="form-control" id="telephone" placeholder="Telefon" v-model="telephone" :disabled="loading">
            </div>
            <div class="form-group col-md-6">
                <label for="fax">Fax</label>
                <input type="text" class="form-control" id="fax" placeholder="Fax" v-model="fax" :disabled="loading">
            </div>
        </div>
        <div class="container-fluid">
            <div class="form-group col-md-6">
                <label for="email">E-Mail</label>
                <input type="email" class="form-control" id="email" placeholder="E-Mail" v-model="email" :disabled="loading">
            </div>
        </div>
        <div class="container-fluid">
            <div class="form-group col-md-12">
                <label for="comment">Anmerkungen</label>
                <textarea id="comment" class="form-control" rows="3" placeholder="Anmerkungen" v-model="comment" :disabled="loading"></textarea>
            </div>
        </div>
        <div class="container-fluid">
            <div id="alert-error" class="alert alert-danger" role="alert" v-if="error">Fehler beim Speichern der Bestellung</div>
            <div id="alert-success" class="alert alert-success" role="alert" v-if="success">Ihre Bestellung wurde gespeichert. Vielen Dank!</div>
            <button id="submit-wines" class="btn btn-default center-block" v-on:click="submit" data-loading-text="Bitte warten...">Bestellung absenden</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            error: false,
            success: false,
            /* form fields */
            firstname: '',
            lastname: '',
            street: '',
            nr: '',
            zipcode: '',
            city: '',
            email: '',
            telephone: '',
            fax: '',
            comment: '',
        }
    },
    methods: {
        submit() {
            this.loading = true
            this.error = false
            this.success = false

            this.$store.dispatch('submitOrder', {
                firstname: this.firstname,
                lastname: this.lastname,
                street: this.street,
                nr: this.nr,
                zipcode: this.zipcode,
                city: this.city,
                email: this.email,
                telephone: this.telephone,
                fax: this.fax,
                comment: this.comment,
            }).then(() => {
                this.success = true
            }).catch(err => {
                console.error(err)
                this.error = true
            }).then(() => {
                this.loading = false
            })
        }
    }
};
</script>

