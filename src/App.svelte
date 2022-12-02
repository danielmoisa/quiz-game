<script lang="ts">
	import Quiz from "./lib/Quiz.svelte";
	import Results from "./lib/Results.svelte";
	import Start from "./lib/Start.svelte";
	import { quizStage } from "./stores";
</script>

<main>
	{#if $quizStage === 0}
		<Start />
	{:else if $quizStage === 1}
		<Quiz />
	{:else if $quizStage === 2}
		<Results />
	{/if}
</main>
