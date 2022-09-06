const models = require("../../models/index")

module.exports = {
    campings: {
      get: (callback) => {
        const queryString =
            "SELECT camping.*, campingImageURL.imageUrl FROM camping INNER JOIN campingImageURL ON camping.contentId=campingImageURL.contentId"
        db.query(queryString, (error, result) => {
          callback(error, result);
        });
      },
    },
  
  };