---
title: Spell data
is_analysis: true
nav_order: 21
toc:
  - title: Global Averages
    anchor: global-averages-paid-spells-only
  - title: Damage Spells
    anchor: damage-spells
  - title: Healing Spells
    anchor: healing-spells
---

## Global Averages (paid spells only)

### How likely is a success (≥1 Ace) depending on MIND and difficulty

| MIND | Diff 3 | Diff 4 | Diff 5 | Diff 6 | Diff 7 | Diff 8 |
|------|--------|--------|--------|--------|--------|--------|
| 2 | 96% | 91% | 84% | 75% | 64% | 51% |
| 3 | 99% | 97% | 94% | 88% | 78% | 66% |
| 4 | ~100% | 99% | 97% | 94% | 87% | 76% |
| 5 | ~100% | ~100% | 99% | 97% | 92% | 83% |
| 6 | ~100% | ~100% | ~100% | 98% | 95% | 88% |

**At MIND 4** (typical for dedicated Mages), difficulty ≤ 5 is genuinely easy. Average difficulty 6.37 gives ~91% success before WP. Difficulty 8 spells (27% of spells) drop to ~76% and often need 1 WP investment to be reliable.

## Damage Spells

| Spell | Discipline | Cost | Diff | Range | Damage at X=2 (Success) | Notes |
|-------|------------|------|------|-------|--------------------------|-------|
| Cantrip of the Devil | Blood Rites | 0 | 7 | 3" | 1 LP loss OR 2 Dmg Pen -2 | Choice of effect |
| Boiling Veins | Blood Rites | 1 | 3 | 8" | (Aces − 2) Dmg Pen -2 | Scales with Aces, splash on kill |
| Blood Drain | Blood Rites | 1 | 7 | 6" | 2 Dmg Pen -4 | Heals friendlies 6" of target |
| Kraken's Breath | Blood Rites | 2 | 6 | Teardrop | 4 Dmg Pen -2 (teardrop) | Friendly fire risk |
| Mother Hydra's Claws | Blood Rites | 2 | 6 | 6" | (Aces+2) LP split among 2 targets | Multi-target LP loss |
| Holy Light | Divinity | 1 | 8 | 6" AoE | 2 LP + Stun vs enemy Mages | Situational (Mages only) |
| Summon Vermin | Wild Magic | 1 | 5 | 12" | (Aces+2) Dmg primary, 1 Dmg splash | Easy, long range |
| Groundsnap | Wild Magic | 2 | 7 | 8" | 2 Dmg + forced move + impassable | Zone denial |
| Sunder Armour | Wild Magic | 2 | 7 | 6" | -(3+X) Protection = -5 Prot | Debuff, no direct damage |

### Penetration Maths

**Core formula:** each point of Penetration removes one Protection die. Each Protection die rolls at 7+, succeeding 40% of the time (reducing Damage by 1 on success).

**Therefore: 1 point of Penetration = +0.4 expected effective Damage.**

This is a fixed conversion assuming the target has at least as many Protection dice as the Penetration value. If Penetration exceeds Protection, excess Penetration is wasted (Protection floors at 0).

**Sunder Armour note:** reduces target Protection by 3+(X). At X=2, that's -5 Protection, equivalent to granting a follow-up attacker +2.0 effective Damage on their next hit (if the opponent has at least Protection 5).

### Effective Damage by Defender Type (Mage 2 / Mind 4)

Spells resolve on a **MIND roll vs Difficulty** (not vs Dexterity), so the only defender axis that matters is **Protection / Universal Shielding**. Dexterity, Parry, and evasion are irrelevant. Direct **LP-loss** spells bypass Protection entirely (flat across all columns).

| Spell | Cost | Type | Diff | P(succ) | soft (Prot1) | average (Prot3) | armoured (Prot5) | pen-proof (Prot5+US5) |
|---|---|---|---|---|---|---|---|---|
| Kraken's Breath | 2 | Damage (teardrop) | 6 | 94% | 3.84 | 3.58 | 2.73 | 1.92 |
| Summon Vermin | 1 | Damage (blast) | 5 | 97% | 4.15 | 3.25 | 2.45 | 2.45 |
| Mother Hydra's Claws | 2 | LP loss (per target) | 6 | 94% | 1.90 | 1.90 | 1.90 | 1.90 |
| Blood Drain | 1 | Damage | 7 | 87% | 1.82 | 1.82 | 1.56 | 0.43 |
| Holy Light | 1 | LP loss (enemy Mages) | 8 | 76% | 1.59 | 1.59 | 1.59 | 1.59 |
| Cantrip of the Devil | 0 | Damage | 7 | 87% | 1.74 | 1.48 | 0.78 | 0.37 |
| Boiling Veins | 1 | Damage | 3 | 100% | 1.14 | 0.92 | 0.44 | 0.19 |
| Groundsnap | 2 | Damage | 7 | 87% | 1.56 | 0.85 | 0.43 | 0.43 |

### Key conclusions

- **Summon Vermin** delivers the best primary-target damage and the best per-WP value (1 WP): it is a **Blast template** spell: the named target takes the full (Aces+X), while every other character under the marker (including friendlies) takes (X)-1 splash. The tabled figures are the primary target only. With no Penetration it degrades most into armour (4.15 → 2.45), and Universal Shielding can't reduce it further (no Pen to floor).
- **Kraken's Breath** has the highest raw output and holds into armour better than any other spell (still 2.73 at Prot 5); only the pen-proof tank blunts it hard (1.92). The catch is the self-centred teardrop template (6" range).
- **Blood Drain** stays flat (1.82) through Prot 3 via Pen -4, but that edge is **neutralised by Universal Shielding** (collapses to 0.43 vs the pen-proof tank), and its heal is the real draw.
- **Mother Hydra's Claws is flat 1.90 regardless of armour** (direct LP loss bypasses Protection), the only general Protection-proof damage spell and so the best anti-tank / anti-Shielding option. **Holy Light** is also Protection-proof but flat **1.59** and only damages enemy **Mages**, so it is purely situational.
- **Boiling Veins, Groundsnap, Cantrip of the Devil** are low direct output that collapses into armour: finishers and riders, not staples (Boiling Veins' value remains its kill-blast).

See each Discipline per-spell evaluation for more details.

## Healing Spells

| Spell | Discipline | Cost | Diff | Range | Healing at X=2 (Success) | Notes |
|-------|------------|------|------|-------|--------------------------|-------|
| Cantrip of the Sun | Divinity | 0 | 7 | 6" | +1 LP +1 WP | Best cantrip for sustain |
| Rejuvenation | Divinity | 1 | 7 | 12" | (Aces+2) LP split freely | Flexible multi-target |
| Aqua Curitiva | Divinity | 2 | 8 | 6" | +4 LP to friends at end of round | Delayed, also Stuns enemies |
| Blood Drain | Blood Rites | 1 | 7 | 6" | 2 LP to any friend within 6" of target | Conditional on target taking LP |
| Healing | Wild Magic | 1 | 5 | 6" | +2 LP | Simplest heal in the game |

**Benchmark healing at X=2:** expect 2 LP for 1 WP on a straightforward spell (Healing, Divinity cantrip). Rejuvenation scales better with high MIND but costs more to land.
