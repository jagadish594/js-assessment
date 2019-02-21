asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return Promise.resolve(value).then(x => x);
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    let result = [];
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(jsonData){
      result = jsonData.people.map(x => x.name).sort().join(' ');
      //console.log(result.length);
      console.log(result);
      //return result;
    })
    .catch(error =>{
      console.log("Fetching and parsing error ", error)
    });

    return result;
  },
};
