class Video {
  constructor({fullTitle, title, season, episodeName, type}) {
    this.type = type;
    this.fullTitle = fullTitle;
    this.title = title;
    this.season = season;
    this.episode = episodeName;

    this.dates = [];
  }

  AddDate(date) {
    this.dates.push(date);
  }

  WatchCount() {
    return this.dates.length;
  }
}

module.exports =  Video;