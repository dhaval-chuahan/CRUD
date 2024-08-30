db.movies.updateOne({Filter},{$set:{updateData},$currentDate : {lastUpdated:true}})

db.movies.updateOne( { title: "Twilight" },
    {
      $set: {
        plot: "A group of friends play an intense, lifelong game of tag that escalates during one friend's wedding."
      },
      $currentDate: { lastUpdated: true }
    })