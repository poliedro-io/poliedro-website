<template>
  <BaseSection id="contact" bg-color="gray-800">
    <div class="md:grid md:grid-cols-2 md:gap-28">
      <div class="col-span-1 flex items-center">
        <BaseImage class="hidden md:block" name="contact.jpg" />
      </div>
      <div class="col-span-1">
        <BaseHeader alt supertitle="Contáctanos" title="Respondemos al instante." />
        <BaseParagraph color="gray-200">
          No dudes en contactarnos si quieres conocer algunos de nuestros proyectos, nuestra forma de trabajo, las tecnologías que usamos o concertar una reunión para contarnos tu problema. <br>
          <a class="text-blue hover:underline" href="https://wa.me/56964033243">Hablemos por Whatsapp</a>, o envíanos un mensaje desde el siguiente formulario:
        </BaseParagraph>
        <br />
        <ContactForm />
      </div>
    </div>

  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
}
</script>
