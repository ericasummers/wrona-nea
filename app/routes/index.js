import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  // actions: {
  //   zipLookup(params) {
  //     this.sendAction('results', params.zip);
  //   }
  // }
  // model() {
  //   return this.store.findAll('news-article');
  // }

  model: function() {
    var key = config.myApiKey;
    var url = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      //the API call returns data in an array called responseJSON
      console.log(responseJSON);
      //the articles need returned to be displayed on page, using .articles which is the array name in the response
      return responseJSON.articles;
    });
  }

});
