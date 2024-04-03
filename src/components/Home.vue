<template>
  <div class="home">
    <div class="bg">
      <img src="../assets/img/homebg.png" alt="">
      <div class="bgMask"></div>
    </div>
    <div class="overlayText"><span class="red">HDLU</span> VARAŽDIN</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.bg {
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
  }
  
  .bgMask {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.overlayText{
  position: absolute;
  top: 0;
  left: 0;
  font-size: 100px;

  .red {
    color: #D30516;
  }
}
</style>
