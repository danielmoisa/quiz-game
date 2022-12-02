<script lang="ts">
	import Quiz from "./lib/Quiz.svelte";
	import Results from "./lib/Results.svelte";
	import Start from "./lib/Start.svelte";
	import { quizStage, Stage } from "./stores";
</script>

<main>
	{#if $quizStage === Stage.START}
		<Start />
	{:else if $quizStage === Stage.QUIZ}
		<Quiz />
	{:else if $quizStage === Stage.RESULTS}
		<Results />
	{/if}
</main>
