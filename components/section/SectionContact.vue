<template>
  <BaseSection id="contact" class="dark-bg" separatorTop separatorBottom>
    <div class="flex justify-center">

      <div class="max-w-xl">
        <BaseHeader color="green" alt supertitle="Contáctanos" title="Respondemos al instante." />
        <p class="section-paragraph white">
          No dudes en contactarnos si quieres conocer nuestra forma de trabajo, las tecnologías que usamos o concertar una reunión para contarnos tu problema. <br>
          <a class="text-green hover:underline" href="https://wa.me/56964033243">Hablemos por Whatsapp</a>, o envíanos un mensaje con el siguiente formulario:
        </p>
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
