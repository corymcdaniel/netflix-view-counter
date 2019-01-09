const Reader = require('./services/reader');
const csvFilePath = './NetflixViewingHistory.csv';
const _ = require('lodash');

const reader = new Reader(csvFilePath);

(async () => {
  try {
    await reader.Read();

    const catalogue = reader.GetCatalogue();
    let sorted = _.sortBy(catalogue, (video) => {
      return video.WatchCount();
    });

    console.log(sorted[0], sorted[sorted.length - 1]);
  } catch(e) {
    console.error(e);
  }
})();