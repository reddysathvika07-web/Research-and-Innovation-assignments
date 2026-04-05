# PHASE 1 — HTML, CSS, JAVASCRIPT (FOUNDATION PROGRAM)

## OBJECTIVE
This phase is designed to help you:
- Understand web structure (HTML)
- Build clean UI (CSS + Flexbox)
- Add interactivity (JavaScript)
- Work using real GitHub workflow (issues → branch → PR)

**By the end, you should be able to:**
- Build small web applications
- Structure projects properly
- Push code like a real developer

---

## CENTRAL SUBMISSION REPOSITORY (MANDATORY)
- All work must be submitted to: `Research-and-Innovation-assignments`
- **DO NOT** create separate repositories
- **DO NOT** upload ZIP files
- **EVERYTHING** must be inside this repo

---

## ROADMAP (HTML → CSS → JS)

### HTML (DAY 1–2)
- [HTML Crash Course](https://www.youtube.com/watch?v=pQN-pnXPaVg)
- Learn: Page structure, Headings, Images, Links, Lists, Forms

### CSS (DAY 3)
- [CSS Crash Course](https://www.youtube.com/watch?v=1Rs2ND1ryYc)
- Learn: Colors, Fonts, Margin, Padding, Box Model

### CSS FLEXBOX (DAY 4)
- [Flexbox Crash Course](https://www.youtube.com/watch?v=3YW65K6LcIA)
- Learn: Layout using Flexbox, Alignment

### COMBINED UI (DAY 5)
- Build structured UI using: HTML + CSS + Flexbox

### JAVASCRIPT (DAY 6–7)
- [JavaScript Crash Course](https://www.youtube.com/watch?v=hdI2bqOjy3c)
- Learn: Variables, Functions, DOM Manipulation, Events

---

## ASSIGNMENTS (STRICT)

### ASSIGNMENT 1 — PRODUCT SHOWCASE PAGE
- **Task:** Build a Product Showcase Web Page
- **Must Include:**
  - Navbar
  - Product section (image + description)
  - 3 feature cards
  - Styled layout using Flexbox
  - Clean UI (spacing, alignment)
- **Folder Structure:**
  - `RAHUL/RAHUL_ASSIGNMENT1_HTML_CSS/`
    - `index.html`
    - `style.css`
    - `images/`

### ASSIGNMENT 2 — QUIZ APPLICATION
- **Task:** Build a Quiz Application
- **Must Include:**
  - 3–5 questions
  - Multiple choice options
  - Next button
  - Final score display
- **Folder Structure:**
  - `RAHUL/RAHUL_ASSIGNMENT2_HTML_CSS_JS/`
    - `index.html`
    - `style.css`
    - `script.js`

---

## HOW TO SUBMIT (COMPLETE WORKFLOW)

### STEP 1 — Fork Repository
Go to `Research-and-Innovation-assignments` and click **Fork**.

### STEP 2 — Clone Your Fork
```sh
git clone https://github.com/YOUR-USERNAME/Research-and-Innovation-assignments.git
cd Research-and-Innovation-assignments
```

### STEP 3 — Add Upstream
```sh
git remote add upstream https://github.com/pavanakarthik12/Research-and-Innovation-assignments.git
```
**WHY UPSTREAM?**
The "upstream" refers to the original repository. It is vital because while you work on your fork, the original repository might get updated. Adding upstream allows you to sync those changes into your local machine so your code doesn't become outdated.

### STEP 4 — Create Your Main Folder
```sh
mkdir RAHUL
```

### STEP 5 — CREATE ISSUE (MANDATORY)
- Example: `Assignment 1 - Rahul - Product Showcase Page`
- **WAIT** until it is assigned to you.

### STEP 6 — CREATE BRANCH
- For Assignment 1:
  ```sh
  git checkout -b rahul-assignment1-html-css
  ```
- For Assignment 2:
  ```sh
  git checkout -b rahul-assignment2-html-css-js
  ```

### STEP 7 — ADD FILES + COMMIT
- **NEVER USE:** `git add .`
- **USE:**
  ```sh
  git add RAHUL/RAHUL_ASSIGNMENT1_HTML_CSS
  # or the folder name for Assignment 2
  ```
**WHY NO "git add ."?**
Adding "everything" with a dot is dangerous. It can accidentally include temporary system files (`.DS_Store`, `node_modules`), private data, or changes you didn't mean to commit yet. Specifying the exact folder ensures only your intentional work is staged.

- Commit:
  ```sh
  git commit -m "added product showcase page with flexbox layout"
  ```

### STEP 8 — PUSH
```sh
git push origin [your-branch-name]
```

### STEP 9 — CREATE PULL REQUEST
- Go to GitHub, click **Compare & Pull Request**, and Submit.

---

## BEFORE EVERY NEW TASK (SYNCING)
- Get your own latest updates:
  ```sh
  git pull origin main
  ```
- Get latest updates from the main source/teacher:
  ```sh
  git pull upstream main
  ```
This prevents merge conflicts and ensures you are always building on the latest version of the project.

---

## NAMING RULES (STRICT)
- **Folder Names:** Use UPPERCASE for main folder (e.g., `RAHUL`).
- **Assignment folders:** Must be EXACT format:
  - `RAHUL_ASSIGNMENT1_HTML_CSS`
  - `RAHUL_ASSIGNMENT2_HTML_CSS_JS`

---

## NOT ALLOWED
- Direct push to main branch
- Skipping issue creation
- No branch usage
- Wrong folder structure

---

**Follow all guidelines strictly for successful submission!**
