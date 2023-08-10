<template>
  <BaseSection :id="'customers'">
    <div class="lg:text-center">
      <BaseHeader
        color="blue"
        center
        supertitle="Súmate a la digitalización"
        title="Nuestros clientes confían en nosotros"
      />
    </div>

    <div class="flex justify-start md:justify-center">
      <p class="section-paragraph max-w-2xl text-left md:text-center">
        Son múltiples los rubros en que se desempeñan nuestros clientes, y múltiples las soluciones que desarrollamos a
        medida que sus negocios crecen. <br />Nos enorgullece ver cómo aumentan sus ventas, optimizan sus procesos de
        negocio o gestionan sus operaciones desde el celular, ahora que ya están digitalizados.
      </p>
    </div>

    <div data-aos="fade-up" class="my-8 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <a
        v-for="(item, index) of items"
        :key="index"
        target="_blank"
        :href="item.url"
        class="cursor-pointer brand px-4 h-[100px] flex items-center justify-center bg-gray-100 rounded-md"
      >
        <nuxt-img
          placeholder
          loading="lazy"
          :width="item.width"
          :height="item.height"
          :src="'/img/customers/' + item.img"
          :alt="item.name"
        />
      </a>
    </div>

    <div class="sm:flex sm:justify-center">
      <button v-smooth-scroll href="#contact" class="mt-8 w-full sm:w-40 btn blue">Contactar</button>
    </div>

    <div class="mt-24 max-w-xl mx-auto">
      <nuxt-img
        width="512"
        height="512"
        alt="Clientes"
        placeholder
        loading="lazy"
        sizes="sm:100vw lg:576px"
        src="/img/customers.svg"
      />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  props: {
    items: {
      type: Array,
      default: () => [],
    },
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
