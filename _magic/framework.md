---
title: Spell Evaluation Framework
description: Framework used to make the spell deep analysis
nav_order: 3
---

## How are spells evaluated

Baselines computed across all 30 paid spells (cantrips excluded from averages unless noted).
Effect magnitudes use **Mage (2)** as the reference level for numeric examples, but all analysis applies across Mage(1)–Mage(3) and Expert Sorcerer(X) values unless stated otherwise.

All spells are assessed across these dimensions:

### 1. Cost (WP)

The WP budget per game is finite and shared across all magic actions (casting, dispelling). Cost must be weighed against the gang's total WP pool and competing demands.

- **Benchmark:** 1 WP per activation is sustainable; 2 WP spells must deliver roughly double value or a unique effect.
- **Key caveat:** WP is spent whether the spell succeeds or fails. The real cost is `WP / P(success)` — a 1-WP spell at 60% success costs an effective 1.67 WP per cast.
- **P(success) is a lever, not a constant:** up to 2 additional WP may be committed to the casting roll to raise it. This trades raw WP for reliability — a Diff-8 spell sits at ~59% at MIND 4 unboosted but ~83% with +2 WP. Fold the boost into the effective cost: `effective cost = (cast WP + expected boost WP) / P(success at chosen boost)`. A high-Difficulty spell should not be judged at its bare success rate if you would routinely boost it.

### 2. Difficulty

Sets the per-die Ace threshold: P(Ace) = (11 − Difficulty) / 10. Controls both success rate and the expected number of Aces for scaling effects.

- **Benchmark:** Difficulty ≤ 6 is reliable at MIND 4+; Difficulty 7–8 requires MIND 5–6 for consistent performance.
- Note: Difficulty also governs **dispel exposure**, but counter-intuitively. A Dispel is an Opposed Magic Roll in which the dispelling Mage rolls against the **spell's own Difficulty** as threshold and may count Aces only up to their **Mage(X)** level. A **high-Difficulty spell is therefore *harder* to dispel**, not easier — the dispeller generates fewer Aces against a high threshold. The dominant factor is the dispeller's Mage(X) cap: a Mage(1) dispeller subtracts at most 1 die regardless of Difficulty. Model dispel strength as `min(dispeller Mage X, dispeller's expected Aces at the spell's Difficulty)`.

### 3. Range

Determines positioning requirement. Shorter range creates engagement risk; longer range allows safe backline casting.

- **Key thresholds:** ≤3" (melee range, very exposed), 6" (typical short), 8–12" (medium, some safety), 18" (extreme, near-unlimited).
- Self-centred templates (Kraken's Breath) trade range for area coverage.

### 4. AoE vs Single Target

AoE spells hit multiple characters but often include friendly fire risk and/or require specific positioning.

- **Single target:** predictable, no collateral risk.
- **Template AoE:** high potential value but requires clustering of enemies; friendly fire possible.
- **Line AoE (Waves of Force):** requires terrain setup (water line of sight).
- **Blast placed at range (Abyssal Mist, Groundsnap, Ice Lock):** safe delivery but often delayed or terrain-restricted.

### 5. Damage / Healing Value

Raw output before applying Protection or other modifiers. Two sub-types with fundamentally different interactions:

- **Damage:** triggers a Protection Roll. Each Protection die reduces Damage by 1 on 40% chance. Penetration reduces effective Protection (see Penetration Math section).
- **LP loss:** bypasses Protection entirely. More reliable against armoured targets; directly comparable across all Protection values.

### 6. Buff / Debuff Math

Stat buffs and debuffs scale non-linearly depending on the affected stat and the game context.

- **+Attack:** adds dice to the attack pool. Value depends on base Attack and the target's Dexterity.
- **+Protection:** adds dice to the protection pool. Each extra die = 0.4 expected Damage reduction.
- **+Dexterity:** adds dice to the defence pool. Value depends on attacker's Attack stat.
- **Stun:** removes the target's next activation entirely (unless they have anti-Stun effects). Equivalent to stealing 1–3 AP.
- **Stat debuffs (Curse of the Rent, Sunder Armour):** mirror analysis — subtracting from a stat has the same math as adding to the opposing stat.
- Buff math uses the real non-leader medians (Attack 3, Dexterity 4, Protection 3): **+Attack** ≈ +(11−Dex)/10 hits per die (≈+0.7 vs Dex 4); **+Protection** ≈ +0.4 LP saved per die (capped by incoming damage); **+Dexterity** ≈ −(attacker Attack × 0.1) damage per attack.

### 7. Scarcity Across Schools

How many disciplines offer a similar effect? Unique effects command a premium because they cannot be replicated by switching discipline.

- **High scarcity (one discipline only):** Destiny Die re-rolls (Fateweaving), Stun immunity (Runes), Teleport without AoO (Wild Magic), full action control (Runes).
- **Low scarcity (multiple disciplines):** direct damage (Blood Rites + Wild Magic), LP healing (Divinity + Wild Magic + Blood Rites), stat buffs (Divinity + Fateweaving).
- Scarcity affects list-building decisions: if your faction can only access one discipline, irreplaceable effects from that discipline have extra value.

### 8. Effect Timing

When does the spell's effect resolve?

- **Immediate:** resolves when cast. Full tactical value.
- **End-of-round:** opponent has a full turn to react, reposition, or move out of templates (Abyssal Mist, Aqua Curitiva, Groundsnap zone, Ice Lock zone). These are significantly weaker in practice than their raw numbers suggest.

### 9. Targeting Restrictions

Hard constraints on when a spell can be cast at all.

- **Mage-only targets (Holy Light):** effect is zero if no enemy Mages are in range.
- **Water-only (Ice Lock, Waves of Force):** requires water tiles. The recommended terrain rule of thirds (1/3 water, 1/3 ground, 1/3 buildings) means water is present in every game, so both spells are relevant — the constraint is positioning, not board availability.
- **Self-centred template (Kraken's Breath):** caster must be in the fight; cannot be cast safely from range.
- **Proximity required (Gateway, Madness, Fiery Rhetoric):** ≤1" means base contact or nearly so — the caster is exposed.
- **Friendly-only / enemy-only:** limits flexibility in spells that would otherwise be versatile.

### 10. Friendly Fire Risk

AoE spells that hit both friendly and enemy characters create a positioning cost.

- Boiling Veins kill explosion: Blast template centred on the dying model — can hit nearby allies.
- Kraken's Breath template: affects everything touched, including allies in the cone.
- These spells are not weaker on paper, but their practical value drops in tight formations.

### 11. Reliability vs Variance

Two spells with the same expected output can have very different risk profiles.

- **Fixed output (Blood Drain, Kraken's Breath):** predictable; good for planning guaranteed LP thresholds (killing a model, enabling a combo).
- **Dice-scaling output (Summon Vermin, Boiling Veins, Mother Hydra's Claws):** high ceiling, floor near zero. Better when you need maximum burst; unreliable for precise planning.
- Variance compounds with Difficulty: a high-variance, high-difficulty spell can simply fail to deliver anything meaningful.

### 12. WP Economy

Net WP investment per meaningful result, accounting for fail cost.

- Failed casts lose WP with no effect. At Difficulty 7 with MIND 4 (76% success), ~1 in 4 casts wastes WP.
- Fumble is doubly punishing: Stunned + extra WP loss + no more casts this turn.
- Spells that return WP on success (Cantrip of the Sun +1 WP, Critical +1 WP) partially offset the cost.
- Compare: Fate's Bounty at Difficulty 4 has ~97% success at MIND 4 — nearly zero expected WP waste.

### 13. Action Economy Impact

Does the spell generate AP advantage, steal it, or simply trade action-for-effect?

- **Steals enemy actions (Madness):** the enemy's action counts as a free bonus — essentially a +1 AP action.
- **Restores friendly actions (Renewed Vigour, Fiery Rhetoric):** un-Stunning = recovering a lost activation; +1 CP = a command action.
- **Enables further actions (Walk Between Worlds + repositioned attack):** creates combo potential.
- **Neutral (most damage/healing spells):** 1 AP spent for direct effect; no secondary AP gain.

### 14. Replaceability

Can the effect be achieved without magic, or by a weapon/ability?

- **Irreplaceable (magic only):** Stun immunity, Destiny Die manipulation, teleportation without AoO, full action control, area denial with impassable terrain.
- **Partially replaceable:** LP healing (some abilities heal), stat buffs (equipment can buff too), direct damage (ranged weapons exist).
- **Highly replaceable:** +Attack buff for a model that already attacks in melee anyway.
- Irreplaceable effects justify a higher WP and difficulty ceiling because there is no alternative.
