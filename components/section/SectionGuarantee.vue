<template>
  <BaseSection :id="'guarantees'">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="md:order-last">
        <BaseHeader supertitle="Lo que garantizamos" title="Queremos ser tu Partner digital" />

        <BaseParagraph>
          Nuestra intención es acompañar de forma permanente el crecimiento de tu empresa, ayudándote a digitalizar
          todos sus procesos implementando tecnologías de vanguardia que te permitirán generar y mantener una ventaja
          frente a la competencia. Es por eso que te garantizamos:
        </BaseParagraph>

        <ul class="space-y-6 my-8">
          <li class="group" v-for="(item, index) of guarantees" :key="index">
            <div class="flex items-center justify-between max-w-lg">
              <div class="flex items-center">
                <CheckDecagramOutlineIcon :size="28" class="text-primary" />
                <span class="ml-4 text-gray-600">{{ item }}</span>
              </div>
              <a v-smooth-scroll href="#contact" class="hidden text-primary items-center md:group-hover:flex">
                <span>Saber más </span>
                <ArrowRightIcon :size="16" />
              </a>
            </div>
          </li>
        </ul>

        <a v-smooth-scroll href="#contact" class="flex justify-end text-primary items-center md:hidden">
          <span>Saber más &nbsp;</span>
          <ArrowRightIcon :size="16" />
        </a>
      </div>

      <BaseImage :name="'advanced-trading-tools.webp'" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      guarantees: [
        'Atención personalizada',
        'Desarrollo ágil',
        'Tecnología de vanguardia',
        'Seguridad de datos',
        'Compromiso y responsabilidad',
        'Servicio posventa',
      ],
    }
  },
}
</script>
