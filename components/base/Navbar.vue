<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <nav
      id="navbar"
      :class="[
        'transition duration-150 relative',
        isNavbarActive || isMenuActive ? 'bg-gray-900 shadow-xl' : 'bg-white',
      ]"
    >
      <div class="max-w-7xl mx-auto px-2 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 right-0 flex items-center xl:hidden">
            <button
              id="menu-button"
              type="button"
              :class="[
                isNavbarActive || isMenuActive ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-800 hover:text-white',
                'inline-flex items-center justify-center active:bg-none p-2 rounded-full  focus:outline-none',
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

          <div class="flex-1 flex items-center lg:justify-between">
            <a href="#hero" class="flex-shrink-0 flex items-center cursor-pointer" v-smooth-scroll>
              <nuxt-img
                placeholder
                loading="lazy"
                :class="[{ invert: !isNavbarActive && !isMenuActive }, 'h-8 w-auto']"
                src="/img/logo-lg.svg"
                width="200"
                height="100"
                alt="Logo poliedro grande"
              />
            </a>
            <div class="hidden xl:block">
              <div class="flex align-center space-x-4">
                <a
                  v-for="(item, index) of sections"
                  :key="index"
                  v-smooth-scroll
                  :href="item.id"
                  v-bind:class="[{ selected: isSelected(item.id) }, { alt: !isNavbarActive }, 'navbar-item']"
                  aria-current="page"
                  >{{ item.title }}</a
                >
              </div>
            </div>

            <div class="space-x-2 hidden xl:flex">
              <a v-bind:class="[{ alt: !isNavbarActive }, 'navbar-button']" href="https://wa.me/56964033243">
                Enviar Whatsapp</a
              >
              <a v-bind:class="[{ alt: !isNavbarActive }, 'navbar-button']" :href="brochureURL" target="_blank">
                Descargar Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" :class="['bg-gray-800 xl:hidden shadow-xl', isMenuActive ? 'active' : '']">
        <div class="py-4 space-y-2">
          <a
            v-for="(item, index) of sections"
            :key="index"
            v-smooth-scroll
            :href="item.id"
            v-bind:class="[{ selected: isSelected(item.id) }, 'navbar-item']"
            aria-current="page"
            @click="isMenuActive = false"
            >{{ item.title }}</a
          >
        </div>
        <div class="py-4 space-y-2 border-t border-gray-600">
          <a href="https://wa.me/56964033243" class="navbar-item yellow" aria-current="page">Enviar whatsapp</a>
          <a v-smooth-scroll class="navbar-item yellow" aria-current="page" :href="brochureURL" target="_blank"
            >Descargar Brochure</a
          >
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
      { title: 'Funcionalidades', id: '#features' },
      { title: 'Partner digital', id: '#partner' },
      { title: 'Digitalización', id: '#digitalization' },
      { title: 'Clientes', id: '#customers' },
      { title: 'Contacto', id: '#contact' },
    ]
    return {
      open: false,
      dropdownNavbar: false,
      sections,
      currentId: null,
      isMenuActive: false,
      isNavbarActive: false,
      brochureURL: 'https://drive.google.com/file/d/1jNK6Rk6IWY_BHN9WnzZfDrWGZy_hkho_/view?usp=sharing',
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
      const height = window.innerHeight
      const y = window.scrollY
      this.isNavbarActive = height > 128
      const sections = []

      this.sections.foreEach((section) => {
        const { top, bottom } = document.querySelector(section.id).getBoundingClientRect()
        if (top < y && y < bottom) {
          sections.push(section)
        }
      })
      const current = sections[sections.length - 1]
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
.invert {
  filter: invert(1);
}
</style>
