<template>
    <div class="content-tile">
        <slot />
    </div>
</template>

<style scoped>
.content-tile {
  background-color: #ffffff;
  margin-bottom: 60px;
  padding: 20px;
  box-shadow: 4px 4px 25px black;
}
.content-tile > h2 {
  word-wrap: break-word;
}
</style>
