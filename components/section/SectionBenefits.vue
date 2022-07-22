<template>
  <BaseSection id="benefits">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8 ">
      <div>
        <BaseHeader title="Beneficios de la digitalización" supertitle="para considerar" color="blue" />

        <p class="section-paragraph">
          Hoy en día las tecnologías nos permiten facilitar la forma en que trabajamos. A medida que estas tecnologías
          se hacen mas acequibles van transformando todos los ámbitos de la sociedad.
        </p>

        <dl class="my-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-16">
          <BaseItem
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            color="blue"
          />
        </dl>

        <button v-smooth-scroll href="#contact" class="mt-8 w-40 btn blue">
          Contactar
        </button>
      </div>

      <BaseImage class="hidden lg:block" :name="'nefa-cc.webp'" />
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
