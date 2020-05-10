## Mongo DB Basics

- JSON Nested Json(Javascript Object Notation)
- BSON is the format in mongoDB
- Document structure is used
- JavaScript Shell Commands
- Excellent drivers


# Document Structure
- Documents = JSON Objects
- Store data as BSON (Binary JSON)
- Easy to access
- Flexible indexing capability
- Easy to adapt common coding practices

# Embedded Data
- Easier to work with
- Minimizes coding operations
- Easier to query and index

# Include by reference
- More operations for inserting and access
- Aggregating data can be complex
- Enables consitent data

# DB Reference 
https://github.com/synedra/learning_mongo.git


# Json Basics,
Types:
- String eg: "Brian"
- Numbers eg: 1,0,1.5,-30
- Boolean eg: true, false
- null eg: null
- Arrays eg: [1,2,3]
- Objects eg: {"id":"1","name":"Brian"}


# Big Data: 
- Three V's : Volume, Variety, Velocity(Veracity abnormailty in data )

#  Default Port : 27017

# Features of MONGO DB:
- No SQL 
- Horizontal Scalability
- Indexing
 1. It provides performance improvement
 2. ADHOC queries are expensive
 3. Large datasets can lose performance
 4. Indices are even useful for very simple data
 5. 64 indices per collection
 6. Single field
 7. Compound Indexing
 8. Unique- `UUID`-> Primary Key Equivalent and is unique for a document
- Sharding 
 1. Shard key for identification similar to the partitioning
 2. Partitions data onto different machines
 3. Provides scalability via software
 4. Autosharding
 5. Challening in set up
- Replication 
 1. Server in primary and secondary
 2. Reliability
 3. Maximizes uptime
 4. Replica sets
 5. Automatic failovers
- Projection
- Aggregation
- Sorting
- Limiting

Cloud account creation

Test Cluster use the read write options can be done

4.2.6 version download as a zip 

`Mongo db atlas` -> cloud version

`Mongo stitch` -> stitch.mongodb.com - apis is automatically created Backend as a service `BaaS`

`Mongo Compass` -> official client similar to the robo mongo and better than the robo mongo

`Mongo Charts` -> dynamic charts can be developed and is not a free version


# Reference URL:
Reference: https://www.youtube.com/watch?v=iiADhChRriM (Please refer further as much as possible to gain expertise)
Reference: https://www.youtube.com/watch?v=uD3p_rZPBUQ (Please refer and as much as possible to gain expertise)
LinkedIn Course:  Learning Mongo DB – Kirsten Hunter (Please skip the node js section and exercise)
This will also include downloading Mongo db from software centre and setting it up in your machine and going through the exercises in it.


# No SQL
- Stands NOT ONLY SQl
- A Non-Relational database(No tables)
- A flexible database used for big data & real - time web apps
- Multiple of No SQl databases
- Document model and is more closely matches code objects, Designed for developers.

# Big Data
- Data sets that are large consist for 3 V's
- Increase in the data volume
- Challenges in storage, capture, analysis, transfer, etc

# Advantages of NoSQL over RDBMS
- Handled Big Data
- Data Models - No predefined schema & Flexibility
- Data Structure - NoSQL handles unstructured data
- Cheaper to manage
- Scaling- Scale out / Horizontal Scaling
Scale-in & Scale-out
- Scale-in stands for the vertical scaling 
- Scale-out it is cheaper nodes with the clustering and it is horizontal scaling
- Table design is complex
- Requires trained database administrators
- Update requires wholesale operations
- Complex queries to join related data
- SQL writing
- Table organization for dicrete data


# Disadvantages 
- Better for relational data
- Normalization
- Well Known Language(SQL)
- Data Integrity
- ACID Compliance

# Types of NO SQL Database
- Document Databases[MongoDb,CouchDB]
- Column Databases [ApacheCassandra]
- Key-Value Store [Redis,CouchbaseServer]
- Cache Systems [Redis,Memcache]
- Graph Databases[Neo4j]


Download Help Center: https://www.mongodb.com/download-center/community

After the download copy the path 'C:\Program Files\MongoDB\Server\4.2\bin' to the environment variable,

Create a directory in the C: folder data\db

# Simple Commands,

- Start the server in cmd using `mongod` 
- Run the command `mongo` in another server

- `mongod`, `mongo`, `mongoimport` 
- `show dbs`
- `use <<dbms_name>>`
-  `show collections`
- `db.<<dbms_name>>.find();`
- `db.cars.insert({"make":"Suzuki"})`

# Simple Exercise done in the mongo
- `db.users.insert({"name":"Brian"})`
- `show dbs`
- `user test`
- `show collections`
- `db.users.find()`

TO FIND
- `db.users.find(name: "Brian")`
- `db.users.find(name: {$exists : true})`

TO REMOVE
- `db.users.remove({name:"Brian"})`

TO UPDATE
- `db.users.update({name:"Brian"}, {"first_name":"Brian", "last_name": "Blaze", "location":"Kollam"})`
- `db.users.update({first_name:"Brian"}, {$set:{"last_name":"Blaze"}})`
- `db.users.update({first_name:"Brian"}, {"first_name":"Brian", "last_name": "Blaze", "location":"Kollam", "phone_number":[9562315894,8917360248]})`
- `db.users.find({phone_number:9562315894})`
- `db.users.update({first_name:"Brian"}, {"first_name":"Brian", "last_name": "Blaze", "location":"Kollam", "phone_number": {"type":"fax","number":"9562315894"}})`
- `db.users.find({'phone_number.number': "9562315894"})`;


EXPLORE COMMANDs
- `db`
- `use learning_mongo` Output -> switched to db learning_mongo
- `show dbs` -> The new db wont be shown unless a document is inserted
- `show collections`
- `print("Hello")` -> function to simply print details

Create variables in MONGO
- `var arr = [1,2,3]`
- `arr`

- `for(i=0;i<10;i++){
... db.numbers.insert(
... {numbers:i}
... )
... }`  -> flexible java operations is posible in the mongo db

- `db.numbers.count()`-> Output 10
- `db.numbers.find({numbers:1})` -> Output { "_id" : ObjectId("5eb36cc7e08bb1a7f086e095"), "numbers" : 1 }

- `db.numbers.find({numbers:1}).explain()` -> Output
{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "learning_mongo.numbers",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "numbers" : {
                                "$eq" : 1
                        }
                },
                "queryHash" : "98425315",
                "planCacheKey" : "98425315",
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "numbers" : {
                                        "$eq" : 1
                                }
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "serverInfo" : {
                "host" : "LAPTOP-73B367G2",
                "port" : 27017,
                "version" : "4.2.6",
                "gitVersion" : "20364840b8f1af16917e4c23c1b5f5efd8b352f8"
        },
        "ok" : 1
}

- `db.numbers.find({numbers:1}).explain("executionStats")` Output
  {  "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 0,
                "totalDocsExamined" : 10,
                "executionStages" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "numbers" : {
                                        "$eq" : 1
                                }
                        },
                        "nReturned" : 1,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 12,
                        "advanced" : 1,
                        "needTime" : 10,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "direction" : "forward",
                        "docsExamined" : 10
                }
        },
        "serverInfo" : {
                "host" : "LAPTOP-73B367G2",
                "port" : 27017,
                "version" : "4.2.6",
                "gitVersion" : "20364840b8f1af16917e4c23c1b5f5efd8b352f8"
        },
        "ok" : 1
}

- `db.numbers.createIndex({number:1})` Output
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}

# Importing a file
- `mongoimport --help`
namespace options:
  /d, /db:<database-name>                         database to use
  /c, /collection:<collection-name>               collection to usesss

input options:
  /f, /fields:<field>[,<field>]*                  comma separated list of fields, e.g. -f name,age
      /fieldFile:<filename>                       file with field names - 1 per line
      /file:<filename>                            file to import from; if not specified, stdin is used
      /headerline                                 use first line in input source as the field list (CSV
                                                  and TSV only)
      /jsonArray                                  treat input source as a JSON array
      /parseGrace:<grace>                         controls behavior when type coercion fails - one of: autoCast, skipField, skipRow, stop (defaults to 'stop') (default: stop)
      /type:<type>                                input format to import: json, csv, or tsv (defaults to 'json') (default: json)
      /columnsHaveTypes                           indicated that the field list (from --fields, --fieldsFile, or --headerline) specifies types; They must be in the form of
                                                  '<colName>.<type>(<arg>)'. The type can be one of: auto, binary, bool, date, date_go, date_ms, date_oracle, double,
                                                  int32, int64, string. For each of the date types, the argument is a datetime layout string. For the binary type, the argument can be one of: base32, base64, hex. All other types take an empty argument. Only valid for CSV and TSV imports. e.g. zipcode.string(), thumbnail.binary(base64)
      /legacy                                     use the legacy extended JSON format (defaults to 'false') (default: false)

- change directory to the json file path
- `mongoimport /db:learning_mongo /collection:tours /jsonArray /file:tours.json` -> Output
2020-05-07T08:22:43.053+0530    connected to: mongodb://localhost/
2020-05-07T08:22:43.187+0530    29 document(s) imported successfully. 0 document(s) failed to import.

# Commands after importing
- `show dbs`
- `show collections`
- `db.tours.find()`
- `db.tours.find({toursTags:"hiking"})`
- `db.tours.find({toursTags:"wine"})`
- `db.tours.insert({
... "tourName": "The Wines of Santa Cruz",
... "tourLength": 3,
... "tourDescription": "Discover Santa Cruz's wineries",
... "tourPrice": 500,
... "tourTags":["wine","Santa Cruz"],
... }
... )`
- `db.tours.count()`

Add a new entry
- `db.tours.update({tourName: "The Wines of Santa Cruz"},{$set:{"tourRegion":"Central Coast"}})`

Add a new entry in an array
- `db.tours.update({tourName:"The Wines of Santa Cruz"}, {$addToSet: {"tourTags":"boardwalk"}})`

- `db.tours.remove({"tourName" : "The Wines of Santa Cruz"})`

- `db.tours.drop()` -> drops a collection

Indexing

- Run the mongo import command on the tours.json file
- `db.tours.find({tourPackage :"Taste of California"}).explain("executionStats")` Output {"totalDocsExamined" : 29,} -> All the documents where examined
- `db.tours.createIndex({tourPackage:1})` -> Index the search id
- `db.tours.find({tourPackage :"Taste of California"}).explain("executionStats")` Run again Output shows {"totalDocsExamined" : 4,} only 4 where scanned

Mutiple Indexing
Querying will make it efficient searching
Searching based on less than or equal to 
- `db.tours.find({tourPrice:{$lte:500}, tourLength:{$lte:3}})`
- `db.tours.createIndex({tourPrice:1,tourLength:1})`
- `db.tours.find({tourPrice:{$lte:500}, tourLength:{$lte:3}}).explain("executionStats")` Run again Output shows {"totalDocsExamined" : 10,} only 4 where scanned


Finding any string values equivalent to the like operation in SQL,
1) `db.profiles.find({'profile.name': {'$regex': /b/i}})` //like '%a%'
2) `db.profiles.find({'profile.name': {'$regex': /^b/i}})` //like 'pa%' 
3) `db.profiles.find({'profile.name': {'$regex': /b$/i}})` //like '%ro'

Query to display particular fields
4) `db.collection_name.find( { "Search_Field": "value" }, { "Field_to_display": 1,_id:0 })`
   eg:`db.profiles.find({hobbies:{$regex:/^d/i}},{'profile.name':1, hobbies: 1,_id:0})`
   OUTPUT->
   { "profile" : { "name" : "Manhu Varghese" }, "hobbies" : [ "Reading", "Drawing" ] }
   { "profile" : { "name" : "Jaisha Raveendran" }, "hobbies" : [ "Origami", "Drawing" ] }
   { "profile" : { "name" : "Manu M" }, "hobbies" : [ "Reading", "Drawing" ] }
   { "profile" : { "name" : "Dhanya S" }, "hobbies" : [ "Reading", "Drawing" ] }
   { "profile" : { "name" : "Brian Blaze" }, "hobbies" : [ "Reading", "Drawing" ] }
   { "profile" : { "name" : "Devika M" }, "hobbies" : [ "Reading", "Drawing" ] }

# Exercise 1

https://github.com/brianblaze14/mongo-db-project/blob/master/exercise/mongodb-exercis.md
