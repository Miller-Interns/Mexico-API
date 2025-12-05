import { defineStore } from "pinia";
import type { Joke } from "../types/Jokes";

export const useJokeStore = defineStore("jokeStore", {
  state: () => ({
    jokes: [] as Joke[],
    currentPage: 1,
  }),

  actions: {
    addJoke(joke: Joke) {
      this.jokes.push(joke);
      this.save();
    },

    resetForwardHistory() {
      if (this.currentPage < this.jokes.length) {
        this.jokes = this.jokes.slice(0, this.currentPage);
        this.save();
      }
    },

    nextPage() {
      if (this.currentPage < this.jokes.length) {
        this.currentPage++;
        this.save();
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.save();
      }
    },

    goToLast() {
      this.currentPage = this.jokes.length;
      this.save();
    },

    reset() {
      this.jokes = [];
      this.currentPage = 1;
      this.save();
    },

    save() {
      sessionStorage.setItem(
        "jokesState",
        JSON.stringify({
          jokes: this.jokes,
          currentPage: this.currentPage,
        })
      );
    },

    restore() {
      const data = sessionStorage.getItem("jokesState");
      if (!data) return;

      const parsed = JSON.parse(data);
      this.jokes = parsed.jokes || [];
      this.currentPage = parsed.currentPage || 1;
    },
  },
});
