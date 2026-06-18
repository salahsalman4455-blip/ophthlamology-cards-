import { INITIAL_QUESTIONS } from './src/data/questions';

// We want to find questions of 'short-answer' type:
// 1. Where there is no question mark '?' in the content and no instruction like "Enumerate", "Outline", "Describe", "Explain", "List", "Differentiate", "State" etc.
// 2. Or where the question content is just a patient scenario/description but does not ask "What is your diagnosis?" or similar, yet the answer starts with "Diagnosis: ..."

for (const q of INITIAL_QUESTIONS) {
  if (q.type !== 'short-answer' && q.type !== 'short-essay') continue;

  const contentLower = q.content.toLowerCase();
  
  // Check if it ends with or contains a question or explicit command
  const hasQuestionMark = contentLower.includes('?');
  const hasCommand = ['enumerate', 'outline', 'describe', 'explain', 'list', 'differentiate', 'state', 'define', 'discuss', 'calculate', 'complete', 'match', 'why', 'what', 'how', 'discuss'].some(cmd => contentLower.includes(cmd));

  if (!hasQuestionMark && !hasCommand) {
    console.log(`ID: ${q.id}`);
    console.log(`Title: ${q.title}`);
    console.log(`Content: ${q.content}`);
    console.log(`Answer snippet: ${q.answer.substring(0, 100)}...`);
    console.log('---');
  }
}
