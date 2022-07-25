<!--<template>-->
<!--  <main class="container">-->
<!--    <div class="wrapper">-->
<!--      <SubmitImage />-->
<!--      <p-->
<!--        v-if="givenRating"-->
<!--        class="wrapper__given-rating"-->
<!--      >-->
<!--        You selected {{ givenRating }} out of 5-->
<!--      </p>-->
<!--      <p-->
<!--        v-else-->
<!--        class="wrapper__given-rating"-->
<!--      >-->
<!--        You selected 0 out of 5-->
<!--      </p>-->
<!--      <h1 class="wrapper__headline">-->
<!--        Thank you!-->
<!--      </h1>-->
<!--      <p class="wrapper__description">-->
<!--        We appreciate you taking the time to give a rating.<br> If you ever need more support, don't hesitate to <br>-->
<!--        get in touch!-->
<!--      </p>-->
<!--    </div>-->
<!--  </main>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'submit-rating.vue',-->
<!--  data () {-->
<!--    return {-->
<!--      givenRating: 0-->
<!--    }-->
<!--  },-->
<!--  methods: {},-->
<!--  mounted () {-->
<!--    this.givenRating = JSON.parse(localStorage.getItem('selected-rating'))-->
<!--    this.givenRating = parseInt(this.givenRating) + 1-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style-->
<!--  lang="scss"-->
<!--  scoped-->
<!--&gt;-->
<!--.container {-->
<!--  .wrapper {-->
<!--    border-radius: 2.5rem;-->
<!--    border: 0.2rem solid rgba(31, 38, 48, 255);-->
<!--    padding: 2rem;-->
<!--    width: 35rem;-->
<!--    background-color: #1f2630;-->

<!--    &__headline {-->
<!--      margin-top: 2rem;-->
<!--      color: white;-->
<!--      display: flex;-->
<!--      place-content: center;-->
<!--    }-->

<!--    &__description {-->
<!--      margin-top: 1rem;-->
<!--      font-size: 1rem;-->
<!--      line-height: 1.5rem;-->
<!--      color: #9ea5af;-->
<!--      font-weight: 100;-->
<!--      text-align: center;-->
<!--    }-->

<!--    &__given-rating {-->
<!--      display: grid;-->
<!--      place-items: center;-->
<!--      font-size: 1rem;-->
<!--      padding: 0.5rem;-->
<!--      width: 40%;-->
<!--      border-radius: 2rem;-->
<!--      background-color: #272e38;-->
<!--      color: #a36136;-->
<!--      border-color: #fc7716;-->
<!--      margin: 2rem auto;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</style>-->
