<template>
  <div class="login">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="password"
        label="Your password"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const $q = useQuasar();

const email = ref<string>("");
const password = ref<string>("");
const accept = ref(false);

const auth = useAuthStore();
const router = useRouter();

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    login();
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
}

function login() {
  try {
    auth.login({ email: email.value, password: password.value });
    router.push({ path: "/" });
  } catch (error) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Invalid",
    });
  }
}
</script>

<style lang="scss"></style>
