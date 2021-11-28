<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script> -->
<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Benvenuto : {{ getName }} ({{ getNameSettings }})
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <profile-component></profile-component>
        </div>
        <div class="col-md-6">
          <profile-detail-component></profile-detail-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileDetailComponent from "@/components/ProfileDetailComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      colore: "Verde",
    };
  },
  computed: {
    // ...mapState(["realname"]),
    ...mapGetters({
      getName: "profile/getName",
      getNameSettings: "settings/getName",
      getCognome: "profile/getCognome",
      getEmail: "profile/getEmail",
    }),
    // ...mapGetters({
    //   getName: "profile/getName",
    //   getNameSettings: "settings/getName",
    //   getEmail: "profile/getEmail",
    // }),
    // nome1() {
    //   return this.$store.getters.getName;
    // },
  },
  methods: {
    resetF() {
      this.colore = "Bianco";
    },
  },
  components: {
    "profile-detail-component": ProfileDetailComponent,
    "profile-component": ProfileComponent,
  },
};
</script>
