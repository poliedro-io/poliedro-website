<template>
   <section :id="id" v-bind="$attrs" :class="(!!noPadding ? 'py-0' : 'py-32' ) + ' bg-' + bgColor">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
   </section>
</template>
<script>
export default {
  name: 'BaseSection',
  props: ['id', 'bgColor', 'noPadding'],
  metaInfo(){
    return {
      id: this.id,
      bgColor: this.bgColor || 'white',
      noPadding: this.noPadding || false
    }
  }
}
</script>
