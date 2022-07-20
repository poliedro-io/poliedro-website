<template>
  <div class="mb-8">
    <h2 v-if="supertitle" v-bind:class="[textColor, 'text-base font-semibold tracking-wide uppercase']">{{ supertitle }}</h2>
    <p
      v-bind:class="[{'mx-auto max-w-xl': center}, alt ? 'text-white': 'text-gray-800', 'text-4xl sm:text-5xl  leading-tight font-semibold']">
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
    alt: Boolean,
    color: {
      type: String,
      default: 'blue'
    }
  },
  data(){
    return {
      textColor: 'text-' + this.color
    }
  }

}
</script>
