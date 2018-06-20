<template>
  <q-page class="flex index-page">
    <iframe
      class="index-page-video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cHFku51ddSQ"
      frameborder="0" allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  </q-page>
</template>

<style>
.index-page {
  justify-content: center;
  flex-flow: wrap;
}
.index-page-video {
  margin: 10px;
  width: 560px;
  height: 325px;
  background-color: aliceblue;
  border: 1px solid lightblue;
}
</style>

<script>
export default {
  name: 'IndexPage'
}
</script>
