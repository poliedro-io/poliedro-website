<template>
  <BaseSection :id="'digitalization'">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <BaseHeader
          :title="'Beneficios de la Digitalización'"
          :supertitle="'el supertitulo'"
        />

        <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
        <ul class="space-y-4 sm:space-y-2">
          <LandingListItem title="Up to 3% back on purchases" />
          <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
          <LandingListItem title="No annual fee" />
        </ul>
        <BaseButton
          class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
          >Join the waitlist</BaseButton
        >
      </div>

      <BaseImage :name="'nefa-cc.webp'" />
    </div>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      guarantees: ['La garantía', 'Otra garantía'],
    }
  },
}
</script>
