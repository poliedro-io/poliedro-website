<template>
  <nav id="navbar" class="fixed bg-white top-0 left-0 right-0 z-10 w-full text-neutral-800 shadow-lg">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-2">
          <div>
            <img :src="require('~/assets/img/logo/nefa.svg')" class="w-24 xl:w-28" alt="Nefa Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <NavLink v-bind:key="index" v-for="(section, index) in sections" :name="section.title" :url="section.url" />
        </ul>
      </div>
      <!-- <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          Login
        </base-button>
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
          Sign Up
        </base-button>
      </div> -->
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      sections: [
        {title: 'Soluciones', url: '#solutions'},
        {title: 'Características', url: '#features'},
        {title: 'Garantías', url: '#guarantees'},
        {title: 'Clientes', url: '#customers'},
        {title: 'Contacto', url: '#contact'},
        // {title: 'Tecnologías', url: '#'},
      ]
    }
  },
}
</script>
