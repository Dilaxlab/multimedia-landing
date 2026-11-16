---
name: find-skills
description: >-
  Helps users discover and install agent skills when they ask questions like
  "how do I do X", "find a skill for X", "is there a skill that can...", or
  express interest in extending capabilities. Searches the open Agent Skills
  ecosystem (skills.sh) via the skills CLI and installs skills into the
  project's .agents/skills/ directory.
---

# Find Skills (`vercel-labs/skills`)

This skill helps you discover and install skills from the open Agent Skills ecosystem ([skills.sh](https://skills.sh/)).

## When to Use This Skill

Activate this skill when the user:
- Asks *"find a skill for X"* or *"is there a skill for X?"*
- Wants to discover skills for **Next.js, React, UI/Frontend design, Tailwind CSS, Three.js / WebGL, animations, SEO, testing, or landing page development**
- Asks you to use `npx skills` to search or add new capabilities to the project

---

## Step 1: Understand What to Search For

Identify the domain and specific keywords for the task. Common categories for web & landing page projects include:
- **Web & Frontend Design:** `frontend-design`, `ui-ux`, `tailwind`, `landing-page`, `animation`, `motion`
- **React & Next.js:** `react`, `nextjs`, `vercel-react-best-practices`, `web-design-guidelines`
- **3D & Multimedia:** `threejs`, `webgl`, `r3f`, `gsap`, `canvas`
- **Testing & Quality:** `webapp-testing`, `playwright`, `accessibility`, `seo`

---

## Step 2: Search for Skills

Run the Skills CLI search command (note: requires network access, so run with `BypassSandbox: true` in Antigravity if standard sandbox has no network):

```bash
npx -y skills find <query>
```

For example:
```bash
npx -y skills find frontend
npx -y skills find nextjs
npx -y skills find design
```

*(Alternatively, you can also use `search_web` with `site:skills.sh <query>` or `github.com/vercel-labs/agent-skills` / `github.com/anthropics/skills` to quickly browse available skills without waiting on npx).*

---

## Step 3: Present Options to the User

When you find relevant skills, present the top matches clearly to the user with:
1. **Skill Name & Source Repo** (e.g., `frontend-design` from `anthropics/skills`, or `vercel-react-best-practices` from `vercel-labs/agent-skills`)
2. **What it does** in 1–2 sentences
3. **Install Command:**
   ```bash
   npx -y skills add <owner/repo> --skill <skill-name> -y
   ```

---

## Step 4: Install the Skill for Antigravity

To install a skill so Antigravity discovers it automatically in this project:

1. Run the `npx skills add` command (or fetch the `SKILL.md` directly) and ensure the skill folder is placed inside:
   - Workspace root: `.agents/skills/<skill-name>/SKILL.md`
   - Sub-repository root (if working inside `heritage-archive` or `heritage-archive-final`): `<sub-repo>/.agents/skills/<skill-name>/SKILL.md`
2. Verify that `.agents/skills/<skill-name>/SKILL.md` has valid YAML frontmatter containing both:
   - `name: <skill-name>` (matching the directory name)
   - `description: ...` (non-empty description)
3. Once written to `.agents/skills/<skill-name>/SKILL.md`, you can immediately read and follow that `SKILL.md` in the current turn!
