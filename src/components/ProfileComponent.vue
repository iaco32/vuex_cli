<template>
  <div>
    <div class="card" style="width: 18rem">
      <div class="card-header">Inserisci i dati</div>
      <div class="card-body">
        <div class="list-group">
          <label>Nome: {{ nome1 }}</label>
          <input type="text" v-model="profile.nome1" name="nome" />
          <label>Cognome: </label>
          <input type="text" v-model="profile.cognome" name="cognome" />
          <label>Email: </label>
          <input type="text" v-model="profile.email" name="email" />
        </div>
        <hr />
        <a href="#" class="btn btn-primary" @click="invia()">Salva</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "ProfileComponent",
  data() {
    return {
      profile: {
        nome1: "",
        cognome: "",
        email: "",
      },
    };
  },
  computed: {
    nome1: {
      get: function () {
        return this.$store.state.realname;
      },
      set: function (newValue) {
        this.$store.state.realname = newValue;
      },
    },
  },
  methods: {
    ...mapMutations(["setName"]),
    ...mapActions("profile", ["actionProfile"]),
    invia() {
      // this.$store.state.realname = this.nome1;
      // this.$store.commit("setName", "Roberto");
      // this.setName("Roberto");
      this.actionProfile(this.profile);
    },
  },
};
</script>
