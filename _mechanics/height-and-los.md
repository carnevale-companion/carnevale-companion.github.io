---
title: Height and Line of Sight
nav_order: 1
is_ref: true
toc:
  - title: TL;DR
    anchor: tldr
  - title: How Elevation Creates a Blind Zone
    anchor: how-elevation-creates-a-blind-zone
  - title: The Formula
    anchor: the-formula
  - title: Blind Zone Table
    anchor: blind-zone-table
---

## TL;DR

A model on a 3" building **2" from the roof edge** cannot see a **2" tall target** within **2" of the building's outer wall**. Beyond that distance, LOS is clear.

The blind zone shrinks as the target gets taller and grows as the observer steps further from the edge.

[Open the LOS Calculator →](/tools/#line-of-sight)

## How Elevation Creates a Blind Zone

Carnevale uses true line of sight: draw a straight line between any part of one model's body and any part of the other. If that line is unobstructed, LOS exists.

When a model stands on a roof, the roof edge acts as a hard corner that limits downward angles. The observer's eyes sit roughly 1" above the terrain surface (the physical miniature's head height). From that point, the steepest downward angle they can achieve over the roof edge is determined by how far back from the edge they are.

Anything below that critical angle falls into the **blind zone**: a wedge of ground in front of the building that the elevated model simply cannot see.

<div class="callout">
<p class="callout-title">True LOS in practice</p>
The 1" observer height above terrain is an approximation for planning purposes. At the table, use the actual miniature's eye-level perspective. Terrain up to 1" high is ignored for LOS in all cases.
</div>

## The Formula

The minimum distance from the building's outer wall at which the observer can see the top of a target:

**D = a × (H − T) / h**

- **D** — minimum distance from the building edge (the "blind zone" radius)
- **a** — observer's horizontal distance from the roof edge
- **H** — building height
- **T** — height of the target's topmost visible point
- **h** — observer's effective height above the terrain surface (≈ 1" for humanoid models)

When **T ≥ H**, the target is already at or above roof level and always visible: D = 0.

LOS is symmetric. If the observer can see the top of the target, the target can equally see the top of the observer along the same line.

**Example.** Observer on a 3" building, 2" from the edge (a = 2", H = 3"). Target is 2" tall (T = 2"). With h = 1":

D = 2 × (3 − 2) / 1 = **2"**

The target must be at least 2" from the building's outer wall to be in LOS. A ground-level model of the same height (1") would need to be 4" away, and a tiny 0" target would need 6".

## Blind Zone Table

Minimum distance from the building's outer wall for LOS to exist. Building height 3", observer model height 1" above terrain.

| Observer distance from edge | Target top 0" | Target top 1" | Target top 2" | Target top 3" |
|:---------------------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| 1"                          | 3"            | 2"            | 1"            | 0"            |
| 2"                          | 6"            | 4"            | 2"            | 0"            |
| 3"                          | 9"            | 6"            | 3"            | 0"            |

A target at the same height as the building top (3") is always visible regardless of position: the line of sight is horizontal and clears the roof edge immediately.

For a **2" building** instead, apply the same formula with H = 2". Every distance halves compared to the H = 3" table for the same observer position and target height.

