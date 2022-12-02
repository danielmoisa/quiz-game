<script lang="ts">
	import { countCorrectAnswers, quiszLength, quizStage, questionIndex, blockAnswers } from "../stores";
	const handleRestart = () => {
		questionIndex.update(() => 1);
		blockAnswers.update(() => false);
		countCorrectAnswers.update(() => 0);
		quizStage.update(() => 0);
	};
</script>

<div class="results">
	<h2>Your results are {$countCorrectAnswers} / {$quiszLength}</h2>
	<button on:click={handleRestart}>Start again</button>
</div>

<style>
	.results {
		background-color: brown;
		padding: 2rem;
		border-radius: 6px;
		width: 30vw;
	}
</style>
