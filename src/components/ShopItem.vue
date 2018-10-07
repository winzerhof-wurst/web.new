<template>
    <div class="item">
        <slot />
    </div>
</template>

<style>
/*
 * Wines/tidits
 */
.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
}
.item:hover {
  background-color: #fafafa;
}

.item > div.description {
  flex-grow: 3;
}

.item > div.unit-price {
  padding-right: 8px;
  text-align: center;
}

.item > div.add-to-cart {
  max-width: 15em;
}

.item .out-of-stock {
  color: #ad1430;
}
</style>

