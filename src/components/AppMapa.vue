<template>
  <div class="container">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1>Mapa Campus</h1>
        <p class="subtitle">Explora la ESEN</p>
      </div>

      <div v-for="cat in categoriesList" :key="cat.key" class="category">
        <h2 class="category-title">{{ cat.label }}</h2>
        <ul class="place-list">
          <li
            v-for="place in placesByCategory[cat.key]"
            :key="place.id"
            class="place-item"
            :class="{ active: activeId === place.id }"
            @click="openModal(place)"
          >
            <div class="place-item-name">{{ place.name }}</div>
            <div class="place-item-desc">{{ place.description }}</div>
          </li>
        </ul>
      </div>
    </aside>

    <main class="map-section">
      <div id="map"></div>
    </main>
  </div>

  <!-- Modal -->
  <div class="modal-overlay" :class="{ visible: modalVisible }" @click.self="closeModal">
    <div class="modal">
      <button class="modal-close" @click="closeModal">✕</button>
      <div class="modal-media">
        <video v-if="selected?.video" :src="selected.video" autoplay loop muted playsinline />
        <img v-else-if="selected?.image" :src="selected.image" :alt="selected?.name" />
      </div>
      <div class="modal-body">
        <div class="modal-category-badge">
          {{ emojiMap[selected?.category] }} {{ categoryLabels[selected?.category] }}
        </div>
        <h2 class="modal-title">{{ selected?.name }}</h2>
        <p class="modal-desc">{{ selected?.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f0f2f5;
    color: #333;
    overflow: hidden;
}

.container {
    display: flex;
    width: 100%;
    height: 100vh;
}

.sidebar {
    width: 290px;
    min-width: 290px;
    background: #1a1d2e;
    padding: 22px 14px;
    overflow-y: auto;
    flex-shrink: 0;
    border-right: 1px solid #2a2d40;
}

.sidebar-header {
    margin-bottom: 26px;
    padding-bottom: 16px;
    border-bottom: 1px solid #2a2d40;
}

.sidebar-header h1 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
}

.subtitle {
    font-size: 12px;
    color: #6b7280;
}

.category {
    margin-bottom: 22px;
}

.category-title {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #4b5563;
    margin-bottom: 10px;
    padding: 0 6px;
}

.place-list {
    list-style: none;
}

.place-item {
    padding: 11px 12px;
    margin-bottom: 5px;
    border-radius: 8px;
    background: #22263a;
    cursor: pointer;
    transition: all 0.18s ease;
    border-left: 3px solid transparent;
}

.place-item:hover {
    background: #2a2f4a;
    border-left-color: #6366f1;
    transform: translateX(2px);
}

.place-item.active {
    background: #2a2f4a;
    border-left-color: #6366f1;
}

.place-item-name {
    font-size: 13px;
    font-weight: 600;
    color: #e5e7eb;
    margin-bottom: 2px;
}

.place-item-desc {
    font-size: 11px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sidebar::-webkit-scrollbar { width: 4px; }
.sidebar::-webkit-scrollbar-track { background: transparent; }
.sidebar::-webkit-scrollbar-thumb { background: #2a2d40; border-radius: 4px; }

.map-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8eaed;
    overflow: hidden;
}

#map {
    width: 100%;
    height: 100%;
    background: #fff;
}

.leaflet-popup { display: none !important; }

.leaflet-marker-icon {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: 2.5px solid #ffffff;
    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    background: #6366f1;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.leaflet-marker-icon:hover {
    transform: scale(1.2);
}

.leaflet-shadow { display: none; }

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
}

.modal-overlay.visible {
    opacity: 1;
    pointer-events: all;
}

.modal {
    background: #ffffff;
    border-radius: 16px;
    width: 520px;
    max-width: 92vw;
    max-height: 88vh;
    overflow: hidden;
    position: relative;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
    transform: scale(0.93) translateY(10px);
    transition: transform 0.25s ease;
}

.modal-overlay.visible .modal {
    transform: scale(1) translateY(0);
}

.modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: rgba(0,0,0,0.5);
    color: white;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.modal-close:hover {
    background: rgba(0,0,0,0.75);
}

.modal-media {
    width: 100%;
    height: 380px;
    overflow: hidden;
    background: #111;
}

.modal-media img,
.modal-media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Cuerpo del modal */
.modal-body {
    padding: 22px 24px 26px;
    max-height: 300px;
    overflow-y: auto;
}

.modal-body::-webkit-scrollbar {
    width: 6px;
}

.modal-body::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
}

.modal-body::-webkit-scrollbar-track {
    background: transparent;
}

.modal-category-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6366f1;
    background: #eef2ff;
    border-radius: 20px;
    padding: 4px 12px;
    margin-bottom: 12px;
}

.modal-title {
    font-size: 22px;
    font-weight: 800;
    color: #111827;
    margin-bottom: 10px;
    line-height: 1.2;
}

.modal-desc {
    font-size: 15px;
    color: #6b7280;
    line-height: 1.6;
    padding-bottom: 16px;
}

@media (max-width: 700px) {
    .container { flex-direction: column; }
    .sidebar {
        width: 100%;
        min-width: unset;
        max-height: 210px;
        border-right: none;
        border-bottom: 1px solid #2a2d40;
    }
    .modal { width: 95vw; }
    .modal-media { height: 200px; }
}
</style>

<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref, computed } from 'vue'
import 'leaflet/dist/leaflet.css'
import MAPA from '@/assets/img/mapa/MAPA.png'
import depre1 from '@/assets/img/mapa/depre1.jpg'
import depre2 from '@/assets/img/mapa/depre2.jpeg'
import depre3 from '@/assets/img/mapa/depre3.jpg'
import dormida1 from '@/assets/img/mapa/dormida1.jpeg'
import dormida2 from '@/assets/img/mapa/dormida2.jpeg'
import dormido3 from '@/assets/img/mapa/dormido3.jpeg'
import vista1 from '@/assets/img/mapa/vista1.jpg'
import vista2 from '@/assets/img/mapa/vista2.jpg'
import vista3 from '@/assets/img/mapa/vista3.jpg'
import delacafealalego from '@/assets/img/mapa/delacafealalego.mp4'
import delaudiallobby from '@/assets/img/mapa/delaudiallobby.mp4'
import delpasilloalpicnic from '@/assets/img/mapa/delpasilloalpicnic.mp4'
import delpicnicalcc from '@/assets/img/mapa/delpicnicalcc.mp4'

const places = [
    {
        id: 'place-1',
        name: 'Afuera del CC',
        category: 'academic',
        description: 'Área donde los estudiantes suelen descansar entre clases',
        image: dormido3,
        lat: 310,
        lng: 430
    },
    {
        id: 'place-2',
        name: 'Parte de arriba del CC',
        category: 'academic',
        description: 'Área donde los estudiantes suelen descansar entre clases',
        image: dormida1,
        lat: 380,
        lng: 435
    },
    {
        id: 'place-3',
        name: 'Al lado del CC',
        category: 'cafeteria',
        description: 'Área para difrutar de una linda vista',
        image: vista1,
        lat: 340,
        lng: 570
    },
    {
        id: 'place-4',
        name: 'El auditorio',
        category: 'study',
        description: 'Muy posiblemente la primera aula a la que asistirás en la ESEN durante tu semana de orientación, y desde ese momento sabrás el tipo de clases que se dan en ese lugar; lecturas poco comprensibles como emprendimiento y charlas larguísimas en mitad de la noche son algunas de las sorpresas que te esperan en este sitio. Claro, sin olvidar los exámenes que se realizan ahí, pero sobre todas las cosas es el lugar en el que tendrás que abandonar tu vergüenza cuando debas ponerte un vestido o pintarte por completo para las obras de teatro de Liderazgo y Bienestar Total.',
        image: depre3,
        lat: 295,
        lng: 790
    },
    {
        id: 'place-5',
        name: 'Del picnic al CC',
        category: 'recreation',
        description: 'Manera para llegar más rapido al CC',
        video: delpicnicalcc,
        lat: 380,
        lng: 550
    },

    {
        id: 'place-6',
        name: 'Parte baja del CC',
        category: 'academic',
        description: 'Área donde los estudiantes suelen descansar entre clases',
        image: dormida2,
        lat: 430,
        lng: 400
    },
    {
        id: 'place-7',
        name: 'Plaza las banderas',
        category: 'cafeteria',
        description: 'Área para difrutar de una linda vista',
        image: vista2,
        lat: 310,
        lng: 660
    },
    {
        id: 'place-8',
        name: 'Plaza legorreta',
        category: 'cafeteria',
        description: 'Área para difrutar de una linda vista',
        image: vista3,
        lat: 230,
        lng: 560
    },
    {
        id: 'place-9',
        name: 'Del pasillo al picnic',
        category: 'recreation',
        description: 'Manera para llegar más rapido al picnic',
        video: delpasilloalpicnic,
        lat: 300,
        lng: 520
    },
    {
        id: 'place-10',
        name: 'Del audi al lobby',
        category: 'recreation',
        description: 'Manera para llegar más rapido al lobby',
        video: delaudiallobby,
        lat: 260,
        lng: 800
    },
    {
        id: 'place-11',
        name: 'De la cafe a la legorreta',
        category: 'recreation',
        description: 'Manera para llegar más rapido a la legorreta',
        video: delacafealalego,
        lat: 340,
        lng: 780
    },
    {
        id: 'place-12',
        name: 'Reproducciones',
        category: 'study',
        description: 'Luego de tu primer examen de matemáticas, esperas con miedo el día en el que te entreguen tus resultados. No obstante, lo más común es que pasadas unas semanas el profesor diga al final de su clase: (pueden ir por sus controles a reproducciones). Y de repente, ese lugar que parecía ser solo una sala de impresiones se vuelve un verdadero terror. Sea que vengas a traer tu evaluación o a escanear un documento, lo primero que verás al entrar será una pila de exámenes con notas desde cero a tres, si hay muchísima suerte quizás veas algún nueve entre todos esos papeles, aunque es poco probable que sea tuyo.',
        image: depre1,
        lat: 245,
        lng: 665
    },
    {
        id: 'place-13',
        name: 'El olimpo',
        category: 'study',
        description: 'En la antigüedad se decía que en el monte Olimpo habitaban los dioses griegos, en la actualidad, se sabe que ahí encontrarás a los rectores de cada carrera. Este sitio, si bien no es deprimente por sí solo, de hecho, siendo bastante bonito, suele ser un lugar que no quieres frecuentar. Pues eso significa que has venido a hablar con los rectores de tu carrera, ya sea con tal de levantar una queja, responder dudas de extrema importancia o si ya estás en muchos problemas, para pedir orientación o intentar escapar de esta universidad.',
        image: depre2,
        lat: 260,
        lng: 495
    }
];

const categoryLabels = {
  academic:   'Lugares para dormir',
  cafeteria:  'Las mejores vistas',
  study:      'Lugar depresivo',
  recreation: 'Atajos y rutas rápidas'
}

const emojiMap = {
  academic:   '😴',
  cafeteria:  '👀',
  study:      '😭',
  recreation: '🏃🏻'
}

const categoriesList = [
  { key: 'academic',   label: 'Descanso' },
  { key: 'cafeteria',  label: 'Top Vistas' },
  { key: 'study',      label: 'Lugares deprimentes' },
  { key: 'recreation', label: 'Atajos' },
]

const placesByCategory = computed(() => {
  const result = {}
  categoriesList.forEach(c => {
    result[c.key] = places.filter(p => p.category === c.key)
  })
  return result
})

const modalVisible = ref(false)
const selected = ref(null)
const activeId = ref(null)

function openModal(place) {
  selected.value = place
  activeId.value = place.id
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
  activeId.value = null
}

onMounted(() => {
  const MAP_WIDTH = 1080
  const MAP_HEIGHT = 643

  const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2, maxZoom: 2,
    dragging: false, zoomControl: false,
    scrollWheelZoom: false, doubleClickZoom: false,
    touchZoom: false, keyboard: false
  })

  const imageBounds = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]]
  L.imageOverlay(MAPA, imageBounds).addTo(map)
  map.fitBounds(imageBounds)

  window.addEventListener('resize', () => map.fitBounds(imageBounds))

  places.forEach(place => {
    const icon = L.divIcon({
      html: `<span style="font-size:20px;display:flex;align-items:center;justify-content:center;width:100%;height:100%;">${emojiMap[place.category]}</span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
      className: ''
    })
    const marker = L.marker([place.lat, place.lng], { icon }).addTo(map)
    marker.on('click', () => openModal(place))
  })
})

// cerrar con Escape
onMounted(() => {
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() })
})
</script>
