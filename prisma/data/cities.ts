export type SeedCity = {
  slug: string;
  name: string;
  region: string;
  population: number;
  lat: number;
  lng: number;
  blurb: string;
  longCopy: string;
  zips: string[];
  featured: boolean;
};

export const cities: SeedCity[] = [
  {
    slug: "houston",
    name: "Houston",
    region: "Greater Houston",
    population: 2304580,
    lat: 29.7604,
    lng: -95.3698,
    blurb: "Texas's largest city — sprawling, humid, and full of long-running family contractors.",
    longCopy:
      "Houston home services run on a few specialties: AC repair (eight months of cooling), foundation work (gumbo clay), and water-related trades thanks to the bayou and the next named storm. The pros listed here cover all 600 square miles of the city plus the Inner Loop and the energy corridor.",
    zips: ["77002", "77005", "77006", "77007", "77008", "77019", "77024", "77025", "77027", "77056", "77098"],
    featured: true,
  },
  {
    slug: "dallas",
    name: "Dallas",
    region: "DFW Metroplex",
    population: 1304379,
    lat: 32.7767,
    lng: -96.797,
    blurb: "The DFW anchor — fast-growing, hail-prone, and wide-ranging in housing stock.",
    longCopy:
      "Dallas sits in hail alley, so roofing and storm-damage trades stay busy March through May. North Dallas runs on luxury remodels and pool service; East Dallas is more about renovating mid-century homes. The pros here cover both ends.",
    zips: ["75201", "75202", "75204", "75205", "75206", "75214", "75218", "75225", "75230"],
    featured: true,
  },
  {
    slug: "austin",
    name: "Austin",
    region: "Central Texas",
    population: 974447,
    lat: 30.2672,
    lng: -97.7431,
    blurb: "Hill Country meets tech boom — high demand, steep terrain, and lots of new construction.",
    longCopy:
      "Austin's Hill Country geography makes everything harder: foundations on rock, retaining walls on slopes, irrigation that has to handle 30-degree grades. The contractors below specialize in the local soil and code conditions.",
    zips: ["78701", "78702", "78703", "78704", "78705", "78717", "78731", "78745", "78759"],
    featured: true,
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    region: "South Texas",
    population: 1495295,
    lat: 29.4241,
    lng: -98.4936,
    blurb: "Sprawling, family-owned home services scene with deep roots and good prices.",
    longCopy:
      "San Antonio prices stay below Austin and Houston for most trades, and you'll find more multi-generation family contractors here than anywhere else in the state. The pros below run heavy in HVAC, foundation, and pool service.",
    zips: ["78201", "78205", "78209", "78212", "78216", "78229", "78230", "78232", "78258"],
    featured: true,
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    region: "DFW Metroplex",
    population: 956709,
    lat: 32.7555,
    lng: -97.3308,
    blurb: "DFW's western half — ranch heritage with rapid suburban growth.",
    longCopy:
      "Fort Worth gets the same hail and storms as Dallas, but the housing stock is mixed: pre-war bungalows in the Cultural District, ranch-style homes in Ridglea, and brand-new builds in Walsh. The contractors here know which is which.",
    zips: ["76102", "76104", "76107", "76109", "76110", "76116", "76123", "76132"],
    featured: true,
  },
  {
    slug: "el-paso",
    name: "El Paso",
    region: "West Texas",
    population: 678815,
    lat: 31.7619,
    lng: -106.485,
    blurb: "Desert climate — different rules for HVAC, irrigation, and roofing.",
    longCopy:
      "El Paso is high-desert: low humidity, dramatic temperature swings, and stucco everywhere. AC needs are different here than in Houston, and the contractors below adjust accordingly — many use evaporative coolers in addition to or instead of central AC.",
    zips: ["79901", "79902", "79912", "79922", "79924", "79935", "79936"],
    featured: false,
  },
  {
    slug: "arlington",
    name: "Arlington",
    region: "DFW Metroplex",
    population: 394266,
    lat: 32.7357,
    lng: -97.1081,
    blurb: "Mid-cities Arlington — between Dallas and Fort Worth with its own roster of pros.",
    longCopy:
      "Arlington homeowners typically pull from both Dallas and Fort Worth contractor pools, but plenty of locally headquartered companies serve here too. Roofing, HVAC, and lawn care top the request list.",
    zips: ["76001", "76002", "76010", "76012", "76013", "76015", "76016", "76018"],
    featured: false,
  },
  {
    slug: "corpus-christi",
    name: "Corpus Christi",
    region: "Coastal Bend",
    population: 317863,
    lat: 27.8006,
    lng: -97.3964,
    blurb: "Gulf coast — salt air, hurricanes, and impact-rated everything.",
    longCopy:
      "Corpus contractors deal with a salt-air climate that eats fixtures faster, hurricane preparation, and elevated coastal homes. The pros below run heavy on roofing, impact windows, and storm restoration.",
    zips: ["78401", "78404", "78411", "78412", "78413", "78414"],
    featured: false,
  },
  {
    slug: "plano",
    name: "Plano",
    region: "DFW Metroplex",
    population: 285494,
    lat: 33.0198,
    lng: -96.6989,
    blurb: "North Dallas suburb with strong demand for premium remodels and pool service.",
    longCopy:
      "Plano homes skew newer and bigger, which means kitchen remodels, pool service, and full-yard landscape work dominate the requests. The contractors below run premium tier service.",
    zips: ["75023", "75024", "75025", "75074", "75075", "75093", "75094"],
    featured: false,
  },
  {
    slug: "lubbock",
    name: "Lubbock",
    region: "South Plains",
    population: 263930,
    lat: 33.5779,
    lng: -101.8552,
    blurb: "West Texas — wind, hail, and hard water are the local trade specialties.",
    longCopy:
      "Lubbock's wind takes a toll on roofs, gutters, and exterior paint. The contractors here know how to install hail-rated shingles and deal with Lubbock's notoriously hard water, which kills water heaters faster than anywhere else in the state.",
    zips: ["79401", "79410", "79412", "79413", "79414", "79416", "79424"],
    featured: false,
  },
  {
    slug: "frisco",
    name: "Frisco",
    region: "DFW Metroplex",
    population: 219587,
    lat: 33.1507,
    lng: -96.8236,
    blurb: "Fast-growing Collin County suburb — newer construction, premium remodels.",
    longCopy:
      "Frisco's housing stock is mostly post-2000, which means fewer foundation problems but heavy demand for pool service, kitchen remodels, and lawn programs that handle the fescue-shoulder summer.",
    zips: ["75033", "75034", "75035", "75036", "75068"],
    featured: false,
  },
  {
    slug: "irving",
    name: "Irving",
    region: "DFW Metroplex",
    population: 256684,
    lat: 32.814,
    lng: -96.9489,
    blurb: "Las Colinas and older Irving — a mix of high-rise condos and slab-on-grade homes.",
    longCopy:
      "Irving spans Las Colinas corporate housing and older slab-on-grade neighborhoods near Belt Line. The contractors below handle both — foundation specialists for the older homes, trim carpentry for the newer ones.",
    zips: ["75038", "75039", "75060", "75061", "75062", "75063"],
    featured: false,
  },
  {
    slug: "garland",
    name: "Garland",
    region: "DFW Metroplex",
    population: 246918,
    lat: 32.9126,
    lng: -96.6389,
    blurb: "Northeast DFW — established homes with mature trees and steady demand.",
    longCopy:
      "Garland's a mature suburb with mature problems: aging asphalt shingles, original-build HVAC reaching end-of-life, and tree work for big oaks and pecans. The contractors below specialize in the maintenance side.",
    zips: ["75040", "75041", "75042", "75043", "75044"],
    featured: false,
  },
  {
    slug: "mckinney",
    name: "McKinney",
    region: "DFW Metroplex",
    population: 195308,
    lat: 33.1972,
    lng: -96.6398,
    blurb: "Collin County's other fast-grower — historic downtown and miles of new builds.",
    longCopy:
      "McKinney's historic downtown homes need foundation and electrical work; the developments north of US-380 need lawn programs and pool service. The pros below cover both ends.",
    zips: ["75069", "75070", "75071", "75072"],
    featured: false,
  },
  {
    slug: "round-rock",
    name: "Round Rock",
    region: "Greater Austin",
    population: 133372,
    lat: 30.5083,
    lng: -97.6789,
    blurb: "North Austin satellite — Hill Country prep with a faster-growing footprint.",
    longCopy:
      "Round Rock and the rest of Williamson County are growing faster than the contractor base, which means same-day appointments are harder here. The companies below have crews specifically for the I-35 corridor.",
    zips: ["78664", "78665", "78681"],
    featured: false,
  },
  {
    slug: "amarillo",
    name: "Amarillo",
    region: "Panhandle",
    population: 200393,
    lat: 35.222,
    lng: -101.8313,
    blurb: "High plains — cold winters and hard water shape the priorities up here.",
    longCopy:
      "Amarillo runs colder than the rest of Texas, with a real freeze season. Furnace repair matters here, and so does pipe insulation. The contractors below know what 'real winter' means in a Texas context.",
    zips: ["79101", "79106", "79109", "79110", "79118", "79124"],
    featured: false,
  },
  {
    slug: "waco",
    name: "Waco",
    region: "Central Texas",
    population: 138183,
    lat: 31.5494,
    lng: -97.1467,
    blurb: "Central Texas — Magnolia town with a strong local contractor scene.",
    longCopy:
      "Waco has gotten a lot of remodel attention, which means the contractor base is deeper than the population suggests. Foundation, roofing, and full-home renovations top the list.",
    zips: ["76701", "76704", "76706", "76707", "76710", "76712"],
    featured: false,
  },
  {
    slug: "tyler",
    name: "Tyler",
    region: "East Texas",
    population: 105995,
    lat: 32.3513,
    lng: -95.3011,
    blurb: "East Texas — pine forests, septic systems, and ranch-style homes.",
    longCopy:
      "East Texas means trees, septic, and rural service routes. The Tyler contractors below carry septic-pump trucks, run tree-removal crews after every storm, and handle long drives to outlying ranches.",
    zips: ["75701", "75702", "75703", "75707"],
    featured: false,
  },
];
