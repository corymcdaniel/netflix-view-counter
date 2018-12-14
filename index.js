const csvFilePath = './NetflixViewingHistory.csv';
const csv = require('csvtojson');

class Reader {
  constructor() {
    this.shows = [];
  }

  async Read() {
    const history = await csv().fromFile(csvFilePath);

    history.map(data => {
      const keys = Object.keys(data);

      const splits = data[keys[0]].split(':');
      const title = splits[0];
      const season = splits[1];
      const episodeName = splits[2];

      this.shows.push({
        title,
        date: data[keys[1]],
        season,
        episodeName,
      });
    });

    console.log(this.shows);
  }

}

var reader = new Reader();
reader.Read();