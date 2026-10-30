# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks or libraries (no React, Vue, Tailwind, etc.).
- No build step: files are opened or served exactly as written.

## Project Structure

The project is nearly empty for now. Keep everything at the top level until there is a reason to split it up:

- `CLAUDE.md`: this file, instructions for Claude.
- `index.html`: the main page (to be added).
- `styles.css`: shared styles (to be added).
- `script.js`: shared JavaScript (to be added).

Update this section when new files or folders are added.

## Key Requirements

1. **Responsive design:** every page must work on desktop, tablet, and phone.
2. **Light and dark themes:** users can switch between a light and a dark theme. The light theme is the default.

## Feature Plan

### Site structure

One long scrolling page (`index.html`), in this order:

1. **Header**: course title and the light/dark theme button.
2. **Intro**: what the course covers and 3–4 learning goals.
3. **Lessons**: one section per slide (3–5 in total). Each has an explanation, an example, key takeaways, and a short quiz.
4. **Wrap-up**: a short summary of the course.

How students move through it: they scroll from top to bottom. There is no lesson menu. A thin progress bar at the top of the screen shows how far they've got. After each lesson there is a quiz with 2–3 multiple-choice questions and instant feedback. Nothing is saved or sent anywhere.

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
