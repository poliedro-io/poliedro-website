<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    v-bind:class="['transition w-full md:w-fit inline-flex justify-center py-3 md:px-4 border shadow-sm text-md font-medium rounded-md hover:bg-primary-700',
    outlined ? 'focus:outline-none text-primary-600 border-primary-700 bg-transparent hover:text-white' : 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-gray-600 border-transparent poliedro-bg']"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  props: { outlined: Boolean, text: String },
  inheritAttrs: false,
}
</script>
