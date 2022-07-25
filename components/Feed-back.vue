<template>
  <div class="container">
    <div class="container__elements">
      <main v-if="noModal">
        <div class="dot">
          <Star-image />
        </div>
        <Heading-text
          class="heading heading--rating"
          v-bind:heading="headingRating"
        />
        <Description-text
          class="wrapper__description"
          v-bind:description="descriptionRating"
        />
        <Ratings-circle @rating="getRating" />
        <button
          @click="noModal  = false"
          class="submit-button"
        >
          Submit
        </button>
      </main>
      <!--     Modal-->
      <!--      ToDo: Flexbox column layout for centering for the whole container, adjust submit image -->
      <main
        class="container__submitted"
        v-else
      >
        <SubmitImage />
        <p
          v-if="givenRating !== 0"
          class="wrapper__given-rating"
        >
          You selected {{ givenRating }} out of 5
        </p>
        <p
          v-else
          class="wrapper__given-rating"
        >
          You selected 0 out of 5
        </p>
        <Heading-text
          class="heading heading--submitted"
          v-bind:heading="headingSubmitted"
        />
        <Description-text
          class="wrapper__description wrapper__description--submitted"
          v-bind:description="descriptionSubmitted"
        />
      </main>
      <!--      -->

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      noModal: true,
      givenRating: 0,
      headings: {
        rating: 'How did we do?',
        submittedMessage: 'Thank you!'
      },
      descriptions: {
        rating: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our\n' +
          'offering!',
        submitted: ' We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to \n' +
          'get in touch!'
      }
    }
  },
  methods: {
    showModal () {
      this.noModal = false
    },
    getRating (number) {
      this.givenRating = number
    }
  },
  computed: {
    headingRating () {
      return this.headings.rating
    },
    headingSubmitted () {
      return this.headings.submittedMessage
    },
    descriptionRating () {
      return this.descriptions.rating
    },
    descriptionSubmitted () {
      return this.descriptions.submitted
    }
  }
}

</script>

<style
  lang="scss"
>

.heading {
  color: white;

  &--rating {
    margin-top: 2.5rem;
  }

  &--submitted {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -0.5rem;
    margin-top: 0.5rem;
  }
}

.submit-button {
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: #fc7716;
  font-weight: bold;
  border-color: transparent;
  margin-top: 2.3rem;
  color: white;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: white;
    color: hsl(25, 97%, 53%);
    cursor: pointer;
    font-weight: 700;
  }
}

.container {
  &__submitted {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  &__elements {
    border-radius: 2.5rem;
    border: 0.2rem solid rgba(31, 38, 48, 255);
    padding: 2rem;
    width: 34rem;
    height: 34rem;
    background-color: rgba(31, 38, 48, 255);
  }
}

.wrapper {
  &__given-rating {
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 50%;
    border-radius: 2rem;
    background-color: #272e38;
    color: #a36136;
    border-color: #fc7716;
    margin: 2.5rem auto 3rem auto;
  }

  &__headline {
    color: white;
    display: flex;
    place-content: center;
  }

  &__description {
    margin: 1rem 1rem 1.3rem 0;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #9ea5af;
    font-weight: 100;

    &--submitted {
      padding: 0.5rem 1rem;
      text-align: center;
      line-height: 1.5;
    }
  }
}

</style>
