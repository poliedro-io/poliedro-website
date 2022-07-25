<template>
  <BaseSection id="partner" class="dark-bg" separatorTop separatorBottom>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="md:order-last">
        <BaseHeader supertitle="tu partner digital" title="Queremos digitalizar todos tus procesos" color="yellow" alt />

        <p class="section-paragraph white">
          Nuestra intención es acompañar de forma permanente el crecimiento de tu empresa, ayudándote a digitalizar
          todos sus procesos implementando tecnologías de vanguardia que te permitirán generar y mantener una ventaja
          frente a la competencia. Es por eso que te garantizamos:
        </p>

        <ul class="space-y-6 my-8">
          <li v-for="(item, index) of guarantees" :key="index">
            <div class="flex items-center justify-between max-w-lg">
              <div class="flex items-center">
                <CheckDecagramOutlineIcon :size="28" class="text-yellow" />
                <span class="ml-4 text-gray-200">{{ item }}</span>
              </div>
            </div>
          </li>
        </ul>

    <button v-smooth-scroll href="#contact" class="mt-16 w-40 btn yellow">Saber más</button>

        <!-- <a v-smooth-scroll href="#contact" class="flex justify-end text-green hover:underline items-center">
          <span>Saber más</span>
          <ArrowRightIcon class="ml-2" :size="16" />
        </a> -->
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

