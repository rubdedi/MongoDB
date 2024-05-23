//Método de transformación de un esquema entidad-relación en una base de datos con MongoDB.
//@author - Rubén de Diego Varona
// Script capítulo 4
// Creamos la base de datos
use TfgCapítulo4
db.createCollection("Clientes")
// Ejemplo creación colección Préstamos
db.createCollection("Préstamos")
// Ejemplo relación entidad débil
//Id préstamos ObjectId('65f54e28f42d2bce6ca68424')
db.Préstamos.insertOne(
{
    	"Número_préstamo": 123456,
	"Cantidad": 10,
    	"Pago":[{
    		"Número_pago": 654321,
    		"Importe": 100
    		}]
  }
)
// Creamos entidad cliente
db.Clientes.insertOne(
{
    	"Número": 14523,
	"Nombre": "Rubén de Diego",
    	"Calle": "Inventada"
  }
)
//Ejemplo atributo compuesto
// ObjectId('65f54f6bf42d2bce6ca68426')
db.Clientes.insertOne(
{
    	"Número": 14523,
	"Nombre": "Rubén de Diego",
    	"Dirección":{
    		"Calle": "Inventada",
    		"Número": 1,
    		"Piso": 4,
    		"Letra": "F",
    		"Ciudad": "Valladolid",
    		"Código_postal": 47009
  		}
 }
)
// Ejemplo atrobuto multivaluado
db.Clientes.insertOne(
{
    	"Número": 143214,
	"Nombre": "Henar",
    	"Teléfono":{[
    		983123456,
    		983987654,
    		689123456}
  		}
 }
)

// Ejemplo Json squema
db.createCollection("Cliente", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Cliente",
         required: [ "numero", "nombre", "calle"],
         properties: {
            numero: {
               bsonType: "int",
               minimum: 1,
               maximum: 100000000000,
               description: "'numero' ha de ser un integer en el rango [1,100000000000] y es necesario"
            },
            nombre: {
               bsonType: "string",
               description: "'nombre' ha de ser un string y es necesario"
            },
            calle: {
               bsonType: "string",
               description: "'calle ha de ser un string y es necesario"
            }
         }
      }
   }
} )

// RELACIONES UNO A UNO
// Creamos las colecciones
db.createCollection("Estudiantes")
db.createCollection("Tarjeta_Uva")
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 542531987,
	"Nombre": "Miguel Ángel",
    	"Curso":"Cuarto",
    	"Centro": "ETSII"
 }
)

db.Tarjeta_Uva.insertOne(
{
    	"Número_tarjeta": "VA1133545",
	"Tipo_tarjeta": "Identificativa"  	
 }
)
//Tarejeta incrustada en estudiante
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 542531987,
	"Nombre": "Miguel Ángel",
    	"Curso":"Cuarto",
    	"Centro": "ETSII",
    	"Tarjeta_Uva":
    	{
    		"_id": ObjectId('65f55171f42d2bce6ca68428'),
    		"Número_tarjeta": "VA1133545",
		"Tipo_tarjeta": "Identificativa"
    	}
 }
)
// Estudiante incrustado en tarjeta
db.Tarejeta_Uva.insertOne(
{
	"_id": ObjectId('65f55171f42d2bce6ca68428'),
    	"Número_tarjeta": "VA1133545",
    	"Tipo_tarjeta": "Identificativa",
    	"Estudiante":
    	{
    		"Número_estudiante": 542531987,
		"Nombre": "Miguel Ángel",
    		"Curso":"Cuarto",
    		"Centro": "ETSII"
    	} 			
}
)

db.Estudiantes.insertOne(
{
    	"Número_estudiante": 542531987,
	"Nombre": "Miguel Ángel",
    	"Curso":"Cuarto",
    	"Centro": "ETSII",
    	"Tarjeta_Uva":
    	{
    		"_id": ObjectId('65f55171f42d2bce6ca68428'),
    		"Número_tarjeta": "VA1133545",
		"Tipo_tarjeta": "Identificativa"
    	}
 }
)
//Borramos la instancia de estudiante y de Tarjeta_uva para volver a introducirlas
db.Estudiantes.deleteOne({ "Número_estudiante": 542531987} )
db.Tarjeta_Uva.deleteOne( { "Número_tarjeta": "VA1133545"} )
db.Estudiantes.insertOne( { "Número_estudiante": 542531987, "Nombre": "Miguel Ángel", "Curso": "Cuarto", "Centro": "ETSII" } )
db.Tarjeta_Uva.insertOne( { "Número_tarjeta": "VA1133545", "Tipo_tarjeta": "Identificativa" } )
//Calculamos el valor del ObjectId de la tarjeta
Tarjeta_Uva1 = db.Tarjeta_Uva.findOne({ "Número_tarjeta": "VA1133545" }, { '_id': 1 } )
Tarjeta_Uva1['_id']
Tarjeta_Uva1['_id'].toString
Tarjeta_Uva1 = ""+Tarjeta_Uva1['_id']
//Referenciamos la tarjeta dentro de estudiantes
db.Estudiantes.updateOne({"Número_estudiante": 542531987},{$set:{"Tarjeta_Uva":ObjectId(Tarjeta_Uva1)}})
// Calculamos el valor del ObjectId de estudiante
Estudiante1 = db.Estudiantes.findOne({ "Número_estudiante": 542531987 }, { '_id': 1 } )
Estudiante1['_id']
Estudiante1['_id'].toString
Estudiante1 = ""+Estudiante1['_id']
db.Tarjeta_Uva.updateOne({"Número_tarjeta": "VA1133545"},{$set:{"Estudiante":ObjectId(Estudiante1)}})

//RELACIONES UNO A MUCHOS
// Creamos las colecciones
db.createCollection("Grados")
db.createCollection("Asignaturas")
//Añadimos instancias grado
db.Grados.insertOne(
{
    	"Código_grado": 123456,
	"Nombre_grado": "Grado en ingeniería informática"
 }
)
//Añadimos instancias Asignaturas
db.Asignaturas.insertOne(
{
    	"Código_asignatura": 46962,
	"Nombre_asignatura": "Administración de bases de datos",
    	"Número_créditos":6,
    	"Tipo": "Optativa",
    	"Periodo":"1C" 
 }
)
db.Asignaturas.insertOne(
{
    	"Código_asignatura": 46901,
	"Nombre_asignatura": "Fundamentos de matemáticas",
    	"Número_créditos":6,
    	"Tipo": "Obligatoria",
    	"Periodo":"1C" 
 }
)
db.Asignaturas.insertOne(
{
    	"Código_asignatura": 46977,
	"Nombre_asignatura": "Trabajo Fin de gradp",
    	"Número_créditos":12,
    	"Tipo": "Obligatoria",
    	"Periodo":"2C" 
 }
)
//Incrustamos
db.Grados.updateOne({"Código_grado": 123456},{$set:{"Asignaturas":[
	{
	"_id":ObjectId('65f5721a2135e847ffd767df'),
	"Código_asignatura": 46962,
	"Nombre_asignatura": "Administración de bases de datos",
    	"Número_créditos":6,
    	"Tipo": "Optativa",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e0'),
	"Código_asignatura": 46901,
	"Nombre_asignatura": "Fundamentos de matemáticas",
    	"Número_créditos":6,
    	"Tipo": "Obligatoria",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e1'),
	"Código_asignatura": 46977,
	"Nombre_asignatura": "Trabajo Fin de gradp",
    	"Número_créditos":12,
    	"Tipo": "Obligatoria",
    	"Periodo":"2C" 
	}]}})
// Borramos la instancia para posteriormente referenciar
db.Grados.deleteOne({ "Código_grado": 123456} )
// Volvemos a añadirle
db.Grados.insertOne(
{
    	"Código_grado": 123456,
	"Nombre_grado": "Grado en ingeniería informática"
 }
)
//Referenciamos
//Obtenemos los ObjectID de las asignaturas
Asignatura1 = db.Asignaturas.findOne({ "Código_asignatura": 46962 }, { '_id': 1 } )
Asignatura1['_id']
Asignatura1['_id'].toString
Asignatura1 = ""+Asignatura1['_id']

Asignatura2 = db.Asignaturas.findOne({ "Código_asignatura": 46901 }, { '_id': 1 } )
Asignatura2['_id']
Asignatura2['_id'].toString
Asignatura2 = ""+Asignatura2['_id']

Asignatura3 = db.Asignaturas.findOne({ "Código_asignatura": 46962 }, { '_id': 1 } )
Asignatura3['_id']
Asignatura3['_id'].toString
Asignatura3 = ""+Asignatura3['_id']

//Añadimos las referencias a Grado
db.Grados.updateOne({"Código_grado": 123456},{$set:{"Asignaturas":[ObjectId(Asignatura1),ObjectId(Asignatura2),ObjectId(Asignatura3)]}})

// Obtenemos los ObjectID del grado
Grado1 = db.Grados.findOne({ "Código_grado": 123456 }, { '_id': 1 } )
Grado1['_id']
Grado1['_id'].toString
Grado1 = ""+Grado1['_id']

//Referenciamos en asifnaturas
db.Asignaturas.updateOne({"Código_asignatura": 46962},{$set:{"Grados":ObjectId(Grado1)}})
db.Asignaturas.updateOne({"Código_asignatura": 46901},{$set:{"Grados":ObjectId(Grado1)}})
db.Asignaturas.updateOne({"Código_asignatura": 46977},{$set:{"Grados":ObjectId(Grado1)}})


// RELACIONES MUCHOS A MUCHOS
db.createCollection("Profesores")
// Asignatura ya creada
// Añadimos instancias de profesores
db.Profesores.insertOne(
{
    	"Número_profesor": 159261,
	"Nombre": "Fernando",
    	"Email":"fernandouva@inf.uva.es",
    	"Teléfono":983222222 
 }
)
db.Profesores.insertOne(
{
    	"Número_profesor": 159262,
	"Nombre": "Ángela",
    	"Email":"angelauva@inf.uva.es",
    	"Teléfono":983111111 
 }
)
db.Profesores.insertOne(
{
    	"Número_profesor": 159263,
	"Nombre": "María Luz",
    	"Email":"marialuzuva@inf.uva.es",
    	"Teléfono":983333333
 }
)
// Incrustamos las asignaturas en profesores
db.Profesores.updateOne({"Número_profesor": 159261},{$set:{"Asignaturas":[
	{
	"_id":ObjectId('65f5721a2135e847ffd767df'),
	"Código_asignatura": 46962,
	"Nombre_asignatura": "Administración de bases de datos",
    	"Número_créditos":6,
    	"Tipo": "Optativa",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e0'),
	"Código_asignatura": 46901,
	"Nombre_asignatura": "Fundamentos de matemáticas",
    	"Número_créditos":6,
    	"Tipo": "Obligatoria",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e1'),
	"Código_asignatura": 46977,
	"Nombre_asignatura": "Trabajo Fin de gradp",
    	"Número_créditos":12,
    	"Tipo": "Obligatoria",
    	"Periodo":"2C" 
	}]}})
	
db.Profesores.updateOne({"Número_profesor": 159262},{$set:{"Asignaturas":[
	{
	"_id":ObjectId('65f5725c2135e847ffd767e0'),
	"Código_asignatura": 46901,
	"Nombre_asignatura": "Fundamentos de matemáticas",
    	"Número_créditos":6,
    	"Tipo": "Obligatoria",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e1'),
	"Código_asignatura": 46977,
	"Nombre_asignatura": "Trabajo Fin de gradp",
    	"Número_créditos":12,
    	"Tipo": "Obligatoria",
    	"Periodo":"2C" 
	}]}})


db.Profesores.updateOne({"Número_profesor": 159263},{$set:{"Asignaturas":[
	{
	"_id":ObjectId('65f5721a2135e847ffd767df'),
	"Código_asignatura": 46962,
	"Nombre_asignatura": "Administración de bases de datos",
    	"Número_créditos":6,
    	"Tipo": "Optativa",
    	"Periodo":"1C" 
	},{
	"_id":ObjectId('65f5725c2135e847ffd767e1'),
	"Código_asignatura": 46977,
	"Nombre_asignatura": "Trabajo Fin de gradp",
    	"Número_créditos":12,
    	"Tipo": "Obligatoria",
    	"Periodo":"2C" 
	}]}})

// Obtenemos los ObjectId de profesores
Profesor1 = db.Profesores.findOne({ "Número_profesor": 159261 }, { '_id': 1 } )
Profesor1['_id']
Profesor1['_id'].toString
Profesor1 = ""+Profesor1['_id']

Profesor2 = db.Profesores.findOne({ "Número_profesor": 159262 }, { '_id': 1 } )
Profesor2['_id']
Profesor2['_id'].toString
Profesor2 = ""+Profesor2['_id']

Profesor3 = db.Profesores.findOne({ "Número_profesor": 159263 }, { '_id': 1 } )
Profesor3['_id']
Profesor3['_id'].toString
Profesor3 = ""+Profesor3['_id']
//Referenciamos los profesores 
db.Profesores.updateOne({"Número_profesor": 159261},{$set:{"Asignaturas":[ObjectId(Asignatura1),ObjectId(Asignatura2),ObjectId(Asignatura3)]}})
db.Profesores.updateOne({"Número_profesor": 159262},{$set:{"Asignaturas":[ObjectId(Asignatura1),ObjectId(Asignatura3)]}})
db.Profesores.updateOne({"Número_profesor": 159263},{$set:{"Asignaturas":[ObjectId(Asignatura1),ObjectId(Asignatura2)]}})
// Referenciamos las asignaturas
db.Asignaturas.updateOne({"Código_asignatura": 46962},{$set:{"Profesores":[ObjectId(Profesor1),ObjectId(Profesor3)]}})
db.Asignaturas.updateOne({"Código_asignatura": 46901},{$set:{"Profesores":[ObjectId(Profesor1),ObjectId(Profesor2)]}})
db.Asignaturas.updateOne({"Código_asignatura": 46977},{$set:{"Profesores":[ObjectId(Profesor1),ObjectId(Profesor2),,ObjectId(Profesor3)]}})

// JERARQUÍA ISA
// Borramos las instancias anteriormente creadas
db.Estudiantes.drop()
// Solución 1
// Añadimos instancias de Estudiantes
db.createCollection("Estudiantes")
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 123456,
	"Nombre": "Rubén",
    	"Carrera":"Grado en ingeniería informática",
    	"Curso_grado":"Cuarto",
    	"Título_TFG":"Método de transformación de un diagrama ER",
    	"Curso_máster":null,
    	"Título_TFM":null,
 }
)
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 123457,
	"Nombre": "Henar",
    	"Máster":"Máster en ingeniería informática",
    	"Curso_grado":null,
    	"Título_TFG":null,
    	"Curso_máster":"Segundo",
    	"Título_TFM":"Método de transformación de una base de datos con MongoDB",
 }
)
// Sulución 2
db.createCollection("Estudiantes_grado")
db.createCollection("Estudiantes_máster")
db.Estudiantes_grado.insertOne(
{
    	"Número_estudiante": 123456,
	"Nombre": "Rubén",
    	"Carrera":"Grado en ingeniería informática",
    	"Curso_grado":"Cuarto",
    	"Título_TFG":"Método de transformación de un diagrama ER"
 }
)
db.Estudiantes_máster.insertOne(
{
    	"Número_estudiante": 123457,
	"Nombre": "Henar",
    	"Máster":"Máster en ingeniería informática",
    	"Curso_máster":"Segundo",
    	"Título_TFM":"Método de transformación de una base de datos con MongoDB"
 }
)
// Solución 3
// Borramos la colección Estudiantes
db.Estudiantes.drop()
db.Estudiantes_grado.drop()
db.Estudiantes_máster.drop()
// Creamos las tres colecciones
db.createCollection("Estudiantes")
db.createCollection("Estudiantes_grado")
db.createCollection("Estudiantes_máster")
// Añadimos las instancias
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 123456,
	"Nombre": "Rubén"
 }
)
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 123457,
	"Nombre": "Henar"
 }
)
//Obtenemos los Ids
Estudiante1 = db.Estudiantes.findOne({ "Número_estudiante": 123456 }, { '_id': 1 } )
Estudiante1['_id']
Estudiante1['_id'].toString
Estudiante1 = ""+Estudiante1['_id']

Estudiante2 = db.Estudiantes.findOne({ "Número_estudiante": 123457 }, { '_id': 1 } )
Estudiante2['_id']
Estudiante2['_id'].toString
Estudiante2 = ""+Estudiante2['_id']

//Referenciamos
db.Estudiantes_grado.insertOne(
{
    	"Curso_grado": "Cuarto",
	"Título_TFG":"Método de transformación de un diagrama ER",
	"Estudiante": ObjectId(Estudiante1)
 }
)
db.Estudiantes_máster.insertOne(
{
    	"Curso_máster": "Segundo",
	"Título_TFM":"Método de transformación de una base de datos con MongoDB",
	"Estudiante": ObjectId(Estudiante2)
 }
)

// ENTIDADES ASOCIATIVAS
// Borramos las colecciones
db.Estudiantes.drop()
db.Estudiantes_grado.drop()
db.Estudiantes_máster.drop()
// Las creamos
db.createCollection("Estudiantes")
db.createCollection("Carreras")
db.createCollection("Títulos")
//Añadimos las instancias de estudiantes
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 321261,
	"Nombre": "Rubén",
	"Centro": "ETSII"
 }
)
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 321262,
	"Nombre": "Henar",
	"Centro": "ESS"
 }
)
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 321263,
	"Nombre": "Miguel",
	"Centro": "ESA"
 }
)
//Añadimos las de carreras
db.Carreras.insertOne(
{
    	"Número_carrera": 159687,
	"Nombre_carrera": "Ingeniería informática",
	"Campus": "Valladolid"
 }
)
db.Carreras.insertOne(
{
    	"Número_carrera": 159345,
	"Nombre_carrera": "Psicología",
	"Campus": "Palencia"
 }
)
db.Carreras.insertOne(
{
    	"Número_carrera": 159276,
	"Nombre_carrera": "Periodismo",
	"Campus": "Soria"
 }
)
// Obtenemos los IDs de estudiantes
Estudiante1 = db.Estudiantes.findOne({ "Número_estudiante": 321261 }, { '_id': 1 } )
Estudiante1['_id']
Estudiante1['_id'].toString
Estudiante1 = ""+Estudiante1['_id']

Estudiante2 = db.Estudiantes.findOne({ "Número_estudiante": 321262 }, { '_id': 1 } )
Estudiante2['_id']
Estudiante2['_id'].toString
Estudiante2 = ""+Estudiante2['_id']

Estudiante3 = db.Estudiantes.findOne({ "Número_estudiante": 321263 }, { '_id': 1 } )
Estudiante3['_id']
Estudiante2['_id'].toString
Estudiante3 = ""+Estudiante3['_id']

// Obtenemos los IDs de carreras
Carrera1 = db.Carreras.findOne({ "Número_carrera": 159687 }, { '_id': 1 } )
Carrera1['_id']
Carrera1['_id'].toString
Carrera1 = ""+Carrera1['_id']

Carrera2 = db.Carreras.findOne({ "Número_carrera": 159345 }, { '_id': 1 } )
Carrera2['_id']
Carrera2['_id'].toString
Carrera2 = ""+Carrera2['_id']

Carrera3 = db.Carreras.findOne({ "Número_carrera": 159276 }, { '_id': 1 } )
Carrera3['_id']
Carrera3['_id'].toString
Carrera3 = ""+Carrera3['_id']

// Añadimos las instancias de títulos
db.Títulos.insertOne(
{//Psicología
    	"Número_título": 21,
	"Fecha_obtención": 2024,
 }
)
db.Títulos.insertOne(
{//Ingeniería informática
    	"Número_título": 22,
	"Fecha_obtención": 2023,
 }
)
db.Títulos.insertOne(
{//Periodismo
    	"Número_título": 23,
	"Fecha_obtención": 2023,
 }
)
db.Títulos.insertOne(
{//Ingeniería informática
    	"Número_título": 24,
	"Fecha_obtención": 2000,
 }
)
// Obtenemos los IDs de títulos
Título21 = db.Títulos.findOne({ "Número_título": 21 }, { '_id': 1 } )
Título21['_id']
Título21['_id'].toString
Título21 = ""+Título21['_id']

Título22 = db.Títulos.findOne({ "Número_título": 22 }, { '_id': 1 } )
Título22['_id']
Título22['_id'].toString
Título22 = ""+Título22['_id']

Título23 = db.Títulos.findOne({ "Número_título": 23 }, { '_id': 1 } )
Título23['_id']
Título23['_id'].toString
Título23 = ""+Título23['_id']

Título24 = db.Títulos.findOne({ "Número_título": 24 }, { '_id': 1 } )
Título24['_id']
Título24['_id'].toString
Título24 = ""+Título24['_id']

//Referenciamos los títulos con los estudiantes y las carreras
db.Títulos.updateOne({"Número_título": 21},{$set:{"Estudiante":ObjectId(Estudiante2)}})
db.Títulos.updateOne({"Número_título": 21},{$set:{"Carrera":ObjectId(Carrera2)}})

db.Títulos.updateOne({"Número_título": 22},{$set:{"Estudiante":ObjectId(Estudiante1)}})
db.Títulos.updateOne({"Número_título": 22},{$set:{"Carrera":ObjectId(Carrera1)}})

db.Títulos.updateOne({"Número_título": 24},{$set:{"Estudiante":ObjectId(Estudiante1)}})
db.Títulos.updateOne({"Número_título": 24},{$set:{"Carrera":ObjectId(Carrera3)}})

db.Títulos.updateOne({"Número_título": 23},{$set:{"Estudiante":ObjectId(Estudiante3)}})
db.Títulos.updateOne({"Número_título": 23},{$set:{"Carrera":ObjectId(Carrera3)}})

// Referenciamos tambíen en los alumnos
db.Estudiantes.updateOne({"Número_estudiante": 321261},{$set:{"Título":[ObjectId(Título24),ObjectId(Título23)]}})
db.Estudiantes.updateOne({"Número_estudiante": 321262},{$set:{"Título":ObjectId(Título21)}})
db.Estudiantes.updateOne({"Número_estudiante": 321263},{$set:{"Título":ObjectId(Título23)}})

// RELACIONES RECURSIVAS
db.Estudiantes.drop()
db.createCollection("Estudiantes")
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 321261,
	"Nombre": "Rubén",
    	"Centro":"ETSII"
    	
 }
)
db.Estudiantes.insertOne(
{
    	"Número_estudiante": 321262,
	"Nombre": "Henar",
    	"Centro": "ESS"
 }
)
//Obtenemos los Object IDS de estudiantes
Estudiante1 = db.Estudiantes.findOne({ "Número_estudiante": 321261 }, { '_id': 1 } )
Estudiante1['_id']
Estudiante1['_id'].toString
Estudiante1 = ""+Estudiante1['_id']

Estudiante2 = db.Estudiantes.findOne({ "Número_estudiante": 321262 }, { '_id': 1 } )
Estudiante2['_id']
Estudiante2['_id'].toString
Estudiante2 = ""+Estudiante2['_id']

//Referenciamos mentor/aprendiz
db.Estudiantes.updateOne({"Número_estudiante": 321261},{$set:{"Aprendiz":ObjectId(Estudiante2)}})
db.Estudiantes.updateOne({"Número_estudiante": 321262},{$set:{"Mentor":ObjectId(Estudiante1)}})

// Ejemplo agregación
// Creamos la colección Alumno, profesor y TFG
db.createCollection("Alumno")
db.createCollection("Profesor")
db.createCollection("TFG")

// Añadimos instancia alumno
db.Alumno.insertOne(
{
    	"Número_alumno": 321261,
	"Nombre": "Miguel Ángel"
 }
)
// Añadimos instancia profesor
db.Profesor.insertOne(
{
    	"Número_profesor": 987321,
	"Nombre": "Henar"
 }
)

// Añadimos instancia TFG
db.TFG.insertOne(
{
    	"Número_TFG": 159267,
	"Nombre": "Método de transformación"
 }
)

// Obtenemos el id de alumno
Alumno = db.Alumno.findOne({ "Número_alumno": 321261 }, { '_id': 1 } )
Alumno['_id'].toString
Alumno = ""+Alumno['_id']

// Obtenemos el id de profesor
Profesor = db.Profesor.findOne({ "Número_profesor": 987321 }, { '_id': 1 } )
Profesor['_id'].toString
Profesor = ""+Profesor['_id']

// Obtenemos el id de Tfg
Tfg = db.TFG.findOne({ "Número_TFG": 159267 }, { '_id': 1 } )
Tfg['_id'].toString
Tfg = ""+Tfg['_id']

//Referenciamos el tfg con el alumno y el profesor
db.TFG.updateOne({"Número_TFG": 159267},{$set:{"Alumno":ObjectId(Alumno)}})
db.TFG.updateOne({"Número_TFG": 159267},{$set:{"Profesor":ObjectId(Profesor)}})
