<template>
  <div class="box">
    <div class="items"><h1>Inertia + Adonis + Vue 3 with Vite !</h1>
			<h2>Hello {{ name }}</h2>
			<img src="../../assets/logo.svg" alt="logo" />
      <button class="button" @click="count++">Count is {{count}}</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
	name: 'App',
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			count: 0,
		};
	},
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.items h1 {
  font-family: Helvetica, Arial, sans-serif;
}

.button {
  height: 2rem;
  padding: 5px;
}
</style>
