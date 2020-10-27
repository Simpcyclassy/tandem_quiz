# Tandem Code Challenge

A quiz application built with [Vue 2.6](https://vuejs.org/) JavaSript Framework on [Vuetify 2.2](https://vuetifyjs.com/en/) material design framework and [Vuex 3.4](https://vuex.vuejs.org/) for state management.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Assumptions
- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- The score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- Trivia data such as the questions, correct and incorrect answers are provided via a JSON file.

## Acceptance Criteria
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round