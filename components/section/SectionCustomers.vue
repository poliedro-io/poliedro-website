<template>
      <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
         <h2 class="text-4xl font-semibold">
            Algunos de nuestros clientes
          </h2>        <p data-aos="flip-down" class="paragraph">
            Somos partners digitales de nuestros clientes... bla bla bla
            </p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            customers: [
                {
                    name: '',
                    url: '',
                    logo: ''
                }
            ]
        }
    }
}
</script>

<style>

</style>