# Carnevale Reference

An unofficial community reference site for *Carnevale*, the tabletop skirmish game by [TTCombat](https://ttcombat.com/collections/carnevale). Built with Jekyll, hosted on GitHub Pages.

**Live site:** [unofficial-carnevale-docs.github.io](https://unofficial-carnevale-docs.github.io)

> All game content and intellectual property belongs to TTCombat. This is a fan-made reference and analysis site only.

---

## What's on the site

- **Rules Reference** — complete v2.2 rules with FAQ & Errata integrated, on one page
- **Compendium** — quick reference for actions and abilities, detailed ability lists, official FAQ & Errata
- **Factions** — all factions with presentation and individual model profiles
- **Magic** — all disciplines with rules reference and spell breakdowns
- **Game Mechanics** — analysis of Will Points, offense/defense modifiers, and combat capabilities

---

## Run locally

Requires Ruby ≥ 3.0 and Bundler.

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

---

## Project structure

```
├── _config.yml          # Site configuration and collection defaults
├── Gemfile              # Ruby dependencies
├── _layouts/            # Page templates (home, doc, model, page)
├── _includes/           # Partials (head, header, footer, sidebar)
├── _data/
│   └── sections.yml     # Section metadata (title, url) for nav and breadcrumbs
├── _rules/              # Rules reference pages
├── _compendium/         # Compendium pages (quick ref, abilities, FAQ & Errata)
├── _factions/           # Faction and model pages  ⚠ see note below
├── _models/             # Individual model profile pages  ⚠ see note below
├── _mechanics/          # Game mechanics analysis pages
├── _magic/              # Magic disciplines and analysis pages
├── assets/
│   ├── css/main.scss    # All styles
│   └── js/main.js       # Highlighting, mobile menu
├── index.html           # Homepage
└── about.md
```

### ⚠ Faction and model pages are auto-generated

`_factions/` and `_models/` are produced by a separate data pipeline and should not be edited directly — changes will be overwritten on the next publish run. To update faction or model content, edit the pipeline sources instead.

---

## Contributing

Pull requests for rules corrections, errata updates, or compendium improvements are welcome. For anything in `_factions/` or `_models/`, open an issue describing the change rather than editing the files directly.
