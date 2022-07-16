<template>
  <BaseSection id="solutions">
    <div class="lg:text-center">
      <BaseHeader center supertitle="lo que hacemos" title="Desarrollamos soluciones digitales" />
    </div>

    <div class="my-16">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-14 xl:grid-cols-3">
        <BaseItem
          v-for="(item, index) in items || []"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </dl>
    </div>

    <BaseButton outlined>Saber más</BaseButton>
  </BaseSection>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  mixins: [aosMixin],
  props: ['items'],
}
</script>
