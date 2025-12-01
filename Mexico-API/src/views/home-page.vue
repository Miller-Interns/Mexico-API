<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function goToContent() {
  router.push("/content"); 
}
</script>

<style scoped>

.home-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f0f4ff;
}

.card {
  background: white;
  padding: 40px 30px;
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 25px;
}

.next-button {
  padding: 12px 24px;
  font-size: 1rem;
  background: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.next-button:hover {
  background: #f5f5f5;
}

</style>

<template>
  <div class="home-wrapper">
    <div class="card">
      <h1 class="title">Mexico API Exercise</h1>

      <p class="description">
        This will contain the description.
      </p>

      <button class="next-button" @click="goToContent">
        Go to Content
      </button>
    </div>
  </div>
</template>


