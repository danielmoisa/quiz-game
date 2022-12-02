<script lang="ts">
	import { blockAnswers, questionIndex, quiszLength, quizs, quizStage } from "../stores";
	import Answer from "./Answer.svelte";

	const handleNextQuestion = () => {
		if ($questionIndex <= $quiszLength - 1) {
			questionIndex.update(() => $questionIndex + 1);
			blockAnswers.update(() => false);
		} else {
			quizStage.update(() => 2);
		}
	};
</script>

<div class="quiz">
	{#each $quizs as quiz}
		{#if quiz.id === $questionIndex}
			<div class="quiz-header">
				<p class="question">{quiz.question}</p>
				<span>{quiz.id} / {$quiszLength}</span>
			</div>
			<div class="answer-container">
				{#each quiz.answers as answer, i}
					<Answer {answer} index={i} correctIndex={quiz.correctIndex} />
				{/each}
			</div>
		{/if}
	{/each}
</div>

<button on:click={handleNextQuestion} disabled={!$blockAnswers}>Next Question</button>

<style>
	.quiz {
		text-align: left;
		background-color: darkslateblue;
		padding: 1rem 2rem;
		border-radius: 10px;
		margin: 30px;
		width: 50vw;
	}

	.quiz-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.question {
		font-size: 24px;
		font-weight: bold;
	}
</style>
