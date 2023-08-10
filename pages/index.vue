<template>
  <div class="w-full">
    <SectionHero />

    <SectionSolutions :items="solutions" />

    <SectionFeatures :items="features" />

    <SectionPartner />

    <SectionDigitalization :items="digitalization" />

    <SectionBrochure />

    <SectionCustomers :items="customers" />

    <SectionContact />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const solutions = await $content('solutions', params.slug).sortBy('id', 'asc').fetch()
    const features = await $content('features', params.slug).sortBy('id', 'asc').fetch()
    const digitalization = await $content('digitalization', params.slug).sortBy('id', 'asc').fetch()
    const customers = await $content('customers', params.slug).sortBy('id', 'asc').fetch()
    return {
      solutions,
      features,
      digitalization,
      customers,
    }
  },
}
</script>
