<script setup>
import ArticleCard from "./ArticleCard";

const isActiveArticle = ref("todos");
const articles = ref([]);

const fetchingFilter = async () => {
  const { data } = await useFetch(
    () => `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles`,
    {
      params: {
        filter: isActiveArticle.value === "todos" ? "" : isActiveArticle.value,
      },
    }
  );
  articles.value = data.value;
};

onMounted(() => {
  fetchingFilter();
});

watch(isActiveArticle, () => {
  fetchingFilter();
});

const filters = ["todos", "productos", "recetas", "consejos"];

const handleFilter = (filter) => {
  isActiveArticle.value = filter;
};
</script>

<template>
  <div
    class="flex justify-center flex-col items-center md:flex-row md:items-start gap-4"
  >
    <div
      class="flex flex-col flex-4 md:w-[500px] max-w-[268px] items-center w-full md:items-start gap-8 p-7 bg-white drop-shadow-meat-shadow rounded-xl"
    >
      <button
        v-for="filter in filters"
        :key="filter"
        class="uppercase"
        :class="{
          'text-meat-yellow font-bold': isActiveArticle === filter,
        }"
        @click="() => handleFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <div
      class="flex flex-1 gap-8 flex-wrap max-w-[1200px] justify-center md:justify-start"
    >
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
