import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('news-article');
  // }

  model: function() {
    var key = config.myApiKey;
    var url = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.results;
    });
  }

});
