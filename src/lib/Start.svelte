<script lang="ts">
	import { quizStage } from "../stores";

	const handleStartQuiz = () => {
		quizStage.update(() => 1);
	};
</script>

<h2>Svelte Quiz App</h2>
<button on:click={handleStartQuiz}>Start Quiz</button>
