<template>
  <section id="solutions" class="relative max-w-full sm:mx-4 my-20 py-16 overflow-hidden">
    <BaseSection>
      <LandingSolutionsImage class="sm:hidden mb-8" />
      <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
        <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
          Contáctanos
        </h2>
        <p class="paragraph">
          Conersemos sobre tu solucion bla bla bla
        </p>

        <p class="paragraph">
          La versatilidad y experiencia de nuestro equipo nos permite abordar problemáticas de diversos rubros de manera
          orgánica, logrando soluciones eficientes e intuitivas para nuestros clientes.
        </p>
      </div>
      <LandingSolutionsImage data-aos="fade-left" class="hidden sm:block" />
    </BaseSection>

    <BaseSection>
    <div  class="col-span-12">
      EL FORMULARIO DE CONTACTO
    </div>
    </BaseSection>

  </section>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      apps: [
        {
          icon: 'shopping-cart.png',
          title: 'E-commerce y catálogo digital',
          description: '... la descripcion',
          color: 'red',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Gestión de proyectis y finanzas',
          description: '... la descripcion',
          color: 'indigo',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Georeferenciación y optimización de rutas',
          description: '... la descripcion',
          color: 'yellow',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Agendamiento y reservas',
          description: '... la descripcion',
          color: 'lime',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Punto de venta y gestión de stock',
          description: '... la descripcion',
          color: 'orange',
        },
        {
          icon: 'shopping-cart.png',
          title: 'Mantenciones y control de calidad',
          description: '... la descripcion',
          color: 'violet',
        },
      ],
    }
  },
}
</script>
