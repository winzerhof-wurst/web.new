import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function fetchWines(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{ "id": 27, "name": "Sauvignon Blanc", "price": "5.60", "year": 2016, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Riede Fuchsen", "text": "Hellgelb; Ausgepr\u00e4gt w\u00fcrzig im Bukett,<br \/>\nein extraktreicher, voller Wein.<br \/>\nPasssend zu Fisch und Gefl\u00fcgel.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 7 }, { "id": 28, "name": "Riesling", "price": "5.60", "year": 2016, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Kalvarienberg", "text": "Lebendiger, jugendlicher Duft mit zartgliedriger<br \/>\nPfirsichfrucht. Feine, pikante Rieslings\u00e4ure.<br \/>\nPassend zu w\u00fcrzigen Saucen. ", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 7 }, { "id": 32, "name": "Sankt Laurent", "price": "5.00", "year": 2015, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "R", "description": "Riede Schwibbeln", "text": "Kr\u00e4ftig dunkelrote Farbe, Duft nach frischen<br \/>\nWeichseln, fein-herbe Frucht mit samtigen Abgang.<br \/>\nPassend zu dunklen Fleischgerichten.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 3 }, { "id": 33, "name": "Merlot", "price": "6.00", "year": 2013, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "R", "description": "Riede L\u00e4ngen", "text": "Intensives Rubinrot; Duft erinnert an reife Zwetschken.<br \/>\nVollmundig und samtig im Geschmack.<br \/>\nPassend zu Pilz- und Fleischspeisen.", "unit": "0,75l", "available": 1, "out_of_stock": 1, "order": 3 }, { "id": 35, "name": "Merlot", "price": "16.00", "year": 2014, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "Q", "description": "Beerenauslese", "text": "Intensives Goldgelb; In der Nase verf\u00fchrt er<br \/>\nmit w\u00fcrzigen Aromen. Am Gaumen unglaublich<br \/>\ntiefe Frucht von einer feinen Fruchts\u00e4ure.", "unit": "0,375l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 36, "name": "Gr\u00fcner Veltliner", "price": "2.60", "year": null, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "1L", "description": "der Klassiker", "text": "", "unit": "1l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 37, "name": "Rivaner", "price": "2.60", "year": null, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "1L", "description": "der S\u00fcffige", "text": "", "unit": "1l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 38, "name": "Blauer Portugieser", "price": "2.60", "year": null, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "1L", "description": "der Feinherbe", "text": "", "unit": "1l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 39, "name": "Blauburger", "price": "2.60", "year": null, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "1L", "description": "der Samtige", "text": "", "unit": "1l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 40, "name": "Zweigelt", "price": "2.80", "year": null, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "1L", "description": "f\u00fcr Genie\u00dfer", "text": "", "unit": "1l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 41, "name": "Weinviertel DAC", "price": "5.60", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Alte Reben \u2013 Gr\u00fcner Veltliner", "text": "Hellgelb; komplex und intensiv im Duft,<br \/>\nfruchtiger Geschmack mit harmonischer S\u00e4ure.<br \/>\nPassend zu pikanten Speisen.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 4 }, { "id": 42, "name": "Weinviertel DAC", "price": "5.60", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Hochsteiner \u2013 Gr\u00fcner Veltliner", "text": "Gr\u00fcngelb; charmanter Duft mit<br \/>\nPfefferw\u00fcrze, mineralischer Abgang.<br \/>\nIdeal zu Wiener Schnitzerl und Tafelspitz.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 3 }, { "id": 43, "name": "Gr\u00fcner Veltliner", "price": "5.00", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Klassik", "text": " Klassischer Veltliner mit ausgepr\u00e4gt w\u00fcrziger<br \/>\nNase, angenehmes S\u00e4urespiel. Passend zu<br \/>\nhellen Fleischgerichten.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 2 }, { "id": 44, "name": "Gelber Muskateller", "price": "5.80", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Riede Sechs Vierteln", "text": "Hellgelb, leichte Ankl\u00e4nge an Holunderbl\u00fcten,<br \/>\nlebendige S\u00e4ure, ausgewogen am Gaumen.<br \/>\nPassend zu mildem Schnittk\u00e4se.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 9 }, { "id": 45, "name": "Ros\u00e9", "price": "5.00", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "R", "description": "Zweigelt", "text": "Helle Zwiebelschalenfarbe; fruchtig, animierender Duft; zarte Kohlens\u00e4ure.<br \/>\nDer Wein f\u00fcr einen gem\u00fctlichen Sommerabend.<br \/>\nPassend zu Fischgerichten. ", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 46, "name": "Blauer Zweigelt", "price": "5.20", "year": 2016, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "R", "description": "Riede \u00d6dfeld", "text": "Dunkles Rubinrot; Fruchtspiel aus Weichseln und<br \/>\nWaldbeeren; fruchtbetonter Geschmack.<br \/>\nPassend zu w\u00fcrzigen Speisen.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 47, "name": "H&P Cuv\u00e9e", "price": "5.00", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Wei\u00dfweincuv\u00e9e", "text": "Strohgelb, jugendlicher, vielschichtiger<br \/>\nWei\u00dfweincuv\u00e9e mit harmonischem Fruchtspiel<br \/>\nund angenehmer S\u00e4ure. Passend zu w\u00fcrzigem K\u00e4se.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 1 }, { "id": 48, "name": "Riesling", "price": "5.80", "year": 2017, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "W", "description": "Kalvarienberg", "text": "Lebendiger Duft mit Steinobstankl\u00e4ngen.<br \/>\nHarmonische S\u00e4ure mit einem angenehmen<br \/>\nTrinkfluss. Passend zu hellem Fleisch.", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 8 }, { "id": 49, "name": "Zweigelt Reserve", "price": "8.50", "year": 2012, "tax_rate": 12, "created_at": null, "updated_at": null, "type": "R", "description": "Riede \u00d6dfeld", "text": "Dunkles Rubinrot; Fruchtspiel aus Waldbeeren;<br \/>\nEin Hauch von Schokolade, samtiger Abgang;<br \/>\nEin Wein f\u00fcr Genie\u00dfer ", "unit": "0,75l", "available": 1, "out_of_stock": 0, "order": 3 }])
        }, 1500)
    })
}

function fetchTidbits(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{ "id": 11, "name": "Weinbrand \"holzfassgelagert\", 0,35l", "price": "12.00", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 12, "name": "Rotweinlik\u00f6r, 0,35l", "price": "7.60", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 13, "name": "Traubensaft wei\u00df, 1l", "price": "2.20", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 14, "name": "Traubensaft Ros\u00e9, 1l", "price": "2.20", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 15, "name": "Hausgemachte Marmelade", "price": "2.80", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 16, "name": "K\u00fcrbiskerne natur, 250g", "price": "3.00", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 17, "name": "K\u00fcrbiskerne ger\u00f6stet, 200g", "price": "3.00", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 18, "name": "K\u00fcrbiskerne ger\u00f6stet mit Chilisalz, 150g", "price": "3.00", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 19, "name": "K\u00fcrbiskern\u00f6l, 0,25l", "price": "6.00", "tax_rate": 10, "created_at": null, "updated_at": null }, { "id": 20, "name": "K\u00fcrbiskern\u00f6l, 0,5l", "price": "10.80", "tax_rate": 10, "created_at": null, "updated_at": null }])
        }, 1500)
    })
}

export function createStore() {
    return new Vuex.Store({
        state: {
            wines: [],
            tidbits: []
        },
        actions: {
            fetchWines({ commit }) {
                return fetchWines().then(wines => {
                    commit('setWines', { wines })
                })
            },
            fetchTidbits({ commit }) {
                return fetchTidbits().then(tidbits => {
                    commit('setTidbits', { tidbits })
                })
            }
        },
        mutations: {
            setWines(state, { wines }) {
                state.wines = wines
            },
            setTidbits(state, { tidbits }) {
                state.tidbits = tidbits
            }
        }
    })
}
