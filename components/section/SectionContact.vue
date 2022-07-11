<template>
  <BaseSection :id="'contact'">
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <BaseHeader
          :supertitle="'conversemos'"
          :title="'Contáctanos'"
          :subtitle="'Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu empresa.'"
        />
        <p>El parrafo El formulario</p>
      </div>

      <BaseImage :name="'advanced-trading-tools.webp'" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
