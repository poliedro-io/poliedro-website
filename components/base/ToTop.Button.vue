<template>
    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        href="#hero"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Volver arriba</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
</template>

<script>
export default {
  name: 'BaseToTopButton'
}
</script>