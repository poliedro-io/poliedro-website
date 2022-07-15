<template>
  <div class="mb-8">
    <h2 v-if="supertitle" class="text-base font-semibold tracking-wide uppercase text-primary-600" >{{ supertitle }}</h2>
    <p
      v-bind:class="[{'mx-auto max-w-xl': center}, alt ? 'text-white': 'text-gray-800', 'mt-2 text-4xl sm:text-5xl  leading-tight font-semibold']">
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: {
    supertitle: String,
    title: String,
    center: Boolean,
    alt: Boolean
  },
}
</script>
