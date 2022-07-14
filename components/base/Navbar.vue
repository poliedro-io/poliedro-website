<template>
  <nav id="navbar" class="shadow-lg fixed top-0 left-0 right-0 bg-gray-800 z-10">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <div>
            <span class="sr-only">Descargar Brochure</span>
            <button
              v-on:click="downloadBrochure"
              href=""
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <DownloadIcon />
            </button>

            <button
              id="menu-button"
              v-on:click="toggleMenu"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
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
                v-smooth-scroll
                v-for="(item, index) of sections"
                v-bind:key="index"
                :href="item.id"
                :class="'navbar-item ' + (isSelected(item.id) ? 'selected' : '')"
                aria-current="page"
                >{{ item.title }}</a
              >
            </div>
          </div>
          <button v-on:click="downloadBrochure" class="navbar-button hidden sm:block">Descargar Brochure</button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" :class="'overflow-hidden sm:hidden ' + (!isMenuActive ? 'closed' : '')">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-bind:key="index"
          v-on:click="isMenuActive = false"
          v-smooth-scroll
          v-for="(item, index) of sections"
          :href="item.id"
          :class="'navbar-item ' + (isSelected(item.id) ? 'selected' : '')"
          aria-current="page"
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

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', (event) => {
      const navbar = document.getElementById('navbar')
      const menu = document.getElementById('mobile-menu')
      const isClickOnNavbar = navbar.contains(event.target)
      const isClickOnMenu = menu.contains(event.target)
      if (!isClickOnNavbar && !isClickOnMenu) {
        this.isMenuActive = false
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
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

.navbar-button {
  @apply text-white bg-primary-700 hover:bg-primary-800 px-3 py-2 rounded-md text-base font-medium;
}

.navbar-item {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium;
}

.navbar-item.selected {
  transition: background 150ms ease-in-out;
  @apply bg-gray-900 text-white;
}
</style>
