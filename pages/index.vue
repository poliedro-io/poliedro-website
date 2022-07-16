<template>
  <div class="w-full">
    <SectionHero />

    <SectionSolutions :items="solutions" />

    <SectionFeatures />

    <SectionGuarantee />

    <SectionBenefits />

    <SectionCustomers />

    <SectionContact />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const solutions = await $content('solutions', params.slug)
    .sortBy('id', 'asc').fetch()
    return {
      solutions,
    }
  },
}
</script>
