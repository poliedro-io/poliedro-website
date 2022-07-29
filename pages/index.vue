<template>
  <div class="w-full">
    <SectionHero />

    <SectionSolutions :items="solutions" />

    <SectionFeatures :items="features" />

    <SectionPartner />

    <SectionDigitalization :items="digitalization" />

    <SectionBrochure />

    <SectionCustomers />

    <SectionContact />
  </div>
</template>

<script>
import SectionBrochure from '../components/section/SectionBrochure.vue'
export default {
    name: "IndexPage",
    async asyncData({ $content, params }) {
        const solutions = await $content("solutions", params.slug).sortBy("id", "asc").fetch();
        const features = await $content("features", params.slug).sortBy("id", "asc").fetch();
        const digitalization = await $content("digitalization", params.slug).sortBy("id", "asc").fetch();
        return {
            solutions,
            features,
            digitalization,
        };
    },
    components: { SectionBrochure }
}
</script>
