<template>
  <BaseSection :id="'solutions'">
    <div class="lg:text-center">
      <BaseHeader
        :supertitle="'lo que hacemos'"
        :title="'Somos sastres digitales'"
        :subtitle="'Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu empresa.'"
      />
    </div>

    <!-- La versatilidad y experiencia de nuestro equipo nos permite abordar problemáticas de diversos rubros de manera orgánica, logrando soluciones eficientes e intuitivas para nuestros clientes. -->

    <div class="mt-16">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-16">
        <div v-for="(item, index) in items" v-bind:key="index" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white p-4">
              <img :src="require('~/assets/img/solutions/' + item.icon)" />
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
          icon: 'shopping-cart.png',
          title: 'E-commerce y catálogo digital',
          description: '... la descripcion',
          color: 'red',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Gestión de proyectis y finanzas',
          description: '... la descripcion',
          color: 'indigo',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Georeferenciación y optimización de rutas',
          description: '... la descripcion',
          color: 'yellow',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Agendamiento y reservas',
          description: '... la descripcion',
          color: 'lime',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Punto de venta y gestión de stock',
          description: '... la descripcion',
          color: 'orange',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Mantenciones y control de calidad',
          description: '... la descripcion',
          color: 'violet',
        },
      ],
    }
  },
}
</script>
