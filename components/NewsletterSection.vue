<script setup>
</script>

<template>
  <form class="max-w-[720px] mx-auto">
    <div class="flex flex-wrap gap-5 justify-center lg:justify-between">
      <div>
        <label class="font-bold font-open-sans text-xs" for="name"
          >NOMBRE</label
        >
        <input
          id="name"
          type="text"
          class="bg-white mt-2 border border-[#CFCFCF] w-[350px] text-[#3F4544] text-sm focus:outline-none focus:border-meat-yellow block px-[22px] py-3"
          required
        />
      </div>
      <div>
        <label class="font-bold font-open-sans text-xs" for="lastname"
          >APELLIDO</label
        >
        <input
          id="lastname"
          type="text"
          class="bg-white mt-2 border border-[#CFCFCF] w-[350px] text-[#3F4544] text-sm focus:outline-none focus:border-meat-yellow block px-[22px] py-3"
          required
        />
      </div>

      <div>
        <label class="font-bold font-open-sans text-xs" for="mail">MAIL</label>
        <input
          id="mail"
          type="email"
          class="bg-white mt-2 border border-[#CFCFCF] w-[350px] text-[#3F4544] text-sm focus:outline-none focus:border-meat-yellow block px-[22px] py-3"
          required
        />
      </div>

      <div>
        <label class="font-bold font-open-sans text-xs uppercase" for="phone"
          >téléfono</label
        >
        <input
          id="phone"
          type="tel"
          class="bg-white mt-2 border border-[#CFCFCF] w-[350px] text-[#3F4544] text-sm focus:outline-none focus:border-meat-yellow block px-[22px] py-3"
          required
        />
      </div>
    </div>

    <button
      class="block mx-auto lg:mx-0 lg:ml-auto mt-8 rounded-full bg-meat-yellow px-12 py-4 text-sm font-bold font-open-sans text-white hover:bg-meat-blue disabled:bg-[#CFCFCF]"
    >
      ENVIAR
    </button>
  </form>
</template>

