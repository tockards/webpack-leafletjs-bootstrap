import "./style.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./fixes.js"
import Alpine from 'alpinejs'


document.addEventListener('alpine:init', () => {
    var map = L.map('map').setView([51.505, -0.09], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);

    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = !this.open
        },
    }))
})

window.Alpine = Alpine

Alpine.start()