// ============================================================
//  products.js  —  Vijaya Lakshmi Enterprises
//  Works on every category page (pipe-fittings.html, valves.html, …)
//  The page sets  data-category="pipe-fittings"  on <body>.
//  "products.html" overview page does NOT use this script.
// ============================================================

// ─────────────────────────────────────────────────────────────
//  PRODUCT IMAGE MAP
//  Add real image paths here when you have them, e.g.
//    7: 'images/products/double-ferrule-connector.jpg',
//  The card shows the emoji as a large text fallback automatically.
// ─────────────────────────────────────────────────────────────
const PRODUCT_IMAGES = {
    // 1: 'images/products/ss-elbow-90.jpg',
};

// ─────────────────────────────────────────────────────────────
//  FULL CATALOGUE  (127 products, all categories validated)
// ─────────────────────────────────────────────────────────────
const productCatalog = [
  { id:1,  name:"SS 304L Buttweld 90° Elbow",            category:"pipe-fittings",      emoji:"📐", description:"Seamless long radius elbow for industrial piping.",                          specs:"Standard: ASME B16.9 · Sch 10–80 · Size: ½\" to 24\"" },
  { id:2,  name:"SS 316L Buttweld Tee",                   category:"pipe-fittings",      emoji:"⊤",  description:"Equal and unequal tee junctions for fluid distribution.",                  specs:"ASTM A403 WP316L · Seamless/Welded · Sch 40/80" },
  { id:3,  name:"SS Concentric Reducer",                  category:"pipe-fittings",      emoji:"⧓", description:"Symmetrical reducer for vertical piping transitions.",                       specs:"Size: ½\"×¼\" to 12\"×10\" · Sch 10s to 80s" },
  { id:4,  name:"SS Eccentric Reducer",                   category:"pipe-fittings",      emoji:"⧗", description:"Asymmetrical reducer for horizontal piping to prevent air pockets.",         specs:"Material: SS304/316 · Standard: ASME B16.9" },
  { id:5,  name:"SS Stub End (Lap Joint)",                category:"pipe-fittings",      emoji:"⊣", description:"Used with lap joint flanges for easy disassembly.",                         specs:"Type: Short/Long Pattern · Material: SS316L" },
  { id:6,  name:"Hex Long Nipple",                        category:"pipe-fittings",      emoji:"🔩", description:"Threaded connection for joining two internal threads.",                     specs:"Threads: NPT/BSP · Length: 50–300mm · Material: SS316" },
  { id:7,  name:"Double Ferrule Male Connector",          category:"pipe-fittings",      emoji:"🔗", description:"Instrumentation-grade leak-proof tube fitting.",                            specs:"Pressure: 6000 PSI · Material: SS316 · Tube OD: ⅛\" to 1\"" },
  { id:8,  name:"Double Ferrule Union Tee",               category:"pipe-fittings",      emoji:"⫽", description:"Connects three tubes in instrumentation systems.",                          specs:"Design: Compression Type · Material: SS316/304" },
  { id:9,  name:"Bulkhead Male Connector",                category:"pipe-fittings",      emoji:"🧱", description:"Used for passing tubing through panels or bulkheads.",                     specs:"Size: 6–25mm · Material: SS316/Brass" },
  { id:10, name:"Swivel Female Adapter",                  category:"pipe-fittings",      emoji:"🔄", description:"Adapts rigid tube to flexible connections.",                                specs:"Thread: JIC/NPT · Material: SS316" },
  { id:11, name:"Hex Reducing Bushing",                   category:"pipe-fittings",      emoji:"💠", description:"Reduces female thread size to a smaller male size.",                       specs:"Max Pressure: 10000 PSI · Material: ASTM A276" },
  { id:12, name:"Pipe Cap (Buttweld)",                    category:"pipe-fittings",      emoji:"🧢", description:"Used for permanently sealing the end of a pipe.",                          specs:"Standard: ANSI B16.9 · Material: SS304/316" },
  { id:13, name:"Socket Weld Elbow 90°",                  category:"pipe-fittings",      emoji:"📐", description:"High-pressure forged fitting for small bore piping.",                      specs:"Class: 3000/6000/9000 · Standard: ASME B16.11" },
  { id:14, name:"Socket Weld Full Coupling",              category:"pipe-fittings",      emoji:"🍱", description:"Connects two pipes of the same size using socket welds.",                  specs:"Material: ASTM A182 F304/316" },
  { id:15, name:"Threaded Union (Class 3000)",            category:"pipe-fittings",      emoji:"💍", description:"Allows for easy disconnection of piping for maintenance.",                  specs:"Threads: NPT/BSPT · Standard: MSS SP-83" },
  { id:16, name:"One-Touch Straight Connector (PC)",      category:"pneumatic-fittings", emoji:"🔌", description:"Instant connection for PU/Nylon tubing.",                                  specs:"Tube OD: 4/6/8/10/12/16mm · Thread: M5 to ½\"" },
  { id:17, name:"Push-In Elbow (PL)",                    category:"pneumatic-fittings", emoji:"∟",  description:"90-degree instant pneumatic connection.",                                   specs:"Body: PBT · Thread: Nickel Plated Brass · Press: 10 Bar" },
  { id:18, name:"Push-In Tee (PB/PD)",                   category:"pneumatic-fittings", emoji:"⫪", description:"Branching connector for air lines.",                                        specs:"Available: Branch Tee, Run Tee · Media: Air/Vacuum" },
  { id:19, name:"Pneumatic Speed Controller (JSC)",       category:"pneumatic-fittings", emoji:"🔘", description:"Regulates air flow to control cylinder speed.",                            specs:"Type: Meter-out/Meter-in · Fluid: Compressed Air" },
  { id:20, name:"Glycerin Filled Gauge (SS)",             category:"pneumatic-fittings", emoji:"⏲️", description:"Anti-vibration gauge for high-pressure systems.",                          specs:"Dial: 100mm · Range: 0–700 kg/cm² · Conn: ½\" BSP" },
  { id:21, name:"Hand Slide Valve (HSV)",                 category:"pneumatic-fittings", emoji:"🖐️", description:"Manual slide valve for air line isolation.",                               specs:"Port Size: ¼\" to ½\" · Slide Material: Aluminum" },
  { id:22, name:"Sintered Bronze Silencer",               category:"pneumatic-fittings", emoji:"🔇", description:"Reduces exhaust noise in pneumatic systems.",                              specs:"Material: Sintered Bronze · Thread: ⅛\" to 1\"" },
  { id:23, name:"Quick Exhaust Valve (QE)",               category:"pneumatic-fittings", emoji:"💨", description:"Increases cylinder speed by venting air locally.",                         specs:"Port: ¼\" to ¾\" · Body: Die Cast Aluminum" },
  { id:24, name:"PU Tubing (Polyurethane)",               category:"tubes",              emoji:"🐍", description:"Flexible tubing for pneumatic automation.",                                 specs:"Colors: Blue/Black/Clear · Shore A 98 · Temp: −20 to 60°C" },
  { id:25, name:"Nylon PA12 Tubing",                      category:"tubes",              emoji:"🧵", description:"High-pressure semi-rigid tubing.",                                         specs:"Pressure: Up to 25 Bar · Sizes: 4–12mm" },
  { id:26, name:"Pneumatic Manifold Block",               category:"pneumatic-fittings", emoji:"🚉", description:"Centralized distribution block for air lines.",                            specs:"Stations: 2 to 10 · Material: Aluminum Blue Anodized" },
  { id:27, name:"Check Valve (One Way)",                  category:"pneumatic-fittings", emoji:"🛡️", description:"Prevents reverse flow in air systems.",                                    specs:"Cracking Pressure: 0.5 Bar · Port: ⅛\" to ½\"" },
  { id:28, name:"Rotary Joint",                           category:"pneumatic-fittings", emoji:"🌀", description:"Allows rotation between air supply and moving parts.",                     specs:"Speed: Up to 1000 RPM · Material: Stainless/Steel" },
  { id:29, name:"Y-Type Push-In (PY)",                    category:"pneumatic-fittings", emoji:"ϒ",  description:"Splits one air line into two in a Y pattern.",                             specs:"Material: PBT Composite · Release Ring: POM" },
  { id:30, name:"Metal Air Blow Gun",                     category:"pneumatic-fittings", emoji:"🔫", description:"Industrial cleaning tool for dust removal.",                               specs:"Nozzle: 100mm/250mm · Material: Aluminum Body" },
  { id:31, name:"2/2 Way Solenoid Valve",                 category:"valves",             emoji:"🎛️", description:"Normally closed valve for water/air/oil.",                                 specs:"Coil: 230V AC · Orifice: 15–50mm · Seal: NBR/Viton" },
  { id:32, name:"5/2 Way Single Solenoid Valve",          category:"valves",             emoji:"🕹️", description:"Pilot operated valve for cylinder control.",                               specs:"Brand: Airtac Type · Duty: 100% · Port: ¼\" BSP" },
  { id:33, name:"3/2 Way Hand Lever Valve",               category:"valves",             emoji:"🕹️", description:"Manual control valve for single acting cylinders.",                       specs:"Type: Detented/Spring Return · Port: ¼\"" },
  { id:34, name:"Pneumatic Foot Pedal Valve",             category:"valves",             emoji:"🦶", description:"Hands-free operation for pneumatic machines.",                             specs:"Configuration: 5/2 Way · Guard: Included" },
  { id:35, name:"SS 316 Needle Valve (6000 PSI)",         category:"valves",             emoji:"📍", description:"Hard seated precision flow control valve.",                                specs:"Ends: NPT/BSP · Material: ASTM A182 F316" },
  { id:36, name:"SS 3-Piece Ball Valve",                  category:"valves",             emoji:"🔮", description:"High-performance full port ball valve.",                                   specs:"Mounting Pad: ISO 5211 · Seat: PTFE/RPTFE" },
  { id:37, name:"High Pressure Check Valve (SS)",         category:"valves",             emoji:"🛡️", description:"Zero-leakage check valve for instrumentation.",                            specs:"Pressure: 3000 PSI · Seal: Viton · End: Ferrule/NPT" },
  { id:38, name:"2-Valve Manifold (Remote)",              category:"valves",             emoji:"💼", description:"Isolation and bleed valve for pressure gauges.",                           specs:"Material: SS316 · Max Temp: 240°C" },
  { id:39, name:"Air Filter Regulator (AFR)",             category:"pneumatic-fittings", emoji:"🌫️", description:"Removes moisture and regulates pressure.",                                 specs:"Filtration: 25 Micron · Pressure: 0.5–8.5 Bar" },
  { id:40, name:"Auto Drain Valve",                       category:"valves",             emoji:"💧", description:"Automatically removes condensate from air tanks.",                         specs:"Type: Electronic Timer Based · Voltage: 230V AC" },
  { id:41, name:"Butterfly Valve (Wafer Type)",           category:"valves",             emoji:"🦋", description:"Large diameter flow control for industrial water.",                        specs:"Body: CI · Disc: SS304 · Seat: EPDM" },
  { id:42, name:"Gate Valve (Forged Steel)",              category:"valves",             emoji:"🚪", description:"Heavy duty valve for isolation at high pressure.",                         specs:"Class: 800 · Material: A105 · Size: ½\" to 2\"" },
  { id:43, name:"Globe Valve (Flanged)",                  category:"valves",             emoji:"🌍", description:"Throttling valve for precise flow adjustment.",                            specs:"Standard: DIN/ANSI · Material: WCB/SS316" },
  { id:44, name:"Y-Strainer (SS316)",                     category:"valves",             emoji:"𝒀",  description:"Filters debris from the pipeline.",                                        specs:"Mesh: 40–100 · End: Screwed/Flanged" },
  { id:45, name:"Float Valve (SS)",                       category:"valves",             emoji:"🎈", description:"Automatic level control for water tanks.",                                 specs:"Size: ½\" to 4\" · Material: SS304" },
  { id:46, name:"Compressed Asbestos Sheet (CAF-120)",    category:"sheets",             emoji:"📋", description:"Standard grade sealing for steam and water.",                             specs:"Thickness: 1–5mm · Sheet Size: 1.5m × 2m" },
  { id:47, name:"Non-Asbestos Gasket Sheet",              category:"sheets",             emoji:"🌿", description:"Aramid fiber sheet for eco-safe sealing.",                                 specs:"Brand: Champion/Spitmaan · Temp: Up to 350°C" },
  { id:48, name:"Spiral Wound Gasket (SS316)",            category:"sheets",             emoji:"🌀", description:"High-pressure gasket with outer/inner ring.",                              specs:"Filler: Graphite/PTFE · Class: 150 to 2500" },
  { id:49, name:"PTFE Thread Seal Tape",                  category:"sheets",             emoji:"🎗️", description:"Seals threaded pipe joints reliably.",                                     specs:"Width: 12mm · Thickness: 0.075mm · Length: 10m" },
  { id:50, name:"Graphite Gasket Sheet",                  category:"sheets",             emoji:"🌑", description:"High temp sealing for chemicals and oil.",                                 specs:"Reinforcement: SS Tanged · Purity: 99%" },
  { id:51, name:"Rubber Sheet (Neoprene)",                category:"sheets",             emoji:"⬛", description:"General purpose rubber for gaskets and liners.",                           specs:"Color: Black · Hardness: 65 Shore A" },
  { id:52, name:"Cork Sheet (Rubberized)",                category:"sheets",             emoji:"🪵", description:"Used for oil and fuel sealing in transformers.",                           specs:"Material: RC-70 · Thickness: 3–10mm" },
  { id:53, name:"Silicon Spray (Mould Release)",          category:"sheets",             emoji:"🧴", description:"Industrial lubricant and release agent.",                                  specs:"Volume: 450ml · Grade: Non-Toxic" },
  { id:54, name:"Loctite 542 Thread Sealant",             category:"sheets",             emoji:"🧪", description:"Hydraulic thread sealant for fine threads.",                              specs:"Viscosity: Low · Color: Brown" },
  { id:55, name:"Klingerit Gasket Sheet",                 category:"sheets",             emoji:"📜", description:"Premium grade asbestos sheet for heavy oil.",                              specs:"Grade: Top-Sil · Standard: BS 2815" },
  { id:56, name:"Flexible SS Braid Hose",                 category:"tubes",              emoji:"〰️", description:"Absorbs vibration and expansion in piping.",                               specs:"Material: SS304 Braiding · Core: Corrugated SS" },
  { id:57, name:"PVC Steel Wire Reinforced Hose",         category:"tubes",              emoji:"🥤", description:"Transparent hose for suction and discharge.",                              specs:"Temp: −10 to 70°C · Material: Food Grade PVC" },
  { id:58, name:"Hydraulic Hose (R2 Type)",               category:"tubes",              emoji:"🦾", description:"Double steel wire braid high-pressure hose.",                              specs:"Working Press: 400 Bar · Standard: EN 853" },
  { id:59, name:"Carbon Steel A105 Forged Elbow",         category:"pipe-fittings",      emoji:"🏗️", description:"Heavy-duty forged fitting for high-pressure steam.",                       specs:"Class: 3000 · Standard: ASME B16.11 · Size: ¼\" to 4\"" },
  { id:60, name:"SS 316 Double Ferrule Equal Cross",      category:"pipe-fittings",      emoji:"✢",  description:"Connects four tubes in a cross configuration.",                            specs:"Material: ASTM A276 SS316 · Max Pressure: 6000 PSI" },
  { id:61, name:"SS 304 Slip-On Flange",                  category:"pipe-fittings",      emoji:"💿", description:"Standard flange for easy alignment and welding.",                          specs:"Class: 150/300 · Standard: ANSI B16.5" },
  { id:62, name:"Weld Neck Flange (SS316)",               category:"pipe-fittings",      emoji:"👔", description:"Preferred for high-stress and critical system applications.",               specs:"Schedule: 40/80/160 · RF (Raised Face)" },
  { id:63, name:"Blind Flange (Carbon Steel)",            category:"pipe-fittings",      emoji:"🌑", description:"Used for sealing the end of a flanged piping system.",                     specs:"Standard: ASME B16.5 · Coating: Anti-rust Oil" },
  { id:64, name:"SS 304 Seamless Pipe (Sch 40)",          category:"pipe-fittings",      emoji:"📊", description:"General purpose industrial piping.",                                       specs:"ASTM A312 · Length: 6m · Size: ½\" to 12\"" },
  { id:65, name:"Brass Hex Nipple",                       category:"pipe-fittings",      emoji:"🟡", description:"Economical threaded connector for low pressure.",                          specs:"Material: Extruded Brass · Thread: BSP" },
  { id:66, name:"Rotary Actuator (Rack & Pinion)",        category:"pneumatic-fittings", emoji:"⚙️", description:"Converts linear air pressure to rotational motion.",                      specs:"Angle: 90/180° · Torque: Adjustable" },
  { id:67, name:"Magnetic Sensor for Cylinder",           category:"pneumatic-fittings", emoji:"🧲", description:"Reed switch for detecting piston position.",                               specs:"Voltage: 5–240V AC/DC · LED Indicator included" },
  { id:68, name:"Pneumatic Vibrator (Piston Type)",       category:"pneumatic-fittings", emoji:"📳", description:"Used for material flow in bins and hoppers.",                              specs:"Frequency: Adjustable via Air Pressure" },
  { id:69, name:"Stainless Steel Push-In Fitting",        category:"pneumatic-fittings", emoji:"✨", description:"Food-grade and chemical-resistant push-in.",                               specs:"Material: SS316 · For Wash-down Environments" },
  { id:70, name:"Composite Quick Coupler",                category:"pneumatic-fittings", emoji:"🗜️", description:"Lightweight air hose coupler.",                                            specs:"Type: Nitto Style · Material: High-Impact Plastic" },
  { id:71, name:"Safety Relief Valve (Brass)",            category:"valves",             emoji:"🚨", description:"Prevents over-pressurization in air tanks.",                               specs:"Set Pressure: 1–10 Bar · Thread: ¼\" to 1\"" },
  { id:72, name:"High Pressure Ball Valve (10000 PSI)",   category:"valves",             emoji:"💎", description:"Extreme pressure control for oil and gas.",                                specs:"Material: Duplex Steel · Seal: PEEK · Size: ¼\" to 1\"" },
  { id:73, name:"Pressure Reducing Valve (Water)",        category:"valves",             emoji:"📉", description:"Maintains constant outlet pressure for water lines.",                      specs:"Body: Bronze · Range: 1–6 Bar · End: Screwed" },
  { id:74, name:"Dual Coil Solenoid Valve",               category:"valves",             emoji:"🧲", description:"Memory function directional control valve.",                               specs:"Type: 5/2 Way Double Solenoid · Voltage: 110V AC" },
  { id:75, name:"Viton O-Ring Kit",                       category:"sheets",             emoji:"⭕", description:"Assortment of high-temp chemical resistant rings.",                        specs:"Hardness: 75 Shore A · Metric & Inch Sizes" },
  { id:76, name:"Hydraulic Seal Kit",                     category:"sheets",             emoji:"📦", description:"Includes wiper seals, rod seals, and piston seals.",                      specs:"Customized for JCB/Caterpillar/Industrial Jacks" },
  { id:77, name:"Mica Sheet (Natural)",                   category:"sheets",             emoji:"💎", description:"High dielectric strength for electrical insulation.",                      specs:"Grade: Muscovite · Temp: Up to 600°C" },
  { id:78, name:"Asbestos Rope (Round)",                  category:"sheets",             emoji:"🧶", description:"Sealing for boiler doors and furnace joints.",                             specs:"Size: 6–50mm · Temp: 450°C" },
  { id:79, name:"Pneumatic Coil with Fittings",           category:"tubes",              emoji:"🧬", description:"Pre-assembled spiral hose with swivel nuts.",                              specs:"Length: 5m/10m/15m · Ready to Use" },
  { id:80, name:"Gauge Snubber (SS316)",                  category:"pipe-fittings",      emoji:"📉", description:"Protects pressure gauges from pressure spikes and surges.",                specs:"Connection: ½\" NPT · Material: SS316 · Type: Adjustable" },
  { id:81, name:"Siphon (Q-Type / U-Type)",               category:"pipe-fittings",      emoji:"➰", description:"Protects gauges from high-temperature steam damage.",                       specs:"Material: Carbon Steel/SS316 · Max Temp: 400°C" },
  { id:82, name:"Thermowell (Bar Stock)",                  category:"pipe-fittings",      emoji:"🌡️", description:"Protective housing for industrial temperature sensors.",                    specs:"Type: Flanged/Screwed · Insertion Length: 100–500mm" },
  { id:83, name:"Condensate Pot",                         category:"pipe-fittings",      emoji:"🏺", description:"Captures condensate and protects instruments in steam lines.",               specs:"Material: Seamless Pipe A106 Gr.B · Pressure: 3000 PSI" },
  { id:84, name:"Air Header / Distribution Manifold",     category:"pipe-fittings",      emoji:"🍴", description:"Centralized distribution point for multiple air instruments.",               specs:"Inlet: 1\" · Outlets: 4–12 Nos (¼\" Ball Valves)" },
  { id:85, name:"Orifice Plate (SS316)",                  category:"pipe-fittings",      emoji:"💿", description:"Primary flow element for differential pressure flow meters.",               specs:"Type: Concentric · Material: SS316 · Standard: ISO 5167" },
  { id:86, name:"Venturi Tube",                           category:"pipe-fittings",      emoji:"⏳", description:"High-accuracy flow measurement device for large pipelines.",                specs:"Material: Cast Iron/SS · Low Pressure Loss" },
  { id:87, name:"Magnetic Level Gauge",                   category:"pipe-fittings",      emoji:"📏", description:"Safe visual level indication for high-pressure tanks.",                    specs:"Body: SS316 · Indicator: Bi-Color Flappers · C-C: Custom" },
  { id:88, name:"Sight Flow Indicator (Double Window)",   category:"pipe-fittings",      emoji:"👁️", description:"Visual inspection tool for flow monitoring.",                              specs:"Glass: Toughened Borosilicate · End: Flanged/Screwed" },
  { id:89, name:"Relief Valve (Pilot Operated)",          category:"valves",             emoji:"🌋", description:"High-capacity safety valve for chemical process lines.",                    specs:"Set Pressure: Up to 50 Bar · Material: SS316/Alloy 20" },
  { id:90, name:"Double Block and Bleed Valve (DBB)",     category:"valves",             emoji:"🍱", description:"Multi-port valve for critical isolation and safety.",                       specs:"Configuration: Ball-Needle-Ball · Pressure: Class 2500" },
  { id:91, name:"O-Ring Cord (Splicing Kit)",             category:"sheets",             emoji:"➰", description:"Allows for custom size O-ring creation on-site.",                           specs:"Material: NBR/Viton · Diameter: 2–12mm" },
  { id:92, name:"Needle Valve (Panel Mount)",             category:"valves",             emoji:"📌", description:"Instrumentation valve designed for dashboard install.",                    specs:"Nut: Included · Material: Brass/SS316" },
  { id:93, name:"SS 304 Forged Tee (Threaded)",           category:"pipe-fittings",      emoji:"⊤",  description:"High-pressure threaded branch connection.",                                specs:"Class: 3000 · Standard: ASME B16.11" },
  { id:94, name:"SS Pipe Cross",                          category:"pipe-fittings",      emoji:"✢",  description:"Connects four pipelines at right angles.",                                 specs:"Sch 40 · Seamless · Grade 316" },
  { id:95, name:"SS Socket Weld Union",                   category:"pipe-fittings",      emoji:"💍", description:"Facilitates easy removal of line components.",                             specs:"Class 3000 · Standard ASME B16.11" },
  { id:96, name:"SS Concentric Swage Nipple",             category:"pipe-fittings",      emoji:"🍾", description:"Reducing nipple for connecting buttweld to threaded.",                     specs:"Material: A182 F316 · Length: 100mm" },
  { id:97, name:"Alloy Steel Pipe Fitting (WP11)",        category:"pipe-fittings",      emoji:"🩶", description:"For high-temperature power plant piping.",                                  specs:"Material: ASTM A234 WP11 · CL1/CL2" },
  { id:98, name:"ABS Flanged Ball Valve (Manual)",        category:"valves",             emoji:"🔘", description:"Flanged full bore ball valve for corrosive liquid and chemical distribution.", specs:"Material: PP/PPH/PVDF · Seat: PTFE · Size: 25–150mm · Rating: 15 kg/cm²" },
  { id:99, name:"ABS Actuated Ball Valve",                category:"valves",             emoji:"⚡", description:"Pneumatically & electrically actuated ball valve with limit switch and solenoid options.", specs:"Material: PP/PPH/PVDF · Coupler: SS304/SS316 · Size: 25–150mm" },
  { id:100,name:"ABS Butterfly Valve (Lever Operated)",   category:"valves",             emoji:"🦋", description:"Lever operated butterfly valve for flow throttling and isolation.",         specs:"Material: PP/PPH/PVDF · Seat: EPDM/Viton · Size: 50–100mm" },
  { id:101,name:"ABS Butterfly Valve (Gear Operated)",    category:"valves",             emoji:"⚙️", description:"Gearbox operated butterfly valve for large diameter piping.",               specs:"Material: PP/PPH/PVDF · Gearbox: CI Epoxy Painted · Size: 150–200mm" },
  { id:102,name:"ABS Ball Check Valve",                   category:"valves",             emoji:"🔄", description:"Non-return ball check valve for aggressive media lines.",                   specs:"Material: PP/PPH/PVDF · Seat/Seal: EPDM/Viton · Size: 20–100mm" },
  { id:103,name:"ABS Industrial Sight Glass",             category:"valves",             emoji:"👁️", description:"Flanged visual flow indicator sight glass for inline process monitoring.",  specs:"Body: PP/PPH/PVDF · Glass: Borosilicate · Size: 25–100mm · Rating: 10 kg/cm²" },
  { id:104,name:"Reflex Liquid Level Gauge",              category:"level-instruments",  emoji:"📏", description:"High-pressure reflex level gauge using light refraction for liquid level visualization.", specs:"Max: 220 kg/cm² · 400°C · Chamber: CS/SS304/SS316L/Monel/Titanium/Inconel · Range: 0–3000mm" },
  { id:105,name:"Transparent Liquid Level Gauge",         category:"level-instruments",  emoji:"👓", description:"Transparent glass level gauge for clear observation of fluid colour and level.", specs:"Max: 220 kg/cm² · 400°C · Glass: Toughened Borosilicate · Range: 0–3000mm" },
  { id:106,name:"Weld Pad Liquid Level Gauge",            category:"level-instruments",  emoji:"🧱", description:"Direct-weld pad level gauge for storage tanks and pressure vessels.",        specs:"Max: 120 kg/cm² · 300°C · Range: 0–1000mm · Chamber: CS/SS304/SS316L" },
  { id:107,name:"Tubular Liquid Level Gauge",             category:"level-instruments",  emoji:"🧪", description:"Low-pressure tubular glass level gauge with C-channel steel frame.",          specs:"Max: 10 kg/cm² · 100°C · Glass OD: 12/16/19/25mm · Range: 0–2500mm" },
  { id:108,name:"Float & Board Liquid Level Gauge",       category:"level-instruments",  emoji:"🪜", description:"Guided/unguided float and board scale gauge for large atmospheric storage tanks.", specs:"Atmospheric · 150°C · Scale: Al 150mm wide · Range: 0–20m · Float: SS304/316/PP" },
  { id:109,name:"Float & Dial Liquid Level Gauge",        category:"level-instruments",  emoji:"⏲️", description:"Dial-indicator level gauge operated by float pulley system.",                 specs:"Atmospheric · 100°C · Range: 0–10000mm · Indicator: Analog & Digital" },
  { id:110,name:"Top/Side Mounted Magnetic Level Gauge",  category:"level-instruments",  emoji:"🧲", description:"Magnetic float level gauge with follower capsule or bi-colour flapper display.", specs:"Rating: Up to 600# · Range: 0–5m · Sp. Gr: 0.55 · Wetted Parts: SS304/SS316/PP" },
  { id:111,name:"Multi-Point Liquid Level Switch",        category:"level-instruments",  emoji:"🔌", description:"Reed switch activated magnetic float switches for multi-point liquid level control.", specs:"Rating: Up to 600# / 10 kg/cm² · Multi Float: Up to 5 · Enclosure: IP65/Ex-proof" },
  { id:112,name:"Side Mounted Float Level Switch",        category:"level-instruments",  emoji:"🎛️", description:"Heavy-duty microswitch level controls for side tank installation.",           specs:"Switching: SPDT/DPDT 5A/7A @ 250VAC · Range: Up to 15m · Rating: Up to 600#" },
  { id:113,name:"Displacer / Conductivity Level Switch",  category:"level-instruments",  emoji:"⚡", description:"High-pressure displacer or conductive probe level switches for demanding process control.", specs:"Press & Temp: Up to 80 kg/cm² · 300°C · Conductivity: Min 25 µS · Enclosure: IP65" },
  { id:114,name:"Double Window Sight Flow Indicator",     category:"flow-instruments",   emoji:"👁️", description:"Visual flow indicators with drip tube, flapper, or rotating blade options.",  specs:"Size: 15–300mm · Glass: Annealed Borosilicate · Body: MS/CS/SS304/SS316 · End: Flanged/Screwed/Wafer" },
  { id:115,name:"Orifice Plate with Flange Assemblies",   category:"flow-instruments",   emoji:"⭕", description:"Square edge, quadrant, conical, or eccentric orifice plates for differential pressure flow measurement.", specs:"Standard: ISO 5167/BS 1042 · Size: 1\"–24\" · Flange: ANSI B16.5/B16.36 · Material: SS304/316/Hastelloy/Monel/PTFE" },
  { id:116,name:"Senior Orifice Meter & Meter Run",       category:"flow-instruments",   emoji:"🚰", description:"Daniel Senior type dual-chamber orifice meters for gas custody transfer.",     specs:"Size: ½\"–24\" · Rating: 150# to 2500# · Standard: AGA 3 / API 14.3 · Material: WCB/LCC/316 SST/Duplex" },
  { id:117,name:"Flow Nozzle & Flow Conditioner",         category:"flow-instruments",   emoji:"💨", description:"ISA 1932/Long Radius flow nozzles and flow straighteners for steam and high-velocity fluids.", specs:"Standard: ASME MFC-3M / ISO 5167 · Size: 1\"–24\" · Rating: 150# to 2500# · Material: CS/SS304/SS316/Hastelloy" },
  { id:118,name:"Petrotech Condensate Pot",               category:"flow-instruments",   emoji:"🏺", description:"Vapor chambers, seal pots, and condensate traps for instrumentation piping circuits.", specs:"Standard: ASME B31.3 / ASTM A106 / NACE · Size: 2\"–6\" · Material: SS304/SS316/SS316L" },
  { id:119,name:"Petrotech Instrument Ball Valves",       category:"valves",             emoji:"🟢", description:"1/2/3-piece design ball valves in 2-way, 3-way, 4-way, and fire-safe configurations.", specs:"Press: Up to 690 BAR · Size: ⅛\"–2\" · Body: SS/CS/Brass/Monel/Hastelloy/Titanium" },
  { id:120,name:"Petrotech Instrument Needle Valves",     category:"valves",             emoji:"📍", description:"Screwed integral or union bonnet high-pressure needle valves for precise throttling.", specs:"Press: Up to 690 BAR · Orifice: ⅛\"–½\" · Size: ⅛\"–1\" · Packing: PTFE/Grafoil" },
  { id:121,name:"Petrotech Instrument Check Valves",      category:"valves",             emoji:"↩️", description:"In-line poppet and lift check non-return valves, cracking pressure: 7 PSI.", specs:"Press: Hydro Body 620 Bar · Size: ⅛\"–2\" · Material: SS316/304/CS/Brass/Monel" },
  { id:122,name:"Petrotech Valve Manifolds (2/3/5 Valve)",category:"valves",             emoji:"🔀", description:"Remote and Direct Mounting T-Type & H-Type manifolds for gauge isolation.",   specs:"Press: Body 620 Bar · Body: Forged CS A105/ASTM A182 F316/SS304/Monel · Temp: PTFE std, Grafoil >180°C" },
  { id:123,name:"Double Block & Bleed Valve (Compact)",   category:"valves",             emoji:"🛡️", description:"Compact single-piece forged DBB valve for critical isolation applications.",   specs:"Press: Body 620 Bar · Size: ¼\"–1½\" · Material: Forged CS A105/SS316/SS304/Monel/Hastelloy" },
  { id:124,name:"Instrument Tube & Pipe Fittings",        category:"pipe-fittings",      emoji:"🔩", description:"Twin ferrule compression tube fittings and screwed pipe fittings.",            specs:"Rating: 6000 PSI · Temp: −150°C to 400°C · Tube OD: 1/16\"–1\" · Material: SS/CS/Brass/Monel" },
  { id:125,name:"PANAM Pipe Adaptor (PA Series)",         category:"pipe-fittings",      emoji:"🔌", description:"Male to Female pipe thread adaptors for high-pressure instrumentation connections.", specs:"Pressure: Up to 10,000 PSI · Threads: NPT/BSPP/BSPT · Size: ⅛\"–2\" · Material: SS316/CS/Brass/Monel/Hastelloy" },
  { id:126,name:"PANAM Pipe Reducing Adaptor (PRA)",      category:"pipe-fittings",      emoji:"📉", description:"Male to Female thread reducing adaptors for smooth line transitions.",         specs:"Pressure: Up to 10,000 PSI · Threads: NPT/ISO Tapered · Size: ⅛\"×¼\" to 2\"×1½\" · Material: SS316/CS/Alloy 400" },
  { id:127,name:"PANAM Pipe Reducing Bushing (PRB)",      category:"pipe-fittings",      emoji:"🪙", description:"Hexagonal male-to-female reducing bushings for compact thread size reduction.", specs:"Pressure: Up to 10,000 PSI · Threads: NPT/BSPT/BSPP · Size: ¼\"M × ⅛\"F to 2\"M × 1½\"F · Material: SS316/304/CS" },
];

// ─────────────────────────────────────────────────────────────
//  CATEGORY META
// ─────────────────────────────────────────────────────────────
const CAT_LABELS = {
    'pipe-fittings':      'Pipe & Tube Fittings',
    'pneumatic-fittings': 'Pneumatic Fittings',
    'valves':             'Valves & Regulators',
    'sheets':             'Gaskets & Sheets',
    'tubes':              'Tubes & Hoses',
    'level-instruments':  'Level Instruments',
    'flow-instruments':   'Flow Instruments',
};

// ─────────────────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────────────────
const PAGE_CAT = document.body.getAttribute('data-category') || null;
let currentSearch = '';
let currentSort   = 'default';

// ─────────────────────────────────────────────────────────────
//  BOOT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('productsGrid')) return; // not a cat page
    populateCatCounts();
    bindEvents();
    render();
});

// ─────────────────────────────────────────────────────────────
//  POPULATE SIDEBAR COUNTS
// ─────────────────────────────────────────────────────────────
function populateCatCounts() {
    Object.keys(CAT_LABELS).forEach(cat => {
        const el = document.querySelector(`[data-count="${cat}"]`);
        if (el) el.textContent = productCatalog.filter(p => p.category === cat).length;
    });
    const allEl = document.querySelector('[data-count="all"]');
    if (allEl) allEl.textContent = productCatalog.length;
}

// ─────────────────────────────────────────────────────────────
//  EVENT BINDINGS
// ─────────────────────────────────────────────────────────────
function bindEvents() {
    // Search
    const searchEl = document.getElementById('catSearch');
    if (searchEl) {
        let timer;
        searchEl.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                currentSearch = searchEl.value.trim().toLowerCase();
                render();
            }, 200);
        });
    }

    // Sort
    const sortEl = document.getElementById('sortSelect');
    if (sortEl) sortEl.addEventListener('change', () => { currentSort = sortEl.value; render(); });

    // Mobile sidebar toggle
    const mobileBtn = document.getElementById('mobileFilterBtn');
    const sidebar   = document.getElementById('catSidebar');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            const open = sidebar.classList.toggle('sidebar-open');
            mobileBtn.textContent = open ? '✕ Close' : '☰ Filters';
        });
    }

    // Modal
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('quoteModal')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('modalSubmit')?.addEventListener('click', submitModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ─────────────────────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────────────────────
function render() {
    // Filter to this page's category
    let results = PAGE_CAT
        ? productCatalog.filter(p => p.category === PAGE_CAT)
        : [...productCatalog];

    // Apply search
    if (currentSearch) {
        results = results.filter(p =>
            p.name.toLowerCase().includes(currentSearch) ||
            p.description.toLowerCase().includes(currentSearch) ||
            p.specs.toLowerCase().includes(currentSearch)
        );
    }

    // Apply sort
    if (currentSort === 'az') results.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === 'za') results.sort((a, b) => b.name.localeCompare(a.name));

    // Update count
    const rcEl = document.getElementById('resultCount');
    if (rcEl) rcEl.innerHTML = `Showing <strong>${results.length}</strong> product${results.length !== 1 ? 's' : ''}`;

    // Active badge
    const badge = document.getElementById('activeBadge');
    if (badge) {
        if (currentSearch) {
            badge.textContent = `Search: "${currentSearch}"`;
            badge.style.display = 'inline-flex';
        } else {
            badge.style.display = 'none';
        }
    }

    const grid  = document.getElementById('productsGrid');
    const empty = document.getElementById('emptyState');

    if (results.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'flex';
        return;
    }
    if (empty) empty.style.display = 'none';

    grid.innerHTML = results.map(p => buildCard(p)).join('');
}

// ─────────────────────────────────────────────────────────────
//  CARD BUILDER
// ─────────────────────────────────────────────────────────────
function buildCard(p) {
    const imgSrc = PRODUCT_IMAGES[p.id];
    const catLabel = CAT_LABELS[p.category] || p.category;

    // Image area: real image if available, else large emoji
    const imgArea = imgSrc
        ? `<img
              src="${imgSrc}"
              alt="${p.name}"
              loading="lazy"
              onerror="this.style.display='none';this.parentElement.querySelector('.product-img-fallback').style.display='block'">
           <span class="product-img-fallback" style="display:none;">${p.emoji}</span>`
        : `<span class="product-img-fallback">${p.emoji}</span>`;

    return `
    <div class="product-card" data-id="${p.id}">
        <div class="product-card-top-bar"></div>
        <div class="product-img-wrap">
            ${imgArea}
            <div class="product-img-overlay"></div>
        </div>
        <div class="product-info">
            <span class="product-cat-tag">${catLabel}</span>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.description}</p>
            <div class="product-specs">${p.specs}</div>
            <button class="btn-quote" onclick="openModal(${p.id})">Request Quote</button>
        </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
//  RESET (called from empty state button)
// ─────────────────────────────────────────────────────────────
function resetFilters() {
    currentSearch = '';
    currentSort   = 'default';
    const s  = document.getElementById('catSearch');
    const ss = document.getElementById('sortSelect');
    if (s)  s.value  = '';
    if (ss) ss.value = 'default';
    render();
}

// ─────────────────────────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────────────────────────
function openModal(id) {
    const p = productCatalog.find(x => x.id === id);
    if (!p) return;
    document.getElementById('modalProductName').textContent = p.name;
    const n = document.getElementById('mfNotes');
    if (n) n.value = '';
    const m = document.getElementById('quoteModal');
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const m = document.getElementById('quoteModal');
    if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}

function submitModal() {
    const name  = document.getElementById('mfName')?.value.trim();
    const phone = document.getElementById('mfPhone')?.value.trim();
    if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
    const pName = document.getElementById('modalProductName')?.textContent;
    const email = document.getElementById('mfEmail')?.value.trim();
    const notes = document.getElementById('mfNotes')?.value.trim();
    const sub   = encodeURIComponent(`Product Enquiry: ${pName}`);
    const body  = encodeURIComponent(`Product: ${pName}\nName: ${name}\nPhone: ${phone}\nEmail: ${email || '—'}\nNotes: ${notes || '—'}`);
    window.location.href = `mailto:vijayalakshmienterprise1@gmail.com?subject=${sub}&body=${body}`;
    closeModal();
}
