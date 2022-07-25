<template>
  <img v-bind="$attrs" v-bind:style="{'mix-blend-mode': transparent ? 'multiply' : ''}" :src="require('~/assets/img/' + name)" :alt="name" />
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    name: String,
    maxWidth: String,
    transparent: Boolean
  }
}
</script>
