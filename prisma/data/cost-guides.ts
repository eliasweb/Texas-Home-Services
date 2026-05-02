export type SeedCostGuide = {
  slug: string; // matches category slug
  title: string;
  summary: string;
  body: string; // markdown
  lowUsd: number;
  avgUsd: number;
  highUsd: number;
  unitLabel: string;
  factors: string[];
};

const make = (
  slug: string,
  title: string,
  summary: string,
  lowUsd: number,
  avgUsd: number,
  highUsd: number,
  unitLabel: string,
  factors: string[],
  body: string,
): SeedCostGuide => ({ slug, title, summary, lowUsd, avgUsd, highUsd, unitLabel, factors, body });

export const costGuides: SeedCostGuide[] = [
  make(
    "plumbing",
    "How Much Does a Plumber Cost in Texas?",
    "Most plumbing repairs in Texas run between $125 and $1,200, with the median job hitting around $375.",
    125,
    375,
    1200,
    "per repair",
    ["Service call fee", "Parts and fixtures", "Labor hours", "Slab vs. accessible plumbing", "Permits"],
    `## What Texans pay for plumbing service

Most plumbing repair calls in Texas run **$125 to $1,200**, with the median around **$375**. Bigger jobs — water heater swaps, repipes, sewer line work — climb higher quickly.

### Common plumbing prices

- Service call diagnostic: $89–$150 (often credited toward the repair)
- Faucet replacement: $200–$450 supplied and installed
- Toilet replacement: $250–$650
- Garbage disposal install: $250–$475
- Tank water heater replacement (40–50 gal): $1,400–$2,800
- Tankless water heater install (with gas line work): $3,500–$6,500
- Drain cleaning (mainline): $250–$650
- Sewer line repair (trenchless spot repair): $1,800–$4,500
- Whole-home repipe (PEX): $5,500–$15,000

### What drives Texas plumbing costs

Slab leaks are the single biggest variable. A pinhole leak in an accessible PEX line might cost $300; the same pinhole under a kitchen island slab can run $1,500 once you account for jackhammering, locating, and patching the concrete.

Older Houston-area homes often have galvanized supply lines that don't take well to spot repairs — a partial repipe can keep snowballing. Most plumbers will tell you up front when a full repipe makes more sense than chasing leaks.

### How to save without cutting corners

- Get the diagnostic in writing before authorizing repair work.
- Ask whether the company runs commission-based pricing — flat-rate shops give you a more predictable bill.
- For tankless conversions, get gas line and venting requirements quoted up front. The retrofit work is usually most of the cost.

### When emergency pricing kicks in

Most companies run a roughly 1.25–1.5× multiplier for after-hours and weekend calls. If the leak isn't actively flooding the house, scheduling for the morning often saves $150 or more.`,
  ),

  make(
    "hvac",
    "How Much Does AC Repair or Replacement Cost in Texas?",
    "AC repairs typically run $150–$1,500 in Texas; full replacements range from $4,500 to $14,000.",
    150,
    1500,
    14000,
    "per system",
    ["System size and SEER2 rating", "Refrigerant type", "Ductwork condition", "Permits and inspection", "Brand"],
    `## Texas AC pricing — repair vs. replace

A single repair on a working HVAC system in Texas usually lands between **$150 and $1,500**. A complete system replacement (condenser + air handler + new line set) runs **$4,500 to $14,000** depending on tonnage, brand, and SEER2 rating.

### Common HVAC prices

- Diagnostic visit: $89–$129 (typically credited toward the repair)
- Capacitor replacement: $150–$350
- Contactor replacement: $175–$300
- Refrigerant leak search and seal: $400–$1,200
- Blower motor replacement: $400–$900
- Compressor replacement: $1,500–$2,800
- 3-ton 14-SEER2 changeout (matched system): $5,500–$8,500
- 4-ton 16-SEER2 changeout with new line set: $8,500–$12,500
- 5-ton 18-SEER2 changeout with thermostat upgrade: $11,000–$14,000
- Mini-split single-zone install: $3,500–$5,500

### Why Texas pricing is its own thing

Long cooling seasons mean Texas systems work nine to ten months a year — they wear out faster than systems in cooler states. Refrigerant transitions (R-22 → R-410A → R-454B) have raised prices on legacy systems. If you have an R-22 system that needs more than $1,500 in repairs, you're almost always better off replacing.

### Should you size up?

Don't. An oversized system short-cycles, removes less humidity, and shortens compressor life. Have a Manual J load calc done — most reputable Texas HVAC companies include this with their replacement quote.

### Financing is normal

For full system replacements, almost every Texas HVAC company offers 0% financing for 12 to 24 months. Don't be shy about asking.`,
  ),

  make(
    "electrical",
    "How Much Does an Electrician Cost in Texas?",
    "Most residential electrical work in Texas runs $175 to $4,500. Panel upgrades and EV chargers are the most common big-ticket items.",
    175,
    600,
    4500,
    "per job",
    ["Permit and inspection fees", "Panel size", "Wiring distance", "Wall finish patching", "Smart vs. basic devices"],
    `## What you'll pay an electrician in Texas

Smaller residential electrical work runs **$175 to $600**. Bigger jobs — panel upgrades, EV chargers, generator installs — push **$1,500 to $4,500**.

### Common electrical prices

- Service call: $89–$150
- Outlet or switch install: $175–$350
- GFCI/AFCI replacement: $200–$400
- Ceiling fan install (existing box): $200–$425
- Two-story foyer chandelier install: $400–$900
- Recessed light install (per can): $200–$300 in finished ceilings
- Level 2 EV charger install: $850–$2,200
- 200A panel upgrade: $1,800–$3,500
- Whole-home standby generator (20kW): $9,000–$14,000 installed
- Aluminum-to-copper retrofit (per outlet): $90–$180

### What pushes prices up

Permit-required work always costs more — and it should, because it gets inspected. Older homes with knob-and-tube or aluminum wiring can drive cost on simple outlet adds because the wiring needs to be made safe before tying in.

### Hire licensed only

In Texas, electrical work above a certain scope must be performed by a licensed electrician. Don't hire unlicensed help for anything you'll need to disclose at sale — uncorrected unpermitted work can blow up a contract during inspection.`,
  ),

  make(
    "roofing",
    "How Much Does a New Roof Cost in Texas?",
    "A full roof replacement in Texas runs $7,000 to $28,000 depending on size, pitch, and material.",
    7000,
    12500,
    28000,
    "per roof",
    ["Square footage", "Roof pitch", "Material (shingle, metal, tile)", "Tear-off vs. overlay", "Decking condition"],
    `## Texas roof replacement pricing

A full roof replacement on a typical Texas home runs **$7,000 to $28,000**. Most asphalt-shingle replacements come in around **$12,500**.

### Common roofing prices

- Asphalt shingle replacement (2,000 sq ft, 4/12 pitch): $9,000–$14,000
- Class 4 impact-rated shingles upgrade: +$1,200–$2,500 over standard
- Standing-seam metal roof: $18,000–$32,000
- Concrete tile roof: $20,000–$35,000
- Repair (small leak, single penetration): $250–$1,200
- Hail damage inspection and report: typically free with claim

### Hail-rated shingles pay off

In hail-prone parts of Texas (most of DFW, Lubbock, San Antonio), a Class 4 shingle upgrade pays for itself in two ways: a typical 10–25% homeowner's insurance discount and a roof that actually survives a hail event without a claim.

### Working with insurance

After a hail event, file the claim **first** and let the adjuster come out **before** you commit to a roofing contractor. Quality roofers know how to document damage in a format the adjuster will accept on the first visit. Watch for storm-chasers who knock door-to-door right after a storm — vet for license, insurance, and local addresses before signing.`,
  ),

  make(
    "foundation-repair",
    "How Much Does Foundation Repair Cost in Texas?",
    "Foundation repair on a Texas home typically runs $3,500 to $15,000, with the median around $7,500.",
    3500,
    7500,
    15000,
    "per job",
    ["Number of piers required", "Pier type (steel vs. concrete)", "Drainage correction needed", "Engineer report", "Access conditions"],
    `## Foundation repair costs in Texas

Texas's expansive clay soils mean foundation repair is one of the most-requested home services in the state. Typical project costs run **$3,500 to $15,000**, with the median around **$7,500**.

### Common foundation pricing

- Engineer-stamped report: $400–$700
- Per-pier cost (pressed concrete): $300–$450
- Per-pier cost (steel push pier): $750–$1,400
- Drainage correction (French drain, 80 ft): $1,800–$3,500
- Crack sealing (epoxy injection): $400–$900 per crack
- Slab leveling with foam injection: $2,500–$6,500

A typical "midsize" repair scenario — six to ten piers along one side of the house plus drainage correction — usually lands around **$6,500 to $9,500**.

### What drives the cost

The soil report dictates pier depth, which dictates labor hours. In some Hill Country areas, piers might bear at 8 feet; in parts of Sugar Land, you might need 18 feet to reach load-bearing strata.

### Drainage matters more than piers

Most Texas foundations don't move because the soil is "bad" — they move because surface water repeatedly soaks one side of the house. Quality contractors will tell you that pier work without drainage correction is a temporary fix.

### Watch for these red flags

- Quotes without an engineer report
- Lifetime warranties that don't transfer with the house
- Door-to-door sales pitches after a long dry spell or major rain event`,
  ),

  make(
    "pest-control",
    "How Much Does Pest Control Cost in Texas?",
    "Recurring pest control plans run $90–$400 per visit in Texas; termite warranties run $400–$1,400 a year.",
    90,
    175,
    400,
    "per visit",
    ["Home square footage", "Recurring vs. one-time", "Type of pest", "Outbuildings and acreage", "Severity"],
    `## Texas pest pricing

Most recurring pest control plans run **$90 to $400 per visit**. Quarterly is the most common cadence in Texas — that breaks down to roughly **$30 to $130 per month** when amortized.

### Common pest prices

- One-time general treatment: $175–$425
- Quarterly recurring (general pest): $90–$160 per visit
- Termite inspection: $75–$150 (often free with treatment quote)
- Termite treatment (perimeter bait or chemical): $1,200–$2,800
- Termite warranty annual renewal: $400–$1,400
- Rodent exclusion (sealing entry points): $400–$1,800
- Bed bug treatment (heat or chemical, 1 bedroom): $700–$2,200
- Wasp nest removal: $200–$400
- Fire ant treatment (yard-wide bait + mounds): $200–$500

### Why recurring is the right call in Texas

The Gulf Coast climate keeps pest pressure high year-round — especially roaches, ants, and mosquitoes. Quarterly programs catch problems before they're full infestations and usually re-treat for free between scheduled visits.

### Termite warranty math

Termite damage isn't covered by homeowner's insurance, so the warranty is your only realistic protection. The annual renewal looks expensive on paper, but compared to actual termite damage repair (often **$3,000–$15,000**), it's the cheapest protection you can buy.`,
  ),

  make(
    "lawn-care",
    "How Much Does Lawn Care Cost in Texas?",
    "Weekly mowing in Texas runs $35–$120 per visit. Full service plans (mow + fertilize + irrigation) run $200–$500 a month.",
    35,
    60,
    120,
    "per mowing",
    ["Lawn size", "Frequency", "Fertilization program", "Irrigation maintenance", "Edging and trim"],
    `## Texas lawn care prices

A weekly mow in Texas typically runs **$35 to $120 per visit**, depending on lawn size and metro. Median is around **$60**.

### Common lawn pricing

- Weekly mow (typical 1/4-acre lot): $35–$60
- Bi-weekly mow: $50–$85
- Edging (per visit): often included; sometimes $10–$15 add-on
- 5-step fertilization program (per year): $400–$700
- 7-step program: $600–$950
- Sod install (St. Augustine, 500 sq ft): $1,200–$2,400
- Irrigation tune-up: $125–$250
- Irrigation head replacement (per): $25–$45

### Texas turf reality

Most Texas lawns are St. Augustine or Bermuda. St. Augustine is the dominant choice in shadier, wetter parts of the state — Houston, San Antonio. Bermuda dominates DFW and West Texas. Each needs different fertilizer schedules, mowing heights, and watering plans.

### When the program pays off

DIY fertilization is hit-or-miss in Texas because timing matters more than product. Pre-emergent has to go down before soil temps cross 55°F (around mid-February in DFW); too late and crabgrass takes over. A pro program nails the timing.`,
  ),

  make(
    "tree-service",
    "How Much Does Tree Removal Cost in Texas?",
    "Tree removal in Texas runs $400 to $2,500 per tree, depending on size, location, and access.",
    400,
    850,
    2500,
    "per tree",
    ["Tree size and height", "Access (crane required?)", "Stump grinding", "Distance from structures", "Disposal"],
    `## Texas tree service costs

Tree removal in Texas typically runs **$400 to $2,500 per tree**. The big swing factor is access — a 50-footer in the front yard with no obstacles is straightforward; the same tree leaning over a roof requires a crane and crew that knows what they're doing.

### Common tree-service prices

- Small tree removal (under 25 ft): $250–$600
- Medium tree removal (25–60 ft): $600–$1,400
- Large tree removal (60+ ft): $1,400–$3,500
- Crane-assisted removal: +$600–$1,200
- Stump grinding: $150–$450 per stump
- Tree trimming (per tree): $200–$700
- Storm-damage emergency response: $500–$2,500+ depending on scope

### Texas tree quirks

Live oaks have specific pruning windows (avoid Feb–June to reduce oak wilt risk). Pecans need three-year cycles for proper trim. East Texas pines come down in storms regularly — most reputable East Texas tree services have 24/7 storm dispatch.

### Verify insurance every time

Tree work is one of the highest-risk residential trades. Always confirm the company carries general liability **and** workers' comp before they start cutting. A wrong-way drop can put a 10-ton oak through your roof.`,
  ),

  make(
    "pool-service",
    "How Much Does Pool Service Cost in Texas?",
    "Weekly pool service in Texas runs $90–$250 a month. Major repairs (pumps, plaster) run $500–$15,000.",
    90,
    150,
    250,
    "per month",
    ["Pool size", "Equipment age", "Salt vs. chlorine", "Tile and plaster condition", "Acid washing"],
    `## Texas pool service pricing

Weekly pool chemistry service runs **$90 to $250 a month** depending on metro and pool size. Equipment repair is its own line item.

### Common pool prices

- Weekly chemistry (one-trip service): $90–$160 a month
- Full-service weekly (chemistry + brushing + skimming): $130–$220 a month
- Variable-speed pump replacement: $1,400–$2,500 installed
- Salt cell replacement: $700–$1,200
- Filter cartridge replacement: $250–$450
- Pool plaster resurfacing (15,000 gallon): $5,500–$12,000
- Pool tile replacement: $30–$70 per linear foot
- Leak detection: $400–$800
- Pool acid wash: $400–$800

### Year-round vs. summer-only

Most Texas pools run nine to ten months out of the year. Stopping service in winter saves a couple of hundred dollars but costs more in spring start-up and chemical balancing. Most owners find continuous service is cheaper over a 12-month window.

### Salt vs. chlorine

A salt-system retrofit on an existing pool runs **$1,800 to $3,500** and pays back in two to three years from cheaper chemicals and gentler water.`,
  ),

  make(
    "cleaning",
    "How Much Does House Cleaning Cost in Texas?",
    "House cleaning in Texas runs $120–$400 per visit. Recurring weekly service is cheaper per visit.",
    120,
    200,
    400,
    "per visit",
    ["Home size", "Frequency", "Standard vs. deep clean", "Pets", "Add-ons (windows, oven)"],
    `## Texas house cleaning prices

A standard cleaning on a typical Texas home runs **$120 to $400 per visit**. Bi-weekly recurring service usually nets the best price per visit.

### Common cleaning prices

- Standard clean (3 bed, 2 bath, ~2,000 sq ft, recurring): $130–$200
- Deep clean (one-time): $250–$500
- Move-in / move-out: $300–$700
- Post-construction: $400–$900
- Window cleaning (interior + exterior): $200–$500

### Recurring saves money

Bi-weekly is the sweet spot in Texas — frequent enough that the home stays manageable, infrequent enough to keep the cost reasonable. Weekly visits run cheaper per visit but more per month.

### Bonded and insured matters

A bonded crew gives you recourse if something goes missing. Insured means their workers' comp covers a slip-and-fall in your home. Don't skip these.`,
  ),

  make(
    "painting",
    "How Much Does Painting Cost in Texas?",
    "Interior painting in Texas runs $1,200–$7,000 per project. Exterior repaints run $3,500–$12,000.",
    1200,
    3000,
    7000,
    "per project",
    ["Home size", "Wall and trim condition", "Paint grade", "Color changes", "Cabinet refinishing"],
    `## Texas painting prices

Interior painting in Texas runs **$1,200 to $7,000** for typical residential projects. Exterior repaints add up fast — **$3,500 to $12,000+** depending on size.

### Common painting prices

- Single bedroom (interior): $400–$800
- Whole-house interior (2,500 sq ft, walls and trim): $4,500–$8,500
- Exterior repaint (single-story 2,000 sq ft): $3,500–$6,500
- Exterior repaint (two-story 3,500 sq ft with trim): $7,500–$12,000
- Cabinet refinish (kitchen, sprayed): $3,500–$7,500
- Drywall touch-up before paint: $200–$700

### Why Texas exterior paint costs more

Texas sun is brutal on south- and west-facing walls. A cheap exterior paint will fade in three years; premium products like Sherwin-Williams Duration or Benjamin Moore Aura hold up for seven to ten. The product cost is small compared to the labor cost of doing it twice.

### Cabinet refinishing vs. replacement

A factory-quality cabinet refinish (sprayed, with replaced doors and drawer fronts) runs roughly **20–35% of new cabinet cost** and usually finishes in two weeks. For most kitchens, refinishing is the right call if the boxes are solid.`,
  ),

  make(
    "handyman",
    "How Much Does a Handyman Cost in Texas?",
    "Most Texas handymen charge $60–$150 per hour with a one- or two-hour minimum.",
    60,
    95,
    150,
    "per hour",
    ["Trip charge", "Hourly rate", "Minimum charge", "Materials", "Specialty work"],
    `## Handyman pricing in Texas

Texas handymen typically run **$60 to $150 per hour** with a one- or two-hour minimum.

### Common handyman jobs (typical pricing)

- TV mounting (without in-wall cable run): $125–$225
- TV mounting (with in-wall cable run): $250–$425
- Furniture assembly (medium piece): $80–$175
- Door rehang: $150–$300
- Faucet replacement (handyman, not plumber): $175–$300
- Caulk re-do (tub or shower): $125–$225
- Picture / shelf hanging: $90–$175 for several pieces
- Drywall patch (small): $120–$300

### When to hire a handyman vs. a specialist

Handymen are great for "10 things on the list" days — small repairs, mounts, and assembly work. For licensed work (significant electrical, plumbing, gas), hire the specialist. The handyman knows the boundary line.

### Maximize the visit

Stack tasks. The trip charge is real, and getting four small items done in one two-hour visit is much cheaper than four separate visits.`,
  ),

  make(
    "flooring",
    "How Much Does Flooring Installation Cost in Texas?",
    "LVP, hardwood, and tile install in Texas typically runs $4–$12 per square foot installed.",
    4,
    7,
    12,
    "per sq ft",
    ["Material type", "Subfloor prep", "Tear-out and disposal", "Transitions and trim", "Pattern complexity"],
    `## Texas flooring prices

Installed flooring in Texas typically runs **$4 to $12 per square foot** depending on material and prep needs.

### Common flooring prices (installed)

- LVP / vinyl plank (mid-grade): $4–$7 per sq ft
- Engineered hardwood: $7–$11 per sq ft
- Solid hardwood (3/4-inch oak): $9–$14 per sq ft
- Porcelain tile (12x24): $7–$13 per sq ft installed
- Carpet (mid-grade): $3.50–$6 per sq ft
- Hardwood refinish (sand and reseal): $4–$7 per sq ft

### Subfloor prep is where prices change

Most Texas slabs have variation that needs leveling before LVP — or the floor will telegraph every dip. A self-leveling pour adds **$1.50–$3 per sq ft** but is essential for a finish that doesn't squeak or flex.

### Sequencing matters

If you're doing multiple rooms or whole-home, do flooring before painting. The installers will scuff trim and walls — you'd rather paint over those marks once at the end.`,
  ),

  make(
    "windows",
    "How Much Do Replacement Windows Cost in Texas?",
    "Replacement windows in Texas typically run $400–$1,400 per window, installed.",
    400,
    700,
    1400,
    "per window",
    ["Window size and type", "Frame material (vinyl, fiberglass, wood)", "Glass package", "Installation method (insert vs. full-frame)", "Trim repair"],
    `## Texas window replacement pricing

A typical replacement window in Texas runs **$400 to $1,400** installed.

### Common window pricing

- Vinyl double-hung (insert install): $450–$750
- Vinyl picture window (large): $700–$1,200
- Fiberglass double-hung: $750–$1,400
- Wood-clad window (mid-grade): $1,000–$1,800
- Bay/bow window: $2,200–$4,500

### Why glass package matters in Texas

Low-E coatings reflect heat away from the house and dramatically reduce summer cooling load. Going from a single-pane builder window to a Low-E double-pane will drop room temperatures by 5–10°F on a south- or west-facing exposure during summer afternoons.

### Insert vs. full-frame replacement

Insert installs (new window into existing frame) save $200–$500 per opening but only work if the existing frame is sound. If there's any rot, a full-frame replacement is the right call.`,
  ),

  make(
    "siding",
    "How Much Does Siding Replacement Cost in Texas?",
    "A whole-home fiber-cement siding install in Texas runs $7,000–$28,000.",
    7000,
    14000,
    28000,
    "per home",
    ["Home size", "Material (fiber cement, vinyl, wood)", "Trim and corner detail", "Painting included", "Removal of old siding"],
    `## Texas siding prices

Replacing the siding on a typical Texas home runs **$7,000 to $28,000** depending on material and home size.

### Common siding prices (installed)

- Vinyl siding (1,800 sq ft): $7,000–$14,000
- Fiber-cement (Hardie-style) plank: $13,000–$22,000
- Fiber-cement painted whole-home: $18,000–$28,000
- Stucco repair (per patch): $400–$1,200
- Wood siding (cedar): $20,000–$32,000

### Why fiber cement dominates

Fiber-cement siding is fire-resistant (matters in some Hill Country and West Texas areas), holds paint for a decade, and won't be eaten by woodpeckers — a real concern in Texas suburbs. The labor to install it is more than vinyl, but the lifecycle math favors it.

### Color choice = price

Pre-painted ColorPlus fiber cement adds **$1.50–$3 per sq ft** over field-painted but cuts a week off the schedule and provides a longer color warranty.`,
  ),

  make(
    "gutters",
    "How Much Do New Gutters Cost in Texas?",
    "Seamless aluminum gutters in Texas run $700–$3,000 for a typical home.",
    700,
    1400,
    3000,
    "per home",
    ["Linear footage", "Gutter size (5-inch vs. 6-inch)", "Material (aluminum, copper)", "Gutter guards", "Downspouts and extensions"],
    `## Texas gutter pricing

A new seamless gutter system on a typical Texas home runs **$700 to $3,000**, depending on linear footage and add-ons.

### Common gutter prices

- Seamless 5-inch aluminum gutters (140 linear ft): $900–$1,500
- Seamless 6-inch aluminum gutters: $1,200–$2,000
- Copper gutters: $25–$45 per linear foot
- Gutter guards (mesh): $7–$15 per linear foot
- Gutter guards (reverse curve): $15–$30 per linear foot
- Gutter cleaning (twice yearly): $150–$300

### 6-inch is worth it in Texas

Texas storms drop two inches of rain in 20 minutes. A 5-inch gutter can't keep up — you'll get overflow that defeats the whole purpose. For most Texas homes the 6-inch upcharge is worth it.

### Downspout extensions

The single best foundation-protection investment is downspout extensions that route water 6+ feet from the foundation. Inexpensive — typically **$25–$60 per downspout** — but extends the life of slabs and pier-and-beam structures alike.`,
  ),

  make(
    "garage-doors",
    "How Much Does Garage Door Repair or Replacement Cost?",
    "Spring repair runs $250–$450; full garage door replacement runs $1,200–$4,000.",
    250,
    600,
    2500,
    "per repair",
    ["Spring type and size", "Door material (steel, wood, glass)", "Opener type", "Insulation", "Smart features"],
    `## Texas garage door prices

Common garage door repairs in Texas run **$250 to $1,200**. Full door replacements run **$1,200 to $4,000+** depending on style.

### Common garage door prices

- Torsion spring replacement (one): $250–$425
- Torsion spring replacement (pair): $350–$550
- Roller replacement (per door): $90–$175
- Belt-drive opener install: $400–$700
- Wi-Fi smart opener: $500–$900
- Single-car steel door replacement: $900–$1,800 installed
- Two-car steel door replacement: $1,400–$3,200 installed
- Wood overlay garage door: $4,000–$8,500

### Don't DIY torsion springs

Torsion springs hold serious tension and can cause major injury if released wrong. Spring repair is one of the few residential repairs where the safety case for hiring is unambiguous.`,
  ),

  make(
    "locksmith",
    "How Much Does a Locksmith Cost in Texas?",
    "Locksmith service calls in Texas typically run $90–$350 depending on the job.",
    90,
    175,
    350,
    "per visit",
    ["Service type (rekey, lockout, install)", "Number of locks", "Time of day", "Smart lock complexity", "Specialty key duplication"],
    `## Texas locksmith pricing

Most residential locksmith calls in Texas run **$90 to $350**.

### Common locksmith prices

- Standard rekey (one cylinder): $20–$40 per lock + service call
- Whole-house rekey (5–6 locks, same key): $150–$275
- House lockout: $90–$200
- After-hours lockout: $150–$300
- Smart lock install: $175–$400 (lock not included)
- Deadbolt install: $125–$250
- Key fob programming: $80–$200

### Always rekey at closing

Treat rekeying as a closing-day expense on every home purchase. The previous owners' contractors, cleaners, and neighbors all might still have copies. **$150** for a clean break is cheap insurance.`,
  ),

  make(
    "appliance-repair",
    "How Much Does Appliance Repair Cost in Texas?",
    "Most appliance repairs in Texas run $130–$450, including service call.",
    130,
    220,
    450,
    "per repair",
    ["Service call fee", "Diagnostic time", "Parts cost", "Brand (premium vs. mid-grade)", "Age of appliance"],
    `## Appliance repair pricing in Texas

Most Texas appliance repair calls run **$130 to $450**.

### Common appliance prices

- Service call (often credited toward repair): $89–$130
- Refrigerator compressor replacement: $400–$900
- Refrigerator ice maker replacement: $200–$425
- Washer drain pump: $200–$425
- Dryer belt replacement: $175–$300
- Dryer heating element: $250–$400
- Oven igniter replacement: $200–$375
- Dishwasher pump/motor: $250–$500

### When to repair vs. replace

A common rule of thumb: if the repair cost exceeds 50% of replacement cost on an appliance over 8 years old, replace. Newer appliances are usually worth repairing — the parts cost less than the embedded depreciation in a new unit.

### Premium vs. mid-grade brands

Repair labor is similar across brands, but parts diverge sharply. A control board for a Sub-Zero might run **$1,200**; the equivalent for a Whirlpool might run **$250**. Factor brand into the repair-vs-replace decision.`,
  ),

  make(
    "fence",
    "How Much Does a New Fence Cost in Texas?",
    "A wood privacy fence in Texas runs $20–$45 per linear foot installed.",
    2500,
    4500,
    8500,
    "per fence",
    ["Linear footage", "Material (wood, wrought iron, vinyl)", "Post material (wood vs. steel)", "Gates", "Tear-out of existing fence"],
    `## Texas fence pricing

A standard 6-foot cedar privacy fence on a typical Texas residential lot runs **$2,500 to $8,500**.

### Common fence prices

- Cedar privacy (6 ft, wood posts): $20–$32 per linear ft
- Cedar privacy (6 ft, steel posts): $28–$42 per linear ft
- Pine privacy: $16–$26 per linear ft
- Vinyl privacy: $28–$48 per linear ft
- Wrought iron pool fence: $30–$60 per linear ft
- Chain-link (4 ft): $14–$22 per linear ft
- Pedestrian gate: $250–$600
- Driveway gate with smart opener: $3,500–$8,500

### Steel posts pay off

Wood posts in Texas clay rot at the soil line in 8–12 years. Galvanized steel posts double the life of the fence and are now standard for premium installs.

### Permits

Most Texas cities don't require a permit for replacing a fence in the same footprint. Always verify with the city before tearing out, especially for corner lots and historic districts.`,
  ),

  make(
    "deck-patio",
    "How Much Does a New Deck Cost in Texas?",
    "A new deck in Texas runs $4,000–$18,000 depending on size, material, and features.",
    4000,
    8500,
    18000,
    "per deck",
    ["Square footage", "Material (pressure-treated, cedar, composite)", "Railings", "Stairs and landings", "Built-in features"],
    `## Texas deck and patio prices

A new residential deck in Texas typically runs **$4,000 to $18,000**.

### Common deck prices (installed)

- Pressure-treated wood deck (200 sq ft): $4,000–$7,500
- Cedar deck (250 sq ft): $7,500–$12,000
- Composite deck (300 sq ft, mid-grade): $10,000–$18,000
- Cable rail (per linear ft): $50–$95
- Cedar pergola (10x14): $4,500–$8,500
- Screened-in patio (existing covered): $9,000–$22,000

### Composite is winning

Composite decking has gotten cheaper and more convincing-looking. The 25-year fade and stain warranties beat what wood will deliver in Texas sun, and the maintenance reduction (no annual stain) is real.

### Build for shade

In Texas, an uncovered deck gets used three months a year. Add a pergola or covered roof and it triples in usable days. Plan the shade structure with the original deck design rather than as an add-on.`,
  ),

  make(
    "concrete",
    "How Much Does a New Concrete Driveway Cost in Texas?",
    "A new concrete driveway in Texas runs $3,500–$12,000 depending on size and finish.",
    3500,
    6500,
    12000,
    "per driveway",
    ["Square footage", "Thickness", "Finish (broom, stamped)", "Demolition of existing", "Reinforcement"],
    `## Texas concrete driveway pricing

A typical residential concrete driveway in Texas runs **$3,500 to $12,000**.

### Common concrete prices

- 4-inch broom-finish driveway (450 sq ft): $3,500–$5,500
- 4-inch broom-finish driveway (700 sq ft): $5,000–$8,500
- 6-inch heavy-duty driveway: +$1,000–$2,500
- Stamped concrete (per sq ft): $12–$20
- Demo and disposal of existing: $2–$4 per sq ft
- Concrete patio (broom, 250 sq ft): $1,800–$3,500

### Don't cheap out on rebar and joints

Texas clay swells and shrinks dramatically. A driveway without proper rebar or saw-cut control joints will crack within a year. Insist on **#4 rebar in a grid** (or at minimum #3) and control joints every 8–10 feet. Concrete that cracks isn't always a contractor problem — but uncontrolled cracking absolutely is.`,
  ),

  make(
    "solar",
    "How Much Does Solar Cost in Texas?",
    "A residential solar system in Texas runs $18,000–$35,000 before federal incentives.",
    18000,
    25000,
    35000,
    "before incentives",
    ["System size (kW)", "Roof complexity", "Battery storage", "Utility company interconnect", "Permitting"],
    `## Texas residential solar prices

A typical residential solar install in Texas runs **$18,000 to $35,000** before the 30% federal Residential Clean Energy Credit. Larger systems and battery storage push the upper end.

### Common solar pricing

- 6 kW system (no battery): $14,000–$22,000
- 8 kW system (no battery): $19,000–$28,000
- 10 kW system (no battery): $24,000–$34,000
- Tesla Powerwall (one unit): $11,000–$15,000 installed
- Enphase IQ Battery 5P: $9,000–$13,000 installed

### After Winter Storm Uri

Battery storage went from "nice to have" to standard in many Texas markets after the February 2021 grid failure. A single battery won't run a whole house through a multi-day outage, but it can keep refrigerators and HVAC running through the typical 12–24 hour grid event.

### Watch the interconnect timeline

Oncor, CenterPoint, and AEP all have interconnect approval processes that take 4–10 weeks after permitting. Reputable installers tell you up front. If a sales rep promises panels turning on next week, they're glossing over reality.`,
  ),

  make(
    "mosquito-control",
    "How Much Does Mosquito Control Cost in Texas?",
    "Recurring mosquito barrier sprays in Texas run $50–$130 per visit; misting systems run $2,500–$6,500 installed.",
    50,
    80,
    130,
    "per visit",
    ["Yard size", "Frequency (3-week vs. monthly)", "Spray vs. misting system", "Larvicide treatments", "Add-on products"],
    `## Texas mosquito control prices

Recurring barrier sprays in Texas typically run **$50 to $130 per visit**, depending on yard size.

### Common mosquito pricing

- Single barrier spray (typical 1/4-acre yard): $80
- Recurring 3-week season program (March–November): $700–$1,200 a year
- Larvicide treatment for standing water: $40–$80 add-on
- Permanent misting system install (24-nozzle): $3,500–$6,500
- Misting system refill and seasonal service: $250–$500 a year

### Why three-week intervals work

Most synthetic pyrethroid barrier products have a knockdown window of about 21 days under Texas humidity and rainfall. Stretching to monthly leaves coverage gaps; tightening to two weeks adds cost without much practical gain.

### Misting systems are for serious cases

Permanent misting systems run on automated timers and are most effective for homeowners who actually entertain on the patio multiple nights a week. For occasional use, the recurring spray is more cost-effective.`,
  ),

  make(
    "junk-removal",
    "How Much Does Junk Removal Cost in Texas?",
    "Junk removal in Texas runs $150–$700 per load depending on volume and item type.",
    150,
    300,
    700,
    "per load",
    ["Volume (truckload fraction)", "Item types (mattresses, freon items)", "Stairs and access", "Disposal fees", "Distance"],
    `## Junk removal pricing in Texas

Most Texas junk removal jobs run **$150 to $700 per load**.

### Common junk removal prices

- Single item pickup (couch, treadmill): $90–$200
- Quarter truckload: $175–$300
- Half truckload: $300–$475
- Full truckload (16-yard truck): $475–$700
- Hot tub removal: $400–$900
- Mattress disposal fee: $30–$60 add-on

### What raises the price

Mattresses, refrigerators, and treadmills incur extra disposal fees because of recycling and freon-recovery requirements. Always disclose these items when you quote, or you'll get an upcharge on-site.`,
  ),

  make(
    "moving",
    "How Much Do Movers Cost in Texas?",
    "Local moves in Texas run $400–$2,000; long-distance moves are $2,500–$8,000+.",
    400,
    900,
    2000,
    "per move",
    ["Move size (number of bedrooms)", "Distance", "Packing service", "Stairs / elevators", "Specialty items"],
    `## Texas moving prices

A typical local move in Texas runs **$400 to $2,000**. Long-distance moves to other states run **$2,500 to $8,000+** depending on weight.

### Common move pricing

- Studio / 1-bedroom local: $400–$700
- 2-bedroom local: $700–$1,200
- 3-bedroom local: $1,200–$2,000
- Full packing service (3-bed): $700–$1,400 add-on
- Long-distance (Texas to neighboring state, 3-bed): $3,500–$6,500

### Hourly vs. flat-rate

Local Texas moves are usually billed hourly with a 3-person minimum and a 3-hour minimum. Flat-rate is more common for long-distance moves and gives you predictability.

### Verify the license

In Texas, intra-state movers need a TxDMV motor-carrier license. Out-of-state movers need a USDOT number. **Always verify both** before signing. Unlicensed movers are the source of most "they took my stuff hostage" horror stories.`,
  ),

  make(
    "remodeling",
    "How Much Does a Kitchen Remodel Cost in Texas?",
    "A kitchen remodel in Texas runs $20,000–$90,000 depending on scope.",
    20000,
    45000,
    90000,
    "per kitchen",
    ["Kitchen size", "Cabinet level (stock, semi-custom, custom)", "Countertops", "Appliances included", "Layout changes"],
    `## Kitchen remodel pricing in Texas

A kitchen remodel in Texas typically runs **$20,000 to $90,000**.

### Common kitchen remodel pricing

- Refresh (paint cabinets, new countertops, new fixtures): $20,000–$32,000
- Mid-range remodel (semi-custom cabinets, quartz tops, new tile): $40,000–$65,000
- Full custom remodel (custom cabinets, layout changes, new appliances): $70,000–$120,000+

### Where the money goes (mid-range example)

- Cabinets: 30%
- Countertops: 12%
- Appliances: 14%
- Labor: 22%
- Plumbing and electrical: 9%
- Tile and floors: 8%
- Permits, design, and contingency: 5%

### Don't move plumbing if you can avoid it

Layout changes that move the sink or relocate gas lines triple the plumbing cost. If your existing layout is workable, refacing rather than relocating saves significant money.

### Bath remodel pricing

A typical bathroom remodel in Texas runs **$8,500 to $40,000**, with **$18,000** being a common mid-range number for a master bath with new tile, vanity, and fixtures.`,
  ),

  make(
    "drywall",
    "How Much Does Drywall Repair Cost in Texas?",
    "Drywall patching in Texas typically runs $200–$1,200 per job.",
    200,
    450,
    1200,
    "per job",
    ["Patch size", "Texture matching difficulty", "Painting included", "Number of patches", "Ceiling vs. wall"],
    `## Texas drywall repair prices

Most drywall patching in Texas runs **$200 to $1,200 per job**.

### Common drywall prices

- Doorknob hole patch: $125–$225
- Mid-size patch (6"–18"): $200–$400
- Large patch (18"–48", post-water-damage): $400–$900
- Full ceiling repair after leak: $700–$2,500
- Texture matching upcharge: $50–$150 per patch
- Hang and finish a single room: $1,500–$3,500
- Bonus room hang and finish: $3,500–$6,500

### Texture matching is harder than it looks

Most Texas homes have orange-peel or knockdown texture, and matching it on a patch is a specialty. The wrong spray pattern, the wrong knockdown timing, or the wrong primer will leave a halo around the patch that paint won't hide. Hire someone who's done this 100 times.`,
  ),

  make(
    "water-damage",
    "How Much Does Water Damage Restoration Cost?",
    "Water damage restoration in Texas typically runs $1,500–$9,000 per event.",
    1500,
    3500,
    9000,
    "per event",
    ["Affected square footage", "Water category (clean, gray, black)", "Mold remediation", "Drying duration", "Insurance involvement"],
    `## Water damage restoration costs in Texas

Water damage restoration in Texas typically runs **$1,500 to $9,000** per event, with major flood events running considerably higher.

### Common restoration pricing

- Initial extraction and equipment placement: $400–$900
- Daily equipment rental (air movers, dehumidifiers): $80–$180 per day
- Total drying period (typical): 3–7 days
- Mold remediation (small contained area): $1,500–$4,500
- Mold remediation (whole-room): $4,500–$10,000
- Subfloor replacement (per sq ft): $4–$10

### Insurance

Most homeowner's policies cover sudden water events (burst pipes, appliance failures) but exclude floods from rising water — for that you need a separate flood insurance policy. After Harvey and Beryl, this distinction caught a lot of Texans off guard.

### Don't wait

Mold colonies start growing in 24–48 hours of standing water. Calling restoration crews quickly is the single biggest factor in keeping costs down.`,
  ),

  make(
    "septic",
    "How Much Does Septic Service Cost in Texas?",
    "Septic pumping in Texas runs $300–$750. New aerobic system installs run $7,000–$15,000.",
    300,
    475,
    750,
    "per service",
    ["Tank size", "Last pumping date", "Distance from access", "Aerobic vs. conventional", "Permits"],
    `## Texas septic pricing

A standard septic pump in Texas runs **$300 to $750**. New system installs run **$7,000 to $15,000**.

### Common septic prices

- Septic pumping (1,000-gallon tank): $325–$525
- Septic pumping (1,500-gallon): $475–$700
- Aerobic system maintenance (per visit): $150–$275
- Septic inspection (pre-purchase): $250–$500
- New conventional septic install: $4,500–$10,000
- New aerobic system install: $9,000–$15,000
- Drain field replacement: $4,500–$10,000

### Pump every 3–5 years

For a 4-person household with a 1,000-gallon tank, every 3 years is a reasonable cadence; with a 1,500-gallon tank, every 5 years is fine. Skipping pumping is the fastest way to ruin a drain field — and a drain field replacement is much more expensive than the pump that prevents it.

### TCEQ regulations

Aerobic systems in Texas require permits from TCEQ and ongoing maintenance contracts. Skipping the maintenance contract isn't just risky — it's a violation that can put you on the wrong side of code enforcement.`,
  ),

  make(
    "fire-ant-control",
    "How Much Does Fire Ant Control Cost in Texas?",
    "Fire ant control in Texas runs $80–$260 per yard treatment.",
    80,
    140,
    260,
    "per yard",
    ["Yard size", "Mound count", "Recurring vs. one-time", "Bait vs. mound treatment", "Adjacent properties"],
    `## Texas fire ant control prices

Most fire ant treatments in Texas run **$80 to $260 per yard treatment**.

### Common fire ant prices

- Single mound treatment: $40–$90
- Yard-wide broadcast bait (typical 1/4 acre): $120–$220
- Two-step program (bait + targeted treatment): $180–$320
- Recurring spring + fall service: $250–$500 a year

### Two-step programs work

The Texas A&M AgriLife two-step protocol (bait + mound treatment) consistently outperforms single-method approaches. Most Texas pest companies use a variation of this protocol.

### What doesn't work

Boiling water, gasoline, and DIY drenches at best displace colonies a few feet — they don't kill the queens. Bait-and-treat programs that target queens are the only durable solution, and they need to be applied at the right time of year (spring and early fall) to land on active foragers.`,
  ),

  make(
    "storm-damage",
    "How Much Does Storm Damage Restoration Cost?",
    "Storm and hail damage restoration in Texas typically runs $1,000–$15,000 per claim.",
    1000,
    4500,
    15000,
    "per claim",
    ["Damage scope", "Roof tarping needs", "Tree debris", "Insurance deductible", "Code upgrades required"],
    `## Texas storm damage costs

Storm damage restoration in Texas typically runs **$1,000 to $15,000 per claim**, with major hail events on full roof replacements pushing higher.

### Common storm-damage prices

- Emergency roof tarp: $400–$1,200
- Tree debris cleanup: $500–$2,500
- Hail damage roof replacement (assigned to insurance): deductible only
- Window replacement after impact: $400–$1,400 per window
- Fence repair after wind event: $400–$1,800
- Full insurance claim coordination: usually included with full restoration

### How insurance claims actually work

In a typical hail event, you'll pay your deductible (often **$1,000 to $3,000** for hail) and the insurer pays the rest of the actual cash value. Reputable contractors won't ask you to pay anything until your claim is approved, and they'll work with the adjuster directly.

### Watch for storm-chasers

After major hail events in DFW or San Antonio, dozens of out-of-state contractors flood in. Stick with companies that have a Texas address you can drive to, license numbers you can verify, and positive reviews that aren't all from the past 30 days.`,
  ),
];
