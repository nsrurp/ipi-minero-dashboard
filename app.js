/* ============================================================
   DATA
============================================================ */
const D = window.MACH_DATA;
const ALL_MONTHS  = D.months;
const IPI_GENERAL = D.ipiGeneral;
const IPI_VAR     = D.ipiVar;
const PETROLEO    = D.petroleo;
const GAS         = D.gas;
const METALIFEROS = D.metaliferos;
const PLATA_ORO   = D.plataOro;
const LITIO_IDX   = D.litioIdx;
const LITIO_TONS  = D.litioTons;
const IPI_ANUAL_YEARS = D.anualYears;
const IPI_ANUAL_VALS  = D.anualVals;

const PROJECTS = [
  {id:1,  name:"Olaroz",              mineral:"Litio",      empresa:"Rio Tinto / Lithium Americas", provincia:"Jujuy",      status:"produccion", lat:-23.48,lng:-66.65, inv:"USD 570M",   det:"Primer productor de litio baterías de Argentina. Capacidad Stage 1: 25.000 t/año LCE. Reservas: 16,1 Mt LCE. ~700 empleos directos. Rio Tinto adquirió el control en 2024 por USD 6.700M."},
  {id:2,  name:"Cauchari-Olaroz",     mineral:"Litio",      empresa:"Ganfeng / Lithium Americas",   provincia:"Jujuy",      status:"produccion", lat:-23.55,lng:-66.58, inv:"USD 600M",   det:"En rampa de producción desde 2024. Capacidad: 40.000 t/año LCE. Uno de los salares más grandes del mundo. Ganfeng Lithium (China) controla el 46,7%."},
  {id:3,  name:"Providencia",         mineral:"Plata",      empresa:"Hanaq Group",                  provincia:"Jujuy",      status:"produccion", lat:-22.45,lng:-65.88, inv:"",           det:"Yacimiento de plata en operación en la Puna jujeña."},
  {id:4,  name:"Chinchillas",         mineral:"Plata",      empresa:"SSR Mining",                   provincia:"Jujuy",      status:"produccion", lat:-22.70,lng:-66.15, inv:"",           det:"Mina polimetálica de plata, plomo y zinc."},
  {id:5,  name:"Aguilar",             mineral:"Plomo/Zinc", empresa:"Cía. Minera Aguilar",          provincia:"Jujuy",      status:"produccion", lat:-23.18,lng:-65.72, inv:"",           det:"Producción de plomo y zinc. Operación histórica en la Puna jujeña."},
  {id:6,  name:"Lindero",             mineral:"Oro",        empresa:"Mansfield Minera",             provincia:"Salta",      status:"produccion", lat:-26.52,lng:-68.15, inv:"USD 280M",   det:"Producción: ~120.000 oz Au/año. Open pit heap leach a 4.300 msnm. Reservas probadas: 1,2 Moz Au. ~600 empleos directos. Primera mina de oro en Salta en la era moderna."},
  {id:7,  name:"Centenario-Ratones",  mineral:"Litio",      empresa:"Eramet",                       provincia:"Salta",      status:"produccion", lat:-24.85,lng:-66.80, inv:"USD 800M",   det:"En rampa de producción. Capacidad: 24.000 t/año de carbonato de litio."},
  {id:8,  name:"Mariana",             mineral:"Litio",      empresa:"Ganfeng Lithium",              provincia:"Salta",      status:"produccion", lat:-24.98,lng:-67.65, inv:"",           det:"Producción de litio en el Salar Llullaillaco."},
  {id:9,  name:"Sal de Oro",          mineral:"Litio",      empresa:"POSCO / Litio Minera Arg.",    provincia:"Salta",      status:"produccion", lat:-24.50,lng:-67.10, inv:"USD 830M",   det:"Producción de hidróxido y carbonato de litio."},
  {id:10, name:"Fénix",               mineral:"Litio",      empresa:"Rio Tinto / POSCO",            provincia:"Catamarca",  status:"produccion", lat:-26.05,lng:-67.02, inv:"USD 1.200M", det:"Salar del Hombre Muerto (Catamarca). Stage 1: 25.000 t/año LCE operativo. Rio Tinto adquirió el proyecto (ex-POSCO) en 2024. Reservas: 12,5 Mt LCE. Altísima calidad de salmuera."},
  {id:11, name:"Farallón Negro",      mineral:"Oro",        empresa:"YMAD",                         provincia:"Catamarca",  status:"produccion", lat:-27.25,lng:-66.75, inv:"",           det:"Complejo minero estatal. Oro y polimetálico."},
  {id:12, name:"Tres Quebradas",      mineral:"Litio",      empresa:"Zijin Mining",                 provincia:"Catamarca",  status:"produccion", lat:-27.05,lng:-67.22, inv:"USD 380M",   det:"Salar Tres Quebradas. En producción desde 2024."},
  {id:13, name:"Veladero",            mineral:"Oro",        empresa:"Barrick Gold",                 provincia:"San Juan",   status:"produccion", lat:-29.52,lng:-69.58, inv:"",           det:"Mayor mina open pit de oro de San Juan. Producción: ~300.000 oz Au/año (heap leach). Reservas: 4,7 Moz Au. ~1.500 empleos directos. Barrick Gold opera desde 2005. Proyecto Alturas ampliaría la vida útil."},
  {id:14, name:"Gualcamayo",          mineral:"Oro",        empresa:"Mineros SA",                   provincia:"San Juan",   status:"produccion", lat:-29.85,lng:-68.50, inv:"",           det:"Mina de oro a cielo abierto."},
  {id:15, name:"Casposo",             mineral:"Cobre/Oro",  empresa:"Austral Gold",                 provincia:"San Juan",   status:"produccion", lat:-30.02,lng:-69.05, inv:"",           det:"Yacimiento de cobre y oro."},
  {id:16, name:"Cerro Negro",         mineral:"Oro",        empresa:"Newmont",                      provincia:"Santa Cruz",  status:"produccion", lat:-47.52,lng:-66.82, inv:"USD 1.500M", det:"La mina de oro de mayor producción de Argentina. ~600.000 oz Au/año. Mina subterránea epitermal. Reservas: 3,4 Moz Au+Ag. ~2.000 empleos directos. Newmont (EE.UU.) opera desde 2013. Principal exportador de Santa Cruz."},
  {id:17, name:"Cerro Vanguardia",    mineral:"Oro/Plata",  empresa:"AngloGold Ashanti",            provincia:"Santa Cruz",  status:"produccion", lat:-47.62,lng:-67.38, inv:"",           det:"Producción de oro y plata. Operación epitermal."},
  {id:18, name:"Cerro Moro",          mineral:"Oro/Plata",  empresa:"Coeur Mining",                 provincia:"Santa Cruz",  status:"produccion", lat:-47.35,lng:-66.52, inv:"USD 420M",   det:"Mina subterránea de alta ley: ~3 g/t AuEq. Producción: ~120.000 oz Au + 4 Moz Ag/año. Coeur Mining opera desde 2018. Reservas: 0,7 Moz AuEq."},
  {id:19, name:"Don Nicolás",         mineral:"Oro/Plata",  empresa:"Cerrado Gold",                 provincia:"Santa Cruz",  status:"produccion", lat:-47.82,lng:-65.52, inv:"",           det:"Operación de oro y plata en Santa Cruz."},
  {id:20, name:"San José",            mineral:"Oro/Plata",  empresa:"Hochschild Mining",            provincia:"Santa Cruz",  status:"produccion", lat:-48.08,lng:-66.02, inv:"",           det:"Mina subterránea polimetálica."},
  {id:21, name:"Manantial Espejo",    mineral:"Plata/Oro",  empresa:"Pan American Silver",          provincia:"Santa Cruz",  status:"produccion", lat:-47.85,lng:-65.85, inv:"",           det:"Mina epitermal de plata y oro."},
  {id:22, name:"Mina Martha",         mineral:"Plata",      empresa:"Patagonia Gold",               provincia:"Santa Cruz",  status:"produccion", lat:-48.15,lng:-67.02, inv:"",           det:"Histórica mina de plata."},
  {id:23, name:"Río Turbio",          mineral:"Carbón",     empresa:"YCRT (estatal)",               provincia:"Santa Cruz",  status:"produccion", lat:-51.55,lng:-72.32, inv:"",           det:"Único yacimiento de carbón en producción de Argentina."},
  {id:24, name:"Salar del Rincón",    mineral:"Litio",      empresa:"Rio Tinto",                    provincia:"Salta",      status:"factibilidad", lat:-23.68,lng:-67.35, inv:"USD 2.500M", det:"Proyecto de litio de clase mundial. Estudio de factibilidad definitivo completado."},
  {id:25, name:"Rincón (Argosy)",     mineral:"Litio",      empresa:"Argosy Minerals",              provincia:"Salta",      status:"factibilidad", lat:-23.72,lng:-67.30, inv:"USD 380M",   det:"Planta piloto operativa. Ramp up hacia producción comercial."},
  {id:26, name:"Taca Taca",           mineral:"Cobre",      empresa:"First Quantum Minerals",       provincia:"Salta",      status:"factibilidad", lat:-24.28,lng:-67.52, inv:"USD 4.500M", det:"Uno de los mayores depósitos de cobre de Argentina. Potencial 200.000 t Cu/año."},
  {id:27, name:"Pastos Grandes",      mineral:"Litio",      empresa:"Lithium Americas",             provincia:"Salta",      status:"factibilidad", lat:-24.62,lng:-66.95, inv:"USD 380M",   det:"Salar Pastos Grandes. Estudio de factibilidad definitivo."},
  {id:28, name:"Diablillos",          mineral:"Plata/Oro",  empresa:"AbraSilver",                   provincia:"Salta",      status:"factibilidad", lat:-25.02,lng:-67.82, inv:"USD 420M",   det:"Depósito epitermal de plata y oro."},
  {id:29, name:"MARA",                mineral:"Cobre",      empresa:"Glencore",                     provincia:"Catamarca",  status:"factibilidad", lat:-27.82,lng:-68.02, inv:"USD 5.000M", det:"Integración de Agua Rica + La Alumbrera (Glencore + YMAD). Producción proyectada: 157.000 t Cu/año + Au/Ag/Mo. Uno de los mayores proyectos de cobre de Sudamérica. EIS en proceso. Bajo análisis RIGI."},
  {id:30, name:"Sal de Vida",         mineral:"Litio",      empresa:"Rio Tinto",                    provincia:"Catamarca",  status:"factibilidad", lat:-26.32,lng:-67.08, inv:"USD 825M",   det:"Salar del Hombre Muerto. Capacidad: 32.000 t/año de carbonato de litio."},
  {id:31, name:"Josemaría",           mineral:"Cobre/Oro",  empresa:"Lundin Mining / BHP",          provincia:"San Juan",   status:"factibilidad", lat:-29.02,lng:-69.85, inv:"USD 4.300M", det:"Lundin Mining (60%) + BHP (30%) + Filo Corp. Proyectado: 130.000 t Cu/año + Au/Ag. Inversión: USD 4.300M. Ingresó al RIGI en 2024. EIS aprobado. Inicio de construcción previsto 2025-2026."},
  {id:32, name:"Los Azules",          mineral:"Cobre",      empresa:"McEwen Copper",                provincia:"San Juan",   status:"factibilidad", lat:-31.05,lng:-70.22, inv:"USD 2.500M", det:"McEwen Copper (principal accionista: Stellantis, Rio Tinto, BHP). Proyectado: 170.000 t Cu/año. Pre-factibilidad completada 2023. Reservas: 10,8 Bt @ 0,42% Cu. Inicio de producción estimado: 2031. Bajo RIGI."},
  {id:33, name:"El Pachón",           mineral:"Cobre",      empresa:"Glencore",                     provincia:"San Juan",   status:"factibilidad", lat:-30.52,lng:-70.48, inv:"USD 3.000M", det:"Pórfido de cobre. Estudio de factibilidad avanzado."},
  {id:34, name:"Filo del Sol",        mineral:"Cobre/Oro",  empresa:"Filo Corp / BHP / Lundin",     provincia:"San Juan",   status:"factibilidad", lat:-28.98,lng:-69.78, inv:"USD 6.000M+", det:"Filo Corp (adquirida por BHP + Lundin 2024, USD 4.500M). Descubrimiento de clase mundial: cobre-oro-plata. Recurso: >1.800 Mt. Primer bloque denominado 'Filo del Sol', segundo 'Ojuela'. Podría ser la mayor mina de cobre de Argentina."},
  {id:35, name:"Hualilán",            mineral:"Oro",        empresa:"Challenger Gold",              provincia:"San Juan",   status:"factibilidad", lat:-30.45,lng:-69.02, inv:"",           det:"Proyecto epitermal de oro y plata en el Valle Fértil."},
  {id:36, name:"Vicuña",              mineral:"Cobre",      empresa:"Lundin Mining",                provincia:"San Juan",   status:"factibilidad", lat:-29.48,lng:-70.02, inv:"",           det:"Pórfido de cobre. Parte del Distrito Vicuña."},
  {id:37, name:"Don Sixto",           mineral:"Oro",        empresa:"AURA Minerals",                provincia:"Mendoza",    status:"factibilidad", lat:-35.52,lng:-69.52, inv:"USD 350M",   det:"Proyecto de oro en el sur mendocino."},
  {id:38, name:"Navidad",             mineral:"Plata",      empresa:"Pan American Silver",          provincia:"Chubut",     status:"exploracion", lat:-42.52,lng:-66.52, inv:"USD 1.000M+", det:"Uno de los 10 mayores depósitos de plata no desarrollados del mundo. Reservas: 632 Moz Ag eq. Inversión estimada: USD 1.000M+. Bloqueado por ley provincial en Chubut (Ley 5001). Debate legislativo activo en 2024-2025."},
  {id:39, name:"Joaquín",             mineral:"Plata/Oro",  empresa:"Unico Silver",                 provincia:"Santa Cruz",  status:"exploracion", lat:-48.52,lng:-67.52, inv:"",           det:"Campaña de perforación activa 2025/2026. +30.000 metros perforados."},
  {id:40, name:"Pingüino",            mineral:"Plata/Zinc", empresa:"",                             provincia:"Santa Cruz",  status:"exploracion", lat:-48.02,lng:-67.02, inv:"",           det:"Proyecto de plata y zinc. Exploración avanzada."},
  {id:41, name:"Potasio Río Colorado",mineral:"Potasio",    empresa:"Vale",                         provincia:"Mendoza",    status:"exploracion", lat:-38.02,lng:-69.02, inv:"USD 5.900M", det:"Enorme depósito de potasio. Proyecto en revisión."},
  {id:42, name:"Kachi",               mineral:"Litio",      empresa:"Lake Resources",               provincia:"Catamarca",  status:"exploracion", lat:-27.52,lng:-67.52, inv:"USD 1.150M", det:"Tecnología DLE. Estudio de factibilidad definitivo actualizado 2025."},
  {id:43, name:"Suyai",               mineral:"Oro",        empresa:"Agnico Eagle / AEM",           provincia:"Río Negro",  status:"exploracion", lat:-41.32,lng:-71.52, inv:"",           det:"Proyecto epitermal subterráneo de oro y plata en la Patagonia andina."},
  {id:44, name:"Calcatreu",           mineral:"Oro/Plata",  empresa:"",                             provincia:"Río Negro",  status:"exploracion", lat:-40.82,lng:-68.52, inv:"",           det:"Depósito epitermal de oro y plata."},
  {id:45, name:"Lunahuasi",           mineral:"Cobre/Oro",  empresa:"NGEx Minerals",                provincia:"San Juan",   status:"exploracion", lat:-29.85,lng:-69.72, inv:"",           det:"Sistema de pórfido de gran escala. 25.003 m perforados en fase 3 (2025)."},
  {id:46, name:"Sierra Pintada",      mineral:"Uranio",     empresa:"CNEA",                         provincia:"Mendoza",    status:"exploracion", lat:-35.22,lng:-68.22, inv:"",           det:"Principal depósito de uranio de Argentina. Empresa estatal CNEA."},
  {id:47, name:"Amarillo Grande",     mineral:"Uranio",     empresa:"Corp. Minera Neuquén",         provincia:"Río Negro",  status:"exploracion", lat:-41.02,lng:-66.52, inv:"",           det:"Proyecto de uranio en la meseta rionegrina."},
  {id:48, name:"Altar",               mineral:"Cobre",      empresa:"Aldebaran Resources",          provincia:"San Juan",   status:"exploracion", lat:-25.52,lng:-68.02, inv:"",           det:"Pórfido de cobre con oro y molibdeno."},
  // ============================================================
  //  PETRÓLEO Y GAS
  // ============================================================
  // VACA MUERTA — PRODUCCIÓN
  {id:49,  name:"Loma Campana",          mineral:"Petróleo/Gas", empresa:"YPF + Chevron",              provincia:"Neuquén",          status:"produccion",   lat:-38.62,lng:-69.32, inv:"USD 1.240M+", det:"Proyecto emblema de Vaca Muerta. Producción: ~60.000 bbl/día de petróleo shale. 1.200+ pozos perforados desde 2013. Inversión acumulada >USD 5.000M. YPF (51%) + Chevron (49%)."},
  {id:50,  name:"Fortín de Piedra",      mineral:"Gas",           empresa:"Tecpetrol (Techint)",         provincia:"Neuquén",          status:"produccion",   lat:-38.85,lng:-69.45, inv:"USD 2.300M",  det:"Mayor proyecto individual de shale gas de Argentina. Producción pico: ~20 MMm³/día. Inversión total: USD 2.300M en 3 años. Tecpetrol (Grupo Techint) invirtió bajo el Plan Gas. ~2.000 empleos."},
  {id:51,  name:"La Amarga Chica",       mineral:"Petróleo",      empresa:"Pan American Energy",        provincia:"Neuquén",          status:"produccion",   lat:-38.75,lng:-69.50, inv:"USD 700M",    det:"Bloque de petróleo shale en Vaca Muerta operado por PAE."},
  {id:52,  name:"Bandurria Sur",         mineral:"Petróleo/Gas", empresa:"Shell Argentina",             provincia:"Neuquén",          status:"produccion",   lat:-38.45,lng:-69.62, inv:"USD 1.000M",  det:"Bloque no convencional Shell. Parte del programa de inversión USD 3.000M."},
  {id:53,  name:"Aguada Federal",        mineral:"Petróleo",      empresa:"Vista Energy + YPF",         provincia:"Neuquén",          status:"produccion",   lat:-38.55,lng:-69.35, inv:"USD 500M",    det:"Vista Energy, uno de los operadores de mayor crecimiento en Vaca Muerta."},
  {id:54,  name:"Bajada del Palo Oeste", mineral:"Gas",           empresa:"Pampa Energía",              provincia:"Neuquén",          status:"produccion",   lat:-38.28,lng:-69.12, inv:"USD 400M",    det:"Bloque de shale gas. Operado por Pampa Energía."},
  {id:55,  name:"Rincón del Mangrullo",  mineral:"Gas",           empresa:"Tecpetrol",                  provincia:"Neuquén",          status:"produccion",   lat:-38.95,lng:-69.28, inv:"USD 300M",    det:"Importante yacimiento de gas no convencional del Grupo Techint."},
  {id:56,  name:"Aguada Pichana Este",   mineral:"Gas",           empresa:"TotalEnergies + PAE + YPF",  provincia:"Neuquén",          status:"produccion",   lat:-38.32,lng:-69.28, inv:"USD 600M",    det:"Bloque de shale gas operado por TotalEnergies con YPF y PAE."},
  {id:57,  name:"La Calera",             mineral:"Petróleo/Gas", empresa:"ExxonMobil Argentina",        provincia:"Neuquén",          status:"produccion",   lat:-38.68,lng:-69.58, inv:"USD 800M",    det:"Bloque Vaca Muerta de ExxonMobil. Parte de su inversión de USD 2.000M en Argentina."},
  // GOLFO SAN JORGE — CONVENCIONAL
  {id:58,  name:"Cerro Dragón",          mineral:"Petróleo",      empresa:"Pan American Energy",        provincia:"Chubut",           status:"produccion",   lat:-45.82,lng:-67.52, inv:"",            det:"El mayor yacimiento convencional de petróleo de Argentina. Opera desde los años 70."},
  {id:59,  name:"Cañadón Seco",          mineral:"Petróleo",      empresa:"Sinopec Argentina",          provincia:"Santa Cruz",       status:"produccion",   lat:-46.52,lng:-67.82, inv:"",            det:"Gran yacimiento convencional. Cuenca Golfo San Jorge. Operado por Sinopec (China)."},
  {id:60,  name:"Manantiales Behr",      mineral:"Petróleo",      empresa:"YPF + Tecpetrol",            provincia:"Chubut",           status:"produccion",   lat:-45.55,lng:-67.32, inv:"",            det:"Yacimiento convencional en la Cuenca del Golfo San Jorge."},
  {id:61,  name:"El Trébol-Escalante",   mineral:"Petróleo",      empresa:"YPF",                        provincia:"Chubut",           status:"produccion",   lat:-45.98,lng:-67.62, inv:"",            det:"Yacimiento convencional YPF en la Cuenca del Golfo San Jorge."},
  {id:62,  name:"Koluel Kaike",          mineral:"Petróleo",      empresa:"Pluspetrol",                 provincia:"Santa Cruz",       status:"produccion",   lat:-46.15,lng:-67.35, inv:"",            det:"Yacimiento convencional en la Cuenca del Golfo San Jorge."},
  // NOROESTE — CONVENCIONAL
  {id:63,  name:"Ramos",                 mineral:"Gas",           empresa:"Pluspetrol",                 provincia:"Salta",            status:"produccion",   lat:-22.85,lng:-63.72, inv:"",            det:"Principal yacimiento de gas del noroeste argentino. Cuenca Noroeste."},
  {id:64,  name:"Acambuco",              mineral:"Gas",           empresa:"Pan American Energy",        provincia:"Salta",            status:"produccion",   lat:-22.52,lng:-63.85, inv:"",            det:"Yacimiento de gas en la Cuenca Noroeste. Operado por PAE."},
  // CUENCA AUSTRAL
  {id:65,  name:"Cañadón Alfa",          mineral:"Gas",           empresa:"TotalEnergies",              provincia:"Santa Cruz",       status:"produccion",   lat:-51.52,lng:-69.72, inv:"",            det:"Yacimiento de gas de la Cuenca Austral. Operado por TotalEnergies."},
  {id:66,  name:"Vega Pléyade",          mineral:"Gas",           empresa:"TotalEnergies",              provincia:"Tierra del Fuego", status:"produccion",   lat:-54.02,lng:-65.52, inv:"",            det:"Yacimiento offshore de gas en el Canal de Beagle. Cuenca Austral marina."},
  // GRANDES PROYECTOS EN DESARROLLO
  {id:67,  name:"Cruz de Lorena",        mineral:"Petróleo/Gas", empresa:"YPF + Petronas",              provincia:"Neuquén",          status:"factibilidad", lat:-38.72,lng:-69.65, inv:"USD 10.000M+",det:"Acuerdo YPF-Petronas (Malaysia) firmado 2024. Bloque ancla del plan de exportación GNL. Inversión prevista: USD 10.000M en la primera etapa. Parte del Plan 4x4 de YPF: cuadruplicar producción de Vaca Muerta."},
  {id:68,  name:"Argentina LNG",         mineral:"Gas",           empresa:"YPF + IEASA + PAE",          provincia:"Buenos Aires",     status:"factibilidad", lat:-38.72,lng:-62.27, inv:"USD 30.000M", det:"Megaproyecto de exportación de gas natural licuado (GNL). Planta en Punta Colorada, Río Negro. Capacidad: 25-30 MTPA en 4 trenes. Inversión total: USD 30.000M. YPF lidera con Petronas, TotalEnergies y otros. Bajo RIGI. FID (decisión de inversión final) estimada 2025-2026."},
  {id:69,  name:"Palermo Aike",          mineral:"Gas",           empresa:"TotalEnergies",              provincia:"Santa Cruz",       status:"factibilidad", lat:-50.52,lng:-69.12, inv:"USD 500M",    det:"Proyecto de shale gas en la Cuenca Austral. Primera exploración no convencional en el sur."},
  {id:70,  name:"Águila Mora",           mineral:"Petróleo/Gas", empresa:"Shell Argentina",             provincia:"Neuquén",          status:"factibilidad", lat:-38.52,lng:-69.42, inv:"USD 400M",    det:"Bloque Vaca Muerta en etapa de desarrollo avanzado. Operado por Shell."},
  // OFFSHORE — EXPLORACIÓN
  {id:71,  name:"CAN 100 (Offshore)",    mineral:"Petróleo/Gas", empresa:"Equinor + Shell + YPF",       provincia:"Mar Argentino",    status:"exploracion",  lat:-43.50,lng:-56.50, inv:"USD 1.000M+", det:"Exploración offshore en el Mar Argentino. Bloque CAN 100. Gran potencial en aguas profundas."},
  {id:72,  name:"Argerich (Offshore)",   mineral:"Petróleo/Gas", empresa:"Equinor",                    provincia:"Mar Argentino",    status:"exploracion",  lat:-44.20,lng:-55.80, inv:"",            det:"Bloque de exploración offshore operado por Equinor en el Mar Argentino."},
  {id:73,  name:"CAN 108 (Offshore)",    mineral:"Petróleo/Gas", empresa:"YPF + Equinor",               provincia:"Mar Argentino",    status:"exploracion",  lat:-45.00,lng:-57.20, inv:"",            det:"Bloque CAN 108. Exploración offshore en el Margen Continental Argentino."},
  // PROYECTOS ADICIONALES — MINERÍA METALÍFERA HISTÓRICA Y NUEVAS CATEGORÍAS
  {id:74,  name:"La Alumbrera",          mineral:"Cobre/Oro",   empresa:"YMAD / Glencore",            provincia:"Catamarca",        status:"produccion",   lat:-27.52,lng:-66.88, inv:"USD 1.200M",   det:"Primera megaminería moderna de Argentina (1997-2023). Produjo 180.000 t Cu/año y 600.000 oz Au/año en sus picos. Actualmente en Care & Maintenance. Base técnica y social del proyecto MARA."},
  {id:75,  name:"Sierra Grande",          mineral:"Hierro",       empresa:"HIPASAM / VM Holding",       provincia:"Río Negro",         status:"exploracion",  lat:-41.58,lng:-65.38, inv:"",             det:"Única mina de hierro de escala industrial de Argentina. Reservas: 214 Mt @ 45% Fe. Operó 1978-1991. Relanzada 2007-2016. Actualmente suspendida. Potencial reactivo bajo escenario de precios favorables."},
  {id:76,  name:"Tincalayu",              mineral:"Boratos",      empresa:"Borax Argentina (Rio Tinto)", provincia:"Salta",             status:"produccion",   lat:-24.65,lng:-67.18, inv:"",             det:"Principal mina de boratos de Argentina y una de las más grandes del mundo. Salar Cauchari. Produce ulexita y bórax. Exporta principalmente a Brasil, EEUU y Europa."},
  {id:77,  name:"Cauchari Litio Sur",     mineral:"Litio",        empresa:"Allkem / Orocobre",           provincia:"Jujuy",             status:"exploracion",  lat:-23.62,lng:-66.72, inv:"USD 200M",     det:"Extensión sur del salar de Cauchari. En exploración avanzada. Adyacente a Cauchari-Olaroz (Ganfeng)."},
  {id:78,  name:"Pampa del Tambo",        mineral:"Tierras Raras",empresa:"Appia Rare Earths",           provincia:"Córdoba",           status:"exploracion",  lat:-31.85,lng:-64.92, inv:"",             det:"Proyecto de tierras raras (REE) y uranio en rocas alcalinas. Argentina posee potencial REE en las Sierras Pampeanas no plenamente explorado. Exploración temprana."},
  {id:79,  name:"Búho",                   mineral:"Tierras Raras",empresa:"Minsur / exploración",        provincia:"La Rioja",          status:"exploracion",  lat:-29.42,lng:-67.82, inv:"",             det:"Prospecto de tierras raras (lantánidos) en carbonatitas del noroeste de La Rioja. Etapa de exploración básica."},
  {id:80,  name:"Campana Mahuida",        mineral:"Cobre",        empresa:"Pacific Bay Minerals",        provincia:"Neuquén",           status:"exploracion",  lat:-37.28,lng:-70.52, inv:"",             det:"Importante pórfido de cobre en Neuquén. Exploración avanzada. Parte del cinturón cupro-aurífero de la Patagonia."},
  {id:81,  name:"Pascua-Lama",            mineral:"Oro/Plata",   empresa:"Barrick Gold",               provincia:"San Juan",           status:"exploracion",  lat:-29.32,lng:-70.02, inv:"USD 8.500M",   det:"Uno de los mayores depósitos de oro no desarrollados del mundo (18 Moz Au). Proyecto binacional Argentina-Chile. Suspendido en Chile desde 2013. Argentina trabaja alternativa 'Lama' solo en su territorio. Potencial producción: 800.000 oz Au/año."},
  {id:82,  name:"Huentelauquén",          mineral:"Hierro",       empresa:"Cap Acero / exploración",     provincia:"San Juan",           status:"exploracion",  lat:-30.85,lng:-69.72, inv:"",             det:"Depósito de hierro en la Cordillera de San Juan. Potencial de magnetita. En etapa exploratoria ante interés siderúrgico regional."},
];

const MINERAL_COLORS = {
  "Litio":      "#5FB3A3",
  "Oro":        "#D9A24A",
  "Oro/Plata":  "#D9A24A",
  "Plata/Oro":  "#D9A24A",
  "Cobre":      "#D07A4A",
  "Cobre/Oro":  "#D07A4A",
  "Plata":      "#A78BDB",
  "Plata/Zinc": "#A78BDB",
  "Carbón":     "#D9D9D9",
  "Uranio":     "#57A773",
  "Potasio":    "#7FA6C9",
  "Plomo/Zinc": "#D9D9D9",
  "Petróleo":    "#D06262",
  "Gas":         "#E09A3E",
  "Petróleo/Gas":"#CE7B4B",
  "Hierro":       "#A97B4F",
  "Boratos":      "#7FA6C9",
  "Tierras Raras":"#57A773",
  "Cobre/Oro":    "#D07A4A",
};
function mineralColor(m){ return MINERAL_COLORS[m] || '#C8A84E'; }

/* ============================================================
   CHART.JS GLOBAL CONFIG
============================================================ */
Chart.defaults.color = '#D9D9D9';
Chart.defaults.borderColor = '#2A2A2A';
Chart.defaults.font.family = "'Open Sans Condensed', sans-serif";
Chart.defaults.font.size = 12;

const tooltipConfig = {
  backgroundColor: '#141414',
  borderColor: '#C8A84E',
  borderWidth: 1,
  titleColor: '#ffffff',
  bodyColor: '#D9D9D9',
  padding: 12,
  cornerRadius: 8,
  displayColors: true,
};

/* Marca MACH: sin degradados — relleno plano */
function makeGradient(ctx, color, alpha=0.12){
  return color + Math.round(alpha*255).toString(16).padStart(2,'0');
}

function refLine(n){
  return {
    label:'Base 2016',
    data:Array(n).fill(100),
    borderColor:'rgba(217,217,217,0.35)',
    borderDash:[4,4],
    borderWidth:1,
    pointRadius:0,
    fill:false,
    tension:0,
  };
}

/* ============================================================
   PERIOD STATE
============================================================ */
let currentPeriod = 24;
const charts = {};
const tabInited = {};

function getSlice(arr){
  if(currentPeriod === 0) return arr;
  return arr.slice(-currentPeriod);
}

function setPeriod(p){
  currentPeriod = p;
  document.querySelectorAll('.period-btn').forEach(b=>{
    const bp = b.dataset.period;
    b.classList.toggle('active', (bp === String(p)) || (p===0 && bp==='0'));
  });
  updateMonthlyCharts();
}

function updateMonthlyCharts(){
  const labels = getSlice(ALL_MONTHS);
  if(charts['ipi_monthly']){
    charts['ipi_monthly'].data.labels = labels;
    charts['ipi_monthly'].data.datasets[0].data = getSlice(IPI_GENERAL);
    charts['ipi_monthly'].data.datasets[1].data = Array(labels.length).fill(100);
    charts['ipi_monthly'].update('active');
  }
  if(charts['litio_tons']){
    charts['litio_tons'].data.labels = labels;
    charts['litio_tons'].data.datasets[0].data = getSlice(LITIO_TONS);
    charts['litio_tons'].update('active');
  }
  if(charts['petrol_gas']){
    charts['petrol_gas'].data.labels = labels;
    charts['petrol_gas'].data.datasets[0].data = getSlice(PETROLEO);
    charts['petrol_gas'].data.datasets[1].data = getSlice(GAS);
    charts['petrol_gas'].data.datasets[2].data = Array(labels.length).fill(100);
    charts['petrol_gas'].update('active');
  }
  if(charts['metalif']){
    charts['metalif'].data.labels = labels;
    charts['metalif'].data.datasets[0].data = getSlice(METALIFEROS);
    charts['metalif'].data.datasets[1].data = getSlice(PLATA_ORO);
    charts['metalif'].data.datasets[2].data = Array(labels.length).fill(100);
    charts['metalif'].update('active');
  }
}

/* ============================================================
   TAB SWITCHING
============================================================ */
function showTab(idx){
  document.querySelectorAll('.tab-panel').forEach((p,i)=>p.classList.toggle('active',i===idx));
  document.querySelectorAll('.tab-btn').forEach((b,i)=>b.classList.toggle('active',i===idx));
  if(idx===0 && !tabInited[0]) initTab0();
  if(idx===1 && !tabInited[1]) initTab1();
  if(idx===2 && !tabInited[2]) initTab2();
  if(idx===3 && !tabInited[3]) initTab3();
  if(idx===4 && !tabInited[4]) initMapTab();
  if(idx===4 && window._leafletMap){ setTimeout(()=>window._leafletMap.invalidateSize(),100); }
}

/* ============================================================
   TAB 0 — VISTA GENERAL
============================================================ */
function initTab0(){
  tabInited[0]=true;

  // Annual chart
  const ctxA = document.getElementById('chart-anual').getContext('2d');
  const anualColors = IPI_ANUAL_VALS.map(v => v===87.9 ? '#D06262' : '#C8A84E');
  charts['anual'] = new Chart(ctxA,{
    type:'bar',
    data:{
      labels: IPI_ANUAL_YEARS,
      datasets:[{
        label:'IPI Minero',
        data: IPI_ANUAL_VALS,
        backgroundColor: IPI_ANUAL_VALS.map(v=> v===87.9 ? 'rgba(208,98,98,0.7)' : 'rgba(200,168,78,0.75)'),
        borderColor: IPI_ANUAL_VALS.map(v=> v===87.9 ? '#D06262' : '#C8A84E'),
        borderWidth: 1.5,
        borderRadius: 4,
      },{
        label:'Base 2016',
        data: Array(IPI_ANUAL_YEARS.length).fill(100),
        type:'line',
        borderColor:'rgba(217,217,217,0.4)',
        borderDash:[4,4],
        borderWidth:1.5,
        pointRadius:0,
        fill:false,
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{...tooltipConfig, callbacks:{
          label:ctx=> ctx.dataset.label==='Base 2016' ? 'Base: 100' : `IPI: ${ctx.parsed.y}`,
          afterLabel:ctx=> ctx.dataset.label!=='Base 2016' && ctx.dataIndex===3 ? '(pandemia COVID-19)' : ''
        }}
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'#D9D9D9',font:{size:11}}},
        y:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11}},min:60}
      }
    }
  });

  // Subsectores horizontal bar
  const ctxS = document.getElementById('chart-subsectores').getContext('2d');
  charts['subsectores'] = new Chart(ctxS,{
    type:'bar',
    data:{
      labels:['Petróleo','Gas Natural','Plata/Oro','Metalif.','Litio'],
      datasets:[{
        label:D.subsectores.label,
        data:D.subsectores.data,
        backgroundColor:['rgba(217,162,74,0.8)','rgba(217,162,74,0.45)','rgba(167,139,219,0.75)','rgba(167,139,219,0.45)','rgba(95,179,163,0.8)'],
        borderColor:['#D9A24A','#D9A24A','#A78BDB','#A78BDB','#5FB3A3'],
        borderWidth:1.5,
        borderRadius:4,
      }]
    },
    options:{
      indexAxis:'y',
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{...tooltipConfig}
      },
      scales:{
        x:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11}}},
        y:{grid:{display:false},ticks:{color:'#D9D9D9',font:{size:11,weight:'500'}}}
      }
    }
  });

  // IPI Monthly trend
  const ctxM = document.getElementById('chart-ipi-monthly').getContext('2d');
  const labelsM = getSlice(ALL_MONTHS);
  const grad = makeGradient(ctxM,'#C8A84E',0.15);
  charts['ipi_monthly'] = new Chart(ctxM,{
    type:'line',
    data:{
      labels: labelsM,
      datasets:[{
        label:'IPI General',
        data: getSlice(IPI_GENERAL),
        borderColor:'#C8A84E',
        borderWidth:2.5,
        backgroundColor: grad,
        fill:true,
        tension:0.35,
        pointRadius:3,
        pointBackgroundColor:'#C8A84E',
        pointHoverRadius:5,
      },refLine(labelsM.length)]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{...tooltipConfig, callbacks:{
          label:ctx=>{
            if(ctx.datasetIndex===1) return 'Base: 100';
            const i = getSlice(ALL_MONTHS).indexOf(ctx.label);
            const fullI = ALL_MONTHS.indexOf(ctx.label);
            const vr = fullI>=0 ? IPI_VAR[fullI] : null;
            return `IPI: ${ctx.parsed.y}${vr!=null?' | var i.a.: +'+vr+'%':''}`;
          }
        }}
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'#D9D9D9',maxTicksLimit:12,font:{size:11}}},
        y:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11}},min:80}
      }
    }
  });
}

/* ============================================================
   TAB 1 — LITIO
============================================================ */
function initTab1(){
  tabInited[1]=true;
  const ctxL = document.getElementById('chart-litio').getContext('2d');
  const labelsL = getSlice(ALL_MONTHS);
  const gradL = makeGradient(ctxL,'#5FB3A3',0.20);
  const dataL = getSlice(LITIO_TONS);

  // Build point colors: highlight peak (Dic 2025, index 22)
  const fullLen = ALL_MONTHS.length;
  const sliceStart = currentPeriod===0 ? 0 : fullLen - currentPeriod;
  const peakFullIdx = 22; // Dic 2025

  charts['litio_tons'] = new Chart(ctxL,{
    type:'line',
    data:{
      labels: labelsL,
      datasets:[{
        label:'Producción (t)',
        data: dataL,
        borderColor:'#5FB3A3',
        borderWidth:2.5,
        backgroundColor: gradL,
        fill:true,
        tension:0.35,
        pointRadius: dataL.map((_,i)=>{
          const fullIdx = sliceStart+i;
          return fullIdx===peakFullIdx ? 7 : 3;
        }),
        pointBackgroundColor: dataL.map((_,i)=>{
          const fullIdx = sliceStart+i;
          return fullIdx===peakFullIdx ? '#57A773' : '#5FB3A3';
        }),
        pointHoverRadius:6,
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        tooltip:{...tooltipConfig, callbacks:{
          label:ctx=>{
            const val = ctx.parsed.y.toLocaleString('es-AR');
            const sliceStart2 = currentPeriod===0?0:ALL_MONTHS.length-Math.min(currentPeriod,ALL_MONTHS.length);
            const fi = sliceStart2+ctx.dataIndex;
            if(fi===peakFullIdx) return `Toneladas: ${val} ★ RÉCORD HISTÓRICO`;
            return `Toneladas: ${val}`;
          }
        }}
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'#D9D9D9',maxTicksLimit:12,font:{size:11}}},
        y:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11},callback:v=>v.toLocaleString('es-AR')},min:0}
      }
    }
  });
}

/* ============================================================
   TAB 2 — PETRÓLEO Y GAS
============================================================ */
function initTab2(){
  tabInited[2]=true;
  const ctxP = document.getElementById('chart-petrol').getContext('2d');
  const labelsP = getSlice(ALL_MONTHS);
  charts['petrol_gas'] = new Chart(ctxP,{
    type:'line',
    data:{
      labels: labelsP,
      datasets:[{
        label:'Petróleo',
        data: getSlice(PETROLEO),
        borderColor:'#D9A24A',
        borderWidth:2.5,
        backgroundColor:'rgba(217,162,74,0.10)',
        fill:false,
        tension:0.3,
        pointRadius:3,
        pointHoverRadius:5,
      },{
        label:'Gas Natural',
        data: getSlice(GAS),
        borderColor:'#7FA6C9',
        borderDash:[6,3],
        borderWidth:2.5,
        backgroundColor:'transparent',
        fill:false,
        tension:0.3,
        pointRadius:3,
        pointHoverRadius:5,
      },refLine(labelsP.length)]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{
          display:true,
          labels:{color:'#D9D9D9',padding:16,font:{size:12},boxWidth:14}
        },
        tooltip:{...tooltipConfig}
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'#D9D9D9',maxTicksLimit:12,font:{size:11}}},
        y:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11}},min:80}
      }
    }
  });
}

/* ============================================================
   TAB 3 — METALIFEROS
============================================================ */
function initTab3(){
  tabInited[3]=true;
  const ctxMet = document.getElementById('chart-metalif').getContext('2d');
  const labelsmet = getSlice(ALL_MONTHS);
  charts['metalif'] = new Chart(ctxMet,{
    type:'line',
    data:{
      labels: labelsmet,
      datasets:[{
        label:'Metalíferos',
        data: getSlice(METALIFEROS),
        borderColor:'#A78BDB',
        borderWidth:2.5,
        backgroundColor:'rgba(167,139,219,0.10)',
        fill:false,
        tension:0.3,
        pointRadius:3,
        pointHoverRadius:5,
      },{
        label:'Plata y Oro',
        data: getSlice(PLATA_ORO),
        borderColor:'#BFA8E8',
        borderDash:[6,3],
        borderWidth:2.5,
        backgroundColor:'transparent',
        fill:false,
        tension:0.3,
        pointRadius:3,
        pointHoverRadius:5,
      },refLine(labelsmet.length)]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{
        legend:{
          display:true,
          labels:{color:'#D9D9D9',padding:16,font:{size:12},boxWidth:14}
        },
        tooltip:{...tooltipConfig}
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'#D9D9D9',maxTicksLimit:12,font:{size:11}}},
        y:{grid:{color:'rgba(217,217,217,0.10)'},ticks:{color:'#D9D9D9',font:{size:11}},min:30}
      }
    }
  });
}

/* ============================================================
   TAB 4 — MAPA
============================================================ */
let markerLayer = null;
let markerMap = {}; // id -> L.circleMarker
let activeMineral = 'Todos';
let activeStatuses = {produccion:true, factibilidad:true, exploracion:true};
let activeItemId = null;

function mineralFilterMatch(mineral){
  if(activeMineral==='Todos') return true;
  if(activeMineral==='Litio') return mineral.includes('Litio');
  if(activeMineral==='Oro') return mineral.includes('Oro');
  if(activeMineral==='Cobre') return mineral.includes('Cobre');
  if(activeMineral==='Plata') return mineral.includes('Plata');
  if(activeMineral==='OG') return mineral.includes('Petróleo')||mineral.includes('Gas');
  if(activeMineral==='TRR') return mineral.includes('Tierras Raras');
  if(activeMineral==='Otros') return !mineral.includes('Litio')&&!mineral.includes('Oro')&&!mineral.includes('Cobre')&&!mineral.includes('Plata')&&!mineral.includes('Petróleo')&&!mineral.includes('Gas')&&!mineral.includes('Tierras Raras');
  return true;
}

function projectVisible(p){
  return mineralFilterMatch(p.mineral) && activeStatuses[p.status];
}

function statusLabel(s){
  if(s==='produccion') return 'Producción';
  if(s==='factibilidad') return 'Factibilidad';
  return 'Exploración';
}

function buildPopup(p){
  const col = mineralColor(p.mineral);
  const statusBg = p.status==='produccion'?'var(--green-dim)':p.status==='factibilidad'?'var(--amber-dim)':'var(--blue-light)';
  const statusCol = p.status==='produccion'?'var(--green)':p.status==='factibilidad'?'var(--amber)':'var(--blue)';
  const invHtml = p.inv ? `<div class="popup-inv">Inversión: <strong>${p.inv}</strong></div>` : '';
  return `
    <div class="popup-name">${p.name}</div>
    <div class="popup-empresa">${p.empresa || '—'}</div>
    <div class="popup-badges">
      <span class="popup-badge" style="background:${col}22;color:${col}">${p.mineral}</span>
      <span class="popup-badge" style="background:${statusBg};color:${statusCol}">${statusLabel(p.status)}</span>
      <span class="popup-badge" style="background:var(--navy-dim);color:var(--navy)">${p.provincia}</span>
    </div>
    ${invHtml}
    <div class="popup-det">${p.det}</div>
  `;
}

function rebuildMarkers(){
  markerLayer.clearLayers();
  markerMap = {};
  PROJECTS.forEach(p=>{
    const visible = projectVisible(p);
    if(!visible) return;
    const color = mineralColor(p.mineral);
    const radius = p.status==='produccion'?10:p.status==='factibilidad'?8:6;
    const opacity = p.status==='produccion'?1.0:p.status==='factibilidad'?0.85:0.70;
    const m = L.circleMarker([p.lat,p.lng],{
      radius,
      fillColor: color,
      color: '#fff',
      weight: 2,
      opacity: opacity,
      fillOpacity: opacity,
    });
    m.bindPopup(buildPopup(p),{maxWidth:280});
    m.on('click',()=>{
      highlightItem(p.id);
    });
    markerLayer.addLayer(m);
    markerMap[p.id] = m;
  });
  updateCount();
}

function updateCount(){
  const visible = PROJECTS.filter(projectVisible).length;
  document.getElementById('filter-count').textContent = `Mostrando ${visible} de ${PROJECTS.length} proyectos`;
}

function highlightItem(id){
  document.querySelectorAll('.proj-item').forEach(el=>{
    el.classList.toggle('active-item', +el.dataset.id===id);
  });
  activeItemId = id;
  // scroll item into view
  const el = document.querySelector(`.proj-item[data-id="${id}"]`);
  if(el) el.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function buildProjList(){
  const list = document.getElementById('proj-list');
  list.innerHTML = '';
  PROJECTS.forEach(p=>{
    const col = mineralColor(p.mineral);
    const badgeClass = p.status==='produccion'?'prod':p.status==='factibilidad'?'fact':'expl';
    const badgeText = p.status==='produccion'?'PROD':p.status==='factibilidad'?'FACT':'EXPL';
    const div = document.createElement('div');
    div.className = 'proj-item';
    div.dataset.id = p.id;
    div.innerHTML = `
      <span class="proj-dot" style="background:${col}"></span>
      <div class="proj-info">
        <span class="proj-name">${p.name}</span>
        <span class="proj-loc">${p.empresa?p.empresa+' · ':''}${p.provincia}</span>
      </div>
      <span class="proj-badge ${badgeClass}">${badgeText}</span>
    `;
    div.addEventListener('click',()=>{
      const m = markerMap[p.id];
      if(m){
        window._leafletMap.flyTo([p.lat,p.lng],8,{duration:0.8});
        setTimeout(()=>m.openPopup(),900);
      }
      highlightItem(p.id);
    });
    list.appendChild(div);
  });
}

function applyFiltersToList(){
  document.querySelectorAll('.proj-item').forEach(el=>{
    const id = +el.dataset.id;
    const p = PROJECTS.find(x=>x.id===id);
    el.style.display = p && projectVisible(p) ? '' : 'none';
  });
  updateCount();
}

function initMapTab(){
  tabInited[4]=true;

  const map = L.map('leaflet-map',{center:[-38,-66],zoom:4,zoomControl:true});
  window._leafletMap = map;

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains:'abcd',
    maxZoom:19
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
  rebuildMarkers();
  buildProjList();

  setTimeout(()=>map.invalidateSize(),100);

  // Mineral filter
  document.querySelectorAll('#filter-mineral .filter-pill').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('#filter-mineral .filter-pill').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeMineral = btn.dataset.mineral;
      rebuildMarkers();
      applyFiltersToList();
    });
  });

  // Status filter
  document.querySelectorAll('#filter-status .filter-pill').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const s = btn.dataset.status;
      activeStatuses[s] = !activeStatuses[s];
      btn.classList.toggle('active', activeStatuses[s]);
      rebuildMarkers();
      applyFiltersToList();
    });
  });
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  initTab0();
});


/* ============================================================
   RENDER DESDE MACH_DATA (data.js)
============================================================ */
function esc(s){return s==null?'':String(s);}
function renderKpis(){
  const tpl = k => `
    <div class="kpi-card">
      <div class="kpi-card-bar" style="background:var(--${k.bar||'navy'})"></div>
      <div class="kpi-card-body">
        <div class="kpi-label">${esc(k.label)}</div>
        <div class="kpi-value"${k.small?' style="font-size:22px"':''}>${k.value}</div>
        <div class="kpi-sub">${k.sub}</div>
        ${k.badge?`<span class="kpi-badge badge-${k.badge.cls}">${k.badge.text}</span>`:''}
      </div>
    </div>`;
  document.querySelectorAll('[data-kpis]').forEach(g=>{
    g.innerHTML = (D.kpis[g.dataset.kpis]||[]).map(tpl).join('');
  });
  const pr = document.querySelector('[data-precios]');
  if(pr) pr.innerHTML = D.precios.map(p=>`
    <div class="price-card">
      <div class="price-mineral" style="color:var(--${p.color})">${esc(p.mineral)}</div>
      <div class="price-val">${p.val}</div>
      <div class="price-unit">${esc(p.unit)}</div>
      <span class="kpi-badge badge-${p.badgeCls}" style="margin-top:6px">${p.badgeText}</span>
    </div>`).join('');
  document.querySelectorAll('[data-note]').forEach(n=>{ n.innerHTML = D.notas[n.dataset.note]||''; });
}
function renderBinds(){
  const primero = D.months[0], ultimo = D.months[D.months.length-1];
  const binds = {
    rango: `${primero} — ${ultimo}`,
    ultimoDato: D.ultimoDato,
    ultimoDatoUpper: D.ultimoDato.toUpperCase(),
    mesCorto: ultimo,
    anualNota: D.anualNota,
    novedadesRango: D.novedades.rango,
  };
  document.querySelectorAll('[data-bind]').forEach(el=>{ el.textContent = binds[el.dataset.bind]||''; });
}
function renderTicker(){
  const t = document.querySelector('[data-ticker]');
  if(!t) return;
  const seq = D.ticker.map(x=>`<span class="tk-item">${esc(x)}</span>`).join('<span class="dot"></span>');
  t.innerHTML = seq + '<span class="dot"></span>' + seq + '<span class="dot"></span>';
}
function newsCard(it){
  const link = it.url?`<a class="news-link" href="${it.url}" target="_blank" rel="noopener">FUENTE</a>`:'<div style="height:16px"></div>';
  return `
  <div class="news-card" data-cat="${esc(it.cat)}" style="--cat-color:var(--${it.catvar})">
    <div class="news-card-head"><span class="news-day"><span class="d">${esc(it.d)}</span><span class="m">${esc(it.m)}</span></span><span class="news-cat">${esc(it.cat)}</span></div>
    <div class="news-title">${esc(it.titulo)}</div>
    <div class="news-body">${it.cuerpo}</div>${link}
  </div>`;
}
function renderNovedades(){
  const c = document.querySelector('[data-novedades]');
  if(!c) return;
  const f = D.novedades.destacada;
  const chips = f.cats.map(x=>`<span class="news-cat" style="--cat-color:var(--${x.var});margin-left:0">${esc(x.label)}</span>`).join('');
  let html = `
  <div class="news-featured">
    <div class="news-featured-day"><span class="d">${esc(f.d)}</span><span class="m">${esc(f.m)}</span></div>
    <div class="news-featured-body">
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">${chips}</div>
      <div class="news-featured-title pop">${esc(f.titulo)}</div>
      <div class="news-featured-text">${f.cuerpo}</div>
      ${f.url?`<a class="news-link" href="${f.url}" target="_blank" rel="noopener">FUENTE</a>`:''}
    </div>
  </div>`;
  D.novedades.meses.forEach(mes=>{
    html += `
  <div class="news-month">${esc(mes.titulo)} <span class="news-month-count">${mes.items.length} novedades</span></div>
  <div class="news-grid">${mes.items.map(newsCard).join('')}</div>`;
  });
  c.innerHTML = html;
}
function setLogos(){document.querySelectorAll('[data-logo]').forEach(i=>{i.src=window.MACH_LOGO||'';});}
setLogos(); document.addEventListener('DOMContentLoaded', setLogos);
renderKpis(); renderBinds(); renderTicker(); renderNovedades();

/* NOVEDADES — filtro por categoría */
document.querySelectorAll('#news-filters .news-pill').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#news-filters .news-pill').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('#tab-5 .news-card').forEach(c=>{
      c.classList.toggle('hidden', cat!=='Todas' && c.dataset.cat!==cat);
    });
    document.querySelectorAll('#tab-5 .news-month').forEach(m=>{
      const grid = m.nextElementSibling;
      const visible = grid.querySelectorAll('.news-card:not(.hidden)').length;
      m.style.display = visible ? '' : 'none';
      grid.style.display = visible ? '' : 'none';
      m.querySelector('.news-month-count').textContent = visible + (visible===1?' novedad':' novedades');
    });
  });
});
