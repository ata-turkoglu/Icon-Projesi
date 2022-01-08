<template>
  <v-app>
    <v-app-bar color="mavi" dark class="align-top">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Üst Menu</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="koyumavi" dark>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="koyumavi--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon class="align-center" :class="darkMode">
              <v-switch color="indigo"></v-switch>
            </v-list-item-icon>
            <v-list-item-title>Dark Mode</v-list-item-title>
          </v-list-item>

          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item href="/Account">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item href="/About">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-footer color="mavi" padless>
        <v-row justify="center" no-gutters>
          <v-col class="py-3 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>İcon Projesi</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HamburgerMenu",

  data: () => ({
    drawer: false,
    group: null,
    darkMode: "light",
  }),
});
</script>
