<template>
  <div class="cursor-default">
    <dt>
      <div :class="[bgColor, shadow,  'transition-all flex items-center justify-center h-12 w-12 rounded-md p-4 text-white bg-lue']">
        <component :is="icon" />
      </div>
      <p class="mt-4 text-base font-medium text-gray-800">{{ title }}</p>
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
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    icon: {type: String, default: ''},
    index: {type: Number, default: 0}
  },
  data(){
    const color = ['blue', 'yellow', 'green', 'violet'][this.index % 4] 
    return {
      bgColor: 'bg-' + color,
      shadow: 'shadow-md shadow-' + color + '-500/50'
    }
  }
}
</script>
