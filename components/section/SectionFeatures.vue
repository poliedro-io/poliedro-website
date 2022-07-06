<template>
  <section
    id="features"
    class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden"
  >
    <BaseSection>
      <LandingTradingToolImage class="sm:hidden" />
      <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
        <h2 class="text-4xl font-semibold">Advanced Trading <span class="text-header-gradient">Tools</span></h2>
        <div class="space-y-2">
          <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
          <p class="paragraph text-sm xl:text-base">
            We provide premium access to crypto trading for both individuals and institutions through high liquidity,
            reliable order execution and constant uptime.
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
          <p class="paragraph text-sm xl:text-base">
            We provide premium access to crypto trading for both individuals and institutions through high liquidity,
            reliable order execution and constant uptime.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row">
          <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
            Get Started
          </BaseButton>
          <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
            Learn More
          </BaseButton>
        </div>
      </div>
      <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
    </BaseSection>


    <BaseSection>
      <div data-aos="fade-left" class="col-span-12 py-16 bg-gray-50 overflow-hidden">
        <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div
            class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="(item, index) in features"
              v-bind:key="index"
              class="relative group bg-white transition"
            >
              <div class="relative p-8 space-y-8">
                <img
                 :src="require('~/assets/img/features/' + item.icon)"
                  width="64"
                  alt="burger illustration"
                />

                <div class="space-y-2">
                  <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    {{item.title}}
                  </h5>
                  <p class="text-sm text-gray-600">
                    {{item.description}}
                    </p>
                </div>
                <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                  <span class="text-sm">Saber más</span>
                  <span
                    class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    >&RightArrow;</span
                  >
                </a>
              </div>
            </div>
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
