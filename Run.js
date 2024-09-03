//find data base
db.movies.find()

//find specify data
db.movies.find({"year" : 2018})

db.movies.find({"title" : "Dune"})
db.movies.find({"title" : "avengers"})

//specify condition using query operations
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )
db.movies.find( { year: { $in: [ 2018, 2020] } } )

//specify logical operators (AND)
db.movies.find( { countries: "Mexico", "imdb.rating": { $gte: 7 } } )

db.movies.find( { cast: "Leonardo DiCaprio", "runtime": { $gte: 121 } } )

// Specify Logical operator (OR)
db.movies.find( {
    cast :"Leonardo DiCaprio",
    $or: [ { "year" : { $gte: 2019 } }, { genres: "Drama" } ]
} )


// home work


//find data base
db.users.find()

//find specify data
db.users.find({"id" : "15"})

// find email
db.users.find({"Email" : "Cayla89@hotmail.com"})

db.users.find( { name: { $in: [ "Janice Bednar MD" ] } } )

db.users.find( { "PhoneNumber": "291-342-4783", "id": { $gte: "4" } } )



// count + find 
db.users.find().count()

// data limit with find
db.users.find().limit(5)

// show all data 
db.users.find().toArray()



 

db.teachers.find( {
    class_size : 22,
    $or: [ { "year_of_experience" : { $gte: 20 } }, { school_name: "123 Middle School" } ]
} )


