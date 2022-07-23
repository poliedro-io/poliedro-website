<template>
  <div class="w-full">
    <SectionHero />

    <SectionSolutions :items="solutions" />

    <SectionFeatures :items="features" />

    <SectionPartner />

    <SectionBenefits :items="benefits" />

    <SectionCustomers />

    <SectionContact />


  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const solutions = await $content('solutions', params.slug).sortBy('id', 'asc').fetch()
    const features = await $content('features', params.slug).sortBy('id', 'asc').fetch()
    const benefits = await $content('digitalization', params.slug).sortBy('id', 'asc').fetch()
    return {
      solutions,
      features,
      benefits,
    }
  },
}
</script>
