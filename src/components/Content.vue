<template>
    <div>
        <b-navbar toggleable="md" fixed="top" type="light">
          <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand :to="{name: 'home'}" exact>Winzerhof Wurst</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
              <b-navbar-nav class="flex-fill">
                <b-nav-item-dropdown split
                                     :to="{name: 'about'}"
                                     text="Unser Betrieb"
                                     class="flex-grow-1">
                  <b-nav-item class="flex-grow-1" :to="{name: 'about'}">Winzerhof</b-nav-item>
                  <b-nav-item class="flex-grow-1" :to="{name: 'news'}">Aktuelles</b-nav-item>
                  <b-nav-item class="flex-grow-1" :to="{name: 'events'}">Termine</b-nav-item>
                  <!--<b-nav-item class="flex-grow-1" :to="{name: 'about-family'}">Familie Wurst</b-nav-item>-->
                  <!--<b-nav-item class="flex-grow-1" :to="{name: 'ten-reasons'}">10 Gründe</b-nav-item>-->
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Gästezimmer" class="flex-grow-1">
                    <b-nav-item :to="{name: 'rooms'}">Gastfreundschaft Wurst</b-nav-item>
                    <div class="dropdown-divider"></div>
                    <b-nav-item :to="{name: 'rooms-geniesserzimmer'}">Genießerzimmer</b-nav-item>
                    <b-nav-item :to="{name: 'rooms-weinfruehling'}">Weinfrühling</b-nav-item>
                    <b-nav-item :to="{name: 'rooms-weinsommer'}">Weinsommer</b-nav-item>
                    <b-nav-item :to="{name: 'rooms-weinherbst'}">Weinherbst</b-nav-item>
                    <div class="dropdown-divider"></div>
                    <b-nav-item :to="{name: 'rooms-price-book'}">Anfrage &amp; Preise</b-nav-item>
                </b-nav-item-dropdown>
                <b-nav-item class="flex-grow-1" :to="{name: 'wines'}">Weinkarte</b-nav-item>
                <b-nav-item class="flex-grow-1" :to="{name: 'tidbits'}">Schmankerl</b-nav-item>
                <b-nav-item class="flex-grow-1" :to="{name: 'contact'}">Kontakt</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>

        <div id="wiwu-main" class="container main">
            <slot />
        </div>

        <div class="container footer">
            <b-link :to="{name: 'imprint'}">Impressum</b-link>
            |
            <b-link :to="{name: 'privacy'}">Datenschutz</b-link>
            |
            <b-link :to="{name: 'contact'}">Kontakt</b-link>
        </div>
    </div>
</template>

<style>
#wiwu-main {
  padding-top: 70px;
}

@media (min-width: 768px) {
  #content-wrapper {
    padding-top: 113px;
  }
}

/*
 * Navbar
 */

.navbar.fixed-top {
  background-color: #ffffcd;
}
.navbar .navbar-brand {
  color: #ad1430;
}
.navbar-nav > li {
  text-transform: uppercase;
}
.navbar-nav > li > a {
  color: #abac44 !important;
}
a.nav-link.active,
a.nav-link:hover,
a.nav-link:focus {
  background-color: #ffffcd !important;
  color: #ad1430 !important;
}

/*
 * Main content
 */

.main,
.footer {
  padding: 20px;
}
.footer {
  margin-bottom: 60px;
  text-align: center;
}
.footer,
.footer a {
  color: #d4d4a8;
}
@media (min-width: 768px) {
  .main,
  .footer {
    padding-right: 40px;
    padding-left: 40px;
    max-width: 1000px;
  }
}
.main .page-header {
  margin-top: 0;
}

h1 {
  color: #d4d4a8;
  font-size: 60px;
}
h2 {
  font-size: 40px;
}

h2,
h3,
h4 {
  color: #ad1430;
}

hr {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
