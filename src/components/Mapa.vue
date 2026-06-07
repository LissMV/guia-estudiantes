<template>
    <div class="container">

        <aside class="sidebar">
            <div class="sidebar-header">
                <h1>Mapa Campus</h1>
                <p class="subtitle">Explora la ESEN</p>
            </div>

            <div class="category">
                <h2 class="category-title">Descanso</h2>
                <ul class="place-list" id="academic-list"></ul>
            </div>

            <div class="category">
                <h2 class="category-title">Top Vistas</h2>
                <ul class="place-list" id="cafeteria-list"></ul>
            </div>

            <div class="category">
                <h2 class="category-title">Lugares deprimetes</h2>
                <ul class="place-list" id="study-list"></ul>
            </div>

            <div class="category">
                <h2 class="category-title">Atajos</h2>
                <ul class="place-list" id="recreation-list"></ul>
            </div>
        </aside>

        <main class="map-section">
            <div id="map"></div>
        </main>
    </div>

    <div class="modal-overlay" id="modal-overlay">
        <div class="modal" id="modal">
            <button class="modal-close" id="modal-close">✕</button>
            <div class="modal-media" id="modal-media"></div>
            <div class="modal-body">
                <div class="modal-category-badge" id="modal-badge"></div>
                <h2 class="modal-title" id="modal-title"></h2>
                <p class="modal-desc" id="modal-desc"></p>
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
import { onMounted } from 'vue'

onMounted(() => {

  const places = [/* 👉 pega tu array completo aquí */]

  const categoryLabels = {
    academic: 'Lugares para dormir',
    cafeteria: 'Las mejores vistas',
    study: 'Lugar depresivo',
    recreation: 'Atajos y rutas rápidas'
  }

  const emojiMap = {
    academic: '😴',
    cafeteria: '👀',
    study: '😭',
    recreation: '🏃🏻'
  }

  const MAP_WIDTH = 1080
  const MAP_HEIGHT = 643

  const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    dragging: false,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    keyboard: false
  })

  const imageBounds = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]]

  L.imageOverlay('assets/MAPA.png', imageBounds).addTo(map)
  map.fitBounds(imageBounds)

  window.addEventListener('resize', () => map.fitBounds(imageBounds))

  // ===== MODAL =====
  const overlay = document.getElementById('modal-overlay')
  const modalMedia = document.getElementById('modal-media')
  const modalBadge = document.getElementById('modal-badge')
  const modalTitle = document.getElementById('modal-title')
  const modalDesc = document.getElementById('modal-desc')
  const modalClose = document.getElementById('modal-close')

  let activeItem = null

  function openModal(place) {
    if (place.video) {
      modalMedia.innerHTML = `<video src="${place.video}" autoplay loop muted playsinline></video>`
    } else {
      modalMedia.innerHTML = `<img src="${place.image}" />`
    }

    modalBadge.textContent = `${emojiMap[place.category]} ${categoryLabels[place.category]}`
    modalTitle.textContent = place.name
    modalDesc.textContent = place.description

    overlay.classList.add('visible')

    if (activeItem) activeItem.classList.remove('active')
    const el = document.getElementById(`item-${place.id}`)
    if (el) {
      el.classList.add('active')
      activeItem = el
    }
  }

  function closeModal() {
    overlay.classList.remove('visible')
    if (activeItem) activeItem.classList.remove('active')
    activeItem = null
  }

  modalClose.addEventListener('click', closeModal)
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal()
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal()
  })

  // ===== MARKERS =====
  const categories = {
    academic: [],
    cafeteria: [],
    study: [],
    recreation: []
  }

  places.forEach(place => {

    const icon = L.divIcon({
      html: `<span style="font-size:20px;display:flex;align-items:center;justify-content:center;width:100%;height:100%;">${emojiMap[place.category]}</span>`,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
      className: ''
    })

    const marker = L.marker([place.lat, place.lng], { icon }).addTo(map)
    marker.on('click', () => openModal(place))

    categories[place.category].push(place)
  })

  // ===== SIDEBAR LIST =====
  Object.keys(categories).forEach(category => {

    const listEl = document.getElementById(`${category}-list`)
    if (!listEl) return

    categories[category].forEach(place => {

      const li = document.createElement('li')
      li.className = 'place-item'
      li.id = `item-${place.id}`

      li.innerHTML = `
        <div class="place-item-name">${place.name}</div>
        <div class="place-item-desc">${place.description}</div>
      `

      li.addEventListener('click', () => openModal(place))
      listEl.appendChild(li)
    })
  })

})
</script>
