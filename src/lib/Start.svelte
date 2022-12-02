<script lang="ts">
	import { quizStage, Stage } from "../stores";

	const handleStartQuiz = () => {
		quizStage.update(() => Stage.QUIZ);
	};
</script>

<h2>Svelte Quiz App</h2>
<button on:click={handleStartQuiz}>Start Quiz</button>
