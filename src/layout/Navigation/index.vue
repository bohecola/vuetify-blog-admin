<template>
  <div>
    <!-- app bar -->
    <v-app-bar height="64" color="primary" :elevation="4" :clipped-left="true" app dark>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- navigation drawer -->
    <v-navigation-drawer
      width="240"
      v-model="drawer"
      :mini-variant="mini"
      mini-variant-width="64"
      src="@/assets/background.png"
      :color="true ? 'primary' : null"
      dark
      clipped
      app
    >
      <!-- drawer menu -->
      <v-list flat>
        <template v-for="list in navList">
          <v-list-group
            class="white--text"
            v-if="list.items.length"
            :key="list.path"
            :prepend-icon="list.icon"
            :active-class="true ? 'white--text' : 'grey--text text--darken-3'"
            :group="list.group"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="list.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="item in list.items"
              :key="item.title"
              active-class="secondary white--text"

            >
              <!-- :to="item.path" -->
              <v-list-item-action><v-icon v-text="item.icon"></v-icon></v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            :key="list.title"
            active-class="secondary white--text"

            v-else
          >
            <!-- :to="list.path" -->
            <v-list-item-action><v-icon v-text="list.icon"></v-icon></v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="list.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
    </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    mini: false,
    navList: [{
      title: '插件指南',
      icon: 'mdi-speedometer',
      group: '/plugin',
      items: [{
        title: 'prism 安装',
        path: '/plugin/prism',
        icon: 'mdi-triangle-outline'
      }, {
        title: '材质图标',
        path: '/plugin/icons',
        icon: 'mdi-material-design'
      }]
    }, {
      title: '思维进阶',
      icon: 'mdi-lightbulb-outline',
      group: '/bulb',
      items: [{
        title: '转场动画',
        path: '/bulb/motion',
        icon: 'mdi-transition-masked'
      }]
    }]
  }),
  created() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>
