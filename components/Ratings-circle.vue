<template>
  <div class = "container-ratings">
    <button
      v-for = "(rating) in 5"
      :key = "rating"
      class = "dot dot--rating"
      :class = "{dotSelected : numberClicked === rating}"
      @click = "ratingSelected($event, rating)"
    >
      {{ rating }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numberClicked: 0
    }
  },
  methods: {
    ratingSelected (e, r) {
      this.numberClicked = r
      this.$emit('rating', this.numberClicked)
    }
  }
}

</script>

<style
  lang = "scss"
  scoped
>
.container-ratings {
  display: flex;
  justify-content: space-between;
}

.dot {
  border-color: transparent;
  cursor: pointer;

  &--rating {
    font-size: 1.3rem;
    color: #848b96;
    font-weight: 100;
  }

  &:hover {
    background-color: #f77817;
    color: white;
  }
}

.dotSelected {
  color: white;
  background-color: #7d8799;
}

</style>
