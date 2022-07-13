<template>

  <BaseSection>

  <div class="md:text-center">
    <BaseHeader :supertitle="'cómo trabajamos'" :title="'Desarrollo paso a paso'" :subtitle="'Pasos bla bla bla'" />
  </div>

    <div
      data-aos="fade-up"
      class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
    >
      <LandingStep v-for="step in steps" :key="step.title" :step="step" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      steps: [
        {
          img: 'sign-up.png',
          title: 'Toma de requerimientos',
          description:
            'Mediante una reunión virtual recabamos la información concerniente a tu problemática y a la forma en que trabaja tu empresa.',
        },
        {
          img: 'fund.png',
          title: 'Elaboración del presupuesto',
          description:
            'Generamos un presupuesto con el detalle de las funcionalidades necesarias para abordar tu problema, indicando las diferentes etapas del proceso, sus plazos y montos.',
        },
        {
          img: 'buy-crypto.png',
          title: 'Desarrollo de la solución',
          description:
            'Aprobado el presupuesto comenzamos con el desarrollo de la solución, desplegando módulos funcionales en cada etapa de desarrollo para recibir feedback y hacer correcciones.',
        },
      ],
    }
  },
}
</script>
