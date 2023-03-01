<script setup>
import ArticleCard from "./components/ArticleCard";
</script>

<template>
  <Html lang="es">
    <Head>
      <Title>El secreto de tu cocina</Title>
      <Meta name="description" content="El secreto de tu cocina" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  </Html>

  <div class="relative h-[400px] xl:h-screen">
    <header
      class="flex flex-col items-center justify-between gap-4 xl:gap-0 md:px-32 md:flex-row pt-5 md:pt-10"
    >
      <h2 class="font-caveat text-5xl xl:text-8xl text-meat-gray font-bold">
        Logo
      </h2>

      <div class="flex gap-5">
        <a href="#">
          <img src="~/assets/img/Facebook.svg" alt="Facebook image" />
        </a>

        <a href="#">
          <img src="~/assets/img/Instagram.svg" alt="Instagram image" />
        </a>

        <a href="#">
          <img src="~/assets/img/Youtube.svg" alt="Youtube image" />
        </a>
      </div>
    </header>

    <div class="absolute top-0 h-full w-full -z-10">
      <img src="~/assets/img/hero.png" class="w-full" alt="Hero image" />
    </div>

    <div class="absolute w-full bottom-[35%] px-5 md:px-32">
      <h1 class="text-meat-gray font-caveat font-bold text-5xl xl:text-9xl">
        El secreto <br />
        de tu cocina
      </h1>

      <img
        src="~/assets/img/brush.png"
        class="absolute w-full left-[-50%] top-[50%] md:top-[20%] xl:top-[35%] -z-10"
        alt="Brush image"
      />
    </div>
  </div>

  <main class="md:px-32 mb-10">
    <section>
      <div class="flex flex-col items-center md:w-[640px] mx-auto mt-10 mb-20">
        <h2
          class="font-caveat font-bold text-meat-gray text-4xl md:text-8xl text-center relative after:content-[' '] after:bg-brush after:absolute after:left-0 after:bottom-[-35px] after:w-full after:h-20 after:bg-cover after:opacity-20"
        >
          Nuestros articulos
        </h2>
      </div>

      <div
        class="flex justify-center flex-col items-center md:flex-row md:items-start gap-4"
      >
        <div
          class="flex flex-col flex-4 md:w-[500px] max-w-[268px] items-start gap-8 p-7 bg-white drop-shadow-meat-shadow rounded-xl"
        >
          <button>TODOS</button>
          <button>PRODUCTOS</button>
          <button>RECETAS</button>
          <button>CONSEJOS</button>
        </div>

        <div
          class="flex flex-1 gap-8 flex-wrap max-w-[1200px] justify-center md:justify-start"
        >
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col items-center md:w-[640px] mx-auto mt-10 mb-12">
        <h2
          class="font-caveat font-bold text-meat-gray text-4xl md:text-8xl text-center relative after:content-[' '] after:bg-brush after:absolute after:left-0 after:bottom-[-35px] after:w-full after:h-20 after:bg-cover after:opacity-20"
        >
          Contáctanos
        </h2>
      </div>

      <form class="max-w-[720px] mx-auto">
        <div class="flex flex-wrap gap-5 justify-between">
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
            <label class="font-bold font-open-sans text-xs" for="mail"
              >MAIL</label
            >
            <input
              id="mail"
              type="email"
              class="bg-white mt-2 border border-[#CFCFCF] w-[350px] text-[#3F4544] text-sm focus:outline-none focus:border-meat-yellow block px-[22px] py-3"
              required
            />
          </div>

          <div>
            <label
              class="font-bold font-open-sans text-xs uppercase"
              for="phone"
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
          class="block ml-auto mt-8 rounded-full bg-meat-yellow px-12 py-4 text-sm font-bold font-open-sans text-white hover:bg-meat-blue disabled:bg-[#CFCFCF]"
        >
          ENVIAR
        </button>
      </form>
    </section>
  </main>
</template>
