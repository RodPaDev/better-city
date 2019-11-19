exports.seed = function(knex) {
  return knex("issues")
    .del()
    .then(function() {
      return knex("issues").insert([
        {
          id: 1,
          description: "This pothole has been here for 5 years!",
          latitude: 51.453545,
          longitude: -2.587125,
          imgURL: "https://i.imgur.com/jqXBn1J.png",
          user_id: 1
        }
      ]);
    });
};
