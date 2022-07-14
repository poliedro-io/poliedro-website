<template>
  <BaseSection id="contact" bg-color="primary-50">
    <div class="md:grid md:grid-cols-2 md:gap-28">
      <div>
        <BaseHeader supertitle="contacto" title="Cuéntanos tu problema" />
        <BaseParagraph>
          Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu
          empresa.</BaseParagraph
        >

        <BaseImage name="contact.jpg" />
      </div>

      <ContactForm />
    </div>

    <h1>O hablemos por whatsapp</h1>

    <div class="mt-8 flex justify-center">
      <BaseButton v-smooth-scroll outlined href="#hero">
        <ArrowUpIcon /> <span class="ml-4">Volver arriba</span>
      </BaseButton>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
