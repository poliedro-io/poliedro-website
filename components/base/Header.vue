<template>
  <div class="mb-8">
    <h2 v-if="supertitle" class="text-base font-semibold tracking-wide uppercase text-primary-600" >{{ supertitle }}</h2>
    <p
      :class="
        'mt-2 text-4xl sm:text-5xl leading-10 font-semibold tracking-tight text-gray-900 ' +
        (center ? 'mx-auto max-w-xl' : '')
      " :style="(alt ? 'color: white' : '')"
    >
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
