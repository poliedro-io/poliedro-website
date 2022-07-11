<template>
  <img :src="require('~/assets/img/' + name)" :alt="name" />
</template>
<script>
export default {
  name: 'BaseImage',
  props: ['name', 'maxWidth'],
  metaInfo() {
    return {
      name: this.name,
      maxWidth: this.maxWidth,
    }
  },
}
</script>
