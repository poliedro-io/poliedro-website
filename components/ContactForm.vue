<template>
  <form name="contact" class="md:flex md:items-center" method="post" data-netlify="true" netlify-honeypot="test-field">
    <input type="hidden" name="form-name" value="contact" />

    <div class="rounded-md overflow-hidden hover:shadow-xl transition">
      <div class="hidden md:block py-6 px-4  md:bg-gray-100">
          <p class="text-xl text-gray-600 font-medium">Formulario de contacto</p>
        </div>
      <div class="md:px-4 md:py-5 md:bg-white md:p-6">
        <div class="grid grid-cols-2 gap-4 md:gap-6">
          <div class="col-span-2 sm:col-span-1">
            <div class="hidden">
              <label> Test field: <input name="test-field" /> </label>
            </div>
            <label for="email" class="block text-sm font-medium text-gray-300 md:text-primary-600">Email*</label>
            <input
              type="text"
              name="email"
              autocomplete="email"
              required
              placeholder="ejemplo@gmail.com"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2 sm:col-span-1">
            <label for="nombre" class="block text-sm font-medium text-gray-300 md:text-primary-600">Teléfono</label>
            <input
              type="text"
              name="telefono"
              autocomplete="tel"
              placeholder="+569 12345678"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div class="col-span-2">
            <label for="mensaje" class="block text-sm font-medium text-gray-300 md:text-primary-600">Mensaje*</label>
            <div class="mt-1">
              <textarea
                name="mensaje"
                rows="5"
                required
                class="shadow-sm focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Necesito digitalizar todos los procesos de mi empresa"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="py-6 md:p-4  md:bg-gray-100 text-right">
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
