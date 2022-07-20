<template>
  <section :id="id" :class="['bg-' + bgColor,  noPaddingY ? 'py-0' : 'py-24']">
    <div :class="['max-w-7xl mx-auto', noPaddingX ? 'px-0' : 'px-4 sm:px-6 lg:px-8']">
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
    noPaddingY: Boolean,
    noPaddingX: Boolean,
  },
}
</script>
