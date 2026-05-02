export type SeedSubcategory = {
  slug: string;
  name: string;
  description: string;
};

export type SeedCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longCopy: string;
  iconKey: string;
  featured: boolean;
  sortOrder: number;
  texasNote?: string;
  subcategories: SeedSubcategory[];
};

export const categories: SeedCategory[] = [
  {
    slug: "plumbing",
    name: "Plumbing",
    tagline: "Pipes, fixtures, water heaters, and drains.",
    description:
      "Licensed Texas plumbers for leaks, clogs, water heater swaps, repipes, and full bathroom rough-ins.",
    longCopy:
      "From a midnight slab leak in Sugar Land to a tankless retrofit in McKinney, plumbing problems rarely wait for business hours. The pros listed here are vetted Texas plumbing companies — most with 24/7 dispatch, transparent flat-rate pricing, and the kind of crew that pulls up in a truck stocked with the right fittings the first time.",
    iconKey: "Wrench",
    featured: true,
    sortOrder: 1,
    subcategories: [
      { slug: "leak-repair", name: "Leak Repair", description: "Slab, pinhole, and supply line leaks." },
      { slug: "water-heater-repair", name: "Water Heater Repair", description: "Tank and tankless diagnostics." },
      { slug: "water-heater-install", name: "Water Heater Install", description: "Replacement, upgrades, gas to tankless conversions." },
      { slug: "drain-cleaning", name: "Drain Cleaning", description: "Snake, hydro-jet, and camera inspection." },
      { slug: "sewer-line", name: "Sewer Line Repair", description: "Trenchless replacement and root intrusion fixes." },
      { slug: "repipe", name: "Whole-Home Repipe", description: "PEX or copper repipes for older Texas homes." },
      { slug: "fixture-install", name: "Fixture Install", description: "Faucets, toilets, sinks, and bidets." },
      { slug: "garbage-disposal", name: "Garbage Disposal", description: "Repair and replacement." },
      { slug: "sump-pump", name: "Sump Pump Service", description: "Pumps, ejector pumps, and basin work." },
      { slug: "gas-line", name: "Gas Line Service", description: "New runs, leak tests, and code upgrades." },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC & AC Repair",
    tagline: "Beat the Texas heat with cooling you can count on.",
    description: "AC and furnace repair, full system replacements, mini-splits, ductwork, and tune-ups.",
    longCopy:
      "Texas summers run long and hot — when the AC quits at 102°F, you need someone who can be at the door same-day. The HVAC pros below cover everything from a quick capacitor swap to a full 16-SEER2 changeout, with financing options that match how Texans actually pay for big-ticket repairs.",
    iconKey: "Wind",
    featured: true,
    sortOrder: 2,
    texasNote: "Critical statewide — long cooling seasons stress every system.",
    subcategories: [
      { slug: "ac-repair", name: "AC Repair", description: "Compressor, capacitor, and refrigerant diagnostics." },
      { slug: "ac-install", name: "AC Install / Replace", description: "Full changeouts and high-efficiency upgrades." },
      { slug: "ac-tuneup", name: "AC Tune-Up", description: "Pre-summer maintenance and inspections." },
      { slug: "furnace-repair", name: "Furnace Repair", description: "Gas and electric heating diagnostics." },
      { slug: "furnace-install", name: "Furnace Install", description: "Replacements and dual-fuel setups." },
      { slug: "ductwork", name: "Ductwork", description: "Sealing, replacement, and zoning." },
      { slug: "mini-split", name: "Mini-Split Install", description: "Ductless systems for additions and shops." },
      { slug: "thermostat", name: "Thermostat Install", description: "Smart thermostats and zoning." },
      { slug: "indoor-air", name: "Indoor Air Quality", description: "Filtration, UV, and dehumidifier installs." },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    tagline: "Panels, outlets, EV chargers, and standby generators.",
    description: "Licensed master electricians for everything from a flickering outlet to a 200A panel upgrade.",
    longCopy:
      "Whether you're adding a Level 2 EV charger in Plano, dropping in a generator before storm season, or untangling a tripping breaker at midnight, the electricians here are licensed in Texas and pull permits with the city — which matters when you sell the house later.",
    iconKey: "Zap",
    featured: true,
    sortOrder: 3,
    subcategories: [
      { slug: "panel-upgrade", name: "Panel Upgrade", description: "200A and 400A service upgrades." },
      { slug: "outlet-switch", name: "Outlet & Switch Install", description: "Adds, replacements, and GFCI/AFCI." },
      { slug: "ceiling-fan", name: "Ceiling Fan Install", description: "Two-story foyers and patio fans." },
      { slug: "ev-charger", name: "EV Charger Install", description: "Level 2 home charger installs." },
      { slug: "lighting", name: "Lighting Install", description: "Recessed, landscape, and chandelier work." },
      { slug: "generator", name: "Generator Install", description: "Whole-home standby and portable transfer switches." },
      { slug: "troubleshooting", name: "Troubleshooting", description: "Tripping breakers, dead outlets, and odd buzzing." },
      { slug: "rewiring", name: "Rewiring", description: "Older homes and aluminum-to-copper retrofits." },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    tagline: "Shingles, metal, and tile — built for Texas weather.",
    description:
      "Roof repair, full replacements, hail-damage inspections, and insurance documentation help.",
    longCopy:
      "Texas has more hail than just about any state, and that means roofs here work harder than most. The roofing companies below handle storm-damage inspections, work directly with insurance adjusters, and install impact-rated shingles and standing-seam metal that hold up to North Texas hailstorms.",
    iconKey: "Home",
    featured: true,
    sortOrder: 4,
    texasNote: "DFW sits in 'hail alley' — a quality roof matters here more than most places.",
    subcategories: [
      { slug: "shingle-repair", name: "Shingle Repair", description: "Patches, valley repair, and ridge work." },
      { slug: "shingle-replace", name: "Asphalt Shingle Replacement", description: "Full tear-offs and overlays." },
      { slug: "metal-roofing", name: "Metal Roofing", description: "Standing-seam and exposed-fastener systems." },
      { slug: "tile-roofing", name: "Tile Roofing", description: "Concrete and clay tile repair and install." },
      { slug: "leak-repair", name: "Leak Repair", description: "Flashing, boots, and skylight reseals." },
      { slug: "hail-inspection", name: "Hail Damage Inspection", description: "Insurance-ready storm reports." },
      { slug: "gutters-integration", name: "Gutter Integration", description: "Drip edge and gutter coordination." },
    ],
  },
  {
    slug: "foundation-repair",
    name: "Foundation Repair",
    tagline: "Pier and beam, slab repair, and drainage correction.",
    description: "Engineered foundation repair for the expansive clay soils common across Texas.",
    longCopy:
      "Most of Texas sits on shrink-swell clay, which means foundations move with the seasons. The crews below pull engineer reports, install steel or concrete piers, and correct the surface drainage that caused the problem in the first place — because a pier without drainage work is a temporary fix.",
    iconKey: "LayoutGrid",
    featured: true,
    sortOrder: 5,
    texasNote: "Expansive clay soils statewide make this one of the most-requested services in Texas.",
    subcategories: [
      { slug: "pier-and-beam", name: "Pier & Beam", description: "Shimming, sistering, and beam replacement." },
      { slug: "slab-repair", name: "Slab Repair", description: "Steel and pressed-concrete piers." },
      { slug: "drainage", name: "Drainage Correction", description: "French drains and grading." },
      { slug: "crack-sealing", name: "Crack Sealing", description: "Epoxy and polyurethane injection." },
      { slug: "foundation-inspection", name: "Foundation Inspection", description: "Engineer-stamped reports." },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    tagline: "Termites, roaches, scorpions, and rodents.",
    description: "Recurring pest plans plus one-time treatments for everything that crawls in Texas.",
    longCopy:
      "Texas pest pressure is no joke — German roaches in Houston, scorpions in the Hill Country, fire ants statewide. The companies here run quarterly recurring plans and offer termite warranties that transfer when you sell.",
    iconKey: "Bug",
    featured: true,
    sortOrder: 6,
    subcategories: [
      { slug: "general", name: "General Pest", description: "Roaches, ants, spiders, and silverfish." },
      { slug: "termite", name: "Termite Treatment", description: "Inspections, treatments, and warranties." },
      { slug: "rodent", name: "Rodent Control", description: "Exclusion work, traps, and clean-out." },
      { slug: "scorpion", name: "Scorpion Control", description: "Hill Country specialty." },
      { slug: "bed-bugs", name: "Bed Bug Treatment", description: "Heat and chemical protocols." },
      { slug: "wasps", name: "Wasps & Hornets", description: "Nest removal and prevention." },
    ],
  },
  {
    slug: "lawn-care",
    name: "Lawn Care",
    tagline: "Mowing, fertilization, irrigation, and sod.",
    description:
      "Recurring lawn maintenance, weed control programs, irrigation repair, and St. Augustine sod installs.",
    longCopy:
      "Texas turf — mostly St. Augustine and Bermuda — needs a different schedule than what the bag at the big-box says. Local lawn pros know when to put down pre-emergent for crabgrass, when to taper watering as fall arrives, and how to renovate a yard that's been baked all summer.",
    iconKey: "Leaf",
    featured: true,
    sortOrder: 7,
    subcategories: [
      { slug: "mowing", name: "Mowing", description: "Weekly and bi-weekly service." },
      { slug: "edging", name: "Edging", description: "Bed and walk edging." },
      { slug: "fertilization", name: "Fertilization", description: "5- and 7-step programs." },
      { slug: "weed-control", name: "Weed Control", description: "Pre- and post-emergent applications." },
      { slug: "sod-install", name: "Sod Install", description: "St. Augustine, Bermuda, and Zoysia." },
      { slug: "irrigation", name: "Irrigation Repair", description: "Heads, valves, and controllers." },
      { slug: "leaf-cleanup", name: "Leaf Cleanup", description: "Seasonal full-yard clearing." },
    ],
  },
  {
    slug: "tree-service",
    name: "Tree Service",
    tagline: "Trimming, removal, and emergency storm cleanup.",
    description: "Certified arborists for live oaks, post oaks, pecans, and the rest of the Texas canopy.",
    longCopy:
      "Live oak galls, oak wilt season, post-storm cleanup at 6 a.m. — Texas trees demand specialty knowledge. The companies below carry proper insurance, climb (and crane) when needed, and grind stumps below grade so you can re-sod without surprises.",
    iconKey: "Trees",
    featured: false,
    sortOrder: 8,
    subcategories: [
      { slug: "trimming", name: "Trimming", description: "Crown thinning and clearance pruning." },
      { slug: "removal", name: "Tree Removal", description: "Single trees through full-yard clearing." },
      { slug: "stump-grinding", name: "Stump Grinding", description: "Below-grade stump removal." },
      { slug: "emergency", name: "Emergency Storm Cleanup", description: "Same-day after thunderstorms." },
      { slug: "planting", name: "Planting", description: "Native species selection and install." },
    ],
  },
  {
    slug: "pool-service",
    name: "Pool Service",
    tagline: "Weekly cleaning, equipment repair, and resurfacing.",
    description:
      "Pool maintenance, pump and motor service, salt-system conversions, and full plaster resurfacing.",
    longCopy:
      "Pools in Texas run nine months of the year — and the algae blooms in Houston humidity will surprise a first-time owner. The pool companies below offer weekly chemistry visits, equipment repairs, and major work like plaster, tile, and salt-system retrofits.",
    iconKey: "Waves",
    featured: true,
    sortOrder: 9,
    texasNote: "High pool penetration in Texas metros — most homes south of I-20 see one within two blocks.",
    subcategories: [
      { slug: "weekly-cleaning", name: "Weekly Cleaning", description: "Chemistry, brushing, and skimming." },
      { slug: "pump-motor", name: "Pump & Motor Repair", description: "Variable-speed retrofits and repair." },
      { slug: "resurfacing", name: "Plaster Resurfacing", description: "Quartz, pebble, and standard plaster." },
      { slug: "leak-detection", name: "Leak Detection", description: "Pressure and dye testing." },
      { slug: "salt-conversion", name: "Salt System Conversion", description: "Chlorine to salt-cell upgrades." },
      { slug: "open-close", name: "Pool Opening / Closing", description: "Seasonal service for North Texas pools." },
    ],
  },
  {
    slug: "cleaning",
    name: "House Cleaning",
    tagline: "Standard, deep, and move-in/out cleans.",
    description:
      "Recurring house cleaning, deep cleans, post-construction, and move-in / move-out service.",
    longCopy:
      "Whether it's a once-a-month tune-up before guests or a deep clean after a remodel, the house cleaners below are insured, bonded, and bring their own supplies. Most run weekly, bi-weekly, or monthly schedules.",
    iconKey: "Sparkles",
    featured: true,
    sortOrder: 10,
    subcategories: [
      { slug: "standard", name: "Standard Cleaning", description: "Recurring weekly or bi-weekly." },
      { slug: "deep", name: "Deep Cleaning", description: "Top-to-bottom one-time service." },
      { slug: "move-in-out", name: "Move-In / Move-Out", description: "Empty-house turnovers." },
      { slug: "post-construction", name: "Post-Construction", description: "Drywall dust and debris." },
      { slug: "window-cleaning", name: "Window Cleaning", description: "Interior and exterior." },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    tagline: "Interior, exterior, and cabinet refinishing.",
    description: "Painters who prep, spray, and back-roll the way the manufacturer specs say to.",
    longCopy:
      "Texas sun is brutal on exterior paint — south- and west-facing walls take the worst of it. The painters below know which sheen and brand will actually last seven years here, and they take prep seriously: scrape, prime, caulk, then paint.",
    iconKey: "PaintBucket",
    featured: false,
    sortOrder: 11,
    subcategories: [
      { slug: "interior", name: "Interior Painting", description: "Walls, ceilings, and trim." },
      { slug: "exterior", name: "Exterior Painting", description: "Stucco, fiber cement, and wood." },
      { slug: "cabinet-refinish", name: "Cabinet Refinishing", description: "Spray-finished kitchens." },
      { slug: "drywall-touchup", name: "Drywall Touch-Up", description: "Patching before paint." },
    ],
  },
  {
    slug: "handyman",
    name: "Handyman",
    tagline: "Small repairs, mounts, and the punch list.",
    description: "Hourly handyman service for the dozen things on the to-do list nobody else will book.",
    longCopy:
      "Sometimes you just need someone good for two hours. The handymen here will mount the TV, swap the kitchen faucet, fix the stuck door, and re-caulk the tub — usually in one visit, billed by the hour with a one-hour minimum.",
    iconKey: "Hammer",
    featured: true,
    sortOrder: 12,
    subcategories: [
      { slug: "tv-mounting", name: "TV Mounting", description: "Including in-wall cable runs." },
      { slug: "furniture-assembly", name: "Furniture Assembly", description: "Beds, desks, and storage units." },
      { slug: "small-repairs", name: "Small Repairs", description: "Doors, locks, and trim." },
      { slug: "picture-hanging", name: "Picture & Shelf Hanging", description: "Anchors and level work." },
      { slug: "caulking", name: "Caulking", description: "Tubs, showers, and exterior seams." },
    ],
  },
  {
    slug: "flooring",
    name: "Flooring",
    tagline: "Hardwood, LVP, tile, and carpet.",
    description: "Full flooring install and refinishing crews for whole-home replacements.",
    longCopy:
      "Replacing floors is one of those projects where the prep matters more than the material. The flooring pros below will scribe transitions, level the slab where it has dipped, and dispose of the old carpet — so the finished job actually feels finished.",
    iconKey: "Square",
    featured: false,
    sortOrder: 13,
    subcategories: [
      { slug: "hardwood-install", name: "Hardwood Install", description: "Engineered and solid plank." },
      { slug: "hardwood-refinish", name: "Hardwood Refinish", description: "Sand, stain, and seal." },
      { slug: "lvp", name: "LVP / Vinyl Plank", description: "Click-lock and glue-down." },
      { slug: "tile", name: "Tile", description: "Porcelain, ceramic, and natural stone." },
      { slug: "carpet", name: "Carpet", description: "Install and replacement." },
      { slug: "flooring-repair", name: "Flooring Repair", description: "Patches and board replacements." },
    ],
  },
  {
    slug: "windows",
    name: "Windows",
    tagline: "Replacement, repair, and screen work.",
    description: "Energy-efficient window replacements and repair for the Texas sun and storm seasons.",
    longCopy:
      "A south-facing single-pane window in Texas is basically a heat bill on a wall. The window companies here install double- and triple-pane units, repair broken seals, and rescreen patios — most carry warranties that survive the company being sold.",
    iconKey: "RectangleHorizontal",
    featured: false,
    sortOrder: 14,
    subcategories: [
      { slug: "replacement", name: "Window Replacement", description: "Insert and full-frame replacement." },
      { slug: "repair", name: "Window Repair", description: "Glass, balances, and locks." },
      { slug: "screens", name: "Screen Repair", description: "Patio and window screens." },
    ],
  },
  {
    slug: "siding",
    name: "Siding",
    tagline: "Fiber cement, vinyl, and wood siding.",
    description: "Whole-home siding replacements and repair, with fiber cement leading the way in Texas.",
    longCopy:
      "Fiber cement is the dominant new-build siding in Texas for good reason — it laughs at woodpeckers, holds paint for a decade, and won't fuel a brush fire. The contractors here install it, vinyl, and traditional wood with the right flashing and weather barriers.",
    iconKey: "Layers",
    featured: false,
    sortOrder: 15,
    subcategories: [
      { slug: "fiber-cement", name: "Fiber Cement Siding", description: "Hardie-style plank and lap." },
      { slug: "vinyl", name: "Vinyl Siding", description: "Whole-home installs and repairs." },
      { slug: "siding-repair", name: "Siding Repair", description: "Storm and impact damage." },
    ],
  },
  {
    slug: "gutters",
    name: "Gutters",
    tagline: "Install, repair, and gutter guards.",
    description: "Seamless aluminum and copper gutters, leaf guards, and downspout extensions.",
    longCopy:
      "Texas storms drop two inches in 20 minutes — a 5-inch gutter is barely enough. The gutter pros below run seamless aluminum on-site, install LeafBlaster-style guards, and route downspouts away from the foundation, which matters most on slab homes.",
    iconKey: "CloudRain",
    featured: false,
    sortOrder: 16,
    subcategories: [
      { slug: "install", name: "Gutter Install", description: "Seamless 5- and 6-inch." },
      { slug: "repair", name: "Gutter Repair", description: "Re-pitch, re-hang, and seam repair." },
      { slug: "guards", name: "Gutter Guards", description: "Mesh and reverse-curve systems." },
      { slug: "cleaning", name: "Gutter Cleaning", description: "Twice-yearly service." },
    ],
  },
  {
    slug: "garage-doors",
    name: "Garage Doors",
    tagline: "Springs, openers, and panel replacements.",
    description: "Same-day spring and opener service plus full door replacements.",
    longCopy:
      "Broken garage door springs are the most common emergency call we hear — and you should never try to wind a torsion spring yourself. The companies here keep trucks stocked with the most common sizes and openers and run same-day for almost every metro.",
    iconKey: "DoorOpen",
    featured: false,
    sortOrder: 17,
    subcategories: [
      { slug: "spring-repair", name: "Spring Repair", description: "Torsion and extension springs." },
      { slug: "opener-install", name: "Opener Install", description: "Belt, chain, and Wi-Fi openers." },
      { slug: "panel-replace", name: "Panel Replacement", description: "Single panels and full doors." },
    ],
  },
  {
    slug: "locksmith",
    name: "Locksmith",
    tagline: "Rekeys, lockouts, and smart locks.",
    description: "Mobile locksmith service for residential rekeys, lockouts, and smart-lock installs.",
    longCopy:
      "When you buy a house in Texas, rekey every lock — that's the closing-day rule. The mobile locksmiths below also handle lockouts, key-fob programming, and smart-lock installs that work with your hub of choice.",
    iconKey: "Key",
    featured: false,
    sortOrder: 18,
    subcategories: [
      { slug: "rekey", name: "Rekey", description: "Same-key rekeying for the whole house." },
      { slug: "lockout", name: "Lockout", description: "Mobile 24/7 lockout service." },
      { slug: "smart-lock", name: "Smart Lock Install", description: "Z-Wave, Wi-Fi, and Bluetooth." },
    ],
  },
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    tagline: "Refrigerators, washers, dryers, and ovens.",
    description: "Same-day repair for major appliances — most parts in stock on the truck.",
    longCopy:
      "A dead refrigerator in August is a four-figure problem if you let it sit. The appliance techs below carry the most common compressors, control boards, and igniters on the truck, so most calls are one-trip fixes.",
    iconKey: "Refrigerator",
    featured: false,
    sortOrder: 19,
    subcategories: [
      { slug: "refrigerator", name: "Refrigerator Repair", description: "Compressors, defrost, and ice makers." },
      { slug: "washer-dryer", name: "Washer / Dryer Repair", description: "Drums, belts, and control boards." },
      { slug: "oven-range", name: "Oven & Range Repair", description: "Igniters, elements, and controls." },
      { slug: "dishwasher", name: "Dishwasher Repair", description: "Pumps, motors, and door seals." },
    ],
  },
  {
    slug: "fence",
    name: "Fencing",
    tagline: "Wood, wrought iron, and chain-link.",
    description: "New fence builds, repairs, and gate work — wood privacy is the Texas standard.",
    longCopy:
      "A standard 6-foot cedar privacy fence is the default across most Texas suburbs, and you'll see vertical metal posts replacing rotted wood posts on every block. The fence builders below also do wrought-iron, chain-link, and custom gates with smart openers.",
    iconKey: "Fence",
    featured: false,
    sortOrder: 20,
    subcategories: [
      { slug: "wood", name: "Wood Privacy Fence", description: "Cedar and treated pine." },
      { slug: "wrought-iron", name: "Wrought Iron", description: "Pool fences and ornamental." },
      { slug: "chain-link", name: "Chain-Link", description: "Yards and dog runs." },
      { slug: "fence-repair", name: "Fence Repair", description: "Posts, pickets, and storm damage." },
      { slug: "gates", name: "Gates", description: "Pedestrian and driveway gates." },
    ],
  },
  {
    slug: "deck-patio",
    name: "Decks & Patios",
    tagline: "Build, refinish, and shade structures.",
    description: "Custom decks, covered patios, pergolas, and screened-in outdoor rooms.",
    longCopy:
      "Texas backyards earn their keep — most of the year you can use them. The deck and patio builders here design covered patios that take the afternoon sun, screened porches that keep mosquitoes out, and pergolas that hold up to a North Texas wind event.",
    iconKey: "Sun",
    featured: false,
    sortOrder: 21,
    subcategories: [
      { slug: "build", name: "New Build", description: "Wood and composite decks." },
      { slug: "refinish", name: "Deck Refinish", description: "Strip, sand, and reseal." },
      { slug: "pergolas", name: "Pergolas", description: "Cedar and steel-frame." },
      { slug: "screened", name: "Screened-In Patios", description: "Bug-tight outdoor rooms." },
    ],
  },
  {
    slug: "concrete",
    name: "Concrete & Masonry",
    tagline: "Driveways, patios, and foundations.",
    description: "Concrete driveways, patios, sidewalks, and foundation pours.",
    longCopy:
      "Concrete is unforgiving — a bad pour will crack within a year on Texas clay. The masons here use proper rebar, control joints, and 4,000-PSI mixes for driveways, plus broom or stamped finishes if you want it dressier.",
    iconKey: "Square",
    featured: false,
    sortOrder: 22,
    subcategories: [
      { slug: "driveway", name: "Driveway", description: "New pours and tear-out / replace." },
      { slug: "patio", name: "Patio", description: "Stamped and broom finishes." },
      { slug: "sidewalk", name: "Sidewalk", description: "Repair and replacement." },
      { slug: "foundation-pour", name: "Foundation Pour", description: "Slab and pier-and-beam." },
      { slug: "concrete-repair", name: "Concrete Repair", description: "Crack repair and leveling." },
    ],
  },
  {
    slug: "solar",
    name: "Solar Installation",
    tagline: "Panels, batteries, and the ERCOT-aware install.",
    description: "Roof and ground-mount solar systems with battery backup options.",
    longCopy:
      "After Winter Storm Uri, batteries got a lot more popular in Texas. The solar installers below run interconnect paperwork through Oncor, CenterPoint, and AEP, and the better ones offer storage that runs your AC and fridge for a day or two during a grid event.",
    iconKey: "SunMedium",
    featured: false,
    sortOrder: 23,
    subcategories: [
      { slug: "panel-install", name: "Panel Install", description: "Roof and ground-mount." },
      { slug: "battery", name: "Battery Storage", description: "Powerwall, Enphase, and SunPower." },
      { slug: "solar-repair", name: "Solar Repair", description: "Inverter and panel troubleshooting." },
    ],
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    tagline: "Seasonal spraying and in-yard systems.",
    description:
      "Recurring barrier sprays, larvicide treatments, and permanent automatic misting systems.",
    longCopy:
      "Gulf Coast humidity makes mosquito pressure year-round in much of Texas. The mosquito specialists below run barrier sprays every three weeks during the season and install permanent misting systems for homeowners who want the patio usable in July.",
    iconKey: "Bug",
    featured: false,
    sortOrder: 24,
    texasNote: "Gulf Coast humidity = heavy mosquito pressure for most of the year.",
    subcategories: [
      { slug: "barrier-spray", name: "Seasonal Barrier Spray", description: "Recurring 3-week service." },
      { slug: "larvicide", name: "Larvicide Treatment", description: "Standing water and bromeliads." },
      { slug: "misting-system", name: "Misting System", description: "Permanent in-yard system installs." },
    ],
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    tagline: "Single items to full-house cleanouts.",
    description: "Same-day junk hauling, garage cleanouts, and large-item pickups.",
    longCopy:
      "When you finally tackle the garage, you don't want to take six trips to the transfer station. The junk haulers below load it all in one stop, including hot tubs and treadmills — most price by truckload, with same-day pickup standard.",
    iconKey: "Trash2",
    featured: false,
    sortOrder: 25,
    subcategories: [
      { slug: "single-item", name: "Single Item", description: "Couches, fridges, and treadmills." },
      { slug: "full-house", name: "Full House Cleanout", description: "Estate and rental cleanouts." },
      { slug: "garage", name: "Garage Cleanout", description: "Top-to-bottom yard cleanups too." },
      { slug: "hot-tub", name: "Hot Tub Removal", description: "Disassembly and disposal." },
    ],
  },
  {
    slug: "moving",
    name: "Moving Services",
    tagline: "Local, long-distance, and labor-only.",
    description: "Licensed Texas movers for local moves, packing, and long-distance relocations.",
    longCopy:
      "A lot of Texas moves are intra-state — Austin to Dallas, Houston to San Antonio. The movers below carry TxDMV motor-carrier licenses, do flat-rate or hourly local moves, and offer packing service if you don't have time to box up the kitchen.",
    iconKey: "Truck",
    featured: false,
    sortOrder: 26,
    subcategories: [
      { slug: "local", name: "Local Move", description: "Intra-metro and intra-state." },
      { slug: "long-distance", name: "Long-Distance", description: "Texas to anywhere." },
      { slug: "packing", name: "Packing Service", description: "Full or partial packing." },
      { slug: "labor-only", name: "Labor-Only", description: "Loading or unloading a rental truck." },
    ],
  },
  {
    slug: "remodeling",
    name: "Kitchen & Bath Remodeling",
    tagline: "Full kitchens, bathroom redos, and additions.",
    description:
      "Design-build remodelers for full kitchens, bathrooms, additions, and accessory dwelling units.",
    longCopy:
      "A kitchen remodel in Texas runs anywhere from $20,000 for a refresh to $90,000 for a full gut with custom cabinets. The remodelers below are design-build, which means one contract from concept to punch list, with a project manager who answers texts.",
    iconKey: "ChefHat",
    featured: true,
    sortOrder: 27,
    subcategories: [
      { slug: "kitchen", name: "Kitchen Remodel", description: "Full and refresh-level remodels." },
      { slug: "bath", name: "Bath Remodel", description: "Master and guest baths." },
      { slug: "addition", name: "Home Addition", description: "Bump-outs and second-story adds." },
      { slug: "adu", name: "ADU / Garage Apartment", description: "Backyard accessory dwellings." },
    ],
  },
  {
    slug: "drywall",
    name: "Drywall",
    tagline: "Patch, hang, and texture matching.",
    description: "Drywall patching, full-room hangs, and Texas-style orange-peel texture matching.",
    longCopy:
      "Most Texas homes have either orange-peel or knockdown texture, and matching it is harder than the YouTube videos make it look. The drywall pros below tape, mud, and texture so the patch genuinely disappears into the wall.",
    iconKey: "Layers",
    featured: false,
    sortOrder: 28,
    subcategories: [
      { slug: "patching", name: "Drywall Patching", description: "Doorknob holes and water damage." },
      { slug: "full-hang", name: "Full Hang", description: "New rooms and additions." },
      { slug: "texture-matching", name: "Texture Matching", description: "Orange peel and knockdown." },
    ],
  },
  {
    slug: "water-damage",
    name: "Water Damage Restoration",
    tagline: "Extraction, drying, and mold remediation.",
    description: "24/7 water extraction, structural drying, and certified mold remediation.",
    longCopy:
      "Hurricanes, slab leaks, and burst pipes during a freeze — Texas has plenty of ways to flood a house. The restoration crews below carry IICRC certification, work direct with insurance, and run drying equipment until the structure tests at proper moisture content.",
    iconKey: "Droplet",
    featured: false,
    sortOrder: 29,
    texasNote: "Hurricane and freeze response — coastal and statewide.",
    subcategories: [
      { slug: "flood-extraction", name: "Flood Extraction", description: "Bulk water removal." },
      { slug: "structural-drying", name: "Structural Drying", description: "Air movers and dehumidifiers." },
      { slug: "mold", name: "Mold Remediation", description: "Containment and removal." },
    ],
  },
  {
    slug: "septic",
    name: "Septic Services",
    tagline: "Pumping, install, and inspection.",
    description: "Septic tank pumping, new system installs, and pre-purchase inspections.",
    longCopy:
      "Most rural Texas — and a surprising number of Austin and Hill Country homes — runs on septic. The septic companies below pump every three to five years, install aerobic and conventional systems, and run TCEQ-required inspections.",
    iconKey: "Pipette",
    featured: false,
    sortOrder: 30,
    subcategories: [
      { slug: "pumping", name: "Septic Pumping", description: "3- to 5-year service intervals." },
      { slug: "install", name: "Septic Install", description: "Aerobic and conventional systems." },
      { slug: "inspection", name: "Septic Inspection", description: "Pre-purchase and TCEQ." },
      { slug: "septic-repair", name: "Septic Repair", description: "Sprayers, pumps, and lines." },
    ],
  },
  {
    slug: "fire-ant-control",
    name: "Fire Ant Control",
    tagline: "Mound treatments and yard-wide bait.",
    description: "Targeted mound treatments and broadcast bait programs for fire ant colonies.",
    longCopy:
      "Imported red fire ants are a Texas problem with no real solution — only management. The pest specialists below run two-step programs (yard-wide bait plus targeted mound treatments) that knock down colonies for the season.",
    iconKey: "Flame",
    featured: false,
    sortOrder: 31,
    texasNote: "Texas-specific concern with proven two-step protocols.",
    subcategories: [
      { slug: "mound-treatment", name: "Mound Treatment", description: "Targeted, fast-acting." },
      { slug: "broadcast-bait", name: "Broadcast Bait", description: "Yard-wide bait programs." },
      { slug: "recurring", name: "Recurring Service", description: "Spring and fall applications." },
    ],
  },
  {
    slug: "storm-damage",
    name: "Storm & Hail Damage",
    tagline: "Roof tarps, debris cleanup, and insurance help.",
    description:
      "Emergency tarping, debris cleanup, and documentation help for hail and wind insurance claims.",
    longCopy:
      "After a hailstorm rolls through North Texas, the roofers fill up fast. The storm-response crews below tarp the roof same-day, document damage with photos and reports your adjuster will accept, and queue you for the proper repair.",
    iconKey: "CloudLightning",
    featured: false,
    sortOrder: 32,
    texasNote: "DFW hail alley — March through May is peak season.",
    subcategories: [
      { slug: "roof-tarp", name: "Roof Tarp", description: "Same-day emergency tarping." },
      { slug: "debris-cleanup", name: "Debris Cleanup", description: "Tree and building debris." },
      { slug: "insurance-docs", name: "Insurance Documentation", description: "Adjuster-ready reports." },
    ],
  },
];
