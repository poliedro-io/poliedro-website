<template>
  <BaseSection id="contact" bgColor="gray-800">
    <div class="md:grid md:grid-cols-2 md:gap-28">
      <div>
        <BaseHeader alt supertitle="Contáctanos" title="Empecemos a trabajar juntos hoy mismo" />
        <BaseParagraph color="white">
          Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu
          empresa. [agregar un texto que de la confianza para escribir un mensaje y saber que responderán al toque]
          </BaseParagraph
        >
      <ContactForm />

      </div>

        <BaseImage class="hidden md:block" name="contact.jpg" />
    </div>

    <div class="mt-16 flex justify-center">
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
