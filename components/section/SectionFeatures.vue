<template>
  <BaseSection :id="'features'">
    <div class="md:grid md:grid-cols-2 gap-8">
      <BaseHeader
        :supertitle="'cómo lo hacemos'"
        :title="'Apasionados por la tecnología'"
        :subtitle="'En Poliedro nos encanta esta al día con las últimas tecnologías web...'"
      />

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <img :src="require('~/assets/img/features/' + feature.icon)" />
              </div>
              <p class="mt-6 text-lg leading-6 font-medium text-gray-900">{{ feature.title }}</p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  data() {
    return {
      features: [
        {
          icon: 'jigsaw.png',
          title: 'E-commerce y catálogo digital',
          description: '... la descripcion',
          color: 'red',
        },
        {
          icon: 'jigsaw.png',
          title: 'Gestión de proyectis y finanzas',
          description: '... la descripcion',
          color: 'indigo',
        },
        {
          icon: 'jigsaw.png',
          title: 'Georeferenciación y optimización de rutas',
          description: '... la descripcion',
          color: 'yellow',
        },
        {
          icon: 'jigsaw.png',
          title: 'Agendamiento y reservas bla bla bla',
          description: '... la descripcion',
          color: 'lime',
        },
        {
          icon: 'jigsaw.png',
          title: 'Punto de venta y gestión de stock',
          description: '... la descripcion',
          color: 'orange',
        },
        {
          icon: 'jigsaw.png',
          title: 'Mantenciones y control de calidad',
          description: '... la descripcion',
          color: 'violet',
        },
      ],
    }
  },
}
</script>
