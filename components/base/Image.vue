<template>
  <img style="mix-blend-mode: multiply;" :src="require('~/assets/img/' + name)" :alt="name" />
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    name: String,
    maxWidth: String
  }
}
</script>
