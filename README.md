# Indian Art History Map

An interactive digital map exploring the geographic spread and influence of major artistic movements, historic sites, and art forms across India.

Each site highlights:
- **Art Movement & Era:** Classical murals, monolithic stone sculptures, miniature schools, and folk/tribal traditions.
- **Historical Context:** How styles originated, materials used, and regional cultural spread.
- **Artists & Masterworks:** Notable artisan guilds, master painters, and iconic representative artworks.
- **Visuals:** Representative artwork photographs from public heritage collections.

---

## Featured Locations

1. **Bhimbetka Rock Shelters (Madhya Pradesh)** — Mesolithic Rock Art (c. 10,000 BCE)
2. **Ajanta Caves (Maharashtra)** — Gupta-Vakataka Buddhist Murals (2nd c. BCE – 5th c. CE)
3. **Ellora Caves (Maharashtra)** — Rashtrakuta Monolithic Sculpture & Kailasa Temple (6th – 10th c. CE)
4. **Thanjavur (Tamil Nadu)** — Chola Bronzes & Tanjore Gilded Paintings (11th – 18th c. CE)
5. **Madhubani / Mithila (Bihar)** — Mithila Folk Art & Ritual Murals
6. **Kangra Valley (Himachal Pradesh)** — Pahari Miniature Painting (18th – 19th c. CE)
7. **Kishangarh (Rajasthan)** — Rajasthani Miniature & *Bani Thani* (18th c. CE)
8. **Santiniketan (West Bengal)** — Bengal School of Art & Modern Indigenous Movement (20th c. CE)
9. **Raghurajpur & Puri (Odisha)** — Pattachitra Cloth Scroll & Palm-leaf Art (12th c. CE onwards)
10. **Palghar / Warli Region (Maharashtra)** — Warli Indigenous Tribal Murals
11. **Kalighat, Kolkata (West Bengal)** — 19th-Century Kalighat Urban Folk Painting
12. **Lepakshi (Andhra Pradesh)** — Vijayanagara Frescoes & Ceiling Murals (16th c. CE)

---

## Project Structure

```text
├── index.html        # Main HTML layout
├── style.css         # Styling and responsive design
├── data.js           # Locations, coordinates, and historical context
├── app.js            # Leaflet map logic, filters, and interactivity
└── images/           # Curated artwork images for each location
```

No build tools, package managers, or compilers are required. The project runs directly in any modern web browser.

---

## Running Locally

You can open the project locally in two ways:

1. **Directly in your browser:**
   Double-click `index.html` or right-click `index.html` and choose **Open With > Google Chrome** (or Edge/Firefox/Safari).

2. **Using a local web server (Recommended):**
   Open a terminal in this project folder and run:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## How to Deploy to GitHub Pages (Step-by-Step)

Because this project is built entirely with static HTML, CSS, and JavaScript, deploying it to GitHub Pages takes less than two minutes:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the upper right corner and select **New repository**.
3. Name your repository (e.g. `indian-art-map`).
4. Set the visibility to **Public** (required for free GitHub Pages).
5. Leave "Add a README file" **unchecked** (we already have one).
6. Click **Create repository**.

### Step 2: Push your code to GitHub
Open your terminal in this project folder and run the following commands:

```bash
# Initialize git (if not already done)
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "Initial commit of Indian Art History Map"

# Rename current branch to main
git branch -M main

# Link your local repo to GitHub (replace USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push the code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in your repository
1. Go to your repository on GitHub.
2. Click on **Settings** (tab at the top right of the repository).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` (or `master`) and leave the folder set to `/ (root)`.
5. Click **Save**.

### Step 4: Access your live website
- Wait 1 to 2 minutes for GitHub to finish building the site.
- Refresh the **Pages** settings screen. You will see a banner at the top:
  > **Your site is live at https://USERNAME.github.io/REPO_NAME/**
- Click the link to open your live interactive map!
