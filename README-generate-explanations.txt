How to use the explanation generator

1. Put this file in your project root folder:
   generate_explanations_for_all_questions.js

2. Make sure your question files are inside:
   data/question-bank

3. Open VS Code terminal in the project root.

4. Run:
   node generate_explanations_for_all_questions.js

5. This will rewrite all .ts question files inside data/question-bank
   and give every question these fields:
   - explanation.quick
   - explanation.standard
   - explanation.deep

Important:
- This gives every question a similar explanation style automatically.
- It is good for consistency and speed.
- But it is still template-based, so for highest quality you should manually improve the most important questions later.
