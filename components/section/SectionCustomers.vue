<template>
  <BaseSection :id="'customers'">
    <div class="lg:text-center">
      <BaseHeader center supertitle="Súmate a la digitalización" title="Nuestros clientes confían en nosotros" />
    </div>

    <p class="section-paragraph">
      Son múltiples los rubros en que se desempeñan nuestros clientes, y múltiples las soluciones que les brindamos a
      medida sus negocios crecen. [agregar algo más...]
    </p>

    <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
      <a
        v-for="(item, index) of customers"
        :key="index"
        target="_blank"
        :href="item.url"
        class="brand h-[100px] w-[120px] md:w-[160px] 2xl:w-[200px] flex items-center justify-center my-4 mx-4 md:mx-12"
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
  filter: saturate(0) opacity(0.7);
  transition: filter ease-in-out 150ms;
}

.brand:hover > img {
  filter: saturate(1) opacity(1);
}
</style>
