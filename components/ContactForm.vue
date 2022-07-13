<template>
  <form class="md:flex md:items-center" action="#" method="POST">
    <div class="md:shadow-lg overflow-hidden rounded-md">
      <div class="md:px-4 md:py-5 md:bg-white md:p-6">
        <div class="grid grid-cols-2 gap-6">
          <div class="col-span-2 sm:col-span-1">
            <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              autocomplete="email"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="item" class="block text-sm font-medium text-gray-700">Rubro*</label>
            <select
              id="item"
              name="item"
              autocomplete="item"
              class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option v-for="item of items" v-bind:key="item">{{ item }}</option>
            </select>
          </div>

           <div class="col-span-2 sm:col-span-1">
            <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="commune" class="block text-sm font-medium text-gray-700">Comuna</label>
            <input
              type="text"
              name="commune"
              id="commune"
              autocomplete="commune"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="5"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Escribe tu consulta"
              ></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
          </div>
        </div>
      </div>
      <div class="md:px-6 py-3 md:bg-gray-50 text-right">
        <button
          type="submit"
          class="w-full md:w-fit inline-flex justify-center py-2 md:px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
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
