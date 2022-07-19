<template>
  <BaseSection id="solutions">
    <div class="lg:text-center">
      <BaseHeader color="green" center supertitle="Soluciones a la medida" title="Esa idea que tienes en mente" />
    </div>

    <BaseParagraph> 
    Tenemos experiencia desarrollando todo tipo de soluciones empresariales, integrando módulos diversos ...
    </BaseParagraph>


    <div class="my-16">

      <div class="snap-x flex overflow-x-auto w-full gap-4 md:snap-none md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-8 md:gap-y-12">
        <div v-for="(item, index) in items || []" :key="index" class="scroll-ml-0 snap-start shrink-0 w-[70%] max-w-[300px] md:w-fit">
          <div  class="rounded-lg overflow-hidden">
            <img :src="require('~/assets/img/solutions/image.jpg')" class="relative shrink-0 shadow-xl bg-white" />
          </div>
          <p class="mt-4 text-base font-medium text-green">{{ item.title }}</p>
          <p class="text-sm text-gray-500">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

  <a v-smooth-scroll href="#contact" class="btn green w-40">Saber más</a>

  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  props: ['items'],
}
</script>
