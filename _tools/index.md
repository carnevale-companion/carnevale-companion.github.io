---
title: "Tools"
nav_order: 0
permalink: /tools/
toc:
  - title: Line of Sight
    anchor: line-of-sight
  - title: Range to a Lower Target
    anchor: range-to-a-lower-target
  - title: Jump
    anchor: jump
---

Interactive calculators for common in-game geometry questions. Each one mirrors the maths worked out in the Game Mechanics reference.

## Line of Sight

When a model stands on a roof and looks down, the roof edge creates a blind zone at ground level. This calculator tells you how far from the building wall a target must be before the elevated observer can see it. See [Height and Line of Sight](/mechanics/height-and-los/) for the full explanation.

{% include los-calculator.html %}

## Range to a Lower Target

Carnevale measures distances in 3D — the actual range to a lower target is the straight-line diagonal, not the horizontal gap. Enter the weapon's listed range and how far below the target is to find the maximum horizontal distance at which the weapon still reaches.

{% include range-calculator.html %}

## Jump

Can a model clear a gap and land on a raised surface? This calculator combines the diagonal distance to the edge, the base-size landing overhead, and the expected jump roll by DEX and Acrobatic. See [Distance and Jumps](/mechanics/distance-and-jumps/) for the full breakdown.

The landing overhead already credits the free 1" nudge: a model that lands only partly on the surface may be shifted up to 1" further along its jump line to reach full support, so only the base diameter beyond that first inch has to be cleared.

{% include jump-calculator.html %}
