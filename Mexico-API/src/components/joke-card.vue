<script setup lang="ts">
import { ref, watch } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import Skeleton from "primevue/skeleton";
import type { Joke } from "../types/Jokes";

const props = defineProps<{
    joke: Joke | null;
    loading: boolean;
}>();

const reveal = ref(false);

watch(
    () => props.joke,
    () => {
        reveal.value = false;
    }
);
</script>

<template>
    <Card class="w-full max-w-xl mx-auto shadow-md rounded-xl">
        <template #content>
            <div class="p-6 space-y-6">

                <div v-if="loading" class="space-y-3">
                    <Skeleton height="1.5rem" />
                    <Skeleton width="80%" height="1.5rem" />
                </div>

                <div v-else-if="joke" class="space-y-6">
                    <p class="text-xl font-medium text-center">{{ joke.setup }}</p>

                    <div v-if="reveal" class="text-gray-600 text-center">
                        {{ joke.punchline }}
                    </div>

                    <div v-else class="flex justify-center">
                        <Button label="Reveal Punchline" icon="pi pi-eye" class="p-button-sm" @click="reveal = true" />
                    </div>
                </div>

                <div v-else class="text-gray-500 text-center">
                    No joke loaded.
                </div>

            </div>
        </template>
    </Card>
</template>
