<template>
  <button
    v-if="outlined"
    class="w-full md:w-fit inline-flex justify-center py-3 md:px-6 border shadow-sm text-md font-medium rounded-md hover:bg-primary-700 hover:text-white focus:outline-none text-primary-600 border-primary-700 bg-transparent transition"
  >
    <slot></slot>
  </button>

  <button
   v-bind="$attrs"
    v-on="$listeners"
    v-else
    class="w-full md:w-fit inline-flex justify-center py-3 md:px-4 border shadow-sm text-md font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-white border-transparent bg-primary-600"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {outlined: Boolean, text: String},
  inheritAttrs: false
}
</script>
