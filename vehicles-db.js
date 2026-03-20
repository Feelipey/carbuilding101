// ═══════════════════════════════════════════════════════════
// CarBuilding101 — Vehicle & Parts Database
// Real makes, models, years, trims, engines
// Parts are platform-specific — Tacoma gets truck parts,
// Supra gets sports car parts, etc.
// ═══════════════════════════════════════════════════════════

const VEHICLE_DB = {

  Toyota: {
    "GR Supra": {
      years: [2020,2021,2022,2023,2024],
      trims: {
        "3.0 Base":       { engine:"3.0L B58 Inline-6 Turbo", hp:382, torque:368, driven:"RWD", trans:"8-Spd Auto (ZF8)" },
        "3.0 Premium":    { engine:"3.0L B58 Inline-6 Turbo", hp:382, torque:368, driven:"RWD", trans:"8-Spd Auto (ZF8)" },
        "A91 Edition":    { engine:"3.0L B58 Inline-6 Turbo", hp:382, torque:368, driven:"RWD", trans:"8-Spd Auto (ZF8)" },
        "2.0":            { engine:"2.0L B48 Inline-4 Turbo",  hp:255, torque:295, driven:"RWD", trans:"8-Spd Auto (ZF8)" },
      },
      platform:"B58",
      type:"sports"
    },
    "GR86": {
      years: [2022,2023,2024],
      trims: {
        "Base":     { engine:"2.4L FA24 Boxer-4 NA", hp:228, torque:184, driven:"RWD", trans:"6-Spd Manual" },
        "Premium":  { engine:"2.4L FA24 Boxer-4 NA", hp:228, torque:184, driven:"RWD", trans:"6-Spd Manual / 6-Spd Auto" },
      },
      platform:"FA24",
      type:"sports"
    },
    "Tacoma": {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "SR (4-cyl)":         { engine:"2.7L 2TR-FE Inline-4 NA", hp:159, torque:180, driven:"RWD/4WD", trans:"5-Spd Manual / 6-Spd Auto" },
        "SR5 (V6)":           { engine:"3.5L 2GR-FKS V6 NA",      hp:278, torque:265, driven:"RWD/4WD", trans:"6-Spd Manual / 6-Spd Auto" },
        "TRD Sport (V6)":     { engine:"3.5L 2GR-FKS V6 NA",      hp:278, torque:265, driven:"RWD/4WD", trans:"6-Spd Manual / 6-Spd Auto" },
        "TRD Off-Road (V6)":  { engine:"3.5L 2GR-FKS V6 NA",      hp:278, torque:265, driven:"4WD",     trans:"6-Spd Auto" },
        "TRD Pro (V6)":       { engine:"3.5L 2GR-FKS V6 NA",      hp:278, torque:265, driven:"4WD",     trans:"6-Spd Auto" },
        "Limited (V6)":       { engine:"3.5L 2GR-FKS V6 NA",      hp:278, torque:265, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "Tacoma i-Force Max": { engine:"2.4L T24A-FTS Turbo Hybrid",hp:326,torque:465, driven:"4WD",     trans:"8-Spd Auto (2024+)" },
      },
      platform:"2GR-FKS / 2TR-FE",
      type:"truck"
    },
    "Tundra": {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "SR (V8)":          { engine:"5.7L 3UR-FE V8 NA",   hp:381, torque:401, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "SR5 (V8)":         { engine:"5.7L 3UR-FE V8 NA",   hp:381, torque:401, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "Limited (V8)":     { engine:"5.7L 3UR-FE V8 NA",   hp:381, torque:401, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "Platinum (V8)":    { engine:"5.7L 3UR-FE V8 NA",   hp:381, torque:401, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "TRD Pro (V8)":     { engine:"5.7L 3UR-FE V8 NA",   hp:381, torque:401, driven:"4WD",     trans:"6-Spd Auto" },
        "Capstone (iForce)":{ engine:"3.5L V35A-FTS Twin-Turbo V6 Hybrid",hp:437,torque:583, driven:"4WD", trans:"10-Spd Auto (2022+)" },
      },
      platform:"3UR-FE / V35A",
      type:"truck"
    },
    "4Runner": {
      years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "SR5":        { engine:"4.0L 1GR-FE V6 NA", hp:270, torque:278, driven:"RWD/4WD", trans:"5-Spd Auto" },
        "TRD Sport":  { engine:"4.0L 1GR-FE V6 NA", hp:270, torque:278, driven:"4WD",     trans:"5-Spd Auto" },
        "TRD Off-Road":{ engine:"4.0L 1GR-FE V6 NA",hp:270, torque:278, driven:"4WD",     trans:"5-Spd Auto" },
        "TRD Pro":    { engine:"4.0L 1GR-FE V6 NA", hp:270, torque:278, driven:"4WD",     trans:"5-Spd Auto" },
        "Limited":    { engine:"4.0L 1GR-FE V6 NA", hp:270, torque:278, driven:"RWD/4WD", trans:"5-Spd Auto" },
      },
      platform:"1GR-FE",
      type:"suv"
    },
    "Corolla GR": {
      years: [2023,2024],
      trims: {
        "Core":    { engine:"1.6L G16E-GTS Inline-3 Turbo", hp:300, torque:273, driven:"AWD", trans:"6-Spd Manual (iMT)" },
        "Circuit": { engine:"1.6L G16E-GTS Inline-3 Turbo", hp:300, torque:273, driven:"AWD", trans:"6-Spd Manual (iMT)" },
        "Morizo Edition":{ engine:"1.6L G16E-GTS Inline-3 Turbo",hp:300,torque:273,driven:"AWD",trans:"6-Spd Manual" },
      },
      platform:"G16E-GTS",
      type:"sports"
    },
  },

  Honda: {
    "Civic Type R": {
      years: [2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "FK8 (2017–2021)": { engine:"2.0L K20C1 Inline-4 Turbo", hp:306, torque:295, driven:"FWD", trans:"6-Spd Manual" },
        "FL5 (2022+)":     { engine:"2.0L K20C1 Inline-4 Turbo", hp:315, torque:310, driven:"FWD", trans:"6-Spd Manual" },
      },
      platform:"K20C1",
      type:"sports"
    },
    "Civic Si": {
      years: [2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Sedan":    { engine:"1.5L L15B7 Inline-4 Turbo", hp:200, torque:192, driven:"FWD", trans:"6-Spd Manual" },
        "Coupe":    { engine:"1.5L L15B7 Inline-4 Turbo", hp:205, torque:192, driven:"FWD", trans:"6-Spd Manual" },
      },
      platform:"L15B7",
      type:"sports"
    },
    "Accord": {
      years: [2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Sport 1.5T":   { engine:"1.5L L15B7 Turbo", hp:192, torque:192, driven:"FWD", trans:"CVT / 6-Spd Manual" },
        "Sport 2.0T":   { engine:"2.0L K20C4 Turbo",  hp:252, torque:273, driven:"FWD", trans:"10-Spd Auto / 6-Spd Manual" },
        "Touring 2.0T": { engine:"2.0L K20C4 Turbo",  hp:252, torque:273, driven:"FWD", trans:"10-Spd Auto" },
      },
      platform:"K20C4",
      type:"sports"
    },
    "Ridgeline": {
      years: [2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Sport":   { engine:"3.5L V6 NA", hp:280, torque:262, driven:"AWD", trans:"9-Spd Auto" },
        "RTL":     { engine:"3.5L V6 NA", hp:280, torque:262, driven:"AWD", trans:"9-Spd Auto" },
        "Black Edition":{ engine:"3.5L V6 NA",hp:280,torque:262,driven:"AWD",trans:"9-Spd Auto" },
      },
      platform:"J35Y",
      type:"truck"
    },
  },

  Subaru: {
    "WRX": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Base":    { engine:"2.0L EJ255 Boxer-4 Turbo", hp:268, torque:258, driven:"AWD", trans:"6-Spd Manual / CVT" },
        "Premium": { engine:"2.0L EJ255 Boxer-4 Turbo", hp:268, torque:258, driven:"AWD", trans:"6-Spd Manual / CVT" },
        "Limited": { engine:"2.0L EJ255 Boxer-4 Turbo", hp:268, torque:258, driven:"AWD", trans:"6-Spd Manual / CVT" },
        "2022+ Base (FA24F)":  { engine:"2.4L FA24F Boxer-4 Turbo", hp:271, torque:258, driven:"AWD", trans:"6-Spd Manual / CVT" },
      },
      platform:"EJ255 / FA24F",
      type:"sports"
    },
    "WRX STI": {
      years: [2015,2016,2017,2018,2019,2020,2021],
      trims: {
        "Base":    { engine:"2.5L EJ257 Boxer-4 Turbo", hp:310, torque:290, driven:"AWD", trans:"6-Spd Manual" },
        "Limited": { engine:"2.5L EJ257 Boxer-4 Turbo", hp:310, torque:290, driven:"AWD", trans:"6-Spd Manual" },
        "S209":    { engine:"2.5L EJ257 Boxer-4 Turbo (forged)", hp:341, torque:330, driven:"AWD", trans:"6-Spd Manual" },
      },
      platform:"EJ257",
      type:"sports"
    },
    "Outback": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "2.5i":           { engine:"2.5L FB25 Boxer-4 NA",   hp:182, torque:176, driven:"AWD", trans:"CVT" },
        "2.5i Premium":   { engine:"2.5L FB25 Boxer-4 NA",   hp:182, torque:176, driven:"AWD", trans:"CVT" },
        "3.6R Limited":   { engine:"3.6L EZ36D Boxer-6 NA",  hp:256, torque:247, driven:"AWD", trans:"5-Spd Auto" },
        "Wilderness":     { engine:"2.4L FA24F Boxer-4 Turbo",hp:260,torque:277, driven:"AWD", trans:"CVT" },
      },
      platform:"FB25 / EZ36D",
      type:"suv"
    },
    "BRZ": {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Limited (FA20)": { engine:"2.0L FA20 Boxer-4 NA",  hp:205, torque:156, driven:"RWD", trans:"6-Spd Manual / 6-Spd Auto" },
        "Premium (FA24)": { engine:"2.4L FA24 Boxer-4 NA",  hp:228, torque:184, driven:"RWD", trans:"6-Spd Manual / 6-Spd Auto" },
      },
      platform:"FA20 / FA24",
      type:"sports"
    },
  },

  Ford: {
    "Mustang GT": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Fastback":        { engine:"5.0L Coyote V8 NA", hp:460, torque:420, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "Convertible":     { engine:"5.0L Coyote V8 NA", hp:460, torque:420, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "California Special":{ engine:"5.0L Coyote V8 NA",hp:460,torque:420, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "Mach 1":          { engine:"5.0L Coyote V8 NA (Voodoo intake)", hp:480, torque:420, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
      },
      platform:"Coyote 5.0",
      type:"muscle"
    },
    "Mustang Shelby GT500": {
      years: [2020,2021,2022,2023,2024],
      trims: {
        "Base":           { engine:"5.2L Predator V8 Supercharged", hp:760, torque:625, driven:"RWD", trans:"7-Spd DCT (Tremec)" },
        "Carbon Fiber Track Pack":{ engine:"5.2L Predator V8 Supercharged",hp:760,torque:625,driven:"RWD",trans:"7-Spd DCT" },
      },
      platform:"Predator 5.2 SC",
      type:"muscle"
    },
    "F-150": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "XL (3.3L V6)":       { engine:"3.3L Ti-VCT V6 NA",    hp:290, torque:265, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "XLT (2.7L EcoBoost)":{ engine:"2.7L EcoBoost V6 Turbo",hp:325,torque:400, driven:"RWD/4WD", trans:"10-Spd Auto" },
        "Lariat (3.5L EcoBoost)":{ engine:"3.5L EcoBoost V6 TT",hp:400,torque:500, driven:"RWD/4WD",trans:"10-Spd Auto" },
        "Raptor (3.5L EcoBoost)":{ engine:"3.5L High-Output EcoBoost TT",hp:450,torque:510,driven:"4WD",trans:"10-Spd Auto" },
        "Limited (5.0L V8)":  { engine:"5.0L Coyote V8 NA",     hp:400, torque:410, driven:"RWD/4WD", trans:"10-Spd Auto" },
        "Tremor (3.5L EcoBoost)":{ engine:"3.5L EcoBoost V6 TT",hp:400,torque:500, driven:"4WD",     trans:"10-Spd Auto" },
      },
      platform:"EcoBoost / Coyote",
      type:"truck"
    },
    "Bronco": {
      years: [2021,2022,2023,2024],
      trims: {
        "Base (2.3L)":     { engine:"2.3L EcoBoost Inline-4 Turbo", hp:300, torque:325, driven:"4WD", trans:"7-Spd Manual / 10-Spd Auto" },
        "Big Bend (2.3L)": { engine:"2.3L EcoBoost Inline-4 Turbo", hp:300, torque:325, driven:"4WD", trans:"7-Spd Manual / 10-Spd Auto" },
        "Badlands (2.7L)": { engine:"2.7L EcoBoost V6 TT",          hp:330, torque:415, driven:"4WD", trans:"10-Spd Auto" },
        "Raptor (3.0L)":   { engine:"3.0L EcoBoost V6 TT",          hp:418, torque:440, driven:"4WD", trans:"10-Spd Auto" },
        "Wildtrak (2.7L)": { engine:"2.7L EcoBoost V6 TT",          hp:330, torque:415, driven:"4WD", trans:"10-Spd Auto" },
      },
      platform:"EcoBoost",
      type:"suv"
    },
    "Focus RS": {
      years: [2016,2017,2018],
      trims: {
        "Base": { engine:"2.3L EcoBoost Inline-4 Turbo", hp:350, torque:350, driven:"AWD", trans:"6-Spd Manual" },
      },
      platform:"EcoBoost 2.3",
      type:"sports"
    },
  },

  Chevrolet: {
    "Camaro SS": {
      years: [2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "1LE":         { engine:"6.2L LT1 V8 NA", hp:455, torque:455, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "Base":        { engine:"6.2L LT1 V8 NA", hp:455, torque:455, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "Convertible": { engine:"6.2L LT1 V8 NA", hp:455, torque:455, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
      },
      platform:"LT1 V8",
      type:"muscle"
    },
    "Camaro ZL1": {
      years: [2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Coupe":    { engine:"6.2L LT4 V8 Supercharged", hp:650, torque:650, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
        "1LE":      { engine:"6.2L LT4 V8 Supercharged", hp:650, torque:650, driven:"RWD", trans:"6-Spd Manual / 10-Spd Auto" },
      },
      platform:"LT4 SC",
      type:"muscle"
    },
    "Corvette C8": {
      years: [2020,2021,2022,2023,2024],
      trims: {
        "Stingray":  { engine:"6.2L LT2 V8 NA (mid-engine)", hp:495, torque:470, driven:"RWD", trans:"8-Spd DCT" },
        "Z06":       { engine:"5.5L LT6 V8 NA (flat-plane)", hp:670, torque:460, driven:"RWD", trans:"8-Spd DCT" },
        "E-Ray":     { engine:"6.2L LT2 V8 + electric (hybrid)", hp:655, torque:470, driven:"AWD", trans:"8-Spd DCT" },
      },
      platform:"LT2 / LT6",
      type:"sports"
    },
    "Colorado": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "WT (2.5L)":         { engine:"2.5L LCV Inline-4 NA", hp:200, torque:191, driven:"RWD/4WD", trans:"6-Spd Auto" },
        "LT (3.6L V6)":      { engine:"3.6L LGZ V6 NA",       hp:308, torque:275, driven:"RWD/4WD", trans:"8-Spd Auto" },
        "Z71 (3.6L V6)":     { engine:"3.6L LGZ V6 NA",       hp:308, torque:275, driven:"4WD",     trans:"8-Spd Auto" },
        "ZR2 (3.6L V6)":     { engine:"3.6L LGZ V6 NA",       hp:308, torque:275, driven:"4WD",     trans:"8-Spd Auto" },
        "Duramax (2.8L diesel)":{ engine:"2.8L LWN Duramax Turbo-Diesel",hp:186,torque:369,driven:"RWD/4WD",trans:"6-Spd Auto" },
      },
      platform:"LGZ V6 / LCV",
      type:"truck"
    },
    "Silverado 1500": {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "WT (4.3L V6)":        { engine:"4.3L EcoTec3 V6 NA",  hp:285, torque:305, driven:"RWD/4WD", trans:"6-Spd Auto / 8-Spd Auto" },
        "LT (5.3L V8)":        { engine:"5.3L EcoTec3 V8 NA",  hp:355, torque:383, driven:"RWD/4WD", trans:"6-Spd Auto / 8-Spd Auto" },
        "LTZ (6.2L V8)":       { engine:"6.2L EcoTec3 V8 NA",  hp:420, torque:460, driven:"RWD/4WD", trans:"10-Spd Auto" },
        "Trail Boss (5.3L V8)":{ engine:"5.3L EcoTec3 V8 NA",  hp:355, torque:383, driven:"4WD",     trans:"8-Spd Auto" },
        "High Country (6.2L)": { engine:"6.2L EcoTec3 V8 NA",  hp:420, torque:460, driven:"RWD/4WD", trans:"10-Spd Auto" },
      },
      platform:"EcoTec3",
      type:"truck"
    },
  },

  Dodge: {
    "Challenger R/T": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023],
      trims: {
        "Scat Pack":    { engine:"6.4L 392 HEMI V8 NA", hp:485, torque:475, driven:"RWD", trans:"6-Spd Manual / 8-Spd Auto" },
        "Scat Pack Widebody":{ engine:"6.4L 392 HEMI V8 NA",hp:485,torque:475,driven:"RWD",trans:"8-Spd Auto" },
        "R/T":          { engine:"5.7L HEMI V8 NA",      hp:375, torque:410, driven:"RWD", trans:"6-Spd Manual / 8-Spd Auto" },
      },
      platform:"HEMI",
      type:"muscle"
    },
    "Challenger Hellcat": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023],
      trims: {
        "SRT Hellcat":       { engine:"6.2L Hellcat HEMI V8 Supercharged", hp:707, torque:650, driven:"RWD", trans:"6-Spd Manual / 8-Spd Auto" },
        "SRT Hellcat Redeye":{ engine:"6.2L Hellcat HEMI V8 SC",           hp:797, torque:707, driven:"RWD", trans:"8-Spd Auto" },
        "Demon 170":         { engine:"6.2L Hellcat HEMI V8 SC (E85)",     hp:1025,torque:945, driven:"RWD", trans:"8-Spd Auto" },
      },
      platform:"Hellcat HEMI",
      type:"muscle"
    },
    "Charger": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023],
      trims: {
        "R/T":              { engine:"5.7L HEMI V8 NA",      hp:370, torque:395, driven:"RWD", trans:"8-Spd Auto" },
        "Scat Pack":        { engine:"6.4L 392 HEMI V8 NA",  hp:485, torque:475, driven:"RWD", trans:"8-Spd Auto" },
        "SRT Hellcat":      { engine:"6.2L Hellcat HEMI SC", hp:707, torque:650, driven:"RWD", trans:"8-Spd Auto" },
        "SRT Hellcat Redeye":{ engine:"6.2L Hellcat HEMI SC",hp:797, torque:707, driven:"RWD", trans:"8-Spd Auto" },
      },
      platform:"HEMI",
      type:"muscle"
    },
    "Ram 1500": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Tradesman (5.7L)":   { engine:"5.7L HEMI V8 NA",        hp:395, torque:410, driven:"RWD/4WD", trans:"8-Spd Auto" },
        "Big Horn (5.7L)":    { engine:"5.7L HEMI V8 NA",        hp:395, torque:410, driven:"RWD/4WD", trans:"8-Spd Auto" },
        "Rebel TRX (6.2L SC)":{ engine:"6.2L Hellcat HEMI SC",   hp:702, torque:650, driven:"4WD",     trans:"8-Spd Auto" },
        "Laramie (EcoDiesel)":{ engine:"3.0L EcoDiesel V6 Turbo",hp:260,torque:480,  driven:"RWD/4WD", trans:"8-Spd Auto" },
      },
      platform:"HEMI / EcoDiesel",
      type:"truck"
    },
  },

  Nissan: {
    "GT-R": {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
      trims: {
        "Premium":  { engine:"3.8L VR38DETT V6 Twin-Turbo", hp:565, torque:467, driven:"AWD", trans:"6-Spd DCT" },
        "Track":    { engine:"3.8L VR38DETT V6 Twin-Turbo", hp:565, torque:467, driven:"AWD", trans:"6-Spd DCT" },
        "NISMO":    { engine:"3.8L VR38DETT V6 Twin-Turbo (NISMO tune)", hp:600, torque:481, driven:"AWD", trans:"6-Spd DCT" },
      },
      platform:"VR38DETT",
      type:"sports"
    },
    "370Z": {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
      trims: {
        "Base":     { engine:"3.7L VQ37VHR V6 NA", hp:332, torque:270, driven:"RWD", trans:"6-Spd Manual / 7-Spd Auto" },
        "Sport":    { engine:"3.7L VQ37VHR V6 NA", hp:332, torque:270, driven:"RWD", trans:"6-Spd Manual / 7-Spd Auto" },
        "NISMO":    { engine:"3.7L VQ37VHR V6 NA (NISMO tune)", hp:350, torque:276, driven:"RWD", trans:"6-Spd Manual" },
      },
      platform:"VQ37VHR",
      type:"sports"
    },
    "Frontier": {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "S (2.5L)":      { engine:"2.5L QR25DE Inline-4 NA",  hp:152, torque:171, driven:"RWD/4WD", trans:"5-Spd Manual / 5-Spd Auto" },
        "SV (3.8L V6)":  { engine:"3.8L VQ38DD V6 NA",        hp:310, torque:281, driven:"RWD/4WD", trans:"9-Spd Auto" },
        "PRO-4X (3.8L)": { engine:"3.8L VQ38DD V6 NA",        hp:310, torque:281, driven:"4WD",     trans:"9-Spd Auto" },
        "Desert Runner":  { engine:"3.8L VQ38DD V6 NA",        hp:310, torque:281, driven:"RWD",     trans:"9-Spd Auto" },
      },
      platform:"VQ38DD",
      type:"truck"
    },
  },

  BMW: {
    "M3": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "F80 (2015–2018)":     { engine:"3.0L S55 Inline-6 TT", hp:425, torque:406, driven:"RWD", trans:"6-Spd Manual / 7-Spd DCT" },
        "G80 Competition":     { engine:"3.0L S58 Inline-6 TT", hp:503, torque:479, driven:"RWD/AWD", trans:"8-Spd Auto" },
        "G80 CS":              { engine:"3.0L S58 Inline-6 TT", hp:543, torque:479, driven:"RWD", trans:"8-Spd Auto" },
      },
      platform:"S55 / S58",
      type:"sports"
    },
    "M4": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "F82 (2015–2020)":     { engine:"3.0L S55 Inline-6 TT", hp:425, torque:406, driven:"RWD", trans:"6-Spd Manual / 7-Spd DCT" },
        "G82 Competition":     { engine:"3.0L S58 Inline-6 TT", hp:503, torque:479, driven:"RWD/AWD", trans:"8-Spd Auto" },
        "G82 CSL":             { engine:"3.0L S58 Inline-6 TT", hp:543, torque:479, driven:"RWD", trans:"8-Spd Auto" },
      },
      platform:"S55 / S58",
      type:"sports"
    },
    "M2": {
      years: [2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "F87 Base":        { engine:"3.0L N55 Inline-6 TT", hp:365, torque:369, driven:"RWD", trans:"6-Spd Manual / 7-Spd DCT" },
        "F87 Competition": { engine:"3.0L S55 Inline-6 TT", hp:405, torque:406, driven:"RWD", trans:"6-Spd Manual / 7-Spd DCT" },
        "G87 (2023+)":     { engine:"3.0L S58 Inline-6 TT", hp:453, torque:406, driven:"RWD", trans:"6-Spd Manual / 8-Spd Auto" },
      },
      platform:"N55 / S55 / S58",
      type:"sports"
    },
    "X5": {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "xDrive35i":  { engine:"3.0L N55 Inline-6 TT",    hp:300, torque:300, driven:"AWD", trans:"8-Spd Auto" },
        "xDrive40i":  { engine:"3.0L B58 Inline-6 TT",    hp:335, torque:332, driven:"AWD", trans:"8-Spd Auto" },
        "M50i":       { engine:"4.4L S63 V8 TT",           hp:523, torque:553, driven:"AWD", trans:"8-Spd Auto" },
        "X5 M":       { engine:"4.4L S63 V8 TT (M tune)", hp:617, torque:553, driven:"AWD", trans:"8-Spd Auto" },
      },
      platform:"B58 / S63",
      type:"suv"
    },
  },

  Volkswagen: {
    "Golf R": {
      years: [2015,2016,2017,2018,2019,2022,2023,2024],
      trims: {
        "Mk7 (2015–2019)": { engine:"2.0L EA888 Gen3 Turbo", hp:292, torque:280, driven:"AWD", trans:"6-Spd Manual / 6-Spd DSG" },
        "Mk8 (2022+)":     { engine:"2.0L EA888 Gen4 Turbo", hp:315, torque:310, driven:"AWD", trans:"7-Spd DSG / 6-Spd Manual" },
      },
      platform:"EA888",
      type:"sports"
    },
    "Golf GTI": {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Mk7 S":       { engine:"2.0L EA888 Gen3 Turbo", hp:220, torque:258, driven:"FWD", trans:"6-Spd Manual / 6-Spd DSG" },
        "Mk7 SE/Autobahn":{ engine:"2.0L EA888 Gen3 Turbo",hp:220,torque:258,driven:"FWD",trans:"6-Spd DSG" },
        "Mk8 (2022+)": { engine:"2.0L EA888 Gen4 Turbo", hp:241, torque:273, driven:"FWD", trans:"7-Spd DSG / 6-Spd Manual" },
      },
      platform:"EA888",
      type:"sports"
    },
  },

  Mitsubishi: {
    "Lancer Evo X": {
      years: [2008,2009,2010,2011,2012,2013,2014,2015],
      trims: {
        "GSR":   { engine:"2.0L 4B11T Inline-4 Turbo", hp:291, torque:300, driven:"AWD", trans:"5-Spd Manual" },
        "MR":    { engine:"2.0L 4B11T Inline-4 Turbo", hp:291, torque:300, driven:"AWD", trans:"6-Spd TC-SST DCT" },
        "SE":    { engine:"2.0L 4B11T Inline-4 Turbo", hp:291, torque:300, driven:"AWD", trans:"5-Spd Manual" },
        "Final Edition":{ engine:"2.0L 4B11T Inline-4 Turbo",hp:303,torque:305,driven:"AWD",trans:"5-Spd Manual / TC-SST" },
      },
      platform:"4B11T",
      type:"sports"
    },
  },

  Mazda: {
    "MX-5 Miata": {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "ND Sport":     { engine:"2.0L SkyActiv-G NA", hp:181, torque:151, driven:"RWD", trans:"6-Spd Manual / 6-Spd Auto" },
        "ND Club":      { engine:"2.0L SkyActiv-G NA", hp:181, torque:151, driven:"RWD", trans:"6-Spd Manual" },
        "ND Grand Touring":{ engine:"2.0L SkyActiv-G NA",hp:181,torque:151,driven:"RWD",trans:"6-Spd Manual / Auto" },
        "NB (1999–2005)":  { engine:"1.8L BP-4W NA",  hp:142, torque:125, driven:"RWD", trans:"5-Spd Manual / 4-Spd Auto" },
        "NA (1990–1997)":  { engine:"1.6L B6-ZE NA",  hp:116, torque:100, driven:"RWD", trans:"5-Spd Manual" },
      },
      platform:"SkyActiv-G",
      type:"sports"
    },
    "CX-5": {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Sport 2.5":       { engine:"2.5L SkyActiv-G NA", hp:187, torque:186, driven:"FWD/AWD", trans:"6-Spd Auto" },
        "Touring 2.5T":    { engine:"2.5L SkyActiv-G Turbo",hp:256,torque:320,driven:"AWD",  trans:"6-Spd Auto" },
        "Carbon Edition":  { engine:"2.5L SkyActiv-G Turbo",hp:256,torque:320,driven:"AWD",  trans:"6-Spd Auto" },
      },
      platform:"SkyActiv-G",
      type:"suv"
    },
  },

  Acura: {
    "Integra Type S": {
      years: [2024],
      trims: {
        "Base": { engine:"2.0L K20C1 Inline-4 Turbo", hp:320, torque:310, driven:"FWD", trans:"6-Spd Manual" },
      },
      platform:"K20C1",
      type:"sports"
    },
    "NSX": {
      years: [2017,2018,2019,2020,2021,2022],
      trims: {
        "Base":   { engine:"3.5L C35A V6 TT + 3 electric motors", hp:573, torque:476, driven:"AWD", trans:"9-Spd DCT" },
        "Type S":  { engine:"3.5L C35A V6 TT + 3 electric motors", hp:600, torque:492, driven:"AWD", trans:"9-Spd DCT" },
      },
      platform:"C35A Hybrid",
      type:"sports"
    },
    "RDX": {
      years: [2019,2020,2021,2022,2023,2024],
      trims: {
        "Base":           { engine:"2.0L K20C4 Turbo", hp:272, torque:280, driven:"FWD/AWD", trans:"10-Spd Auto" },
        "A-Spec":         { engine:"2.0L K20C4 Turbo", hp:272, torque:280, driven:"FWD/AWD", trans:"10-Spd Auto" },
        "PMC Edition":    { engine:"2.0L K20C4 Turbo", hp:272, torque:280, driven:"AWD",     trans:"10-Spd Auto" },
      },
      platform:"K20C4",
      type:"suv"
    },
  },

  Jeep: {
    "Wrangler JL": {
      years: [2018,2019,2020,2021,2022,2023,2024],
      trims: {
        "Sport (3.6L V6)":     { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"6-Spd Manual / 8-Spd Auto" },
        "Sahara (3.6L V6)":    { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"8-Spd Auto" },
        "Rubicon (3.6L V6)":   { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"6-Spd Manual / 8-Spd Auto" },
        "Rubicon 392 (6.4L V8)":{ engine:"6.4L 392 HEMI V8 NA",   hp:470, torque:470, driven:"4WD", trans:"8-Spd Auto" },
        "4xe (PHEV)":          { engine:"2.0L Turbo + Electric",   hp:375, torque:470, driven:"4WD", trans:"8-Spd Auto" },
        "EcoDiesel":           { engine:"3.0L EcoDiesel V6 Turbo", hp:260, torque:442, driven:"4WD", trans:"8-Spd Auto" },
      },
      platform:"Pentastar / HEMI",
      type:"suv"
    },
    "Gladiator": {
      years: [2020,2021,2022,2023,2024],
      trims: {
        "Sport (3.6L V6)":    { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"6-Spd Manual / 8-Spd Auto" },
        "Mojave (3.6L V6)":   { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"8-Spd Auto" },
        "Rubicon (3.6L V6)":  { engine:"3.6L Pentastar V6 NA",    hp:285, torque:260, driven:"4WD", trans:"6-Spd Manual / 8-Spd Auto" },
        "EcoDiesel":          { engine:"3.0L EcoDiesel V6 Turbo", hp:260, torque:442, driven:"4WD", trans:"8-Spd Auto" },
      },
      platform:"Pentastar",
      type:"truck"
    },
  },
};

// ═══════════════════════════════════════════════════════════
// PARTS DATABASE — keyed by vehicle TYPE + PLATFORM
// Each vehicle type gets its own relevant parts
// ═══════════════════════════════════════════════════════════

const PARTS_BY_PLATFORM = {

  // ── TOYOTA GR SUPRA (B58) ────────────────────────────────
  "B58": [
    {id:1,name:'Cold Air Intake',brand:'AEM / Eventuri',cat:'engine',icon:'🌬️',hp:'+8–12 whp',hpNum:10,diff:'Easy',diffC:'green',price:260,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:95,desc:'Direct-fit B58 intake. 2–3 hr DIY.',amazon:'https://www.amazon.com/s?k=cold+air+intake+toyota+supra+b58',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+b58+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Stage 2 ECU Tune',brand:'BM3 / Wedge Performance',cat:'engine',icon:'💻',hp:'+45–65 whp',hpNum:55,diff:'Software only',diffC:'blue',price:600,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:92,desc:'Unlocks full combo gains. E30/E50 flex maps.',amazon:'https://www.amazon.com/s?k=toyota+supra+ecu+tune+bm3',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+ecu+tune',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Catless Downpipe',brand:'VRSF / BM3',cat:'exhaust',icon:'⬇️',hp:'+20–28 whp',hpNum:24,diff:'Moderate',diffC:'amber',price:420,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE NEEDED',pop:88,desc:'Tune strongly recommended on B58.',amazon:'https://www.amazon.com/s?k=toyota+supra+downpipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+catless+downpipe',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Catback Exhaust',brand:'Akrapovič / Remus',cat:'exhaust',icon:'💨',hp:'+12–18 whp',hpNum:15,diff:'Easy',diffC:'green',price:1100,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Significant sound. Valved options available.',amazon:'https://www.amazon.com/s?k=toyota+supra+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Intercooler Upgrade',brand:'Wagner / Mishimoto',cat:'engine',icon:'❄️',hp:'+8–15 whp',hpNum:12,diff:'Moderate',diffC:'amber',price:650,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:82,desc:'Required before turbo upgrade. Kills heat soak.',amazon:'https://www.amazon.com/s?k=supra+b58+intercooler',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+intercooler',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Turbo Upgrade (Pure Stage 2)',brand:'Pure Turbos / Vargas',cat:'engine',icon:'🌀',hp:'+120–180 whp',hpNum:150,diff:'Hard',diffC:'red',price:3200,tune:'Required',compat:'req',badge:'SUPPORTING MODS REQ.',pop:75,desc:'Full supporting mods needed. 500+ whp capable.',amazon:'https://www.amazon.com/s?k=supra+b58+turbo+upgrade',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+turbo+upgrade',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Coilover Kit',brand:'BC Racing / KW V3',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1400,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:89,desc:'Full height + damper adjustability.',amazon:'https://www.amazon.com/s?k=toyota+supra+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+supra+coilovers',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Big Brake Kit',brand:'StopTech / Brembo',cat:'brakes',icon:'🛑',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:2200,tune:'Check wheel clearance',compat:'warn',badge:'⚠ CHECK WHEEL CLR',pop:72,desc:'6-piston front BBK.',amazon:'https://www.amazon.com/s?k=supra+big+brake+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+big+brake+kit',rockauto:'https://www.rockauto.com'},
    {id:9,name:'Forged Wheels 18"',brand:'Volk TE37 / HRE',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:2800,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Full forged. Check offset for your fenders.',amazon:'https://www.amazon.com/s?k=18+inch+forged+wheels+supra',ebay:'https://www.ebay.com/sch/i.html?_nkw=volk+te37+18+inch',rockauto:'https://www.rockauto.com'},
    {id:10,name:'Rear Wing (Swan Neck)',brand:'APR / Voltex',cat:'aero',icon:'🦢',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:680,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:74,desc:'High-downforce adjustable swan neck mount.',amazon:'https://www.amazon.com/s?k=toyota+supra+rear+wing',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+rear+wing',rockauto:'https://www.rockauto.com'},
    {id:11,name:'Flex Fuel Kit',brand:'EcuTek / BM3',cat:'engine',icon:'⛽',hp:'+20–30 whp',hpNum:25,diff:'Moderate',diffC:'amber',price:450,tune:'Required',compat:'req',badge:'REQUIRES TUNE',pop:77,desc:'Run E30–E50. Major gains paired with tune.',amazon:'https://www.amazon.com/s?k=supra+flex+fuel+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+flex+fuel',rockauto:'https://www.rockauto.com'},
    {id:12,name:'Sway Bar Set',brand:'Eibach / Whiteline',cat:'suspension',icon:'↔️',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:380,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:70,desc:'Front + rear. Reduces body roll significantly.',amazon:'https://www.amazon.com/s?k=toyota+supra+sway+bars',ebay:'https://www.ebay.com/sch/i.html?_nkw=supra+sway+bars',rockauto:'https://www.rockauto.com'},
  ],

  // ── TOYOTA TACOMA (2GR-FKS / 2TR-FE) ───────────────────
  "2GR-FKS / 2TR-FE": [
    {id:1,name:'Cold Air Intake',brand:'AEM / K&N / Injen',cat:'engine',icon:'🌬️',hp:'+5–10 whp',hpNum:7,diff:'Easy',diffC:'green',price:180,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:94,desc:'Bolt-on intake for 3.5L V6 or 2.7L 4-cyl. 1–2 hr install.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+cold+air+intake+3.5',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Suspension Lift Kit (2–3")',brand:'Bilstein / Old Man Emu / Fox',cat:'suspension',icon:'⬆️',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:650,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:96,desc:'Most popular Tacoma mod. Fits 33" tires with 2" lift.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+lift+kit+2+inch',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+lift+kit',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Lift Kit (4–6") with UCAs',brand:'Total Chaos / SCS / ReadyLift',cat:'suspension',icon:'🏔️',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:2800,tune:'Alignment + CV angles req.',compat:'warn',badge:'⚠ REQUIRES UCAs',pop:85,desc:'Requires upper control arms. Fits 35–37" tires.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+4+inch+lift+kit+uca',ebay:'https://www.ebay.com/sch/i.html?_nkw=tacoma+4+inch+lift+uca',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Catback Exhaust',brand:'Borla / MagnaFlow / Gibson',cat:'exhaust',icon:'💨',hp:'+8–15 whp',hpNum:11,diff:'Easy',diffC:'green',price:480,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Improved sound and slight HP gain on 3.5 V6.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+catback+exhaust+3.5',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Skid Plate Set',brand:'SCS / Cali Raised / NNDA',cat:'aero',icon:'🛡️',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:320,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:92,desc:'Full underbody protection. Engine, transfer case, fuel tank.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+skid+plate',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+skid+plate',rockauto:'https://www.rockauto.com'},
    {id:6,name:'All-Terrain Tires (33")',brand:'BFG KO2 / Falken WildPeak',cat:'wheels',icon:'🏁',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1100,tune:'Not required',compat:'warn',badge:'⚠ CHECK LIFT HEIGHT',pop:95,desc:'Most popular Tacoma tire size. Need 2"+ lift for fitment.',amazon:'https://www.amazon.com/s?k=33+inch+all+terrain+tires+tacoma',ebay:'https://www.ebay.com/sch/i.html?_nkw=33+inch+all+terrain+tires',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Mud-Terrain Tires (35")',brand:'Mickey Thompson / Nitto Ridge Grappler',cat:'wheels',icon:'🦏',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1400,tune:'Not required',compat:'warn',badge:'⚠ NEEDS 4"+ LIFT',pop:82,desc:'Aggressive tread. Expect 1–2 mpg drop.',amazon:'https://www.amazon.com/s?k=35+inch+mud+terrain+tires+tacoma',ebay:'https://www.ebay.com/sch/i.html?_nkw=35+inch+mud+terrain+tires',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Method / TRD Pro Wheels',brand:'Method Race Wheels / SCS',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1600,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'6x139.7 bolt pattern. 0 to +15 offset for flush fitment.',amazon:'https://www.amazon.com/s?k=method+wheels+tacoma+6x139',ebay:'https://www.ebay.com/sch/i.html?_nkw=method+race+wheels+6x139+tacoma',rockauto:'https://www.rockauto.com'},
    {id:9,name:'Front Bumper (Aftermarket)',brand:'Demello / Relentless / Icon',cat:'aero',icon:'💥',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1200,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'Steel or aluminum. Better approach angle + recovery mounts.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+front+bumper+aftermarket',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+steel+front+bumper',rockauto:'https://www.rockauto.com'},
    {id:10,name:'Snorkel Kit',brand:'Safari / ARB / TJM',cat:'engine',icon:'🌊',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:360,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:68,desc:'Air intake relocation for water crossings up to door height.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+snorkel+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+snorkel',rockauto:'https://www.rockauto.com'},
    {id:11,name:'ECU / PCM Tune',brand:'ApexPro / Reaper Tuning',cat:'engine',icon:'💻',hp:'+15–25 whp',hpNum:20,diff:'Software only',diffC:'blue',price:350,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:72,desc:'Custom tune for V6 Tacoma. Throttle + transmission mapping.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+v6+tune',rockauto:'https://www.rockauto.com'},
    {id:12,name:'Long Travel Suspension',brand:'Total Chaos / Icon',cat:'suspension',icon:'🔧',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:5500,tune:'Full alignment + geometry req.',compat:'req',badge:'PROFESSIONAL INSTALL',pop:60,desc:'Prerunner-spec suspension. 10"+ travel.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+long+travel+suspension',ebay:'https://www.ebay.com/sch/i.html?_nkw=tacoma+long+travel',rockauto:'https://www.rockauto.com'},
    {id:13,name:'Differential Locker (ARB)',brand:'ARB Air Locker',cat:'suspension',icon:'🔒',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:900,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:74,desc:'Front or rear air locker. Best for rock crawling.',amazon:'https://www.amazon.com/s?k=arb+air+locker+tacoma',ebay:'https://www.ebay.com/sch/i.html?_nkw=arb+locker+tacoma',rockauto:'https://www.rockauto.com'},
    {id:14,name:'Performance Brake Pads',brand:'Hawk / EBC',cat:'brakes',icon:'🔴',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:120,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'Improved bite. Especially useful with larger/heavier tires.',amazon:'https://www.amazon.com/s?k=toyota+tacoma+performance+brake+pads',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tacoma+brake+pads',rockauto:'https://www.rockauto.com'},
  ],

  // ── TOYOTA TUNDRA (3UR-FE) ───────────────────────────────
  "3UR-FE / V35A": [
    {id:1,name:'Cold Air Intake',brand:'K&N / AEM / Banks',cat:'engine',icon:'🌬️',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:280,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Direct-fit intake for 5.7L V8. Notable gains.',amazon:'https://www.amazon.com/s?k=toyota+tundra+cold+air+intake+5.7',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tundra+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Lift Kit (3–4")',brand:'Rough Country / Bilstein / Icon',cat:'suspension',icon:'⬆️',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:850,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:93,desc:'Popular truck mod. Fits 33–35" tires.',amazon:'https://www.amazon.com/s?k=toyota+tundra+lift+kit+3+inch',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tundra+lift+kit',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Catback Exhaust',brand:'MagnaFlow / Borla / Gibson',cat:'exhaust',icon:'💨',hp:'+12–20 whp',hpNum:16,diff:'Easy',diffC:'green',price:600,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:86,desc:'Deep V8 tone. Dual exit or single side.',amazon:'https://www.amazon.com/s?k=toyota+tundra+catback+exhaust+5.7',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tundra+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:4,name:'All-Terrain Tires (35")',brand:'BFG KO2 / Falken WildPeak',cat:'wheels',icon:'🏁',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1400,tune:'Not required',compat:'warn',badge:'⚠ CHECK LIFT HEIGHT',pop:92,desc:'35s fit best with 3"+ lift. Re-gear recommended at 35".',amazon:'https://www.amazon.com/s?k=35+inch+all+terrain+tires+tundra',ebay:'https://www.ebay.com/sch/i.html?_nkw=35+inch+all+terrain+tundra',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Throttle Body Spacer',brand:'Billet Specialties / Airaid',cat:'engine',icon:'⚙️',hp:'+5–8 whp',hpNum:6,diff:'Easy',diffC:'green',price:90,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:65,desc:'Cheap bolt-on for V8. Minor gains but popular.',amazon:'https://www.amazon.com/s?k=toyota+tundra+throttle+body+spacer',ebay:'https://www.ebay.com/sch/i.html?_nkw=tundra+throttle+body+spacer',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Performance Tune',brand:'ApexPro / Banks iDash',cat:'engine',icon:'💻',hp:'+20–35 whp',hpNum:28,diff:'Software only',diffC:'blue',price:400,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:75,desc:'Custom tune for 5.7 V8. Transmission mapping included.',amazon:'https://www.amazon.com/s?k=toyota+tundra+performance+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tundra+tune',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Aftermarket Wheels 18"',brand:'Method / Fuel / XD',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1800,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'5x150 bolt pattern (2007-2021). Wide variety available.',amazon:'https://www.amazon.com/s?k=toyota+tundra+wheels+5x150',ebay:'https://www.ebay.com/sch/i.html?_nkw=tundra+wheels+5x150',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Skid Plate Set',brand:'SCS / Cali Raised',cat:'aero',icon:'🛡️',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:380,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:72,desc:'Engine + transfer case protection.',amazon:'https://www.amazon.com/s?k=toyota+tundra+skid+plate',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+tundra+skid+plate',rockauto:'https://www.rockauto.com'},
  ],

  // ── FORD F-150 (EcoBoost / Coyote) ──────────────────────
  "EcoBoost / Coyote": [
    {id:1,name:'Cold Air Intake',brand:'K&N / Airaid / Roush',cat:'engine',icon:'🌬️',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:280,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:92,desc:'Works on all F-150 engines. Notable gains on 3.5 EcoBoost.',amazon:'https://www.amazon.com/s?k=ford+f150+cold+air+intake+ecoboost',ebay:'https://www.ebay.com/sch/i.html?_nkw=ford+f150+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Performance Tune (EcoBoost)',brand:'VMP / Lund Racing / SCT',cat:'engine',icon:'💻',hp:'+50–80 whp',hpNum:65,diff:'Software only',diffC:'blue',price:650,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Massive gains on 3.5 EcoBoost. 93 oct or E30 maps.',amazon:'https://www.amazon.com/s?k=ford+f150+ecoboost+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=ford+f150+ecoboost+tune',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Catback Exhaust',brand:'Borla / MagnaFlow / Roush',cat:'exhaust',icon:'💨',hp:'+12–22 whp',hpNum:17,diff:'Easy',diffC:'green',price:750,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Dual exit or side-exit. Aggressive tone on V8.',amazon:'https://www.amazon.com/s?k=ford+f150+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=ford+f150+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Lift Kit (3–4")',brand:'Rough Country / BDS / Superlift',cat:'suspension',icon:'⬆️',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:900,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:93,desc:'Fits 33–35" tires. IFS-specific kits available.',amazon:'https://www.amazon.com/s?k=ford+f150+3+inch+lift+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=ford+f150+lift+kit',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Intercooler Upgrade (EcoBoost)',brand:'Mishimoto / Perrin',cat:'engine',icon:'❄️',hp:'+15–25 whp',hpNum:20,diff:'Moderate',diffC:'amber',price:550,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'Critical on 3.5 EcoBoost for sustained power in heat.',amazon:'https://www.amazon.com/s?k=ford+f150+ecoboost+intercooler',ebay:'https://www.ebay.com/sch/i.html?_nkw=f150+ecoboost+intercooler',rockauto:'https://www.rockauto.com'},
    {id:6,name:'All-Terrain Tires (35")',brand:'BFG KO2 / Nitto Terra Grappler',cat:'wheels',icon:'🏁',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1400,tune:'Not required',compat:'warn',badge:'⚠ CHECK LIFT HEIGHT',pop:94,desc:'35s on F-150 with 2.5"+ lift. May need trimming.',amazon:'https://www.amazon.com/s?k=35+inch+all+terrain+tires+f150',ebay:'https://www.ebay.com/sch/i.html?_nkw=35+inch+all+terrain+f150',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Wheels (20" Forged)',brand:'Fuel / Method / KMC',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:2000,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:85,desc:'6x135 bolt pattern (2004-2014) or 6x139.7 (2015+).',amazon:'https://www.amazon.com/s?k=20+inch+wheels+ford+f150+6x135',ebay:'https://www.ebay.com/sch/i.html?_nkw=20+inch+ford+f150+wheels',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Downpipe Upgrade (EcoBoost)',brand:'MBRP / Kooks',cat:'exhaust',icon:'⬇️',hp:'+20–35 whp',hpNum:28,diff:'Moderate',diffC:'amber',price:480,tune:'Recommended',compat:'warn',badge:'⚠ TUNE RECOMMENDED',pop:75,desc:'Reduces backpressure on 3.5TT. Pairs with tune.',amazon:'https://www.amazon.com/s?k=ford+f150+ecoboost+downpipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=f150+ecoboost+downpipe',rockauto:'https://www.rockauto.com'},
  ],

  // ── WRX STI (EJ257) ─────────────────────────────────────
  "EJ257": [
    {id:1,name:'Cold Air Intake / TGV Delete',brand:'Perrin / GrimmSpeed / Cobb',cat:'engine',icon:'🌬️',hp:'+8–15 whp',hpNum:11,diff:'Easy',diffC:'green',price:280,tune:'TGV delete needs tune',compat:'warn',badge:'⚠ TGV NEEDS TUNE',pop:88,desc:'TGV delete is the bigger gain — but requires a tune.',amazon:'https://www.amazon.com/s?k=subaru+wrx+sti+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Cobb AccessPort (Stage 1)',brand:'Cobb Tuning',cat:'engine',icon:'💻',hp:'+30–50 whp',hpNum:40,diff:'Software only',diffC:'blue',price:700,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:96,desc:'The essential STI mod. Unlocks full bolt-on potential.',amazon:'https://www.amazon.com/s?k=cobb+accessport+sti',ebay:'https://www.ebay.com/sch/i.html?_nkw=cobb+accessport+wrx+sti',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Catback Exhaust',brand:'Invidia / HKS / Tomei',cat:'exhaust',icon:'💨',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:720,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Deep boxer rumble. Invidia N1 is crowd favorite.',amazon:'https://www.amazon.com/s?k=subaru+sti+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+catback',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Uppipe Upgrade',brand:'GrimmSpeed / Perrin',cat:'exhaust',icon:'⬇️',hp:'+12–20 whp',hpNum:16,diff:'Moderate',diffC:'amber',price:350,tune:'Recommended',compat:'warn',badge:'⚠ TUNE RECOMMENDED',pop:82,desc:'Removes restrictive OEM cat uppipe. Spool improvement.',amazon:'https://www.amazon.com/s?k=subaru+sti+uppipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+uppipe',rockauto:'https://www.rockauto.com'},
    {id:5,name:'TMIC Upgrade',brand:'Perrin / Cobb / GrimmSpeed',cat:'engine',icon:'❄️',hp:'+15–25 whp',hpNum:20,diff:'Moderate',diffC:'amber',price:580,tune:'Recommended',compat:'ok',badge:'✓ COMPATIBLE',pop:85,desc:'Top-mount intercooler upgrade. Must-do before power mods.',amazon:'https://www.amazon.com/s?k=subaru+sti+intercooler+upgrade',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+intercooler',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Coilover Kit',brand:'Öhlins / BC Racing / Fortune Auto',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1600,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:87,desc:'Essential for WRX/STI track use.',amazon:'https://www.amazon.com/s?k=subaru+sti+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+coilovers',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Turbo Upgrade (VF52/TD06)',brand:'Blobeye / Kartboy / STI',cat:'engine',icon:'🌀',hp:'+80–120 whp',hpNum:100,diff:'Hard',diffC:'red',price:2400,tune:'Required',compat:'req',badge:'FULL BUILD REQ.',pop:70,desc:'VF52 or TD06SL2 swap. Supporting mods essential.',amazon:'https://www.amazon.com/s?k=subaru+sti+turbo+upgrade',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+turbo+upgrade',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Big Brake Kit',brand:'StopTech / Brembo',cat:'brakes',icon:'🛑',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1900,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:72,desc:'6-piston front. Required for track days.',amazon:'https://www.amazon.com/s?k=subaru+sti+big+brake+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=subaru+sti+big+brake+kit',rockauto:'https://www.rockauto.com'},
  ],

  // ── MUSTANG GT (COYOTE 5.0) ──────────────────────────────
  "Coyote 5.0": [
    {id:1,name:'Cold Air Intake',brand:'Roush / K&N / JLT',cat:'engine',icon:'🌬️',hp:'+10–20 whp',hpNum:15,diff:'Easy',diffC:'green',price:260,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:93,desc:'Direct-fit Coyote V8 intake. JLT is top performer.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+cold+air+intake+5.0',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Catback Exhaust',brand:'Borla / Roush / Corsa',cat:'exhaust',icon:'💨',hp:'+15–25 whp',hpNum:20,diff:'Easy',diffC:'green',price:900,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:95,desc:'The Coyote V8 sounds incredible with a good catback.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+catback+exhaust+5.0',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Supercharger Kit',brand:'Whipple / Roush / Edelbrock',cat:'engine',icon:'🌀',hp:'+200–350 whp',hpNum:275,diff:'Hard',diffC:'red',price:7500,tune:'Required',compat:'req',badge:'REQUIRES SUPPORTING MODS',pop:82,desc:'Whipple 3.0L is the gold standard. Supporting mods needed.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+supercharger+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+supercharger',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Performance Tune (HP Tuners)',brand:'Lund Racing / Brenspeed',cat:'engine',icon:'💻',hp:'+25–40 whp',hpNum:32,diff:'Software only',diffC:'blue',price:450,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Unlocks full bolt-on potential on 93 octane.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+performance+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+tune',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Long Tube Headers',brand:'Kooks / American Racing',cat:'exhaust',icon:'⬇️',hp:'+25–45 whp',hpNum:35,diff:'Hard',diffC:'red',price:1200,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE NEEDED',pop:80,desc:'Biggest NA power gain on Coyote. Needs a tune.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+long+tube+headers',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+long+tube+headers',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Coilover Kit',brand:'Öhlins / MagneRide / BMR',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1800,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:85,desc:'Major improvement especially for track days.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+coilovers',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Big Brake Kit',brand:'Brembo / StopTech / Ford Performance',cat:'brakes',icon:'🛑',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:2400,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:74,desc:'Essential at 600+whp. Check wheel clearance.',amazon:'https://www.amazon.com/s?k=ford+mustang+gt+big+brake+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+gt+big+brake+kit',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Forged Wheels 19"',brand:'HRE / Forgeline / Weld',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:3200,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'5x114.3 bolt pattern. 10.5" rear for max grip.',amazon:'https://www.amazon.com/s?k=ford+mustang+wheels+5x114+19+inch',ebay:'https://www.ebay.com/sch/i.html?_nkw=mustang+wheels+19+inch',rockauto:'https://www.rockauto.com'},
  ],

  // ── CHEVY CAMARO SS (LT1 V8) ────────────────────────────
  "LT1 V8": [
    {id:1,name:'Cold Air Intake',brand:'Moroso / K&N / Vararam',cat:'engine',icon:'🌬️',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:260,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Direct-fit LT1 V8 intake. Induction roar upgrade.',amazon:'https://www.amazon.com/s?k=chevy+camaro+ss+cold+air+intake+lt1',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Catback Exhaust',brand:'Corsa / Borla / Flowmaster',cat:'exhaust',icon:'💨',hp:'+15–22 whp',hpNum:18,diff:'Easy',diffC:'green',price:1000,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:93,desc:'LT1 V8 sounds incredible uncorked. Corsa Sport is king.',amazon:'https://www.amazon.com/s?k=chevy+camaro+ss+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Supercharger Kit',brand:'Magnuson / Edelbrock / ProCharger',cat:'engine',icon:'🌀',hp:'+180–280 whp',hpNum:230,diff:'Hard',diffC:'red',price:7000,tune:'Required',compat:'req',badge:'REQUIRES SUPPORTING MODS',pop:78,desc:'TVS2300 or ProCharger D1SC. 650+ whp capable.',amazon:'https://www.amazon.com/s?k=camaro+ss+supercharger',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+supercharger',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Performance Tune (E85/93)',brand:'Lund Racing / Vengeance',cat:'engine',icon:'💻',hp:'+30–45 whp',hpNum:37,diff:'Software only',diffC:'blue',price:500,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'93 oct tune. E85 maps available for big gains.',amazon:'https://www.amazon.com/s?k=camaro+ss+lt1+performance+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+tune',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Long Tube Headers',brand:'Kooks / American Racing Headers',cat:'exhaust',icon:'⬇️',hp:'+30–50 whp',hpNum:40,diff:'Hard',diffC:'red',price:1400,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE NEEDED',pop:80,desc:'Single biggest NA power move on LT1.',amazon:'https://www.amazon.com/s?k=camaro+ss+long+tube+headers',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+long+tube+headers',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Coilover Kit',brand:'Öhlins / KW / Pfadt',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1700,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:83,desc:'Major handling upgrade for track and street.',amazon:'https://www.amazon.com/s?k=chevy+camaro+ss+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=camaro+ss+coilovers',rockauto:'https://www.rockauto.com'},
  ],

  // ── DODGE HEMI (Challenger / Charger) ───────────────────
  "HEMI": [
    {id:1,name:'Cold Air Intake',brand:'Mopar / K&N / Airaid',cat:'engine',icon:'🌬️',hp:'+8–15 whp',hpNum:11,diff:'Easy',diffC:'green',price:250,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Adds growl to the HEMI V8. Easy bolt-on.',amazon:'https://www.amazon.com/s?k=dodge+challenger+charger+cold+air+intake+hemi',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+cold+air+intake+hemi',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Catback Exhaust',brand:'Borla / Corsa / MagnaFlow',cat:'exhaust',icon:'💨',hp:'+15–25 whp',hpNum:20,diff:'Easy',diffC:'green',price:950,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:94,desc:'HEMI sounds incredible with a free-flowing exhaust.',amazon:'https://www.amazon.com/s?k=dodge+challenger+catback+exhaust+hemi',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+catback+hemi',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Supercharger Kit (HEMI)',brand:'Magnuson / Procharger / Edelbrock',cat:'engine',icon:'🌀',hp:'+200–350 whp',hpNum:280,diff:'Hard',diffC:'red',price:7500,tune:'Required',compat:'req',badge:'REQUIRES SUPPORTING MODS',pop:80,desc:'TVS2300 or ProCharger. 700+ whp on 392.',amazon:'https://www.amazon.com/s?k=dodge+challenger+392+supercharger',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+supercharger+hemi',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Performance Tune',brand:'Diablo / Lund / HP Tuners',cat:'engine',icon:'💻',hp:'+25–45 whp',hpNum:35,diff:'Software only',diffC:'blue',price:500,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:86,desc:'Unlocks 5.7 and 6.4 potential. Trans tuning too.',amazon:'https://www.amazon.com/s?k=dodge+challenger+hemi+performance+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+tune+hemi',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Long Tube Headers',brand:'Kooks / American Racing',cat:'exhaust',icon:'⬇️',hp:'+30–50 whp',hpNum:40,diff:'Hard',diffC:'red',price:1300,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE NEEDED',pop:76,desc:'Best bang for buck on naturally-aspirated HEMI.',amazon:'https://www.amazon.com/s?k=dodge+challenger+long+tube+headers',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+long+tube+headers',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Coilover Kit',brand:'BC Racing / Eibach / KW',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1500,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'Major handling upgrade for the big Mopar.',amazon:'https://www.amazon.com/s?k=dodge+challenger+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+coilovers',rockauto:'https://www.rockauto.com'},
    {id:7,name:'Widebody Kit',brand:'OEM Widebody / Duraflex',cat:'aero',icon:'💪',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:3800,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:72,desc:'305 rear tires on widebody. Aggressive stance.',amazon:'https://www.amazon.com/s?k=dodge+challenger+widebody+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=dodge+challenger+widebody',rockauto:'https://www.rockauto.com'},
  ],

  // ── BMW S55 / S58 ─────────────────────────────────────
  "S55 / S58": [
    {id:1,name:'Cold Air Intake',brand:'Eventuri / MST / aFe',cat:'engine',icon:'🌬️',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:580,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Carbon fibre options from Eventuri. S58 responds well.',amazon:'https://www.amazon.com/s?k=bmw+m3+m4+s58+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m3+m4+s58+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'MHD Stage 1 / 2 Tune',brand:'MHD / Bootmod3',cat:'engine',icon:'💻',hp:'+60–90 whp',hpNum:75,diff:'Software only',diffC:'blue',price:200,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:95,desc:'Best value BMW tune. Stage 2 on 93 or E30.',amazon:'https://www.amazon.com/s?k=bmw+m4+mhd+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m4+ecu+tune',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Downpipe Upgrade',brand:'Akrapovič / Wagner / Dinan',cat:'exhaust',icon:'⬇️',hp:'+25–40 whp',hpNum:32,diff:'Moderate',diffC:'amber',price:1400,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE NEEDED',pop:85,desc:'Major spool improvement and power gains.',amazon:'https://www.amazon.com/s?k=bmw+m3+m4+downpipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m4+downpipe',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Catback Exhaust',brand:'Akrapovič / Remus / FI',cat:'exhaust',icon:'💨',hp:'+10–18 whp',hpNum:14,diff:'Easy',diffC:'green',price:2200,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Sound upgrade and mild power gains. Akrapovič is king.',amazon:'https://www.amazon.com/s?k=bmw+m3+m4+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m4+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Coilover Kit',brand:'KW V3 / BC Racing / Öhlins',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:2200,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:84,desc:'KW V3 is the benchmark for M3/M4 street/track.',amazon:'https://www.amazon.com/s?k=bmw+m3+m4+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m4+coilovers',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Charge Pipe Upgrade',brand:'Burger Motorsports / Mishimoto',cat:'engine',icon:'🔧',hp:'+5–10 whp',hpNum:7,diff:'Easy',diffC:'green',price:280,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'Prevents plastic OEM pipe splitting under boost.',amazon:'https://www.amazon.com/s?k=bmw+m3+m4+charge+pipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=bmw+m4+charge+pipe',rockauto:'https://www.rockauto.com'},
  ],

  // ── VW EA888 (Golf R / GTI) ──────────────────────────────
  "EA888": [
    {id:1,name:'Cold Air Intake',brand:'Eventuri / APR / Revo',cat:'engine',icon:'🌬️',hp:'+8–15 whp',hpNum:11,diff:'Easy',diffC:'green',price:380,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:86,desc:'Direct fit EA888. APR is most popular choice.',amazon:'https://www.amazon.com/s?k=vw+golf+r+gti+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+gti+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Stage 1 ECU Tune',brand:'APR / Unitronic / Revo',cat:'engine',icon:'💻',hp:'+60–80 whp',hpNum:70,diff:'Software only',diffC:'blue',price:700,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:96,desc:'Biggest bang for buck on EA888. 91/93 oct maps.',amazon:'https://www.amazon.com/s?k=vw+golf+r+stage+1+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+ecu+tune',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Downpipe (Hi-Flow)',brand:'MBRP / Milltek / Unitronic',cat:'exhaust',icon:'⬇️',hp:'+20–35 whp',hpNum:28,diff:'Moderate',diffC:'amber',price:480,tune:'Required for Stage 2',compat:'warn',badge:'⚠ TUNE NEEDED (Stage 2)',pop:84,desc:'Required for Stage 2 tune. Major gains with DSG tune.',amazon:'https://www.amazon.com/s?k=vw+golf+r+downpipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+downpipe',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Catback Exhaust',brand:'Milltek / Remus / APR',cat:'exhaust',icon:'💨',hp:'+8–14 whp',hpNum:11,diff:'Easy',diffC:'green',price:1100,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'GTI/R sound upgrade. Resonated or non-res options.',amazon:'https://www.amazon.com/s?k=vw+golf+r+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Intercooler Upgrade',brand:'Wagner / APR / Forge',cat:'engine',icon:'❄️',hp:'+15–25 whp',hpNum:20,diff:'Moderate',diffC:'amber',price:650,tune:'Recommended',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'OEM FMIC is undersized. Wagner is the benchmark.',amazon:'https://www.amazon.com/s?k=vw+golf+r+intercooler',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+intercooler+wagner',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Coilover Kit',brand:'BC Racing / KW V3 / Bilstein',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1400,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:84,desc:'Transforms the Golf platform for track and street.',amazon:'https://www.amazon.com/s?k=vw+golf+r+gti+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=golf+r+coilovers',rockauto:'https://www.rockauto.com'},
  ],

  // ── GENERIC TRUCK (for 4Runner, Frontier, Colorado, etc.) ─
  "1GR-FE": [
    {id:1,name:'Suspension Lift Kit (2–3")',brand:'Bilstein / Old Man Emu / Rough Country',cat:'suspension',icon:'⬆️',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:700,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:95,desc:'Most popular 4Runner mod. 2.5"+ needed for 33" tires.',amazon:'https://www.amazon.com/s?k=toyota+4runner+lift+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+4runner+lift+kit',rockauto:'https://www.rockauto.com'},
    {id:2,name:'All-Terrain Tires (33–35")',brand:'BFG KO2 / Falken WildPeak',cat:'wheels',icon:'🏁',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1200,tune:'Not required',compat:'warn',badge:'⚠ CHECK LIFT HEIGHT',pop:93,desc:'BFG KO2 is #1 choice. 33s on 2", 35s on 4"+.',amazon:'https://www.amazon.com/s?k=33+inch+all+terrain+tires+4runner',ebay:'https://www.ebay.com/sch/i.html?_nkw=4runner+all+terrain+tires',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Skid Plates',brand:'NNDA / SCS / ARB',cat:'aero',icon:'🛡️',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:350,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Engine, transfer case, rear diff protection.',amazon:'https://www.amazon.com/s?k=toyota+4runner+skid+plates',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+4runner+skid+plate',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Cold Air Intake',brand:'K&N / AEM',cat:'engine',icon:'🌬️',hp:'+5–10 whp',hpNum:7,diff:'Easy',diffC:'green',price:200,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'Minor gains on 4.0 V6 NA engine.',amazon:'https://www.amazon.com/s?k=toyota+4runner+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=toyota+4runner+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Aftermarket Wheels',brand:'Method / Black Rhino / Fuel',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1600,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'6x139.7 bolt pattern. Wide variety of offsets.',amazon:'https://www.amazon.com/s?k=toyota+4runner+wheels+6x139',ebay:'https://www.ebay.com/sch/i.html?_nkw=4runner+wheels+6x139',rockauto:'https://www.rockauto.com'},
    {id:6,name:'ARB Air Locker',brand:'ARB',cat:'suspension',icon:'🔒',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:850,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:74,desc:'Essential for serious off-road. Front or rear.',amazon:'https://www.amazon.com/s?k=arb+air+locker+4runner',ebay:'https://www.ebay.com/sch/i.html?_nkw=arb+locker+4runner',rockauto:'https://www.rockauto.com'},
  ],

  // ── JEEP WRANGLER ────────────────────────────────────────
  "Pentastar / HEMI": [
    {id:1,name:'Suspension Lift Kit (3.5")',brand:'Rubicon Express / Rough Country / Fox',cat:'suspension',icon:'⬆️',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1200,tune:'Alignment + CV angles',compat:'ok',badge:'✓ COMPATIBLE',pop:97,desc:'Most common Wrangler mod. Fits 35" tires.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+jl+lift+kit+3.5+inch',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+jl+lift+kit',rockauto:'https://www.rockauto.com'},
    {id:2,name:'35" All-Terrain / Mud Tires',brand:'BFG KO2 / Mickey Thompson / Nitto',cat:'wheels',icon:'🏁',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1400,tune:'Re-gear recommended',compat:'warn',badge:'⚠ RE-GEAR RECOMMENDED',pop:95,desc:'35s on Wrangler. Re-gear to 4.56 for best performance.',amazon:'https://www.amazon.com/s?k=35+inch+jeep+wrangler+tires',ebay:'https://www.ebay.com/sch/i.html?_nkw=35+inch+wrangler+tires',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Axle Re-Gear (4.10 / 4.56)',brand:'G2 Axle / Yukon Gear',cat:'suspension',icon:'⚙️',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:1600,tune:'Not required',compat:'req',badge:'REQUIRED WITH 35"+ TIRES',pop:86,desc:'Required with 35"+ tires. Restores performance and MPG.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+axle+re-gear+4.56',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+re+gear+4.56',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Front / Rear Bumpers',brand:'Poison Spyder / LoD / Smittybilt',cat:'aero',icon:'💥',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:900,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Steel bumpers with recovery points. Better approach angle.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+jl+front+bumper',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+jl+bumper',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Skid Plate Set',brand:'Rugged Ridge / GenRight / Artec',cat:'aero',icon:'🛡️',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:480,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Full belly protection. Engine, fuel tank, transfer case.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+jl+skid+plates',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+jl+skid+plates',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Cold Air Intake',brand:'K&N / aFe / Rugged Ridge',cat:'engine',icon:'🌬️',hp:'+8–15 whp',hpNum:11,diff:'Easy',diffC:'green',price:260,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'Noticeable on the 3.6 Pentastar. 2.0T also benefits.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+cold+air+intake+pentastar',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:7,name:'ARB Differential Locker',brand:'ARB',cat:'suspension',icon:'🔒',hp:'N/A',hpNum:0,diff:'Hard',diffC:'red',price:900,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:82,desc:'Air locker front + rear. Transforms off-road capability.',amazon:'https://www.amazon.com/s?k=arb+air+locker+jeep+wrangler',ebay:'https://www.ebay.com/sch/i.html?_nkw=arb+locker+jeep+wrangler',rockauto:'https://www.rockauto.com'},
    {id:8,name:'Winch (12,000 lb)',brand:'Warn / Smittybilt / Badland',cat:'aero',icon:'🪝',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:650,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:84,desc:'12K lb synthetic rope winch. Essential recovery tool.',amazon:'https://www.amazon.com/s?k=jeep+wrangler+winch+12000',ebay:'https://www.ebay.com/sch/i.html?_nkw=jeep+wrangler+winch+12000',rockauto:'https://www.rockauto.com'},
  ],

  // ── GENERIC K20/K24 (Civic Type R, Integra) ─────────────
  "K20C1": [
    {id:1,name:'Cold Air Intake',brand:'Injen / Mugen / Mishimoto',cat:'engine',icon:'🌬️',hp:'+8–14 whp',hpNum:11,diff:'Easy',diffC:'green',price:280,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Type R K20C1 intake. 2–3 hr DIY.',amazon:'https://www.amazon.com/s?k=honda+civic+type+r+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=civic+type+r+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'ECU Tune (Hondata)',brand:'Hondata / KTuner',cat:'engine',icon:'💻',hp:'+30–50 whp',hpNum:40,diff:'Software only',diffC:'blue',price:500,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:94,desc:'Hondata FlashPro is THE K20C1 tune platform.',amazon:'https://www.amazon.com/s?k=hondata+flashpro+civic+type+r',ebay:'https://www.ebay.com/sch/i.html?_nkw=hondata+flashpro+civic+type+r',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Downpipe Upgrade',brand:'Full Race / Skunk2 / GReddy',cat:'exhaust',icon:'⬇️',hp:'+18–28 whp',hpNum:23,diff:'Moderate',diffC:'amber',price:550,tune:'Required for Stage 2',compat:'warn',badge:'⚠ TUNE NEEDED',pop:82,desc:'High-flow DP unlocks full turbo potential.',amazon:'https://www.amazon.com/s?k=honda+civic+type+r+downpipe',ebay:'https://www.ebay.com/sch/i.html?_nkw=civic+type+r+downpipe',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Catback Exhaust',brand:'Mugen / Invidia / HKS',cat:'exhaust',icon:'💨',hp:'+10–16 whp',hpNum:13,diff:'Easy',diffC:'green',price:850,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'VTEC scream + turbo spool. Mugen is iconic.',amazon:'https://www.amazon.com/s?k=honda+civic+type+r+catback',ebay:'https://www.ebay.com/sch/i.html?_nkw=civic+type+r+catback',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Coilover Kit',brand:'Tein / BC Racing / KW V3',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1400,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:86,desc:'Type R is already great — coils make it sublime.',amazon:'https://www.amazon.com/s?k=honda+civic+type+r+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=civic+type+r+coilovers',rockauto:'https://www.rockauto.com'},
    {id:6,name:'Intercooler Upgrade',brand:'Mishimoto / Kraftwerks',cat:'engine',icon:'❄️',hp:'+12–22 whp',hpNum:17,diff:'Moderate',diffC:'amber',price:580,tune:'Recommended',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'OEM FMIC is limiting. Required for Stage 2+.',amazon:'https://www.amazon.com/s?k=honda+civic+type+r+intercooler',ebay:'https://www.ebay.com/sch/i.html?_nkw=civic+type+r+intercooler',rockauto:'https://www.rockauto.com'},
  ],

  // ── FA24 (GR86 / BRZ) ───────────────────────────────────
  "FA24": [
    {id:1,name:'Cold Air Intake',brand:'Cusco / GReddy / Injen',cat:'engine',icon:'🌬️',hp:'+5–10 whp',hpNum:7,diff:'Easy',diffC:'green',price:240,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:82,desc:'Modest gains on NA FA24. Better induction sound.',amazon:'https://www.amazon.com/s?k=toyota+gr86+subaru+brz+cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=gr86+brz+cold+air+intake',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Supercharger Kit',brand:'Kraftwerks / Jackson Racing',cat:'engine',icon:'🌀',hp:'+80–120 whp',hpNum:100,diff:'Hard',diffC:'red',price:4500,tune:'Required',compat:'req',badge:'FULL INSTALL REQ.',pop:78,desc:'Best power option for NA FA24. Rotrex or Harrop blowers.',amazon:'https://www.amazon.com/s?k=toyota+gr86+supercharger+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=gr86+brz+supercharger',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Catback Exhaust',brand:'HKS / GReddy / Tomei',cat:'exhaust',icon:'💨',hp:'+8–14 whp',hpNum:11,diff:'Easy',diffC:'green',price:750,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Boxer sound is addicting. HKS Hi-Power is classic.',amazon:'https://www.amazon.com/s?k=toyota+gr86+subaru+brz+catback',ebay:'https://www.ebay.com/sch/i.html?_nkw=gr86+brz+catback+exhaust',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Coilover Kit',brand:'Öhlins / BC Racing / Fortune Auto',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1500,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'86/BRZ is a handling platform first.',amazon:'https://www.amazon.com/s?k=toyota+gr86+subaru+brz+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=gr86+brz+coilovers',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Hondata / EcuTek Tune',brand:'Hondata / EcuTek',cat:'engine',icon:'💻',hp:'+15–25 whp',hpNum:20,diff:'Software only',diffC:'blue',price:600,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'EcuTek is dominant platform for 86/BRZ.',amazon:'https://www.amazon.com/s?k=subaru+brz+ecutek+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=gr86+brz+ecutek',rockauto:'https://www.rockauto.com'},
  ],

  // ── GT-R (VR38DETT) ──────────────────────────────────────
  "VR38DETT": [
    {id:1,name:'Intake Plenum Upgrade',brand:'Cobb / HKS / AMS',cat:'engine',icon:'🌬️',hp:'+20–35 whp',hpNum:27,diff:'Moderate',diffC:'amber',price:1200,tune:'Strongly recommended',compat:'warn',badge:'⚠ TUNE RECOMMENDED',pop:82,desc:'Significant gains on VR38. AMS billet is top pick.',amazon:'https://www.amazon.com/s?k=nissan+gtr+intake+plenum',ebay:'https://www.ebay.com/sch/i.html?_nkw=nissan+gtr+intake+plenum',rockauto:'https://www.rockauto.com'},
    {id:2,name:'Cobb AccessPort (VR38)',brand:'Cobb Tuning',cat:'engine',icon:'💻',hp:'+50–80 whp',hpNum:65,diff:'Software only',diffC:'blue',price:800,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Base stage 1 tune. Massive safe power gains.',amazon:'https://www.amazon.com/s?k=nissan+gtr+cobb+accessport',ebay:'https://www.ebay.com/sch/i.html?_nkw=nissan+gtr+cobb+accessport',rockauto:'https://www.rockauto.com'},
    {id:3,name:'Turbo Upgrade (GT-R)',brand:'AMS / Forced Performance',cat:'engine',icon:'🌀',hp:'+200–400 whp',hpNum:300,diff:'Hard',diffC:'red',price:8000,tune:'Required',compat:'req',badge:'FULL BUILD REQ.',pop:70,desc:'Alpha series or Forced Performance kits. 800+ whp capable.',amazon:'https://www.amazon.com/s?k=nissan+gtr+turbo+upgrade',ebay:'https://www.ebay.com/sch/i.html?_nkw=nissan+gtr+turbo+upgrade',rockauto:'https://www.rockauto.com'},
    {id:4,name:'Exhaust Upgrade',brand:'Akrapovič / HKS / Tomei',cat:'exhaust',icon:'💨',hp:'+15–25 whp',hpNum:20,diff:'Moderate',diffC:'amber',price:3500,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:85,desc:'VR38 sound is iconic. Titanium catback options.',amazon:'https://www.amazon.com/s?k=nissan+gtr+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=nissan+gtr+exhaust',rockauto:'https://www.rockauto.com'},
    {id:5,name:'Coilover Kit',brand:'Öhlins / KW / BC Racing',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:2400,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:78,desc:'GT-R multi-link suspension responds well to good coils.',amazon:'https://www.amazon.com/s?k=nissan+gtr+coilovers',ebay:'https://www.ebay.com/sch/i.html?_nkw=nissan+gtr+coilovers',rockauto:'https://www.rockauto.com'},
  ],
};

// ── FALLBACK parts for anything not explicitly mapped ────────
PARTS_BY_PLATFORM["default"] = [
  {id:1,name:'Cold Air Intake',brand:'K&N / AEM / Injen',cat:'engine',icon:'🌬️',hp:'+5–12 whp',hpNum:8,diff:'Easy',diffC:'green',price:220,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:90,desc:'Universal short ram or cold air intake. Check fitment.',amazon:'https://www.amazon.com/s?k=cold+air+intake',ebay:'https://www.ebay.com/sch/i.html?_nkw=cold+air+intake',rockauto:'https://www.rockauto.com'},
  {id:2,name:'Performance Exhaust',brand:'MagnaFlow / Borla / Flowmaster',cat:'exhaust',icon:'💨',hp:'+10–20 whp',hpNum:15,diff:'Easy',diffC:'green',price:600,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:88,desc:'Cat-back or axle-back. Check your specific fitment.',amazon:'https://www.amazon.com/s?k=performance+catback+exhaust',ebay:'https://www.ebay.com/sch/i.html?_nkw=performance+catback+exhaust',rockauto:'https://www.rockauto.com'},
  {id:3,name:'Performance Tune',brand:'DiabloSport / HP Tuners / SCT',cat:'engine',icon:'💻',hp:'+20–40 whp',hpNum:30,diff:'Software only',diffC:'blue',price:450,tune:'IS the tune',compat:'ok',badge:'✓ COMPATIBLE',pop:85,desc:'Custom tune for your platform. Huge value mod.',amazon:'https://www.amazon.com/s?k=performance+ecu+tune',ebay:'https://www.ebay.com/sch/i.html?_nkw=performance+ecu+tune',rockauto:'https://www.rockauto.com'},
  {id:4,name:'Coilover Kit',brand:'BC Racing / KW / Eibach',cat:'suspension',icon:'🔩',hp:'N/A',hpNum:0,diff:'Moderate',diffC:'amber',price:1200,tune:'Alignment required',compat:'ok',badge:'✓ COMPATIBLE',pop:84,desc:'Height + damper adjustability. Alignment after install.',amazon:'https://www.amazon.com/s?k=coilover+kit',ebay:'https://www.ebay.com/sch/i.html?_nkw=coilover+kit',rockauto:'https://www.rockauto.com'},
  {id:5,name:'Performance Brake Pads',brand:'Hawk / EBC / StopTech',cat:'brakes',icon:'🔴',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:120,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:80,desc:'Improved bite and fade resistance. Easy DIY.',amazon:'https://www.amazon.com/s?k=performance+brake+pads',ebay:'https://www.ebay.com/sch/i.html?_nkw=performance+brake+pads',rockauto:'https://www.rockauto.com'},
  {id:6,name:'Aftermarket Wheels',brand:'Volk / Method / HRE',cat:'wheels',icon:'⭕',hp:'N/A',hpNum:0,diff:'Easy',diffC:'green',price:1400,tune:'Not required',compat:'ok',badge:'✓ COMPATIBLE',pop:86,desc:'Check bolt pattern and offset before ordering.',amazon:'https://www.amazon.com/s?k=aftermarket+wheels',ebay:'https://www.ebay.com/sch/i.html?_nkw=aftermarket+wheels',rockauto:'https://www.rockauto.com'},
];

// Helper: get parts for a given make/model
function getPartsForVehicle(make, model) {
  const vehicleData = VEHICLE_DB[make]?.[model];
  if (!vehicleData) return PARTS_BY_PLATFORM["default"];
  const platform = vehicleData.platform;
  return PARTS_BY_PLATFORM[platform] || PARTS_BY_PLATFORM["default"];
}

// Helper: get all makes
function getMakes() { return Object.keys(VEHICLE_DB); }

// Helper: get models for a make
function getModels(make) { return make ? Object.keys(VEHICLE_DB[make] || {}) : []; }

// Helper: get trims for a make+model
function getTrims(make, model) {
  return make && model ? Object.keys(VEHICLE_DB[make]?.[model]?.trims || {}) : [];
}

// Helper: get trim info
function getTrimInfo(make, model, trim) {
  return VEHICLE_DB[make]?.[model]?.trims?.[trim] || null;
}

// Helper: get all years for a make+model
function getYears(make, model) {
  return VEHICLE_DB[make]?.[model]?.years || [];
}
