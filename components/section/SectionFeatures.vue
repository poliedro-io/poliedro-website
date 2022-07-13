<template>
  <BaseSection :id="'features'">
    <div class="lg:grid lg:grid-cols-2 lg:gap-28">
      <div>
        <BaseHeader :supertitle="'características'" :title="'Desarrollamos aplicaciones modernas'" />

        <BaseParagraph>
          En Poliedro nos apasiona la tecnología, y procuramos estar siempre al día con las últimas herramientas
          digitales. De esta forma nos aseguramos de entregar siempre soluciones potentes, eficientes e intuitivas.
        </BaseParagraph>

        <div class="my-8">
          <BaseImage :name="'features.webp'" />
        </div>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="flex items-center justify-center h-14 w-14">
                <img :src="require('~/assets/img/features/' + feature.icon)" />
              </div>
              <p class="mt-4 text-lg leading-6 font-medium text-gray-900">{{ feature.title }}</p>
            </dt>
            <dd class="mt-2 text-sm text-gray-500">
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
          icon: 'modular.png',
          title: 'Aplicaciones modulares',
          description:
            'Construye tu plataforma digital paso a paso, en base a despliegues modulares totalmente funcionales.',
        },
        {
          icon: 'responsive.png',
          title: 'Diseño personalizado y responsivo',
          description:
            'Elige a tu gusto la apariencia de tus aplicaciones, y accede a ellas desde cualquier dispositivo.',
        },
        {
          icon: 'cloud.png',
          title: 'Almacenamiento en la nube',
          description:
            'Gestiona en un solo lugar tus documentos empresariales, desde pdf y planillas excel hasta imágenes, audio y video.',
        },
        {
          icon: 'light.png',
          title: 'Bases de datos en tiempo real',
          description:
            'Usa bases de datos sincronizadas en tiempo real y visualiza los cambios al instante en todos tus dispositivos.',
        },
        {
          icon: 'key.png',
          title: 'Acceso diferenciado por roles',
          description: 'Habilita módulos y funcionalidades en tus aplicaciones según roles de usuario.',
        },
        {
          icon: 'download.png',
          title: 'Descarga de datos',
          description: 'Exporta los datos de tus aplicaciones en forma de planillas excel, archivos pdf o imágenes.',
        },
      ],
    }
  },
}
</script>
