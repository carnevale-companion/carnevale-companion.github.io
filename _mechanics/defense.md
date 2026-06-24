---
title: "Defense Modifiers"
description: Relative value of every defense lever, normalized so they can be compared head-to-head.
nav_order: 4
is_ref: true
toc:
  - title: Reference
    anchor: reference
  - title: Defense rules of thumb
    anchor: defense-rules-of-thumb
  - title: Lever details
    anchor: lever-details
  - title: Maths
    anchor: maths
---

## Reference

All figures are **Life Points saved per incoming Combat attack**, computed through the calibrated engine from a base **Dexterity 4 / Protection 3 / LP 12** defender against a spread of reference attackers (the same idea as the model EDPA, run from the defending side).

- The attacker spread: **swarm** (Attack 2), **baseline** (Attack 3), **elite** (Attack 5, +1 Damage), **penetrator** (Attack 3, Penetration −3).
- **Drown** and **direct LP-loss** (Mother Hydra's Claws, Holy Light, Blood Drain, and similar) bypass the Protection roll entirely and do not use Dexterity, so every rolled or Dex-based defence is worth **zero** against them. Only +X LP helps.
- X = the ability's value (X=1 unless noted).

## Defense rules of thumb

| Lever | Verdict | Best against |
|---|---|---|
| **+X LP** | Universal floor, banked, beats everything | any |
| **+X Dexterity** | Pen-proof, scales with attacker Attack | elite (high-Attack) |
| **+X Protection** | Rolled ~0.4/hit, holds above the Pen floor | swarms / low-Pen volume |
| **Expert Protection** | Lower-variance Protection, but 0 if fully penetrated | low-Pen attackers |
| **Universal Shielding** | Pure anti-Penetration floor, 0 otherwise | penetrators |
| **Parry** | Pen-proof, scales with attacker Aces and your Dex | elite, not swarms |

## Lever details

### +X LP

The only universal defence: unconditional, un-rollable, immune to Penetration, and **the only lever that helps against Drowns and direct LP-loss** (Mother Hydra's Claws, Holy Light, Blood Drain bypass Protection entirely). Each point is +1 effective LP, banked, never wasted. Treat it as the survivability floor. Everything else is situational on top.

For scale, across the roster a Ducat buys a median of **0.85 LP** (about 1.2 Ducats per point of LP), the going rate for raw survivability. For example, a 13-Ducat model has a median value of 11 LP (0.85 × 13).

### +X Dexterity

Lowers every attacker's per-die hit chance by 0.1, saving `Attack × 0.1` Damage per attack, so its value scales with the **attacker's** Attack: +0.11 vs a swarm (A2) up to +0.49 vs an elite (A5). It cannot be penetrated and doubles as mobility (jumps, climbs, disengaging). It is the **best raw-LP lever against elite attackers** (beating +1 Protection at 0.42 and Parry at 0.29), but useless against Grapple, Drown, and direct LP loss, which use Attack or bypass the roll rather than Dexterity.

### +X Protection

A rolled save worth about **+0.4 LP per hit**, capped by the incoming Damage. It **beats Dexterity against low-Attack attackers** (swarm +0.17 vs Dex +0.11) but loses to it against elites (+0.42 vs +0.49), the crossover landing around Attack 4–5. It is reduced point-for-point by Penetration, although a marginal +1 still helps as long as your **total** Protection stays above the enemy's Penetration. Wasted entirely against Drown and direct LP loss.

### Expert Protection (X)

The lower-variance version of +X Protection: it re-rolls failed Protection dice for a tighter spread (+0.26 at X=1, diminishing to +0.38 by X=2 on Protection 3). Its weakness is that it has nothing to re-roll once you are **fully penetrated**, dropping to **+0.00 against the Pen−3 attacker** where raw +1 Protection still saves +0.30. That makes it more Penetration-vulnerable than simply adding a die.

### Universal Shielding (X)

Pure anti-Penetration insurance: a minimum-Protection floor capped at your starting Protection. It contributes **exactly zero against a no-Penetration attacker** and pays off only against Penetration, restoring the Protection that Pen would otherwise strip (+1.04 vs the Pen−3 attacker at US 3). The single strongest anti-Penetration lever, but dead weight otherwise.

### Parry (X)

Forces the attacker to re-roll up to X of their Aces, removing hits before Damage. It is Penetration-proof and scales on **two** axes: the attacker's quality (more Aces to parry, +0.13 vs a swarm up to +0.29 vs an elite) and **your own Dexterity** (Parry and high Dex compound, +0.29 at Dex 4 up to +0.46 at Dex 6 vs the elite). Weak against swarms of low-Attack models, who land few Aces to parry.

## Maths

Life Points saved per incoming attack from a base Dexterity 4 / Protection 3 defender. The first row is the raw net Damage taken with no lever, for context.

| Lever | swarm (A2) | baseline (A3) | elite (A5/+1) | penetrator (Pen−3) | Drown / LP-loss |
|---|---|---|---|---|---|
| *(base net taken)* | 0.61 | 1.15 | 3.38 | 2.19 | — |
| **+1 Dexterity** | +0.11 | +0.22 | +0.49 | +0.31 | — |
| **+1 Protection** | +0.17 | +0.27 | +0.42 | +0.30 | — |
| **Expert Protection (1)** | +0.17 | +0.26 | +0.36 | +0.00 | — |
| **Universal Shielding (3)** | +0.00 | +0.00 | +0.00 | +1.04 | — |
| **Parry (1)** | +0.13 | +0.20 | +0.29 | +0.29 | — |

`+X LP` is not in the table because it is not a per-attack save: it is **+X effective LP banked**, worth the same against every column, and the **only** lever with any value in the Drown / LP-loss column.

Two readings stand out. **Dexterity overtakes Protection as the attacker gets harder** (Protection wins vs the swarm, Dexterity wins vs the elite, crossover around Attack 4–5). And **Penetration splits the two armour levers**: a marginal +1 Protection survives it (the added die sits above the Pen floor), while **Expert Protection collapses to zero** once there are no Protection dice left to re-roll. Universal Shielding is the dedicated counter, worth nothing until Penetration appears.

### Parry value by your own Dexterity

Parry(1) vs the elite attacker (A5/+1). The higher your Dexterity, the more Aces it forces away.

| Your Dexterity | LP saved |
|---|---|
| 4 | +0.29 |
| 5 | +0.38 |
| 6 | +0.46 |

### Expert Protection diminishing returns

Vs the baseline attacker (A3) on Protection 3. X=3 cannot beat X=2 because Protection 3 only offers two re-rollable dice (the Destiny die never re-rolls).

| Expert Protection X | LP saved |
|---|---|
| 1 | +0.26 |
| 2 | +0.38 |
| 3 | +0.38 |

### Formulas

- **+X LP:** +X effective LP, banked. Helps against every attack type, the only lever that counters Drown and direct LP loss.
- **+X Dexterity:** lowers every attacker's per-die hit chance by 0.1 per +1, saving `Attacker Attack × 0.1 × X` Damage per attack. Scales with the **attacker's** Attack, Penetration-proof.
- **+X Protection:** `+ X × 0.4` LP saved per hit, **capped at the incoming Damage** (floored at 0) and reduced point-for-point by enemy **Penetration**. The marginal die survives while total Protection exceeds Penetration.
- **Expert Protection (X):** `+ E[min(X, failures)] × 0.4`, failures ~ Binomial(**Protection − 1**, 0.6). Same Damage cap, and **zero once fully penetrated** (no dice left to re-roll).
- **Universal Shielding (X):** raises effective Protection to `min(starting Protection, max(X, Protection − Penetration))`, so it is zero without Penetration.
- **Parry (X):** forces the attacker to re-roll up to X of their Aces, removing `E[min(X, attacker Aces)] × (1 − p)` hits, where `p = (11 − your Dexterity) / 10`. **Stronger the higher your own Dexterity.**
