import Vue from 'vue'

export default ({ app }, inject) => {
  inject('headings', Vue.observable({ headingSubmitted: 'Thank You!', headingRating: 'How did we do?' }))
}
