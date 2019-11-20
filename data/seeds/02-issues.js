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
        },
        {
          id: 2,
          description: "This pothole has not been fifxed!",
          latitude: 51.432545,
          longitude: -2.551225,
          imgURL: "https://i.imgur.com/jqXBn1J.png",
          user_id: 1
        },
        {
          id: 3,
          description: "This hole is big and has not been fifxed!",
          latitude: 51.472545,
          longitude: -4.551225,
          imgURL: "https://i.imgur.com/jqXBn1J.png",
          user_id: 1
        }
      ]);
    });
};
