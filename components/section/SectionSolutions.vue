<template>
  <BaseSection id="solutions">
    <div class="lg:text-center">
      <BaseHeader center supertitle="lo que hacemos" title="Somos sastres digitales" />
    </div>

    <div class="my-16">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
        <div v-for="(item, index) in items" :key="index" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-primary-500 text-white p-4">
              <object class="h-8 w-8 icon" :data="require('~/assets/img/solutions/' + item.icon)"></object>
            </div>
            <p class="ml-20 text-lg leading-6 font-medium text-gray-900">{{ item.title }}</p>
          </dt>
          <dd class="mt-2 ml-20 text-base text-gray-500">
            {{ item.description }}
          </dd>
        </div>
      </dl>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      items: [
        {
          icon: 'ecommerce.svg',
          title: 'E-commerce y catálogo digital',
          description: 'Venta online con boleta electrónica SII ',
        },
        {
          icon: 'gantt.svg',
          title: 'Gestión de proyectos y finanzas',
          description: '... la descripcion',
        },
        {
          icon: 'location.svg',
          title: 'Georeferenciación y optimización de rutas',
          description: '',
        },
        {
          icon: 'calendar.svg',
          title: 'Agendamiento y reservas',
          description: '... la descripcion',
        },
        {
          icon: 'stock.svg',
          title: 'Gestión de stock y puntos de venta',
          description: '... la descripcion',
        },
        {
          icon: 'tools.svg',
          title: 'Mantenciones y control de calidad',
          description: '... la descripcion',
        },
      ],
    }
  },
}
</script>
