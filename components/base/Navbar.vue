<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <nav
      id="navbar"
      :class="`transition duration-150 relative bg-${isNavbarActive || isMenuActive ? 'gray-800 shadow-xl' : 'white'}`"
    >
      <div class="max-w-7xl mx-auto px-2 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              id="menu-button"
              type="button"
              v-bind:class="[
                { 'text-gray-400 hover:bg-gray-700': isNavbarActive || isMenuActive },
                'inline-flex items-center justify-center active:bg-none p-2 rounded-full hover:text-white focus:outline-none text-gray-800',
              ]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleMenu"
            >
              <span class="sr-only">Abrir Menu</span>
              <MenuIcon v-if="!isMenuActive" />
              <CloseIcon v-else />
            </button>
          </div>

          <div class="flex-1 flex items-center lg:items-stretch lg:justify-between">
            <a href="#hero" class="flex-shrink-0 flex items-center cursor-pointer" v-smooth-scroll>
              <img
                v-bind:class="[{'filter invert': !isNavbarActive && !isMenuActive }, 'h-8 w-auto']"
                src="~/assets/img/logo-lg.svg"
                alt="Workflow"
              />
            </a>
            <div class="hidden lg:block">
              <div class="flex space-x-4">
                <a
                  v-for="(item, index) of sections"
                  :key="index"
                  v-smooth-scroll
                  :href="item.id"
                  v-bind:class="[{selected: isSelected(item.id)}, {'alt': !isNavbarActive}, 'navbar-item']"
                  aria-current="page"
                  >{{ item.title }}</a
                >
              </div>
            </div>

            <div class="flex space-x-2">
              <a v-smooth-scroll v-bind:class="[{'alt': !isNavbarActive}, 'hidden lg:block navbar-button']" href="#contact"> Contactar</a>
              <button v-bind:class="[{'alt': !isNavbarActive}, 'hidden lg:block navbar-button']" @click="downloadBrochure">Descargar Brochure</button>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" :class="'bg-gray-800 lg:hidden shadow-xl ' + (isMenuActive ? 'active' : '')">
        <div class="px-2 pt-2 pb-3 space-y-2">
          <a
            v-for="(item, index) of sections"
            :key="index"
            v-smooth-scroll
            :href="item.id"
            v-bind:class="[{'selected':isSelected(item.id)}, 'navbar-item']"
            aria-current="page"
            @click="isMenuActive = false"
            >{{ item.title }}</a
          >
          <div class="flex flex-col space-y-2 mt-2">
            <a v-smooth-scroll href="#contact" class="navbar-button">Contactar</a>
            <a v-smooth-scroll class="navbar-button" aria-current="page" @click="downloadBrochure"
              >Descargar Brochure</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
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
      // { title: 'Contacto', id: '#contact' },
    ]
    return {
      open: false,
      dropdownNavbar: false,
      sections,
      currentId: null,
      isMenuActive: false,
      isNavbarActive: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', (event) => {
      if (this.isMenuActive) {
        const navbar = document.getElementById('navbar')
        const menu = document.getElementById('mobile-menu')
        const isClickOnNavbar = navbar.contains(event.target)
        const isClickOnMenu = menu.contains(event.target)
        if (!isClickOnNavbar && !isClickOnMenu) {
          this.isMenuActive = false
        }
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.isMenuActive = false
      const h = window.innerHeight
      const y = window.scrollY
      this.isNavbarActive = y > 128

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
      setTimeout(() => {
        this.isMenuActive = !this.isMenuActive
      }, 5)
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
  position: absolute;
  opacity: 0;
  top: -356px;
  left: 0;
  right: 0;
  z-index: -1;
  transition: all 150ms ease-in-out;
}
.active {
  transform: translateY(calc(356px + 64px));
  opacity: 1 !important;
}

</style>
