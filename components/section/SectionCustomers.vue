<template>
  <BaseSection :id="'customers'">
    <div class="lg:text-center">
      <BaseHeader
        color="violet"
        center
        supertitle="Súmate a la digitalización"
        title="Nuestros clientes confían en nosotros"
      />
    </div>

    <div class="flex justify-center">
      <p class="section-paragraph max-w-2xl text-center">
        Son múltiples los rubros en que se desempeñan nuestros clientes, y múltiples las soluciones que les brindamos a medida que sus negocios crecen. Nos enorgullece ver cómo gracias a las soluciones que les brindamos aumentan sus ventas, optimizan sus procesos de negocio o gestionan sus operaciones desde sus celulares. 
      </p>
    </div>

    <div data-aos="fade-up" class="my-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <a
        v-for="(item, index) of customers"
        :key="index"
        target="_blank"
        :href="item.url"
        class="cursor-default brand px-4 h-[100px] flex items-center justify-center bg-gray-100 rounded-md"
      >
        <img :src="require('~/assets/img/customers/' + item.name + '.webp')" :alt="item.name" />
      </a>
    </div>
  </BaseSection>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          name: 'fama',
          url: 'http://www.ventasfama.cl/reparto.php',
        },
        {
          name: 'multifruts',
          url: 'https://www.instagram.com/multifruts/?hl=es',
        },
        {
          name: 'bertolino',
          url: 'https://www.bertolino.cl/',
        },
        {
          name: 'canin',
          url: 'https://www.canin.cl/',
        },
        {
          name: 'fishcare',
          url: 'https://transportesfishcare.cl/',
        },
        {
          name: 'impulsa',
          url: 'https://www.impulsaingenieria.com/',
        },
        {
          name: 'polytex',
          url: 'https://www.polytex.cl/',
        },
        {
          name: 'roccflex',
          url: 'https://www.roccflex.cl/',
        },
      ],
    }
  },
}
</script>

<style scoped>
.brand > img {
  filter: grayscale(1) opacity(0.6);
  mix-blend-mode: multiply;
  transition: all ease-in-out 150ms;
  max-height: 80%;
}

@media (min-width: 768px) {
  .brand > img {
    max-width: 200px;
  }
}

.brand:hover > img {
  filter: grayscale(0) opacity(1);
}
</style>
