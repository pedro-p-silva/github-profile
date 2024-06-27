<script lang="ts">
import type {PropType} from "vue";

export type typeButton = "button" | "submit" | "reset" | undefined

export default {
  props: {
    type: {type: String as PropType<typeButton>},
    text: {type: String, required: true},
    bgColor: {type: String}
  }
}
</script>

<template>
  <button class="card-btn" :type="type" :style="bgColor">{{text}}</button>
</template>

<style scoped>
.card-btn{
  display: block;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 20px;
  width: max-content;
  font-size: 1.1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-bottom: 7px;

  @media (max-width: 767px){
    margin: auto;
  }
}

.card-btn:hover {
  background: black !important;
  color: white;
}
</style>