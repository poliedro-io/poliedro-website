<template>
 <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Lo que garantizamos</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem v-for="(item, index) in guarantee" v-bind:key="index" :title="item.title">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that 
                NEFA is a licensed New York trust company that 
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>

          </ul>
        </div>
      </div>
    </section>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      guarantee: [
        {
          title: 'E-commerce y catálogo digital',
          description: '... la descripcion',
        },
        {
          title: 'Gestión de proyectis y finanzas',
          description: '... la descripcion',
        },
        {
          title: 'Georeferenciación y optimización de rutas',
          description: '... la descripcion',
        },

      ],
    }
  },
}
</script>
