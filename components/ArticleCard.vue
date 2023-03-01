<script setup>
const props = defineProps({
  article: [],
});
</script>

<template>
  <div
    class="w-[16.875rem] rounded-xl overflow-hidden drop-shadow-meat-shadow group transition-all"
  >
    <img :src="article.image" width="270" height="200" alt="Image Preview" />

    <div class="bg-white px-[26px] py-9 transition-all">
      <p
        class="text-lg font-open-sans font-bold mb-2 group-hover:text-meat-yellow"
      >
        {{ article.title }}
      </p>
      <p class="text-sm font-open-sans">
        {{ article.content }}
      </p>

      <a
        href="#"
        class="uppercase mt-5 text-meat-yellow text-sm font-bold hidden group-hover:block"
        >ver más</a
      >
    </div>
  </div>
</template>
