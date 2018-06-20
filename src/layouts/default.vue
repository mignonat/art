<template>
  <q-layout view="hHh Lpr lFf">

    <q-layout-header :reveal="true">
      <q-toolbar color="primary"
                 :glossy="$q.theme === 'mat'"
                 :inverted="$q.theme === 'ios'">
        <!--
        <q-btn flat dense round
               @click="leftDrawerOpen = !leftDrawerOpen"
               aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        -->
        <q-toolbar-title>
          <span>{{$t('topbar.title')}}</span>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab
          slot="title"
          icon="home"
          to="/"
          replace
          hide="icon"
          :label="$t('menu.home')"/>
        <q-route-tab
          slot="title"
          icon="favorite_border"
          to="/healer"
          replace
          hide="icon"
          :label="$t('menu.healer')"/>
        <q-route-tab
          slot="title"
          icon="invert_colors"
          to="/paint"
          replace
          hide="icon"
          :label="$t('menu.paint')"/>
        <q-route-tab
          slot="title"
          icon="accessibility_new"
          to="/children"
          replace
          hide="icon"
          :label="$t('menu.children')"/>
        <q-route-tab
          slot="title"
          icon="shop"
          to="/shop"
          replace
          hide="icon"
          :label="$t('menu.shop')"/>
      </q-tabs>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      :overlay="false">
      <q-list
        no-border
        link
        inset-delimiter>
        <q-list-header>Liste de mes talents</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Soins énergétiques" sublabel="Un don du ciel" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
