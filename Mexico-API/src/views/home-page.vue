<script setup lang="ts">
import { useRouter } from "vue-router";
import Card from "primevue/card";
import Button from "primevue/button";
import { RoutePaths } from "../router/route-paths";

const router = useRouter();

const goToContent = () => {
  router.push(RoutePaths.CONTENT);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <Card class="w-full max-w-lg shadow-sm rounded-xl">
      <template #content>
        <div class="py-10 px-8 text-center space-y-6">

          <div class="flex justify-center">
            <div class="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center">
              <i class="pi pi-sparkles text-xl"></i>
            </div>
          </div>

          <h1 class="text-3xl font-semibold text-gray-900">
            Mexico - API Exercise
          </h1>

          <p class="text-gray-600 leading-relaxed">
            A Vue application built with PrimeVue and TailwindCSS.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Fetches jokes from a public API and presents them with simple pagination.
          </p>

          <Button label="View Content" @click="goToContent" class="px-5 py-2 text-base" />

        </div>
      </template>
    </Card>
  </div>
</template>
