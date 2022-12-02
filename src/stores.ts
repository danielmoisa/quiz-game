import { writable } from 'svelte/store';
import type { Quiz } from './types';
import data from  './data/quiz.json'

export const quizs = writable<Quiz[]>(data)
export const quiszLength = writable(data?.length)
export const questionIndex = writable(1)
export const quizStage = writable(0)
export const countCorrectAnswers = writable(0);
export const blockAnswers = writable(false)