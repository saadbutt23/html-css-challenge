<template>
  <div class="container">
    <div>
      <Circle-image />
      <Star-image />
      <Heading-text />
      <h1>hi</h1>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.container {
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(20,21,25,255);

  div {
    border-radius: 2.5rem;
    border: 0.2rem solid rgba(31,38,48,255);
    padding: 2rem;
    width: 35rem;
    background-color: rgba(31,38,48,255);
  }
}

</style>
