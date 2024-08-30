// for  delete database
db.teachers.deleteOne({school_name : "Bubblebox"});

// for delete Many document
db.teachers.deleteMany({school_name : "Bubblebox"});

// for Delete database
db.teachers.deleteMany({});