import { defineStore } from "pinia";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import type { Details, AuthState } from "../models/auth.model";

export const useAuthStore = defineStore({
  id: "auth",
  state: () =>
    ({
      user: null,
    } as AuthState),
  actions: {
    async registration(details: Details) {
      const { email, password } = details;
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        this.user = res.user;
      } catch (error) {
        console.log(error);
      }
    },
    async login(details: Details) {
      const { email, password } = details;
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        this.user = res.user;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.log(error);
      }
    },
    checkAuth() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
    setUser(user: object | null) {
      this.user = user;
    },
  },
});
