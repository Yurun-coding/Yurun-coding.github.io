window.PROJECTS = {
  "light-trapping": {
    "title": "Light Trapping Parameterisation for Silicon Solar Cells",
    "codeLink": "https://github.com/Yurun-coding/Light-Trapping-Project",
    "category": "Research engineering",
    "year": "2024",
    "institution": "McMaster University",
    "role": "Undergraduate thesis researcher",
    "deck": "A rapid optical method for estimating how effectively a crystalline-silicon solar cell traps light inside the material.",
    "hero": "../assets/images/cover-light-trapping.webp",
    "heroAlt": "Silicon surface texture and an illustration of internal light paths",
    "heroFit": "contain",
    "overview": "Solar cells perform better when incoming light travels farther through the silicon. I developed a proof-of-concept method that observes where internally reflected light escapes, then connects the measured pattern to the optical pathlength-enhancement factor.",
    "details": [
      [
        "Project",
        "Undergraduate thesis"
      ],
      [
        "Role",
        "Optical setup, modelling and image analysis"
      ],
      [
        "Tools",
        "Python, 1550 nm tunable laser, InGaAs camera"
      ],
      [
        "Methods",
        "Ray tracing, centroid detection, curve fitting"
      ],
      [
        "Output",
        "Preliminary pathlength-enhancement estimate"
      ]
    ],
    "overviewMedia": [
      {
        "type": "image",
        "src": "../assets/images/light-trapping-rig.webp",
        "alt": "Optical test bench with the laser path, sample stage and camera",
        "caption": "The assembled optical system used to illuminate the silicon samples and image the escaping light."
      },
      {
        "type": "image",
        "src": "../assets/images/light-trapping-rig-labelled.webp",
        "alt": "Labelled top view of the light-trapping optical system",
        "caption": "Labelled setup: fibre collimator and lens direct 1550 nm light onto the sample, while the objective and InGaAs camera capture the reflected and escaping light."
      }
    ],
    "approachTitle": "",
    "approachParagraphs": [
      "At 1550 nm, silicon absorbs light weakly. This allowed the camera to observe light that entered the sample, reflected internally and eventually escaped through the front surface.",
      "The experiment was paired with a 10-million-ray Python model of an idealised Lambertian cell. Comparing simulated and measured escape patterns created a practical path from camera pixels to a light-trapping estimate."
    ],
    "steps": [
      [
        "Build the optical path",
        "Aligned a tunable laser, fibre collimator, biconvex lens, sample stage, objective and InGaAs camera to capture front reflection and escaping internally reflected light."
      ],
      [
        "Create an ideal reference",
        "Modelled Lambertian scattering, a perfect rear reflector and escape through the front-surface cone for 10 million rays."
      ],
      [
        "Turn images into distributions",
        "Located the intensity centroid in each 640 × 512, 16-bit image and accumulated pixel intensity against distance from the incident spot."
      ],
      [
        "Compare structure and response",
        "Examined three cells with different combinations of surface texture and rear reflectors, then compared their escape patterns with the idealised model."
      ]
    ],
    "featureSections": [
      {
        "title": "Deriving the parameterisation and fitting the curve",
        "paragraphs": [
          "The model showed that the characteristic escaping radius, R, grows with the cell thickness, w, and the square root of the low-absorption pathlength-enhancement factor, Z₀. This gives the working relationship below.",
          "A modified Lorentzian function closely followed the simulated escaping-radius distribution. The same curve form was then fitted to the measured intensity distribution after replacing the front-reflection-dominated region with extrapolated internally reflected-light data."
        ],
        "equation": "Z₀ ∝ (R / w)²",
        "media": [
          {
            "src": "../assets/images/light-trapping-ideal-fit.webp",
            "alt": "Modified Lorentzian curve fitted to simulated escaping radius",
            "caption": "Ideal-cell simulation: a modified Lorentzian curve fitted the escaping-radius distribution."
          },
          {
            "src": "../assets/images/light-trapping-measured-fit.webp",
            "alt": "Measured total intensity plotted against escaping radius with fitted curve",
            "caption": "Experimental distribution: measured intensity and the fitted curve used for the preliminary estimate."
          }
        ]
      }
    ],
    "resultsHeading": "Key results and conclusions",
    "resultsParagraphs": [
      "Combining measurements at 1550 nm with a 10-million-ray simulation demonstrated a practical route from an image of escaping light to an estimate of light-trapping performance.",
      "For the analysed double-textured cell with a rear reflector, the preliminary pathlength-enhancement factor was 14.2, compared with an ideal silicon reference of approximately 49–50. This proof-of-concept estimate assumes a 150 µm cell thickness and idealised path statistics; validation with samples of known thickness and light-trapping performance remains necessary."
    ],
    "poster": {
      "src": "../assets/images/light-trapping-poster.webp",
      "alt": "Research poster for the silicon solar-cell light-trapping thesis",
      "caption": "Research poster summarising the thesis method, simulation and preliminary experimental results."
    },
    "next": [
      "light-diffuser.html",
      "Holographic Light Shaping Diffuser Process Optimisation"
    ]
  },
  "pressure-sensor": {
    "title": "High Temperature Flexible Pressure Sensor",
    "category": "Practical engineering + printed electronics",
    "year": "2021",
    "institution": "BabelFlex",
    "role": "R&D Engineer Intern",
    "deck": "Developing a printed flexible sensor while improving process consistency, sealing and reliability testing.",
    "hero": "../assets/images/cover-pressure-sensor.webp",
    "heroAlt": "Flexible pressure-sensor prototype under compression testing",
    "heroFit": "portrait",
    "overview": "Working with senior engineers and laboratory technicians, I developed and tested an initial flexible pressure-sensor prototype for high-temperature use. The project linked resistive-material formulation, screen printing, sealing and reliability testing into one development loop.",
    "details": [
      [
        "Project",
        "R&D internship"
      ],
      [
        "Role",
        "Prototype development and testing"
      ],
      [
        "Materials",
        "Carbon-nanotube/polymer resistive paste"
      ],
      [
        "Methods",
        "Screen printing, electrical testing, data analysis"
      ],
      [
        "Outputs",
        "Prototype, test SOP, patent-application draft"
      ]
    ],
    "overviewMedia": [
      {
        "type": "video",
        "src": "../assets/videos/pressure-sensor-printing.webm",
        "muted": true,
        "caption": "Screen-printing process used to deposit electrodes and the resistive layer onto the substrates."
      },
      {
        "type": "image",
        "src": "../assets/images/sensor-sample.webp",
        "alt": "Alternative pressure-sensor prototype configuration",
        "caption": "An alternative prototype configuration prepared for testing."
      },
      {
        "type": "image",
        "src": "../assets/images/sensor-testing.webp",
        "alt": "Pressure sensor mounted beneath a digital force gauge",
        "caption": "Prototype mounted for controlled loading during response and reliability testing."
      }
    ],
    "approachTitle": "Improving the whole process, not only the material",
    "approachParagraphs": [
      "A printed sensor is sensitive to more than its functional ink. Paste behaviour, print quality, sealing and test conditions all influence whether one device responds like the next.",
      "I treated those variables as a connected manufacturing system: adjust the material and print process, measure the response, review the data and refine the protective sealing."
    ],
    "steps": [
      [
        "Formulate and print",
        "Optimised a carbon-nanotube/polymer composite resistive paste and the screen-printing process used to create the sensing layer."
      ],
      [
        "Measure consistency",
        "Tested printed samples and analysed their electrical response to understand variation between devices."
      ],
      [
        "Improve protection",
        "Refined the sealing process to support more reliable prototype performance in demanding conditions."
      ],
      [
        "Make the method repeatable",
        "Wrote the reliability-test standard operating procedure and drafted a patent application describing the development."
      ]
    ],
    "approachMedia": {
      "heading": "From the first prototype to the current product",
      "intro": "The two images show the development context without presenting the commercial product as my internship prototype.",
      "items": [
        {
          "src": "../assets/images/sensor-commercial.webp",
          "alt": "Current commercially available pressure sensor",
          "caption": "Commercial product - the currently available upgraded product, shown for context."
        },
        {
          "src": "../assets/images/sensor-prototype.webp",
          "alt": "Large-format first flexible pressure-sensor prototype",
          "caption": "Prototype 1 - the early printed prototype developed during the internship."
        }
      ]
    },
    "resultsHeading": "Key results",
    "results": [
      [
        "30%",
        "Better consistency",
        "Improvement in resistive-layer performance consistency after material and process optimisation."
      ],
      [
        "1 SOP",
        "Repeatable testing",
        "A documented reliability procedure enabled consistent future evaluation."
      ],
      [
        "Prototype",
        "Integrated outcome",
        "Printed sensing material, flexible construction and sealing were brought together for testing."
      ],
      [
        "Draft",
        "Patent application",
        "Prepared the technical draft without implying a granted patent or ownership claim."
      ]
    ],
    "next": [
      "composite-bonding.html",
      "Aluminium + Composite Tube Bonding"
    ]
  },
  "concrete-canoe": {
    "title": "Lightweight Concrete Canoe",
    "category": "Practical engineering + team manufacturing",
    "year": "2024",
    "institution": "McMaster Concrete Canoe Team",
    "role": "Mix design, fabrication and paddling",
    "deck": "A lightweight concrete canoe reinforced with glass-fibre mesh, balancing strength, low density and workability.",
    "hero": "../assets/images/cover-canoe.webp",
    "heroAlt": "McMaster lightweight concrete canoe at competition",
    "heroFit": "portrait",
    "overview": "For McMaster's first Canadian National Concrete Canoe Competition entry, I contributed to developing and testing 14 lightweight mixes, casting the reinforced hull and finishing the completed canoe. I also competed as a paddler at the national competition.",
    "details": [
      [
        "Project",
        "Student design competition"
      ],
      [
        "Role",
        "Mix trials, casting, finishing and paddling"
      ],
      [
        "Materials",
        "Lightweight concrete, PVA fibre, glass-fibre mesh"
      ],
      [
        "Methods",
        "Mix testing, mould fabrication, layered casting"
      ],
      [
        "Output",
        "Full-scale competition canoe"
      ]
    ],
    "overviewMedia": [
      {
        "type": "video",
        "src": "../assets/videos/concrete-canoe.mp4",
        "muted": true,
        "caption": "Placing rolled concrete tiles over the mould to build the reinforced canoe hull."
      },
      {
        "type": "image",
        "src": "../assets/images/canoe-build.webp",
        "alt": "Team members casting concrete around the full-scale canoe mould",
        "caption": "Casting the reinforced hull around the full-scale male mould."
      },
      {
        "type": "image",
        "src": "../assets/images/canoe-finished.webp",
        "alt": "Yurun paddling at the bow of the concrete canoe",
        "caption": "Paddling at the bow during the national competition."
      }
    ],
    "approachTitle": "",
    "approachParagraphs": [
      "A canoe needs concrete that is light enough to float and race, workable enough to form over a mould, and strong enough to survive handling and paddling. No single property could be optimised in isolation.",
      "The team used staged mix development and a thin, mesh-reinforced section to meet those competing requirements while keeping fabrication practical for a student workshop."
    ],
    "steps": [
      [
        "Develop the mix",
        "Tested 14 formulations using Poraver expanded-glass aggregate in three size ranges with Portland-limestone cement, slag, silica fume and recycled-glass powder."
      ],
      [
        "Build the mould",
        "The team built a male mould using laser-cut 6 mm birch-plywood sections."
      ],
      [
        "Cast in controlled layers",
        "Rolled concrete tiles to consistent thickness in reusable frames, then placed a 12 mm inner layer, one glass-fibre mesh layer and a 6 mm outer layer."
      ],
      [
        "Finish and verify",
        "Sanded with abrasives, measured thickness at approximately 0.5 m intervals, stained the exterior and applied two coats of silane-based water-repellent sealer."
      ]
    ],
    "next": [
      "concrete-skis.html",
      "High Performance Concrete Skis"
    ]
  },
  "concrete-skis": {
    "title": "High Performance Concrete Skis",
    "category": "Practical engineering + team manufacturing",
    "year": "2022",
    "institution": "McMaster Concrete Toboggan Team",
    "role": "Design, manufacture, testing and assembly",
    "deck": "A thin reinforced-concrete ski system shaped for stability, steering and survival after cracking.",
    "hero": "../assets/images/cover-skis.webp",
    "heroAlt": "Completed grooved concrete skis with steel mounting frames",
    "overview": "I contributed to the three-dimensional ski and mould geometry, material trials, fabrication and assembly of 30 mm ultra-high-performance concrete skis. The system combined concrete, internal steel, dispersed fibres and external carbon-fibre reinforcement.",
    "details": [
      [
        "Project",
        "Student design competition"
      ],
      [
        "Role",
        "3D modelling, trial testing, fabrication and assembly"
      ],
      [
        "Materials",
        "UHPC, steel fibre, steel grid, carbon fibre"
      ],
      [
        "Methods",
        "CNC moulding, compression, split tension, flexure"
      ],
      [
        "Output",
        "Full-scale reinforced concrete skis"
      ]
    ],
    "overviewMedia": [
      {
        "type": "image",
        "src": "../assets/images/ski-moulds.jpg",
        "alt": "Ski mould with internal reinforcement",
        "caption": "Ski mould with reinforcement in place."
      },
      {
        "type": "image",
        "src": "../assets/images/ski-drawing.png",
        "alt": "Engineering drawing of the front ski",
        "caption": "Drawing of the front ski."
      },
      {
        "type": "image",
        "src": "../assets/images/ski-testing.webp",
        "alt": "Grinding excess carbon fibre from the ski",
        "caption": "Grinding off excess carbon fibre during finishing."
      },
      {
        "type": "image",
        "src": "../assets/images/ski-team-completed.jpg",
        "alt": "Two team members holding completed concrete skis in the workshop",
        "caption": "Team members with the completed concrete skis, showing the grooved sliding surface and reinforced mounting side."
      }
    ],
    "approachTitle": "Using several materials where each performs best",
    "approachParagraphs": [
      "Concrete carries compression well but needs help under tension and after cracking. The ski design therefore used three reinforcing systems, each with a different role in controlling damage and preserving the overall shape.",
      "Geometry mattered too: wider sliding surfaces improved stability while longitudinal channels helped the toboggan steer on snow."
    ],
    "steps": [
      [
        "Shape the ski",
        "Contributed to the three-dimensional ski geometry and negative mould models used to CNC-route custom styrofoam moulds."
      ],
      [
        "Select the concrete",
        "Helped fabricate trial specimens and conduct compression, split-tension and four-point flexural testing to compare steel- and polymer-fibre mixes."
      ],
      [
        "Build layered reinforcement",
        "Combined dispersed steel fibres, an internal steel grid near the tensile face and biaxial carbon-fibre cloth bonded to the top surface."
      ],
      [
        "Finish for snow",
        "Cured the skis in lime-saturated water, sanded the sliding faces after 28 days and applied temperature-rated ski wax to reduce friction."
      ]
    ],
    "resultsHeading": "Key results",
    "results": [
      [
        "75.04 MPa",
        "Compressive strength",
        "Measured at 28 days for the selected steel-fibre trial mix."
      ],
      [
        "9.77 MPa",
        "Split-tensile strength",
        "Measured at 28 days for the same selected trial."
      ],
      [
        "3",
        "Reinforcement systems",
        "Steel fibres, an internal steel grid and external biaxial carbon-fibre cloth worked together."
      ]
    ],
    "next": [
      "light-trapping.html",
      "Light Trapping Parameterisation for Silicon Solar Cells"
    ]
  },
  "light-diffuser": {
    "title": "Holographic Light Shaping Diffuser Process Optimisation",
    "category": "Research + experimental engineering",
    "year": "2024",
    "institution": "McMaster University",
    "role": "Team capstone researcher",
    "deck": "Identifying a commercial optical film and investigating how hot-roll lamination changed its surface and light distribution.",
    "hero": "../assets/images/cover-light-diffuser.webp",
    "heroAlt": "Examples of light shaped by a holographic diffuser",
    "heroFit": "contain",
    "overview": "Our capstone team characterised a two-layer diffuser film, designed an optical test method and simulated roll-to-roll processing. The work connected chemical identity and thermal behaviour with visible damage to the microlens surface and changes in projected light.",
    "details": [
      [
        "Project",
        "Industry-supported team capstone"
      ],
      [
        "Role",
        "Characterisation, optical testing and interpretation"
      ],
      [
        "Tools",
        "XRD, Raman, FTIR, DSC, optical microscopy, SEM"
      ],
      [
        "Processing",
        "Hot-roll lamination at 140–180 °C"
      ],
      [
        "Output",
        "Processing recommendation and final report"
      ]
    ],
    "approachTitle": "Connecting chemistry, temperature and optical performance",
    "approachParagraphs": [
      "The diffuser used a transparent base and a patterned surface that spread projected light into an ellipse. Before assessing a manufacturing route, the team first needed to identify those layers and understand their thermal limits.",
      "We then measured light intensity across the projected pattern and used microscopy to explain why the response changed after lamination."
    ],
    "steps": [
      [
        "Identify the layers",
        "Used X-ray diffraction, Raman spectroscopy, FTIR and DSC to identify amorphous polycarbonate as the base and an acrylate, most likely PMMA, as the diffuser layer."
      ],
      [
        "Measure optical response",
        "Built a setup with a projector, diffuser sample, Stewart screen and Minolta LS-100 meter, measuring horizontal and vertical profiles at 1 cm intervals."
      ],
      [
        "Define processing limits",
        "Used a ChemInstruments HL-200 laminator with unheated glass from 140–180 °C and preheated glass from 160–175 °C in 5 °C steps."
      ],
      [
        "Relate damage to performance",
        "Compared luminance profiles with optical microscopy and SEM images of cracking, distortion and loss of microlens depth."
      ]
    ],
    "featureSections": [
      {
        "title": "Characterisation equipment and material evidence",
        "paragraphs": [
          "Each method answered a different part of the material-identification problem. The combined evidence was more useful than any one instrument result."
        ],
        "items": [
          {
            "title": "X-ray diffraction",
            "copy": "A broad amorphous diffraction pattern matched polycarbonate, supporting identification of the transparent base layer.",
            "media": [
              {
                "src": "../assets/images/diffuser-xrd-device.webp",
                "alt": "Bruker D8 Discover X-ray diffractometer",
                "caption": "Bruker D8 Discover used for X-ray diffraction."
              },
              {
                "src": "../assets/images/diffuser-xrd-result.webp",
                "alt": "X-ray diffraction pattern for the diffuser base layer",
                "caption": "The broad XRD response was consistent with amorphous polycarbonate."
              }
            ]
          },
          {
            "title": "Fourier-transform infrared spectroscopy",
            "copy": "The spectra showed carbonate-related features in the base layer and acrylate-related features in the diffuser layer, supporting a likely PMMA interpretation.",
            "media": [
              {
                "src": "../assets/images/diffuser-ftir-device.webp",
                "alt": "Nicolet 6700 FTIR spectrometer",
                "caption": "Nicolet 6700 FTIR spectrometer used to examine both film layers."
              },
              {
                "src": "../assets/images/diffuser-ftir-result.webp",
                "alt": "FTIR spectrum of the diffuser layer with annotated functional groups",
                "caption": "Diffuser-layer spectrum with acrylate-related functional groups annotated."
              }
            ]
          },
          {
            "title": "Differential scanning calorimetry",
            "copy": "Thermal analysis showed a feature at 172.6 °C, interpreted in the report as melting. This result was considered alongside the spectroscopy evidence; the apparent glass-transition feature was not clear enough for a definitive conclusion.",
            "media": [
              {
                "src": "../assets/images/diffuser-dsc-device.webp",
                "rotate": true,
                "alt": "TA Instruments Q200 differential scanning calorimeter",
                "caption": "TA Instruments Q200 used for thermal analysis."
              },
              {
                "src": "../assets/images/diffuser-dsc-result.webp",
                "alt": "DSC curve for a shaving of the diffuser film",
                "caption": "DSC curve showing the thermal feature at 172.6 °C; the glass-transition feature remained inconclusive."
              }
            ]
          }
        ]
      },
      {
        "title": "Optical test system and processing response",
        "paragraphs": [
          "A projector sent a white square through each diffuser sample onto a Stewart screen. A Minolta LS-100 luminance meter recorded horizontal and vertical intensity profiles at 1 cm intervals across the elliptical light pattern."
        ],
        "media": [
          {
            "src": "../assets/images/diffuser-optical-setup.webp",
            "alt": "Schematic and photograph of the diffuser optical test setup",
            "caption": "Optical test arrangement with projector, diffuser, screen and luminance meter."
          },
          {
            "src": "../assets/images/diffuser-optical-result.webp",
            "alt": "Horizontal luminance profiles after lamination at different temperatures",
            "caption": "For the unheated glass substrate, higher lamination temperatures generally produced higher peak luminance, indicating weaker diffusion."
          }
        ]
      },
      {
        "title": "Connecting surface damage with weaker diffusion",
        "paragraphs": [
          "Optical microscopy and SEM showed cracking, distortion and a loss of microlens depth as the processing temperature increased. These surface changes explain why more light remained concentrated near the centre of the projected pattern."
        ],
        "media": [
          {
            "src": "../assets/images/diffuser-microscopy.webp",
            "alt": "Optical micrographs showing diffuser surface damage",
            "caption": "Optical microscopy comparing cracks and distortion in the diffuser layer."
          },
          {
            "src": "../assets/images/diffuser-sem.webp",
            "alt": "SEM images showing changes in the diffuser microlens array",
            "caption": "SEM images showing the microlenses becoming more equiaxed and losing depth at higher temperatures."
          },
          {
            "src": "../assets/images/diffuser-damage-180.webp",
            "alt": "Diffuser film damaged after high-temperature lamination",
            "caption": "Film after the 180 °C unheated-substrate trial, showing severe warping and cracking."
          }
        ]
      }
    ],
    "conclusion": {
      "title": "Conclusions",
      "paragraphs": [
        "The film was identified as an amorphous polycarbonate base with an acrylate diffuser layer most likely to be PMMA. The patterned microlens surface, rather than the bulk base film, controlled the shape of the projected light.",
        "The extreme-temperature trials defined a damage boundary rather than a recommended production window. Future processing should use an adhesive layer and substantially lower temperatures to avoid cracking, warping and loss of microlens depth."
      ]
    },
    "poster": {
      "src": "../assets/images/light-diffuser-poster.webp",
      "alt": "Research poster for the holographic light-shaping diffuser capstone project",
      "caption": "Research poster summarising the material characterisation, optical testing and processing recommendations."
    },
    "next": [
      "pressure-sensor.html",
      "High Temperature Flexible Pressure Sensor"
    ]
  },
  "composite-bonding": {
    "title": "Aluminium + Composite Tube Bonding",
    "category": "Practical engineering + composite manufacturing",
    "year": "Current",
    "institution": "University of Canterbury",
    "role": "Assisting with tooling design and specimen preparation",
    "deck": "Supporting mould design and composite fabrication in preparation for a study of aluminium–composite joints at cryogenic temperatures.",
    "hero": "../assets/images/cover-composite.webp",
    "heroAlt": "Cylindrical tooling for an aluminium and composite bonded-joint specimen",
    "overview": "I am currently assisting with SolidWorks mould design and composite-cylinder fabrication, while we prepare specimens for double-lap shear and cylinder torsion tests. This preparation will support the research project that I plan to continue afterwards, conducting the tests and using materials knowledge to analyse and interpret the results.",
    "details": [
      [
        "Project",
        "Cryogenic bonded-joint study"
      ],
      [
        "Role",
        "Supporting SolidWorks design and specimen fabrication"
      ],
      [
        "Materials",
        "Aluminium, G10 and basalt-fibre/epoxy"
      ],
      [
        "Planned methods",
        "Thermal expansion, double-lap shear and cylinder torsion testing"
      ],
      [
        "Status",
        "Specimen preparation underway; testing and analysis planned"
      ]
    ],
    "overviewMedia": [
      {
        "type": "image",
        "src": "../assets/images/composite-cad.webp",
        "alt": "CAD view of the multipart mould and cylindrical specimen geometry",
        "caption": "CAD development of the multipart tooling around the cylindrical specimen geometry."
      },
      {
        "type": "image",
        "src": "../assets/images/composite-mould.webp",
        "alt": "Stages of glass-fibre tube fabrication",
        "caption": "Glass-fibre tube fabrication."
      },
      {
        "type": "image",
        "src": "../assets/images/composite-tooling.webp",
        "alt": "3D-printed mould and mandrel components",
        "caption": "3D-printed mould and mandrel components."
      }
    ],
    "approachTitle": "Refining the tooling and fabrication process",
    "approachParagraphs": [
      "I assisted in refining the mould and mandrel through three SolidWorks design iterations to improve control of composite tube thickness and ease of handling during fabrication. After each fabrication trial, I helped optimise the epoxy quantity and adjust the workflow to make the process more consistent and practical.",
      "Establishing a consistent fabrication process is an important part of the preparation: variation in specimen geometry or manufacture could make it harder to distinguish material behaviour from fabrication effects in the later tests.",
      "We are currently preparing both double-lap shear specimens and bonded-cylinder torsion specimens. My present contribution is to this design and fabrication stage; mechanical testing and analysis are planned for the research phase that I will continue afterwards."
    ],
    "steps": [],
    "featureSections": [
      {
        "title": "Why the bonded joint matters",
        "paragraphs": [
          "The proposed application is a superconducting motor rotor. A fibre-reinforced epoxy tube would replace a thin-walled stainless-steel section to reduce heat leakage into the cold region, while an aluminium rotor structure would help maintain a more uniform temperature around the superconducting coils. The bonded connection must therefore transfer mechanical loads while joining materials chosen for different thermal functions.",
          "The study will investigate whether differences in thermal contraction between aluminium and the composite affect joint strength and failure during cooling. The planned comparison includes G10 glass-fibre laminate and basalt-fibre/epoxy. Their thermal expansion behaviour will help assess the stresses that may develop in the adhesive as the joint cools; the influence on strength is a research question, not an established result from this project."
        ]
      },
      {
        "title": "Planned testing and materials analysis",
        "paragraphs": [
          "I plan to conduct double-lap shear tests to compare bonded-joint behaviour, followed by torsion tests on bonded cylinders to investigate loading closer to the proposed rotor connection. The test programme is intended to compare room-temperature and cryogenic performance, including testing at liquid-nitrogen temperature, approximately 77 K.",
          "I will analyse the measured strength and observed failure behaviour, using materials knowledge to develop predictions and interpret the results. This will involve considering thermal-expansion mismatch, the temperature-dependent behaviour of the epoxy, composite structure and specimen quality. The aim is to understand why joints behave differently and use that understanding to inform material selection and joint design."
        ]
      }
    ],
    "next": [
      "concrete-canoe.html",
      "Lightweight Concrete Canoe"
    ]
  }
};

