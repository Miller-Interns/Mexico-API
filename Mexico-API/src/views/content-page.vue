<script setup lang="ts">
import Button from "primevue/button";
import JokeCard from "../components/joke-card.vue";
import { useJokes } from "../composables/useJokes";

const {
  currentJoke,
  totalPages,
  currentIndex,
  next,
  prev,
  isLoading,
  error,
  resetAll,
} = useJokes();
</script>

<template>
  <div class="min-h-screen py-16 px-4 bg-gray-100 flex justify-center">
    <div class="w-full max-w-2xl space-y-10">

      <div class="text-center space-y-2">
        <h1 class="text-4xl font-semibold text-gray-900">Random Jokes</h1>
        <p class="text-gray-600">Browse jokes one at a time.</p>
      </div>

      <div class="flex justify-center">
        <Button label="Reset" icon="pi pi-refresh" class="px-6 py-3 text-lg" @click="resetAll" />
      </div>

      <div v-if="error" class="text-red-600 text-center text-lg">
        {{ error }}
      </div>

      <div class="flex justify-center">
        <div class="w-full">
          <div class="min-h-[220px] flex items-center">
            <JokeCard v-if="currentJoke || isLoading" :joke="currentJoke" :loading="isLoading" />
          </div>
        </div>
      </div>

      <div v-if="currentJoke" class="flex items-center justify-between pt-2">
        <Button label="Previous" icon="pi pi-angle-left" :disabled="currentIndex <= 1" @click="prev" />

        <span class="text-gray-700 text-sm font-medium">
          Joke {{ currentIndex }} of {{ totalPages }}
        </span>

        <Button label="Next" icon="pi pi-angle-right" iconPos="right" @click="next" />
      </div>

    </div>
  </div>
</template>
