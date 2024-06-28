<script lang="ts">
import "@fortawesome/fontawesome-free/js/all";
import {getRepositoriesGitHub, getUserGitHub} from "@/http/github_profile";
import {alertMessage} from "@/functions/functions";
import Loader from "@/components/Loader.vue";

export default {
  components: {Loader},
  data() {
      return {
        username: '',
      }
  },

  methods: {
    searchProfile: async function () {
      if (this.username.trim() === '') {
        alertMessage(document.querySelector('.empty_input'), null, null)
        return;
      }
      document.querySelector('.search_loader')?.removeAttribute('hidden')
      const data = await getUserGitHub(this.username)
      const repos = await getRepositoriesGitHub(this.username)
      document.querySelector('.search_loader')?.setAttribute('hidden', 'true')
      if (data.id) {
        this.$emit('github_profile', data)
        this.$emit('github_repositories', repos)
        this.validateHiddenSearch()
      }

      if (data.message != "Not Found") {
        alertMessage(document.querySelector('.alert'),
            document.querySelector('.message'), data.message)
        return;
      }

      alertMessage(document.querySelector('.alert'), null, null)
    },

    validateHiddenSearch(){
      const boxSearch = document.querySelector('.box-search')
      boxSearch?.setAttribute('hidden', 'true')
    }

  },

  emits: ['github_profile', 'github_repositories']
}
</script>

<template>
  <section class="box-search">
      <input class="box-text" type="text" name="username" id="username"
             v-model="username" placeholder="Usuário do GitHub" required>
      <a class="button-search" @click="searchProfile"><i class="fas fa-search"></i></a>
  </section>

  <div class="empty_input" hidden>
    <span>Por favor, insira o seu usuário do GitHub</span>
  </div>

  <div class="alert" hidden>
    <span class="message">Usuário não localizado!</span>
  </div>

  <div class="search_loader" hidden>
    <Loader/>
  </div>

</template>

<style scoped>
.box-search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  height: 40px;
  border-radius: 40px;
  padding: 15px;
  width: auto;
}

.empty_input, .alert {
    color: white;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 40px;
    padding: 15px;
    width: auto;
    font-weight: bold;
    font-size: 20px;
}

.box-search:hover > .box-text {
  padding: 0 6px;
}

.button-search {
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  transition: 0.4s;
}

.box-text {
  border: none;
  background-color: #333;
  outline: none;
  float: left;
  padding: 0;
  color: #fff;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  cursor: pointer;
}

@media (max-width: 767px){
  .empty_input, .alert {
    color: white;
    position: absolute;
    top: 30%;
    left: 55%;
    border-radius: 40px;
    padding: 15px;
    width: auto;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>