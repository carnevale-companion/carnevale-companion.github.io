---
title: "Offence Modifiers"
description: Relative value of every offence and defence lever, normalized so they can be compared head-to-head.
nav_order: 3
is_ref: true
toc:
  - title: Reference
    anchor: reference
  - title: Offence rules of thumb
    anchor: offence-rules-of-thumb
  - title: Lever details
    anchor: lever-details
  - title: Maths
    anchor: maths
---

## Reference

All figures are **expected bonus Damage per single Combat attack** from an **Attack 4** attacker, computed through the calibrated engine against a spread of reference defenders (the same idea as the model EDPA: each lever is measured many times against several defender types, not one).

- **Raw** = pre-Protection, **Net** = post-Protection (the Damage that actually lands). Penetration and Poisoned only exist net, the hit-chance levers read cleanest raw.
- X = the ability's value (X=1 unless noted).
- **Ceiling:** whether the lever raises the **maximum** possible Damage of one attack.
- **Recall:** one die in every pool is the **Destiny die**, which counts toward Aces but **can never be re-rolled**, so re-roll abilities only ever touch **(stat − 1)** dice.

## Offence rules of thumb

| Lever | Verdict | Best against |
|---|---|---|
| **+X Damage** | Highest average output, raises ceiling | any target |
| **+X Attack** | Most versatile, also powers Grapple/Drown | soft, low-Dex |
| **Expert Offence/Marksman** | Reliability, not output | hard-to-hit targets |
| **Penetration** | Post-Protection only, zero vs Universal Shielding | armoured (not US) |
| **−X Evasion** | Flat accuracy, +0.40 raw on any target | evasive (relatively) |
| **Fear** | Conditional accuracy rider, keyed to MIND | low-MIND, not Brave |
| **Poisoned** | Bypasses armour, scales with base size, gated | big bases |
| **Expert Grappler** | Re-roll for Grapple/Drown, also defends | control / water |

## Lever details

### +X Damage

The highest-average output lever, and it raises the ceiling. It is the top lever against every defender. In raw terms it is roughly +X Damage on any landed hit, independent of the target's armour, so it is best on models that reliably land (Attack 3+ vs Dex ≤5). Net, armour erodes it (1.00 vs soft down to 0.79 vs Prot 5). Weaknesses: it does nothing on a whiff, and a flat bonus is wasted as overkill on a hit that already kills.

### +X Attack

The most versatile boost: it raises average, ceiling, AND reliability (more dice means more likely to land), and is the **only damage lever that also powers Grapple and Drown**. It scales hard with the target's Dexterity, from +0.80 vs soft (Dex 3) down to +0.35 vs a Dex 7 dodger.

### Expert Offence / Marksman

A reliability lever, not an output lever. It converts near-misses, giving the lowest whiff rate and the tightest Damage spread, but it can **never exceed your Attack dice** (no ceiling gain). On average output it stays **below +X Attack across the entire Dexterity range**. Worthless for attacking via Grapple/Drown.

### Penetration

Pure post-Protection damage: it adds **nothing** raw (+0.00) and is worth about **+0.4 per stripped Protection die**, up to the minimum between X and the target's Protection. It is zero against unarmoured targets and **fully negated by Universal Shielding** (+0.00 vs the pen-proof tank). Net value sits around +0.4 against light-to-medium armour and dips slightly against the very heaviest armour as Damage floors out.

### −X Evasion

Flat accuracy, not an anti-evasive tool. It lowers the target's effective Dexterity by X, a uniform **+0.40 raw against any target regardless of its Dexterity** (≈ +0.1 hit chance per die at Attack 4). Net, it erodes into armour (+0.40 vs soft down to +0.28 vs Prot 5). It is only "worth most against evasive targets" as a **percentage** of their lower output, not in absolute Damage.

### Fear

A low-average, high-variance accuracy rider keyed to target MIND. On a trigger it re-rolls *all* your missed attack dice (conditional net roughly +0.56, a bigger swing than Expert Offence), but the trigger rate is `0.6^MIND`, collapsing from 60% vs MIND 1 to roughly 22% vs MIND 3 to roughly 13% vs MIND 4, and is **zero against Brave**. Average value runs +0.34 (MIND 1) down to +0.07 (MIND 4). A conditional bonus that pays off against low-MIND gangs.

### Poisoned

The strongest rider when the hit lands, and it scales with the target's base size. The extra LP bypasses Protection, triggers 60% of the time, and grows from +1.44 vs a 30mm body up to +2.89 vs 60mm+ (at Prot 3), making it anti-tank / anti-monster. The catch is the gate: it only fires after the attack deals ≥1 LP, so against heavy armour (Prot 5) it drops to +1.09 to +2.18, weakest exactly where the size bonus is biggest. A poisoned weapon that cannot break armour does nothing.

### Expert Grappler

The re-roll lever for Grapple and Drown, the analog of Expert Offence (which does **not** apply to those actions). Uniquely among the offence re-rolls it works **both making and defending** the opposed ATTACK Roll, so it doubles as defence against enemy control. On a **Drown** it adds about **+0.45 LP** at X=1 (parity ATTACK), unblockable by Protection. On a **Grapple** it buys roughly **+8% success and +0.4" of push** at X=1. Like Expert Offence it has steep diminishing returns (X=2 barely beats X=1), and it is dwarfed by the **+1 ATTACK a larger base grants** to either side of the roll (roughly +0.5 to +0.7 LP on a Drown).

## Maths

Expected bonus Damage per single Combat attack (Attacker ATK 4) against each reference defender. Defender labels give Dexterity and Protection (US = Universal Shielding).

**Net (post-Protection) — the Damage that actually lands:**

| Lever | soft (D3/P1) | balanced (D4/P3) | evasive (D6/P2) | dodger (D7/P2) | armoured (D4/P5) | pen-proof (P5/US5) |
|---|---|---|---|---|---|---|
| **+1 Damage** | +1.00 | +0.93 | +0.88 | +0.80 | +0.79 | +0.79 |
| **+1 Attack** | +0.80 | +0.65 | +0.46 | +0.35 | +0.56 | +0.56 |
| **−1 Evasion** (weapon) | +0.40 | +0.36 | +0.36 | +0.34 | +0.28 | +0.28 |
| **Expert Off/Marks (1)** | +0.39 | +0.41 | +0.40 | +0.33 | +0.33 | +0.33 |
| **Penetration −1** | +0.30 | +0.38 | +0.39 | +0.34 | +0.28 | +0.00 |

**Raw (pre-Protection) — isolates the to-hit effect:**

| Lever | soft (D3/P1) | balanced (D4/P3) | evasive (D6/P2) | dodger (D7/P2) | armoured (D4/P5) | pen-proof (P5/US5) |
|---|---|---|---|---|---|---|
| **+1 Damage** | +1.00 | +0.99 | +0.94 | +0.87 | +0.99 | +0.99 |
| **+1 Attack** | +0.80 | +0.70 | +0.50 | +0.40 | +0.70 | +0.70 |
| **−1 Evasion** (weapon) | +0.40 | +0.40 | +0.40 | +0.40 | +0.40 | +0.40 |
| **Expert Off/Marks (1)** | +0.39 | +0.46 | +0.44 | +0.37 | +0.46 | +0.46 |
| **Penetration −1** | +0.00 | +0.00 | +0.00 | +0.00 | +0.00 | +0.00 |

The two tables together tell the story: **+X Damage** and **−X Evasion** are flat raw (they depend only on landing the hit), and armour eats into them only net. **+X Attack** and **Expert Offence** track the target's Dexterity. **Penetration** is invisible raw and only appears net, vanishing against Universal Shielding.

Two levers vary on axes this Dex/Protection spread does not cover, so they get their own tables.

### Fear by target MIND

Fear(0), Attack 4 vs a Dex 4 / Prot 3 target. On a trigger it re-rolls every missed attack die, the conditional swing modelled here as re-rolling all (Attack − 1) non-Destiny failures.

| Target MIND | Trigger | Net | Raw |
|---|---|---|---|
| 1 | 60% | +0.34 | +0.38 |
| 2 | 36% | +0.20 | +0.23 |
| 3 | 22% | +0.12 | +0.14 |
| 4 | 13% | +0.07 | +0.08 |
| 5 | 8% | +0.04 | +0.05 |

Conditional re-roll-all gain on a trigger: net +0.56 / raw +0.63. **Brave** auto-passes the MIND roll, so Fear is +0.00 against it.

### Poisoned by base size

Poisoned LP bypasses Protection but is gated on the attack first dealing ≥1 LP, so it scales **up** with base size and **down** with the target's Protection.

| Defender | 30mm | 40mm | 50mm | 60mm+ |
|---|---|---|---|---|
| **vs Prot 3** | +1.44 | +1.92 | +2.41 | +2.89 |
| **vs Prot 5** | +1.09 | +1.45 | +1.81 | +2.18 |

### Expert Grappler (Grapple / Drown)

Grapple and Drown are **Opposed ATTACK Rolls**, not attacks against Dexterity / Protection, so they have a different defender axis: the target's **ATTACK** (and base size, since a larger base gives +1 ATTACK to either side of the roll). Drown deals LP directly with **no Protection Roll**. Expert Grappler (X) re-rolls up to X failed dice on the roll, **making or defending**.

Attacker ATTACK 4, expected outcome by the target's ATTACK:

**Drown — expected Life Points lost** (no Protection Roll):

| Target ATTACK | Expert Grappler 0 | (1) | (2) |
|---|---|---|---|
| 3 | 2.71 | 3.21 | 3.39 |
| 4 | 2.38 | 2.83 | 2.97 |
| 5 | 2.05 | 2.42 | 2.52 |

**Grapple — success chance / expected push:**

| Target ATTACK | Expert Grappler 0 | (1) | (2) |
|---|---|---|---|
| 3 | 74% / 2.6" | 83% / 3.1" | 86% / 3.2" |
| 4 | 67% / 2.3" | 75% / 2.7" | 78% / 2.8" |
| 5 | 58% / 2.0" | 66% / 2.3" | 68% / 2.4" |

A larger base (+1 ATTACK) swings a Drown by more than Expert Grappler itself: attacker-bigger 3.09 LP vs parity 2.38 vs defender-bigger 2.05 (attacker ATTACK 4). The same re-roll also fires when **defending**, blunting an enemy Grapple or Drown by a similar margin.

### Formulas

Vs a target with per-die hit chance `p` (`p = (11 − effective Dexterity) / 10`, clamped 0.1–0.9), Attack `A`:

- **+X Damage:** raw `+X × P(hit)` = `X × (1 − (1−p)^A)` (≈ +X for Attack 3+ vs Dex ≤5). Net subtracts the saves it then has to clear.
- **+X Attack:** raw `+X × p`. Pure hit chance, falls as the target's Dexterity rises.
- **−X Evasion (weapon):** adds to the target's **effective Dexterity** for the Attack Roll, so a negative value raises `p` by 0.1 per point: raw `+ A × 0.1 × X`, independent of the target's actual Dexterity. A **positive** Evasion modifier is the reverse, a to-hit penalty (the price heavy two-handers pay for high Dmg/Pen). Exact mirror of the defensive +X Dexterity lever.
- **Expert Off/Marks (X):** `+ E[min(X, failures)] × p`, failures ~ Binomial(**A − 1**, 1−p). Always below `X × p`, and below +X Attack across the realistic Dexterity range.
- **Penetration −X:** `+ min(X, Protection) × 0.4`, zero against Protection 0 and against the floor set by Universal Shielding.
- **Fear(X):** `P(trigger) × (re-roll value)`, `P(trigger) = 0.6^max(1, target MIND adjusted by X)`. The re-roll is **uncapped** (all failures, not X), so the *conditional* swing is large but the *average* is throttled by the trigger rate. Brave auto-passes.
- **Poisoned:** `P(deal ≥1 LP) × 0.6 × baseLP`, baseLP = 3 / 4 / 5 / 6 by 30 / 40 / 50 / 60mm+ base. Bypasses Protection, but the `P(deal ≥1 LP)` gate falls as the target's Protection rises.
- **Expert Grappler (X):** re-rolls up to X failed dice on the Grapple / Drown **Opposed ATTACK Roll**, making or defending. Same diminishing-returns shape as Expert Offence, applied to the attacker's pool after the defender's Aces are subtracted (`pool = max(0, ATK − defender Aces)`).
