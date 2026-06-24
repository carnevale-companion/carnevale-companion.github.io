---
title: Combat Capabilities Calculations
nav_order: 2
is_analysis: true
toc:
  - title: Purpose
    anchor: purpose
  - title: "Common unit: Life Points"
    anchor: common-unit-life-points
  - title: The engine
    anchor: the-engine
  - title: Magic sub-engine
    anchor: magic-sub-engine
  - title: Reference targets
    anchor: reference-targets
  - title: Annotation layers
    anchor: annotation-layers-not-in-the-cold-standard
  - title: Assumptions & limitations
    anchor: assumptions--limitations
  - title: Offence & defence at a glance
    anchor: offence--defence-at-a-glance
  - title: Resource economy
    anchor: resource-economy-wp--cp--magic
---

## Purpose

Put every non-leader model on a common, combat-grounded scale so we can answer comparative questions: standard output of a damage dealer, which faction
has the quality dealers, and which model is the most cost-efficient for its role.

To do that, we'll analyse how the offensive (EDPA) and defensive (ATK2K) capability scores are computed, what they assume, and where they stop.

## Common unit: Life Points

Both scores are expressed in **Life Points**, derived from combat maths (never from Ducats), so
offence, defence, and cost-efficiency are directly comparable and **non-circular**: cost-efficiency
(capability per Ducat) stays meaningful because capability is not built out of cost.

- **EDPA (Expected Damage Per AP).** Sustained, **Reload-aware**: over the model's full AP it greedily
  fills each AP with its best available action. For a Mage this is a **unified allocation** where weapons
  (Reload-capped), known damage spells (each castable **once per round**), and non-spell damage abilities
  all compete for the same AP, so a 2-AP mage chains two different spells, or a spell plus a weapon hit,
  whichever is best. Reported as a **vector** across reference defenders, with the headline figure vs the
  balanced reference. The companion **alpha** figure is the best single attack/cast: the burst on the turn
  it fires (weigh alpha for the kill turn, EDPA for sustained pressure).
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
a Critical raises (X) by 1). Damage-type spells roll the target's Protection
(with their Penetration). Direct-LP spells (Mother Hydra's Claws, Holy Light, Dagonite Baptism) bypass it. The per-cast
EDPA correctly **includes the cast-failure probability**.

### Which spells a mage casts

A mage does not cherry-pick the single best spell for each target. It commits to a **known set** before
the game, then casts the best of that set against each defender:

- **Quota** = `Mage(X) + Expert Sorcerer(Y)` paid spells, plus the Discipline's **Cantrip free and
  off-quota**. Expert Sorcerer both grants the casting re-roll and adds known spells.
- **One discipline.** Every spell in the set comes from a single Discipline, so the engine evaluates each
  accessible Discipline and keeps the set that scores best.
- **The known set is the quota-sized subset that maximises total output across the defender vector.**
  Flexibility therefore scales with spells known: a small quota lands on the all-round best spells (the
  same line cast against everyone), a large quota also sweeps up the per-defender specialists. Each spell
  is **once per round**, so chaining needs distinct known spells.

### Special cases

A few mages bend these rules and are handled individually: always casting **boosted** (+2 dice) when the
model self-funds the cost, drawing a known set from a **two-Discipline union**, knowing **every Cantrip**
or getting one **free extra Cantrip** per round, gaining **unique model-only spells** off-quota (the
Drowned Nun's Dagonite Baptism, a direct `Aces + 1` LP loss that ignores Protection), or being scored
**weapon-only** when the model casts only once per game.

Some abilities deal damage **outside** the Cast-Spell action, so the once-per-round cap does not apply and
they compete for AP as repeatable actions: flat direct LP loss (Blood Rights), or LP on a won Opposed
MIND roll (Fate's Aura of Inevitability).

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
- **Magic potential:** a mage's EDPA assumes its known set is filled with **damage** spells (the
  best-scoring quota-sized loadout). A support mage usually spends its slots on buffs/heals instead, so
  the flag reads as "could deal this", not "is mis-tagged". The once-per-round cap, AP, and quota are the
  limiters, not WP cost (own-pool sustainability is a separate annotation).
- **Hunter**, **conditional offence** (Fear / First Strike / Berserk / Brawler), and the **weapon riders** Stun / Knockback /
  Template are recorded per model, not scored. Reload also appears as a rider flag, but unlike these its firing cap is already folded into the Reload-aware EDPA.

## Assumptions & limitations

- **Per-AP, sustained.** EDPA amortises **Reload(X)** over the model's AP (a Reload(1) gun with no
  sidearm fires once, so its per-AP throughput ≈ half its alpha, while a Reload(2) gun on 2 AP is
  unaffected). Order/Counter give extra attacks beyond the activation, so multiply EDPA for those.
  The **alpha** figure preserves the single-shot burst for kill-turn analysis.
- **Sniper role.** Long-range (≥12") single-shot dealers whose value is one big shot from safety are
  a distinct role (`Sniper`), judged on **alpha**, not sustained, so they neither look like weak
  Damage Dealers nor drag the Damage Dealer standard down. A sniper below the Sniper alpha/Ducat
  median is weak even for its cost.
- **Melee vs ranged routing.** A weapon counts as melee at range ≤ 2" and ranged above. Parry and Expert
  Offence are really base-contact (0") abilities, the 2" cutoff just captures the 0-2" band that melee and
  reach weapons are listed at. The split only decides which to-hit re-roll applies (**Expert Offence**
  melee vs **Expert Marksman** ranged) and whether the defender's **Parry** can trigger.
- **Hunter** (Pen-3 vs larger base) is annotated only.
- **Hard-to-parse abilities** get a per-model defence override: Stoneskin (flat −3 Damage, min 1) on the
  Protection-0 Constructs Golgotha and Gethsemane, and Secreting Myxin's Mucus (+4 Dexterity in melee).
- **AoE/template** spells are scored single-target, with multi-target upside as annotation.
- **Excluded:** Cover, terrain, scenario/objective value, and hard-to-quantify control/support utility. A low EDPA for a Support/Objective Runner is expected, not a defect.

## Offence & defence at a glance

Dealer quality is shown both raw and **per-Ducat (value)**. The value column is the fair cross-faction ranking (raw favours factions with expensive dealers), and the table is sorted by it. `above value bar` = dealers at/above the global median EDPA/Ducat.

| Faction | DD EDPA (raw) | DD EDPA/Duc (value) | above value bar | snipers | median ATK2K | tanks | top offence |
|---|---|---|---|---|---|---|---|
| The Vatican | 3.21 (+10%) | 0.21 (+13%) | 6/6 | 3 | 11.5 | 1 | Venator of Devotion 4.7 |
| The Guild | 3.4 (+16%) | 0.21 (+9%) | 7/10 | 2 | 9.7 | 0 | Ostrich Chariot?! 5.96 |
| Rashaar | 2.54 (-13%) | 0.2 (+4%) | 2/4 | 0 | 9.7 | 2 | Morgraur 5.06 |
| The Doctors | 2.77 (-5%) | 0.19 (+0%) | 6/13 | 0 | 9.8 | 2 | Doctor of the Firmament 4.25 |
| Strigoi | 2.88 (-1%) | 0.17 (-11%) | 3/10 | 0 | 9.7 | 1 | Monstrous Stryx 5.31 |
| Patricians | 2.5 (-14%) | 0.17 (-10%) | 3/8 | 4 | 11.3 | 0 | Sun 3.63 |
| Gifted | 2.68 (-8%) | 0.15 (-19%) | 3/11 | 0 | 10.6 | 0 | Senshi the Undying 3.99 |

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
