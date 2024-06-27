<script lang="ts">
import {ternaryCondition} from "@/functions/functions";
import Button from "@/components/Button.vue";

export default {
  components: {Button},

  props: {
    data: {type: Object, required: true},
  },

  methods: {ternaryCondition},

  emits: ['search_page', 'repos_page', 'repos_hide']
}
</script>

<template>
  <div class="card" style="display: none">
    <div class="card-thumb">
      <img :src='data.avatar_url' alt='photo_user'>
    </div>
    <div class="card-content">
      <div class="content">
        <h2>{{ternaryCondition(data.name, 'Sem nome cadastrado')}}</h2>
        <p><b>Bio:</b> {{ternaryCondition(data.bio, 'Sem bio cadastrada')}}</p>
        <p><b>Localização:</b> {{ternaryCondition(data.location, 'Sem localização cadastrada')}}</p>
        <p><b>Site:</b> {{ternaryCondition(data.blog, 'Sem site cadastrado')}}</p>

        <hr>

        <p><b>Repositórios</b></p>
        <p>Total: {{ternaryCondition(data.public_repos, '0')}}</p>

        <div class="buttons">
          <Button text="Ocultar repositórios" @click="$emit('repos_hide', 'hide_repos')"
                  id="hide_repos"
                  style="display: none"/>
          <Button text="Ver repositórios" @click="$emit('repos_page', 'third_page')"
                  id="show_repos"/>
          <Button text="Nova busca" @click="$emit('search_page', 'initial_page')"
                  bg-color="background: linear-gradient(90deg, #9bb2e5, #698cbf)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.card{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12%;

  .card-thumb{
    width: 180px;
    height: 170px;
    border-radius: 70%;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    img{
      width: 100%;
    }
  }

  #show_repos {
    background: linear-gradient(90deg, #ffd78a, #f4762d)
  }

  #hide_repos {
    background: linear-gradient(90deg, #ea98da, #5b6cf9)
  }

  .card-content{
    width: 60%;
    min-height: 400px;
    display: flex;
    align-items: center;
    padding: 20px;
    padding-left: 180px;
    margin-left: -150px;
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
    z-index: 1;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 767px){
      width: auto;
      padding-left: 20px;
      padding-top: 160px;
      margin-left: 0px;
      margin-top: -140px;
      text-align: center;
    }
  }

  @media (max-width: 767px){
    flex-direction: column;
  }
}
</style>