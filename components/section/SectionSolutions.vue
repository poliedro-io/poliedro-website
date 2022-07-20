<template>
  <BaseSection no-padding-x id="solutions">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <BaseHeader color="green" center supertitle="Soluciones a la medida" title="Digitalizamos tus procesos." />
      </div>

      <div class="flex lg:justify-center">
        <p class="section-paragraph max-w-2xl lg:text-center">
          Tenemos experiencia desarrollando todo tipo de soluciones empresariales, integrando módulos diversos ...
        </p>
      </div>
    </div>

    <div class="my-12">
      <div
        class="px-4 pb-6 snap-x flex overflow-x-auto w-full gap-4 md:snap-none md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-8 md:gap-y-12"
      >
        <div
          v-for="(item, index) in items || []"
          :key="index"
          class="scroll-ml-4 snap-start shrink-0 w-[70%] max-w-[300px] md:w-fit"
        >
          <div class="rounded-lg overflow-hidden">
            <img :src="require('~/assets/img/solutions/image.jpg')" class="relative shrink-0 shadow-xl bg-white" />
          </div>
          <p class="mt-4 text-base font-medium text-gray-600">{{ item.title }}</p>
          <p class="text-sm text-gray-500">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-6 lg:px-8">
      <a v-smooth-scroll href="#contact" class="btn green w-40">Saber más</a>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  props: ['items'],
}
</script>
