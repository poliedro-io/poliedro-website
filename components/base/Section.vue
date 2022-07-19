<template>
  <section :id="id" v-bind:class="['bg-' + bgColor,  noPadding ? 'py-0' : 'py-24']">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BaseSection',
  props: {
    id: {
      type: String,
      default: '',
    },
    bgColor: { type: String, default: 'white' },
    noPadding: Boolean,
  },
}
</script>
