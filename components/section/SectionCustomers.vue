<template>
  <BaseSection :id="'customers'">
    <div class="lg:text-center">
      <BaseHeader
        :supertitle="'CLientes'"
        :title="'Algunos de nuestros clientes'"
        :subtitle="'Desarrollamos soluciones digitales a la medida para automatizar y simplificar los procesos de tu empresa.'"
      />
    </div>

    <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
      <LandingPartnerImage
        v-for="customer in customers"
        :key="customer.name"
        :img="customer.logo"
      />
    </div>
  </BaseSection>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          name: '',
          logo: 'clever.png',
          url: ''
        },
        {
          name: '',
          logo: 'diamon-cutts.png',
          url: ''
        },
        {
          name: '',
          logo: 'swiss-finance.png',
          url: ''
        },
        {
          name: '',
          logo: 'gambio.png',
          url: ''
        },
      ],
    }
  },
}
</script>

<style></style>
