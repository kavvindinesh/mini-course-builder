# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks or libraries (no React, Vue, Tailwind, etc.).
- No build step: files are opened or served exactly as written.

## Project Structure

A mini-course on inspecting aircraft composite structures, built once from a 6-slide deck (the deck itself is not stored in the repo). Everything lives at the top level:

- `CLAUDE.md`: this file, instructions for Claude.
- `index.html`: the whole course, one `<section class="lesson">` per slide plus a wrap-up.
- `styles.css`: all styles. Colours are CSS variables, with dark values under `[data-theme="dark"]`.
- `script.js`: theme toggle, switching between sections, progress bar, and quizzes.

Update this section when new files or folders are added.

## Key Requirements

1. **Responsive design:** every page must work on desktop, tablet, and phone.
2. **Light and dark themes:** users can switch between a light and a dark theme. The light theme is the default.

## Feature Plan

### Site structure

One page (`index.html`) that shows one section at a time, in this order:

1. **Header**: course title and the light/dark theme button.
2. **Intro**: what the course covers and 3–4 learning goals.
3. **Lessons**: one section per slide. Each has an explanation, an example, key takeaways, and a short quiz.
4. **Wrap-up**: a short summary of the course.

How students move through it: Previous and Next buttons switch sections with JavaScript (no separate pages), and the address ends in `#lesson-N` so a reload keeps their place. There is no lesson menu. A thin progress bar at the top shows how many sections they've reached. Without JavaScript, all sections show on one long page. After each lesson there is a quiz with 2–3 multiple-choice questions and instant feedback. Nothing is saved or sent anywhere.

### Phases

**Phase 1: Course from the slides**
- Ask the user for the slides (PDF or PowerPoint) and read them.
- Get the user to confirm the topic summary, learning goals, and lesson titles.
- Build the page: lessons, quizzes, progress bar, and theme toggle.

**Phase 2: Check and polish**
- Test on phone, tablet, and desktop widths, in both themes.
- Check that every quiz answer gives the right feedback.
- Fix any layout, contrast, or keyboard-access problems.

**Phase 3: Publish (decide later)**
- Put the site online, for example with GitHub Pages, if the user wants that.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- When something is unclear, ask instead of guessing.
