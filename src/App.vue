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
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class='body-1'>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="primary theme--dark" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>eWizard Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
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

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
          { title: 'e-Detailers', icon: 'photo_library' },
          { title: 'Email Templates', icon: 'email' },
          { title: 'Call Flows', icon: 'image' },
          { title: 'Surveys', icon: 'help_outline' },
          { title: 'Microsites', icon: 'view_compact' }
        ],
      toolbarIcons: [
          { icon: 'build' },
          { icon: 'help' },
          { icon: 'notifications' },
      ]
    }
  },
  name: 'App'
}
</script>

<style scoped>
.list--dense {
  color: white;
}
</style>
