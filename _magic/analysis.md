---
title: Deep Analysis
nav_order: 2
prev_doc:
  title: Rules Reference
  url: /magic/
next_doc:
  title: Disciplines Overview
  url: /magic/disciplines/
---

Baselines computed across all 30 paid spells (cantrips excluded from averages unless noted).
Effect magnitudes use **Mage (2)** as the reference level for numeric examples, but all analysis applies across Mage(1)–Mage(3) and Expert Sorcerer(X) values unless stated otherwise.

---

## Spell Evaluation Framework

All spells should be assessed across these dimensions before drawing conclusions. No single dimension is decisive; good spells score well on several.

### 1. Cost (WP)

The WP budget per game is finite and shared across all magic actions (casting, dispelling). Cost must be weighed against the gang's total WP pool and competing demands.

- **Benchmark:** 1 WP per activation is sustainable; 2 WP spells must deliver roughly double value or a unique effect.
- **Key caveat:** WP is spent whether the spell succeeds or fails. The real cost is `WP / P(success)` — a 1-WP spell at 60% success costs an effective 1.67 WP per cast.
- **P(success) is a lever, not a constant:** up to 2 additional WP may be committed to the casting roll to raise it. This trades raw WP for reliability — a Diff-8 spell sits at ~59% at MIND 4 unboosted but ~83% with +2 WP. Fold the boost into the effective cost: `effective cost = (cast WP + expected boost WP) / P(success at chosen boost)`. A high-Difficulty spell should not be judged at its bare success rate if you would routinely boost it.

### 2. Difficulty

Sets the per-die Ace threshold: P(Ace) = (11 − Difficulty) / 10. Controls both success rate and the expected number of Aces for scaling effects.

- **Benchmark:** see Difficulty Accessibility table below. Difficulty ≤ 6 is reliable at MIND 4+; Difficulty 7–8 requires MIND 5–6 for consistent performance.
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

Always identify which type a spell deals before comparing values.

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

---

## Global Averages (paid spells only)

| Metric | Average | Min | Max |
|--------|---------|-----|-----|
| Cost (WP) | **1.33** | 1 | 2 |
| Difficulty | **6.37** | 3 | 8 |
| Range | **7.0"** | 1" | 18" |

**Cost distribution:** 20× cost 1 (67%) / 10× cost 2 (33%)

**Difficulty distribution:**

| Difficulty | Count | % |
|------------|-------|---|
| 3 | 1 | 3% |
| 4 | 2 | 7% |
| 5 | 4 | 13% |
| 6 | 7 | 23% |
| 7 | 8 | 27% |
| 8 | 8 | 27% |

→ Most spells cluster at **6–8**. Difficulty ≤ 5 is genuinely easy; difficulty 8 requires investment (WP or high MIND).

---

## Per-Discipline Breakdown

| Discipline | Avg Cost | Avg Difficulty | Avg Range | Theme |
|------------|----------|---------------|-----------|-------|
| Blood Rites | 1.50 | 6.00 | 6.5" | Damage, drain, splash |
| Divinity | 1.17 | 7.00 | 7.0" | Heal, armour, anti-Mage |
| Fateweaving | 1.17 | 5.83 | 8.0" | Stat buffs/debuffs, re-rolls |
| Runes of Sovereignty | 1.50 | 6.83 | 6.0" | Control, movement, freeze |
| Wild Magic | 1.33 | 6.17 | 7.5" | Versatility, teleport, armour shred |
| **All disciplines** | **1.33** | **6.37** | **7.0"** | |

**Key observations:**
- **Fateweaving** is the cheapest and easiest to land on average — high accessibility.
- **Divinity** is the hardest on average (7.0) despite being the healing discipline — high bar for support.
- **Blood Rites** and **Runes** cost more on average — their 2-WP spells are among the most impactful.
- **Fateweaving** has the longest average range (18" outlier from Marksman's Fortune).

---

## Cantrip Comparison

| Cantrip | Discipline | Difficulty | Effect summary |
|---------|------------|------------|----------------|
| Cantrip of the Devil | Blood Rites | 7 | Enemy in 3": 1 LP loss OR 2 Damage Pen -2 |
| Cantrip of the Sun | Divinity | 7 | Friendly in 6": +1 LP +1 WP |
| Cantrip of the Stars | Fateweaving | 5 | Re-roll Destiny Die once until next turn |
| Cantrip of the Chariot | Runes of Sovereignty | 7 | Friendly in 6": free Run/Climb (no charge) |
| Cantrip of Justice | Wild Magic | 7 | Immediately cast any Mage's known spell in LOS at 0 AP |

**Standout:** Cantrip of Justice is uniquely powerful — 0 AP access to any spell in LOS. Cantrip of the Stars is the easiest (diff 5) and provides rare Destiny Die control.

---

## Spells by Category

### Damage Spells

| Spell | Discipline | Cost | Diff | Range | Damage at X=2 (Success) | Notes |
|-------|------------|------|------|-------|--------------------------|-------|
| Cantrip of the Devil | Blood Rites | 0 | 7 | 3" | 1 LP loss OR 2 Dmg Pen -2 | Choice of effect |
| Boiling Veins | Blood Rites | 1 | 3 | 8" | (Aces − 2) Dmg Pen -2 | Scales with Aces; splash on kill |
| Blood Drain | Blood Rites | 1 | 7 | 6" | 2 Dmg Pen -4 | Heals friendlies 6" of target |
| Kraken's Breath | Blood Rites | 2 | 6 | Template | 4 Dmg Pen -2 (template) | Friendly fire risk |
| Mother Hydra's Claws | Blood Rites | 2 | 6 | 6" | (Aces+2) LP split among 2 targets | Multi-target LP loss |
| Holy Light | Divinity | 1 | 8 | 6" AoE | 2 LP + Stun vs enemy Mages | Situational (Mages only) |
| Summon Vermin | Wild Magic | 1 | 5 | 12" | (Aces+2) Dmg primary, 1 Dmg splash | Easy, long range |
| Groundsnap | Wild Magic | 2 | 7 | 8" | 2 Dmg + forced move + impassable | Zone denial |
| Sunder Armour | Wild Magic | 2 | 7 | 6" | -3-(X) Protection = -5 Prot | Debuff, no direct damage |

**Damage averages (paid damage spells only, X=2 fixed effect):**

| Metric | Value |
|--------|-------|
| Avg cost | 1.56 WP |
| Avg difficulty | 6.33 |
| Avg range | 7.1" |
| Avg fixed damage at X=2 (excl. Aces-scaling) | ~2.5 Dmg / 2.0 LP loss |

**Benchmark damage at X=2:** a solid spell does ~2–4 Damage or 2–3 LP loss for 1 WP. Penetration values commonly range from -2 to -4.

---

### Healing Spells

| Spell | Discipline | Cost | Diff | Range | Healing at X=2 (Success) | Notes |
|-------|------------|------|------|-------|--------------------------|-------|
| Cantrip of the Sun | Divinity | 0 | 7 | 6" | +1 LP +1 WP | Best cantrip for sustain |
| Rejuvenation | Divinity | 1 | 7 | 12" | (Aces+2) LP split freely | Flexible multi-target |
| Aqua Curitiva | Divinity | 2 | 8 | 6" | +4 LP to friends at end of round | Delayed; also Stuns enemies |
| Blood Drain | Blood Rites | 1 | 7 | 6" | 2 LP to any friend within 6" of target | Conditional on target taking LP |
| Healing | Wild Magic | 1 | 5 | 6" | +2 LP | Simplest heal in the game |

**Healing averages (paid healing spells only, X=2):**

| Metric | Value |
|--------|-------|
| Avg cost | 1.25 WP |
| Avg difficulty | 6.75 |
| Avg range | 7.5" |
| Avg healing at X=2 | ~2–4 LP |

**Benchmark healing at X=2:** expect 2 LP for 1 WP on a straightforward spell (Healing, Divinity cantrip). Rejuvenation scales better with high MIND but costs more to land.

---

### Buff Spells

| Spell | Discipline | Cost | Diff | Range | Buff at X=2 | Duration |
|-------|------------|------|------|-------|-------------|----------|
| Protection of the Eye | Divinity | 1 | 5 | 6" | Universal Shielding 5 | End of next turn |
| Eldritch Armour | Divinity | 1 | 6 | 6" | +2 PROTECTION | End of next turn |
| Defender of Destiny | Divinity | 1 | 8 | 6" AoE | Parry(2) + Expert Protection(2) all allies | End of round |
| Blessing of the Sky | Fateweaving | 1 | 7 | 6" | +2 distributed ATTACK/DEX/MIND | End of next turn |
| Glimpse of Glory | Fateweaving | 1 | 8 | 6" | Parry(2)+ExpOff(2)+ExpMark(2)+ExpProt(2) | End of next turn |
| They Sleep Underwater | Wild Magic | 1 | 5 | 12" | Fast Swimmer(2) to 2 targets | End of round |
| Walk Between Worlds | Runes | 2 | 6 | 6" | Ethereal + Flight + Slippery | End of next turn |
| Renewed Vigour | Runes | 1 | 6 | 12" | Anti-Stun + Stun immunity to 2 chars | End of round |

**Buff benchmark at X=2:** 1 WP typically grants one strong ability (+2 to a stat, Expert X(2)) to one character until end of next turn. Multi-character or multi-ability buffs cost more or require higher difficulty.

> ⚠ **Universal Shielding is not flat Protection.** US(X) sets a *minimum* Protection floor, capped at the target's **starting** Protection, and only activates when an attacker's Penetration would drop effective Protection below that floor. Protection of the Eye granting "Universal Shielding 5" is **anti-Penetration insurance**, not generic durability: against a no-Penetration attacker on a model already at its starting Protection it contributes **zero**, and the "5" ceiling is only reachable on models whose starting Protection is ≥5. Rate it high specifically against Penetration-heavy threats (Blood Rites, post–Sunder Armour), low otherwise.

---

### Debuff / Control Spells

| Spell | Discipline | Cost | Diff | Range | Effect at X=2 | Notes |
|-------|------------|------|------|-------|---------------|-------|
| Abyssal Mist | Blood Rites | 2 | 8 | 12" | Stun at end of round + LoS block | Delayed effect |
| Curse of the Rent | Fateweaving | 1 | 7 | 6" | -(2) distributed enemy ATTACK/DEX/MIND | Mirror of Blessing of the Sky |
| Marksman's Fortune | Fateweaving | 1 | 4 | 18" | Reload(X) ±1 on target | Very easy, long range |
| Waves of Force | Runes | 1 | 8 | 6" water | Grapple on a line (water) | Requires water setup |
| Ice Lock | Runes | 2 | 6 | 8" water | Stun + forced move + solid ground | Water only |
| Madness | Runes | 2 | 8 | 3" | Full control of enemy action | Most powerful control |
| Sunder Armour | Wild Magic | 2 | 7 | 6" | -5 PROTECTION | Softener for alpha strike |

**Control benchmark:** 1 WP debuffs one stat by ~2 or applies a Stun condition. Full action control (Madness) costs 2 WP with high difficulty (8) and requires proximity (3").

---

### Utility Spells

| Spell | Discipline | Cost | Diff | Range | Effect | Notes |
|-------|------------|------|------|-------|--------|-------|
| Cantrip of the Stars | Fateweaving | 0 | 5 | Self | Re-roll Destiny Die once | Rare and valuable |
| Fate's Bounty | Fateweaving | 2 | 4 | Self | (Aces+2) free re-rolls | Easiest 2-WP spell |
| Otherworldly Oddity | Fateweaving | 1 | 5 | 12" | Terrain buff/block | Positioning control |
| Fiery Rhetoric | Runes | 1 | 7 | 1" | +1 CP to friendly | CP economy |
| Gateway | Wild Magic | 1 | 8 | 1"/8" | Teleport, no AoO | No friendly-fire risk |
| Cantrip of the Chariot | Runes | 0 | 7 | 6" | Free Run/Climb (no charge) | Positioning tool |
| Cantrip of Justice | Wild Magic | 0 | 7 | LOS | Cast any mage's known spell at 0 AP | Exceptional versatility |

---

## Cost/Difficulty/Effect Efficiency Summary

### Best value at 1 WP (difficulty ≤ 6)

| Spell | Diff | Effect |
|-------|------|--------|
| Boiling Veins | 3 | Damage scaling + splash on kill |
| Marksman's Fortune | 4 | Long-range Reload disruption |
| Otherworldly Oddity | 5 | Terrain control 12" |
| They Sleep Underwater | 5 | Fast Swimmer(2) to 2 chars |
| Healing | 5 | +2 LP straightforward |
| Summon Vermin | 5 | (Aces+2) damage + splash, 12" |
| Protection of the Eye | 5 | Universal Shielding 5 |
| Renewed Vigour | 6 | Anti-Stun + immunity, 2 chars, 12" |
| Eldritch Armour | 6 | +2 PROTECTION |

### Most expensive spells (2 WP) — are they worth it?

| Spell | Diff | Effect at X=2 | Verdict |
|-------|------|---------------|---------|
| Kraken's Breath | 6 | 4 Dmg Pen -2 template (base contact) | High damage but self-centred template |
| Mother Hydra's Claws | 6 | ~4-5 LP split among 2 targets | Unreliable without high MIND |
| Walk Between Worlds | 6 | Ethereal+Flight+Slippery | Exceptional mobility package |
| Ice Lock | 6 | Stun+move+solid ground (water) | Strong water denial |
| Abyssal Mist | 8 | LoS block + delayed Stun | Hard to land, slow payoff |
| Fate's Bounty | 4 | (Aces+2) re-rolls | Extremely easy, very impactful |
| Aqua Curitiva | 8 | +4 LP friends / Stun enemies | Hard to land, strong if it hits |
| Groundsnap | 7 | 2 Dmg + deny area | Moderate damage, good denial |
| Sunder Armour | 7 | -5 PROTECTION | Strong debuff pre-alpha strike |
| Madness | 8 | Full enemy action control | Most powerful control spell |

**2-WP benchmark:** should deliver roughly double the effect of a 1-WP spell, or a unique effect not achievable at 1 WP. Walk Between Worlds, Fate's Bounty, Sunder Armour, and Madness clear this bar easily. Abyssal Mist and Mother Hydra's Claws are the weakest 2-WP options.

---

## Difficulty Accessibility by MIND Value

How likely is a success (≥1 Ace) depending on MIND and difficulty:

| MIND | Dice | Diff 3 | Diff 4 | Diff 5 | Diff 6 | Diff 7 | Diff 8 |
|------|------|--------|--------|--------|--------|--------|--------|
| 2 | 2 | 96% | 84% | 75% | 64% | 51% | 36% |
| 3 | 3 | 99% | 94% | 88% | 78% | 66% | 49% |
| 4 | 4 | ~100% | 97% | 94% | 87% | 76% | 59% |
| 5 | 5 | ~100% | 99% | 97% | 92% | 83% | 67% |
| 6 | 6 | ~100% | ~100% | 99% | 95% | 88% | 74% |

*P(success) = 1 − (1 − p)^n where p = (11 − difficulty) / 10*

→ At MIND 4 (typical for dedicated Mages), avg difficulty 6.37 gives ~83% success before WP. Difficulty 8 spells (27% of spells) drop to ~59% — these often need 1 WP investment to be reliable.

---

## Penetration Math

**Core formula:** each point of Penetration removes one Protection die. Each Protection die rolls at 7+, succeeding 40% of the time (reducing Damage by 1 on success).

**Therefore: 1 point of Penetration = +0.4 expected effective Damage.**

This is a fixed conversion assuming the target has at least as many Protection dice as the Penetration value. If Penetration exceeds Protection, excess Penetration is wasted (Protection floors at 0).

**Hard ceiling — Penetration removes mitigation, it never adds damage.** Effective Damage can never exceed the raw Damage value. The correct formula is:

```
effective Damage = Raw − max(0, Prot − |Pen|) × 0.4     (capped at Raw, floored at 0)
penetration benefit = min(|Pen|, Prot) × 0.4            (relative to the no-Pen baseline)
```

Two consequences worth stating because they are easy to get backwards: effective Damage **decreases** (or stays flat) as the target's Protection rises, and Penetration's benefit is only ever the *avoided* mitigation — you subtract the surviving Protection dice from Raw, you do **not** add the cancelled ones back on top.

| Penetration | Effective Damage bonus (vs adequate Protection) |
|-------------|------------------------------------------------|
| -1 | +0.4 |
| -2 | +0.8 |
| -3 | +1.2 |
| -4 | +1.6 |
| -5 | +2.0 |

**Example:** Blood Drain (X=2) deals 2 Damage Pen -4. Against a Protection 2 target: Pen -4 exceeds Prot 2, so effective Protection = 0 → the target rolls no Protection dice → the full 2 Damage lands. **Effective Damage = 2.0** (the raw value — the maximum; Penetration cannot push it higher). Without Penetration the same 2 Damage vs Prot 2 would be reduced by ~0.8 (2 dice × 0.4) → ~1.2 effective. So here Pen -4 is worth **+0.8 effective Damage**, the value of neutralising 2 Protection dice — not a jump to 2.8.

**Sunder Armour note:** reduces target Protection by 3+(X). At X=2, that's -5 Protection — equivalent to granting a follow-up attacker +2.0 effective Damage on their next hit. This is why Sunder Armour into a high-damage attack is one of the strongest 2-action sequences in the game.

---

## Effective Damage by Defender Type (Mage 2, engine-recalibrated)

Spells resolve on a **MIND roll vs Difficulty** (not vs Dexterity), so the only defender axis that matters is **Protection / Universal Shielding** — Dexterity, Parry, and evasion are irrelevant. Direct **LP-loss** spells bypass Protection entirely (flat across all columns).

| Spell | Cost | Type | Diff | P(succ) | soft (Prot1) | average (Prot3) | armoured (Prot5) | pen-proof (Prot5+US5) |
|---|---|---|---|---|---|---|---|---|
| Kraken's Breath | 2 | Damage (template) | 6 | 94% | 3.84 | 3.58 | 2.73 | 1.92 |
| Summon Vermin | 1 | Damage | 5 | 97% | 4.15 | 3.25 | 2.45 | 2.45 |
| Mother Hydra's Claws | 2 | LP loss (per target) | 6 | 94% | 1.90 | 1.90 | 1.90 | 1.90 |
| Blood Drain | 1 | Damage | 7 | 87% | 1.82 | 1.82 | 1.56 | 0.43 |
| Cantrip of the Devil | 0 | Damage | 7 | 87% | 1.74 | 1.48 | 0.78 | 0.37 |
| Boiling Veins | 1 | Damage | 3 | 100% | 1.14 | 0.92 | 0.44 | 0.19 |
| Groundsnap | 2 | Damage | 7 | 87% | 1.56 | 0.85 | 0.43 | 0.43 |

*Holy Light (2 LP-loss, Diff 8) hits enemy Mages only — situational, not tabled. Mother Hydra's Claws splits (Aces+X) LP among (X) targets; the figure is per target and armour-independent.*

**Key conclusions:**

- **Summon Vermin** is the best single-target damage spell and the best per-WP (1 WP), but with no Penetration it degrades most into armour (4.15 → 2.45) and Universal Shielding can't reduce it further (no Pen to floor).
- **Kraken's Breath** has the highest raw output and holds into armour; only the pen-proof tank blunts it — but it is a self-centred 2-WP template (the caster must be in the fight).
- **Blood Drain** stays flat (1.82) through Prot 3 via Pen -4, but that edge is **neutralised by Universal Shielding** (collapses to 0.43 vs the pen-proof tank); its heal is the real draw.
- **LP-loss spells (Mother Hydra's Claws, Holy Light) are flat 1.90 regardless of armour** — the only Protection-proof damage, so the best anti-tank / anti-Shielding option.
- **Boiling Veins, Groundsnap, Cantrip of the Devil** are low direct output that collapses into armour — finishers and riders, not staples (Boiling Veins' value remains its kill-blast).
- **At the true average (Prot 3) damage spells land ~20–30% below the old "Prot 2" table**, shifting the picture toward Penetration and LP-loss effects against the real roster.
