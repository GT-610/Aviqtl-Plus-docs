---
title: Effects and objects
description: Understand the JSON, QML, and GLSL extension model.
---

# Effects and objects

AviQtl-Plus effects and generated objects are described by a package of
metadata, UI integration, and shader code. A typical implementation uses:

| File | Purpose |
| --- | --- |
| `*.json` | Identity, kind, defaults, parameters, and UI controls |
| `*.qml` | Connects application parameters to rendering components |
| `*.frag` or `*.comp` | Fragment or compute shader implementation |

## Choose an extension type

- Use an **effect** to process the visual result of an existing clip.
- Use an **object** to generate visual content such as text, shapes, or weather.
- Use a **transition** when the behavior is specifically about combining clips
  across an edit.

## Start from an example

The main repository contains focused examples and complete effect packages:

- [`examples/stylize_effect`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/stylize_effect)
- [`examples/compute_blur`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/compute_blur)
- [`examples/custom_object`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/custom_object)
- [`effect-packages`](https://github.com/GT-610/AviQtl-Plus/tree/main/effect-packages)

## Development checklist

- Give the package and each extension a stable unique ID.
- Declare parameter types and defaults explicitly.
- Keep QML parameter names aligned with JSON metadata and shader uniforms.
- Test missing or invalid optional resources.
- Verify the effect at multiple resolutions and frame positions.
- Include a README and representative preview image before distribution.

A complete schema reference will be migrated into this section as the public
effect API is stabilized.
