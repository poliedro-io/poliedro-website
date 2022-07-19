<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="w-full lg:grid lg:grid-cols-3 lg:gap-8 lg:divide-x">
        <a class="pl-4 py-6" v-smooth-scroll href="#hero">
          <img
            :src="require('~/assets/img/logo-lg.svg')"
            class="invert opacity-70 hover:opacity-100 h-16"
            alt="Logo Poliedro"
          />
        </a>

        <div class="pl-4 py-6">
          <p class="text-lg text-semibold text-gray-800 mb-6">Contacto</p>
          <ul class="space-y-4">
            <div v-for="(item, index) of contact" :key="index" class="flex space-x-4">
              <component v-bind:is="item.icon"></component>
              <NavLink :name="item.text" :url="item.url" />
            </div>
          </ul>
        </div>

        <div class="pl-4 py-6">
          <p class="text-lg text-semibold text-gray-800 mb-6">Secciones</p>
          <ul class="space-y-4">
            <NavLink v-for="(item, index) of sections" :key="index" :name="item.text" :url="item.url" />
          </ul>
        </div>
      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900">
      &reg; Poliedro ltda. 2022. Todos los derechos reservados
    </div>
  </footer>
</template>
<script>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import PhoneOutlineIcon from 'vue-material-design-icons/PhoneOutline.vue'
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue'
import WhatsappIcon from 'vue-material-design-icons/Whatsapp.vue'
export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    PhoneOutlineIcon,
    EmailOutlineIcon,
    WhatsappIcon,
  },
  name: 'BaseFooter',
  data() {
    return {
      contact: [
        {
          text: '+569 64033243',
          icon: WhatsappIcon,
          url: 'https://wa.me/56964033243',
        },
        {
          text: '+569 64033243',
          icon: PhoneOutlineIcon,
          url: 'tel:56964033243',
        },
        {
          text: 'contacto@poliedro.io',
          icon: EmailOutlineIcon,
          url: 'mailto: contacto@poliedro.io',
        },
        {
          text: '@poliedro.io',
          icon: InstagramIcon,
          url: 'https://www.instagram.com/poliedro.io/',
        },
        // {
        //   text: 'Facebook',
        //   icon: FacebookIcon,
        //   url: 'facebook.svg',
        // },
      ],
      sections: [
        { text: 'Servicios', url: '#services' },
        { text: 'Funcionalidades', url: '#features' },
        { text: 'Garantías', url: '#guarantees' },
        { text: 'Clientes', url: '#customers' },
        { text: 'Contacto', url: '#contact' },
      ],
    }
  },
}
</script>

<style scoped>
.invert {
  filter: invert(1);
}
</style>
