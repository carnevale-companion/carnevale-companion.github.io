---
title: "Defense Modifiers"
nav_order: 2
prev_doc:
  title: Offense Modifiers
  url: /mechanics/offense/
next_doc:
  title: Combat Capabilities
  url: /mechanics/combat/
---

Relative value of every defense lever, normalized so they can be compared head-to-head.

All figures use the reference engagement unless stated:

- **Attacker:** Attack 4
- **Defender:** Dexterity 4 (→ P(Ace) per attack die = 0.7), Protection 3, LP 12

---

## Defense rules of thumb

1. **+X LP is the only *universal* defence** — unconditional, un-rollable, immune to Penetration, and **the only lever that helps against Drowns and direct LP-loss** (spells like Mother Hydra's Claws, Holy Light, Blood Drain bypass Protection entirely). Never wasted. Treat it as the survivability floor; everything else is situational on top.
2. **+X Dexterity is the best defence against *elite* attackers** — for raw LP protection, Dex is per-die uniform. The "anti-elite" label is specifically about secondary effects compression (Vampiric Attack, stun,...). It **cannot be penetrated**, scales with the attacker's Attack, and doubles as mobility (jumps, climbs, disengaging). Useless against Grapple, Drown, and direct LP loss.
3. **+X Protection / Expert Protection is best against *volume* of hits with low Penetration** — but it is rolled (variance), **wasted against Drown / LP-loss**, and **degrades under Penetration**. Expert Protection is the lower-variance version of the same thing.
4. **Universal Shielding is pure anti-Penetration insurance** — a minimum-Protection floor capped at the model's starting Protection, contributing **zero** against a no-Penetration attacker.
5. **Parry is anti-elite** —  Parry is most valuable when the attacker's Aces are dangerous, is Penetration-proof, and **scales with both the attacker's quality and your own Dexterity** (Parry + high Dex compound). Weak against swarms of low-Attack models, who land few Aces to parry.

---

## TLDR: What's best when?

| Threat | Best pick | Why |
|--------|-----------|-----|
| Drowns, or direct LP-loss spells | **+X LP only** | Protection, Dex, Parry, Shielding are all bypassed |
| One high-Attack elite attacker | **+X Dexterity / Parry** | suppress hits at the source, pen-proof, scale with attacker quality |
| Many medium hits, low Penetration | **+X Protection / Expert Protection** | per-Damage saving scales with attack volume |
| Penetration-heavy gang (Blood Rites, post-Sunder) | **+X LP / +X Dexterity / Universal Shielding** | Protection is being stripped; these still work |
| Swarm of weak attackers | **+X Protection / +X LP** | Dex/Parry give little when each attacker lands few Aces |

---

## Maths

Expected LP saved per incoming reference attack (Attack 4), or raw durability:

| Lever | Value (per attack / total) | Penetration-proof? | Helps vs Drown & direct LP loss? | Reliability | Conditional on |
|-------|----------------------------|--------------------|----------------------------------|-------------|----------------|
| **+X LP** | +X effective HP, banked | **Yes** | **Yes — the only one** | **Highest** (no roll) | nothing — never wasted |
| **+X Dexterity** | −(Attacker Attack × 0.1) Damage per attack (≈ −0.4 at Atk 4) | **Yes** | No (Grapple/Drown use Attack, not Dex) | High | being attacked via Combat |
| **+X Protection** (extra dice) | +0.40 saved per Damage (≈ +0.4/attack) | No | No | Medium (rolled) | incoming Damage; degraded by Pen |
| **Expert Protection (X)** (re-roll) | +0.34 (X=1) / +0.48 (X=2) at Prot 3 | No | No | Higher than raw Prot | same as Protection |
| **Universal Shielding (X)** | anti-Pen floor only, capped at starting Prot | it *is* the Pen counter | No | Situational | enemy Penetration present |
| **Parry (X)** (force re-roll of Aces) | removes ≈ X × (1−p) hits (Dex 4: ~X×0.3; Dex 6: ~X×0.5) | **Yes** (pre-Damage) | No | Scales with attacker quality | attacker landing Aces |

Formulas:

- **+X Dexterity:** lowers every attacker's per-die hit chance by 0.1 per +1 → saves `Attacker_Attack × 0.1 × X` Damage per attack. Scales with the **attacker's** Attack.
- **+X Protection:** `+ X × 0.4` LP saved per Damage, **capped at the incoming Damage** (floored at 0) and reduced point-for-point by enemy **Penetration**.
- **Expert Protection(X):** `+ E[min(X, failures)] × 0.4`, failures ~ Binomial(**Prot − 1**, 0.6); same Pen vulnerability and Damage cap.
- **Parry(X):** forces the attacker to re-roll up to X of their successful Aces → removes `E[min(X, attacker Aces)] × (1 − p)` hits, where `p = (11 − your Dex)/10`. **Stronger the higher your own Dexterity.**
