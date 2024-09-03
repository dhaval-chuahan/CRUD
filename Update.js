db.movies.updateOne({Filter},{$set:{updateData},$currentDate : {lastUpdated:true}})

db.movies.updateOne( { title: "Twilight" },
    {
      $set: {
        plot: "A group of friends play an intense, lifelong game of tag that escalates during one friend's wedding."
      },
      $currentDate: { lastUpdated: true }
    })

    db.movies.updateMany( { rated: "PG-13" },
      {
        $set: {
          meaning: "A group of friends play an intense, lifelong game of tag that escalates during one friend's wedding."
        },
        $currentDate: { lastUpdated: true }
      })

      db.students.updateMany( { favorite_color: "pink" },
        {
          $set: {
            major: "History"
          }
          
        })
        db.teachers.updateMany( { class_size: 21 },
          {
            $set: {
              salary: 50000
            }
            
          })

      


