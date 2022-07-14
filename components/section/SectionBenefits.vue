<template>
  <BaseSection id="benefits" bgColor="primary-50">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <BaseHeader :title="'Beneficios de la digitalización'" :supertitle="'para considerar'" />

        <BaseParagraph>
          Hoy en día las tecnologías nos permiten facilitar la forma en que trabajamos. A medida que estas tecnologías
          se hacen mas acequibles van transformando todos los ámbitos de la sociedad.
        </BaseParagraph>

        <dl class="my-8 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 md:gap-x-16">
          <div v-for="(item, index) in benefits" v-bind:key="index" class="relative">
            <dt>
              <div class="flex items-center justify-center h-14 w-14 rounded-md bg-primary-500 text-white p-4">
                <!-- <object class="h-8 w-8 icon" :data="require('~/assets/img/solutions/' + item.icon)"></object> -->
              </div>
              <p class="mt-4 text-lg leading-6 font-medium text-gray-900">{{ item.text }}</p>
            </dt>
          </div>
        </dl>

        <BaseButton class="mt-4" :outlined="true"
          >Contactar</BaseButton
        >
      </div>

      <BaseImage class="hidden lg:block" :name="'nefa-cc.webp'" />
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
        {
          text: 'Impulsa la eficiencia',
          icon: '',
        },
        {
          text: 'Agiliza los procesos',
          icon: '',
        },
        {
          text: 'Reduce costos',
          icon: '',
        },
        {
          text: 'Estimula la productividad',
          icon: '',
        },
        {
          text: 'Disminuye errores humanos',
          icon: '',
        },
        {
          text: 'Centraliza la información',
          icon: '',
        },
      ],
    }
  },
}
</script>
