// Indian Art History Map - Application Logic

let map;
let markers = {};
let activeLocationId = null;

// Initialize the map and events when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  createMarkers();
  renderLocationList(artLocations);
  setupEventListeners();

  // Show the first location (Bhimbetka) by default on desktop
  if (window.innerWidth > 900 && artLocations.length > 0) {
    selectLocation(artLocations[0].id, false);
  }
});

function initMap() {
  // Center coordinates for India
  const centerOfIndia = [22.5, 80.0];

  map = L.map("map", {
    center: centerOfIndia,
    zoom: 5,
    minZoom: 4,
    maxZoom: 12
  });

  // OpenStreetMap tile layer
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function createCustomPin(index) {
  return L.divIcon({
    className: "custom-pin",
    html: `<div class="pin-marker" id="pin-marker-${index}">${index}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -14]
  });
}

function createMarkers() {
  artLocations.forEach((loc, index) => {
    const pinNumber = index + 1;
    const marker = L.marker(loc.coordinates, {
      icon: createCustomPin(pinNumber),
      title: loc.name
    });

    // Simple popup on click
    const popupContent = `
      <div class="popup-title">${loc.name}</div>
      <div class="popup-meta">${loc.state} &bull; ${loc.movement}</div>
      <button class="popup-btn" onclick="selectLocation('${loc.id}')">View History & Details</button>
    `;

    marker.bindPopup(popupContent);

    marker.on("click", () => {
      selectLocation(loc.id, false);
    });

    marker.addTo(map);
    markers[loc.id] = marker;
  });
}

function renderLocationList(list) {
  const container = document.getElementById("locationsList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<div style="padding: 16px; color: #777; font-size: 0.85rem;">No sites found for this category.</div>`;
    return;
  }

  list.forEach((loc, index) => {
    const item = document.createElement("div");
    item.className = `location-item ${loc.id === activeLocationId ? "active" : ""}`;
    item.id = `list-item-${loc.id}`;

    item.innerHTML = `
      <div class="item-meta">
        <span>#${index + 1} &bull; ${loc.state}</span>
        <span>${loc.category}</span>
      </div>
      <h3>${loc.name}</h3>
      <span class="item-movement">${loc.movement}</span>
    `;

    item.addEventListener("click", () => {
      selectLocation(loc.id);
    });

    container.appendChild(item);
  });
}

function selectLocation(id, panTo = true) {
  const loc = artLocations.find(item => item.id === id);
  if (!loc) return;

  activeLocationId = id;

  // Highlight list item in sidebar
  document.querySelectorAll(".location-item").forEach(el => el.classList.remove("active"));
  const activeEl = document.getElementById(`list-item-${id}`);
  if (activeEl) {
    activeEl.classList.add("active");
    activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Highlight pin marker
  document.querySelectorAll(".pin-marker").forEach(el => el.classList.remove("active"));
  const markerIndex = artLocations.findIndex(l => l.id === id) + 1;
  const pinEl = document.getElementById(`pin-marker-${markerIndex}`);
  if (pinEl) {
    pinEl.classList.add("active");
  }

  // Pan map if requested
  if (panTo && markers[id]) {
    map.flyTo(loc.coordinates, 7, { duration: 1.2 });
    markers[id].openPopup();
  }

  // Render detail panel
  showLocationDetails(loc);
}

function showLocationDetails(loc) {
  const container = document.getElementById("detailContent");

  const artworksListHtml = loc.keyArtworks
    .map(art => `<li>${art}</li>`)
    .join("");

  container.innerHTML = `
    <div class="detail-image-box">
      <img src="${loc.image}" alt="${loc.name} artwork" onerror="this.parentElement.style.display='none';">
      <div class="detail-image-caption">${loc.name} &bull; ${loc.movement}</div>
    </div>

    <h2 class="detail-title">${loc.name}</h2>
    <div class="detail-region">${loc.state} &bull; Coordinates: ${loc.coordinates[0].toFixed(2)}° N, ${loc.coordinates[1].toFixed(2)}° E</div>

    <div class="badge-row">
      <span class="badge badge-movement">${loc.movement}</span>
      <span class="badge badge-era">${loc.era}</span>
    </div>

    <div class="detail-section">
      <h4>Overview</h4>
      <p>${loc.description}</p>
    </div>

    <div class="detail-section">
      <h4>Historical Context & Geographic Spread</h4>
      <p>${loc.historicalContext}</p>
    </div>

    <div class="detail-section">
      <h4>Key Artworks</h4>
      <ul>${artworksListHtml}</ul>
    </div>

    <div class="detail-section">
      <h4>Associated Artists & Masters</h4>
      <p>${loc.artists}</p>
    </div>
  `;
}

function setupEventListeners() {
  // Category dropdown filter
  const filterSelect = document.getElementById("categoryFilter");
  filterSelect.addEventListener("change", (e) => {
    const selected = e.target.value;
    let filtered;

    if (selected === "all") {
      filtered = artLocations;
    } else {
      filtered = artLocations.filter(loc => loc.category === selected);
    }

    renderLocationList(filtered);

    // Update visible markers on map
    artLocations.forEach(loc => {
      const isVisible = (selected === "all" || loc.category === selected);
      if (markers[loc.id]) {
        if (isVisible) {
          if (!map.hasLayer(markers[loc.id])) {
            markers[loc.id].addTo(map);
          }
        } else {
          if (map.hasLayer(markers[loc.id])) {
            map.removeLayer(markers[loc.id]);
          }
        }
      }
    });

    // If active location is filtered out, select first available
    if (filtered.length > 0 && !filtered.some(l => l.id === activeLocationId)) {
      selectLocation(filtered[0].id);
    }
  });

  // Close detail panel button
  const closeBtn = document.getElementById("closeDetailBtn");
  closeBtn.addEventListener("click", () => {
    const container = document.getElementById("detailContent");
    container.innerHTML = `
      <div class="detail-placeholder">
        <p>Click on any marker on the map or select a site from the list to explore its art movement, history, and masterworks.</p>
      </div>
    `;
    activeLocationId = null;
    document.querySelectorAll(".location-item").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".pin-marker").forEach(el => el.classList.remove("active"));
  });
}
