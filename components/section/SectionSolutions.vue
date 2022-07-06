<template>
  <section id="solutions" class="relative max-w-full sm:mx-4 my-20 py-16 overflow-hidden">
    <BaseSection>
      <LandingSolutionsImage class="sm:hidden mb-8" />
      <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
        <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
          Somos sastres digitales
          <!-- <br class="hidden sm:block" /> -->
        </h2>
        <p class="paragraph">
          Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu empresa.
        </p>

        <p class="paragraph">
          La versatilidad y experiencia de nuestro equipo nos permite abordar problemáticas de diversos rubros de manera
          orgánica, logrando soluciones eficientes e intuitivas para nuestros clientes.
        </p>
      </div>
      <LandingSolutionsImage data-aos="fade-left" class="hidden sm:block" />
    </BaseSection>

    <BaseSection>
      <div data-aos="fade-left" class="col-span-12 text-center my-16">
        <h3 class="text-xl text-neutral-800 font-semibold">Algunas de nuestras soluciones</h3>

        <!-- <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">Algunas de nuestras soluciones</h2> -->
        <div class="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
          <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
            <div
              v-for="(app, index) in apps"
              v-bind:key="index"
              class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50"
            >
              <span :class="`p-5 rounded-full bg-${app.color}-500 text-white shadow-lg shadow-${app.color}-200`">
                <img width="24" :src="require('~/assets/img/solutions/' + app.icon)" />
              </span>
              <p class="text-xl font-medium text-slate-700 mt-3">
                {{ app.title }}
              </p>
              <p class="mt-2 text-sm text-slate-500">
                {{ app.description }}
              </p>
            </div>
          </div>

          <div class="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p class="text-white">
              <span class="text-4xl font-medium">¿Necesitas otra solución?</span> <br />
              <span class="text-lg">Contáctanos y cuéntanos tu problema </span>
            </p>
            <button
              type="submit"
              class="rounded-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      apps: [
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
