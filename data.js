// Indian Art History Dataset
// Curated list of significant locations representing diverse art movements across India

const artLocations = [
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    coordinates: [22.9372, 77.6128],
    era: "Prehistoric (c. 10,000 – 8,000 BCE)",
    category: "Prehistoric",
    movement: "Mesolithic Rock Art",
    description: "One of the oldest known complexes of rock shelters and cave paintings in the world, set in the sandstone cliffs of the Vindhya Range.",
    historicalContext: "Bhimbetka documents the dawn of human visual culture on the subcontinent. Prehistoric hunter-gatherers created scenes of communal hunting, ritual dancing, and wild animals using natural mineral pigments like hematite (red ochre), chalcedony, and limestone mixed with water and animal fat. These shelters demonstrate continuous artistic occupation spanning the Upper Paleolithic through the Medieval period, establishing early visual storytelling traditions that influenced rock art sites throughout central India.",
    keyArtworks: [
      "Zoo Rock Shelter (Wall of Animals)",
      "Auditorium Cave Cupules",
      "Mythical Boar with Giant Horns"
    ],
    artists: "Early hunter-gatherer communities & prehistoric shaman-artists",
    image: "images/bhimbetka.jpg"
  },
  {
    id: "ajanta",
    name: "Ajanta Caves",
    state: "Maharashtra",
    coordinates: [20.5519, 75.7033],
    era: "Classical (2nd century BCE – 5th century CE)",
    category: "Classical",
    movement: "Gupta-Vakataka Buddhist Murals",
    description: "Thirty rock-carved Buddhist cave sanctuaries celebrated worldwide for masterly tempera murals depicting Jataka tales and Bodhisattvas.",
    historicalContext: "Commissioned under the royal patronage of the Satavahana and Vakataka dynasties, Ajanta is the supreme masterpiece of ancient Indian classical painting. The artists prepared rock walls with a layer of clay, cow dung, and rice husk, finished with fine lime plaster, applying pigments made from lapis lazuli, yellow ochre, and malachite. The sophisticated shading, three-dimensional modeling, and emotive bodily postures set aesthetic norms that spread across Central Asia, China, and Southeast Asia.",
    keyArtworks: [
      "Bodhisattva Padmapani (Cave 1)",
      "Bodhisattva Vajrapani (Cave 1)",
      "The Mahajanaka Jataka Mural"
    ],
    artists: "Guilds of master Buddhist painters (Shilpins) under Vakataka patronage",
    image: "images/ajanta.jpg"
  },
  {
    id: "ellora",
    name: "Ellora Caves",
    state: "Maharashtra",
    coordinates: [20.0268, 75.1793],
    era: "Early Medieval (6th – 10th century CE)",
    category: "Medieval",
    movement: "Rashtrakuta Monolithic Sculpture",
    description: "A monumental complex of 34 rock-cut temples and monasteries representing Buddhist, Hindu, and Jain traditions side by side.",
    historicalContext: "Carved vertically downward out of a single basalt cliff, Ellora's centerpiece is Cave 16—the breathtaking Kailasa Temple. Commissioned under Rashtrakuta King Krishna I, stonemasons removed an estimated 200,000 tonnes of rock without scaffolding. Ellora exemplifies the religious pluralism of medieval India and established benchmark standards for monolithic Dravidian architectural forms and dynamic narrative relief carving.",
    keyArtworks: [
      "Kailasa Temple (Cave 16 Monolith)",
      "Ravana Shaking Mount Kailash",
      "Dashavatara Relief Gallery (Cave 15)"
    ],
    artists: "Guilds of master stonemasons (Sutradharas) patronized by Rashtrakuta kings",
    image: "images/ellora.jpg"
  },
  {
    id: "thanjavur",
    name: "Thanjavur (Tanjore)",
    state: "Tamil Nadu",
    coordinates: [10.7870, 79.1378],
    era: "Chola to Maratha era (11th – 18th century CE)",
    category: "Medieval",
    movement: "Chola Bronzes & Tanjore Painting",
    description: "The historical capital of the Kaveri delta, renowned for sacred lost-wax bronze casting and gold-embossed devotional panel paintings.",
    historicalContext: "Under the Imperial Cholas, Thanjavur developed lost-wax (cire perdue) bronze casting into an exact science, producing timeless sculptural icons such as Shiva Nataraja. In the 17th and 18th centuries under Nayak and Maratha rulers, the region pioneered Tanjore painting—elaborate devotional icons executed on teakwood panels covered with gesso, inlaid with semi-precious gems, and highlighted with 22-carat gold leaf.",
    keyArtworks: [
      "Chola Bronze Nataraja (Lord of the Cosmic Dance)",
      "Tanjore Gilded Krishna with Butter Ball",
      "Brihadisvara Temple Wall Murals"
    ],
    artists: "Chola bronze sthapatis and Raju/Naidu artisan guilds",
    image: "images/thanjavur.jpg"
  },
  {
    id: "madhubani",
    name: "Madhubani (Mithila)",
    state: "Bihar",
    coordinates: [26.3547, 86.0743],
    era: "Traditional Folk (Practiced over centuries, recognized since 1930s)",
    category: "Folk & Tribal",
    movement: "Mithila / Madhubani Painting",
    description: "An intricate folk art tradition preserved by women on the mud walls of domestic courtyards and bridal chambers.",
    historicalContext: "Madhubani art originated as domestic ceremonial decoration during weddings, harvests, and fertility rites (especially the Kohbar Ghar bridal chamber murals). Marked by distinctive double-line outlines, stylized nature motifs, and vibrant natural vegetable pigments, the paintings leave no empty space, filling gaps with flowers, fish, and birds. After the severe 1966 Bihar drought, the All India Handicrafts Board encouraged artists to paint on paper, turning a regional folk custom into an internationally acclaimed art movement.",
    keyArtworks: [
      "Kohbar Ghar (Ritual Bridal Chamber Painting)",
      "Krishna and the Gopis in the Sacred Forest",
      "Sun and Fish Fertility Mandala"
    ],
    artists: "Ganga Devi, Sita Devi, Jagdamba Devi, Baua Devi",
    image: "images/madhubani.jpg"
  },
  {
    id: "kangra",
    name: "Kangra Valley",
    state: "Himachal Pradesh",
    coordinates: [32.0998, 76.2691],
    era: "Late 18th – 19th century CE",
    category: "Miniature",
    movement: "Pahari Miniature Painting",
    description: "The poetic pinnacle of Himalayan court painting, admired for delicate lyrical lines, pastoral romance, and soft natural color palettes.",
    historicalContext: "As Mughal imperial ateliers dispersed in the mid-18th century, artists settled in the hill states of Punjab and Himachal. Under Raja Sansar Chand of Kangra, the school flourished with unprecedented lyrical beauty. Kangra miniatures are celebrated for their gentle depiction of landscape, lush greenery, flowering trees, and evocative romance drawn from Jayadeva's Gita Govinda and the Bhagavata Purana.",
    keyArtworks: [
      "Gita Govinda Illustration Folios",
      "Bhagavata Purana Manuscript Paintings",
      "Radha and Krishna in the Rain"
    ],
    artists: "Master artists of the Pandit Seu family: Nainsukh, Manaku, and Khushala",
    image: "images/kangra.jpg"
  },
  {
    id: "kishangarh",
    name: "Kishangarh",
    state: "Rajasthan",
    coordinates: [26.5746, 74.8622],
    era: "Mid-18th century CE (c. 1740 – 1770)",
    category: "Miniature",
    movement: "Rajasthani Miniature (Kishangarh School)",
    description: "An aristocratic Rajput court style famous for its stylized Radha portraits with exaggerated, poetic features.",
    historicalContext: "Kishangarh painting reached its zenith under the devotional ruler-poet Raja Sawant Singh (known as Nagari Das) and his court master Nihal Chand. Together they reimagined Radha and Krishna with distinctive aesthetic conventions: sweeping serpentine eyes, sharp curved noses, pointed chins, and delicate gossamer veils. The painting of Bani Thani, a singer-poetess at the court, became the quintessential icon of Indian courtly miniature art.",
    keyArtworks: [
      "Bani Thani (The Indian Mona Lisa)",
      "Radha and Krishna in the Moonlit Garden",
      "Courtly Boat Ride on Lake Gundolav"
    ],
    artists: "Nihal Chand and the Kishangarh royal atelier",
    image: "images/kishangarh.jpg"
  },
  {
    id: "santiniketan",
    name: "Santiniketan (Kala Bhavana)",
    state: "West Bengal",
    coordinates: [23.6797, 87.6896],
    era: "Early to mid-20th century (c. 1905 – 1950s)",
    category: "Modern Revival",
    movement: "Bengal School of Art & Modern Indigenous Movement",
    description: "The intellectual cradle of India's nationalist modern art renaissance, integrating indigenous methods with Asian aesthetic philosophy.",
    historicalContext: "Founded by Rabindranath Tagore as an open-air university, Kala Bhavana at Santiniketan sought a modern Indian artistic identity free from British colonial academicism. Led by Nandalal Bose, artists drew inspiration from Ajanta frescoes, East Asian wash traditions, folk crafts, and rural tribal life. Santiniketan pioneered monumental public art in India, including open-air cement sculptures by Ramkinkar Baij and extensive fresco cycles by Benode Behari Mukherjee.",
    keyArtworks: [
      "Bharat Mata (Abanindranath Tagore)",
      "Santhal Family Sculpture (Ramkinkar Baij)",
      "Life of Medieval Saints Mural (Benode Behari Mukherjee)"
    ],
    artists: "Abanindranath Tagore, Nandalal Bose, Ramkinkar Baij, Benode Behari Mukherjee",
    image: "images/santiniketan.jpg"
  },
  {
    id: "raghurajpur",
    name: "Raghurajpur & Puri",
    state: "Odisha",
    coordinates: [19.8135, 85.8312],
    era: "12th century CE to present",
    category: "Folk & Tribal",
    movement: "Pattachitra & Palm Leaf Engraving",
    description: "A heritage artisan village where every household preserves the ancient craft of cloth-scroll painting and etched palm-leaf manuscripts.",
    historicalContext: "Pattachitra is intrinsically bound to the worship of Lord Jagannath at the Puri temple. When temple deities undergo their ritual two-week bath and seclusion (Anavasara period), traditional Chitrakaras paint replacement cloth panels (Pattis) that take their place on the altar. The cloth is prepared with tamarind-gum and chalk, polished with sea stones, and painted with natural mineral colors framed by dense floral borders. The style is noted for bold profile outlines and expressive large eyes.",
    keyArtworks: [
      "Jagannath Anavasara Patti",
      "Kanchi Abhijana Scroll",
      "Dasavatara Palm Leaf Tala Pattachitra"
    ],
    artists: "Chitrakara artisan lineages, master craftsman Jagannath Mahapatra",
    image: "images/raghurajpur.jpg"
  },
  {
    id: "warli",
    name: "Palghar & Dahanu (Warli Region)",
    state: "Maharashtra",
    coordinates: [19.6967, 72.7699],
    era: "Indigenous Tribal Tradition (Popularized from 1970s)",
    category: "Folk & Tribal",
    movement: "Warli Tribal Art",
    description: "A rhythmic visual storytelling tradition created on tribal village walls using elemental geometric forms and rice paste.",
    historicalContext: "Warli art is created by the indigenous Warli tribe of the Sahyadri mountains. Unlike classical temple art, Warli murals focus on harmony with nature, social life, and agrarian cycles rather than mythological deities. Using only circles (sun/moon), triangles (trees/mountains), and squares (sacred space), figures dance the Tarpa in rhythmic spirals. Traditionally painted by village women for weddings, legendary artist Jivya Soma Mashe brought Warli art to world museums starting in the 1970s.",
    keyArtworks: [
      "Tarpa Dance Whirlpool",
      "Palaghata (Chowk) Mother Goddess Enclosure",
      "Harvest Ceremony and Forest Life"
    ],
    artists: "Jivya Soma Mashe, Balu Mashe, and tribal Suhasinis",
    image: "images/warli.jpg"
  },
  {
    id: "kalighat",
    name: "Kalighat, Kolkata",
    state: "West Bengal",
    coordinates: [22.5204, 88.3444],
    era: "19th century (c. 1830 – 1930)",
    category: "Urban Folk",
    movement: "Kalighat Painting School",
    description: "India's first major urban folk art movement, characterized by swift brushwork, bold contours, and satirical social commentary.",
    historicalContext: "During the 19th century, rural scroll painters (patuas) migrated to the fast-growing colonial city of Calcutta, setting up shop around the sacred Kalighat Kali temple. To meet heavy pilgrim demand, they developed a rapid watercolor technique on inexpensive mill paper. Alongside Hindu deities, they produced sharp, humorous caricatures of decadent westernized colonial elites ('babus'), hypocritical ascetics, and changing urban social relations. The Kalighat style later served as the prime aesthetic catalyst for modern painter Jamini Roy.",
    keyArtworks: [
      "Cat with a Prawn in its Mouth (Satirical Babu theme)",
      "Babu Groom and Courtesan",
      "Goddess Kali Trampling Shiva"
    ],
    artists: "Bazaar Patua family guilds; Nibaran Chandra Ghosh, Kali Charan Ghosh",
    image: "images/kalighat.jpg"
  },
  {
    id: "lepakshi",
    name: "Lepakshi",
    state: "Andhra Pradesh",
    coordinates: [13.8055, 77.6074],
    era: "16th century CE (Vijayanagara Empire)",
    category: "Medieval",
    movement: "Vijayanagara Fresco & Ceiling Murals",
    description: "The Veerabhadra Temple complex, housing the grandest preserved ceiling frescoes and stone relief carvings of the Vijayanagara era.",
    historicalContext: "Built around 1530 CE by royal brothers Virupanna and Veeranna under Emperor Achyuta Deva Raya, Lepakshi contains a colossal ceiling mural measuring 23 by 13 feet depicting 14 manifestations of Shiva. The murals showcase remarkable decorative vigor: dynamic three-quarter faces, elaborate sari and textile patterns, conical crowns (kiritas), and rhythmic linear energy. Lepakshi's art represents the high water mark of late medieval South Indian pictorial aesthetics.",
    keyArtworks: [
      "Veerabhadra Monumental Ceiling Fresco",
      "Kiratarjuniya (Arjuna and the Boar) Panels",
      "Monolithic Granite Nandi Bull"
    ],
    artists: "Vijayanagara royal court muralists and guild master artisans",
    image: "images/lepakshi.jpg"
  }
];
