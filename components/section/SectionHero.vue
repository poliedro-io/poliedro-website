<template>
  <BaseSection :id="'hero'">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div>
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Digitalízate</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The World's <span class="text-header-gradient">Poliedro</span> Poliedro
          </h1>
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="300" class="paragraph">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Contactar </span>
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Descargar Brochure </span>
            </BaseButton>
          </div>
        </div>
        <!-- <img
          data-aos="fade-up"
          data-aos-once="true"
          :src="require('~/assets/img/hero-image.webp')"
        /> -->
      </div>
    </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin]
}
</script>
