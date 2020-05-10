1) Import command : mongoimport /db:learning_mongo /collection:profiles /jsonArray /file:profile.json
2) show collections

# Exercise part 1

- Write the Mongo DB query to find the total number of documents-> `db.profiles.count()`
- Pretty print the result -> `db.profiles.find({},{_id:0}).pretty()`
- Search for Name starting with I -> `db.profiles.find({'profile.name': {'$regex': /^I/i}}).pretty()`
- Search for Hobbies that starts with D and print the names and hobbies -> `db.profiles.find({hobbies:{$regex:/^d/i}} , {'profile.name': 1, hobbies: 1, _id:0})`
- Update your personal information with a new attribute "skill" : "mongo" -> `db.profiles.update({'profile.name':"Brian Blaze"}, {$set:{"skill":"mongo"}})`
- Print only the names of everyone -> `db.profiles.find({},{'profile.name':1, _id:0})`
- Print all the names whose experience in UST is more than 2 years -> `db.profiles.find({'work.experience': {$gte:2}},{'profile.name':1, _id:0})`
- Print all the names who knows more than 2 languages in alphabetical order -> `db.profiles.find({$expr:{$gte:[{$size:"$languages"}, 2]}},{'profile.name':1,_id:0}).sort({'profile.name':1})`