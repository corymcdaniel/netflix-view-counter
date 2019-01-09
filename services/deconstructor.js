const _ = require('lodash');
const constants = require('../constants');

module.exports = function Deconstruct(column) {
  const keys = Object.keys(column);
  const data = column[keys[0]].split(':');

  let title = _.get(data, '[0]', '').trim();
  let type = constants.VIDEO_TYPE.MOVIE;

  if (!!data[1] && data[1].toLowerCase().indexOf('season')) {
    type = constants.VIDEO_TYPE.SHOW;
  } else {
    title = column;
  }

  const season = _.get(data, '[1]', '').trim();
  const episodeName = _.get(data, '[2]', '').trim();

  return {
    fullTitle: data[0],
    type,
    title,
    season,
    episodeName,
    date: column[keys[1]],
  };
};