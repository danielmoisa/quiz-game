<script lang="ts">
	import { blockAnswers, countCorrectAnswers, disableAnswerClick } from "../stores";

	export let answer: string;
	export let index: number;
	export let correctIndex: number;

	$: {
	}

	const checkAnswer = (event, answerIndex: number, correctIndex: number) => {
		if ($blockAnswers === false) {
			if (answerIndex === correctIndex + 1) {
				event.target.classList.add("bg-success");
				countCorrectAnswers.update(s => s + 1);
				// disableAnswerClick.update(() => true);
				blockAnswers.update(() => true);
			} else {
				event.target.classList.add("bg-danger");
				blockAnswers.update(() => true);
			}
		}
	};
</script>

<button
	class={`answer-btn ${$blockAnswers && index + 1 === correctIndex + 1 && "bg-success"}`}
	on:click={event => checkAnswer(event, index + 1, correctIndex)}
	>{answer}
</button>

<style>
	.answer-btn {
		background-color: cadetblue;
		padding: 16px 20px;
		border-radius: 10px;
		will-change: filter;
		display: block;
		width: 100%;
		margin: 10px 0;
		text-align: left;
		outline: none;
	}
	.answer-btn:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
		cursor: pointer;
	}
</style>
