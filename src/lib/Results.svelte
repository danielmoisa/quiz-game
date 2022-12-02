<script lang="ts">
	import { countCorrectAnswers, quiszLength } from "../stores";
</script>

<div class="results">
	<h2>Your results are {$countCorrectAnswers} / {$quiszLength}</h2>
	<button>Start again</button>
</div>

<style>
	.results {
		background-color: brown;
		padding: 2rem;
		border-radius: 6px;
		width: 30vw;
	}
</style>
