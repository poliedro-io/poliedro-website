<template>
  <BaseSection :id="'guarantees'">
    <div class="grid md:grid-cols-2 gap-8">
      <div class="md:order-last">
        <BaseHeader :supertitle="'Garantías'" :title="'Tu partner digital'" />

        <BaseParagraph>
          Nuestra intención es acompañar de forma permanente el crecimiento de tu empresa, ayudándote a digitalizar
          todos sus procesos implementando tecnologías de vanguardia que te permitirán generar y mantener una ventaja
          frente a la competencia. Es por eso que te garantizamos:
        </BaseParagraph>

        <ul class="space-y-4 mt-8">
          <li v-for="(item, index) of guarantees" v-bind:key="index">
            <div class="flex items-center space-x-4 ml-8">
              <CheckDecagramOutlineIcon :size="28" class="text-primary-600" />
              <span class="font-semibold text-gray-600">{{ item }}</span>
            </div>
          </li>
        </ul>
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
