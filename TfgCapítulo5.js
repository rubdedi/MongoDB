//Método de transformación de un esquema entidad-relación en una base de datos con MongoDB.
//@author - Rubén de Diego Varona
// Script capítulo 5
// Creamos la base de datos
use TfgCapítulo5
// Creación colección Películas
db.createCollection("Películas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Peliculas Object Validation",
         required: [ "Número_película", "Título_original","Título","Duración","País","Fecha_estreno","Resumen","Subtítulos"],
         properties: {
            Número_película: {
               bsonType: "int",
               description: "'Número_película' ha de ser un string y el campo es necesario"
            },
            Título_original: {
               bsonType: "string",
               description: "'Título_original' ha de ser un string y el campo es necesario"
            },
            Título: {
               bsonType: "string",
               description: "'Título' ha de ser un string y el campo es necesario"
            },
            Duración: {
               bsonType: "int",
               minimum: 1,
               maximum: 999,
               description: "'Duración' ha de ser un integer dentro del intervalo [ 1, 999 ] y es necesario"
            },
            País: {
               bsonType: "string",
               description: "'País' ha de ser un string y el campo es necesario"
            },
            Fecha_estreno: {
               bsonType: "date",
               description: "'Fecha_estreno' ha de ser string y el campo es necesario"
            },
            Resumen: {
               bsonType: "string",
               description: "'Resumen' ha de ser string y el campo es necesartio"
            },
            Subtítulos: {
               bsonType: "bool",
               description: "'Subtitulos' ha de ser un booleano y el campo es necesario"
            }
         }
      }
   }
} )
// Creración colección Cines
db.createCollection("Cines", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Cines Object Validation",
         required: [ "Número_cine", "Nombre_cine","Dirección","Teléfono"],
         properties: {
            Número_cine: {
               bsonType: "int",
               description: "'Número_cine' ha de ser un string y el campo es necesario"
            },
            Nombre_cine: {
               bsonType: "string",
               description: "'Nombre_cine' ha de ser un string y el campo es necesario"
            },
            Dirección: {
               bsonType: "object",
               required: [ "Calle", "Número","Ciudad","Código postal"],
               properties: {
               "Calle": { bsonType: "string" },
               "Número": { bsonType: "int" },
               "Ciudad": { bsonType: "string" },
               "Código postal": { bsonType: "string" }
           }
            },
            Teléfono: {
               bsonType: "string",
               description: "'Dirección' ha de ser un string y el campo es necesario"
            }
         }
      }
   }
} )
// Creración colección Directores
db.createCollection("Directores", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Directores Object Validation",
         required: [ "Número_director", "Nombre_director","Fecha_nacimiento","Nacionalidad"],
         properties: {
            Número_director: {
               bsonType: "int",
               description: "'Número_director' ha de ser un string y el campo es necesario",
            },
            Nombre_director: {
               bsonType: "string",
               description: "'Nombre_director' ha de ser un string y el campo es necesario",
            },
            Fecha_nacimiento: {
               bsonType: "date",
               description: "'Fecha_nacimiento' ha de ser un date y el campo es necesario"
            },
            Nacionalidad: {
               bsonType: "string",
               description: "'Nacionalidad' ha de ser un string y el campo es necesario"
            }
         }
      }
   }
} )
// Creración colección Actores
db.createCollection("Actores", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Actores Object Validation",
         required: [ "Número_actor", "Nombre_actor","Fecha_nacimiento","Nacionalidad"],
         properties: {
            Número_actor: {
               bsonType: "int",
               description: "'Número_director' ha de ser un string y el campo es necesario",
            },
            Nombre_actor: {
               bsonType: "string",
               description: "'Nombre_director' ha de ser un string y el campo es necesario",
            },
            Fecha_nacimiento: {
               bsonType: "date",
               description: "'Fecha_nacimiento' ha de ser un date y el campo es necesario"
            },
            Nacionalidad: {
               bsonType: "string",
               description: "'Nacionalidad' ha de ser un string y el campo es necesario"
            }
         }
      }
   }
} )
// Creración colección Géneros
db.createCollection("Géneros", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Géneros Object Validation",
         required: [ "Número_género", "Nombre_género"],
         properties: {
            Número_género: {
               bsonType: "int",
               description: "'Número_género' ha de ser un string y el campo es necesario",
            },
            Nombre_género: {
               enum: ["Acción","Aventuras","Ciencia ficción","Comedia","No-ficción","Drama","Fantasía","Musical","Suspense","Terror"],
               description: "'Nombre_género' ha de pertenecer a alguno de los géneros enumerados",
            }
          }
      }
   }
} )
// Creración colección Críticas
db.createCollection("Críticas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Críticas Object Validation",
         required: [ "Número_crítica", "Resumen","Url","Estrellas"],
         properties: {
            Número_crítica: {
               bsonType: "int",
               minimum: 1,
               maximum: 99,
               description: "'Número_crítica ha de ser un int en el intervalo [1 ,99] y el campo es necesario",
            },
            Resumen: {
               bsonType: "string",
               description: "'Resumen' ha de ser un string y el campo es necesario",
            },
            Url: {
               bsonType: "string",
               description: "'Url' ha de ser un string y el campo es necesario",
            },
            Estrellas: {
               bsonType: "int",
               minimum: 1,
               maximum: 5,
               description: "'Estrellas' ha de ser un int en el intervalo [1 ,5] y el campo es necesario",
            }
          }
      }
   }
} )
// Creración colección Críticos
db.createCollection("Críticos", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Críticos Object Validation",
         required: [ "Número_crítico", "Nombre"],
         properties: {
            Número_crítico: {
               bsonType: "int",
               minimum: 1,
               maximum: 99,
               description: "'Número_crítico' ha de ser un int en el intervalo [1 ,99] y el campo es necesario",
            },
            Nombre: {
               bsonType: "string",
               description: "'Nombre' ha de ser un string y el campo es necesario",
            }
          }
      }
   }
} )
// Creración colección Medios
db.createCollection("Medios", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Medios Object Validation",
         required: [ "Número_medio", "Nombre_medio","País"],
         properties: {
            Número_medio: {
               bsonType: "int",
               minimum: 1,
               maximum: 99,
               description: "'Número_crítico' ha de ser un int en el intervalo [1 ,99] y el campo es necesario",
            },
            Nombre_medio: {
               bsonType: "string",
               description: "'Nombre_medio' ha de ser un string y el campo es necesario",
            },
            País: {
               bsonType: "string",
               description: "'País' ha de ser un string y el campo es necesario",
            }
          }
      }
   }
} )
// Creración colección Medios_impresos
db.createCollection("Medios_impresos", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Medios_impresos Object Validation",
         required: [ "Tirada", "Nacional"],
         properties: {
            Tirada: {
               bsonType: "int",
               description: "'Tirada' ha de ser un int en el intervalo y el campo es necesario",
            },
            Nacional: {
               bsonType: "bool",
               description: "'Nacional' ha de ser un boolean y el campo es necesario",
            }
          }
      }
   }
} )
// Creración colección Medios_impresos
db.createCollection("Medios_digitales", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Medios_impresos Object Validation",
         required: [ "Url"],
         properties: {
            Tirada: {
               bsonType: "string",
               description: "'Url' ha de ser un int en el intervalo y el campo es necesario",
            }
          }
      }
   }
} )
//Poblamos la base de datos con instancias de películas
db.Películas.insertOne(
  {
    "Número_película": 1,
    "Título_original": "Alien",
    "Título": "Alien el octavo pasajero",
    "Duración": 116,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1979"),
    "Resumen": "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 2,
    "Título_original": "Aliens",
    "Título": "Aliens, El regreso",
    "Duración": 115,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1986"),
    "Resumen": "Alien es un organismo perfecto, una máquina de matar cuya superioridad física sólo puede competir con su agresividad. La oficial Ripley y la tripulación de la nave “Nostromo” se habían enfrentado, en el pasado, a esa monstruosa criatura. Y sólo Ripley sobrevivió a la masacre. Después de vagar por el espacio durante varios años, Ripley fue rescatada. Durante ese tiempo, el planeta de Alien ha sido colonizado. Pero, de repente, se pierde la comunicación con la colonia y, para investigar los motivos, se envía una expedición de marines espaciales, capitaneados por Ripley. Allí les esperan miles de espeluznantes criaturas. Alien se ha reproducido y esta vez la lucha es por la supervivencia de la Humanidad.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 3,
    "Título_original": "Alien³",
    "Título": "Alien 3",
    "Duración": 114,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1997"),
    "Resumen": "Tras conseguir escapar con Newt y Bishop de un planeta alienígena, la teniente Ellen Ripley (Sigourney Weaver) recala accidentalmente en Fiorna 161, una remota cárcel galáctica cuyos peligrosos reclusos están absolutamente abandonados a su suerte.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 4,
    "Título_original": "Alien Resurrection",
    "Título": "Alien Resurrección",
    "Duración": 108,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1997"),
    "Resumen": "Más de doscientos años después de su muerte, Ripley (Sigourney Weaver) vuelve a la vida gracias al empleo de técnicas avanzadas de clonación. Pero, durante el proceso, el ADN de Ripley se ha mezclado con el de la Reina Alien, por lo que Ripley empieza a desarrollar ciertas características de la peligrosa alienígena.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 5,
    "Título_original": "Fight Club",
    "Título": "El club de la lucha",
    "Duración": 139,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1999"),
    "Resumen": "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 6,
    "Título_original": "Se7ven",
    "Título": "Seven",
    "Duración": 127,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1995"),
    "Resumen": "El veterano teniente Somerset (Morgan Freeman), del departamento de homicidios, está a punto de jubilarse y ser reemplazado por el ambicioso e impulsivo detective David Mills (Brad Pitt). Ambos tendrán que colaborar en la resolución de una serie de asesinatos cometidos por un psicópata que toma como base la relación de los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira. Los cuerpos de las víctimas, sobre los que el asesino se ensaña de manera impúdica, se convertirán para los policías en un enigma que les obligará a viajar al horror y la barbarie más absoluta.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 7,
    "Título_original": "The silence of the lambs",
    "Título": "El silencio de los corderos",
    "Duración": 115,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1991"),
    "Resumen": "El FBI busca a Buffalo Bill, un asesino en serie que mata a sus víctimas, todas adolescentes, después de prepararlas minuciosamente y arrancarles la piel. Para poder atraparlo recurren a Clarice Starling, una brillante licenciada universitaria, experta en conductas psicópatas, que aspira a formar parte del FBI. Siguiendo las instrucciones de su jefe, Jack Crawford, Clarice visita la cárcel de alta seguridad donde el gobierno mantiene encerrado al Dr. Hannibal Lecter, antiguo psicoanalista y asesino, dotado de una inteligencia superior a la normal. Su misión será intentar sacarle información sobre los patrones de conducta del asesino que están buscando.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 8,
    "Título_original": "Interstellar",
    "Título": "Interstellar",
    "Duración": 169,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("2014"),
    "Resumen": "Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 9,
    "Título_original": "Dogville",
    "Título": "Dogville",
    "Duración": 169,
    "País": "Dinamarca",
    "Fecha_estreno":new Date("2003"),
    "Resumen": "Grace llega al remoto pueblo de Dogville huyendo de una banda de gángsters. Persuadidos por las palabras de Tom, que se ha erigido en portavoz de la comunidad, los vecinos se avienen a ocultarla. Grace, a cambio, trabaja para ellos. Sin embargo, cuando Dogville sea sometido a una intensa vigilancia policial para dar con la fugitiva, sus habitantes exigirán a Grace otros servicios que les compensen del peligro que corren al darle cobijo. Grace aprenderá, de un modo brutal, que en ese pueblo la bondad es algo muy relativo. Pero ella guarda un secreto que no quiere desvelar.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 10,
    "Título_original": "Pulp Fiction",
    "Título": "Pulp Fiction",
    "Duración": 169,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1994"),
    "Resumen": "Jules y Vincent, dos asesinos a sueldo con no demasiadas luces, trabajan para el gángster Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su atractiva mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 11,
    "Título_original": "Cinco condiciones",
    "Título": "De fem benspænd",
    "Duración": 88,
    "País": "Dinamarca",
    "Fecha_estreno":new Date("2003"),
    "Resumen": "En 1967 Jorgen Leth realizó un cortometraje de 13 minutos llamado The Perfect Human, un documental sobre el comportamiento humano. En el año 2000, Lars von Trier retó a Leth a rodar cinco remakes de dicho corto, cada uno de ellos obstaculizado por una condición que el realizador debía respetar escrupulosamente. El resultado, cinco variaciones sobre el mismo tema, es un inteligente ejercicio sobre el arte de hacer cine.",
    "Subtítulos":false
  }
)
db.Películas.insertOne(
  {
    "Número_película": 12,
    "Título_original": "El padrino",
    "Título": "The Godfather",
    "Duración": 175,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1972"),
    "Resumen": "América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 13,
    "Título_original": "El padrino. Parte II",
    "Título": "The Godfather Part II",
    "Duración": 200,
    "País": "Estados Unidos",
    "Fecha_estreno":new Date("1974"),
    "Resumen": "Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael como jefe de los negocios familiares y los orígenes del patriarca, Don Vito Corleone, primero en su Sicilia natal y posteriormente en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York. ",
    "Subtítulos":false
  }
)
db.Películas.insertOne(
  {
    "Número_película": 14,
    "Título_original": "2001: A Space Odyssey",
    "Título": "2001: Una odisea del espacio ",
    "Duración": 139,
    "País": "Reino Unido",
    "Fecha_estreno":new Date("1968"),
    "Resumen": "La película de ciencia-ficción por excelencia de la historia del cine narra los diversos periodos de la historia de la humanidad, no sólo del pasado, sino también del futuro. Hace millones de años, antes de la aparición del homo sapiens, unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.",
    "Subtítulos":true
  }
)
db.Películas.insertOne(
  {
    "Número_película": 15,
    "Título_original": "A Clockwork Orange ",
    "Título": "La naranja mecánica ",
    "Duración": 137,
    "País": "Reino Unido",
    "Fecha_estreno":new Date("1971"),
    "Resumen": "Gran Bretaña, en un futuro indeterminado. Alex (Malcolm McDowell) es un joven muy agresivo que tiene dos pasiones: la violencia desaforada y Beethoven. Es el jefe de la banda de los drugos, que dan rienda suelta a sus instintos más salvajes apaleando, violando y aterrorizando a la población. Cuando esa escalada de terror llega hasta el asesinato, Alex es detenido y, en prisión, se someterá voluntariamente a una innovadora experiencia de reeducación que pretende anular drásticamente cualquier atisbo de conducta antisocial.  ",
    "Subtítulos":false
  }
)
//Poblamos la base de datos con instancias de cines
db.Cines.insertOne(
	{
	"Número_cine": 1,
	"Nombre_cine": "Broadway",
	"Dirección":{
		"Calle":"C. de Leopoldo Cano",
		"Número":8,
		"Ciudad":"Valladolid",
		"Código postal":"47003"
	},
	"Teléfono": "983377134"
	}
)
db.Cines.insertOne(
	{
	"Número_cine": 2,
	"Nombre_cine": "Casablanca",
	"Dirección":{
		"Calle":"P.º del Hospital Militar",
		"Número":34,
		"Ciudad":"Valladolid",
		"Código postal":"47006"
	},
	"Teléfono": "983377134"
	}
)
db.Cines.insertOne(
	{
	"Número_cine": 3,
	"Nombre_cine": "Manhattan",
	"Dirección":{
		"Calle":"C. de Cervantes",
		"Número":13,
		"Ciudad":"Valladolid",
		"Código postal":"47005"
	},
	"Teléfono": "983377134"
	}
)
db.Cines.insertOne(
	{
	"Número_cine": 4,
	"Nombre_cine": "OCINE Río Shopping",
	"Dirección":{
		"Calle":"C. Me Falta un Tornillo",
		"Número":3,
		"Ciudad":"Valladolid",
		"Código postal":"47195"
	},
	"Teléfono": "983200000"
	}
)
db.Cines.insertOne(
	{
	"Número_cine": 5,
	"Nombre_cine": "Yelmo Premium Vallsur",
	"Dirección":{
		"Calle":"VallSur Shopping Center, Cam. Viejo de Simancas",
		"Número":1,
		"Ciudad":"Valladolid",
		"Código postal":"47008"
	},
	"Teléfono": "983377134"
	}
)
//Poblamos la base de datos con instancias de actores
db.Actores.insertOne(
{
    	"Número_actor": 1,
	"Nombre_actor": "Bruce Willis",
    	"Fecha_nacimiento":new Date("1955"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 2,
	"Nombre_actor": "Uma Thurman",
    	"Fecha_nacimiento":new Date("1970-04-29"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 3,
	"Nombre_actor": "Samuel L. Jackson",
    	"Fecha_nacimiento":new Date("1948-21-12"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 4,
	"Nombre_actor": "John Travolta",
    	"Fecha_nacimiento":new Date("1948-23-12"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 5,
	"Nombre_actor": "Helena Bonham Carter",
    	"Fecha_nacimiento":new Date("1966-05-26"),
    	"Nacionalidad": "Reino Unido"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 6,
	"Nombre_actor": "Edward Norton",
    	"Fecha_nacimiento":new Date("1969-08-18"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 7,
	"Nombre_actor": "Brad Pitt",
    	"Fecha_nacimiento":new Date("1963-12-18"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 8,
	"Nombre_actor": "Lauren Bacall",
    	"Fecha_nacimiento":new Date("1924-09-16"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 9,
	"Nombre_actor": "Nicole Kidman",
    	"Fecha_nacimiento":new Date("1967-06-20"),
    	"Nacionalidad": "Australia"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 10,
	"Nombre_actor": "John Hurt",
    	"Fecha_nacimiento":new Date("1940-01-22"),
    	"Nacionalidad": "Reino Unido"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 11,
	"Nombre_actor": "Sigourney Weaver",
    	"Fecha_nacimiento":new Date("1949-10-08"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 12,
	"Nombre_actor": "Charlotte Gainsbourg",
    	"Fecha_nacimiento":new Date("1971-07-21"),
    	"Nacionalidad": "Reino Unido"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 13,
	"Nombre_actor": "Paul Reiser",
    	"Fecha_nacimiento":new Date("1957-03-30"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 14,
	"Nombre_actor": "Charles S. Dutton",
    	"Fecha_nacimiento":new Date("1951-01-30"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 15,
	"Nombre_actor": "Winona Ryder",
    	"Fecha_nacimiento":new Date("29-11-1971"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 16,
	"Nombre_actor": "Morgan Freeman",
    	"Fecha_nacimiento":new Date("1937-11-01"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 17,
	"Nombre_actor": "Jodie Foster",
    	"Fecha_nacimiento":new Date("1962-11-19"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 18,
	"Nombre_actor": "Anthony Hopkins",
    	"Fecha_nacimiento":new Date("1937-12-31"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 19,
	"Nombre_actor": "Matthew McConaughey",
    	"Fecha_nacimiento":new Date("1969-04-11"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 20,
	"Nombre_actor": "Anne Hathaway",
    	"Fecha_nacimiento":new Date("1982-11-12"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 21,
	"Nombre_actor": "Marlon Brando",
    	"Fecha_nacimiento":new Date("1924-04-03"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 22,
	"Nombre_actor": "Al Pacino",
    	"Fecha_nacimiento":new Date("1940-04-25"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 23,
	"Nombre_actor": "Gary Lockwood",
    	"Fecha_nacimiento":new Date("1937-02-25"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 24,
	"Nombre_actor": "Keir Dullea",
    	"Fecha_nacimiento":new Date("1943-06-30"),
    	"Nacionalidad": "Estados Unidos"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 25,
	"Nombre_actor": "Malcolm McDowell",
    	"Fecha_nacimiento":new Date("1943-06-13"),
    	"Nacionalidad": "Reino Unido"
  }
)
db.Actores.insertOne(
{
    	"Número_actor": 26,
	"Nombre_actor": "Patrick Magee",
    	"Fecha_nacimiento":new Date("1922-03-31"),
    	"Nacionalidad": "Reino Unido"
  }
)
//Poblamos la base de datos con instancias de directores
//Pulp fiction 10
db.Directores.insertOne(
{
    	"Número_director": 1,
	"Nombre_director": "Quentin Tarantino",
    	"Fecha_nacimiento":new Date("1963-02-03"),
    	"Nacionalidad": "Estados Unidos"
  }
)	
//Silencio corderos 7
db.Directores.insertOne(
{
    	"Número_director": 2,
	"Nombre_director": "Jonathan Demme",
    	"Fecha_nacimiento":new Date("1944-02-22"),
    	"Nacionalidad": "Estados Unidos"
  }
)
// EL padrino I y II - 12 y 13
db.Directores.insertOne(
{
    	"Número_director": 3,
	"Nombre_director": "Francis Ford Coppola",
    	"Fecha_nacimiento":new Date("1939-04-07"),
    	"Nacionalidad": "Estados Unidos"
  }
)
// Alien 1
db.Directores.insertOne(
{
    	"Número_director": 4,
	"Nombre_director": "Ridley Scott",
    	"Fecha_nacimiento":new Date("1937-10-30"),
    	"Nacionalidad": "Reino Unido"
  }
)
// Naranja y 2001 - 14 y 15
db.Directores.insertOne(
{
    	"Número_director": 5,
	"Nombre_director": "Stanley Kubrick",
    	"Fecha_nacimiento":new Date("1928-07-26"),
    	"Nacionalidad": "Estados Unidos"
  }
)
// Aliens - 2
db.Directores.insertOne(
{
    	"Número_director": 6,
	"Nombre_director": "James Cameron",
    	"Fecha_nacimiento":new Date("1954-08-16"),
    	"Nacionalidad": "Canadá"
  }
)
// Dogville - 9
// 5 condiciones - 11
db.Directores.insertOne(
{
    	"Número_director": 7,
	"Nombre_director": "Lars von Trier",
    	"Fecha_nacimiento":new Date("1956-04-30"),
    	"Nacionalidad": "Dinamarca"
  }
)
// Aliens 3 - 3, El club de la lucha - 5, seven -6
db.Directores.insertOne(
{
    	"Número_director": 8,
	"Nombre_director": "David Fincher",
    	"Fecha_nacimiento":new Date("1962-08-28"),
    	"Nacionalidad": "Estados Unidos"
  }
)
// Interstellar - 8
db.Directores.insertOne(
{
    	"Número_director": 9,
	"Nombre_director": "Christopher Nolan",
    	"Fecha_nacimiento":new Date("1970-07-30"),
    	"Nacionalidad": "Reino Unido"
  }
)

// Alien resurrec - 4
db.Directores.insertOne(
{
    	"Número_director": 10,
	"Nombre_director": "Jean-Pierre Jeunet",
    	"Fecha_nacimiento":new Date("1953-09-03"),
    	"Nacionalidad": "Francia"
  }
)
// 5 condiciones - 11
db.Directores.insertOne(
{
    	"Número_director": 11,
	"Nombre_director": "Jorgen Leth",
    	"Fecha_nacimiento":new Date("1937-06-14"),
    	"Nacionalidad": "Dinamarca"
  }
)
//Poblamos la base de datos con instancias de críticas
// Silencio corderos
// Pablo Kurt: FilmAffinity 
db.Críticas.insertOne(
{
    	"Número_crítica": 1,
	"Resumen": "Sin lugar a dudas, el thriller de los años noventa. Un formidable ejercicio de suspense psicológico con toques de terror que arrasó en las taquillas, consiguió un hito pocas veces visto en los Oscar (se llevó los 5 premios principales... ¡cuando llevaba un año estrenada!) y demostró la maestría de Anthony Hopkins al interpretar de forma prodigiosa a un psiquiatra caníbal que fascinó a todos. Aunque, para ser justos, lo que hace que The Silence of the Lambs destaque sobre la mayoría de películas del género no es sólo el magnético personaje de Lecter, sino la inteligencia de su guión y la habilidad de su directa y poco glamourosa dirección. El texto alterna interesantísimos detalles sobre la investigación en curso con sorpresas tan impredecibles como angustiosas. Y la realización se apoya en escenas impactantes y multitud de primeros planos, consiguiendo exprimir la mayor potencia posible del relato. Mención especial para las escenas -y diálogos- entre Clarice y el Dr. Lecter, todas absolutamente memorables. Un clásico imprescindible.",
    	"Url":"https://www.filmaffinity.com/es/film768790.html",
    	"Estrellas": 5
  }
)
// Silencio corderos
//Fernando Morales: el mundo
db.Críticas.insertOne(
{
    	"Número_crítica": 2,
	"Resumen": "Excelentes interpretaciones (...) un excelente guión (...) y una cuidada ambientación son los pilares de esta realización (...). Muy buena.",
	"Url":"https://elpais.com/diario/1997/03/16/radiotv/858466811_850215.html",
    	"Estrellas": 4
  }
)
// Silencio corderos
// Roger Ebert: Chicago Sun-Times 
db.Críticas.insertOne(
{
    	"Número_crítica": 3,
	"Resumen": "Verdadero suspense, terror sin pestañeo y una interpretación de Anthony Hopkins que es probable que sea referente durante años cuando se analice el cine de terror.",
	"Url":"http://rogerebert.suntimes.com/apps/pbcs.dll/article?AID=/19910214/REVIEWS/102140301",
    	"Estrellas": 3
  }
)
//Alien
// Boyero pais
db.Críticas.insertOne(
{
    	"Número_crítica": 4,
	"Resumen": "Obra maestra, filme hermoso, tenebroso, tenso, angustioso cuento gótico de horror por cuyas arterias y espeluznantes pasillos corren fantasmas de Conrad y Lovecraft. Es el suspense sobrecogedor, el más sobrecogedor de los últimos tiempos.",
	"Url":"https://elpais.com/diario/1989/07/19/radiotv/616802404_850215.html",
    	"Estrellas": 5
  }
)
//Alien
//Dave Kehr: Chicago Reader
db.Críticas.insertOne(
{
    	"Número_crítica": 5,
	"Resumen": "Partiendo de una ambiciosa concepción estética desarrolla una historia cuyos estremecedores perfiles encierran una nada desdeñable dimensión metafísica. (…) ",
	"Url":"https://www.fotogramas.es/peliculas-criticas/a2350/alien-el-octavo-pasajero/",
    	"Estrellas": 5
  }
)
//Alien
//Michael Wilmington: Chicago Tribune
db.Críticas.insertOne(
{
    	"Número_crítica": 6,
	"Resumen": "Una vacua película de horror con nada que recomendar más allá de la dirección artística estilo disco y algunos efectos atractivos, aunque populacheros (...)",
	"Url":"http://www.chicagoreader.com/chicago/alien/Film?oid=5280632",
    	"Estrellas": 2
  }
)
//Aliens
//// Boyero pais
db.Críticas.insertOne(
{
    	"Número_crítica": 7,
	"Resumen": "Tras el descomunal éxito de la primera entrega Sigourney Weaver vuelve a protagonizar esta atractiva secuela",
	"Url":"https://www.filmaffinity.com/es/name.php?name-id=913390816",
    	"Estrellas": 5
  }
)
//Aliens
// Roger Ebert: Chicago Sun-Times 
db.Críticas.insertOne(
{
    	"Número_crítica": 8,
	"Resumen": "Un ejemplo magnífico de arte cinematográfico. Al director, James Cameron, le encargaron hacer un thriller intenso y terrorífico, y lo ha conseguido. (...)",
	"Url":"https://www.rogerebert.com/reviews/aliens-1986",
    	"Estrellas": 3
  }
)
//Alien 3
//// Boyero pais
db.Críticas.insertOne(
{
    	"Número_crítica": 9,
	"Resumen": "Entretenida continuación de la saga. Fincher debuta con esta fábula futurista, bien ambientada, aunque con un guión bastante discretito. Como siempre, el entretenimiento está asegurado",
	"Url":"https://www.filmaffinity.com/es/name.php?name-id=913390816",
    	"Estrellas": 2
  }
)
//Alien 3
//Kim Newman: Empire 
db.Críticas.insertOne(
{
    	"Número_crítica": 10,
	"Resumen": "La película nunca se recupera [de sus primeras escenas] y se precipita con rapidez hacia su absurdo final 'trascendente' ",
	"Url":"https://www.empireonline.com/movies/reviews/alien-3-review/",
    	"Estrellas": 2
  }
)
//Alien 3
//Keith Phipps: AV Club 
db.Críticas.insertOne(
{
    	"Número_crítica": 11,
	"Resumen": "Gana puntos por su bravuconería estilística y su coraje para dar los giros más oscuros de la saga, pero pierde esos puntos siendo aburrida de manera imperdonable." ,
	"Url":"https://www.avclub.com/alien-3-1798199149",
    	"Estrellas": 1
  }
)
//Alien resurrection
//Boyero pais
db.Críticas.insertOne(
{
    	"Número_crítica": 12,
	"Resumen": "Un espectáculo de bichos raros diseñado para ganar en taquilla un par de fines de semana y luego desaparecer de la memoria (…) Puntuación: ★" ,
	"Url":"https://www.rogerebert.com/reviews/alien-resurrection-1997",
    	"Estrellas": 1
  }
)
//Alien resurrection
//Janet Maslin: The New York Times
db.Críticas.insertOne(
{
    	"Número_crítica": 13,
	"Resumen": "Weaver es el eje central de esta saga y ni siquiera ella consigue hacerla agradable para los débiles de corazón." ,
	"Url":"https://www.nytimes.com/reviews/movies?res=9400EED6163AF935A15752C1A961958260",
    	"Estrellas": 1
  }
)
// El club de la lucha
//Carlos Boyero El país
db.Críticas.insertOne(
{
    	"Número_crítica": 14,
	"Resumen": "Pretenciosa gilipollez (...) Todo resulta un disparate con pretensiones de gran espectáculo" ,
	"Url":"https://www.filmaffinity.com/es/film536945.html",
    	"Estrellas": 1
  }
)
// El club de la lucha
//Fernando Morales: Diario El Mundo
db.Críticas.insertOne(
{
    	"Número_crítica": 15,
	"Resumen": "De todos es sabida la predilección de Fincher por la violencia. Pero en esta ocasión se ha pasado. El filme es un puro despropósito, un canto fascista al salvajismo" ,
	"Url":"https://www.filmaffinity.com/es/film536945.html",
    	"Estrellas": 1
  }
)
// Seven
//Carlos Boyero El país
db.Críticas.insertOne(
{
    	"Número_crítica": 16,
	"Resumen": "Sombría, desasosegante. Guión turbio e inteligente. Las escenas de acción no son un pegote comercial y funcionan magistralmente. Sus imágenes perviven en la memoria" ,
	"Url":"https://www.filmaffinity.com/es/name.php?name-id=618676456",
    	"Estrellas": 5
  }
)
// Seven
//Pablo González Taboada: Cinemanía
db.Críticas.insertOne(
{
    	"Número_crítica": 17,
	"Resumen": "Una obra maestra, uno de los films policiacos más importantes de la historia del cine (...) por el que no ha pasado el tiempo, atmosférico y opresivo." ,
	"Url":"https://www.20minutos.es/cinemania/noticias/sitges-2015-dia-3-la-obra-maestra-de-john-doe-y-el-stop-motion-de-anomalisa-64971/",
    	"Estrellas": 5
  }
)
// Seven
//Derek Malcolm: The Guardian 
db.Críticas.insertOne(
{
    	"Número_crítica": 18,
	"Resumen": "Una película original y genuina que, aunque deja un regusto salado en la boca, te mantiene al borde de tu asiento." ,
	"Url":"https://www.theguardian.com/film/News_Story/Critic_Review/Guardian_review/0,,558621,00.html",
    	"Estrellas": 5
  }
)

// Interstellar
//Fernando Morales: Diario El Mundo
db.Críticas.insertOne(
{
    	"Número_crítica": 20,
	"Resumen": "'Interstellar' resulta por momentos pomposa; a ratos ingenua. (...) Y sin embargo, y pese a todo, se impone la magnificencia de un espectáculo capaz de asombrar con la misma fuerza que arrastra hacia dentro" ,
	"Url":"https://www.elmundo.es/cultura/2014/11/06/545a5f0f268e3eab508b456d.html",
    	"Estrellas": 5
  }
)
// Interstellar
//Scott Foundas: Variety 
db.Críticas.insertOne(
{
    	"Número_crítica": 21,
	"Resumen": 
"Un slalom a través de los estimulantes agujeros espacio-temporales de la gran imaginación de Christopher Nolan, que es a la vez el sueño febril de un friki de la ciencia y la formidable reflexión sobre lo que nos hace humanos." ,
"Url":"https://variety.com/2014/film/reviews/film-review-interstellar-1201338475/",
    	"Estrellas": 5
  }
)
// Dogville
//Antonio Gasset: Días de cine
db.Críticas.insertOne(
{
    	"Número_crítica": 22,
	"Resumen": 
"Una obra maestra, valiente y arriesgada." ,
"Url":"https://www.filmaffinity.com/es/name.php?name-id=998713094",
    	"Estrellas": 4
  }
)
// Dogville
//Janet Maslin: The New York Times
db.Críticas.insertOne(
{
    	"Número_crítica": 23,
	"Resumen": "Lo que hace que sea tan fascinante como desconcertante es la tensión que existe entre lo universal y lo específico" ,
"Url":"https://www.nytimes.com/2004/03/21/movies/dogville-it-fakes-a-village.html",
    	"Estrellas": 4
  }
)
// Pulp fiction
//Roger Ebert: rogerebert.com
db.Críticas.insertOne(
{
    	"Número_crítica": 24,
	"Resumen": "Al igual que 'Ciudadano Kane', 'Pulp Fiction' está construida de una manera no lineal, podrías verla una docena de veces y no ser capaz de recordar lo que viene después (...) Puntuación: ★★★★ (sobre 4)" ,
"Url":"https://www.rogerebert.com/reviews/pulp-fiction-1994",
    	"Estrellas": 5
  }
)
// Pulp fiction
//Mick LaSalle: SFGATE
db.Críticas.insertOne(
{
    	"Número_crítica": 25,
	"Resumen": "Es una gozada de principio a fin. Es el equivalente en película de esas pocas novelas en las que vas comprobando cuántas páginas te quedan con la esperanza de que haya más, y no menos" ,
"Url":"https://www.sfgate.com/movies/article/FILM-REVIEW-Pulp-Grabs-You-Like-a-Novel-3024865.php",
    	"Estrellas": 5
  }
)

//Poblamos con instancias de críticos
db.Críticos.insertOne(
{
    	"Número_crítico": 1,
	"Nombre": "Pablo Kurt" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 2,
	"Nombre": "Fernando Morales" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 3,
	"Nombre": "Roger Ebert" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 4,
	"Nombre": "Carlos Boyero" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 5,
	"Nombre": "Dave Kehr" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 6,
	"Nombre": "Michael Wilmington" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 7,
	"Nombre": "Ed González" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 8,
	"Nombre": "Kim Newman" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 9,
	"Nombre": "Keith Phipps" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 10,
	"Nombre": "Janet Maslin" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 11,
	"Nombre": "Pablo González Taboada" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 12,
	"Nombre": "Derek Malcolm" 
  }
)
db.Críticos.insertOne(
{
    	"Número_crítico": 13,
	"Nombre": "Scott Foundas" 
  }
)

db.Críticos.insertOne(
{
    	"Número_crítico": 15,
	"Nombre": "Antonio Gasset" 
  }
)

db.Críticos.insertOne(
{
    	"Número_crítico": 17,
	"Nombre": "Mick LaSalle" 
  }
)

// Poblamos con las instancias de medios
db.Medios.insertOne(
{
    	"Número_medio": 1,
	"Nombre_medio": "SFGATE" ,
	"País": "Estados Unidos"
  }
)

db.Medios.insertOne(
{
    	"Número_medio": 3,
	"Nombre_medio": "Días de cine" ,
	"País": "España"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 4,
	"Nombre_medio": "Variety" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 5,
	"Nombre_medio": "The Guardian" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 6,
	"Nombre_medio": "Cinemanía" ,
	"País": "España"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 7,
	"Nombre_medio": "The New York Times" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 8,
	"Nombre_medio": "AV Club" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 9,
	"Nombre_medio": "Empire" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 10,
	"Nombre_medio": "Slant" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 11,
	"Nombre_medio": "Chicago tribune" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 12,
	"Nombre_medio": "Chicago reader" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 13,
	"Nombre_medio": "El País" ,
	"País": "España"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 14,
	"Nombre_medio": "Chicago Sun-Times" ,
	"País": "Estados Unidos"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 15,
	"Nombre_medio": "El Mundo" ,
	"País": "España"
  }
)
db.Medios.insertOne(
{
    	"Número_medio": 16,
	"Nombre_medio": "Filmaffinity" ,
	"País": "España"
  }
)



// Poblamos con las instancias de géneros
db.Géneros.insertOne(
{
    	"Número_género": 1,
	"Nombre_género": "Acción"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 2,
	"Nombre_género": "Aventuras"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 3,
	"Nombre_género": "Ciencia ficción"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 4,
	"Nombre_género": "Comedia"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 5,
	"Nombre_género": "No-ficción"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 6,
	"Nombre_género": "Drama"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 7,
	"Nombre_género": "Fantasía"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 8,
	"Nombre_género": "Musical"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 9,
	"Nombre_género": "Suspense"
  }
)
db.Géneros.insertOne(
{
    	"Número_género": 10,
	"Nombre_género": "Terror"
  }
)

//Obtenemos el valor de los IDs de todas las instancias introducidas

Medio1 = db.Medios.findOne({ 'Número_medio': 1 }, { '_id': 1 } )
Medio1['_id'].toString
Medio1 = ""+Medio1['_id']

Medio3 = db.Medios.findOne({ 'Número_medio': 15 }, { '_id': 1 } )
Medio3['_id'].toString
Medio3 = ""+Medio3['_id']

Medio3 = db.Medios.findOne({ 'Número_medio': 3 }, { '_id': 1 } )
Medio3['_id'].toString
Medio3 = ""+Medio3['_id']

Medio4 = db.Medios.findOne({ 'Número_medio': 4 }, { '_id': 1 } )
Medio4['_id'].toString
Medio4 = ""+Medio4['_id']

Medio5 = db.Medios.findOne({ 'Número_medio': 5 }, { '_id': 1 } )
Medio5['_id'].toString
Medio5 = ""+Medio5['_id']

Medio6 = db.Medios.findOne({ 'Número_medio': 6 }, { '_id': 1 } )
Medio6['_id'].toString
Medio6 = ""+Medio6['_id']

Medio7 = db.Medios.findOne({ 'Número_medio': 7 }, { '_id': 1 } )
Medio7['_id'].toString
Medio7 = ""+Medio7['_id']

Medio8 = db.Medios.findOne({ 'Número_medio': 8 }, { '_id': 1 } )
Medio8['_id'].toString
Medio8 = ""+Medio8['_id']

Medio9 = db.Medios.findOne({ 'Número_medio': 9 }, { '_id': 1 } )
Medio9['_id'].toString
Medio9 = ""+Medio9['_id']

Medio10 = db.Medios.findOne({ 'Número_medio': 10 }, { '_id': 1 } )
Medio10['_id']
Medio10['_id'].toString
Medio10 = ""+Medio10['_id']

Medio11 = db.Medios.findOne({ 'Número_medio': 11 }, { '_id': 1 } )
Medio11['_id']
Medio11['_id'].toString
Medio11 = ""+Medio11['_id']

Medio12 = db.Medios.findOne({ 'Número_medio': 12 }, { '_id': 1 } )
Medio12['_id'].toString
Medio12 = ""+Medio12['_id']

Medio13 = db.Medios.findOne({ 'Número_medio': 13 }, { '_id': 1 } )
Medio13['_id'].toString
Medio13 = ""+Medio13['_id']

Medio14 = db.Medios.findOne({ 'Número_medio': 14 }, { '_id': 1 } )
Medio14['_id']
Medio14['_id'].toString
Medio14 = ""+Medio14['_id']

Medio15 = db.Medios.findOne({ 'Número_medio': 15 }, { '_id': 1 } )
Medio15['_id'].toString
Medio15 = ""+Medio15['_id']

Medio16 = db.Medios.findOne({ 'Número_medio': 16 }, { '_id': 1 } )
Medio16['_id'].toString
Medio16 = ""+Medio16['_id']

Crítico1 = db.Críticos.findOne({ 'Número_crítico': 1 }, { '_id': 1 } )
Crítico1['_id'].toString
Crítico1= ""+Crítico1['_id']

Crítico2 = db.Críticos.findOne({ 'Número_crítico': 2 }, { '_id': 1 } )
Crítico2['_id'].toString
Crítico2 = ""+Crítico2['_id']

Crítico3 = db.Críticos.findOne({ 'Número_crítico': 3 }, { '_id': 1 } )
Crítico3['_id'].toString
Crítico3 = ""+Crítico3['_id']

Crítico4 = db.Críticos.findOne({ 'Número_crítico': 4 }, { '_id': 1 } )
Crítico4['_id'].toString
Crítico4 = ""+Crítico4['_id']

Crítico5 = db.Críticos.findOne({ 'Número_crítico': 5 }, { '_id': 1 } )
Crítico5['_id'].toString
Crítico5 = ""+Crítico5['_id']

Crítico6 = db.Críticos.findOne({ 'Número_crítico': 6 }, { '_id': 1 } )
Crítico6['_id'].toString
Crítico6 = ""+Crítico6['_id']

Crítico7 = db.Críticos.findOne({ 'Número_crítico': 7 }, { '_id': 1 } )
Crítico7['_id'].toString
Crítico7 = ""+Crítico7['_id']

Crítico8 = db.Críticos.findOne({ 'Número_crítico': 8 }, { '_id': 1 } )
Crítico8['_id'].toString
Crítico8 = ""+Crítico8['_id']

Crítico9 = db.Críticos.findOne({ 'Número_crítico': 9 }, { '_id': 1 } )
Crítico9['_id'].toString
Crítico9 = ""+Crítico9['_id']

Crítico10 = db.Críticos.findOne({ 'Número_crítico': 10 }, { '_id': 1 } )
Crítico10['_id'].toString
Crítico10= ""+Crítico10['_id']

Crítico11 = db.Críticos.findOne({ 'Número_crítico': 11 }, { '_id': 1 } )
Crítico11['_id'].toString
Crítico11= ""+Crítico11['_id']

Crítico12 = db.Críticos.findOne({ 'Número_crítico': 12 }, { '_id': 1 } )
Crítico12['_id'].toString
Crítico12= ""+Crítico12['_id']

Crítico13 = db.Críticos.findOne({ 'Número_crítico': 13 }, { '_id': 1 } )
Crítico13['_id'].toString
Crítico13= ""+Crítico13['_id']

Crítico15 = db.Críticos.findOne({ 'Número_crítico': 15 }, { '_id': 1 } )
Crítico15['_id'].toString
Crítico15= ""+Crítico15['_id']

Crítico17 = db.Críticos.findOne({ 'Número_crítico': 17 }, { '_id': 1 } )
Crítico17['_id'].toString
Crítico17= ""+Crítico17['_id']

Crítica1= db.Críticas.findOne({ 'Número_crítica': 1 }, { '_id': 1 } )
Crítica1['_id'].toString
Crítica1 = ""+Crítica1['_id']

Crítica2= db.Críticas.findOne({ 'Número_crítica': 2 }, { '_id': 1 } )
Crítica2['_id'].toString
Crítica2 = ""+Crítica2['_id']

Crítica3= db.Críticas.findOne({ 'Número_crítica': 3 }, { '_id': 1 } )
Crítica3['_id'].toString
Crítica3 = ""+Crítica3['_id']

Crítica4= db.Críticas.findOne({ 'Número_crítica': 4 }, { '_id': 1 } )
Crítica4['_id'].toString
Crítica4 = ""+Crítica4['_id']

Crítica5= db.Críticas.findOne({ 'Número_crítica': 5 }, { '_id': 1 } )
Crítica5['_id']
Crítica5['_id'].toString
Crítica5 = ""+Crítica5['_id']

Crítica6= db.Críticas.findOne({ 'Número_crítica': 6 }, { '_id': 1 } )
Crítica6['_id'].toString
Crítica6 = ""+Crítica6['_id']

Crítica7= db.Críticas.findOne({ 'Número_crítica': 7 }, { '_id': 1 } )
Crítica7['_id'].toString
Crítica7 = ""+Crítica7['_id']

Crítica8= db.Críticas.findOne({ 'Número_crítica': 8 }, { '_id': 1 } )
Crítica8['_id'].toString
Crítica8 = ""+Crítica8['_id']

Crítica9= db.Críticas.findOne({ 'Número_crítica': 9 }, { '_id': 1 } )
Crítica9['_id'].toString
Crítica9 = ""+Crítica9['_id']

Crítica10= db.Críticas.findOne({ 'Número_crítica': 10 }, { '_id': 1 } )
Crítica10['_id'].toString
Crítica10 = ""+Crítica10['_id']

Crítica11= db.Críticas.findOne({ 'Número_crítica': 11 }, { '_id': 1 } )
Crítica11['_id'].toString
Crítica11 = ""+Crítica11['_id']

Crítica12= db.Críticas.findOne({ 'Número_crítica': 12 }, { '_id': 1 } )
Crítica12['_id'].toString
Crítica12 = ""+Crítica12['_id']

Crítica13= db.Críticas.findOne({ 'Número_crítica': 13 }, { '_id': 1 } )
Crítica13['_id'].toString
Crítica13 = ""+Crítica13['_id']

Crítica14= db.Críticas.findOne({ 'Número_crítica': 14 }, { '_id': 1 } )
Crítica14['_id'].toString
Crítica14 = ""+Crítica14['_id']

Crítica15= db.Críticas.findOne({ 'Número_crítica': 15 }, { '_id': 1 } )
Crítica15['_id'].toString
Crítica15 = ""+Crítica15['_id']

Crítica16= db.Críticas.findOne({ 'Número_crítica': 16 }, { '_id': 1 } )
Crítica16['_id'].toString
Crítica16 = ""+Crítica16['_id']

Crítica17= db.Críticas.findOne({ 'Número_crítica': 17 }, { '_id': 1 } )
Crítica17['_id'].toString
Crítica17 = ""+Crítica17['_id']

Crítica18= db.Críticas.findOne({ 'Número_crítica': 18 }, { '_id': 1 } )
Crítica18['_id'].toString
Crítica18 = ""+Crítica18['_id']

Crítica20= db.Críticas.findOne({ 'Número_crítica': 20 }, { '_id': 1 } )
Crítica20['_id'].toString
Crítica20 = ""+Crítica20['_id']

Crítica21= db.Críticas.findOne({ 'Número_crítica': 21 }, { '_id': 1 } )
Crítica21['_id'].toString
Crítica21 = ""+Crítica21['_id']

Crítica22= db.Críticas.findOne({ 'Número_crítica': 22 }, { '_id': 1 } )
Crítica22['_id'].toString
Crítica22 = ""+Crítica22['_id']

Crítica23= db.Críticas.findOne({ 'Número_crítica': 23 }, { '_id': 1 } )
Crítica23['_id'].toString
Crítica23 = ""+Crítica23['_id']

Crítica24= db.Críticas.findOne({ 'Número_crítica': 24 }, { '_id': 1 } )
Crítica24['_id'].toString
Crítica24 = ""+Crítica24['_id']

Crítica25= db.Críticas.findOne({ 'Número_crítica': 25 }, { '_id': 1 } )
Crítica25['_id'].toString
Crítica25 = ""+Crítica25['_id']

Director1= db.Directores.findOne({ 'Número_director': 1 }, { '_id': 1 } )
Director1['_id'].toString
Director1 = ""+Director1['_id']

Director2= db.Directores.findOne({ 'Número_director': 2}, { '_id': 1 } )
Director2['_id'].toString
Director2 = ""+Director2['_id']

Director3= db.Directores.findOne({ 'Número_director': 3 }, { '_id': 1 } )
Director3['_id'].toString
Director3 = ""+Director3['_id']

Director4= db.Directores.findOne({ 'Número_director': 4 }, { '_id': 1 } )
Director4['_id'].toString
Director4 = ""+Director4['_id']

Director5= db.Directores.findOne({ 'Número_director': 5 }, { '_id': 1 } )
Director5['_id'].toString
Director5 = ""+Director5['_id']

Director6= db.Directores.findOne({ 'Número_director': 6 }, { '_id': 1 } )
Director6['_id'].toString
Director6 = ""+Director6['_id']

Director7= db.Directores.findOne({ 'Número_director': 7 }, { '_id': 1 } )
Director7['_id'].toString
Director7 = ""+Director7['_id']

Director8= db.Directores.findOne({ 'Número_director': 8 }, { '_id': 1 } )
Director8['_id'].toString
Director8 = ""+Director8['_id']

Director9= db.Directores.findOne({ 'Número_director': 9 }, { '_id': 1 } )
Director9['_id'].toString
Director9 = ""+Director9['_id']

Director10= db.Directores.findOne({ 'Número_director': 10 }, { '_id': 1 } )
Director10['_id'].toString
Director10 = ""+Director10['_id']

Director11= db.Directores.findOne({ 'Número_director': 11 }, { '_id': 1 } )
Director11['_id'].toString
Director11 = ""+Director11['_id']

Película1= db.Películas.findOne({ 'Número_película': 1 }, { '_id': 1 } )
Película1['_id'].toString
Película1 = ""+Película1['_id']

Película2= db.Películas.findOne({ 'Número_película': 2 }, { '_id': 1 } )
Película2['_id'].toString
Película2 = ""+Película2['_id']

Película3= db.Películas.findOne({ 'Número_película': 3 }, { '_id': 1 } )
Película3['_id'].toString
Película3 = ""+Película3['_id']

Película4= db.Películas.findOne({ 'Número_película': 4 }, { '_id': 1 } )
Película4['_id'].toString
Película4 = ""+Película4['_id']

Película5= db.Películas.findOne({ 'Número_película': 5 }, { '_id': 1 } )
Película5['_id'].toString
Película5 = ""+Película5['_id']

Película6= db.Películas.findOne({ 'Número_película': 6 }, { '_id': 1 } )
Película6['_id'].toString
Película6 = ""+Película6['_id']

Película7= db.Películas.findOne({ 'Número_película': 7 }, { '_id': 1 } )
Película7['_id'].toString
Película7 = ""+Película7['_id']

Película8= db.Películas.findOne({ 'Número_película': 8 }, { '_id': 1 } )
Película8['_id'].toString
Película8 = ""+Película8['_id']

Película9= db.Películas.findOne({ 'Número_película': 9 }, { '_id': 1 } )
Película9['_id'].toString
Película9 = ""+Película9['_id']

Película10= db.Películas.findOne({ 'Número_película': 10 }, { '_id': 1 } )
Película10['_id'].toString
Película10 = ""+Película10['_id']

Película11= db.Películas.findOne({ 'Número_película': 11 }, { '_id': 1 } )
Película11['_id'].toString
Película11 = ""+Película11['_id']

Película12= db.Películas.findOne({ 'Número_película': 12 }, { '_id': 1 } )
Película12['_id'].toString
Película12 = ""+Película12['_id']

Película13= db.Películas.findOne({ 'Número_película': 13 }, { '_id': 1 } )
Película13['_id'].toString
Película13 = ""+Película13['_id']

Película14= db.Películas.findOne({ 'Número_película': 14 }, { '_id': 1 } )
Película14['_id'].toString
Película14 = ""+Película14['_id']

Película15= db.Películas.findOne({ 'Número_película': 15 }, { '_id': 1 } )
Película15['_id'].toString
Película15 = ""+Película15['_id']

Género1= db.Géneros.findOne({ "Número_género": 1 }, { '_id': 1 } )
Género1['_id'].toString
Género1 = ""+Género1['_id']

Género2= db.Géneros.findOne({ "Número_género": 2 }, { '_id': 1 } )
Género2['_id'].toString
Género2 = ""+Género2['_id']

Género3= db.Géneros.findOne({ "Número_género": 3 }, { '_id': 1 } )
Género3['_id'].toString
Género3 = ""+Género3['_id']

Género4= db.Géneros.findOne({ "Número_género": 4 }, { '_id': 1 } )
Género4['_id'].toString
Género4 = ""+Género4['_id']

Género5= db.Géneros.findOne({ "Número_género": 5 }, { '_id': 1 } )
Género5['_id'].toString
Género5 = ""+Género5['_id']

Género6= db.Géneros.findOne({ "Número_género": 6 }, { '_id': 1 } )
Género6['_id'].toString
Género6 = ""+Género6['_id']

Género7= db.Géneros.findOne({ "Número_género": 7 }, { '_id': 1 } )
Género7['_id'].toString
Género7 = ""+Género7['_id']

Género8= db.Géneros.findOne({ "Número_género": 8 }, { '_id': 1 } )
Género8['_id'].toString
Género8 = ""+Género8['_id']

Género9= db.Géneros.findOne({ "Número_género": 9 }, { '_id': 1 } )
Género9['_id'].toString
Género9 = ""+Género9['_id']

Género10= db.Géneros.findOne({ "Número_género": 10 }, { '_id': 1 } )
Género10['_id'].toString
Género10 = ""+Género10['_id']

Actor1= db.Actores.findOne({ "Número_actor": 1 }, { '_id': 1 } )
Actor1['_id'].toString
Actor1 = ""+Actor1['_id']

Actor2= db.Actores.findOne({ "Número_actor": 2 }, { '_id': 1 } )
Actor2['_id'].toString
Actor2 = ""+Actor2['_id']

Actor3= db.Actores.findOne({ "Número_actor": 3 }, { '_id': 1 } )
Actor3['_id'].toString
Actor3 = ""+Actor3['_id']

Actor4= db.Actores.findOne({ "Número_actor": 4 }, { '_id': 1 } )
Actor4['_id'].toString
Actor4 = ""+Actor4['_id']

Actor5= db.Actores.findOne({ "Número_actor": 5 }, { '_id': 1 } )
Actor5['_id'].toString
Actor5 = ""+Actor5['_id']

Actor6= db.Actores.findOne({ "Número_actor": 6 }, { '_id': 1 } )
Actor6['_id'].toString
Actor6 = ""+Actor6['_id']

Actor7= db.Actores.findOne({ "Número_actor": 7 }, { '_id': 1 } )
Actor7['_id'].toString
Actor7 = ""+Actor7['_id']

Actor8= db.Actores.findOne({ "Número_actor": 8 }, { '_id': 1 } )
Actor8['_id'].toString
Actor8 = ""+Actor8['_id']

Actor9= db.Actores.findOne({ "Número_actor": 9 }, { '_id': 1 } )
Actor9['_id'].toString
Actor9 = ""+Actor9['_id']

Actor10= db.Actores.findOne({ "Número_actor": 10 }, { '_id': 1 } )
Actor10['_id'].toString
Actor10 = ""+Actor10['_id']

Actor11= db.Actores.findOne({ "Número_actor": 11 }, { '_id': 1 } )
Actor11['_id'].toString
Actor11 = ""+Actor11['_id']

Actor12= db.Actores.findOne({ "Número_actor": 12 }, { '_id': 1 } )
Actor12['_id'].toString
Actor12 = ""+Actor12['_id']

Actor13= db.Actores.findOne({ "Número_actor": 13 }, { '_id': 1 } )
Actor13['_id'].toString
Actor13 = ""+Actor13['_id']

Actor14= db.Actores.findOne({ "Número_actor": 14 }, { '_id': 1 } )
Actor14['_id'].toString
Actor14 = ""+Actor14['_id']

Actor15= db.Actores.findOne({ "Número_actor": 15 }, { '_id': 1 } )
Actor15['_id'].toString
Actor15 = ""+Actor15['_id']

Actor16= db.Actores.findOne({ "Número_actor": 16 }, { '_id': 1 } )
Actor16['_id'].toString
Actor16 = ""+Actor16['_id']

Actor17= db.Actores.findOne({ "Número_actor": 17 }, { '_id': 1 } )
Actor17['_id'].toString
Actor17 = ""+Actor17['_id']

Actor18= db.Actores.findOne({ "Número_actor": 18 }, { '_id': 1 } )
Actor18['_id'].toString
Actor18 = ""+Actor18['_id']

Actor19= db.Actores.findOne({ "Número_actor": 19 }, { '_id': 1 } )
Actor19['_id'].toString
Actor19 = ""+Actor19['_id']

Actor20= db.Actores.findOne({ "Número_actor": 20 }, { '_id': 1 } )
Actor20['_id'].toString
Actor20 = ""+Actor20['_id']

Actor21= db.Actores.findOne({ "Número_actor": 21 }, { '_id': 1 } )
Actor21['_id'].toString
Actor21 = ""+Actor21['_id']

Actor22= db.Actores.findOne({ "Número_actor": 22 }, { '_id': 1 } )
Actor22['_id'].toString
Actor22 = ""+Actor22['_id']

Actor23= db.Actores.findOne({ "Número_actor": 23 }, { '_id': 1 } )
Actor23['_id'].toString
Actor23 = ""+Actor23['_id']

Actor24= db.Actores.findOne({ "Número_actor": 24 }, { '_id': 1 } )
Actor24['_id'].toString
Actor24 = ""+Actor24['_id']

Actor25= db.Actores.findOne({ "Número_actor": 25 }, { '_id': 1 } )
Actor25['_id'].toString
Actor25 = ""+Actor25['_id']

Actor26= db.Actores.findOne({ "Número_actor": 26 }, { '_id': 1 } )
Actor26['_id'].toString
Actor26 = ""+Actor26['_id']

Cine1 = db.Cines.findOne({ 'Número_cine': 1 }, { '_id': 1 } )
Cine1['_id'].toString
Cine1 = ""+Cine1['_id']

Cine2 = db.Cines.findOne({ 'Número_cine': 2 }, { '_id': 1 } )
Cine2['_id'].toString
Cine2 = ""+Cine2['_id']

Cine3 = db.Cines.findOne({ 'Número_cine': 3 }, { '_id': 1 } )
Cine3['_id'].toString
Cine3 = ""+Cine3['_id']

Cine4 = db.Cines.findOne({ 'Número_cine': 4 }, { '_id': 1 } )
Cine4['_id'].toString
Cine4 = ""+Cine4['_id']

Cine5 = db.Cines.findOne({ 'Número_cine': 5 }, { '_id': 1 } )
Cine5['_id'].toString
Cine5 = ""+Cine5['_id']


//Medios_impresos
//El país - medio13
db.Medios_impresos.insertOne(
{
    	"Tirada": 1000000,
	"Nacional": true,
	"Medio": ObjectId(Medio13)
  }
)
//El mundo - medio15
db.Medios_impresos.insertOne(
{
    	"Tirada": 600,
	"Nacional": true, 
	"Medio": ObjectId(Medio15)
  }
)
//The guaatdian - medio5
db.Medios_impresos.insertOne(
{
    	"Tirada": 500000,
	"Nacional": false,
	"Medio": ObjectId(Medio5) 
  }
)

//Medios digitales
//SFGATE - medio1
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.sfgate.com/",
    	"Medio": ObjectId(Medio1)
  }
)
//Días de cine - medio3
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.rtve.es/play/videos/dias-de-cine/",
    	"Medio": ObjectId(Medio3)
  }
)
//Días de variety - medio6
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.20minutos.es/cinemania/",
    	"Medio": ObjectId(Medio6)
  }
)
//Cinemania - medio4
db.Medios_digitales.insertOne(
{
    	"Url": "https://variety.com/",
    	"Medio": ObjectId(Medio4)
  }
)
//Nyt - medio7
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.nytimes.com/es/",
    	"Medio": ObjectId(Medio7)
  }
)
//AVCLub - medio8
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.avclub.com/",
    	"Medio": ObjectId(Medio8)
  }
)
//Empire- medio9
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.empireonline.com/"
  }
)
//Slant medio10
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.slantmagazine.com/",
    	"Medio": ObjectId(Medio10)
  }
)
//Chicago tribune - medio11
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.chicagotribune.com/",
    	"Medio": ObjectId(Medio11)
  }
)
//Nyt - medio12 - chicago reader
db.Medios_digitales.insertOne(
{
    	"Url": "https://chicagoreader.com/",
    	"Medio": ObjectId(Medio12)
  }
)
//Nyt - medio14 chicago suntimes
db.Medios_digitales.insertOne(
{
    	"Url": "https://chicago.suntimes.com/",
    	"Medio": ObjectId(Medio14)
  }
)
//Nyt - medio16
db.Medios_digitales.insertOne(
{
    	"Url": "https://www.filmaffinity.com/es/main.html",
    	"Medio": ObjectId(Medio16)
  }
)
//Añadimos las citas famosas de películas
//db.Películas.find()
db.Películas.updateOne({"Número_película": 12}, {$set: {Citas:[{"Cita_textual": "Le haré una oferta que no podrá rechazar","Personaje": "Michael Corleone"}, {"Cita_textual": "No me gusta la violencia, Tom. Soy un hombre de negocios; la sangre resulta muy costosa","Personaje": "Sollozzo"}]}} )
db.Películas.updateOne({"Número_película": 8}, {$set: {Citas:[{"Cita_textual": "El amor es lo único que somos capaces de percibir que trasciende las dimensiones del tiempo y del espacio","Personaje": "Amelia Brand"}, {"Cita_textual": "Antes mirábamos hacia arriba soñando con qué lugar ocuparíamos entre las estrellas. Ahora miramos hacia abajo, angustiándonos con qué lugar ocuparemos entre el polvo","Personaje": "Dr. Mann"}]}} )
db.Películas.updateOne({"Número_película": 10}, {$set: {Citas:[{"Cita_textual": "¿No los odias? Esos silencios incómodos. ¿Por qué necesitamos decir algo para rellenarlos? Es por eso que sabes que has encontrado a alguien especial. Puedes estar callado durante un puto minuto y disfrutar del silencio. - Seguir leyendo: https://www.libertaddigital.com/cultura/cine/2015-06-24/Pulp-fiction-mejores-frases-1942479/","Personaje": "Mia Wallace"}, {"Cita_textual": "Hamburguesas: la piedra angular de un desayuno nutritivo","Personaje": "Jules Winnfield"}]}} )
db.Películas.updateOne({"Número_película": 15}, {$set: {Citas:[{"Cita_textual": "La violencia no resuelve nada, lleva a más violencia","Personaje": "Alex"}, {"Cita_textual": "Yo, yo, yo. ¿Qué hay de mí? ¿Dónde entro en todo esto? ¿Soy un animal, o un perro? […] ¿No soy más que una naranja mecánica","Personaje": "Sollozzo"}]}} )



// Referenciamos dentyro de Cine aquellas películas que proyectan
db.Cines.updateOne( { "Número_cine":1}, {$set:{"Películas":[ObjectId(Película1),ObjectId(Película3),ObjectId(Película5),ObjectId(Película7),ObjectId(Película8),ObjectId(Película9)]}})
db.Cines.updateOne( { "Número_cine":2}, {$set:{"Películas":[ObjectId(Película13),ObjectId(Película14),ObjectId(Película15)]}})
db.Cines.updateOne( { "Número_cine":3}, {$set:{"Películas":[ObjectId(Película10),ObjectId(Película11),ObjectId(Película12)]}})
db.Cines.updateOne( { "Número_cine":4}, {$set:{"Películas":[ObjectId(Película2),ObjectId(Película3),ObjectId(Película4),ObjectId(Película10),ObjectId(Película14)]}})
db.Cines.updateOne( { "Número_cine":5}, {$set:{"Películas":[ObjectId(Película1),ObjectId(Película8),ObjectId(Película12),ObjectId(Película15)]}})

//Referenciamos en películas los cines en los que se proyectan
db.Películas.updateOne( { "Número_película":1}, {$set:{"Cines":[ObjectId(Cine1),ObjectId(Cine5)]}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Cines":ObjectId(Cine4)}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Cines":[ObjectId(Cine1),ObjectId(Cine4)]}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Cines":ObjectId(Cine4)}})
db.Películas.updateOne( { "Número_película":5}, {$set:{"Cines":ObjectId(Cine1)}})
db.Películas.updateOne( { "Número_película":7}, {$set:{"Cines":ObjectId(Cine1)}})
db.Películas.updateOne( { "Número_película":8}, {$set:{"Cines":[ObjectId(Cine1),ObjectId(Cine5)]}})
db.Películas.updateOne( { "Número_película":9}, {$set:{"Cines":ObjectId(Cine1)}})
db.Películas.updateOne( { "Número_película":10}, {$set:{"Cines":[ObjectId(Cine3),ObjectId(Cine4)]}})
db.Películas.updateOne( { "Número_película":11}, {$set:{"Cines":ObjectId(Cine3)}})
db.Películas.updateOne( { "Número_película":12}, {$set:{"Cines":[ObjectId(Cine3),ObjectId(Cine5)]}})
db.Películas.updateOne( { "Número_película":13}, {$set:{"Cines":ObjectId(Cine2)}})
db.Películas.updateOne( { "Número_película":14}, {$set:{"Cines":[ObjectId(Cine2),ObjectId(Cine4)]}})
db.Películas.updateOne( { "Número_película":15}, {$set:{"Cines":[ObjectId(Cine2),ObjectId(Cine5)]}})
//Referenciamos en medios los críticos relacionados
db.Medios.updateOne( { "Número_medio":16}, {$set:{"Críticos":ObjectId(Crítico1)}})
db.Medios.updateOne( { "Número_medio":15}, {$set:{"Críticos":ObjectId(Crítico2)}})
db.Medios.updateOne( { "Número_medio":14}, {$set:{"Críticos":ObjectId(Crítico3)}})
db.Medios.updateOne( { "Número_medio":13}, {$set:{"Críticos":ObjectId(Crítico4)}})
db.Medios.updateOne( { "Número_medio":12}, {$set:{"Críticos":ObjectId(Crítico5)}})
db.Medios.updateOne( { "Número_medio":11}, {$set:{"Críticos":ObjectId(Crítico6)}})
db.Medios.updateOne( { "Número_medio":10}, {$set:{"Críticos":ObjectId(Crítico7)}})
db.Medios.updateOne( { "Número_medio":9}, {$set:{"Críticos":ObjectId(Crítico8)}})
db.Medios.updateOne( { "Número_medio":8}, {$set:{"Críticos":ObjectId(Crítico9)}})
db.Medios.updateOne( { "Número_medio":7}, {$set:{"Críticos":ObjectId(Crítico10)}})
db.Medios.updateOne( { "Número_medio":6}, {$set:{"Críticos":ObjectId(Crítico11)}})
db.Medios.updateOne( { "Número_medio":3}, {$set:{"Críticos":ObjectId(Crítico15)}})
db.Medios.updateOne( { "Número_medio":5}, {$set:{"Críticos":ObjectId(Crítico12)}})
db.Medios.updateOne( { "Número_medio":1}, {$set:{"Críticos":ObjectId(Crítico17)}})
db.Medios.updateOne( { "Número_medio":4}, {$set:{"Críticos":ObjectId(Crítico13)}})

db.Críticos.updateOne( { "Número_crítico":7}, {$set:{"Medios":ObjectId(Medio10)}})
db.Críticos.updateOne( { "Número_crítico":8}, {$set:{"Medios":ObjectId(Medio9)}})
db.Críticos.updateOne( { "Número_crítico":10}, {$set:{"Medios":ObjectId(Medio7)}})
db.Críticos.updateOne( { "Número_crítico":9}, {$set:{"Medios":ObjectId(Medio8)}})
db.Críticos.updateOne( { "Número_crítico":11}, {$set:{"Medios":ObjectId(Medio6)}})
db.Críticos.updateOne( { "Número_crítico":2}, {$set:{"Medios":ObjectId(Medio3)}})
db.Críticos.updateOne( { "Número_crítico":15}, {$set:{"Medios":ObjectId(Medio3)}})
db.Críticos.updateOne( { "Número_crítico":3}, {$set:{"Medios":ObjectId(Medio14)}})
db.Críticos.updateOne( { "Número_crítico":12}, {$set:{"Medios":ObjectId(Medio5)}})
db.Críticos.updateOne( { "Número_crítico":17}, {$set:{"Medios":ObjectId(Medio1)}})
db.Críticos.updateOne( { "Número_crítico":1}, {$set:{"Medios":ObjectId(Medio16)}})
db.Críticos.updateOne( { "Número_crítico":5}, {$set:{"Medios":ObjectId(Medio12)}})
db.Críticos.updateOne( { "Número_crítico":4}, {$set:{"Medios":ObjectId(Medio13)}})
db.Críticos.updateOne( { "Número_crítico":6}, {$set:{"Medios":ObjectId(Medio11)}})
db.Críticos.updateOne( { "Número_crítico":13}, {$set:{"Medios":ObjectId(Medio4)}})




db.Críticos.updateOne( { "Número_crítico":1}, {$set:{"Críticas":ObjectId(Crítica1)}})
db.Críticos.updateOne( { "Número_crítico":2}, {$set:{"Críticas":[ObjectId(Crítica2),ObjectId(Crítica15),ObjectId(Crítica20)]}})
db.Críticos.updateOne( { "Número_crítico":3}, {$set:{"Críticas":[ObjectId(Crítica3),ObjectId(Crítica8),ObjectId(Crítica12),ObjectId(Crítica14),ObjectId(Crítica24)]}})
db.Críticos.updateOne( { "Número_crítico":4}, {$set:{"Críticas":[ObjectId(Crítica4),ObjectId(Crítica7),ObjectId(Crítica9),ObjectId(Crítica16)]}})
db.Críticos.updateOne( { "Número_crítico":5}, {$set:{"Críticas":ObjectId(Crítica5)}})
db.Críticos.updateOne( { "Número_crítico":6}, {$set:{"Críticas":ObjectId(Crítica6)}})
db.Críticos.updateOne( { "Número_crítico":8}, {$set:{"Críticas":ObjectId(Crítica10)}})
db.Críticos.updateOne( { "Número_crítico":9}, {$set:{"Críticas":ObjectId(Crítica11)}})
db.Críticos.updateOne( { "Número_crítico":10}, {$set:{"Críticas":[ObjectId(Crítica11),ObjectId(Crítica23)]}})
db.Críticos.updateOne( { "Número_crítico":11}, {$set:{"Críticas":ObjectId(Crítica17)}})
db.Críticos.updateOne( { "Número_crítico":12}, {$set:{"Críticas":ObjectId(Crítica18)}})
db.Críticos.updateOne( { "Número_crítico":13}, {$set:{"Críticas":ObjectId(Crítica21)}})
db.Críticos.updateOne( { "Número_crítico":15}, {$set:{"Críticas":ObjectId(Crítica22)}})
db.Críticos.updateOne( { "Número_crítico":17}, {$set:{"Críticas":ObjectId(Crítica25)}})


//Referenciamos ahora los ids de los críticos dentro de los documentos de las Críticas
db.Críticas.updateOne( { "Número_crítica":1}, {$set:{"Críticos":ObjectId(Crítica1)}})
db.Críticas.updateOne( { "Número_crítica":2}, {$set:{"Críticos":ObjectId(Crítica2)}})
db.Críticas.updateOne( { "Número_crítica":3}, {$set:{"Críticos":ObjectId(Crítica3)}})
db.Críticas.updateOne( { "Número_crítica":4}, {$set:{"Críticos":ObjectId(Crítica4)}})
db.Críticas.updateOne( { "Número_crítica":5}, {$set:{"Críticos":ObjectId(Crítica5)}})
db.Críticas.updateOne( { "Número_crítica":6}, {$set:{"Críticos":ObjectId(Crítica6)}})
db.Críticas.updateOne( { "Número_crítica":7}, {$set:{"Críticos":ObjectId(Crítica7)}})
db.Críticas.updateOne( { "Número_crítica":8}, {$set:{"Críticos":ObjectId(Crítica8)}})
db.Críticas.updateOne( { "Número_crítica":9}, {$set:{"Críticos":ObjectId(Crítica9)}})
db.Críticas.updateOne( { "Número_crítica":10}, {$set:{"Críticos":ObjectId(Crítica10)}})
db.Críticas.updateOne( { "Número_crítica":11}, {$set:{"Críticos":ObjectId(Crítica11)}})
db.Críticas.updateOne( { "Número_crítica":12}, {$set:{"Críticos":ObjectId(Crítica12)}})
db.Críticas.updateOne( { "Número_crítica":13}, {$set:{"Críticos":ObjectId(Crítica13)}})
db.Críticas.updateOne( { "Número_crítica":14}, {$set:{"Críticos":ObjectId(Crítica14)}})
db.Críticas.updateOne( { "Número_crítica":15}, {$set:{"Críticos":ObjectId(Crítica15)}})
db.Críticas.updateOne( { "Número_crítica":16}, {$set:{"Críticos":ObjectId(Crítica16)}})
db.Críticas.updateOne( { "Número_crítica":17}, {$set:{"Críticos":ObjectId(Crítica17)}})
db.Críticas.updateOne( { "Número_crítica":18}, {$set:{"Críticos":ObjectId(Crítica18)}})
db.Críticas.updateOne( { "Número_crítica":20}, {$set:{"Críticos":ObjectId(Crítica20)}})
db.Críticas.updateOne( { "Número_crítica":21}, {$set:{"Críticos":ObjectId(Crítica21)}})
db.Críticas.updateOne( { "Número_crítica":22}, {$set:{"Críticos":ObjectId(Crítica22)}})
db.Críticas.updateOne( { "Número_crítica":23}, {$set:{"Críticos":ObjectId(Crítica23)}})
db.Críticas.updateOne( { "Número_crítica":24}, {$set:{"Críticos":ObjectId(Crítica24)}})
db.Críticas.updateOne( { "Número_crítica":25}, {$set:{"Críticos":ObjectId(Crítica25)}})

//Referenciamos ahora los ids de las críticas dentro de los documentos de las Películas
db.Películas.updateOne( { "Número_película":1}, {$set:{"Críticas":[ObjectId(Crítica4),ObjectId(Crítica5),ObjectId(Crítica6)]}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Críticas":[ObjectId(Crítica7),ObjectId(Crítica8)]}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Críticas":[ObjectId(Crítica9),ObjectId(Crítica10),ObjectId(Crítica11)]}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Críticas":[ObjectId(Crítica12),ObjectId(Crítica13)]}})
db.Películas.updateOne( { "Número_película":5}, {$set:{"Críticas":[ObjectId(Crítica14),ObjectId(Crítica15)]}})
db.Películas.updateOne( { "Número_película":6}, {$set:{"Críticas":[ObjectId(Crítica16),ObjectId(Crítica17),ObjectId(Crítica18)]}})
db.Películas.updateOne( { "Número_película":7}, {$set:{"Críticas":[ObjectId(Crítica1),ObjectId(Crítica2),ObjectId(Crítica3)]}})
db.Películas.updateOne( { "Número_película":8}, {$set:{"Críticas":[ObjectId(Crítica20),ObjectId(Crítica21)]}})
db.Películas.updateOne( { "Número_película":9}, {$set:{"Críticas":[ObjectId(Crítica22),ObjectId(Crítica23)]}})
db.Películas.updateOne( { "Número_película":10}, {$set:{"Críticas":[ObjectId(Crítica25)]}})

//Referenciamos ahora los ids de las Directores dentro de los documentos de las Películas


db.Películas.updateOne( { "Número_película":1}, {$set:{"Directores":ObjectId(Director4)}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Directores":ObjectId(Director6)}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Directores":ObjectId(Director8)}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Directores":ObjectId(Director10)}})
db.Películas.updateOne( { "Número_película":5}, {$set:{"Directores":ObjectId(Director8)}})
db.Películas.updateOne( { "Número_película":6}, {$set:{"Directores":ObjectId(Director8)}})
db.Películas.updateOne( { "Número_película":7}, {$set:{"Directores":ObjectId(Director2)}})
db.Películas.updateOne( { "Número_película":8}, {$set:{"Directores":ObjectId(Director9)}})
db.Películas.updateOne( { "Número_película":9}, {$set:{"Directores":ObjectId(Director9)}})
db.Películas.updateOne( { "Número_película":10}, {$set:{"Directores":ObjectId(Director10)}})
db.Películas.updateOne( { "Número_película":11}, {$set:{"Directores":[ObjectId(Director7),ObjectId(Director11)]}})
db.Películas.updateOne( { "Número_película":12}, {$set:{"Directores":ObjectId(Director3)}})
db.Películas.updateOne( { "Número_película":13}, {$set:{"Directores":ObjectId(Director3)}})
db.Películas.updateOne( { "Número_película":14}, {$set:{"Directores":ObjectId(Director5)}})
db.Películas.updateOne( { "Número_película":15}, {$set:{"Directores":ObjectId(Director5)}})

// Igualmente los directores con sus películas


//Introducimos en críticas su referencia a la película criticada
db.Críticas.updateOne({"Número_crítica": 1}, {$set:{"Películas":ObjectId(Película7)}})
db.Críticas.updateOne({"Número_crítica": 2}, {$set:{"Películas":ObjectId(Película7)}})
db.Críticas.updateOne({"Número_crítica": 3}, {$set:{"Películas":ObjectId(Película7)}})
db.Críticas.updateOne({"Número_crítica": 4}, {$set:{"Películas":ObjectId(Película1)}})
db.Críticas.updateOne({"Número_crítica": 5}, {$set:{"Películas":ObjectId(Película1)}})
db.Críticas.updateOne({"Número_crítica": 6}, {$set:{"Películas":ObjectId(Película1)}})
db.Críticas.updateOne({"Número_crítica": 7}, {$set:{"Películas":ObjectId(Película2)}})
db.Críticas.updateOne({"Número_crítica": 8}, {$set:{"Películas":ObjectId(Película2)}})
db.Críticas.updateOne({"Número_crítica": 9}, {$set:{"Películas":ObjectId(Película3)}})
db.Críticas.updateOne({"Número_crítica": 10}, {$set:{"Películas":ObjectId(Película3)}})
db.Críticas.updateOne({"Número_crítica": 11}, {$set:{"Películas":ObjectId(Película3)}})
db.Críticas.updateOne({"Número_crítica": 12}, {$set:{"Películas":ObjectId(Película4)}})
db.Críticas.updateOne({"Número_crítica": 13}, {$set:{"Películas":ObjectId(Película4)}})
db.Críticas.updateOne({"Número_crítica": 14}, {$set:{"Películas":ObjectId(Película5)}})
db.Críticas.updateOne({"Número_crítica": 15}, {$set:{"Películas":ObjectId(Película5)}})
db.Críticas.updateOne({"Número_crítica": 16}, {$set:{"Películas":ObjectId(Película6)}})
db.Críticas.updateOne({"Número_crítica": 17}, {$set:{"Películas":ObjectId(Película6)}})
db.Críticas.updateOne({"Número_crítica": 18}, {$set:{"Películas":ObjectId(Película6)}})
db.Críticas.updateOne({"Número_crítica": 20}, {$set:{"Películas":ObjectId(Película8)}})
db.Críticas.updateOne({"Número_crítica": 21}, {$set:{"Películas":ObjectId(Película8)}})
db.Críticas.updateOne({"Número_crítica": 22}, {$set:{"Películas":ObjectId(Película9)}})
db.Críticas.updateOne({"Número_crítica": 23}, {$set:{"Películas":ObjectId(Película9)}})
db.Críticas.updateOne({"Número_crítica": 24}, {$set:{"Películas":ObjectId(Película10)}})
db.Críticas.updateOne({"Número_crítica": 25}, {$set:{"Películas":ObjectId(Película10)}})

db.Directores.updateOne( { "Número_director":1}, {$set:{"Películas":ObjectId(Película10)}})
db.Directores.updateOne( { "Número_director":2}, {$set:{"Películas":ObjectId(Película7)}})
db.Directores.updateOne( { "Número_director":3}, {$set:{"Películas":
[ObjectId(Película12),ObjectId(Película13)]}})
db.Directores.updateOne( { "Número_director":4}, {$set:{"Películas":ObjectId(Película1)}})
db.Directores.updateOne( { "Número_director":5}, {$set:{"Películas":[ObjectId(Película14),ObjectId(Película15)]}})
db.Directores.updateOne( { "Número_director":6}, {$set:{"Películas":ObjectId(Película2)}})
db.Directores.updateOne( { "Número_director":7}, {$set:{"Películas":[ObjectId(Película9),ObjectId(Película11)]}})
db.Directores.updateOne( { "Número_director":8}, {$set:{"Películas":[ObjectId(Película3),ObjectId(Película5),ObjectId(Película6)]}})
db.Directores.updateOne( { "Número_director":9}, {$set:{"Películas":ObjectId(Película8)}})
db.Directores.updateOne( { "Número_director":10}, {$set:{"Películas":ObjectId(Película4)}})
db.Directores.updateOne( { "Número_director":11}, {$set:{"Películas":ObjectId(Película11)}})

//Referenciamos las ids de películas dentro de géneros
db.Géneros.updateOne( { "Número_género":1}, {$set:{"Películas":[ObjectId(Película2),ObjectId(Película4),ObjectId(Película5),ObjectId(Película8),ObjectId(Película10)]}})
db.Géneros.updateOne( { "Número_género":2}, {$set:{"Películas":[ObjectId(Película2),ObjectId(Película3),ObjectId(Película8)]}})
db.Géneros.updateOne( { "Número_género":3}, {$set:{"Películas":[ObjectId(Película1),ObjectId(Película2),ObjectId(Película3),ObjectId(Película4),ObjectId(Película8),ObjectId(Película14)]}})
db.Géneros.updateOne( { "Número_género":4}, {$set:{"Películas":ObjectId(Película10)}})
db.Géneros.updateOne( { "Número_género":5}, {$set:{"Películas":ObjectId(Película11)}})
db.Géneros.updateOne( { "Número_género":6}, {$set:{"Películas":[ObjectId(Película5),ObjectId(Película6),ObjectId(Película7),ObjectId(Película8),ObjectId(Película9),ObjectId(Película12),ObjectId(Película13),ObjectId(Película15)]}})
db.Géneros.updateOne( { "Número_género":7}, {$set:{"Películas":ObjectId(Película8)}})
db.Géneros.updateOne( { "Número_género":8}, {$set:{"Películas":ObjectId(Película9)}})
db.Géneros.updateOne( { "Número_género":9}, {$set:{"Películas":[ObjectId(Película5),ObjectId(Película6),ObjectId(Película7),ObjectId(Película8),ObjectId(Película9),ObjectId(Película12),ObjectId(Película13),ObjectId(Película15)]}})
db.Géneros.updateOne( { "Número_género":10}, {$set:{"Películas":
[ObjectId(Película1),ObjectId(Película2),ObjectId(Película3),ObjectId(Película4),ObjectId(Película6),ObjectId(Película7)]}})


//Referenciamos las ids de géneros dentro de películas



db.Películas.updateOne( { "Número_película":1}, {$set:{"Géneros":[ObjectId(Género3),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Géneros":[ObjectId(Género1),ObjectId(Género2),ObjectId(Género3),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Géneros":[ObjectId(Género2),ObjectId(Género3),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Géneros":[ObjectId(Género1),ObjectId(Género3),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":5}, {$set:{"Géneros":[ObjectId(Género1),ObjectId(Género6),ObjectId(Género9)]}})
db.Películas.updateOne( { "Número_película":6}, {$set:{"Géneros":[ObjectId(Género6),ObjectId(Género9),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":7}, {$set:{"Géneros":[ObjectId(Género6),ObjectId(Género9),ObjectId(Género10)]}})
db.Películas.updateOne( { "Número_película":8}, {$set:{"Géneros":[ObjectId(Género1),ObjectId(Género2),ObjectId(Género3),ObjectId(Género6),ObjectId(Género7),ObjectId(Género9)]}})
db.Películas.updateOne( { "Número_película":9}, {$set:{"Géneros":[ObjectId(Género8),ObjectId(Género6)]}})
db.Películas.updateOne( { "Número_película":10}, {$set:{"Géneros":[ObjectId(Género1),ObjectId(Género4)]}})
db.Películas.updateOne( { "Número_película":11}, {$set:{"Géneros":ObjectId(Género5)}})
db.Películas.updateOne( { "Número_película":12}, {$set:{"Géneros":[ObjectId(Género6),ObjectId(Género9)]}})
db.Películas.updateOne( { "Número_película":13}, {$set:{"Géneros":[ObjectId(Género6),ObjectId(Género9)]}})
db.Películas.updateOne( { "Número_película":14}, {$set:{"Géneros":ObjectId(Género3)}})
db.Películas.updateOne( { "Número_película":15}, {$set:{"Géneros":[ObjectId(Género6),ObjectId(Género9)]}})

// Referenciamos en Actores las Películas en las que intervienen en las mismas
db.Actores.updateOne( { "Número_actor":1}, {$set:{"Películas":ObjectId(Película10)}})
db.Actores.updateOne( { "Número_actor":2}, {$set:{"Películas":ObjectId(Película10)}})
db.Actores.updateOne( { "Número_actor":3}, {$set:{"Películas":ObjectId(Película10)}})
db.Actores.updateOne( { "Número_actor":4}, {$set:{"Películas":ObjectId(Película10)}})
db.Actores.updateOne( { "Número_actor":5}, {$set:{"Películas":ObjectId(Película5)}})
db.Actores.updateOne( { "Número_actor":6}, {$set:{"Películas":ObjectId(Película5)}})
db.Actores.updateOne( { "Número_actor":7}, {$set:{"Películas":[ObjectId(Película5),ObjectId(Película6)]}})
db.Actores.updateOne( { "Número_actor":8}, {$set:{"Películas":ObjectId(Película9)}})
db.Actores.updateOne( { "Número_actor":9}, {$set:{"Películas":ObjectId(Película9)}})
db.Actores.updateOne( { "Número_actor":10}, {$set:{"Películas":ObjectId(Película1)}})
db.Actores.updateOne( { "Número_actor":11}, {$set:{"Películas":[ObjectId(Película1),ObjectId(Película2),ObjectId(Película3),ObjectId(Película4)]}})
db.Actores.updateOne( { "Número_actor":13}, {$set:{"Películas":ObjectId(Película2)}})
db.Actores.updateOne( { "Número_actor":14}, {$set:{"Películas":ObjectId(Película3)}})
db.Actores.updateOne( { "Número_actor":15}, {$set:{"Películas":ObjectId(Película4)}})
db.Actores.updateOne( { "Número_actor":16}, {$set:{"Películas":ObjectId(Película6)}})
db.Actores.updateOne( { "Número_actor":17}, {$set:{"Películas":ObjectId(Película7)}})
db.Actores.updateOne( { "Número_actor":18}, {$set:{"Películas":ObjectId(Película7)}})
db.Actores.updateOne( { "Número_actor":19}, {$set:{"Películas":ObjectId(Película8)}})
db.Actores.updateOne( { "Número_actor":20}, {$set:{"Películas":ObjectId(Película8)}})
db.Actores.updateOne( { "Número_actor":21}, {$set:{"Películas":[ObjectId(Película12),ObjectId(Película13)]}})
db.Actores.updateOne( { "Número_actor":22}, {$set:{"Películas":[ObjectId(Película12),ObjectId(Película13)]}})
db.Actores.updateOne( { "Número_actor":23}, {$set:{"Películas":ObjectId(Película14)}})
db.Actores.updateOne( { "Número_actor":24}, {$set:{"Películas":ObjectId(Película14)}})
db.Actores.updateOne( { "Número_actor":25}, {$set:{"Películas":ObjectId(Película15)}})
db.Actores.updateOne( { "Número_actor":26}, {$set:{"Películas":ObjectId(Película15)}})

// Referenciamos en Películas los actores que intervienen en las mismas
db.Películas.updateOne( { "Número_película":1}, {$set:{"Actores":[ObjectId(Actor11),ObjectId(Actor10)]}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Actores":[ObjectId(Actor11),ObjectId(Actor13)]}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Actores":[ObjectId(Actor11),ObjectId(Actor14)]}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Actores":[ObjectId(Actor11),ObjectId(Actor15)]}})
db.Películas.updateOne( { "Número_película":5}, {$set:{"Actores":[ObjectId(Actor5),ObjectId(Actor6),ObjectId(Actor7)]}})
db.Películas.updateOne( { "Número_película":6}, {$set:{"Actores":[ObjectId(Actor7),ObjectId(Actor16)]}})
db.Películas.updateOne( { "Número_película":7}, {$set:{"Actores":[ObjectId(Actor17),ObjectId(Actor18)]}})
db.Películas.updateOne( { "Número_película":8}, {$set:{"Actores":[ObjectId(Actor19),ObjectId(Actor20)]}})
db.Películas.updateOne( { "Número_película":9}, {$set:{"Actores":[ObjectId(Actor8),ObjectId(Actor9)]}})
db.Películas.updateOne( { "Número_película":10}, {$set:{"Actores":[ObjectId(Actor1),ObjectId(Actor2),ObjectId(Actor3)]}})
db.Películas.updateOne( { "Número_película":12}, {$set:{"Actores":[ObjectId(Actor21),ObjectId(Actor22)]}})
db.Películas.updateOne( { "Número_película":13}, {$set:{"Actores":[ObjectId(Actor21),ObjectId(Actor22)]}})
db.Películas.updateOne( { "Número_película":14}, {$set:{"Actores":[ObjectId(Actor23),ObjectId(Actor24)]}})
db.Películas.updateOne( { "Número_película":15}, {$set:{"Actores":[ObjectId(Actor25),ObjectId(Actor26)]}})

//Añadimos la relación recursiva precede. 
db.Películas.updateOne( { "Número_película":1}, {$set:{"Secuela":ObjectId(Película2)}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Secuela":ObjectId(Película3)}})
db.Películas.updateOne( { "Número_película":2}, {$set:{"Precuela":ObjectId(Película1)}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Precuela":ObjectId(Película2)}})
db.Películas.updateOne( { "Número_película":3}, {$set:{"Secuela":ObjectId(Película4)}})
db.Películas.updateOne( { "Número_película":4}, {$set:{"Precuela":ObjectId(Película3)}})
db.Películas.updateOne( { "Número_película":12}, {$set:{"Secuela":ObjectId(Película13)}})
db.Películas.updateOne( { "Número_película":13}, {$set:{"Precuela":ObjectId(Película12)}})
