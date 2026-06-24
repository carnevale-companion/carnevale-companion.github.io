---
title: Will Points
nav_order: 2
is_ref: true
toc:
  - title: TL;DR
    anchor: tldr-what-wp-is-worth-best-to-worst
  - title: Value per WP by Action Type
    anchor: detailed-maths-value-per-wp-by-action-type
  - title: Frenzied (LP-as-WP Engine)
    anchor: frenzied-the-lp-as-wp-engine
  - title: WP Replenishment Sources
    anchor: all-wp-replenishment-sources
  - title: Anti-WP Effects
    anchor: anti-wp-effects
---

## TL;DR: What WP is worth (best to worst)

You can spend up to **2 WP** before any roll to give yourself +1 die per WP used:

- **On an attack:** the best use. More dice equals more hits and more damage, and additional chances to trigger attack effects like Stun. Fully boosting a key attack can lift its damage by roughly half.
- **On casting a spell:** very good: it makes an important spell much more likely to land (and avoids disastrous fumbles).
- **On a defence (Protection) roll:** okay, but worth less than on an attack.
- **On a movement or utility roll:** very situationnal.

## Detailed maths: Value per WP by Action Type

### Combat / Ranged Attack (threshold: target DEX)

Each bonus die adds **(11 − DEX) / 10** expected damage. WP is most efficient here because DEX is usually below 7.

| Target DEX | E[+Aces per WP] |
|------------|-----------------|
| 4          | +0.70           |
| 5          | +0.60           |
| 6          | +0.50           |
| 7          | +0.40           |

Full +2 WP on ATK 4 vs DEX 4: from 2.80 to 4.20 expected Aces (**+50% damage**).

### Protection (threshold: 7+)

Each bonus die adds **+0.40** expected LP saved.

| PROT | Base E[LP saved] | +1 WP | +2 WP |
|------|------------------|-------|-------|
| 3    | 1.20             | 1.60  | 2.00  |
| 4    | 1.60             | 2.00  | 2.40  |

WP on defence is worth less per point than on offence vs DEX 4–5 targets.

### Grapple / Drown (threshold: 7+)

Each bonus die adds **+0.40** expected Aces. Lower return than melee Combat vs low-DEX targets.

| ATK | Base | +1 WP | +2 WP |
|-----|------|-------|-------|
| 3   | 1.20 | 1.60  | 2.00  |
| 4   | 1.60 | 2.00  | 2.40  |

### Jump (Basic DEX Roll, threshold: 7+)

Each bonus die adds **+0.40 expected inches** (Success = 2" + 1" per Ace).

| DEX | Base move | +1 WP | +2 WP |
|-----|-----------|-------|-------|
| 3   | 3.2"      | 3.6"  | 4.0"  |
| 4   | 3.6"      | 4.0"  | 4.4"  |
| 5   | 4.0"      | 4.4"  | 4.8"  |

### Magic (threshold: spell Difficulty)

WP serves two roles: **casting cost** (1 WP per spell) and **dice boost** (up to 2 additional WP on the roll). These are separate spends.

| MIND 3, Diff 7 | P(Success) | P(Fumble) | E[Aces] |
|----------------|------------|-----------|---------|
| No bonus dice  | 78.4%      | 3.6%      | 1.20    |
| +1 WP dice     | 87.0%      | 2.2%      | 1.60    |
| +2 WP dice     | 92.2%      | 1.3%      | 2.00    |

+2 WP halves the fail rate and nearly triples Critical potential. Fumble costs a Stun counter **and** −1 extra WP, making near-empty pools a downward spiral.

## Frenzied: The LP-as-WP Engine

Most Frenzied characters have WP 0, so LP is their only bonus-die source. A LP 15 character has **15 bonus dice** total, about 5× a typical WP 3 non-mage, capped at 2 per roll.

### Two fully boosted attacks in one turn (4 LP cost)

| Profile | Base E[Aces] | +2 LP E[Aces] | Gain | LP cost |
|---|---|---|---|---|
| ATK 3 vs DEX 4 | 2.10 | 3.50 | +67% | 4 LP |
| ATK 4 vs DEX 4 | 2.80 | 4.20 | +50% | 4 LP |
| ATK 4 vs DEX 5 | 2.40 | 3.60 | +50% | 4 LP |

Very few non-Frenzied models can match this output. WP 4 is rare outside dedicated mages, and spending it all on two attacks leaves nothing for the rest of the game.

### Vampiric Attack interaction

Each triggering hit refunds X LP. With VA(1) on two boosted attacks:

- Spend 4 LP, recover 2 LP if both connect → **net 2 LP** for a +50% damage turn
- With VA(2): net 0 LP cost against low-Prot targets

## All WP Replenishment Sources

### Universal

| Source | Amount | Condition |
|---|---|---|
| Spell Critical | +1 WP | Any Critical on a spell casting roll |
| Divinity Cantrip (Boon of Heaven) | +1 LP +1 WP | Cast on friendly in LOS within 6" |
| Fortune’s Favour | +1 WP (+2 with story) | Post-action heroic deed |

### Character Abilities (rules-level)

| Ability | Amount | Condition |
|---|---|---|
| Companion(X) | +1 WP/turn | Another (X) in LOS at start of turn |
| Boat Crew | +1 WP/turn | While on a Boat |
| Pickpocket | +1 WP | On successful disengage (self or friendly within 3") |

### The Vatican

| Character | Source | Amount | Condition |
|---|---|---|---|
| Faction Command | Heavenly Father Guide Us (PULSE) | +2 WP self, +1 WP to all friendlies within 3" | - |
| Patriarch Bishop de Bernis (Leader) | Patriarch Bishop command | +1 WP/turn | Grants all Vatican chars Companion(Leader), and any that can see a Leader at start of turn replenish 1 WP |
| Father Cesta (Leader) | Gates of Heaven (PULSE) | WP counts as 2 on rolls | Friendly Construct chars within 6" |
| Father Cesta (Leader) | Impart Will | +1 starting WP | All friendly Construct chars at game start |
| Angel of the Blooded Rose (Hero) | Heavenly Vision | +1 to any WP replenishment | Whenever any friendly in LOS replenishes WP |
| Felix Baumgartner (Hero) | Renewed Vigour | Full WP replenishment | On kill |
| Eater of Sin (Hero) | Communion for the Sinless | +2 WP | On killing a WP-0 enemy |
| Cross-bearing Deacon (Hero) | Holy Relic | +1 WP/turn | Any other friendly starting turn within 6" |
| Seraph (Hero, Construct) | Holy Grace | +1 WP | Per successful Combat action, can exceed starting WP |
| Venator of Devotion (Hero, Hospitaller) | Killing Blow | Full WP replenishment | On overkill |
| Altar Boy (Henchman) | Censer Bearer | +1 WP/turn | Any friendly starting turn within 6" in LOS |

### The Doctors

| Character | Source | Amount | Condition |
|---|---|---|---|
| Faction Command | Nexus Link Reconfiguration (PULSE) | 1 char loses all WP → other replenishes 2× | Pick 2 friendlies within 6" |
| Madman (Henchman) | Nexus (WP6) | Pool sharing | Doctor keyword chars within 6" use his WP |
| Carrion (Henchman) | Nexus (WP4) | Pool sharing | Doctor keyword chars within 6" use her WP |
| Voltage Bombardiers (Hero) | Nexus (WP4) | Pool sharing | Doctor keyword chars within 6" use his WP |
| Unleashed Madman (Hero) | Nexus (WP3) | Pool sharing | Doctor keyword chars within 6" use his WP |
| Hollowman (Henchman) | Blood Nexus | Nexus chars replenish N WP | Whenever Hollowman loses N LP |
| Hollowman (Henchman) | Death Throes Overload | +2 WP | All Doctor chars within 6" when Hollowman dies |

### Patricians

| Character | Source | Amount | Condition |
|---|---|---|---|
| Noble Admiral (Leader) | Naval Discipline (PULSE) | +1 WP (or +2 for Boat Crew chars) | Other friendly chars on same Boat |
| Venetian Noble (Leader) | Murderous Patron | +1 WP | Any friendly that kills an enemy (both in LOS of Venetian Noble) |
| Sopracomito (Leader/Hero) | Wages Are Here (PULSE) | +1 WP | Friendly Soldier chars that move into base contact with him |
| Sopracomito (Leader/Hero) | Pay Out (WP8) | Pool sharing | Friendlies within 6" use his WP |
| Gourmand Noble (Hero) | Flesheater | +1 WP | When Combat causes target to lose ≥1 LP |
| Gourmand Noble (Hero) | The Other, Other White Meat (AURA) | Grants Flesheater | All other friendlies in LOS gain Flesheater while in LOS |
| Seven Years Veteran (Hero) | Inspiring | ×2 multiplier | A friendly Soldier's own WP counts as 2 when spent |
| Cannibal Cultist (Henchman) | Flesheater | +1 WP | When Combat causes target to lose ≥1 LP |
| Cortigiane (Henchman) | Affirmation | +1 WP to both chars | At start of turn, pick a Councillor in LOS |

### Rashaar

| Character | Source | Amount | Condition |
|---|---|---|---|
| Faction Command | Soul Drain (PULSE) | +1 WP per Ace | Basic MIND Roll, character in base contact loses equal LP |
| Thalidraur (Leader) | Lead Through Fear | +1 WP (+1 CP) | Per kill within 6" (any character) |
| Emissary of Mother Hydra (Hero) | Rip Apart | +1 WP | Per Tentacle kill |
| Dagonite Priest (Hero) | Sacrifice | +1 WP per LP dealt | Combat with Sacrificial Dagger (can target friendlies) |
| Wet Nurse (Henchman) | Surrogate | Pool sharing | Hydra-keyword chars within 6" use her WP |
| Wet Nurse (Henchman) | Kraken Nurse | +1 WP | Per new Infant Kraken placed in LOS |

### The Guild

| Character | Source | Amount | Condition |
|---|---|---|---|
| Capodecina (Leader) | Fight for the Guild! (PULSE) | +2 WP from Companion | One Trade char in LOS replenishes 2 WP instead of 1 until end of game |
| Prince of Thieves (Leader/Hero) | Take it for the Guild! | +2 WP on Pickpocket | Any friendly in LOS (instead of standard +1) |
| Baba-Yaga (Hero) | Blood Rights (1AP) | +1 WP | Char within 3" loses 1 LP |
| Witch (Hero) | Blood Rights (1AP) | +1 WP | Char within 3" loses 1 LP |
| Death Duellist (Hero) | Victory Rush | +2 WP | On kill with Combat action (choice: +1AP, +4LP, or +2WP) |
| Very Loud Ostrich (Hero) | Doot | +1 WP | All friendlies within 3" per Combat with Trumpet |
| Blooded (Henchman) | Living Sacrifice | LP→WP for nearby chars | House of Virtue chars within 6" use his LP as WP (2 LP = 1 WP) |
| Blood Courier (Henchman) | Transfusion (1WP) | +2 WP | On killing an enemy with the 1 LP drain |

### Gifted

| Character | Source | Amount | Condition |
|---|---|---|---|
| La Signora (Leader/Hero) | Search of Satisfaction (PULSE) | +N WP | Count all chars (friendly and enemy) within 3" |
| Fate (Hero) | Aura of Inevitability (1AP) | +2 WP | Opposed MIND vs enemy in LOS within 6", success = target loses 2WP+2LP, self replenishes 2WP |
| Harbinger's Reflection (Hero) | A Light in the Dark | +2 WP | Whenever any char uses 2+ of their own WP in one action |
| Francisco De Lorme (Hero) | Take the Oath | Pool sharing | Masked char gains +2 WP and Companion(Francisco), and friendlies within 6" may use masked char's WP |
| Starspawn (Henchman) | Thirsty | +1 WP | Whenever any spell (friendly or enemy) is successfully cast |
| Pantaleone (Henchman) | Hoarded Wealth | +1 WP at round end | If no WP spent that round, can exceed starting WP |
| Escaped Madman (Henchman) | Shattered Nexus | +3 WP | When reduced to 0 WP, 3-Damage blast first |

### Strigoi

| Character | Source | Amount | Condition |
|---|---|---|---|
| Tarot Reader (Hero) | Cartomancy | +1 WP | On successful Cantrip, to self or friendly within 6" |

## Anti-WP Effects

### Universal

| Ability | Amount | Condition |
|---|---|---|
| Pickpocket | +1 WP | On successful disengage (self or friendly within 3") |

### In factions

| Faction | Character | Ability | Effect |
|---|---|---|---|
| Doctors | Ghoul | Bereft of Will | All chars within 3" cannot use WP, and on death all within 3" lose 1 WP |
| Gifted | Harlequin | Mischievous | On 7+, enemy WP used within 3" is wasted |
| Guild | Black Lamp | The Lamp | Enemy chars within 3" cannot use WP |
| Strigoi | Strigoi Priest | Devil Incarnate | Enemy chars in base contact cannot use WP |
| Vatican | Exorcist | Helm of Penitence | Enemy chars within 3" cannot use WP |
| Vatican | Exorcist | Exorcism | Divine Touch hit → target loses 1 WP, and 0-WP targets take +3 Damage instead |
| Vatican | Witch Finder | Enemy chars in base contact cannot use WP |
| Vatican | Inquisitorial Guard | Enemy chars in base contact cannot use WP |
| Vatican | Eater of Sin | Let Your Sins Be Absolved | Compelled Confession hit → target loses 1 WP |
| Vatican | Throne | Be Thou Afraid? | Enemy that triggers Fear and rolls 0 Aces loses 1 WP |
