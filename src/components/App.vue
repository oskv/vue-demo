<template>
  <v-app>
    <v-navigation-drawer fixed temporary v-model="drawer" class='primary'>
      <v-toolbar flat class="primary theme--dark">
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              eWizard
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0 menu-items">
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class='body-1'>
              <router-link :to='item.href'>{{ item.title }}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="primary theme--dark" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $t("common.menu.edetailers") }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon @click='setLang("en")'>EN</v-btn>
        <v-btn icon @click='setLang("ru")'>RU</v-btn>
        <v-btn icon v-for="item in toolbarIcons" :key="item.icon">
          <v-icon small >{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang='ts'>
//import routes from '../router'
import Vue from "vue";

export default Vue.extend({
  data () {
    return {
      drawer: false,
      menuItems: [
          { title: 'e-Detailers', icon: 'photo_library', href:'/' },
          { title: 'Email Templates', icon: 'email', href:'/emails'},
          { title: 'Call Flows', icon: 'image', href:'/'},
          { title: 'Surveys', icon: 'help_outline', href:'/'},
          { title: 'Microsites', icon: 'view_compact', href:'/'}
        ],
      toolbarIcons: [
          { icon: 'build' },
          { icon: 'help' },
          { icon: 'notifications' },
      ]
    }
  },
  methods: {
    setLang (lang: string) {
      this.$i18n.locale = lang;
    }
  },
  name: 'App'
});
</script>

<style scoped>
.list--dense {
  color: white;
}
.menu-items a{
  color: white;
  text-decoration: none;
  font-weight: 500;
}
</style>
