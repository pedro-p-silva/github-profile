<script lang="ts">
export default {
  props: {
    repos: {type: Object, required: true}
  }
}
</script>

<template>
  <div class="box-area" style="display: none">
    <div v-for="repository in repos" class="single-box">
      <div class="img-area"></div>
      <div class="img-text">
        <span class="header-text"><strong>ID: {{repository.id}}</strong></span>
        <div class="line"></div>
        <p class="repository_name">{{repository.name}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-area{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}
.single-box{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  border-radius: 20px;
  background: linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
  text-align: center;
  margin: 20px;
  padding: 20px;
  transition: .3s;
  box-shadow: 1px 0 5px 0 rgba(0,0,0,0.6) ;
  word-break: break-all;
}

.header-text{
  font-size: 24px;
  font-weight: 500px;
  line-height: 48px;
}
.img-text h3{
  margin: 10px 0;
}
.img-text p{
  line-height: 30px;
}
.single-box:hover{
  background: linear-gradient(90deg, #ffd78a, #f4762d);
  color: black;
}
.single-box:hover .line{
  background-color: #fff;
}

.repository_name {
  font-size: 20px;
  text-transform: uppercase;
}
</style>