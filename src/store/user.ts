import { defineStore } from "pinia";


export const userStore = defineStore("userStore", {
  actions: {
    updateUsername(username: string) {
      if (username && username.length < 10) {
        this.username = username;
      }
    }
  },
  getters: {
    getUsername(): string {
      return this.username.toUpperCase();
    }
  },
  state() {
    return {
      username: '---'
    };
  }
})