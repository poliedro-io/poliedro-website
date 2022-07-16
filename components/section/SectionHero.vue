<template>
  <BaseSection :noPadding="true" style="margin-top: 64px" class="bg-gradient min-h-[70vh]" id="hero">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 items-center">
      <img
        class="lg:order-last"
        data-aos="fade-up"
        data-aos-once="true"
        :src="require('~/assets/img/hero-image.webp')"
      />
      <div>
        <span data-aos="fade-right" data-aos-once="true" class="text-base text-primary font-semibold uppercase tracking-wide"
          >Digitalízate</span
        >
        <h1
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
          class="text-gray-800 text-4xl sm:text-5xl xl:text-6xl font-bold"
        >
        Desarrollamos <br> <span class="text-primary">la solución</span> que necesitas.
        </h1>
        <p data-aos="fade-right" data-aos-once="true" data-aos-delay="200" class="mt-4 text-gray-600 text-xl">
         Cada empresa es única. Por eso digitalizamos a la medida de las <b class="font-bold">necesidades únicas</b> de tu empresa.
        </p>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          class="max-w-md flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
        >
          <BaseButton v-smooth-scroll href="#contact" outlined class="flex-1"> Contactar </BaseButton>
          <BaseButton @click="downloadBrochure" outlined class="flex-1"> Descargar Brochure </BaseButton>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  methods: {
    downloadBrochure() {
      const a = document.createElement('a')
      a.setAttribute('href', 'https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing')
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'brochure-poliedro.pdf')
      a.click()
    },
  },
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* .bg-gradient { */
/* background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  -webkit-text-fill-color: transparent; */
/* } */
</style>
