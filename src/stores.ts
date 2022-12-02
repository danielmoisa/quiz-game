import { writable } from 'svelte/store';
import type { Quiz } from './types';
import data from  './data/quiz.json'

export enum Stage {
    "START" = 0,
    "QUIZ" = 1,
    "RESULTS" = 2,
}

export const quizs = writable<Quiz[]>(data)
export const quiszLength = writable(data?.length ?? 0)
export const quizStage = writable<Stage>(Stage.START)
export const questionIndex = writable(1)
export const countCorrectAnswers = writable(0);
export const blockAnswers = writable(false)