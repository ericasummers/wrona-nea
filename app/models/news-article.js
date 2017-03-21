import DS from 'ember-data';

export default DS.Model.extend({
  // title: DS.attr(),
  // article: DS.attr(),
  // date: DS.attr()
  author: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  URL: DS.attr(),
  imageURL: DS.attr(),
  publishedAt: DS.attr()
});
