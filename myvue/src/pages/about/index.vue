<template>
    <div class="container">
        <div class="main">
            <div class="title">About Me</div>
            <div class="myintro">
                I like basketball and my english is pool...
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 1px;
    width: 700px;
    margin: 0 auto;
    .main {
        margin-top: 50px;
    }
  }
  .title {
    font-family: Palatino,Garamond,Times,Georgia,serif;
    color: #555;
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .myintro {
      font-size: 14px;
      color: #555;
      font-family: Palatino,Garamond,Times,Georgia,serif;
  }
  @media (min-width: 1600px) {
    .container {
      width: 900px;
      margin: 0 auto;
    }
  }
  @media (max-width: 767px) {
    .container {
      width: auto;
      margin: 0 20px;
    }
  }
</style>
</style>

