---
title: Combat Capabilities Calculations
nav_order: 2
is_analysis: true
---

## Purpose

Put every non-leader model on a common, combat-grounded scale so we can answer comparative questions: standard output of a damage dealer, which faction
has the quality dealers, which model is the most cost-efficient for its role.

To do that, we'll analyze how the offensive (EDPA) and defensive (ATK2K) capability scores are computed, what they assume, and where they stop.

## Common unit: Life Points

Both scores are expressed in **Life Points**, derived from combat math (never from Ducats), so
offense, defense, and cost-efficiency are directly comparable and **non-circular**: cost-efficiency
(capability per Ducat) stays meaningful because capability is not built out of cost.

- **EDPA (Expected Damage Per AP).** Sustained, **Reload-aware**: over the model's full AP the best
  weapon fires up to its Reload cap, then the next-best weapon fills remaining AP (best of weapons /
  damage spells, with Mages taking their best damage spell). Reported as a **vector** across reference
  defenders, with the headline figure vs the balanced reference. The companion **alpha** figure is the best single
  attack/cast: the burst on the turn it fires (weigh alpha for the kill turn, EDPA for sustained pressure).
- **ATK2K (Attacks-To-Kill).** `LP ÷ (expected net LP lost per incoming attack)`, the
  EHP-equivalent survivability number, folding LP, Dexterity, Protection, Parry, and Universal
  Shielding into "how many reference attacks this model survives." Higher = tankier.

## The engine

A **Monte Carlo simulator** that resolves one Combat attack exactly as the
rules specify:

1. **Attack Roll:** `Attack` dice (one is the Destiny die), threshold = target Dexterity + the
   weapon's Evasion modifier. Per-die Ace chance `(11 − effDex)/10`, clamped [0.1, 0.9] (10 always
   Aces, 1 never).
2. **Expert Offence / Marksman (X):** re-roll up to X failed **non-Destiny** dice once.
3. **Parry (X)** (defender, melee only): force re-roll of up to X of the attacker's Aces.
4. **Hit / Critical:** hit on ≥1 Ace. Critical when Destiny = 10 **and** ≥1 other Ace (adds the
   flat +1 LP, bypassing Protection).
5. **Damage** = Aces + flat weapon Damage (applied once on a hit).
6. **Protection Roll:** `Protection` dice at 7+, reduced point-for-point by Penetration and floored
   by Universal Shielding, and each Ace cancels 1 Damage (capped at incoming, Protection Crit +1, Fumble
   −1). Overkill is wasted.
7. **Poisoned:** on dealing ≥1 LP, 60% chance of extra LP by base size (bypasses Protection).

## Magic sub-engine

Spell damage rides the same LP unit. A cast is `EDPA = P(success | MIND, Difficulty)
× effective damage`, where success uses a MIND roll vs the spell's Difficulty (Expert Sorcerer re-rolls,
Critical raises (X) by 1). Damage-type spells roll the target's Protection
(with their Penetration). Direct-LP spells (Mother Hydra's Claws, Holy Light) bypass it. The per-cast
EDPA correctly **includes the cast-failure probability**.

## Reference targets

Carnevale Dexterity clusters hard at 4 (181/274 models), so percentile-derived archetypes collapse
together. Instead the archetypes are anchored to real but **spread**
ends of each distribution, so the EDPA/ATK2K vectors are informative. The balanced reference
(Dex 4 / Prot 3) matches the modifiers-doc calibration point.

**Defenders:** balanced (Dex4/Prot3) · soft (Dex3/Prot1) · evasive (Dex6/Prot2) · armoured (Dex4/Prot5)
· pen-proof tank (Dex4/Prot5 + Shielding 5) · parry (Dex5/Prot3 + Parry 2).

**Attackers:** baseline (Atk3) · elite (Atk5, +1 Dmg) · penetrator (Atk3, Pen-3) · drown (opposed
Attack roll, ignores Protection, Water Creatures immune).

## Annotation layers (NOT in the cold standard)

The base scores are computed **cold** (no WP, no Frenzy LP, no situational triggers), so the standard
is clean. The following are surfaced only in comparison:

- **Frenzy:** burst EDPA with +2 LP-dice on the best melee weapon, and its LP cost (2 LP/boosted
  attack). This is what explains a faction sitting below the cold standard yet hitting hard in
  practice (e.g. Strigoi dealers near the cold standard, but heavily Frenzied with large burst).
- **WP-boost:** boosted attack EDPA with +2 WP-dice on the best attack (own-WP models), plus how
  many fully-boosted attacks the starting pool affords. At the faction level, paired with the WP
  *generation* tier, the layer that lifts WP-rich factions
  (Vatican, Patricians, Doctors) above their cold standard. Parallel to Frenzy, but WP-fuelled.
- **Magic potential:** a mage's EDPA assumes it took its best **damage** spell. A support mage
  usually spends its slots on buffs/heals instead.
- **Vampiric Attack, Hunter, conditional offence** (Fear / First Strike / Berserk / Brawler), and
  **weapon riders** (Stun / Knockback / Template / Reload) are recorded per model, not scored.

## Assumptions & limitations

- **Per-AP, sustained.** EDPA amortises **Reload(X)** over the model's AP (a Reload(1) gun with no
  sidearm fires once, so its per-AP throughput ≈ half its alpha. A Reload(2) gun on 2 AP is
  unaffected. Order/Counter give extra attacks beyond the activation, so multiply EDPA for those.
  The **alpha** figure preserves the single-shot burst for kill-turn analysis.
- **Sniper role.** Long-range (≥12") single-shot dealers whose value is one big shot from safety are
  a distinct role (`Sniper`), judged on **alpha**, not sustained, so they neither look like weak
  Damage Dealers nor drag the Damage Dealer standard down. A sniper below the Sniper alpha/Ducat
  median is weak even for its cost.
- **Hunter** (Pen-3 vs larger base) is inactive against the 30mm reference targets, annotated only.
- **AoE/template** spells are scored single-target, with multi-target upside as annotation.
- **Excluded:** Cover, terrain, scenario/objective value, and
  hard-to-quantify control/support utility. A low EDPA for a Support/Objective Runner is expected,
  not a defect.

## Offense & defense at a glance

Dealer quality is shown both raw and **per-Ducat (value)**; the value column is the fair cross-faction ranking (raw favours factions with expensive dealers), and the table is sorted by it. `above value bar` = dealers at/above the global median EDPA/Ducat.

| Faction | DD EDPA (raw) | DD EDPA/Duc (value) | above value bar | snipers | median ATK2K | tanks | top offense |
|---|---|---|---|---|---|---|---|
| The Guild | 3.4 (+15%) | 0.23 (+21%) | 9/12 | 1 | 9.7 | 0 | Baba-Yaga 5.46 |
| The Vatican | 3.29 (+12%) | 0.22 (+18%) | 6/7 | 2 | 11.5 | 1 | Venator of Devotion 4.7 |
| Rashaar | 2.96 (+0%) | 0.22 (+14%) | 3/4 | 0 | 9.7 | 2 | Morgraur 5.06 |
| The Doctors | 2.77 (-6%) | 0.19 (+0%) | 6/13 | 0 | 9.8 | 2 | Doctor of the Firmament 4.71 |
| Strigoi | 3.0 (+2%) | 0.18 (-7%) | 4/10 | 0 | 9.7 | 1 | Monstrous Stryx 5.31 |
| Patricians | 2.13 (-28%) | 0.16 (-14%) | 3/9 | 3 | 11.3 | 0 | Moon 3.7 |
| Gifted | 2.68 (-9%) | 0.15 (-19%) | 4/11 | 0 | 10.6 | 0 | Senshi the Undying 3.99 |

## Resource economy (WP / CP / magic)

| Faction | WP total | CP (models) | mages | disciplines |
|---|---|---|---|---|
| Patricians | 110 | 47 (23 models) | 2 | 3 |
| The Guild | 120 | 41 (19 models) | 4 | 5 |
| Rashaar | 110 | 33 (12 models) | 6 | 4 |
| Strigoi | 27 | 31 (12 models) | 6 | 4 |
| The Vatican | 115 | 30 (11 models) | 9 | 5 |
| The Doctors | 73 | 27 (11 models) | 7 | 5 |
| Gifted | 97 | 10 (4 models) | 4 | 5 |

## Build shape & scenario

| Faction | cost range | premium ≥18 | Mindless | obj-runners | mobile |
|---|---|---|---|---|---|
| Patricians | 5–32 (med 14) | 16% | 14% | 1 | 9 |
| Strigoi | 6–40 (med 14) | 39% | 17% | 1 | 16 |
| Gifted | 8–30 (med 16.0) | 35% | 21% | 3 | 8 |
| The Vatican | 8–37 (med 15.0) | 21% | 23% | 1 | 10 |
| The Guild | 5–34 (med 14) | 19% | 26% | 3 | 20 |
| Rashaar | 4–68 (med 15) | 40% | 36% | 3 | 36 |
| The Doctors | 4–45 (med 13) | 19% | 40% | 0 | 11 |

Mindless can't score Primary Objectives — high % is a scoring liability. Cost spread shows elite-vs-fodder disparity (Rashaar 4–68 is the widest).
