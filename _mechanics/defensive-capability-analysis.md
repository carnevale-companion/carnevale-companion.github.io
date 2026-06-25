---
title: "Defensive Capability Analysis"
description: Raw defensive capability data analysis
nav_order: 4
is_analysis: true
toc:
  - title: Units and method
    anchor: units-and-method
  - title: Role standards
    anchor: role-standards
  - title: By faction
    anchor: by-faction
  - title: Best models
    anchor: best-models
---

## Units and method

Metric: [**ATK2K**](/mechanics/combat/) (Attacks-To-Kill = LP ÷ expected net LP lost per incoming attack).

This is the EHP-equivalent survivability number, folding LP, Dexterity, Protection, Parry, and Universal Shielding. Higher means tankier. The baseline uses the baseline reference attacker (Attack 3). `net_*` means expected LP lost per attack from each reference attacker.

See [Combat Capabilities Calculations](/mechanics/combat/) for method and calibration.

## Role standards

Median ATK2K per role vs each reference attacker, how many hits of each type a role survives (higher is tankier). **Raw** is the absolute lens; the per-Ducat table follows, and since raw tracks cost only the per-Ducat view compares roles fairly across rows.

**Drown excludes Water Creatures** (immune), so its column reflects only the models a Drown can target.

| Role | baseline | elite | penetrator | drown |
|---|---|---|---|---|
| Tank | 23.7 | 5.85 | 9.65 | 8.0 |
| Brawler | 21.0 | 5.5 | 12.4 | 9.0 |
| Control | 12.65 | 4.25 | 6.9 | 7.4 |
| Canal Fighter | 12.55 | 4.1 | 6.55 | 5.8 |
| Disruptor | 12.25 | 3.95 | 8.9 | 7.3 |
| Sniper | 11.5 | 3.8 | 6.3 | 6.9 |
| Damage Dealer | 10.75 | 3.7 | 6.3 | 7.7 |
| Assassin | 10.3 | 3.7 | 6.55 | 8.35 |
| Line Fighter | 9.7 | 3.3 | 5.0 | 5.8 |
| Specialist | 9.7 | 3.3 | 5.0 | 5.8 |
| Support | 9.7 | 3.3 | 5.3 | 5.8 |
| Harasser | 8.75 | 3.15 | 5.2 | 5.8 |
| Objective Runner | 7.7 | 2.85 | 4.85 | 5.3 |
{: .sortable}

### Per Ducat

Median ATK2K/Ducat vs each attacker, the fair cross-role comparison.

| Role | baseline | elite | penetrator | drown |
|---|---|---|---|---|
| Tank | 1.532 | 0.384 | 0.593 | 0.56 |
| Brawler | 1.318 | 0.371 | 0.711 | 0.6 |
| Sniper | 0.993 | 0.293 | 0.525 | 0.525 |
| Line Fighter | 0.974 | 0.329 | 0.506 | 0.58 |
| Disruptor | 0.824 | 0.275 | 0.584 | 0.481 |
| Canal Fighter | 0.797 | 0.261 | 0.45 | 0.55 |
| Objective Runner | 0.787 | 0.279 | 0.505 | 0.482 |
| Harasser | 0.757 | 0.292 | 0.487 | 0.52 |
| Support | 0.752 | 0.254 | 0.417 | 0.438 |
| Damage Dealer | 0.72 | 0.254 | 0.427 | 0.519 |
| Specialist | 0.694 | 0.25 | 0.418 | 0.442 |
| Control | 0.669 | 0.248 | 0.429 | 0.525 |
| Assassin | 0.587 | 0.224 | 0.397 | 0.475 |
{: .sortable}

## By faction

Per-faction median ATK2K within each combat role, vs that role's global median, which strips out the role-mix confound of an overall faction average. Support, Specialists, and Objective Runners are excluded, durability is not their job. **`vs global (value)` (per-Ducat) is the fairer read**; the raw column favours factions whose models are simply more expensive.

**Small-n roles (1-2 models per faction) are effectively a single statline.**

### Tank

Global Tank median ATK2K = **23.7**, median ATK2K/Ducat = **1.532**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | 1 | 33.6 | +42% | 2.24 | +46% |
| [The Doctors](/factions/the-doctors/) | 2 | 24.9 | +5% | 1.79 | +17% |
| [Strigoi](/factions/strigoi/) | 1 | 22.9 | -3% | 1.431 | -7% |
| [Rashaar](/factions/rashaar/) | 2 | 21.4 | -10% | 1.089 | -29% |
{: .sortable}

### Brawler

Global Brawler median ATK2K = **21.0**, median ATK2K/Ducat = **1.318**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [Rashaar](/factions/rashaar/) | 3 | 42.6 | +103% | 1.393 | +6% |
| [Patricians](/factions/patricians/) | 3 | 19.5 | -7% | 1.355 | +3% |
| [Gifted](/factions/gifted/) | 1 | 19.8 | -6% | 1.32 | +0% |
| [The Vatican](/factions/the-vatican/) | 8 | 22.9 | +9% | 1.315 | +0% |
| [The Guild](/factions/the-guild/) | 1 | 14.9 | -29% | 1.146 | -13% |
| [The Doctors](/factions/the-doctors/) | 1 | 13.2 | -37% | 0.88 | -33% |
{: .sortable}

### Damage Dealer

Global Damage Dealer median ATK2K = **10.8**, median ATK2K/Ducat = **0.72**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [Patricians](/factions/patricians/) | 8 | 12.5 | +16% | 0.97 | +35% |
| [Rashaar](/factions/rashaar/) | 4 | 12.1 | +12% | 0.926 | +29% |
| [The Vatican](/factions/the-vatican/) | 6 | 13.7 | +27% | 0.866 | +20% |
| [The Doctors](/factions/the-doctors/) | 13 | 11.4 | +6% | 0.746 | +4% |
| [Gifted](/factions/gifted/) | 11 | 11.3 | +5% | 0.724 | +1% |
| [The Guild](/factions/the-guild/) | 10 | 9.6 | -11% | 0.603 | -16% |
| [Strigoi](/factions/strigoi/) | 10 | 9.4 | -13% | 0.568 | -21% |
{: .sortable}

### Assassin

Global Assassin median ATK2K = **10.3**, median ATK2K/Ducat = **0.587**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Guild](/factions/the-guild/) | 2 | 13.0 | +26% | 0.866 | +48% |
| [Gifted](/factions/gifted/) | 1 | 16.6 | +61% | 0.83 | +41% |
| [Patricians](/factions/patricians/) | 2 | 9.8 | -5% | 0.633 | +8% |
| [The Doctors](/factions/the-doctors/) | 1 | 7.3 | -29% | 0.562 | -4% |
| [The Vatican](/factions/the-vatican/) | 1 | 10.6 | +3% | 0.53 | -10% |
| [Strigoi](/factions/strigoi/) | 3 | 10.0 | -3% | 0.516 | -12% |
{: .sortable}

### Line Fighter

Global Line Fighter median ATK2K = **9.7**, median ATK2K/Ducat = **0.974**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | 7 | 9.7 | +0% | 1.078 | +11% |
| [Patricians](/factions/patricians/) | 7 | 9.7 | +0% | 1.027 | +5% |
| [The Guild](/factions/the-guild/) | 5 | 9.7 | +0% | 0.958 | -2% |
| [The Doctors](/factions/the-doctors/) | 5 | 9.8 | +1% | 0.885 | -9% |
| [Strigoi](/factions/strigoi/) | 6 | 9.3 | -4% | 0.865 | -11% |
| [Rashaar](/factions/rashaar/) | 4 | 9.6 | -1% | 0.765 | -21% |
{: .sortable}

### Canal Fighter

Global Canal Fighter median ATK2K = **12.6**, median ATK2K/Ducat = **0.797**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | 1 | 18.0 | +43% | 1.0 | +25% |
| [The Guild](/factions/the-guild/) | 2 | 11.7 | -7% | 0.974 | +22% |
| [The Doctors](/factions/the-doctors/) | 7 | 12.6 | +0% | 0.968 | +21% |
| [Rashaar](/factions/rashaar/) | 9 | 14.9 | +18% | 0.812 | +2% |
| [Patricians](/factions/patricians/) | 1 | 8.8 | -30% | 0.733 | -8% |
| [Strigoi](/factions/strigoi/) | 4 | 7.8 | -38% | 0.631 | -21% |
{: .sortable}

### Disruptor

Global Disruptor median ATK2K = **12.2**, median ATK2K/Ducat = **0.824**.

| Faction | n | median ATK2K | vs global (raw) | median ATK2K/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Guild](/factions/the-guild/) | 1 | 16.0 | +31% | 0.941 | +14% |
| [Strigoi](/factions/strigoi/) | 1 | 13.0 | +7% | 0.929 | +13% |
| [The Vatican](/factions/the-vatican/) | 3 | 11.5 | -6% | 0.719 | -13% |
| [The Doctors](/factions/the-doctors/) | 1 | 4.0 | -67% | 0.667 | -19% |
{: .sortable}

## Best models

Snapshots of the standout individual models, by raw survivability and by value (per-Ducat).

### Tankiest

The 15 highest-ATK2K models, with the statline driving it.

| Model | Faction | Role | LP | Dex | Prot | ATK2K | ATK2K/ducat |
|---|---|---|---|---|---|---|---|
| [Morgraur](/factions/rashaar/morgraur/) | [Rashaar](/factions/rashaar/) | Brawler | 45 | 3 | 5 | 55.2 | 0.81 |
| [Venetian Heavy Guard](/factions/patricians/venetian-heavy-guard/) | [Patricians](/factions/patricians/) | Brawler | 15 | 4 | 5 | 47.9 | 2.99 |
| [Brachyura](/factions/rashaar/brachyura/) | [Rashaar](/factions/rashaar/) | Brawler | 20 | 3 | 7 | 42.6 | 2.37 |
| [Emissary of Mother Hydra](/factions/rashaar/emissary-of-mother-hydra/) | [Rashaar](/factions/rashaar/) | Canal Fighter | 30 | 3 | 5 | 36.8 | 0.72 |
| [Sepulchral Vanguard](/factions/the-vatican/sepulchral-vanguard/) | [The Vatican](/factions/the-vatican/) | Tank | 13 | 3 | 5 | 33.6 | 2.24 |
| [Seraph](/factions/the-vatican/seraph/) | [The Vatican](/factions/the-vatican/) | Disruptor | 15 | 4 | 6 | 29.6 | 1.74 |
| [Knight of the Holy Sepulchre](/factions/the-vatican/knight-of-the-holy-sepulchre/) | [The Vatican](/factions/the-vatican/) | Brawler | 18 | 3 | 6 | 28.8 | 1.69 |
| [Gethsemane](/factions/the-vatican/gethsemane/) | [The Vatican](/factions/the-vatican/) | Brawler | 28 | 4 | 0 | 26.3 | 0.71 |
| [Warden](/factions/the-doctors/warden/) | [The Doctors](/factions/the-doctors/) | Tank | 13 | 4 | 4 | 25.3 | 1.95 |
| [Rhino](/factions/the-doctors/rhino/) | [The Doctors](/factions/the-doctors/) | Tank | 20 | 3 | 5 | 24.5 | 1.63 |
| [Avignon Guard](/factions/the-vatican/avignon-guard/) | [The Vatican](/factions/the-vatican/) | Brawler | 15 | 3 | 6 | 24.0 | 1.71 |
| [Doctor of Tides](/factions/the-doctors/doctor-of-tides/) | [The Doctors](/factions/the-doctors/) | Canal Fighter | 15 | 3 | 6 | 24.0 | 1.33 |
| [Knight of Malta](/factions/the-vatican/knight-of-malta/) | [The Vatican](/factions/the-vatican/) | Brawler | 12 | 4 | 4 | 23.3 | 1.66 |
| [Giurgiu Guard](/factions/strigoi/giurgiu-guard/) | [Strigoi](/factions/strigoi/) | Line Fighter | 12 | 4 | 4 | 23.3 | 1.79 |
| [Spatar](/factions/strigoi/spatar/) | [Strigoi](/factions/strigoi/) | Tank | 12 | 4 | 5 | 22.9 | 1.43 |
{: .sortable}

### Best value

The per-Ducat counterpart, most survivability per point spent.

| Model | Faction | Role | cost | ATK2K | ATK2K/ducat |
|---|---|---|---|---|---|
| [Venetian Heavy Guard](/factions/patricians/venetian-heavy-guard/) | [Patricians](/factions/patricians/) | Brawler | 16 | 47.9 | 2.99 |
| [Brachyura](/factions/rashaar/brachyura/) | [Rashaar](/factions/rashaar/) | Brawler | 18 | 42.6 | 2.37 |
| [Sepulchral Vanguard](/factions/the-vatican/sepulchral-vanguard/) | [The Vatican](/factions/the-vatican/) | Tank | 15 | 33.6 | 2.24 |
| [Warden](/factions/the-doctors/warden/) | [The Doctors](/factions/the-doctors/) | Tank | 13 | 25.3 | 1.95 |
| [Giurgiu Guard](/factions/strigoi/giurgiu-guard/) | [Strigoi](/factions/strigoi/) | Line Fighter | 13 | 23.3 | 1.79 |
| [Seraph](/factions/the-vatican/seraph/) | [The Vatican](/factions/the-vatican/) | Disruptor | 17 | 29.6 | 1.74 |
| [Avignon Guard](/factions/the-vatican/avignon-guard/) | [The Vatican](/factions/the-vatican/) | Brawler | 14 | 24.0 | 1.71 |
| [Knight of the Holy Sepulchre](/factions/the-vatican/knight-of-the-holy-sepulchre/) | [The Vatican](/factions/the-vatican/) | Brawler | 17 | 28.8 | 1.69 |
| [Knight of Malta](/factions/the-vatican/knight-of-malta/) | [The Vatican](/factions/the-vatican/) | Brawler | 14 | 23.3 | 1.66 |
| [Rhino](/factions/the-doctors/rhino/) | [The Doctors](/factions/the-doctors/) | Tank | 15 | 24.5 | 1.63 |
| [Spatar](/factions/strigoi/spatar/) | [Strigoi](/factions/strigoi/) | Tank | 16 | 22.9 | 1.43 |
| [Hippogryph](/factions/the-doctors/hippogryph/) | [The Doctors](/factions/the-doctors/) | Harasser | 7 | 9.8 | 1.4 |
| [Cult Enforcer](/factions/rashaar/cult-enforcer/) | [Rashaar](/factions/rashaar/) | Brawler | 14 | 19.5 | 1.39 |
| [City Guard](/factions/patricians/city-guard/) | [Patricians](/factions/patricians/) | Line Fighter | 10 | 13.7 | 1.37 |
| [Hired Muscle](/factions/patricians/hired-muscle/) | [Patricians](/factions/patricians/) | Brawler | 11 | 14.9 | 1.35 |
{: .sortable}
