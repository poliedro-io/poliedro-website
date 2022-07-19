<template>
  <p v-bind:class="['text-base mb-4 leading-7', 'text-' + color, {'text-justify': justify}]" v-bind="$attrs">
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: 'BaseParagraph',
  props: {
    color: {
      default: 'gray-600',
      type: String
    },
    justify: Boolean
  }
}
</script>
