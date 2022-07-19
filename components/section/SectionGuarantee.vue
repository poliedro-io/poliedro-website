<template>
  <BaseSection id="guarantees" bg-color="gray-800">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="md:order-last">
        <BaseHeader supertitle="Lo que garantizamos" title="Queremos ser tu Partner digital" color="green" alt />

        <BaseParagraph color="gray-200">
          Nuestra intención es acompañar de forma permanente el crecimiento de tu empresa, ayudándote a digitalizar
          todos sus procesos implementando tecnologías de vanguardia que te permitirán generar y mantener una ventaja
          frente a la competencia. Es por eso que te garantizamos:
        </BaseParagraph>

        <ul class="space-y-6 my-8">
          <li v-for="(item, index) of guarantees" :key="index">
            <div class="flex items-center justify-between max-w-lg">
              <div class="flex items-center">
                <CheckDecagramOutlineIcon :size="28" class="text-green" />
                <span class="ml-4 text-gray-200">{{ item }}</span>
              </div>
            </div>
          </li>
        </ul>

        <a v-smooth-scroll href="#contact" class="flex justify-end text-green hover:underline items-center">
          <span>Saber más</span>
          <ArrowRightIcon class="ml-2" :size="16" />
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
