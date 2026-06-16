---
title: Abilities
nav_order: 2
prev_doc:
  title: Rules
  url: /rules/
---

Sources: Carnevale Rulebook p36-40 + After Party Rulebook p44-48 + FAQ & Errata v1.3

**Stacking**: special rules with (X) stack up to a maximum of **3**. If a character with Expert Offence (2) would gain another Expert Offence (2), they end up with Expert Offence (3). If a rule would grant a value above 3, only the highest value is used. Stats, however, can stack up to 10.

---

## Character Abilities

### Acrobatic (X)

This character may re-roll up to (X) dice when making a DEXTERITY roll as part of any Move/Climb or Jump action.

---

### Aerial Attack

This character does not lose Life Points from falling, provided it makes a charge from above.

---

### Berserk

If this character has 5 or fewer Life Points remaining at the start of its turn → gains **+1 Action Point** and **+1 ATTACK** for that turn.

**Math**: triggers at ≤5 LP (low-health threshold). +1 AP = one free additional action per turn. +1 ATK = one extra Combat die; E[+Aces] = (11 − target DEX) / 10 (e.g. vs DEX 4: +0.70 expected Aces per Combat action).

---

### Boat Crew

This character may be set up on a Boat at the start of the game. Replenishes **1 Will Point** at the start of its turn if it is on a Boat.

Additionally, if at least 1 character with the Boat Crew ability is currently on a Boat, the **Cast Off** Command Ability only costs **1 Command Point**, and the Boat may instead move up to **18"**.

---

### Brave

This character automatically succeeds when making a Basic MIND roll triggered by the **Fear** ability.

---

### Brawler (X)

This character modifies its ATTACK by (X) when in base contact with **2 or more opponents**.

**Math**: +X ATK dice, each adds (11 − target DEX) / 10 expected Aces. Situational — requires 2+ enemies in base contact.

| Target DEX | E[+Aces per extra die] |
|------------|------------------------|
| 4          | +0.70 × X              |
| 5          | +0.60 × X              |
| 6          | +0.50 × X              |
| 7          | +0.40 × X              |

---

### Bodyguard (X)

(X) may be a character name or a keyword.

If an enemy character charges (X), this character may immediately make an out of sequence Run/Climb action provided it is currently out of base contact with any enemy and it charges that active enemy. This action causes an Attack of Opportunity and takes place **before** the opponent's Attack of Opportunity.

*FAQ v1.3:* If 2 characters with Bodyguard are in range of a character being charged, both defending Bodyguards can charge the attacker. Choose the order in which defenders act. If the second defender is unable to complete a charge against the attacker, it cannot use its Bodyguard rule.

---

### Bulky

This character does not gain any benefit from being in cover, and cannot make **Hide** actions.

---

### Companion (X)

(X) may be a character name or a keyword.

If this character can draw line of sight to another (X) character at the start of their turn, it replenishes **1 Will Point**.

In addition, while in line of sight of another (X) character, they **must** use that character's MIND value instead of their own (even if it is lower). If more than one (X) character is in line of sight, use the highest MIND value.

---

### Concealment (X)

While in cover this character modifies its PROTECTION by (X).

*FAQ v1.3:* Concealment simply adds or subtracts from the existing cover modifier — it does not replace normal cover. A character with Concealment (-1) loses the benefit of standard cover.

**Math**: standard barricade cover = +1 PROT (Light Barricade) or +2 PROT (Heavy Barricade). Concealment(X) adds X to that modifier while in cover.

Each Prot die saves 1 LP per Ace (7+, 40%). E[+LP saved per Damage] = X × 0.40.

- Concealment(+1): +0.40 expected LP saved per Damage while in cover
- Concealment(+2): +0.80 expected LP saved per Damage while in cover
- Concealment(−1): removes Light Barricade benefit entirely; reduces Heavy to +1

---

### Engage

This character automatically wins the Opposed Roll when an enemy character disengages from them, and so always gets to make an Attack of Opportunity.

*Interaction with Slippery:* if the opposing character has Slippery, both players roll to disengage as normal (Engage and Slippery cancel each other out).

---

### Ethereal

This character may ignore all terrain while moving, but cannot end its turn or make any other actions while "inside" Impassable Terrain.

*FAQ v1.3:* Ignores the penalties for water (may move through and in water without penalties).

---

### Expert Grappler (X)

This character may re-roll up to (X) dice when making or defending against a **Grapple** or **Drown** action.

**Math**: Grapple and Drown both use standard **7+ threshold** (not DEX-dependent).

Re-rolling 1 failed die adds **+0.40** expected Aces. EG(X) = +X × 0.40 expected Aces.

Applies symmetrically when defending — same expected gain on the Opposed Roll.

---

### Expert Marksman (X)

This character may re-roll up to (X) dice when making a **Combat** action while **not** in base contact with the target.

**Math**: ranged Combat Attack Roll threshold = target's DEX. Re-rolling 1 failed die:

| Target DEX | P(Ace) | E[+Aces per re-roll] | EM(2) expected gain |
|------------|--------|----------------------|---------------------|
| 3          | 80%    | +0.80                | +1.60               |
| 4          | 70%    | +0.70                | +1.40               |
| 5          | 60%    | +0.60                | +1.20               |
| 6          | 50%    | +0.50                | +1.00               |
| 7          | 40%    | +0.40                | +0.80               |
| 8          | 30%    | +0.30                | +0.60               |

> ⚠ **Re-roll availability cap.** The `EM(2)` / `E[+Aces per re-roll]` columns assume every re-roll lands on a **failed, re-rollable** die — but two limits apply. (1) You can only re-roll dice that *failed*. (2) The **Destiny die can never be re-rolled** (core rule), so the re-rollable pool is only **Attack − 1** dice, not Attack. So usable re-rolls = `E[min(X, failures)]`, where failures ~ Binomial(Attack − 1, 1 − P(Ace)), and gain = usable re-rolls × P(Ace). `X × per-die-rate` is a **ceiling**, approached only when Attack ≫ X. Worked example at **Attack 4 / DEX 4** (re-rollable = 3 dice, failures ~ Binomial(3, 0.3), mean 0.9):
>
> | Ability  | Naive (X × 0.70) | Actual (Destiny-excluded, availability-capped) |
> |----------|------------------|------------------------------------------------|
> | EO/EM(1) | +0.70            | **+0.46**                                      |
> | EO/EM(2) | +1.40            | **+0.61**                                      |
> | EO/EM(3) | +2.10            | **+0.63**                                      |
>
> The overstatement is largest when X approaches or exceeds Attack − 1 (a 3-die re-rollable pool rarely produces 3 failures, and EO(3) barely beats EO(2)). The cap loosens for high-Attack models. Apply the capped value when scoring offense, not the naive product.

---

### Expert Offence (X)

This character may re-roll up to (X) dice when making a **Combat** action while **in base contact** with the target.

*FAQ v1.3:* Expert Offence is only on Combat actions in base contact. Not on Grapples, Drowns, or ranged attacks.

**Math**: melee Combat Attack Roll threshold = target's DEX. Same table as Expert Marksman above.

At DEX 4 (very common), **before** the re-roll availability cap: EO(1) = +0.70; EO(2) = +1.40; EO(3) = +2.10 expected Aces. **After** the cap (Destiny die excluded, Attack 4 pool) these fall to **+0.46 / +0.61 / +0.63** — see the ⚠ note under Expert Marksman and apply the capped figures when scoring.

---

### Expert Protection (X)

This character may re-roll up to (X) dice when making a **Protection Roll**.

*FAQ v1.3:* Universal Shielding cannot raise a character's PROTECTION above their starting value. Expert Protection functions independently.

**Math**: Protection Roll uses standard **7+ threshold** (P(Ace) = 0.40 per die). Re-rolling 1 failed die adds **+0.40** expected LP saved.

Same re-roll availability cap as EO/EM applies: only **failed, non-Destiny** Protection dice can be re-rolled, so the re-rollable pool is **Prot − 1** dice and usable re-rolls = `E[min(X, failures)]`, failures ~ Binomial(Prot − 1, 0.60). Naive `X × 0.40` is the ceiling. Example at **Prot 3** (re-rollable = 2 dice, failures ~ Binomial(2, 0.6)): EP(1) ≈ **+0.34**, EP(2) ≈ **+0.48** expected LP saved per Damage (vs naive +0.40 / +0.80). Also capped by incoming Damage — you can't save more than the attack deals.

---

### Expert Sorcerer (X)

This character may re-roll up to (X) dice when making a **Cast Spell** action or **Dispelling** a magic spell.

In addition, this character knows (X) additional magic spells.

**Math**: spell casting threshold = spell's Difficulty (varies per spell, commonly 6–8).

| Difficulty | P(Ace) | E[+Aces per re-roll] |
|------------|--------|----------------------|
| 6          | 50%    | +0.50                |
| 7          | 40%    | +0.40                |
| 8          | 30%    | +0.30                |

ES(1) at Diff 7: +0.40 expected Aces per cast. ES(2): +0.80.

Additional spells known = larger selection at gang-building. Also applies to Dispel rolls (threshold = caster's Mage(X) as MIND-equivalent roll at 7+).

---

### Fast Swimmer (X)

If this character starts a **Run/Climb** action **in water**, it adds (X) inches to its MOVE for that action (even if it leaves water during the action).

---

### Fear (X)

When this character makes a **Combat** action, the target must first make a Basic MIND Roll, with their MIND value modified by (X), to a minimum of 1. If they roll at least 1 Ace (on a 7+ as normal) → no effect. If they roll **no Aces** → this character may re-roll all failed dice rolls for the Combat action.

*FAQ v1.3:* Brave automatically succeeds this roll. Fear values can be negative (Fear (-1) makes the target's MIND roll easier, i.e. harder for the Fear character to benefit).

**Math**: effective MIND = max(1, target MIND + X). P(Fear triggers) = P(no Aces on N dice at 7+) = 0.60^N:

| Eff. MIND | Trigger % |
|-----------|-----------|
| 1         | 60.0%     |
| 2         | 36.0%     |
| 3         | 21.6%     |
| 4         | 13.0%     |
| 5         | 7.8%      |
| 6         | 4.7%      |

When triggered: re-roll ALL failed Combat dice. Each re-rolled failure adds (11 − target DEX) / 10 expected Aces. Fear(0) uses unmodified target MIND. Fear(−1) reduces target's effective MIND by 1 (trigger harder). Fear(−2) at MIND 3 target → eff. MIND 1 → 60% trigger rate.

---

### First Strike (X)

This character modifies its ATTACK by (X) when making an **Attack of Opportunity from charging**.

**Math**: +X ATK on charge AoO only. E[+Aces] = X × (11 − target DEX) / 10 (same as Brawler). Highest value early in the charge window; no benefit in later activations.

---

### Flight

When this character makes a Run/Climb action, it may instead **Fly**: measure from the character to any other point within its MOVE (horizontally, vertically, or diagonally) and move it without making a DEXTERITY roll. It cannot make any actions while "mid-air" other than further Fly actions, and if it ends its turn "mid-air" it will fall from that spot. Additionally, this character takes **2 less Damage** from falling.

*FAQ v1.3:* A character with Flight can move vertically to gain a charge from above (counts as charging from above, triggering Opposed DEXTERITY roll if already in base contact with an enemy).

---

### Frenzied

This character may use its Life Points as if they were Will Points.

*FAQ v1.3:* Life Points used as Will Points due to the Frenzied rule do count towards the Agenda "Will Be Done".

**Math**: most Frenzied characters have WP 0, making LP their only source of bonus dice.

Two fully boosted attacks (2 LP per attack = 4 LP total):

| Profile        | Base E[Aces/attack] | +2 LP E[Aces/attack] | Gain | LP cost |
|----------------|---------------------|----------------------|------|---------|
| ATK 3 vs DEX 4 | 2.10                | 3.50                 | +67% | 4 LP    |
| ATK 4 vs DEX 4 | 2.80                | 4.20                 | +50% | 4 LP    |
| ATK 4 vs DEX 5 | 2.40                | 3.60                 | +50% | 4 LP    |

A WP 3 character with no replenishment has 3 bonus dice for the whole game. A Frenzied character at LP 15 has the equivalent of 15 bonus dice available, at the cost of HP attrition — a 5× larger pool, capped at 2 per roll.

With Vampiric Attack(1) on both attacks: recover 2 LP if both connect → net cost drops to 2 LP for a fully boosted double attack. VA(2): potentially net 0 LP cost against low-Prot targets.

---

### Hunter

This character gains **Penetration -3** on its weapons (but **not** on Unarmed attacks) when targeting an enemy with a **larger base size**.

**Math**: Pen−3 reduces target's effective Prot by 3 on the Protection Roll. Each cancelled Prot die saves 1 LP per Ace (40%). E[+Damage past Protection] = 3 × 0.40 = **+1.2 expected LP** dealt vs a larger-base target. No effect vs Prot 0 targets. Most significant vs Prot 5+ (Prot 6 → effectively Prot 3 when Hunter triggers).

---

### Infiltration

This character may be deployed more than 3" above or below ground level at the start of the game, but **not** in water unless specified.

---

### Limited Movement

- Maximum **2"** of movement in a single action when in water
- Maximum **2" vertically** up or down in a single Run/Climb action
- May still Jump as normal
- **Cannot** carry Mobile Objectives

*FAQ v1.3:* The disengage itself is unaffected. Jumps are not affected by Limited Movement.

---

### Mage (X)

This character is a Mage and knows (X) number of magic spells. A character with Mage (0) knows only the Cantrip from their chosen discipline.

→ See magic section for the complete magic system.

---

### Mindless

This character may interact with Objectives as normal (carrying, revealing, claiming, or destroying), but is **ignored** when scoring Victory Points for Primary Objectives at the end of the game. It can still score Victory Points through Agendas, killing enemies, or surviving.

*FAQ v1.3:* Mindless characters do not count as contesting or holding Objectives for scoring purposes.

---

### Parry (X)

When this character becomes the target of a Combat action **while in base contact with the attacker**, may force the opponent to re-roll up to (X) dice from the Attack Roll.

Note: the attacker may also choose to re-roll some of their dice. A die may never be re-rolled more than once.

**Math**: the attacker's threshold = this character's DEX. Forcing a re-roll of an Ace:

E[Aces removed per forced re-roll] = P(die fails at threshold DEX d) = (d − 1) / 10:

| Own DEX | Attacker P(Ace) | E[Aces removed per die] |
|---------|-----------------|-------------------------|
| 3       | 80%             | 0.20                    |
| 4       | 70%             | 0.30                    |
| 5       | 60%             | 0.40                    |
| 6       | 50%             | 0.50                    |
| 7       | 40%             | 0.60                    |
| 8       | 30%             | 0.70                    |

Parry is least effective on low-DEX characters (re-rolled Aces likely succeed again) and most effective on high-DEX characters (each Ace is rare; forcing a re-roll is high-value). Attacker with Expert Offence can re-roll the newly failed die — Parry + EO partially cancel.

---

### Pickpocket

If this character successfully disengages → its opponent loses 1 Will Point and this character automatically takes any Mobile Objective the opponent is carrying.

At the end of the action, this character or any friendly character within 3" replenishes **1 Will Point**.

---

### Primitive

At the start of this character's turn, it must make a Basic MIND Roll. If it rolls **no Aces** → receives a **Stunned counter**.

**Math**: P(Stun | MIND N) = 0.60^N (same formula as Fear trigger):

| MIND | P(Stun) |
|------|---------|
| 1    | 60.0%   |
| 2    | 36.0%   |
| 3    | 21.6%   |
| 4    | 13.0%   |

Stun effect: −1 MOVE/ATK/DEX/MIND (min 1 each) for that turn. In water: +2 LP direct loss at next turn start if counter persists. MIND 1 Primitive chars are severely hampered in most turns; MIND 3–4 is manageable.

---

### Slippery

This character automatically wins the Opposed Roll when disengaging, and so never gets hit by an Attack of Opportunity.

*Interaction with Engage:* if the opposing character has Engage, both players roll to disengage as normal (Slippery and Engage cancel each other out).

---

### Universal Shielding (X)

This character always has a minimum PROTECTION of (X), after all modifiers. This special rule can stack higher than 3, but cannot take a character's PROTECTION value above its starting number.

**Math**: Effective Prot = min(base\_Prot, max(X, base\_Prot + pen)).

US(X) is active only when a weapon's Pen reduces effective Prot below X. Activation threshold: |pen| > base\_Prot − X.

| US | base\_Prot | pen=−1 | pen=−2     | pen=−3     | pen=−4     |
|----|------------|--------|------------|------------|------------|
| 2  | 3          | 2 (—)  | **2** (+1) | **2** (+2) | **2** (+2) |
| 2  | 4          | 3 (—)  | 2 (—)      | **2** (+1) | **2** (+2) |
| 3  | 4          | 3 (—)  | **3** (+1) | **3** (+2) | **3** (+3) |
| 3  | 6          | 5 (—)  | 4 (—)      | 3 (—)      | **3** (+1) |

Bold = US is active; (+N) = Prot dice restored by US. (—) = pen doesn't reduce Prot below X.

E[LP saved per Prot die restored] = 0.40. E.g. US(3) vs Pen−3 on base\_Prot 4: restores 2 dice → **+0.80 expected LP saved per Damage**.

---

### Vampiric Attack (X)

If this character makes a **Combat** action while **in base contact** with its target that causes the target to lose at least 1 Life Point → replenishes (X) of its own Life Points.

*FAQ v1.3:* Only works on Combat actions in base contact. Does not work on Grapples, Drowns, ranged attacks, or spells.

**Math**: heals exactly X LP per triggering Combat action (once per action, not per Ace). Trigger requires ≥1 LP lost by target.

P(trigger) = P(≥1 Ace) × P(Prot Roll fails to save all Aces):

- vs Prot 0 targets: P(trigger) ≈ 1 − (1 − P\_ace)^ATK (quickly >90% at ATK 3–4)
- vs Prot 3, DEX 4: reliable at ATK 4+ (multiple Aces expected, saving all unlikely)
- vs US targets: trigger can fail even on a hit if all Damage is absorbed

VA(2) sustained over 3+ activations can offset significant LP loss (6+ LP recovered). Unreliable vs Prot 5+ or Universal Shielding.

---

### Water Creature

- Moves its full MOVE in water (no -2" reduction)
- May move up to **8"** as part of a Dive action (instead of 4" per Underwater Counter)
- **Cannot** be the target of a Drown action
- May be set up in water at the start of the game

*FAQ v1.3:* Still loses Life Points if it has a Stunned counter and starts its turn in water.

---

## Weapon Abilities

### Aquatic

This weapon can be used while the attacker is in water.

---

### Black Powder

This weapon cannot be used if a character starts its turn in water.

In addition, a character using this weapon loses **1 additional Life Point** when they roll a Fumble during an Attack Roll.

---

### Blast

Uses the round blast marker. Place the blast marker centred over the target. Roll once for your Attack Roll and apply the roll to every individual character (friendly and enemy) under the template.

---

### Harmless

A character cannot cause any Damage when using this weapon, but still follows normal rules for making Combat actions (including AoOs, Fumbles, etc.).

*FAQ v1.3:* If Knockback and Harmless are combined, any Aces rolled cause Knockback but the target doesn't take Damage from the attack itself (though if knocked off a roof they may still take falling damage).

---

### Knockback

If a character takes Damage from this weapon (whether they lose Life Points or not) → they are moved **2" horizontally** directly away from the attacker. This movement does not count as charging or disengaging, and cannot cause Attacks of Opportunity.

---

### Poisoned

If a character loses at least 1 Life Point from this weapon → that character must roll **1 die**. On a **7+**: shrug off the poison. On **1-6**: lose extra Life Points depending on their Base Size:

| Base Size | Extra LP lost |
|-----------|---------------|
| 30mm      | 3 LP          |
| 40mm      | 4 LP          |
| 50mm      | 5 LP          |
| 60mm+     | 6 LP          |

**Math**: P(poison triggers) = 0.60. Extra LP loss is direct (no Protection Roll).

| Base Size | Extra LP (if triggered) | E[extra LP] |
|-----------|-------------------------|-------------|
| 30mm      | 3                       | 1.8         |
| 40mm      | 4                       | 2.4         |
| 50mm      | 5                       | 3.0         |
| 60mm+     | 6                       | 3.6         |

Bypasses all Prot and Universal Shielding. Highly efficient against large-base targets.

---

### Reload (X)

This weapon may only be used for up to **(X) Combat actions in each round**.

A character in base contact with an enemy may only use this weapon (X) number of times (modified by the amount already used that round). Once that number has been reached, the weapon **may not be used again** until the character **starts** their turn out of base contact with any enemies.

*Example:* a weapon with Reload (2) is used once in a character's turn. They are then charged in the same round. The character may then only use that weapon one more time until they start a turn out of base contact.

---

### Smoke

Any character hit by this weapon counts as being in cover until the end of the round and gains a **Hidden counter**. If this weapon also has the Blast ability, any character under the marker is affected. Remove the marker at the end of the round.

---

### Stun

If a character takes Damage from this weapon (whether they lose Life Points or not) → they receive a **Stunned counter**.

**Stunned counter**: reduces MOVE, ATTACK, DEXTERITY, and MIND by **1** (minimum 1 each). Automatically removed at the **end** of the character's next turn. A character can only have one Stunned counter at a time.

**Important**: a character with a Stunned counter that starts its turn **in water loses 2 Life Points** (no Protection Roll).

**Math**: Stun is triggered on any Damage, not only LP loss (so even if all Damage is absorbed by Prot, if Damage > 0 was dealt, Stun triggers).

Water interaction: 2 LP direct loss bypasses all Prot and US. Equivalent effective Damage at common Prot values (E[LP lost from D Damage] = D − Prot × 0.40 for D ≥ Prot, so D such that D − Prot × 0.40 = 2):

| Target Prot | Effective Damage equivalent of 2 LP direct |
|-------------|--------------------------------------------|
| 0           | 2.0                                        |
| 3           | 3.2                                        |
| 6           | 4.4                                        |

Stun near water is disproportionately effective against high-Prot models (Hospitaller, Constructs, Full Plate leaders). The stat reduction also cascades: −1 DEX = harder to hit for melee targets; −1 ATK = lower damage output.

---

### Template

Uses the teardrop-shaped template. Trace a line between the attacker and the target. Place the template with the centre on the line with the small end of the template in range of the weapon (base contact with the attacker if the range is 0"), and the large end further away from the attacker. Any character at least partly touched by the template (friendly or enemy) is affected by the attack. Roll once for your Attack Roll and apply the roll to every individual character hit.

---

### Two-handed

This weapon increases its **Evasion by +1** when making an Attack of Opportunity.
