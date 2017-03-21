import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  URL: DS.attr(),
  imageURL: DS.attr(),
  publishedAt: DS.attr()
});
