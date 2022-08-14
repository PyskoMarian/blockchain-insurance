<template>
  <div class="landing-page">
    <div class="container">
      <header class="header">
        <div class="header__logo">
          <a href="#">BrandName</a>
        </div>
        <div class="header__nav">
          <ul class="header__nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div class="header__nav-auth">
            <template v-if="!auth.user">
              <router-link to="/login" class="btn btn-link">Login</router-link>
            </template>
            <template v-else>
              <button @click="auth.logout()">logout</button>
            </template>
            <a href="#" class="btn primary">Become a member</a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background: #cccccc;

  &__logo {
    display: flex;
    align-items: center;

    a {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.1px;
      color: #ffffff;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    min-width: 850px;

    &-links {
      display: flex;
      margin: 17px 0;

      li {
        list-style: none;
        padding-right: 21px;

        a {
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.2px;
          color: #ffffff;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }

    &-auth {
      display: flex;
      align-items: center;
    }
  }
}
</style>
