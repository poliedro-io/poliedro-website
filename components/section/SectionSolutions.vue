<template>
  <BaseSection id="solutions">
    <div class="lg:text-center">
      <BaseHeader center supertitle="lo que hacemos" title="Desarrollamos soluciones digitales" />
    </div>

    <div class="my-16">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-16">
        <div v-for="(item, index) in items" :key="index" class="relative group">
          <dt>
            <div class="absolute flex items-center justify-center h-14 w-14 rounded-md bg-primary-500 text-white p-4">
              <component v-bind:is="item.icon"></component>
            </div>
            <p class="ml-20 text-lg leading-6 font-medium text-gray-900">{{ item.title }}</p>
          </dt>
          <dd class="mt-2 ml-20 text-base text-gray-500">
            {{ item.description }}
          </dd>
        </div>
      </dl>
    </div>

    <BaseButton>Saber más</BaseButton>
  </BaseSection>
</template>

<script>
import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue';
import MapMarkerOutlineIcon from 'vue-material-design-icons/MapMarkerOutline.vue';
import WarehouseIcon from 'vue-material-design-icons/Warehouse.vue';
import CalendarOutlineIcon from 'vue-material-design-icons/CalendarOutline.vue';
import FinanceIcon from 'vue-material-design-icons/Finance.vue';
import ToolsIcon from 'vue-material-design-icons/Tools.vue';
import aosMixin from '@/mixins/aos';

export default {
  mixins: [aosMixin],
  data() {
    return {
      items: [
        {
          icon: CartOutlineIcon,
          title: 'E-commerce y catálogo digital',
          description: 'Venta online con boleta electrónica SII ',
        },
        {
          icon: FinanceIcon,
          title: 'Gestión de proyectos y finanzas',
          description: '... la descripcion',
        },
        {
          icon: MapMarkerOutlineIcon,
          title: 'Georeferenciación y optimización de rutas',
          description: '',
        },
        {
          icon: CalendarOutlineIcon,
          title: 'Agendamiento y reservas',
          description: '... la descripcion',
        },
        {
          icon: WarehouseIcon,
          title: 'Gestión de stock y puntos de venta',
          description: '... la descripcion',
        },
        {
          icon: ToolsIcon,
          title: 'Mantenciones y control de calidad',
          description: '... la descripcion',
        },
      ],
    }
  },
}
</script>
