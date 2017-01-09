import RestHelper from '../utils/RestHelper';
import Config from '../config/config';

export function getCurrentComic() {
  const apiEndpoint = Config.XKCD_API_URI;

  return RestHelper
    .getJsonP(apiEndpoint)
    .then(data => ({
      num: data.num,
      title: data.safe_title,
      description: data.alt,
      img: data.img, // eslint-disable-line max-len
    }));
}
