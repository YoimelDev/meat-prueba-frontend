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

  <div class="relative h-[25rem] xl:h-screen">
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
</template>
