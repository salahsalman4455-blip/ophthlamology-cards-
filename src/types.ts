/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type QuestionType = 'short-essay' | 'short-answer' | 'matching' | 'problem-solving' | 'define';

export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  VERY_HARD = 'very_hard'
}

export interface Question {
  id: string;
  chapterId: number;
  type: QuestionType;
  title: string;
  content: string;
  answer: string;
  isClinical: boolean;
  topic?: string;
  isPastYear?: boolean;
  isSurgical?: boolean;
}

export interface Chapter {
  id: number;
  title: string;
  topics: string[];
}

export interface UserProgress {
  reviewList: string[]; // Question IDs
  masteredIds: string[]; // Easy IDs
  sessionQueue: { questionId: string; reappearIndex: number }[];
}
