// ============================================================
// products.js — Vijaya Lakshmi Enterprises
// Full product catalogue with search, filter, sort & modal
// ============================================================

const productCatalog = [
    { id: 1, name: "SS 304L Buttweld 90° Elbow", category: "pipe-fittings", emoji: "📐", description: "Seamless long radius elbow for industrial piping.", specs: "Standard: ASME B16.9 · Sch 10–80 · Size: ½\" to 24\"" },
    { id: 2, name: "SS 316L Buttweld Tee", category: "pipe-fittings", emoji: "⊤", description: "Equal and unequal tee junctions for fluid distribution.", specs: "ASTM A403 WP316L · Seamless/Welded · Sch 40/80" },
    { id: 3, name: "SS Concentric Reducer", category: "pipe-fittings", emoji: "⧓", description: "Symmetrical reducer for vertical piping transitions.", specs: "Size: ½\"×¼\" to 12\"×10\" · Sch 10s to 80s" },
    { id: 4, name: "SS Eccentric Reducer", category: "pipe-fittings", emoji: "⧗", description: "Asymmetrical reducer for horizontal piping to prevent air pockets.", specs: "Material: SS304/316 · Standard: ASME B16.9" },
    { id: 5, name: "SS Stub End (Lap Joint)", category: "pipe-fittings", emoji: "⊣", description: "Used with lap joint flanges for easy disassembly.", specs: "Type: Short/Long Pattern · Material: SS316L" },
    { id: 6, name: "Hex Long Nipple", category: "pipe-fittings", emoji: "🔩", description: "Threaded connection for joining two internal threads.", specs: "Threads: NPT/BSP · Length: 50–300mm · Material: SS316" },
    { id: 7, name: "Double Ferrule Male Connector", category: "pipe-fittings", emoji: "🔗", description: "Instrumentation-grade leak-proof tube fitting.", specs: "Pressure: 6000 PSI · Material: SS316 · Tube OD: ⅛\" to 1\"" },
    { id: 8, name: "Double Ferrule Union Tee", category: "pipe-fittings", emoji: "⫽", description: "Connects three tubes in instrumentation systems.", specs: "Design: Compression Type · Material: SS316/304" },
    { id: 9, name: "Bulkhead Male Connector", category: "pipe-fittings", emoji: "🧱", description: "Used for passing tubing through panels or bulkheads.", specs: "Size: 6–25mm · Material: SS316/Brass" },
    { id: 10, name: "Swivel Female Adapter", category: "pipe-fittings", emoji: "🔄", description: "Adapts rigid tube to flexible connections.", specs: "Thread: JIC/NPT · Material: SS316" },
    { id: 11, name: "Hex Reducing Bushing", category: "pipe-fittings", emoji: "💠", description: "Reduces female thread size to a smaller male size.", specs: "Max Pressure: 10000 PSI · Material: ASTM A276" },
    { id: 12, name: "Pipe Cap (Buttweld)", category: "pipe-fittings", emoji: "🧢", description: "Used for permanently sealing the end of a pipe.", specs: "Standard: ANSI B16.9 · Material: SS304/316" },
    { id: 13, name: "Socket Weld Elbow 90°", category: "pipe-fittings", emoji: "📐", description: "High-pressure forged fitting for small bore piping.", specs: "Class: 3000/6000/9000 · Standard: ASME B16.11" },
    { id: 14, name: "Socket Weld Full Coupling", category: "pipe-fittings", emoji: "🍱", description: "Connects two pipes of the same size using socket welds.", specs: "Material: ASTM A182 F304/316" },
    { id: 15, name: "Threaded Union (Class 3000)", category: "pipe-fittings", emoji: "💍", description: "Allows for easy disconnection of piping for maintenance.", specs: "Threads: NPT/BSPT · Standard: MSS SP-83" },
    { id: 16, name: "One-Touch Straight Connector (PC)", category: "pneumatic-fittings", emoji: "🔌", description: "Instant connection for PU/Nylon tubing.", specs: "Tube OD: 4/6/8/10/12/16mm · Thread: M5 to ½\"" },
    { id: 17, name: "Push-In Elbow (PL)", category: "pneumatic-fittings", emoji: "∟", description: "90-degree instant pneumatic connection.", specs: "Body: PBT · Thread: Nickel Plated Brass · Press: 10 Bar" },
    { id: 18, name: "Push-In Tee (PB/PD)", category: "pneumatic-fittings", emoji: "⫪", description: "Branching connector for air lines.", specs: "Available: Branch Tee, Run Tee · Media: Air/Vacuum" },
    { id: 19, name: "Pneumatic Speed Controller (JSC)", category: "pneumatic-fittings", emoji: "🔘", description: "Regulates air flow to control cylinder speed.", specs: "Type: Meter-out/Meter-in · Fluid: Compressed Air" },
    { id: 20, name: "Glycerin Filled Gauge (SS)", category: "pneumatic-fittings", emoji: "⏲️", description: "Anti-vibration gauge for high-pressure systems.", specs: "Dial: 100mm · Range: 0–700 kg/cm² · Conn: ½\" BSP" },
    { id: 21, name: "Hand Slide Valve (HSV)", category: "pneumatic-fittings", emoji: "🖐️", description: "Manual slide valve for air line isolation.", specs: "Port Size: ¼\" to ½\" · Slide Material: Aluminum" },
    { id: 22, name: "Sintered Bronze Silencer", category: "pneumatic-fittings", emoji: "🔇", description: "Reduces exhaust noise in pneumatic systems.", specs: "Material: Sintered Bronze · Thread: ⅛\" to 1\"" },
    { id: 23, name: "Quick Exhaust Valve (QE)", category: "pneumatic-fittings", emoji: "💨", description: "Increases cylinder speed by venting air locally.", specs: "Port: ¼\" to ¾\" · Body: Die Cast Aluminum" },
    { id: 24, name: "PU Tubing (Polyurethane)", category: "pneumatic-fittings", emoji: "🐍", description: "Flexible tubing for pneumatic automation.", specs: "Colors: Blue/Black/Clear · Shore A 98 · Temp: −20 to 60°C" },
    { id: 25, name: "Nylon PA12 Tubing", category: "pneumatic-fittings", emoji: "🧵", description: "High-pressure semi-rigid tubing.", specs: "Pressure: Up to 25 Bar · Sizes: 4–12mm" },
    { id: 26, name: "Pneumatic Manifold Block", category: "pneumatic-fittings", emoji: "🚉", description: "Centralized distribution block for air lines.", specs: "Stations: 2 to 10 · Material: Aluminum Blue Anodized" },
    { id: 27, name: "Check Valve (One Way)", category: "pneumatic-fittings", emoji: "🛡️", description: "Prevents reverse flow in air systems.", specs: "Cracking Pressure: 0.5 Bar · Port: ⅛\" to ½\"" },
    { id: 28, name: "Rotary Joint", category: "pneumatic-fittings", emoji: "🌀", description: "Allows rotation between air supply and moving parts.", specs: "Speed: Up to 1000 RPM · Material: Stainless/Steel" },
    { id: 29, name: "Y-Type Push-In (PY)", category: "pneumatic-fittings", emoji: "ϒ", description: "Splits one air line into two in a Y pattern.", specs: "Material: PBT Composite · Release Ring: POM" },
    { id: 30, name: "Metal Air Blow Gun", category: "pneumatic-fittings", emoji: "🔫", description: "Industrial cleaning tool for dust removal.", specs: "Nozzle: 100mm/250mm · Material: Aluminum Body" },
    { id: 31, name: "2/2 Way Solenoid Valve (Brass)", category: "valves", emoji: "🎛️", description: "Normally closed valve for water/air/oil.", specs: "Coil: 230V AC · Orifice: 15–50mm · Seal: NBR/Viton" },
    { id: 32, name: "5/2 Way Single Solenoid Valve", category: "valves", emoji: "🕹️", description: "Pilot operated valve for cylinder control.", specs: "Brand: Airtac Type · Duty: 100% · Port: ¼\" BSP" },
    { id: 33, name: "3/2 Way Hand Lever Valve", category: "valves", emoji: "🕹️", description: "Manual control valve for single acting cylinders.", specs: "Type: Detented/Spring Return · Port: ¼\"" },
    { id: 34, name: "Pneumatic Foot Pedal Valve", category: "valves", emoji: "🦶", description: "Hands-free operation for pneumatic machines.", specs: "Configuration: 5/2 Way · Guard: Included" },
    { id: 35, name: "SS 316 Needle Valve (6000 PSI)", category: "valves", emoji: "📍", description: "Hard seated precision flow control valve.", specs: "Ends: NPT/BSP · Material: ASTM A182 F316" },
    { id: 36, name: "SS 3-Piece Ball Valve", category: "valves", emoji: "🔮", description: "High-performance full port ball valve.", specs: "Mounting Pad: ISO 5211 · Seat: PTFE/RPTFE" },
    { id: 37, name: "High Pressure Check Valve (SS)", category: "valves", emoji: "🛡️", description: "Zero-leakage check valve for instrumentation.", specs: "Pressure: 3000 PSI · Seal: Viton · End: Ferrule/NPT" },
    { id: 38, name: "2-Valve Manifold (Remote)", category: "valves", emoji: "💼", description: "Isolation and bleed valve for pressure gauges.", specs: "Material: SS316 · Max Temp: 240°C" },
    { id: 39, name: "Air Filter Regulator (AFR)", category: "valves", emoji: "🌫️", description: "Removes moisture and regulates pressure.", specs: "Filtration: 25 Micron · Pressure: 0.5–8.5 Bar" },
    { id: 40, name: "Auto Drain Valve", category: "valves", emoji: "💧", description: "Automatically removes condensate from air tanks.", specs: "Type: Electronic Timer Based · Voltage: 230V AC" },
    { id: 41, name: "Butterfly Valve (Wafer Type)", category: "valves", emoji: "🦋", description: "Large diameter flow control for industrial water.", specs: "Body: CI · Disc: SS304 · Seat: EPDM" },
    { id: 42, name: "Gate Valve (Forged Steel)", category: "valves", emoji: "🚪", description: "Heavy duty valve for isolation at high pressure.", specs: "Class: 800 · Material: A105 · Size: ½\" to 2\"" },
    { id: 43, name: "Globe Valve (Flanged)", category: "valves", emoji: "🌍", description: "Throttling valve for precise flow adjustment.", specs: "Standard: DIN/ANSI · Material: WCB/SS316" },
    { id: 44, name: "Y-Strainer (SS316)", category: "valves", emoji: "𝒀", description: "Filters debris from the pipeline.", specs: "Mesh: 40–100 · End: Screwed/Flanged" },
    { id: 45, name: "Float Valve (SS)", category: "valves", emoji: "🎈", description: "Automatic level control for water tanks.", specs: "Size: ½\" to 4\" · Material: SS304" },
    { id: 46, name: "Compressed Asbestos Sheet (CAF-120)", category: "sheets", emoji: "📋", description: "Standard grade sealing for steam and water.", specs: "Thickness: 1–5mm · Sheet Size: 1.5m × 2m" },
    { id: 47, name: "Non-Asbestos Gasket Sheet", category: "sheets", emoji: "🌿", description: "Aramid fiber sheet for eco-safe sealing.", specs: "Brand: Champion/Spitmaan · Temp: Up to 350°C" },
    { id: 48, name: "Spiral Wound Gasket (SS316)", category: "sheets", emoji: "🌀", description: "High-pressure gasket with outer/inner ring.", specs: "Filler: Graphite/PTFE · Class: 150 to 2500" },
    { id: 49, name: "PTFE Thread Seal Tape", category: "sheets", emoji: "🎗️", description: "Seals threaded pipe joints reliably.", specs: "Width: 12mm · Thickness: 0.075mm · Length: 10m" },
    { id: 50, name: "Graphite Gasket Sheet", category: "sheets", emoji: "🌑", description: "High temp sealing for chemicals and oil.", specs: "Reinforcement: SS Tanged · Purity: 99%" },
    { id: 51, name: "Rubber Sheet (Neoprene)", category: "sheets", emoji: "⬛", description: "General purpose rubber for gaskets and liners.", specs: "Color: Black · Hardness: 65 Shore A" },
    { id: 52, name: "Cork Sheet (Rubberized)", category: "sheets", emoji: "🪵", description: "Used for oil and fuel sealing in transformers.", specs: "Material: RC-70 · Thickness: 3–10mm" },
    { id: 53, name: "Silicon Spray (Mould Release)", category: "sheets", emoji: "🧴", description: "Industrial lubricant and release agent.", specs: "Volume: 450ml · Grade: Non-Toxic" },
    { id: 54, name: "Loctite 542 Thread Sealant", category: "sheets", emoji: "🧪", description: "Hydraulic thread sealant for fine threads.", specs: "Viscosity: Low · Color: Brown" },
    { id: 55, name: "Klingerit Gasket Sheet", category: "sheets", emoji: "📜", description: "Premium grade asbestos sheet for heavy oil.", specs: "Grade: Top-Sil · Standard: BS 2815" },
    { id: 56, name: "Flexible SS Braid Hose", category: "tubes", emoji: "〰️", description: "Absorbs vibration and expansion in piping.", specs: "Material: SS304 Braiding · Core: Corrugated SS" },
    { id: 57, name: "PVC Steel Wire Reinforced Hose", category: "tubes", emoji: "🥤", description: "Transparent hose for suction and discharge.", specs: "Temp: −10 to 70°C · Material: Food Grade PVC" },
    { id: 58, name: "Metal Coolant Pipe (Articulated)", category: "tubes", emoji: "🏗️", description: "Directs coolant flow in CNC machines.", specs: "Length: 300–600mm · End: Magnetic Base opt." },
    { id: 59, name: "Hydraulic Hose (R2 Type)", category: "tubes", emoji: "🦾", description: "Double steel wire braid high-pressure hose.", specs: "Working Press: 400 Bar · Standard: EN 853" },
    { id: 60, name: "Anti-Spatter Tube (Weld Grade)", category: "tubes", emoji: "🔥", description: "Pneumatic tube for welding environments.", specs: "Material: Polyurethane with outer cover" },
    { id: 61, name: "Carbon Steel A105 Forged Elbow", category: "pipe-fittings", emoji: "🏗️", description: "Heavy-duty forged fitting for high-pressure steam.", specs: "Class: 3000 · Standard: ASME B16.11 · Size: ¼\" to 4\"" },
    { id: 62, name: "SS 316 Double Ferrule Equal Cross", category: "pipe-fittings", emoji: "✢", description: "Connects four tubes in a cross configuration.", specs: "Material: ASTM A276 SS316 · Max Pressure: 6000 PSI" },
    { id: 63, name: "Monel 400 Tube Fittings", category: "pipe-fittings", emoji: "🧪", description: "Special alloy fittings for sea water and chemical use.", specs: "Corrosion Resistant · Custom Sizes Available" },
    { id: 64, name: "Inconel 625 Adapter", category: "pipe-fittings", emoji: "🔥", description: "High-nickel alloy for extreme temperature environments.", specs: "NPT Male to Tube · Extreme Pressure Rating" },
    { id: 65, name: "SS 304 Slip-On Flange", category: "pipe-fittings", emoji: "💿", description: "Standard flange for easy alignment and welding.", specs: "Class: 150/300 · Standard: ANSI B16.5" },
    { id: 66, name: "Weld Neck Flange (SS316)", category: "pipe-fittings", emoji: "👔", description: "Preferred for high-stress applications and critical systems.", specs: "Schedule: 40/80/160 · RF (Raised Face)" },
    { id: 67, name: "Blind Flange (Carbon Steel)", category: "pipe-fittings", emoji: "🌑", description: "Used for sealing the end of a flanged piping system.", specs: "Standard: ASME B16.5 · Coating: Anti-rust Oil" },
    { id: 68, name: "SS 304 Seamless Pipe (Sch 40)", category: "pipe-fittings", emoji: "📊", description: "General purpose industrial piping.", specs: "ASTM A312 · Length: 6m · Size: ½\" to 12\"" },
    { id: 69, name: "Copper Tube (Soft Annealed)", category: "pipe-fittings", emoji: "🥉", description: "Flexible copper tubing for HVAC and air lines.", specs: "Grade: ASTM B280 · Outer Diameter: ¼\" to ⅞\"" },
    { id: 70, name: "Brass Hex Nipple", category: "pipe-fittings", emoji: "🟡", description: "Economical threaded connector for low pressure.", specs: "Material: Extruded Brass · Thread: BSP" },
    { id: 71, name: "Rotary Actuator (Rack & Pinion)", category: "pneumatic-fittings", emoji: "⚙️", description: "Converts linear air pressure to rotational motion.", specs: "Angle: 90/180° · Torque: Adjustable" },
    { id: 72, name: "Magnetic Sensor for Cylinder", category: "pneumatic-fittings", emoji: "🧲", description: "Reed switch for detecting piston position.", specs: "Voltage: 5–240V AC/DC · LED Indicator included" },
    { id: 73, name: "Pneumatic Vibrator (Piston Type)", category: "pneumatic-fittings", emoji: "📳", description: "Used for material flow in bins and hoppers.", specs: "Frequency: Adjustable via Air Pressure" },
    { id: 74, name: "Air Gripper (Parallel Type)", category: "pneumatic-fittings", emoji: "🤏", description: "Pneumatic fingers for robotic pick-and-place.", specs: "Bore: 10–25mm · Force: High Gripping" },
    { id: 75, name: "Multi-Tube Connector", category: "pneumatic-fittings", emoji: "🔌", description: "Disconnects multiple air lines simultaneously.", specs: "Stations: 6/8/12 · No Leakage on Disconnect" },
    { id: 76, name: "Stainless Steel Push-In Fitting", category: "pneumatic-fittings", emoji: "✨", description: "Food-grade and chemical-resistant push-in.", specs: "Material: SS316 · For Wash-down Environments" },
    { id: 77, name: "Composite Quick Coupler", category: "pneumatic-fittings", emoji: "🗜️", description: "Lightweight air hose coupler.", specs: "Type: Nitto Style · Material: High-Impact Plastic" },
    { id: 78, name: "Air Tank (Reservoir)", category: "pneumatic-fittings", emoji: "🛢️", description: "Stores compressed air to stabilize pressure.", specs: "Capacity: 1–10L · Max Press: 10 Bar" },
    { id: 79, name: "Vacuum Ejector (Venturi)", category: "pneumatic-fittings", emoji: "🌪️", description: "Generates vacuum using compressed air.", specs: "Nozzle Size: 0.5–2.0mm · Silent Operation" },
    { id: 80, name: "Suction Cup (Industrial)", category: "pneumatic-fittings", emoji: "🍄", description: "Rubber pads for vacuum handling systems.", specs: "Material: NBR/Silicone · Diameter: 10–100mm" },
    { id: 81, name: "Diaphragm Valve (Sanitary)", category: "valves", emoji: "🧼", description: "Manual valve for pharmaceutical/food processing.", specs: "Body: SS316L · Diaphragm: EPDM/PTFE · Mirror Polish" },
    { id: 82, name: "Pinch Valve (Pneumatic)", category: "valves", emoji: "🤏", description: "Ideal for abrasive slurries and powders.", specs: "Sleeve Material: Natural Rubber · Full Bore" },
    { id: 83, name: "Angle Seat Valve", category: "valves", emoji: "📐", description: "Pneumatically actuated valve for steam/water.", specs: "Actuator: Polyamide/SS · Media Temp: Up to 180°C" },
    { id: 84, name: "Safety Relief Valve (Brass)", category: "valves", emoji: "🚨", description: "Prevents over-pressurization in air tanks.", specs: "Set Pressure: 1–10 Bar · Thread: ¼\" to 1\"" },
    { id: 85, name: "High Pressure Ball Valve (10000 PSI)", category: "valves", emoji: "💎", description: "Extreme pressure control for oil and gas.", specs: "Material: Duplex Steel · Seal: PEEK · Size: ¼\" to 1\"" },
    { id: 86, name: "Flush Bottom Tank Valve", category: "valves", emoji: "🚽", description: "Discharges material from the bottom of a tank.", specs: "Type: Disc Opening into Tank · Material: SS316" },
    { id: 87, name: "Pressure Reducing Valve (Water)", category: "valves", emoji: "📉", description: "Maintains constant outlet pressure for water lines.", specs: "Body: Bronze · Range: 1–6 Bar · End: Screwed" },
    { id: 88, name: "Lockout Valve (LOTO)", category: "valves", emoji: "🔒", description: "Safety valve that can be locked in the 'off' position.", specs: "Standard: OSHA Compliant · Port: ¼\" to ¾\"" },
    { id: 89, name: "Pulse Valve (Dust Collector)", category: "valves", emoji: "💓", description: "High-flow valve for cleaning filter bags.", specs: "Type: Right Angle · Diaphragm: Nitrile Long Life" },
    { id: 90, name: "Dual Coil Solenoid Valve", category: "valves", emoji: "🧲", description: "Memory function directional control valve.", specs: "Type: 5/2 Way Double Solenoid · Voltage: 110V AC" },
    { id: 91, name: "Expanded PTFE Sheet", category: "sheets", emoji: "🍞", description: "Soft, highly compressible Teflon for uneven flanges.", specs: "Chemical Range: pH 0–14 · Food Grade Approved" },
    { id: 92, name: "Pure Graphite Ribbon Tape", category: "sheets", emoji: "🎞️", description: "Self-adhesive tape for emergency gasket repairs.", specs: "Temp: 600°C · Width: 10–50mm" },
    { id: 93, name: "Ceramic Fiber Paper", category: "sheets", emoji: "📄", description: "High-temp insulation for furnaces and kilns.", specs: "Max Temp: 1260°C · Thickness: 2–5mm" },
    { id: 94, name: "Synthetic Rubber Gasket (EPDM)", category: "sheets", emoji: "⚫", description: "Excellent resistance to UV, ozone, and weathering.", specs: "Thickness: 1.5–6mm · Color: Black" },
    { id: 95, name: "Felt Sheet (Wool)", category: "sheets", emoji: "🧶", description: "Used for oil wicking and vibration damping.", specs: "Density: High · Thickness: 3–12mm" },
    { id: 96, name: "Viton O-Ring Kit", category: "sheets", emoji: "⭕", description: "Assortment of high-temp chemical resistant rings.", specs: "Hardness: 75 Shore A · Metric & Inch Sizes" },
    { id: 97, name: "Hydraulic Seal Kit", category: "sheets", emoji: "📦", description: "Includes wiper seals, rod seals, and piston seals.", specs: "Customized for JCB/Caterpillar/Industrial Jacks" },
    { id: 98, name: "Liquid Gasket Maker (Grey)", category: "sheets", emoji: "🧴", description: "RTV Silicone for engine and machine sealing.", specs: "Oil Resistant · Sensor Safe · 85g Tube" },
    { id: 99, name: "Mica Sheet (Natural)", category: "sheets", emoji: "💎", description: "High dielectric strength for electrical insulation.", specs: "Grade: Muscovite · Temp: Up to 600°C" },
    { id: 100, name: "Asbestos Rope (Round)", category: "sheets", emoji: "🧶", description: "Sealing for boiler doors and furnace joints.", specs: "Size: 6–50mm · Temp: 450°C" },
    { id: 101, name: "Thermoplastic Hose (R7)", category: "tubes", emoji: "🐍", description: "Non-conductive hydraulic hose for utility trucks.", specs: "Material: Polyester Tube · Synthetic Fiber Braid" },
    { id: 102, name: "PTFE Lined Smooth Bore Hose", category: "tubes", emoji: "🍦", description: "Chemical transfer hose with SS304 braiding.", specs: "Corrosion Proof · Temp: −60 to +260°C" },
    { id: 103, name: "Layflat Discharge Hose", category: "tubes", emoji: "🌊", description: "Collapsible hose for high-volume water pumping.", specs: "Size: 2\" to 8\" · Material: PVC/Nitrile Blend" },
    { id: 104, name: "Composite Chemical Hose", category: "tubes", emoji: "🌈", description: "Multi-layer hose for acids and solvents.", specs: "Reinforcement: Inner/Outer Wire Galv. Steel" },
    { id: 105, name: "Air/Water Hose (Yellow)", category: "tubes", emoji: "🟡", description: "Heavy-duty rubber hose for construction sites.", specs: "Working Pressure: 20 Bar · Burst: 60 Bar" },
    { id: 106, name: "Sandblast Hose", category: "tubes", emoji: "🏖️", description: "Highly abrasion-resistant rubber hose.", specs: "Tube: Thick Antistatic NR · Cover: Weather Resistant" },
    { id: 107, name: "Silicone Vacuum Tube", category: "tubes", emoji: "🌡️", description: "High-heat flexible tubing for automotive/lab.", specs: "Wall: Thick · Color: Red/Blue/Clear" },
    { id: 108, name: "Pneumatic Coil with Fittings", category: "tubes", emoji: "🧬", description: "Pre-assembled spiral hose with swivel nuts.", specs: "Length: 5m/10m/15m · Ready to Use" },
    { id: 109, name: "Suction Hose (Heavy Duty)", category: "tubes", emoji: "🐘", description: "Rigid PVC helix reinforced suction hose.", specs: "Usage: Mud, Gravel, Water · Size: up to 12\"" },
    { id: 110, name: "LPG Rubber Hose", category: "tubes", emoji: "🔥", description: "High-safety hose for industrial gas connection.", specs: "Standard: IS 9573 · Reinforcement: Synthetic Yarn" },
    { id: 111, name: "Pneumatic Impact Wrench (½\")", category: "tubes", emoji: "🔧", description: "High-torque air tool for automotive assembly.", specs: "Max Torque: 600 Nm · Air Consumption: 4 CFM" },
    { id: 112, name: "Air Die Grinder (6mm)", category: "tubes", emoji: "🖍️", description: "Handheld tool for grinding and polishing.", specs: "Speed: 22,000 RPM · Collet Size: 3mm/6mm" },
    { id: 113, name: "Pneumatic Riveter", category: "tubes", emoji: "🔫", description: "Automatic tool for industrial riveting.", specs: "Capacity: Up to 4.8mm Rivets · High Traction" },
    { id: 114, name: "Air Filter for Spray Gun", category: "tubes", emoji: "🌫️", description: "Miniature inline filter to remove moisture.", specs: "Material: Polycarbonate · Thread: ¼\" NPS" },
    { id: 115, name: "Digital Tire Inflator", category: "tubes", emoji: "🎈", description: "Precision gauge with air release trigger.", specs: "Accuracy: ±1% · Backlit LCD Display" },
    { id: 116, name: "Pneumatic Scraper", category: "tubes", emoji: "🪒", description: "Tool for removing gaskets and rust.", specs: "Stroke Speed: 3200 BPM · Material: Steel Body" },
    { id: 117, name: "Air Nibbler", category: "tubes", emoji: "✂️", description: "Cuts sheet metal without distortion.", specs: "Cutting Capacity: 1.6mm Steel · 2.0mm Aluminum" },
    { id: 118, name: "Gravity Feed Spray Gun (W-71)", category: "tubes", emoji: "🎨", description: "Universal spray gun for industrial finishing.", specs: "Nozzle: 1.5mm · Pot Capacity: 400ml" },
    { id: 119, name: "Texture Spray Gun (Pneumatic)", category: "tubes", emoji: "🧱", description: "Used for wall coatings and textured paints.", specs: "Hopper Size: 5L · Nozzles: 4mm/6mm/8mm" },
    { id: 120, name: "Pressure Feed Tank (10L)", category: "tubes", emoji: "🥘", description: "Paint tank for large scale continuous spraying.", specs: "Max Pressure: 3 Bar · Includes Regulator" },
    { id: 121, name: "Gauge Snubber (SS316)", category: "pipe-fittings", emoji: "📉", description: "Protects pressure gauges from pressure spikes and surges.", specs: "Connection: ½\" NPT · Material: SS316 · Type: Adjustable" },
    { id: 122, name: "Siphon (Q-Type / U-Type)", category: "pipe-fittings", emoji: "➰", description: "Protects gauges from high-temperature steam damage.", specs: "Material: Carbon Steel/SS316 · Max Temp: 400°C" },
    { id: 123, name: "Thermowell (Bar Stock)", category: "pipe-fittings", emoji: "🌡️", description: "Protective housing for industrial temperature sensors.", specs: "Type: Flanged/Screwed · Insertion Length: 100–500mm" },
    { id: 124, name: "Condensate Pot", category: "pipe-fittings", emoji: "🏺", description: "Captures condensate and protects instruments in steam lines.", specs: "Material: Seamless Pipe A106 Gr.B · Pressure: 3000 PSI" },
    { id: 125, name: "Air Header / Distribution Manifold", category: "pipe-fittings", emoji: "🍴", description: "Centralized distribution point for multiple air instruments.", specs: "Inlet: 1\" · Outlets: 4–12 Nos (¼\" Ball Valves)" },
    { id: 126, name: "Flareless Tube Fitting (Single Ferrule)", category: "pipe-fittings", emoji: "🔩", description: "Bite-type fitting for hydraulic and heavy-duty pneumatic lines.", specs: "Standard: DIN 2353 · Material: Steel/Stainless Steel" },
    { id: 127, name: "Orifice Plate (SS316)", category: "pipe-fittings", emoji: "💿", description: "Primary flow element for differential pressure flow meters.", specs: "Type: Concentric · Material: SS316 · Standard: ISO 5167" },
    { id: 128, name: "Venturi Tube", category: "pipe-fittings", emoji: "⏳", description: "High-accuracy flow measurement device for large pipelines.", specs: "Material: Cast Iron/SS · Low Pressure Loss" },
    { id: 129, name: "Magnetic Level Gauge", category: "pipe-fittings", emoji: "📏", description: "Safe visual level indication for high-pressure tanks.", specs: "Body: SS316 · Indicator: Bi-Color Flappers · C-C: Custom" },
    { id: 130, name: "Sight Flow Indicator (Double Window)", category: "pipe-fittings", emoji: "👁️", description: "Visual inspection tool for flow monitoring.", specs: "Glass: Toughened Borosilicate · End: Flanged/Screwed" },
    { id: 131, name: "Relief Valve (Pilot Operated)", category: "valves", emoji: "🌋", description: "High-capacity safety valve for chemical process lines.", specs: "Set Pressure: Up to 50 Bar · Material: SS316/Alloy 20" },
    { id: 132, name: "Double Block and Bleed Valve (DBB)", category: "valves", emoji: "🍱", description: "Multi-port valve for critical isolation and safety.", specs: "Configuration: Ball-Needle-Ball · Pressure: Class 2500" },
    { id: 133, name: "Excess Flow Valve", category: "valves", emoji: "🚫", description: "Automatically shuts off flow if a line ruptures.", specs: "Material: SS316 · Resets automatically after repair" },
    { id: 134, name: "Plug Valve (Lubricated)", category: "valves", emoji: "🔌", description: "Quarter-turn valve for slurry and heavy oil.", specs: "Type: Sleeved/Lubricated · Material: Ductile Iron" },
    { id: 135, name: "Diaphragm Operated Control Valve", category: "valves", emoji: "📡", description: "Pneumatic control valve for automated modulation.", specs: "Inlet Signal: 3–15 PSI / 4–20mA · Fail-Safe: Open/Closed" },
    { id: 136, name: "PTFE Envelope Gasket", category: "sheets", emoji: "✉️", description: "Combines chemical resistance of PTFE with rubber elasticity.", specs: "Core: EPDM/Viton · Outer: Pure PTFE · Size: up to 24\"" },
    { id: 137, name: "Graphite Packing Ring (Die Formed)", category: "sheets", emoji: "💍", description: "Precision rings for valve stem and pump sealing.", specs: "Material: Pure Flexible Graphite · Temp: up to 650°C" },
    { id: 138, name: "Kevlar Packing (Braided)", category: "sheets", emoji: "🛡️", description: "High-strength packing for abrasive media and slurries.", specs: "Material: Aramid Fiber · Speed: 15 m/s" },
    { id: 139, name: "PTFE Impregnated Asbestos Packing", category: "sheets", emoji: "🧶", description: "Universal packing for chemicals and steam.", specs: "Color: White · Construction: Lattice Braid" },
    { id: 140, name: "O-Ring Cord (Splicing Kit)", category: "sheets", emoji: "➰", description: "Allows for custom size O-ring creation on-site.", specs: "Material: NBR/Viton · Diameter: 2–12mm" },
    { id: 141, name: "Mechanical Seal (Single Spring)", category: "sheets", emoji: "🎡", description: "Standard shaft seal for centrifugal pumps.", specs: "Face: Carbon/Ceramic · Elastomer: NBR/Viton" },
    { id: 142, name: "Teflon Rope (Valve Packing)", category: "sheets", emoji: "🧵", description: "Soft 100% PTFE rope for valve maintenance.", specs: "Width: 3–25mm · Chemical Resistant" },
    { id: 143, name: "Gasket Cutter (Industrial)", category: "sheets", emoji: "✂️", description: "Tool for cutting circular gaskets accurately.", specs: "Range: 50–600mm · Heavy Duty Steel" },
    { id: 144, name: "Anti-Seize Compound (Copper)", category: "sheets", emoji: "🧴", description: "Prevents seizing and galling of threaded parts.", specs: "Temp: up to 1100°C · Volume: 500g Tin" },
    { id: 145, name: "Anaerobic Retaining Compound", category: "sheets", emoji: "🧪", description: "Secures bearings and cylindrical parts.", specs: "Brand: Loctite Type · High Strength" },
    { id: 146, name: "Air Logic Valve (NOT/AND/OR)", category: "pneumatic-fittings", emoji: "🧠", description: "Performs logical operations using air signals.", specs: "Type: Miniature · Port: M5 · No Electricity required" },
    { id: 147, name: "Pneumatic Counter (Totalizer)", category: "pneumatic-fittings", emoji: "🔢", description: "Counts pulses for machine cycle monitoring.", specs: "Digits: 6-Digit · Manual Reset · Air Driven" },
    { id: 148, name: "Two-Hand Safety Control Unit", category: "pneumatic-fittings", emoji: "👐", description: "Ensures operator safety by requiring two-hand input.", specs: "Response: Simultaneous · Standard: ISO 13849" },
    { id: 149, name: "Vacuum Pressure Switch", category: "pneumatic-fittings", emoji: "📟", description: "Digital switch for monitoring vacuum levels.", specs: "Output: NPN/PNP · Display: 3-Color LCD" },
    { id: 150, name: "Rodless Cylinder (Magnetic)", category: "pneumatic-fittings", emoji: "🚄", description: "Long stroke cylinder with compact footprint.", specs: "Bore: 16–63mm · Stroke: up to 2000mm" },
    { id: 151, name: "SS 304 U-Bolt with Nuts", category: "pipe-fittings", emoji: "🧲", description: "Pipe support hardware for hanging and fixing.", specs: "Pipe Size: ½\" to 12\" · Includes 2 Nuts" },
    { id: 152, name: "Spring Pipe Hanger", category: "pipe-fittings", emoji: "➿", description: "Supports pipes while allowing thermal expansion.", specs: "Load Capacity: Variable · Finish: Galv/Epoxy" },
    { id: 153, name: "Threaded Rod (SS316)", category: "pipe-fittings", emoji: "📏", description: "Continuous thread rod for support systems.", specs: "Length: 1m/2m · Thread: Metric/UNC" },
    { id: 154, name: "Expanding Metal Bellows", category: "pipe-fittings", emoji: "🪗", description: "Absorbs axial and lateral movement in pipelines.", specs: "Material: SS304/SS321 · End: Weld/Flange" },
    { id: 155, name: "Hydraulic Quick Release (ISO-A)", category: "tubes", emoji: "🐆", description: "Standard coupler for tractors and mobile hydraulics.", specs: "Size: ½\" · Material: Steel Zinc Plated" },
    { id: 156, name: "Worm Drive Hose Clamp", category: "tubes", emoji: "💍", description: "Secures hoses to fittings effectively.", specs: "Material: SS304 · Size Range: 8–200mm" },
    { id: 157, name: "T-Bolt Heavy Duty Clamp", category: "tubes", emoji: "🦾", description: "High-torque clamp for reinforced suction hoses.", specs: "Width: 20mm · Bolt: High Tensile Steel" },
    { id: 158, name: "PVC Braided Hose (Transparent)", category: "tubes", emoji: "🥤", description: "Lightweight hose for water and pneumatic lines.", specs: "Material: Virgin PVC · Braid: High Tenacity Yarn" },
    { id: 159, name: "Nitrile Fuel Hose", category: "tubes", emoji: "⛽", description: "Oil and gasoline resistant rubber hose.", specs: "Standard: SAE J30 R7 · Working Press: 10 Bar" },
    { id: 160, name: "Pneumatic Impact Socket Set", category: "tubes", emoji: "📦", description: "Hardened sockets for air impact wrenches.", specs: "Drive: ½\" · Material: Chrome Molybdenum" },
    { id: 161, name: "Air Grease Gun (Pneumatic)", category: "tubes", emoji: "🧴", description: "Automatic lubrication tool for machinery.", specs: "Capacity: 400cc · Pressure: 6 Bar" },
    { id: 162, name: "Mini Air Compressor (Portable)", category: "tubes", emoji: "🧳", description: "Compact unit for small pneumatic testing.", specs: "Voltage: 220V · Tank: 9L · Oil-Free" },
    { id: 163, name: "Welding Hose (Dual Line)", category: "tubes", emoji: "🔥", description: "Twin hose for Oxygen and Acetylene.", specs: "Color: Red & Blue · Standard: ISO 3821" },
    { id: 164, name: "Fire Hydrant Valve (Oblique)", category: "valves", emoji: "🚒", description: "Industrial fire safety landing valve.", specs: "End: Flanged · Material: Gunmetal/SS304" },
    { id: 165, name: "Air Release Valve (Water)", category: "valves", emoji: "🌬️", description: "Vents air from water distribution pipelines.", specs: "Type: Kinetic · Body: CI/DI · Size: up to 200mm" },
    { id: 166, name: "Silent Check Valve (Spring)", category: "valves", emoji: "🔇", description: "Prevents water hammer in pumping systems.", specs: "End: Wafer/Flanged · Material: Cast Steel" },
    { id: 167, name: "Thermoplastic Ball Valve (PVC)", category: "valves", emoji: "🔵", description: "Corrosion-proof valve for acid and water lines.", specs: "Seal: EPDM · End: Socket/Threaded" },
    { id: 168, name: "Bronze Gate Valve (Class 125)", category: "valves", emoji: "🥉", description: "Standard utility valve for low-pressure steam.", specs: "Stem: Rising/Non-rising · Standard: MSS SP-80" },
    { id: 169, name: "Y-Type Control Valve", category: "valves", emoji: "ϒ", description: "High-flow pneumatic seat valve.", specs: "Operation: NC/NO · Actuator: Stainless Steel" },
    { id: 170, name: "Needle Valve (Panel Mount)", category: "valves", emoji: "📌", description: "Instrumentation valve designed for dashboard install.", specs: "Nut: Included · Material: Brass/SS316" },
    { id: 171, name: "SS 304 Forged Tee (Threaded)", category: "pipe-fittings", emoji: "⊤", description: "High-pressure threaded branch connection.", specs: "Class: 3000 · Standard: ASME B16.11" },
    { id: 172, name: "SS Pipe Cross", category: "pipe-fittings", emoji: "✢", description: "Connects four pipelines at right angles.", specs: "Sch 40 · Seamless · Grade 316" },
    { id: 173, name: "SS Socket Weld Union", category: "pipe-fittings", emoji: "💍", description: "Facilitates easy removal of line components.", specs: "Class 3000 · Standard ASME B16.11" },
    { id: 174, name: "SS Concentric Swage Nipple", category: "pipe-fittings", emoji: "🍾", description: "Reducing nipple for connecting buttweld to threaded.", specs: "Material: A182 F316 · Length: 100mm" },
    { id: 175, name: "Alloy Steel Pipe Fitting (WP11)", category: "pipe-fittings", emoji: "🩶", description: "For high-temperature power plant piping.", specs: "Material: ASTM A234 WP11 · CL1/CL2" },
    { id: 176, name: "Duplex 2205 Elbow", category: "pipe-fittings", emoji: "♊", description: "Super-strength corrosion-resistant elbow.", specs: "Used in chemical process plants" },
    { id: 177, name: "Incoloy 825 Pipe Cap", category: "pipe-fittings", emoji: "💎", description: "Specialty cap for high acid environments.", specs: "ASTM B366 · Seamless" },
    { id: 178, name: "Titanium Gr. 2 Fittings", category: "pipe-fittings", emoji: "🛸", description: "Ultra-light and high-corrosion resistance.", specs: "Usage: Aerospace/Desalination" },
    { id: 179, name: "Cupro Nickel 70/30 Elbow", category: "pipe-fittings", emoji: "🌊", description: "Best for marine and salt-water cooling lines.", specs: "Resists bio-fouling" },
    { id: 180, name: "Hastelloy C276 Needle Valve", category: "valves", emoji: "☢️", description: "Extreme corrosion resistance for chemical reactors.", specs: "Pressure: 10000 PSI" },
];

// ── Category display names ──
const CAT_LABELS = {
    'all':                'All Products',
    'pipe-fittings':      'Pipe & Tube Fittings',
    'pneumatic-fittings': 'Pneumatic Fittings',
    'valves':             'Valves & Regulators',
    'sheets':             'Gaskets & Sheets',
    'tubes':              'Tubes, Hoses & Tools',
};

// ── State ──
let currentCat = 'all';
let currentSearch = '';
let currentSort = 'default';

// ─────────────────────────────────────────────
// Init on DOM ready
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    buildCategoryCounts();
    bindEvents();
    readURLHash();
    render();
});

// ─────────────────────────────────────────────
// Build category counts in sidebar
// ─────────────────────────────────────────────
function buildCategoryCounts() {
    const cats = ['pipe-fittings', 'pneumatic-fittings', 'valves', 'sheets', 'tubes'];
    cats.forEach(cat => {
        const count = productCatalog.filter(p => p.category === cat).length;
        const el = document.querySelector(`[data-count="${cat}"]`);
        if (el) el.textContent = count;
    });
    const allEl = document.querySelector('[data-count="all"]');
    if (allEl) allEl.textContent = productCatalog.length;
}

// ─────────────────────────────────────────────
// Bind UI events
// ─────────────────────────────────────────────
function bindEvents() {
    // Search input — debounced
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearch = searchInput.value.trim().toLowerCase();
                currentCat = 'all';
                updateCatButtons('all');
                render();
            }, 220);
        });
    }

    // Category buttons
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            currentCat = cat;
            currentSearch = '';
            const si = document.getElementById('searchInput');
            if (si) si.value = '';
            updateCatButtons(cat);
            window.location.hash = cat === 'all' ? '' : cat;
            render();
            // Scroll to top of grid on mobile
            if (window.innerWidth <= 900) {
                document.querySelector('.products-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            render();
        });
    }

    // Mobile sidebar toggle
    const mobileBtn = document.getElementById('mobileFilterBtn');
    const sidebar = document.getElementById('sidebar');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-open');
            mobileBtn.textContent = sidebar.classList.contains('sidebar-open') ? '✕ Close' : '☰ Filters';
        });
    }

    // Modal close
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('quoteModal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('modalSubmit')?.addEventListener('click', submitModal);

    // Keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// ─────────────────────────────────────────────
// URL hash support (e.g. products.html#valves)
// ─────────────────────────────────────────────
function readURLHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && CAT_LABELS[hash]) {
        currentCat = hash;
        updateCatButtons(hash);
    }
}

// ─────────────────────────────────────────────
// Filter + Sort + Render
// ─────────────────────────────────────────────
function render() {
    let results = [...productCatalog];

    // Filter by category
    if (currentCat !== 'all') {
        results = results.filter(p => p.category === currentCat);
    }

    // Filter by search
    if (currentSearch) {
        results = results.filter(p =>
            p.name.toLowerCase().includes(currentSearch) ||
            p.description.toLowerCase().includes(currentSearch) ||
            p.specs.toLowerCase().includes(currentSearch) ||
            p.category.toLowerCase().includes(currentSearch)
        );
    }

    // Sort
    if (currentSort === 'az') {
        results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'za') {
        results.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === 'cat') {
        results.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    }

    renderGrid(results);
    updateToolbar(results.length);
}

function renderGrid(products) {
    const grid = document.getElementById('productsGrid');
    const empty = document.getElementById('emptyState');
    if (!grid) return;

    if (products.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.style.display = 'flex';
        return;
    }
    if (empty) empty.style.display = 'none';

    grid.innerHTML = products.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="product-img">${p.emoji}</div>
            <div class="product-info">
                <span class="product-cat-tag">${CAT_LABELS[p.category] || p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.description}</p>
                <div class="product-specs">${p.specs}</div>
                <button class="btn-quote" onclick="openModal(${p.id})">Get Quote</button>
            </div>
        </div>
    `).join('');
}

function updateToolbar(count) {
    const rc = document.getElementById('resultCount');
    const badge = document.getElementById('activeCatBadge');
    if (rc) {
        rc.innerHTML = `Showing <strong>${count}</strong> product${count !== 1 ? 's' : ''}`;
    }
    if (badge) {
        if (currentCat !== 'all' || currentSearch) {
            const label = currentSearch
                ? `Search: "${currentSearch}"`
                : CAT_LABELS[currentCat];
            badge.textContent = label;
            badge.style.display = 'inline-flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

function updateCatButtons(activeCat) {
    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === activeCat);
    });
}

// ─────────────────────────────────────────────
// Reset filters (called from empty state)
// ─────────────────────────────────────────────
function resetFilters() {
    currentCat = 'all';
    currentSearch = '';
    currentSort = 'default';
    const si = document.getElementById('searchInput');
    if (si) si.value = '';
    const ss = document.getElementById('sortSelect');
    if (ss) ss.value = 'default';
    updateCatButtons('all');
    window.location.hash = '';
    render();
}

// ─────────────────────────────────────────────
// Quote Modal
// ─────────────────────────────────────────────
function openModal(productId) {
    const product = productCatalog.find(p => p.id === productId);
    if (!product) return;
    const modal = document.getElementById('quoteModal');
    const nameEl = document.getElementById('modalProductName');
    if (nameEl) nameEl.textContent = product.name;
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Pre-fill notes
        const notes = document.getElementById('mfNotes');
        if (notes) notes.value = '';
    }
}

function closeModal() {
    const modal = document.getElementById('quoteModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function submitModal() {
    const name = document.getElementById('mfName')?.value.trim();
    const phone = document.getElementById('mfPhone')?.value.trim();
    const email = document.getElementById('mfEmail')?.value.trim();
    const productName = document.getElementById('modalProductName')?.textContent;
    const notes = document.getElementById('mfNotes')?.value.trim();

    if (!name || !phone) {
        alert('Please enter your name and phone number.');
        return;
    }

    // Build mailto link
    const subject = encodeURIComponent(`Product Enquiry: ${productName}`);
    const body = encodeURIComponent(
        `Product: ${productName}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNotes: ${notes}`
    );
    window.location.href = `mailto:vijayalakshmienterprise1@gmail.com?subject=${subject}&body=${body}`;
    closeModal();
}
