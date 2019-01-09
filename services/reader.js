const csv = require('csvtojson');
const _ = require('lodash');
const Deconstruct = require('./deconstructor');
const Video = require('../models/video');

class Reader {
  constructor(filePath) {
    this.csvFilePath = filePath;
    this.catalogue = [];
  }

  async Read() {
    const history = await csv().fromFile(this.csvFilePath);

    history.forEach((column) => {
      const data = Deconstruct(column);
      const video = new Video(data);
      video.AddDate(data.date);

      const exists = _.find(this.catalogue, (item) => {
        return item.fullTitle === video.fullTitle;
      });
      if (!exists) {
        this.catalogue.push(video);
      }
    });
  }

  GetCatalogue() {
    return this.catalogue;
  }

  // Count() {
  //   const results = _.countBy(this.shows, (show) => {
  //     return show.episodeName;
  //   });
  //
  //   return results;
  // }
}

module.exports = Reader;