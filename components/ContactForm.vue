<template>
  <form name="contact" class="md:flex md:items-center" netlify>
    <div class="md:shadow-lg rounded-md">
      <div class="md:px-4 md:py-5 md:bg-white md:p-6">
        <div class="grid grid-cols-2 gap-4 md:gap-6">
          <div class="col-span-2 sm:col-span-1">
            <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
            <input
              id="email"
              type="text"
              name="email"
              autocomplete="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="area" class="block text-sm font-medium text-gray-700">Rubro*</label>
            <select
              id="area"
              name="area"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option v-for="item of items" :key="item">{{ item }}</option>
            </select>
          </div>

           <div class="col-span-2 sm:col-span-1">
            <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="commune" class="block text-sm font-medium text-gray-700">Comuna</label>
            <input
              id="commune"
              type="text"
              name="commune"
              class="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="5"
                class="shadow-sm focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="md:px-6 py-3 md:bg-gray-50 text-right">
        <BaseButton type="submit">Enviar</BaseButton>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      items: ['Minería', 'Construcción', 'Retail', 'Agricultura', 'Courier / Transfer', 'Otro'],
    }
  },
}
</script>
