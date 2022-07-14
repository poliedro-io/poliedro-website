<template>
  <nav id="navbar" class="shadow-lg fixed top-0 left-0 right-0 bg-gray-800 z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <div>
            <span class="sr-only">Descargar Brochure</span>
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="downloadBrochure"
            >
              <DownloadIcon />
            </button>

            <button
              id="menu-button"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleMenu"
            >
              <span class="sr-only">Abrir Menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div class="flex-1 flex items-center sm:items-stretch sm:justify-between">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="~/assets/img/logo-lg.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <a
                v-for="(item, index) of sections"
                :key="index"
                v-smooth-scroll
                :href="item.id"
                :class="'navbar-item ' + (isSelected(item.id) ? 'selected' : '')"
                aria-current="page"
                >{{ item.title }}</a
              >
            </div>
          </div>
          <button class="navbar-button hidden sm:block" @click="downloadBrochure">Descargar Brochure</button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" :class="'overflow-hidden sm:hidden ' + (!isMenuActive ? 'closed' : '')">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="(item, index) of sections"
          :key="index"
          v-smooth-scroll
          :href="item.id"
          :class="'navbar-item ' + (isSelected(item.id) ? 'selected' : '')"
          aria-current="page"
          @click="isMenuActive = false"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    const sections = [
      { title: 'Soluciones', id: '#solutions' },
      { title: 'Características', id: '#features' },
      { title: 'Garantías', id: '#guarantees' },
      { title: 'Beneficios', id: '#benefits' },
      { title: 'Clientes', id: '#customers' },
      { title: 'Contacto', id: '#contact' },
    ]
    return {
      open: false,
      dropdownNavbar: false,
      sections,
      currentId: null,
      isMenuActive: false,
    }
  },
  methods: {
    handleScroll(event) {
      this.isMenuActive = false
      const h = window.innerHeight
      const current = this.sections.find(({ id }) => {
        const { top, bottom } = document.querySelector(id).getBoundingClientRect()
        return (top >= -h / 2 && top <= h / 2) || (bottom >= h / 2 && bottom <= h)
      })
      if (current) {
        this.currentId = current.id
      } else {
        this.currentId = null
      }
    },
    isSelected(id) {
      return id === this.currentId
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
    downloadBrochure() {
      const a = document.createElement('a')
      a.setAttribute('href', 'https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing')
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'brochure-poliedro.pdf')
      a.click()
    },
  },

 
}
</script>

<style scoped>
#mobile-menu {
  transition: height 150ms ease-in-out, opacity 150ms ease-in;
  height: 280px;
  opacity: 1;
}

.closed {
  transition: opacity 150ms ease-out, height 150ms ease-in-out 150ms !important;
  height: 0 !important;
  opacity: 0 !important;
}
</style>
