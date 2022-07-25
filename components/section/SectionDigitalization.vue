<template>
  <BaseSection id="digitalization" no-padding-y>
    <div class="lg:grid lg:grid-cols-2 lg:gap-16 pt-48">
      <div>
        <BaseHeader title="Beneficios de la digitalización" supertitle="para considerar" color="blue" />

        <p class="section-paragraph">
          Hoy en día las tecnologías digitales facilitan enormemente la forma en que trabajamos. En el ámbito
          empresarial, aprovechar estas nuevas herramientas es <b>indispensable</b> para optimizar los procesos y lograr
          así una <b>ventaja sustancial</b> respecto a la competencia.
        </p>
        <p class="section-paragraph">Para una empresa moderna la digitalización debe ser una prioridad.</p>

        <div class="hidden my-8 lg:flex lg:justify-center">
          <BaseImage class="max-w-md" name="digitalization.webp" />
        </div>
      </div>
      <div>
        <dl class="my-8 space-y-14 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-16">
          <BaseItem
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            color="blue"
          />
        </dl>

        <button v-smooth-scroll href="#contact" class="mt-8 w-40 btn blue">Contactar</button>
      </div>
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
