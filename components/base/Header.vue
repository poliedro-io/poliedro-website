<template>
  <div class="mb-8">
    <h2 v-if="supertitle" class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ supertitle }}</h2>
    <p class="mt-2 text-4xl sm:text-5xl leading-10 font-semibold tracking-tight text-gray-900">
      {{ title }}
    </p>
    <!-- <p :class="'mt-6 lg:max-w-xl mx-auto text-xl text-gray-500 text-' + align">
      {{ subtitle }}
    </p> -->
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: ['supertitle', 'title', 'subtitle', 'align'],
  metaInfo() {
    return {
      supertitle: this.supertitle,
      title: this.title,
      subtitle: this.subtitle,
      // align: this.align || 'center',
    }
  },
}
</script>
