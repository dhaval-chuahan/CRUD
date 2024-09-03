//Replace DataBase

db.students.replaceOne(
  { username: "rhanniganeg" }, //Find
  {

    "username": "DhavalChauhan",
    "email": "surat@gmail.com",
    "date_of_birth": "2/6/1966",
    "gender": "Male",
    "country": "India",
    "favorite_color": "Black",
    "job_title": "Coder",
  }, //New Data
  {

    "username": "rhanniganeg",
    "email": "cmaundrellg@newsvine.com",
    "date_of_birth": "12/16/1966",
    "gender": "Male",
    "country": "Japan",
    "favorite_color": "lavender",
    "job_title": "Operator",
  }  //Old Data
)

db.students.replaceOne(
  { username: "rhanniganeg" },
  {

    "username": "DhavalChauhan",
    "email": "surat@gmail.com",
    "date_of_birth": "2/6/1966",
    "gender": "Male",
    "country": "India",
    "favorite_color": "Black",
    "job_title": "Coder",
  },
  {

    "username": "rhanniganeg",
    "email": "cmaundrellg@newsvine.com",
    "date_of_birth": "12/16/1966",
    "gender": "Male",
    "country": "Japan",
    "favorite_color": "lavender",
    "job_title": "Operator",
  }
)