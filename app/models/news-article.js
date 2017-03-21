import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  article: DS.attr(),
  date: DS.attr()
});
