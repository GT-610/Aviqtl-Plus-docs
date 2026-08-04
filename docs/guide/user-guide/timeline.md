---
title: Timeline editing
description: Select, move, trim, split, layer, copy, and arrange clips precisely.
---

::: warning

This page is not finished yet.

:::

# Timeline editing

The timeline is where you decide **when** an item appears and **which layer** it
occupies. AviQtl-Plus combines AviUtl-style layered objects with common modern
editing commands.

## Selection and edit targets

Selection answers “what will be edited.” Pointer actions use the frame and layer
under the pointer. Keyboard and menu commands generally use the playhead and the
selected layer, while parameter animation uses the selected object and current
playhead frame.

## Core operations

- **Move:** drag a clip horizontally to change time or vertically to change its
  layer.
- **Trim:** change a clip edge to adjust its visible duration.
- **Split:** place the playhead inside a clip and use **Split Clip**.
- **Delete:** remove the selected clips.
- **Copy, cut, paste, duplicate:** reuse clips and their settings.
- **Nudge:** move selected clips by one frame for precise alignment.

<!-- Add screenshot: ![Several clips arranged across multiple AviQtl-Plus timeline layers](/images/en/guide/timeline/core-operations.webp) -->

Horizontal placement controls timing; higher layers can composite over lower layers.

## Layers

Layers determine stacking and organization. A visual item on an upper layer can
appear over an item below it. Layers can also be locked to prevent accidental
changes or hidden to simplify previewing.

## Playhead and skimming

The playhead is the authoritative frame for preview, splitting, and keyframe
work. Some pointer interactions may expose a temporary hover or skimmer target;
use the playhead when an operation must occur at an exact frame.

## Undo and redo

Timeline changes are undoable. When performing a complicated edit, make one
logical change at a time and check the result before continuing. Saving remains
important: undo history is not a backup strategy.
