<template>
  <div>
    <h4>Il mio Profilo</h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Nome : </b>{{ getName }}</li>
      <!-- <li class="list-group-item"><b>getNameSettings : </b></li> -->
      <li class="list-group-item"><b>Cognome : </b>{{ getCognome }}</li>
      <li class="list-group-item"><b>Email : </b>{{ getEmail }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileDetailComponent",
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters({
      getName: "profile/getName",
      getCognome: "profile/getCognome",
      getEmail: "profile/getEmail",
    }),
    // nome1() {
    //   return this.$store.getters.getName;
    // },
  },
  methods: {},
  props: {},
};
</script>
