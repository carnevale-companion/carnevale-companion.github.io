---
title: Rules Reference
description: Complete rules reference for Carnevale v2.2, with official FAQ & Errata v1.3 integrated.
nav_order: 1
section: hyperlinked_rules
permalink: /rules/
toc:
  - title: Character Profiles
    anchor: character-profiles
  - title: The Golden Rule
    anchor: the-golden-rule
  - title: Rounds & Initiative
    anchor: rounds-and-initiative
  - title: Measuring & Cover
    anchor: measuring-and-cover
  - title: Weapons
    anchor: weapons
  - title: Dice Rolls
    anchor: dice-rolls
  - title: AP, WP & CP
    anchor: ap-wp-and-cp
  - title: Actions
    anchor: actions
  - title: Magic
    anchor: magic
  - title: Terrain
    anchor: terrain
  - title: Building Your Gang
    anchor: building-your-gang
  - title: Equipment
    anchor: equipment
  - title: Scenarios
    anchor: scenarios
  - title: Special Rules
    anchor: special-rules
  - title: Weapon Abilities
    anchor: weapon-abilities
---

*Carnevale v2.2 — FAQ & Errata v1.3 integrated throughout.*

## Character Profiles

Each character has a **profile** listing their Size (base diameter in mm) and Cost (Ducats to include in your gang).

### Points

Points are finite. They can never go below 0 or above their starting value.

| Point | Abbr. | Purpose |
|---|---|---|
| Action Points | AP | Actions per turn; max 3 per round |
| Life Points | LP | Damage capacity; removed from game at 0 |
| Will Points | WP | Boost dice rolls; spent even on failure |
| Command Points | CP | Command the gang; used for Initiative |

### Statistics

A character may never have a statistic lower than 0 or higher than 10.

| Stat | Use |
|---|---|
| **MOVE** | Distance in inches per Run/Climb action |
| **DEXTERITY** | Special movement & avoiding attacks; target number for Attack Rolls |
| **ATTACK** | Combat & ranged skill; number of dice rolled |
| **PROTECTION** | Defence; number of dice rolled to reduce Damage |
| **MIND** | Mental ability; number of dice rolled for Magic Rolls |

### Weapons

For each Combat action, choose one weapon. **All characters may make Unarmed attacks** (Range 0", Evasion —, Damage —, Penetration +1, no Abilities) even if not listed on their profile.

| Column | Meaning |
|---|---|
| **Range** | Max distance in inches; 0" = base contact only |
| **Evasion** | Modifies the target's DEXTERITY for this attack |
| **Damage** | Modifier to Damage on Success or Critical only |
| **Penetration** | Modifies the target's PROTECTION for this attack |
| **Abilities** | Special weapon rules — see [Weapon Abilities](#weapon-abilities) |

If weapons are separated by "OR", choose one before the game starts and do not change it. Multiple Evasion or Penetration sources stack — add all together.

### Keywords & Character Abilities

**Keywords** (e.g. *Doctor*, *Monster*, *Leader*) are descriptors. Certain rules key off specific keywords, but keywords have no effect on their own.

**Character Abilities** are special rules listed on a profile or granted by Command Abilities. Universal abilities are in [Special Rules](#special-rules).

---

## The Golden Rule

The object of the game is for **both players to have fun**. Always prefer the cinematic over the literal when a rules ambiguity arises.

### Fortune's Favour

When a player performs a daring feat, their opponent may award **Fortune's Favour**. The character replenishes **1 Will Point** (or 2 WP if the player narrates the story of it). WP cannot exceed their starting value.

Fortune's Favour passes to the next worthy player. Winning while holding it is a lesser victory.

---

## Rounds & Initiative

A game is divided into **game rounds**. Each round, every character takes one **character turn**. Once all characters have had a turn, a new round begins.

### Initiative

At the start of each round, each player rolls dice equal to the **current remaining Command Points** of any one friendly character. Count 7+ results as Aces. Most Aces takes initiative (re-roll ties).

If a player has no characters with remaining CP, they automatically lose the roll. If no players have any CP remaining, all roll a single die — highest takes initiative.

Starting with the initiative player, each player chooses one character to activate, going clockwise. Each character may only have one turn per round.

### Character Turn

A character may use up to **3 AP per game round**. A player may end a turn early and does not have to use all AP.

### End of Round

Once all characters have had a turn:

1. Resolve end-of-round effects in initiative order.
2. Check victory conditions.
3. If no player has won, begin a new round and re-roll initiative.

---

## Measuring & Cover

Distances are in **inches**. Measure at any time, between the two closest points of the relevant bases — horizontally, diagonally, or vertically. Always measure to or from a character from the **closest part of their base**. Base sizes are listed in mm on each profile.

Terrain **1" high or less** is ignored for measuring, line of sight, and movement.

### Line of Sight

Carnevale uses **true line of sight**. Draw a straight line between the miniatures. If any part of a character's body or head can see any part of another's body or head, they are in line of sight.

### Cover

If at least **25%** of an enemy character is covered (including arms, legs, weapons), they are in cover and gain **+1 PROTECTION**.

- A character **in base contact with its attacker** is never in cover.
- A character **in water** is always in cover when not in base contact with their attacker.
- If players cannot agree, the **attacked character counts as being in cover**.

### Friendly & Enemy Characters

- **Friendly:** any character in your gang.
- **Enemy:** any character in an allied or opposing gang (yes, you can turn on your allies).

When an ability affects "any or every friendly character", it includes the character using the ability, provided they are the target or in range — unless the ability specifies otherwise.

### Base Contact

Characters are in base contact when their bases are touching. Due to terrain height differences, characters are still in base contact if there is **1" or less in vertical distance** between bases.

Characters only in base contact because they touch the same obstacle do **not** need to disengage from each other.

An enemy character is **never in cover** when attacked while in base contact. Exception: if both bases are within 1" touching the same obstacle up to 1" high (e.g. fighting over a barricade), they count as in base contact for 0" range weapons — but the **enemy always counts as being in cover**.

### Attacks of Opportunity

An Attack of Opportunity costs **0 AP** and cannot be chosen voluntarily. When triggered, choose: **Combat**, **Grapple**, or **Drown** — treat it as normal with all applicable abilities and modifiers.

### Attacks & Damage

Each point of Damage causes a character to lose 1 Life Point.

- When instructed to take **Damage** → the target makes a **Protection Roll**.
- When instructed to lose **Life Points** directly → no Protection Roll is made; armour does not help.

---

## Weapons

For each Combat action, choose one weapon and follow its rules. **Weapons with Range 0" may only be used in base contact.**

A dash ("—") in Evasion, Damage, or Penetration means the relevant value is unmodified.

---

## Dice Rolls

Carnevale uses **D10s** exclusively. Every roll has a **maximum of 10 dice and minimum of 0 dice**.

One die must always be the **Destiny Dice** (use a different colour). It scores Aces like any other die and also determines Criticals and Fumbles.

A successful die result is called an **Ace**. The threshold for an Ace depends on the roll type (usually 7+). **A roll of 10 is always an Ace. A roll of 1 is never an Ace.**

**Re-rolls:** Each die may be re-rolled only once; accept the second result. All re-rolls for a single roll are declared simultaneously (active player declares first). **You may never re-roll the Destiny Dice unless specifically stated.**

### Successes, Failures, Criticals & Fumbles

| Result | Condition |
|---|---|
| **Success** | Roll contains at least 1 Ace |
| **Fail** | Roll contains no Aces |
| **Critical** | Destiny Dice is a 10 **and** at least 1 other Ace in the roll |
| **Fumble** | Destiny Dice is a 1 **and** no Aces in the roll |

The Destiny Dice counts as an Ace for the result — a Critical always has at least 2 Aces total.

<div class="callout">
<p class="callout-title">FAQ</p>

**Can I choose to treat a Critical as a Success?** No. It's destiny.

**What happens if I Critical or Fumble as the defender on an Opposed Roll?** Nothing special — subtract your Aces from the opponent's roll, counting the Destiny Dice as an Ace like normal.

</div>

### Types of Rolls

#### Basic Rolls

Use one of the character's statistics as the number of dice. Unless stated, **the result needed for an Ace is 7 or higher**.

#### Opposed Rolls

Two or more characters make a Basic Roll using the same attribute. **Result needed for an Ace: 7 or higher** unless stated otherwise.

The **defending character rolls first** and totals their Aces. Subtract that number from the dice the active player rolls. The defending character cannot score Criticals or Fumbles.

*Example: defender rolls 2 Aces. Active player has ATTACK 5, so rolls 3 dice.*

<div class="callout">
<p class="callout-title">FAQ</p>

**What do I roll when Grappling a friendly character?** 7 or higher — it becomes a Basic ATTACK roll (not Opposed).

</div>

#### Attack Rolls

Use ATTACK stat. **Result needed for an Ace: equal to or higher than the target's DEXTERITY.**

#### Magic Rolls

Use MIND stat. **Result needed for an Ace: equal to or higher than the spell's Difficulty.** Each spell has its own Difficulty value.

#### Protection Rolls

Use PROTECTION stat. **Result needed: 7 or higher** unless stated otherwise.

| Result | Effect |
|---|---|
| Success | Reduce Damage by 1 for each Ace |
| Fail | No effect |
| Critical | Add 1 extra Ace to the roll, then reduce Damage by 1 for each Ace |
| Fumble | Increase Damage by 1 |

---

## AP, WP and CP

### Action Points (AP)

- A character may **never use more than 3 AP in each game round**, whether in their turn or via out-of-sequence actions.
- Unused AP are lost at end of turn.
- **All AP are fully replenished at the start of each new game round.**

### Will Points (WP)

- Finite — once gone, they're gone without special abilities to replenish them.
- **WP do not replenish at the start of the round.**
- Before a character makes a dice roll, spend **up to 2 WP**. Each WP increases that roll by 1 die, up to the 10-die maximum.
- When multiple players wish to use WP on the same roll, declare in any order — once declared, you cannot change your mind.
- WP are spent whether the action succeeds or not.

<div class="callout">
<p class="callout-title">FAQ</p>

**Do Will Points replenish at the start of the round?** No. They are finite, though various special abilities and Command Abilities can replenish them.

</div>

### Command Points (CP)

- Finite for the whole game — very few ways to replenish CP.
- Each character may use each of the four commands **once per game round** (max 4 CP per round per character).
- Also used for [Initiative](#rounds-and-initiative).

#### PLAN

At the **start of each round**, spend 1 CP to discard an Agenda and draw another. May be done on multiple Agendas using multiple characters, 1 CP each.

#### ORDER

At the **start of a character's turn**, spend 1 CP to give a **different** friendly character in line of sight **+1 AP** for that turn. A character may never exceed 3 AP in a round.

#### COUNTER

**After an enemy character completes an action** (and after any resulting Attacks of Opportunity), spend 1 CP. Pick a **different** friendly character in line of sight to take **1 out-of-sequence action** using 1 AP. This counts toward that character's 3 AP total — characters that have already used 3 AP cannot use this command.

<div class="callout">
<p class="callout-title">FAQ</p>

**Is a COUNTER command part of a character's turn or an additional turn?** It is an out-of-sequence action, not a character turn. "Per turn" rules may carry over between a regular turn and an out-of-sequence action, or vice versa.

**Can a character use more than one "once per turn" ability in a round if a COUNTER is used on them?** No.

**Can a character attempt to cast a spell as a COUNTER out-of-sequence action?** Yes, though this spell cannot be one they have already cast this round, and cannot be cast again later.

**Can a character in water have a COUNTER command to move out, then start their turn with a usable Black Powder weapon?** Yes — they start their turn out of water and that condition is fulfilled.

**Can I use COUNTER against the Attack of Opportunity triggered by Guard?** No — COUNTER may only be used after actions made during a character's turn. The Guard AoO happens outside the guarding character's turn.

**Can a character using COUNTER do a second Chained Jump in the same round?** No.

**Can I use COUNTER on a Mage to cast a spell they have already cast that round?** No.

</div>

#### ABILITY

At any point **during a character's turn** (not during another action), spend 1 CP to use a **Command Ability**. Only **one Command Ability** may be used per character turn, regardless of how many a character has access to. The same ability may be used multiple times per round by different characters.

Command Abilities come in two forms:

- **AURA** — affects targets in range at time of use. Effects last until the ability says they stop. A character in range at time of use retains the benefit until the end of any current action (including Attacks of Opportunity), even if they move out of range during it.
- **PULSE** — takes effect immediately, targeting the specified character at time of use.

<div class="callout">
<p class="callout-title">FAQ</p>

**When does a Command Ability take effect?** Immediately. Anyone in range upon use is affected at that moment.

</div>

---

## Actions

Any character can use the actions listed here. Individual characters may also have unique actions listed on their profile card.

### Run/Climb — 1 AP

Move up to MOVE value in inches, broadly horizontally. May move over terrain features **less than 1" high** without penalty. **Cannot move through another character, friendly or enemy.**

If at any point during the move the character is in base contact with Difficult Ground or Vertical Terrain taller than 1", it may choose to climb in any direction, maintaining base contact with the surface. Make a Basic **DEXTERITY Roll**:

| Result | Effect |
|---|---|
| Success | Move up to remaining MOVE |
| Fail | Stay in place; discard remaining MOVE |
| Critical | Add 2" to MOVE for this action; move up to remaining MOVE |
| Fumble | Character falls from its current position |

A character moving on Vertical Terrain ignores other characters during the move but may not end the move on the same space as another. A character may attempt to climb multiple times in the same turn (making separate rolls) and won't fall immediately after a successful climb.

**If a character cannot end its turn on solid ground, it falls from its current position.**

#### Swimming

When in water, a character is swimming. **A character reduces its MOVE by 2"** if it starts a movement action in water, unless it has the **Water Creature** Character Ability.

### Charging & Disengaging

When a character moves into base contact with enemy characters, it is **charging** and triggers an Attack of Opportunity against one of those enemies. After the AoO resolves, the character loses all remaining movement.

If the character starts its action **3" or more above** an enemy and moves into base contact, it counts as **charging from above** — its chosen weapon gains **Penetration -5** for that Attack of Opportunity (even if they fall on the opponent).

**Disengaging:** Moving away from base contact with one or more enemy characters. The opposing player picks one of their characters; both make an **Opposed DEXTERITY Roll**.

- A character on a **smaller base** gains **+1 DEXTERITY** when disengaging (whether attacking or defending).

| Result | Effect |
|---|---|
| Success | Character moves away as normal |
| Fail | Enemy makes an Attack of Opportunity (not a Grapple); character then moves away |
| Critical | Character moves away, adding 2" to final movement distance |
| Fumble | Enemy makes an Attack of Opportunity (not a Grapple); character stays in place |

<div class="callout">
<p class="callout-title">FAQ</p>

**Can you disengage and charge a character in the same action?** Yes.

**Can you move around an enemy in base contact without leaving base contact and disengaging?** Yes — you may reposition around an opponent without triggering disengagement or charge Attacks of Opportunity.

**Can you charge a character you are already in base contact with?** No.

</div>

### Jump — 1 AP

**A character cannot jump while in water.**

Pick a point in line of sight no higher than 3" above the character's base. Make a Basic **DEXTERITY Roll**:

| Result | Effect |
|---|---|
| Success | Move 2" **plus** up to 1" per Ace rolled |
| Fail | Move 2" |
| Critical | Move 4" **plus** up to 1" per Ace rolled |
| Fumble | Move 1" |

Move in a straight line toward the nominated point. May move over terrain features **less than 1" high**. If only part of the base can land on solid ground, move up to 1" along the straight line to place the base fully on solid ground. Any jump distance beyond the nominated point may be used as horizontal Run/Climb-style movement.

If the character cannot be placed on solid ground, it falls. **Fall distance is calculated from the start of the jump, not the end position.**

A player may choose to end the jump mid-air (guaranteeing a fall, but enabling extra distance).

<div class="callout">
<p class="callout-title">FAQ</p>

**Does a Jump require the character to start on solid ground?** No — a character could climb halfway up a wall, then jump across to a balcony.

**If a character fails a Jump and falls onto an obstacle, can it make a Chained Jump?** No — you must perform a Jump onto the obstacle, not fall onto it.

**Can I Jump while carrying an Objective?** No — you may only make Run/Climb actions (including climbing).

**If a character fails a jump and falls onto something higher than ground level, how far do they fall?** They fall the distance between the start of the jump and the end of their movement. Landing on a market stall rather than the ground reduces damage.

**Does a character count as soft ground when falling?** No.

</div>

#### Chained Jumps

Once per turn, when you perform a Jump onto an Obstacle or Debris, you may immediately make an additional **0 AP jump** from that obstacle.

#### Controlled Landing — 1 WP

Pay 1 AP as normal for the Jump, plus 1 Will Point before rolling. If the action results in a fall, the character scores an Ace on the falling roll on a **5+** instead of the normal 7+.

| Result | Effect |
|---|---|
| Success | Reduce Life Points lost by 1 for each Ace |
| Fail | Character suffers the full effects of the fall |
| Critical | Reduce Life Points lost by 2 plus 1 for each Ace |
| Fumble | Character suffers the full effects and gains a Stunned counter |

### Falling

**If a character cannot be wholly placed on solid ground, it counts as falling.**

Move the character vertically straight down until it can be placed on solid ground; discard any remaining movement. If a character falls farther than 1", it loses Life Points equal to the distance fallen in inches. Make a Basic **DEXTERITY Roll**:

| Result | Effect |
|---|---|
| Success | Reduce Life Points lost by 1 for each Ace |
| Fail | Character suffers the full effects |
| Critical | Reduce Life Points lost by 2 plus 1 for each Ace |
| Fumble | Increase Life Points lost by 1 |

**A character falling into water reduces any Life Points lost by 2.**

Landing spots modify the effective distance fallen — see [Landing Spots](#landing-spots).

### Dive — 2 AP

Character must be in water. Make a Basic **DEXTERITY Roll**:

| Result | Effect |
|---|---|
| Success | Receive 1 Underwater Counter |
| Fail | No effect |
| Critical | Receive 2 Underwater Counters |
| Fumble | Lose 1 Life Point |

Each Underwater Counter grants **+2 PROTECTION**. All Underwater Counters are removed when the character makes another action.

At the start of an activation with any Underwater Counters, you may remove them and **immediately move the character up to 4" per counter** (must stay in water). Characters with **Water Creature** may move up to **8" per counter** instead.

<div class="callout">
<p class="callout-title">FAQ</p>

**How far do Water Creatures move when Diving?** Up to 8" per Underwater Counter removed. A Critical on the Dive gives 2 Counters, so up to 16" total.

**Can the movement from a Dive cause Attacks of Opportunity?** Yes — both from disengaging and from charging an enemy.

</div>

### Hide — 1 AP

Available to a character **not in base contact with any enemies and not in water**. Gain a **Hidden counter** and end the character's turn.

- Enemy characters cannot draw line of sight to this character if they are more than 6" away, provided this character is in cover from them.
- This character cannot draw line of sight to any character more than 6" away.
- Moving or performing another action immediately removes the Hidden counter.

### Guard — 1 AP

Available to a character **not in base contact with any enemies and not in water**. Gain a **Guard counter** and end the character's turn.

When an enemy makes a Run/Climb or Jump action in line of sight of a character with a Guard counter, you may discard the Guard counter and make an Attack of Opportunity at the end of that enemy action. If the action moves the enemy into base contact, the Guarding character makes its Attack of Opportunity first.

Moving or performing another action immediately removes the Guard counter.

<div class="callout">
<p class="callout-title">FAQ</p>

**Do you need line of sight to complete a Guard action?** Yes — line of sight at the end of the target's action is needed.

</div>

### Combat — 1 AP

Choose a weapon and an enemy character in line of sight within weapon range. Make an **Attack Roll** (ATTACK stat; Ace = target's DEXTERITY or higher):

| Result | Effect |
|---|---|
| Success | Target takes 1 Damage per Ace rolled |
| Fail | No effect |
| Critical | Target takes 1 Damage per Ace and additionally loses 1 Life Point |
| Fumble | Attacker loses 1 Life Point; target makes an Attack of Opportunity against the attacker |

After Damage is determined, the target makes a **Protection Roll**. For every 1 Damage remaining after protection, the target loses 1 Life Point.

<div class="callout">
<p class="callout-title">FAQ</p>

**If a character falls into base contact, do they get an Attack of Opportunity and the charge-from-above bonus?** Yes and yes — provided they fall from 3" or higher and survive the fall damage first.

**If a character is killed by fall damage as a result of an attack, does it count as killed by the attacking character?** Yes.

**Can I use Expert Offence on Drowns and Grapples?** No — Expert Offence applies to Combat actions in base contact only.

</div>

#### Combat in Water

A swimming character may **only use weapons with the Aquatic Ability**, unless the character started the action outside water (e.g. jumping into base contact from the canal side).

### Grapple — 1 AP

Choose an enemy character **in base contact**. Make an **Opposed ATTACK Roll** (7+ for an Ace):

| Result | Effect |
|---|---|
| Success | Move the target 2" plus up to 1" per Ace rolled |
| Fail | No effect |
| Critical | Move the target 2" plus up to 1" per Ace; target receives a Stunned counter |
| Fumble | Target makes the Grapple action against the attacker using the same dice result |

- A character on a **larger base** gains **+1 ATTACK** when rolling to grapple (whether attacking or defending).
- A Grapple **cannot move the target onto a point higher than 1" above where they started**, though they do not have to be placed on solid ground.
- A Grapple can cause the target to fall off a building or into water — Falling rules apply.
- A grappled character **does not cause Attacks of Opportunity** for moving out of or into base contact during the Grapple; the grappling character is ignored for all movement during it.
- **Targeting a friendly character:** the roll is a Basic ATTACK Roll (not Opposed).

<div class="callout">
<p class="callout-title">FAQ</p>

**Can I Grapple an enemy if both characters are in water?** Yes.

**Can I target characters that are in base contact with enemy models?** Yes.

</div>

### Drown — 1 AP

Choose an enemy character **in base contact and in water**. A character with the **Water Creature** ability cannot be targeted. Make an **Opposed ATTACK Roll** (7+ for an Ace):

| Result | Effect |
|---|---|
| Success | Target loses 2 Life Points, plus 1 Life Point per Ace |
| Fail | No effect |
| Critical | Target loses 4 Life Points, plus 1 Life Point per Ace |
| Fumble | Attacker loses 2 Life Points |

- A character on a **larger base** gains **+1 ATTACK** (whether attacking or defending).
- **Protection Rolls may not be made against Drown actions.**

---

## Magic

Characters with the **Mage (X)** ability can cast arcane spells. Any (X) in spell text refers to the **casting character's Mage (X) number**.

### Disciplines

Mages are limited to certain kinds of spells. Five Disciplines exist: **Divinity, Blood Rites, Fateweaving, Runes of Sovereignty**, and **Wild Magic**.

A Mage (X) knows X spells, all from the **same Discipline**. Each Discipline has one **Cantrip** that is always known and does not count toward the maximum.

- **Discipline (X)** — may know spells from the listed disciplines.
- **Expert Sorcerer (X)** — adds X to the number of spells known.

Spells are chosen at the start of the game before rolling for Deployment Zone. Characters may only cast their chosen spells for the entirety of the game.

All spells are available at [ttcombat.com/pages/carnevale-resources](https://ttcombat.com/pages/carnevale-resources) or in the Magic Card deck.

### Cast Spell — 1 AP

A **Mage** may attempt to cast one of their known spells.

- **Each character may only attempt to cast each spell once per round.**
- A character **cannot cast a spell while in water** unless it has the Water Creature ability.
- If the caster is in base contact with one or more enemies, one enemy character (chosen by the controlling player or agreed by controlling players) makes an out-of-sequence Attack of Opportunity before the action completes.

Spend the spell's Will Point cost before rolling. Make a **Magic Roll** (MIND stat; Ace = spell's Difficulty or higher):

| Result | Effect |
|---|---|
| Success | Spell is cast according to its Effect |
| Fail | Cannot attempt any other spells this activation |
| Critical | Replenish 1 Will Point; cast the spell, increasing any (x) amounts by +1 |
| Fumble | Gain a Stunned counter and lose 1 additional WP; cannot attempt any other spells this activation |

### Dispel

When an enemy character attempts to cast a spell, a **friendly Mage in line of sight of the caster** may declare they are Dispelling it. The Dispelling Mage pays **1 Will Point**.

The Magic Roll becomes an **Opposed Roll** with Ace threshold equal to the spell's Difficulty. The **Dispelling character only counts Aces up to its Mage (X) level** — additional Aces are discarded.

If the Dispelling character rolls no Aces, it cannot attempt to Dispel any other spells this game round. A character cannot Dispel while in water unless it has the Water Creature ability.

---

## Terrain

*If terrain in your collection isn't covered here, agree with your opponent what rules it should follow.*

### Solid Ground

Any broadly horizontal space: streets, sloped roofs, stairs, balconies. No movement modifiers. Scenery 1" high or less counts as solid ground for Run/Climb actions (crates, railings, wells).

#### Difficult Ground

Rough terrain: smashed cobbles, large rocks, flooded streets. Moving over Difficult Ground with a Run/Climb action requires a Basic **DEXTERITY Roll**.

#### Unstable Ground

Found mostly on water (large rafts, planks, gondola poles) and sometimes on land (carts). Recommended no larger than 4" across.

When a character jumps or falls onto Unstable Ground, all other characters on it make a Basic **DEXTERITY Roll** after any Attacks of Opportunity. Characters on a **larger base** than the one that jumped on have **-1 DEXTERITY** for that roll:

| Result | Effect |
|---|---|
| Success | No effect |
| Fail | Move 2" toward the nearest edge; if moved off, they fall |
| Critical | Controlling player moves the character up to 2" in any direction |
| Fumble | Move off the nearest edge and fall |

If Unstable Ground is also an Obstacle (e.g. a gondola), resolve all characters' rolls first, then the jumping character may make a Chained Jump as normal.

### Water & Canals

A canal should be at least 4" wide and at least one should cross from edge to edge of the board. Moving into and out of canals where the wall is up to 1" high does **not** cost extra movement. A character **cannot climb out of a canal where the wall is higher than 1"**, even with a DEXTERITY roll.

### Water Access

Lowered jetties, ladders, crumbled bricks — allow climbing out of canals with walls higher than 1". A character using Water Access does **not** suffer the 2" swimming movement penalty. Water Creatures are unaffected. Fast Swimmer still applies.

### Landing Spots {#landing-spots}

Modify the effective distance fallen by:

| Surface | Modifier |
|---|---|
| Soft (carts, rotting corpses) | -4" |
| Water | -2" |
| Solid Ground | none |
| Difficult Ground | +2" |
| Dangerous (spiked railings, traps) | +4" |

### Obstacles & Debris

Any terrain 3" or less in height that isn't solid ground counts as an Obstacle. Jumping onto an Obstacle awards a **0 AP Chained Jump** once per character turn.

- **Small:** Too small to be placed on (barrel, gondola pole). May be moved over or jumped onto; a character cannot end its turn on one.
- **Large:** Large enough to be placed on (fountain, stack of boxes). Follows solid ground or Vertical Terrain rules as well as Obstacle rules.
- **Debris:** Always in water. Characters may swim freely through Debris and climb out of water onto it. Cannot end a turn on Debris — immediately move the character the shortest distance into the surrounding water.

### Barricades

- **Light:** A character in base contact with a Light barricade counts as in cover and gains **+1 PROTECTION** if the attacking character is on the other side.
- **Heavy:** Same rule but **+2 PROTECTION**.

When **moving over** a barricade that has enemy characters in base contact on the other side, the moving character must test as if disengaging. Weapons must still be in range for any resulting Attack of Opportunity.

### Impassable Terrain

Buildings, walls, ground in flame. Characters cannot move through Impassable Terrain. Full buildings cannot normally be entered.

### Vertical Terrain

Walls, buildings over 1" tall. Characters cannot move through Vertical Terrain horizontally, but can climb it using Run/Climb rules.

### Ropes & Ladders

Climbing or descending a rope, ladder, or rigging as part of a Run/Climb action requires **no DEXTERITY Roll**.

### Ruins

Crumbling buildings. Access points (doors, windows) may be moved through without penalty. A character may move up or down through ruins to different floors at any point — treat the entire area as Vertical Terrain.

### Gondolas

A Gondola is a special **Unstable Ground** and **Large Obstacle** placed on water. 2 characters on 30mm bases, or 1 character on a 40mm base, can ride a Gondola.

If a rider loses **3 or more Life Points in one action**, it falls off into the surrounding water.

A character riding a Gondola may make a **Row action**. A Gondola counts as Debris for any character not riding it.

<div class="callout">
<p class="callout-title">FAQ</p>

**Is a Gondola a Boat?** No — for the purposes of Boat Crew and Boat scenery interactions, Gondolas are not Boats.

</div>

#### Row — 1 AP

Make a Basic **DEXTERITY Roll**. A Row action cannot take the Gondola out of water.

| Result | Effect |
|---|---|
| Success | Gondola and characters move 2" plus 1" per Ace |
| Fail | Gondola and characters move 2" |
| Critical | Gondola and characters move 4" plus 1" per Ace |
| Fumble | All characters on the Gondola move 1" directly into water |

---

## Building Your Gang

Characters group into gangs. Each gang must have **one character with the *Leader* keyword**.

### Ducats

An agreed number of Ducats is available to recruit gang members (set by the scenario or agreed with your opponent). Each character costs a set number of Ducats. Ducats may also be spent on [Equipment](#equipment).

### Frequency Rules

- Every character in your gang must have the **same Faction (X)** keyword.
- You must always have **one** character with the *Leader* keyword.
- You may **not** have more characters with the *Hero* keyword than characters with the *Henchman* keyword in total.
- A character with the *Unique* keyword may only appear once across your gangs. Rules specifically relating to a *Unique* character only work for your friendly one.

**Multiple gangs:** Recommended only in games of 200 Ducats or higher. All gangs must each abide by the Frequency rules.

---

## Equipment

Each individual piece of equipment may only be taken once per player.

| Equipment | Cost | Effect |
|---|---|---|
| **Flashbang Grenade** | 1 | Once per game, when disengaging, automatically score a Critical instead of rolling. |
| **Bottled Courage** | 2 | Once per game, re-roll a single die (not the Destiny Dice). |
| **Climbing Tools** | 2 | Once per game, on a Run/Climb action, automatically score a Critical instead of rolling. |
| **Limewater Rebreather** | 2 | Once per game, on a Dive action, automatically score a Critical instead of rolling. |
| **Lantern** | 2 | Once per game, at the start of a round, pick a friendly character. Until end of round, any character within 6" (friendly or enemy) cannot claim cover bonuses and loses any Hidden counters. |
| **Parachute** | 3 | Once per game, when Falling, automatically score a 10 on the Destiny Dice instead of rolling it. |
| **Gondola** | 3 | Set up a Gondola in water in your Deployment Zone at the start of the game. |
| **Intercepted Documents** | 4 | Before deploying, one friendly character gains the **Infiltrate** Character Ability. |
| **Carnevale Mask** | 4 | Once per game, at the start of an enemy character's turn, pick a friendly character not in base contact with any enemies. For that enemy's turn, this character cannot be attacked in any way. |
| **Poison** | 5 | Once per game, before rolling for a Combat action, the chosen weapon gains the **Poisoned** ability for that attack. |
| **Leather Undershirt** | 10 | Once per game, when a friendly character has taken Damage and before Protection rolls, roll 1 die. Subtract that many points from the Damage received. |

---

## Scenarios

### Campaigns vs. One-Off Scenarios

**Scenarios** are individual games. **Campaigns** link multiple scenarios into a story. We recommend 150 Ducats for linked campaigns and 100 Ducats for one-off games.

### Scenario Structure

Each scenario specifies: **Gangs** (players and Ducats), **Setup** (board size), **Primary Objective**, **Agendas**, **Special Rules**, **Deployment Zones**, and **Duration** (number of rounds).

**Terrain guideline:** aim for roughly 1/3 water, 1/3 ground, 1/3 buildings.

### Primary Objectives

Objectives use **30mm round markers**. Unless stated, Objectives must be placed **at least 4" away from Deployment Zones and from each other**. They may be in water or above ground level. A friendly character within **3"** of an Objective at end of game scores the listed Victory Points, provided no enemy characters are also within 3".

#### Objective Rules

- **Claimable:** Any character ending its turn in base contact (not in base contact with an enemy) claims it. VPs are scored at end of game regardless of character distance.
- **Destructible:** A character starting its turn in base contact may spend 1 AP to remove the Objective.
- **Hidden:** Placed face-down. A character ending its turn in base contact (not in base contact with an enemy) may reveal it.
- **Mobile:** Can be picked up. A character ending its turn in base contact (not in base contact with an enemy) picks it up. The carrier may only make Run/Climb actions. If the carrier loses **3 or more Life Points** or is removed from the board for any reason, it drops the Objective. A character may carry only one Objective at a time. Any friendly character ending their turn in base contact with the carrier may take it. A character with **Pickpocket** automatically takes the Objective from an enemy carrier on a successful disengage.

<div class="callout">
<p class="callout-title">FAQ — errata</p>

**Mobile Objectives:** A character can only carry one Objective at a time.

</div>

### Agendas

Secondary objectives drawn at the start of the game. Check at end of each game round whether Agendas have been achieved.

- **Cycle:** When you score VPs for an Agenda, immediately draw another one.
- **Secondary:** You must achieve at least one Agenda in order to score VPs from any source.
- **Double:** When you achieve an Agenda, you may keep it in play. Achieve it again for double VPs. Not achieving it again means zero VPs for it.
- **Secret:** Keep Agendas secret until achieved. If not specified, all players may see each other's Agendas.
- **Total:** You must achieve all your Agendas to score their VPs. Failing to achieve every Agenda means zero Agenda VPs — but Primary Objective VPs may still be scored.

<div class="callout">
<p class="callout-title">FAQ</p>

**Can I share Agenda Cards with my opponent?** Yes — unless your opponent draws all the easy ones, a shared deck is fine.

</div>

### Deployment

After placing terrain, Objectives, and drawing Agendas, each player rolls 1 die (re-roll ties). Highest chooses a Deployment Zone and deploys all friendly characters. Then next highest, and so on.

**All friendly characters must be set up in the same Deployment Zone, no higher or lower than 3" above or below ground level. Characters may not be set up in water unless specified.**

Unless otherwise stated, deploy characters **at least 4" away from enemy characters**.

### Order of Play (Quick Reference)

**Setup:**

1. Choose Scenario (and Attacker/Defender if relevant).
2. Build gang, including choosing Magic Spells.
3. Place terrain (alternate if not specified).
4. Place Objectives and draw Agendas.
5. Roll off for Deployment Zones; deploy in order from highest to lowest.

**Each Game Round:**

1. **Initiative** — each player picks 1 character's remaining CP and rolls; 7+ = Ace; most Aces goes first.
2. **Activate** — initiative player chooses 1 character to take their turn (up to 3 AP).
3. **Play** — continue clockwise, each player choosing a character to activate.
4. **End of Round** — once all characters have acted, return to step 1.
5. **End of Game** — after the last round, tally VPs.

---

## Special Rules

Character Abilities are listed on a profile or acquired through other means (e.g. Command Abilities). Rules with **(X)** stack to a **maximum of 3 unless otherwise noted** — though a character's stats are unaffected by this cap (stats can stack to 10).

<div class="callout">
<p class="callout-title">FAQ</p>

**What's affected by the stacking limit of 3?** All special rules in this section that have an (X) after them. If a character with Expert Offence (2) would gain another Expert Offence (2), they end up with Expert Offence (3). If a rule would take (X) above 3, only the highest value is used. Stats are unaffected by this cap.

</div>

### Acrobatic (X)

May re-roll up to (X) dice when making a DEXTERITY roll as part of any Run/Climb or Jump action.

### Aerial Attack

Does not lose Life Points from falling, provided it makes a charge from above.

<div class="callout">
<p class="callout-title">FAQ</p>

**Can a character with Flight move vertically to gain a charge from above?** Yes — though if already in base contact with an enemy it must Disengage first.

</div>

### Berserk

If this character has 5 or fewer Life Points at the start of its turn, it gains **+1 Action Points** and **+1 ATTACK**.

### Boat Crew

May be set up on a Boat at the start of the game. Replenishes **1 Will Point** at the start of its turn if on a Boat. Additionally, if at least 1 Boat Crew character is on a Boat, the **Cast Off Command Ability** costs only 1 CP, and the Boat may instead move up to 18".

### Brave

Automatically succeeds when making a Basic MIND roll from the **Fear** ability.

### Brawler (X)

Modifies ATTACK by (X) when in base contact with **2 or more opponents**.

### Bodyguard (X)

(X) may be a character name or a keyword.

If an enemy character charges (X), this character may immediately make an out-of-sequence Run/Climb action provided it is out of base contact with any enemy and it charges **that** active enemy. This action causes an Attack of Opportunity and takes place **before** the opponent's Attack of Opportunity.

<div class="callout">
<p class="callout-title">FAQ</p>

**If 2 characters with Bodyguard are in range when a character gets charged, can both charge the attacker?** Yes. Resolve defenders one at a time in chosen order. If the second defender cannot complete a charge, it cannot use Bodyguard.

</div>

### Bulky

Does not benefit from being in cover. Cannot make Hide actions.

### Companion (X)

(X) may be a character name or a keyword.

If this character can draw line of sight to a (X) character at the start of its turn, it replenishes **1 Will Point**. While in line of sight to a (X) character, this character uses that character's MIND value instead of its own (even if lower). If more than one (X) character is in line of sight, use the highest MIND value.

<div class="callout">
<p class="callout-title">FAQ</p>

**If a character has more than one Companion (X) rule, does it gain multiple Will Points?** No — only one, though you only need to be in line of sight of one (X) character to gain the benefit.

</div>

### Concealment (X)

While in cover, this character modifies its PROTECTION by (X).

### Engage

Automatically wins the Opposed Roll when an enemy character disengages from them — always gets an Attack of Opportunity. If the opposing character has **Slippery**, both players roll to disengage as normal.

### Ethereal

May ignore all terrain while moving, but cannot end its turn or take any action while "inside" Impassable Terrain.

<div class="callout">
<p class="callout-title">FAQ</p>

**Do characters with Ethereal ignore the penalties for water?** Yes.

</div>

### Expert Grappler (X)

May re-roll up to (X) dice when making or defending against a **Grapple** or **Drown** action.

### Expert Marksman (X)

May re-roll up to (X) dice when making a Combat action while **not** in base contact with the target.

### Expert Offence (X)

May re-roll up to (X) dice when making a Combat action while **in base contact** with the target.

### Expert Protection (X)

May re-roll up to (X) dice when making a **Protection Roll**.

### Expert Sorcerer (X)

May re-roll up to (X) dice when making a **Cast Spell** action or **Dispelling** a spell. In addition, this character knows (X) additional magic spells.

### Fast Swimmer (X)

If this character starts a **Run/Climb action in water**, it adds (X) inches to its MOVE for that action (even if it leaves water during the action).

### Fear (X)

When this character makes a Combat action, the target must first make a Basic MIND Roll with MIND modified by (X) (minimum 1). If they roll **at least 1 Ace**, no effect. If they roll **no Aces**, this character may re-roll any failed dice for the Combat action.

### First Strike (X)

Modifies ATTACK by (X) when making an **Attack of Opportunity from charging**.

### Flight

When this character makes a Run/Climb action, it may instead **Fly**. Measure from the character to any point within MOVE (horizontally, vertically, or diagonally) and move there without making a DEXTERITY roll. Cannot take any actions while mid-air other than further Fly actions. If it ends its turn mid-air, it falls.

This character takes **2 less Damage** from falling.

### Frenzied

This character may use its Life Points as if they were Will Points.

<div class="callout">
<p class="callout-title">FAQ — errata (all rulebook versions)</p>

**Frenzied cannot be used if it would bring a character's Life Points to 0.**

</div>

<div class="callout">
<p class="callout-title">FAQ</p>

**Do Life Points used as Will Points due to Frenzied count toward the Agenda "Will Be Done"?** Yes.

</div>

### Hunter

Gains **Penetration -3** on weapons (but **not** Unarmed attacks) when targeting an enemy with a **larger base size**.

### Infiltration

May be deployed more than 3" above or below ground level at the start of the game, but **not** in water unless specified.

### Limited Movement

May only move up to **2"** maximum in a single action when in water, and up to **2" vertically** in a single Run/Climb action. May still Jump as normal. Cannot carry Mobile Objectives.

<div class="callout">
<p class="callout-title">FAQ — errata (all rulebook versions)</p>

**Characters with the Water Creature Special Rule move their full MOVE while in water but still suffer all other penalties of Limited Movement.**

**Are Jumps affected by Limited Movement?** No.

**Is Disengaging affected by Limited Movement?** No — disengaging itself is unaffected, though where the character can move to afterwards is still subject to Limited Movement.

</div>

### Mage (X)

This character is a Mage and knows (X) magic spells. See [Magic](#magic). A character with Mage (0) still knows a single Cantrip.

### Mindless

May interact with Objectives as normal (carrying, revealing, claiming, destroying) but is ignored when scoring Victory Points for them at end of game. Can still score VPs through other win conditions (killing enemies, Agendas).

<div class="callout">
<p class="callout-title">FAQ</p>

**Can Mindless characters score VPs on Primary Objectives?** Only Objectives on the board are affected — Mindless characters can score VPs through Agendas, killing enemies, or surviving.

**Do Mindless characters count for taking or contesting Objectives during scoring?** No.

</div>

### Parry (X)

When this character is the target of a Combat action **while in base contact with the attacker**, you may force your opponent to re-roll up to (X) dice from the Attack Roll. Attackers may also choose to re-roll — a die may never be re-rolled more than once.

### Pickpocket

If this character successfully disengages, its opponent loses 1 Will Point and this character automatically takes any Mobile Objective the opponent was carrying. At the end of the action, this character or any friendly character within 3" replenishes 1 Will Point.

### Primitive

At the start of this character's turn, make a Basic MIND Roll. If no Aces are rolled, it receives a **Stunned counter**.

### Slippery

Automatically wins the Opposed Roll when disengaging — never gets hit by an Attack of Opportunity. If the opposing character has **Engage**, both players roll to disengage as normal.

### Universal Shielding (X)

This character always has a minimum PROTECTION of (X) after all modifiers. Can stack higher than 3, but cannot take PROTECTION above its starting number.

### Vampiric Attack (X)

If this character makes a Combat action **while in base contact** with its target and causes the target to lose at least 1 Life Point, it replenishes (X) of its own Life Points.

<div class="callout">
<p class="callout-title">FAQ</p>

**Can I use Vampiric Attack if I Grapple an enemy off a roof?** No — Vampiric Attack only works on Combat actions in base contact.

</div>

### Water Creature

This character moves its full MOVE in water, may move up to 8" as part of a Dive action, and cannot be Drowned. May be set up in water at the start of the game.

---

## Weapon Abilities

### Aquatic

This weapon can be used while the attacker is in water.

### Black Powder

This weapon cannot be used if a character **starts its turn in water**. In addition, a character using this weapon loses 1 additional Life Point when they Fumble an Attack Roll.

### Blast

Uses the **round blast marker**. Place the marker centred over the target. Roll once for your Attack Roll and apply the result to every individual character (friendly and enemy) under the template and within **1" vertically**.

<div class="callout">
<p class="callout-title">FAQ</p>

**If I hit a character on the edge of a rooftop with a Blast weapon and there's a character at ground level next to the same edge, does the ground character get affected?** Only characters within 1" or less of vertical distance are affected.

</div>

### Harmless

A character cannot cause any Damage when using this weapon, but still follows normal rules for making Combat actions.

<div class="callout">
<p class="callout-title">FAQ</p>

**Do I have to target an enemy with Harmless weapons?** Yes, unless otherwise specified.

</div>

### Knockback

If a character takes Damage from this weapon (whether they lose Life Points or not), they are moved **2" horizontally directly away** from the attacker. This movement does not count as charging or disengaging and cannot cause Attacks of Opportunity.

### Poisoned

If a character loses at least 1 Life Point from this weapon, that character rolls 1 die. On a **7+**, they shrug it off. On a **1-6**, they lose extra Life Points based on base size:

- 30mm — lose 3 Life Points
- 40mm — lose 4 Life Points
- 50mm — lose 5 Life Points
- 60mm+ — lose 6 Life Points

### Reload (X)

This weapon may only be used for up to (X) Combat actions per round. A character in base contact with an enemy may only use this weapon (X) times (modified by amount already used that round). Once the limit is reached, the weapon **cannot be used again** until the character **starts their turn outside of base contact** with any enemies.

### Smoke

Any character hit counts as being in cover until end of round and gains a **Hidden counter**. If this weapon also has Blast, any character under the marker is affected. Remove the marker at end of round.

### Stun

If a character takes Damage from this weapon (whether they lose Life Points or not), they receive a **Stunned counter**.

A character with a Stunned counter reduces MOVE, ATTACK, DEXTERITY, and MIND by 1 (minimum 1). The Stunned counter is automatically removed at the **end of its next turn**. A character can only have one Stunned counter at a time.

**If a character with a Stunned counter starts its turn in water, it loses 2 Life Points.**

### Template

Uses the **teardrop shaped template**. Trace a line between the attacker and the target. Place the template with the centre on the line, small end in range of the weapon (base contact if range is 0"), large end further away. Any character at least partly touched by the template (friendly or enemy) is affected. Roll once for your Attack Roll and apply the result to every character hit.

### Two-handed

This weapon increases its **Evasion by +1** when making an Attack of Opportunity.
