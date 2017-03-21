import Ember from 'ember';

export default Ember.Component.extend({
  isArticleShowing: false,
  actions: {
    articleShow: function() {
      this.set('isArticleShowing', true);
    },
    articleHide: function() {
      this.set('isArticleShowing', false);
    }
  }
});
