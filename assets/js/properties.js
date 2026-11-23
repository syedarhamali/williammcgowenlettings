/* Property data — taken from the live Rentals page and property pages.
   In production this would come from the CMS / WordPress. */
window.PROPS = [
  {
    id: "dawpool-road",
    title: "Dawpool Road, NW2",
    full: "Dawpool Road, Double Room, NW2 7LD",
    area: "NW2", type: "room", typeLabel: "Room (HMO house)",
    price: 1050, priceLabel: "£1,050", billsIncluded: true,
    status: "available", beds: 5, baths: 3, parking: "Allocated",
    imgs: ["dawpool-1.jpg", "dawpool-2.jpg", "dawpool-3.jpg", "dawpool-4.jpg"],
    desc: [
      "McGowan's are pleased to be able to offer this 1st floor room pairing. Available just a 10 minute walk from Neasden shopping centre — a great location and perfect for anyone looking for local accommodation.",
      "An HMO house means you will be sharing a kitchen and bathroom. Available for DSS, UC, students or private renting.",
      "The property has communal gardens and allocated parking and is available from £1,050 a month, including bills."
    ],
    features: ["Bills included", "Shared kitchen & bathroom", "Communal gardens", "Allocated parking", "DSS, UC, students & private renters welcome", "10 min walk to Neasden shopping centre"],
    map: "Dawpool Road, London NW2 7LD"
  },
  {
    id: "village-way",
    title: "Village Way, NW10",
    full: "Double Ground Floor Garden Room, Village Way, Welsh Harp, NW10",
    area: "NW10", type: "room", typeLabel: "Garden room",
    price: 1100, priceLabel: "£1,100",
    status: "available", beds: 8, baths: null, parking: "Off-street",
    imgs: ["village-1.jpg", "village-2.jpg", "village-3.jpg", "village-4.jpg"],
    desc: [
      "McGowan's are pleased to offer this fully refurbished terraced house with rear garden and off-street parking.",
      "The property can be let furnished or unfurnished. It is a very fresh and vibrant home with full gas central heating and a generous through lounge, and is available immediately."
    ],
    features: ["Fully refurbished", "Rear garden", "Off-street parking", "Gas central heating", "Furnished or unfurnished", "Available immediately"],
    map: "Village Way, London NW10"
  },
  {
    id: "dollis-hill-avenue",
    title: "Dollis Hill Avenue, NW2",
    full: "Dollis Hill Avenue, NW2",
    area: "NW2", type: "flat", typeLabel: "Apartment",
    price: 1250, priceLabel: "£1,250",
    status: "available", beds: 3, baths: null, parking: "Allocated",
    imgs: ["dollis-1.jpg"],
    desc: [
      "A 2nd floor, 3 bedroom newly converted apartment with an open-plan kitchen and lounge. Bright, with generous proportions and views of the Wembley Arch.",
      "The property has communal gardens and allocated parking."
    ],
    features: ["Newly converted", "Open-plan kitchen & lounge", "Views of Wembley Arch", "Communal gardens", "Allocated parking"],
    map: "Dollis Hill Avenue, London NW2"
  },
  {
    id: "chartley-avenue",
    title: "Chartley Avenue, NW2",
    full: "Chartley Avenue, NW2",
    area: "NW2", type: "room", typeLabel: "Loft room",
    price: 1000, priceLabel: "~£1,000",
    status: "available", beds: 2, baths: null, parking: null,
    imgs: ["chartley-1.jpg"],
    desc: ["Loft room on Chartley Avenue, NW2. Full details coming soon — call us on 0208 450 0845 to find out more or to arrange a viewing."],
    features: [],
    map: "Chartley Avenue, London NW2"
  },
  {
    id: "elm-way",
    title: "Elm Way, London",
    full: "Elm Way, London",
    area: "NW10", type: "flat", typeLabel: "Flat",
    price: 2650, priceLabel: "£2,650",
    status: "let", beds: 3, baths: null, parking: null,
    imgs: ["elm-1.jpg"],
    desc: ["This property has now been let. Register your details with us and we'll let you know when similar homes become available."],
    features: [],
    map: "Elm Way, London NW10"
  },
  {
    id: "westview-close",
    title: "Westview Close, NW10",
    full: "Westview Close, London, NW10",
    area: "NW10", type: "flat", typeLabel: "Flat",
    price: 1800, priceLabel: "£1,800",
    status: "let", beds: 1, baths: null, parking: null,
    imgs: ["westview-1.jpg"],
    desc: ["This property has now been let. Register your details with us and we'll let you know when similar homes become available."],
    features: [],
    map: "Westview Close, London NW10"
  }
];
