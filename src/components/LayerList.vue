<template>
	<div>
		<ul>
			<li v-for="layer in layers" :key="layer">
				{{ layer }}
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const layers = ref(["layer1", "layer2", "layer3"]);
</script>
