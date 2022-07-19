<template>
  <BaseSection id="features" bg-color="blue-50">
    <div class="lg:grid lg:grid-cols-2 lg:gap-28">
      <div>
        <BaseHeader color="violet" supertitle="ofrecemos calidad" title="Desarrollamos aplicaciones modernas" />

        <BaseParagraph>
          En Poliedro nos apasiona la tecnología, y procuramos estar siempre al día con las últimas herramientas
          digitales. De esta forma nos aseguramos de entregar siempre soluciones potentes, eficientes e intuitivas.
        </BaseParagraph>

        <div class="my-8">
          <BaseImage :name="'features.webp'" />
        </div>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
          <BaseItem
            v-for="(item, index) in items || []"
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            :index="index"
          />
        </dl>
      </div>
    </div>

    <button v-smooth-scroll href="#contact" class="mt-16 w-40 btn violet">Saber más</button>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  props: ['items'],
}
</script>
