---
title: "Offense Modifiers"
description: Relative value of every offense and defense lever, normalized so they can be compared head-to-head.
nav_order: 3
is_ref: true
---

## Reference

All figures use the reference engagement unless stated:

- **Attacker:** Attack 4
- **Defender:** Dexterity 4 (→ P(Ace) per attack die = 0.7), Protection 3, LP 12
- Values are **per single Combat attack** and given **before the Protection roll** (raw expected Damage added or saved). X = the ability's value (X=1 unless noted).
- "Ceiling" = whether the lever raises the **maximum** possible Damage of one attack.
- Recall: one die in every pool is the **Destiny die**, which counts toward Aces but **can never be re-rolled**, so re-roll abilities only ever touch **(stat − 1)** dice.

P(Ace) per attack die by target Dexterity: Dex 3 = 0.8 · Dex 4 = 0.7 · Dex 5 = 0.6 · Dex 6 = 0.5 · Dex 7 = 0.4.

## Offense rules of thumb

1. **+X Damage is the highest *average* output boost**, and it also raises the ceiling. Best on any model that reliably lands hits (Attack 3+ vs Dex ≤5). Its only weaknesses: it does nothing on a whiff, and a flat bonus is wasted as overkill on a hit that already kills.
2. **+X Attack is the most *versatile* boost**: raises average, ceiling, AND reliability (more dice = more likely to land), and is the **only damage lever that also powers Grapple and Drown**. It scales up against soft, low-Dexterity targets (every die is likely to hit) and down against evasive ones.
3. **Expert Offence / Marksman is the *most reliable* but lowest-output boost**: it converts near-misses, giving the lowest whiff rate and tightest damage spread, but it can **never exceed your Attack dice** (no ceiling gain). Its relative value **rises as targets get harder to hit** and it overtakes +X Attack around Dex 7. Worthless dead weight if you are missing for other reasons or attacking via Grapple/Drown.
4. **Penetration is *conditional* damage**: the only offense lever whose value **rises with the enemy's Protection** (~+0.4 per point, up to their Protection value) and **falls to zero against unarmoured targets**.
5. **−X Evasion is "accuracy as a weapon stat"**: the offensive mirror of +Dexterity, raising hit chance ~0.1 per point (≈ +0.4 Damage at Attack 4). Worth most against evasive (high-Dex) targets, where each point of hit chance is scarcest.
6. **Fear is a low-average, high-variance accuracy rider, not a damage staple**: on a trigger it re-rolls *all* your missed attack dice (a bigger swing than Expert Offence), but the trigger rate collapses against MIND 3+ targets (≈22%) and is zero against Brave. It is a conditional damage bonus that pays off against low-MIND gangs, **not** a control effect (it does nothing to the target's movement, actions, or status and only helps your own attack land).
7. **Poisoned is the strongest offensive rider here, when the hit lands.** The extra LP bypasses Protection entirely, triggers 60% of the time, and **scales with the target's base size** (+1.8 vs 30mm up to +3.6 vs 60mm+), making it anti-tank / anti-monster. The catch: it is gated on the attack first dealing ≥1 LP, a poisoned weapon that can't break armour does nothing.

## TL;DR: What's best when?

| Situation | Best pick | Why |
|-----------|-----------|-----|
| Reliable hitter vs average target | **+X Damage** | highest average, raises ceiling |
| Soft / low-Dex target, or you also Grapple/Drown | **+X Attack** | scales with low Dex, helps all Attack actions |
| Evasive (Dex 6+) target, or you need consistency | **−X Evasion / Expert Off/Marks** | both buy scarce hit chance, re-rolls worth most when Aces are rare |
| Heavily armoured target | **Penetration** (then +X Damage) | only lever that beats Protection |
| Unarmoured target | **+X Damage / +X Attack** | Penetration does nothing here |
| Large-base / monster / tank target | **Poisoned** | extra LP scales with base size and ignores armour |
| Low-MIND swarm | **Fear** | high trigger rate → frequent re-rolls of your own missed attack dice |
| High-MIND or Brave target | **avoid relying on Fear** | trigger rate near zero / negated entirely |

## Maths

Expected bonus Damage per Combat attack vs the reference Dex 4 target:

| Lever | X=1 | X=2 | Raises ceiling? | Improves to-hit / reliability? | Conditional on | Other actions helped |
|-------|-----|-----|-----------------|--------------------------------|----------------|----------------------|
| **+X Damage** (flat on hit) | **+0.99** | **+1.98** | Yes (+X) | No | landing ≥1 Ace (× P(hit)) | Combat only |
| **+X Attack** (extra dice) | +0.70 | +1.40 | Yes (+X) | Yes (more dice → higher P(hit)) | - | also **Grapple / Drown** |
| **−X Evasion** (weapon to-hit mod) | +0.40 | +0.80 | No | Yes (raises P(hit)) | - | Combat only |
| **Expert Offence / Marksman (X)** (re-roll failed dice) | +0.46 | +0.61 | **No** (capped at Attack dice) | **Yes (best)** (lowest whiff, tightest spread) | a die having failed | Combat only (not Grapple/Drown) |
| **Penetration −X** | +0.40 vs armour | +0.80 vs armour | No | No | target having Protection (**0 vs unarmoured**) | Combat only |
| **Fear (X)** (re-roll all failures on trigger) | +0.14¹ | - | No | Yes (when it triggers) | target failing a MIND roll (`0.6^MIND`), negated by **Brave** | Combat only |
| **Poisoned** (extra LP on a damaging hit) | +1.8 to +3.6² | - | effectively (bonus LP) | No | first dealing ≥1 LP, **bypasses Protection** | Combat only |

¹ Fear(0) vs a MIND 3 target: 21.6% trigger × ~0.63 Aces from re-rolling all failures = **+0.14** avg. Rises sharply vs low-MIND targets (eff. MIND 1 → 60% trigger → +0.38) and is **zero vs Brave**.
² Poisoned: 60% trigger × extra LP by base size (30mm 3 → +1.8, 40mm 4 → +2.4, 50mm 5 → +3.0, 60mm+ 6 → +3.6), conditional on the hit already dealing ≥1 LP. Direct LP loss, no Protection Roll.

Formulas (vs a target with per-die hit chance `p`):

- **+X Damage:** `+X × P(hit)` = `X × (1 − (1−p)^Attack)`. ≈ `+X` for Attack 3+ vs Dex ≤5.
- **+X Attack:** `+X × p`.
- **−X Evasion (weapon):** the modifier is added to the target's **effective Dexterity** for the Attack Roll. A **negative** value lowers their effective Dexterity → `+0.1 per point` P(Ace) per die → `+ Attack × 0.1 × X` expected Damage. A **positive** Evasion modifier is the reverse: a to-hit *penalty* (the trade heavy two-handers pay for high Dmg/Pen). Exact mirror of the defensive +X Dexterity lever.
- **Expert Off/Marks(X):** `+ E[min(X, failures)] × p`, failures ~ Binomial(**Attack − 1**, 1−p). Always below `X × p`. EO(3) barely beats EO(2) on a small pool.
- **Penetration −X:** `+ min(X, Protection) × 0.4`. Zero against Protection 0.
- **Fear(X):** `P(trigger) × (Attack − 1)(1−p)p`, where `P(trigger) = 0.6^max(1, target MIND + X)`. The re-roll is **uncapped** (all failures, not X), so the *conditional* swing is large but the *average* is throttled by the trigger rate. Brave auto-passes the MIND roll.
- **Poisoned:** `P(deal ≥1 LP) × 0.6 × baseLP`, baseLP = 3 / 4 / 5 / 6 by 30 / 40 / 50 / 60mm+ base. Armour-independent and **scales up against bigger (usually tougher) targets**.
