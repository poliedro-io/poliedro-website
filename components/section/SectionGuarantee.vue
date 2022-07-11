<template>
  <BaseSection :id="'guarantees'">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="md:order-last">
        <BaseHeader
          :title="'Nuestras garantías'"
          :supertitle="'lo que garantizamos'"
          :subtitle="'El subtitulo genial'"
        />
      </div>

      <BaseImage :name="'advanced-trading-tools.webp'" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      guarantees: ['La garantía', 'Otra garantía'],
    }
  },
}
</script>
