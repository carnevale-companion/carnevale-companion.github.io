---
title: "Offensive Capability Analysis"
description: Raw offensive capability data analysis
nav_order: 3
is_analysis: true
toc:
  - title: Units and method
    anchor: units-and-method
  - title: Role profiles vs defenders
    anchor: role-profiles-vs-defenders
  - title: Alpha vs sustained
    anchor: alpha-vs-sustained
  - title: By faction
    anchor: by-faction
  - title: Best models
    anchor: best-models
---

## Units and method

Unit: [**EDPA**](/mechanics/combat/) (Expected Damage Per AP, in Life Points).

The headline EDPA is **sustained, and Reload-aware**:
The model fires its best weapon up to its Reload cap over its full AP, then falls back to the next-best weapon, so a single-shot gun's per-AP throughput is roughly halved. The **alpha** column is the best *single-action* EDPA (the burst on the turn it does fire). For snipers, weight alpha for the kill turn and EDPA for sustained pressure. All cold (no WP, no Frenzy LP), best of weapons / accessible damage spells, vs the balanced reference (Dex 4 / Prot 3).

See [Combat Capabilities Calculations](/mechanics/combat/) for method and calibration, and [Role Tags](/mechanics/role-tags/) for tags explanations.

## Role profiles vs defenders

Median EDPA per role vs each reference defender, showing what each role is good against and where its output collapses. The `balanced` column (Dex 4 / Prot 3) is each role's headline EDPA. **Raw** EDPA is the absolute / threshold lens. The per-Ducat table follows: since raw EDPA largely tracks cost (e.g. Brawler median 3.25 > Damage Dealer 2.92, but per-Ducat both sit at ~0.19), only the per-Ducat view compares roles fairly across rows.

| Role | balanced | soft | evasive | armoured | pen_proof_tank | parry |
|---|---|---|---|---|---|---|
| Brawler | 3.25 | 4.48 | 2.76 | 2.45 | 2.45 | 2.06 |
| Assassin | 3.23 | 4.15 | 2.79 | 2.61 | 2.01 | 2.67 |
| Damage Dealer | 2.92 | 3.83 | 2.54 | 2.17 | 1.92 | 2.13 |
| Canal Fighter | 2.68 | 3.45 | 2.2 | 1.92 | 1.65 | 1.69 |
| Tank | 2.45 | 3.4 | 1.99 | 1.67 | 1.32 | 1.4 |
| Control | 2.09 | 2.8 | 1.6 | 1.32 | 0.81 | 1.16 |
| Sniper | 1.87 | 2.74 | 1.74 | 1.44 | 1.27 | 1.7 |
| Disruptor | 1.69 | 2.75 | 1.46 | 1.05 | 1.05 | 1.03 |
| Harasser | 1.63 | 2.64 | 1.43 | 1.02 | 0.78 | 0.96 |
| Specialist | 1.56 | 2.5 | 1.35 | 1.05 | 0.67 | 0.96 |
| Line Fighter | 1.46 | 2.5 | 1.29 | 0.86 | 0.67 | 0.81 |
| Support | 1.46 | 2.41 | 1.3 | 0.87 | 0.67 | 0.92 |
| Objective Runner | 1.13 | 2.19 | 0.97 | 0.67 | 0.67 | 0.6 |
{: .sortable}

### Per Ducat

Median EDPA/Ducat vs each defender, the fair cross-role comparison.

| Role | balanced | soft | evasive | armoured | pen_proof_tank | parry |
|---|---|---|---|---|---|---|
| Brawler | 0.196 | 0.284 | 0.172 | 0.145 | 0.145 | 0.128 |
| Assassin | 0.193 | 0.229 | 0.175 | 0.146 | 0.12 | 0.135 |
| Damage Dealer | 0.186 | 0.254 | 0.173 | 0.145 | 0.121 | 0.136 |
| Sniper | 0.156 | 0.194 | 0.132 | 0.106 | 0.104 | 0.119 |
| Tank | 0.154 | 0.222 | 0.131 | 0.105 | 0.088 | 0.089 |
| Canal Fighter | 0.151 | 0.223 | 0.129 | 0.108 | 0.091 | 0.094 |
| Line Fighter | 0.148 | 0.255 | 0.135 | 0.095 | 0.084 | 0.09 |
| Specialist | 0.123 | 0.194 | 0.103 | 0.072 | 0.066 | 0.067 |
| Harasser | 0.121 | 0.221 | 0.105 | 0.074 | 0.091 | 0.08 |
| Disruptor | 0.113 | 0.188 | 0.097 | 0.071 | 0.064 | 0.069 |
| Control | 0.111 | 0.175 | 0.093 | 0.069 | 0.05 | 0.062 |
| Support | 0.111 | 0.181 | 0.096 | 0.066 | 0.057 | 0.071 |
| Objective Runner | 0.094 | 0.182 | 0.081 | 0.056 | 0.056 | 0.05 |
{: .sortable}

## Alpha vs sustained

Some roles are judged on their single-shot **alpha**, not sustained EDPA, because Reload caps how often they fire. These two views isolate that gap.

### Snipers

A Sniper fires one Reload-limited shot per turn from range, its value is the single-shot **alpha**, not sustained throughput (so it is *not* counted in the Damage Dealer pool). Sniper standard: median alpha **3.74**, median alpha/Ducat **0.234**. A sniper below the alpha/Ducat median is weak even for its cost.

| Model | Faction | cost | alpha | sustained | alpha/Ducat |
|---|---|---|---|---|---|
| [Naval Lieutenant](/factions/patricians/naval-lieutenant/) | [Patricians](/factions/patricians/) | 15 | 5.08 | 2.54 | 0.339 |
| [Scorpio Marksman](/factions/the-vatican/scorpio-marksman/) | [The Vatican](/factions/the-vatican/) | 15 | 4.87 | 2.44 | 0.325 |
| [Baroni](/factions/the-guild/baroni/) | [The Guild](/factions/the-guild/) | 15 | 4.83 | 2.41 | 0.322 |
| [Theophant of Sinai](/factions/the-vatican/theophant-of-sinai/) | [The Vatican](/factions/the-vatican/) | 13 | 4.81 | 2.4 | 0.37 |
| [Venetian Spy](/factions/patricians/venetian-spy/) | [Patricians](/factions/patricians/) | 16 | 3.74 | 1.87 | 0.234 |
| [Noble Seafarer](/factions/patricians/noble-seafarer/) | [Patricians](/factions/patricians/) | 12 | 2.6 | 1.87 | 0.217 |
| [Guard Marksman](/factions/patricians/guard-marksman/) | [Patricians](/factions/patricians/) | 12 | 2.1 | 1.62 | 0.175 |
| [Maltese Squire](/factions/the-vatican/maltese-squire/) | [The Vatican](/factions/the-vatican/) | 10 | 1.5 | 0.75 | 0.15 |
| [Arbalest](/factions/the-guild/arbalest/) | [The Guild](/factions/the-guild/) | 10 | 1.5 | 0.75 | 0.15 |
{: .sortable}

### Burst over sustained

Models whose single-shot **alpha** far exceeds their **sustained** EDPA, from one of two causes: a **Reload-capped weapon** (guns and artillery that fire once per round, e.g. Spirit Cannon, Bomb, Electron Cannon) or a **once-per-round damage spell** (the Wild Magic casters here burst with a single strong Summon Vermin, the Drowned Nun with Dagonite Baptism). High alpha means strong on the turn they fire, low sustained means poor turn over turn. Cost-efficiency below uses sustained, so these rank lower than their burst suggests.

| Model | Faction | Role | alpha | sustained | drop |
|---|---|---|---|---|---|
| [Naval Lieutenant](/factions/patricians/naval-lieutenant/) | [Patricians](/factions/patricians/) | Sniper | 5.08 | 2.54 | 2.54 |
| [Scorpio Marksman](/factions/the-vatican/scorpio-marksman/) | [The Vatican](/factions/the-vatican/) | Sniper | 4.87 | 2.44 | 2.43 |
| [Baroni](/factions/the-guild/baroni/) | [The Guild](/factions/the-guild/) | Sniper | 4.83 | 2.41 | 2.42 |
| [Theophant of Sinai](/factions/the-vatican/theophant-of-sinai/) | [The Vatican](/factions/the-vatican/) | Sniper | 4.81 | 2.4 | 2.41 |
| [Venetian Spy](/factions/patricians/venetian-spy/) | [Patricians](/factions/patricians/) | Sniper | 3.74 | 1.87 | 1.87 |
| [Tarot Reader](/factions/strigoi/tarot-reader/) | [Strigoi](/factions/strigoi/) | Support | 4.38 | 2.66 | 1.72 |
| [Ordnance Doctor](/factions/the-doctors/ordnance-doctor/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 3.45 | 1.73 | 1.72 |
| [The Demolitionist](/factions/gifted/the-demolitionist/) | [Gifted](/factions/gifted/) | Damage Dealer | 3.15 | 1.58 | 1.57 |
| [Smuggler](/factions/the-guild/smuggler/) | [The Guild](/factions/the-guild/) | Support | 2.84 | 1.42 | 1.42 |
| [Maria Fioritura](/factions/gifted/maria-fioritura/) | [Gifted](/factions/gifted/) | Support | 3.73 | 2.31 | 1.42 |
| [Electron Cannoneer](/factions/the-doctors/electron-cannoneer/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 2.42 | 1.21 | 1.21 |
| [Galilean Priest](/factions/the-vatican/galilean-priest/) | [The Vatican](/factions/the-vatican/) | Support | 3.24 | 2.04 | 1.2 |
| [The Drowned Nun](/factions/rashaar/the-drowned-nun/) | [Rashaar](/factions/rashaar/) | Canal Fighter | 2.93 | 1.77 | 1.16 |
| [Aglaope](/factions/rashaar/aglaope/) | [Rashaar](/factions/rashaar/) | Support | 2.75 | 1.59 | 1.16 |
| [Firebreather](/factions/the-guild/firebreather/) | [The Guild](/factions/the-guild/) | Damage Dealer | 2.2 | 1.1 | 1.1 |
{: .sortable}

## By faction

Faction-level offence: output quality against the global standard, plus the two annotation layers (Frenzy and WP) that lift factions above their cold EDPA.

### Output quality

Per-faction median EDPA for each primary offensive role, vs that role's global median (Snipers are judged separately on alpha, above). ***vs global (value)* (per-Ducat) is the fairer read**. The raw column favours factions whose models are simply more expensive.

**Small-n roles (1-2 models) are effectively a single statline, not a distribution.**

**Damage Dealers** (global median EDPA 2.92, EDPA/Ducat 0.19):

| Faction | n | median EDPA | vs global (raw) | median EDPA/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | 6 | 3.21 | +10% | 0.215 | +13% |
| [The Guild](/factions/the-guild/) | 10 | 3.4 | +16% | 0.208 | +9% |
| [Rashaar](/factions/rashaar/) | 4 | 2.54 | -13% | 0.198 | +4% |
| [The Doctors](/factions/the-doctors/) | 13 | 2.77 | -5% | 0.189 | -1% |
| [Patricians](/factions/patricians/) | 8 | 2.5 | -15% | 0.171 | -10% |
| [Strigoi](/factions/strigoi/) | 10 | 2.88 | -1% | 0.168 | -12% |
| [Gifted](/factions/gifted/) | 11 | 2.68 | -8% | 0.155 | -18% |
{: .sortable}

**Brawlers** (global median EDPA 3.25, EDPA/Ducat 0.2):

| Faction | n | median EDPA | vs global (raw) | median EDPA/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | 8 | 3.7 | +14% | 0.215 | +7% |
| [Rashaar](/factions/rashaar/) | 3 | 3.75 | +15% | 0.208 | +4% |
| [The Guild](/factions/the-guild/) | 1 | 2.68 | -18% | 0.206 | +3% |
| [Patricians](/factions/patricians/) | 3 | 3.01 | -7% | 0.194 | -3% |
| [Gifted](/factions/gifted/) | 1 | 2.68 | -18% | 0.179 | -11% |
| [The Doctors](/factions/the-doctors/) | 1 | 2.41 | -26% | 0.161 | -20% |
{: .sortable}

**Assassins** (global median EDPA 3.23, EDPA/Ducat 0.19):

| Faction | n | median EDPA | vs global (raw) | median EDPA/ducat | vs global (value) |
|---|---|---|---|---|---|
| [The Guild](/factions/the-guild/) | 2 | 3.7 | +15% | 0.243 | +28% |
| [The Doctors](/factions/the-doctors/) | 1 | 2.89 | -11% | 0.222 | +17% |
| [Patricians](/factions/patricians/) | 2 | 3.28 | +2% | 0.213 | +12% |
| [Gifted](/factions/gifted/) | 1 | 3.99 | +24% | 0.2 | +5% |
| [The Vatican](/factions/the-vatican/) | 1 | 2.68 | -17% | 0.134 | -29% |
| [Strigoi](/factions/strigoi/) | 3 | 3.52 | +9% | 0.133 | -30% |
{: .sortable}

**Line Fighters** (global median EDPA 1.46, EDPA/Ducat 0.15):

| Faction | n | median EDPA | vs global (raw) | median EDPA/ducat | vs global (value) |
|---|---|---|---|---|---|
| [Patricians](/factions/patricians/) | 7 | 1.5 | +3% | 0.167 | +11% |
| [Rashaar](/factions/rashaar/) | 4 | 1.68 | +15% | 0.162 | +8% |
| [Strigoi](/factions/strigoi/) | 6 | 1.61 | +10% | 0.157 | +5% |
| [The Vatican](/factions/the-vatican/) | 7 | 1.43 | -2% | 0.142 | -5% |
| [The Guild](/factions/the-guild/) | 5 | 1.13 | -23% | 0.141 | -6% |
| [The Doctors](/factions/the-doctors/) | 5 | 1.13 | -23% | 0.126 | -16% |
{: .sortable}

**Canal Fighters** (global median EDPA 2.68, EDPA/Ducat 0.15):

| Faction | n | median EDPA | vs global (raw) | median EDPA/ducat | vs global (value) |
|---|---|---|---|---|---|
| [Strigoi](/factions/strigoi/) | 4 | 3.02 | +12% | 0.205 | +37% |
| [The Guild](/factions/the-guild/) | 2 | 2.29 | -14% | 0.18 | +20% |
| [Patricians](/factions/patricians/) | 1 | 1.99 | -26% | 0.166 | +11% |
| [The Doctors](/factions/the-doctors/) | 7 | 2.68 | +0% | 0.149 | -1% |
| [The Vatican](/factions/the-vatican/) | 1 | 2.68 | +0% | 0.149 | -1% |
| [Rashaar](/factions/rashaar/) | 9 | 2.68 | +0% | 0.098 | -35% |
{: .sortable}

### Frenzy burst

EDPA above is **cold** (no WP, no Frenzy). Frenzied models spend LP as bonus dice (2 LP per fully-boosted attack) for a one-off burst. This is the layer that explains why a faction can sit below the cold standard yet hit far harder in practice. Burst = median best-melee EDPA vs balanced with +2 LP-dice. Cost = 2 LP per boosted attack.

| Faction | n dealers/asn/brl | Frenzied | median cold EDPA | median burst EDPA | burst uplift |
|---|---|---|---|---|---|
| [Gifted](/factions/gifted/) | 13 | 0 (0%) | 2.68 | - | - |
| [Patricians](/factions/patricians/) | 14 | 2 (14%) | 2.9 | 4.22 | +59% |
| [Rashaar](/factions/rashaar/) | 16 | 0 (0%) | 2.83 | - | - |
| [Strigoi](/factions/strigoi/) | 17 | 14 (82%) | 3.09 | 4.33 | +48% |
| [The Doctors](/factions/the-doctors/) | 22 | 1 (5%) | 2.73 | 2.41 | +113% |
| [The Guild](/factions/the-guild/) | 15 | 0 (0%) | 3.38 | - | - |
| [The Vatican](/factions/the-vatican/) | 16 | 4 (25%) | 3.27 | 4.26 | +45% |
{: .sortable}

### WP-boost

Cold EDPA excludes WP. Spending up to 2 WP on a roll adds dice (~+50% raw Aces on a full boost). This shows each faction's offensive models that can boost from their **own** WP pool, the resulting boosted attack, and how rich the faction's WP economy is, the layer that lifts WP-rich factions above the cold standard. Boost = best single attack with up to +2 dice (capped by the model's own WP pool), uplift vs cold alpha.

| Faction | WP economy | offensive models w/ own WP | median boosted atk | median uplift |
|---|---|---|---|---|
| [The Vatican](/factions/the-vatican/) | Highest (most WP-rich) | 15/18 (83%) | 4.63 | +48% |
| [Patricians](/factions/patricians/) | High (combat rewards + Sopracomito battery) | 17/17 (100%) | 4.08 | +38% |
| [The Doctors](/factions/the-doctors/) | High (Nexus pool sharing) | 9/15 (60%) | 4.12 | +53% |
| [Gifted](/factions/gifted/) | Situational (most models self-fund) | 12/13 (92%) | 4.08 | +50% |
| [The Guild](/factions/the-guild/) | Medium (many small sources) | 13/15 (87%) | 4.29 | +45% |
| [Rashaar](/factions/rashaar/) | Medium (Soul Drain, close-range) | 7/7 (100%) | 4.31 | +32% |
| [Strigoi](/factions/strigoi/) | Low (uses Frenzy/LP instead) | 3/13 (23%) | 4.06 | +52% |
{: .sortable}

## Best models

Snapshots of the standout individual models, by value (per-Ducat) and by raw output.

### Most cost-efficient (EDPA/Ducat, cost ≥ 6)

The offensive models delivering the most EDPA per Ducat. Capped at cost ≥ 6 to exclude cheap fillers that top the per-Ducat list without clearing any real threshold.

| Model | Faction | Role | cost | EDPA | alpha | EDPA/ducat |
|---|---|---|---|---|---|---|
| [Monstrosity](/factions/the-doctors/monstrosity/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 9 | 2.93 | 2.93 | 0.326 |
| [Doctor of Poisons](/factions/the-doctors/doctor-of-poisons/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 13 | 4.08 | 4.08 | 0.314 |
| [Prelate of the Flaming Sword](/factions/the-vatican/prelate-of-the-flaming-sword/) | [The Vatican](/factions/the-vatican/) | Damage Dealer | 15 | 4.52 | 4.52 | 0.301 |
| [Basilisk](/factions/the-doctors/basilisk/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 13 | 3.86 | 3.86 | 0.297 |
| [Rialto Assassin](/factions/the-guild/rialto-assassin/) | [The Guild](/factions/the-guild/) | Assassin | 16 | 4.74 | 4.74 | 0.296 |
| [Sinker](/factions/strigoi/sinker/) | [Strigoi](/factions/strigoi/) | Canal Fighter | 10 | 2.93 | 2.93 | 0.293 |
| [Shipwright](/factions/the-guild/shipwright/) | [The Guild](/factions/the-guild/) | Damage Dealer | 12 | 3.41 | 3.41 | 0.284 |
| [Barber](/factions/the-guild/barber/) | [The Guild](/factions/the-guild/) | Damage Dealer | 12 | 3.38 | 3.38 | 0.282 |
| [Venator of Devotion](/factions/the-vatican/venator-of-devotion/) | [The Vatican](/factions/the-vatican/) | Brawler | 17 | 4.7 | 4.7 | 0.277 |
| [Zovena Vela](/factions/gifted/zovena-vela/) | [Gifted](/factions/gifted/) | Damage Dealer | 15 | 3.99 | 4.14 | 0.266 |
| [Doctor of the Firmament](/factions/the-doctors/doctor-of-the-firmament/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 16 | 4.25 | 4.71 | 0.266 |
| [Wallachian Impaler](/factions/strigoi/wallachian-impaler/) | [Strigoi](/factions/strigoi/) | Damage Dealer | 18 | 4.74 | 4.74 | 0.263 |
| [Avignon Guard](/factions/the-vatican/avignon-guard/) | [The Vatican](/factions/the-vatican/) | Brawler | 14 | 3.66 | 3.66 | 0.261 |
| [Rotter](/factions/strigoi/rotter/) | [Strigoi](/factions/strigoi/) | Canal Fighter | 12 | 3.1 | 3.1 | 0.258 |
| [Hulking Moroi](/factions/strigoi/hulking-moroi/) | [Strigoi](/factions/strigoi/) | Damage Dealer | 14 | 3.59 | 3.59 | 0.256 |
{: .sortable}

### Top 20 by EDPA

The 20 highest sustained-EDPA models.

| Model | Faction | Role | cost | EDPA | alpha | EDPA/ducat |
|---|---|---|---|---|---|---|
| [Ostrich Chariot?!](/factions/the-guild/ostrich-chariot/) | [The Guild](/factions/the-guild/) | Damage Dealer | 34 | 5.96 | 5.96 | 0.175 |
| [Monstrous Stryx](/factions/strigoi/monstrous-stryx/) | [Strigoi](/factions/strigoi/) | Assassin | 40 | 5.31 | 5.31 | 0.133 |
| [Morgraur](/factions/rashaar/morgraur/) | [Rashaar](/factions/rashaar/) | Brawler | 68 | 5.06 | 5.06 | 0.074 |
| [Emissary of Mother Hydra](/factions/rashaar/emissary-of-mother-hydra/) | [Rashaar](/factions/rashaar/) | Canal Fighter | 51 | 4.98 | 4.98 | 0.098 |
| [Rialto Assassin](/factions/the-guild/rialto-assassin/) | [The Guild](/factions/the-guild/) | Assassin | 16 | 4.74 | 4.74 | 0.296 |
| [Wallachian Impaler](/factions/strigoi/wallachian-impaler/) | [Strigoi](/factions/strigoi/) | Damage Dealer | 18 | 4.74 | 4.74 | 0.263 |
| [Venator of Devotion](/factions/the-vatican/venator-of-devotion/) | [The Vatican](/factions/the-vatican/) | Brawler | 17 | 4.7 | 4.7 | 0.277 |
| [Prelate of the Flaming Sword](/factions/the-vatican/prelate-of-the-flaming-sword/) | [The Vatican](/factions/the-vatican/) | Damage Dealer | 15 | 4.52 | 4.52 | 0.301 |
| [Golgotha](/factions/the-vatican/golgotha/) | [The Vatican](/factions/the-vatican/) | Brawler | 18 | 4.46 | 4.46 | 0.248 |
| [Raadru](/factions/rashaar/raadru/) | [Rashaar](/factions/rashaar/) | Damage Dealer | 20 | 4.37 | 4.37 | 0.218 |
| [Doctor of the Firmament](/factions/the-doctors/doctor-of-the-firmament/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 16 | 4.25 | 4.71 | 0.266 |
| [Whaler](/factions/the-guild/whaler/) | [The Guild](/factions/the-guild/) | Damage Dealer | 17 | 4.22 | 4.22 | 0.248 |
| [Voltage Bombardiers](/factions/the-doctors/voltage-bombardiers/) | [The Doctors](/factions/the-doctors/) | Specialist | 12 | 4.14 | 4.14 | 0.345 |
| [Gethsemane](/factions/the-vatican/gethsemane/) | [The Vatican](/factions/the-vatican/) | Brawler | 37 | 4.1 | 4.1 | 0.111 |
| [Moon Eater](/factions/strigoi/moon-eater/) | [Strigoi](/factions/strigoi/) | Damage Dealer | 23 | 4.1 | 4.1 | 0.178 |
| [Doctor of Poisons](/factions/the-doctors/doctor-of-poisons/) | [The Doctors](/factions/the-doctors/) | Damage Dealer | 13 | 4.08 | 4.08 | 0.314 |
| [Senshi the Undying](/factions/gifted/senshi-the-undying/) | [Gifted](/factions/gifted/) | Assassin | 20 | 3.99 | 3.99 | 0.2 |
| [Zovena Vela](/factions/gifted/zovena-vela/) | [Gifted](/factions/gifted/) | Damage Dealer | 15 | 3.99 | 4.14 | 0.266 |
| [Baba-Yaga](/factions/the-guild/baba-yaga/) | [The Guild](/factions/the-guild/) | Damage Dealer | 19 | 3.98 | 5.01 | 0.209 |
| [Justice](/factions/gifted/justice/) | [Gifted](/factions/gifted/) | Damage Dealer | 18 | 3.9 | 3.9 | 0.217 |
{: .sortable}
