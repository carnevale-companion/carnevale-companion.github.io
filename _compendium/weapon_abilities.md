---
title: Weapon Abilities
description: Weapon Abilities reference for Carnevale v2.2, with official FAQ & Errata v1.3 integrated.
nav_order: 2
sidebar_group: detailed
toc:
  - title: Aquatic
    anchor: aquatic
  - title: Black Powder
    anchor: black-powder
  - title: Blast
    anchor: blast
  - title: Harmless
    anchor: harmless
  - title: Knockback
    anchor: knockback
  - title: Poisoned
    anchor: poisoned
  - title: Reload (X)
    anchor: reload-x
  - title: Smoke
    anchor: smoke
  - title: Stun
    anchor: stun
  - title: Template
    anchor: template
  - title: Two-handed
    anchor: two-handed
---

Weapon Abilities are listed on a character's weapon, and will take effect any time that weapon is used.

### Aquatic

This weapon can be used while the attacker is in water.

### Black Powder

This weapon cannot be used if a character starts its turn in water.

In addition, a character using this weapon loses 1 additional Life Point when they roll a Fumble during an Attack Roll.

### Blast

This weapon uses the round blast marker. Place the blast marker centred over the target. Roll once for your Attack Roll and apply the roll to every individual character (friendly and enemy) under the template and within 1" vertically.

<div class="callout">
<p class="callout-title">FAQ</p>

**If I hit a character on the edge of a rooftop with a Blast weapon and there's a character on ground level next to the same edge, does the character on the ground get affected by the Blast?** Only characters on the same approximate level (within 1" or less of vertical distance) are affected by a Blast weapon.

</div>

### Harmless

A character cannot cause any Damage when using this weapon, but still follows normal rules for making Combat actions.

<div class="callout">
<p class="callout-title">FAQ</p>

**Do I have to target an enemy with Harmless weapons?** Unless otherwise specified, yes.

</div>

### Knockback

If a character takes Damage from this weapon (whether they lose Life Points or not), they are moved 2" horizontally directly away from the attacker. This movement does not count as charging or disengaging, and cannot cause Attacks of Opportunity.

### Poisoned

If a character loses at least 1 Life Point from this weapon, that character must roll 1 dice. On a 7+ they shrug off the poison. On a 1-6, they lose extra Life Points depending on their Base Size:

- 30mm models lose 3 Life Points.
- 40mm models lose 4 Life Points.
- 50mm models lose 5 Life Points.
- 60mm+ models lose 6 Life Points.

<div class="callout math">
<p class="callout-title">Maths</p>

P(poison triggers) = 0.60. Extra LP loss is direct (no Protection Roll).

| Base Size | Extra LP (if triggered) | E[extra LP] |
|-----------|-------------------------|-------------|
| 30mm      | 3                       | 1.8         |
| 40mm      | 4                       | 2.4         |
| 50mm      | 5                       | 3.0         |
| 60mm+     | 6                       | 3.6         |

Bypasses all Prot and Universal Shielding. Highly efficient against large-base targets.

</div>

### Reload (X)

This weapon may only be used for up to (X) Combat actions in each round.

A character in base contact with an enemy may only use this weapon **(X) number of times** (modified by the amount already used that round). Once that number has been reached, the weapon may **not be used again** until the character **starts** their turn out of base contact with any enemies.

*Example:* a weapon with Reload (2) is used once in a character's turn. They are then charged in the same round. The character may then only use that weapon one more time until they start a turn out of base contact.

### Smoke

Any character hit by this weapon counts as being in cover until the end of the round, and gains a **Hidden** counter. If this weapon also has the Blast ability, any character under the marker is affected. Remove the marker at the end of the round.

### Stun

If a character takes Damage from this weapon (whether they lose Life Points or not) they receive a **Stunned** counter.

A character with a Stunned counter reduces its MOVE, ATTACK, DEXTERITY, and MIND by 1 (to a minimum of 1). A character automatically removes its Stunned counter at the **end** of its next turn. A character can only have one Stunned counter at a time.

**If a character with a Stunned counter starts its turn in water it loses 2 Life Points.**

<div class="callout math">
<p class="callout-title">Maths</p>

Stun is triggered on any Damage, not LP loss (so even if all Damage is absorbed by Prot, Stun triggers).

Water interaction: 2 LP direct loss bypasses all Prot and Universal Shielding. Equivalent effective Damage at common Prot values (E[LP lost from D Damage] = D − Prot × 0.40 for D ≥ Prot, so D such that D − Prot × 0.40 = 2):

| Target Prot | Effective Damage equivalent of 2 LP direct |
|-------------|--------------------------------------------|
| 0           | 2.0                                        |
| 3           | 3.2                                        |
| 6           | 4.4                                        |

Stun near water is disproportionately effective against high-Prot models (Hospitaller, Constructs, Full Plate leaders). The stat reduction also cascades: −1 DEX = easier to hit, −1 ATK = lower damage output.

</div>

### Template

This weapon uses the teardrop shaped template. Trace a line between the attacker and the target. Place the template with the centre on the line with the small end of the template in range of the weapon (base contact with the attacker if the range is 0"), and the large end further away from the attacker. Any character at least partly touched by the template (friendly or enemy) is affected by the attack. Roll once for your Attack Roll and apply the roll to every individual character hit.

### Two-handed

This weapon increases its **Evasion by +1** when making an Attack of Opportunity.
