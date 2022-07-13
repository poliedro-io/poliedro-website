<template>
  <div class="mb-8">
    <h2 v-if="supertitle" class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ supertitle }}</h2>
    <p class="mt-2 text-4xl sm:text-5xl leading-8 font-semibold tracking-tight text-gray-900">
      {{ title }}
    </p>
    <p class="mt-6 lg:max-w-xl lg:mx-auto text-xl text-gray-500">
      {{ subtitle }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: ['supertitle', 'title', 'subtitle'],
  metaInfo() {
    return {
      supertitle: this.supertitle,
      title: this.title,
      subtitle: this.subtitle,
    }
  },
}
</script>
