import { computed, ref, onMounted } from "vue";
import { useJokeStore } from "../stores/jokeStores";
import type { Joke } from "../types/Jokes";

export function useJokes() {
  const store = useJokeStore();

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchNewJoke = async () => {
    try {
      isLoading.value = true;
      error.value = null;

      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data: Joke = await res.json();

      store.resetForwardHistory();
      store.addJoke(data);
      store.goToLast();
    } catch {
      error.value = "Failed to fetch a new joke.";
    } finally {
      isLoading.value = false;
    }
  };

  const next = async () => {
    if (store.currentPage === store.jokes.length) {
      await fetchNewJoke();
    } else {
      store.nextPage();
    }
  };

  const prev = () => {
    store.prevPage();
  };

  const resetAll = async () => {
    store.reset();
    await fetchNewJoke();
  };

  const currentJoke = computed(
    () => store.jokes[store.currentPage - 1] || null
  );
  const totalPages = computed(() => store.jokes.length);
  const currentIndex = computed(() => store.currentPage);

  onMounted(async () => {
    if (store.jokes.length === 0) {
      await fetchNewJoke();
    }
  });

  return {
    isLoading,
    error,
    currentJoke,
    totalPages,
    currentIndex,
    next,
    prev,
    fetchNewJoke,
    resetAll,
  };
}
