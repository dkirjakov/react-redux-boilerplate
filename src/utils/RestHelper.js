import $ from 'jquery';

class RestHelper {

  static get(url) {
    return $.ajax({
      url,
      cache: false,
    });
  }
  static postFile(url, data) {
    return $.ajax({
      url,
      type: 'POST',
      processData: false,
      contentType: false,
      data,
    });
  }
  static post(url, data) {
    return $.ajax({
      url,
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(data),
    });
  }
  static put(url, data) {
    return $.ajax({
      url,
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(data),
    });
  }
  static patch(url, data) {
    return $.ajax({
      url,
      type: 'PATCH',
      data: JSON.stringify(data),
    });
  }
  static deleteFile(url) {
    return $.ajax({
      url,
      type: 'DELETE'
    });
  }
  static getJsonP(url) {
    return $.ajax({
      url,
      dataType: 'jsonp',
    });
  }
}

export default RestHelper;
