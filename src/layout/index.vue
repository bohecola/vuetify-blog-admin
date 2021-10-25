<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container>
          <v-expand-transition>
            <v-tabs color="secondary" style="position: sticky; top: 64px;z-index: 5" v-show="tabsView && tabList.length" show-arrows>
              <v-tab :name="i" @contextmenu="showMenu" v-for="(item, i) in tabList" :key="item.name" :to="item.path">
                {{ item.title }}
                <v-icon size="20" v-if="item.title!='Home'" @click.stop.prevent="closeTab(i)" @contextmenu.stop.prevent="">mdi-close</v-icon>
              </v-tab>
            </v-tabs>
          </v-expand-transition>
          <v-menu
            v-model="tabMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
            min-width="110"
          >
            <v-list dense>
              <v-list-item @click="closeTab(index)" v-ripple="{ class: 'secondary--text' }">
                <v-list-item-title>关闭</v-list-item-title>
              </v-list-item>
              <v-list-item @click="closeOther(index)" v-ripple="{ class: 'secondary--text' }">
                <v-list-item-title>关闭其他</v-list-item-title>
              </v-list-item>
              <v-list-item @click="closeAll" v-ripple="{ class: 'secondary--text' }">
                <v-list-item-title>关闭所有</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './Navigation';

export default {
  components: {
    Navigation
  },
  data() {
    return {
      tabList: [],
      tabsView: true,
      background: {
        backgroundImage: `url(${require('@/assets/background.png')})`,
        backgroundAttachment: 'fixed',
        tabMenu: false,
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.tabList.push({
      name: this.$route.name,
      path: this.$route.path,
      title: this.$route.meta.title
    });
    this.tabsView = JSON.parse(localStorage.getItem('tabsView') || true);
  },
  methods: {
    showMenu(e) {
      e.preventDefault();
      this.index = e.target.name;
      this.tabMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.tabMenu = true;
      });
    },
    closeTab(index) {
      this.tabList.splice(index, 1);
      this.$router.push(this.tabList[this.tabList.length - 1].path);
    },
    closeOther(index) {
      const list = this.tabList[index];
      this.tabList = [];
      this.tabList.push(list);
      this.$router.push(list.path);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
