<template>
  <BaseSection :id="'digitalization'">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <BaseHeader
          :title="'Beneficios de la digitalización'"
          :supertitle="'para considerar'"
        />

       
        <BaseParagraph>
         Hoy en día las tecnologías nos permiten facilitar la forma en que trabajamos. A medida que estas tecnologías se hacen mas acequibles van transformando todos los ámbitos de la sociedad.
        </BaseParagraph>

        <ul class="space-y-4 my-8">
          <li v-for="(item, index) of benefits" v-bind:key="index">
            <div class="flex items-center space-x-4 ml-8">
              <CheckIcon :size="24" class="text-[#0c66ee]" />
              <span class="font-semibold text-gray-600">{{ item }}</span>
            </div>
          </li>
        </ul>


        <BaseButton
          class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
          >Join the waitlist</BaseButton
        >
      </div>

      <BaseImage :name="'nefa-cc.webp'" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      benefits: [
        'Impulsa la eficiencia', 
        'Agiliza los procesos',
        'Reduce costos',
        'Estimula la productividad',
        'Disminuye errores humanos',
        'Centraliza la información'
        ]
    }
  },
}
</script>
