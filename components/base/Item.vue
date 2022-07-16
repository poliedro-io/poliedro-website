<template>
  <div>
    <dt>
      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-4">
        <component v-bind:is="icon" />
      </div>
      <p class="mt-4 text-base font-medium text-gray-900">{{ title }}</p>
    </dt>
    <dd class="mt text-sm text-gray-500">
      {{ description }}
    </dd>
  </div>
</template>
<script>
export default {
  name: 'BaseItem',
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>
