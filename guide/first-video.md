---
title: Make your first video
description: Create, edit, save, preview, and export a small AviQtl-Plus project.
---

# Make your first video

This tutorial creates a short project with media, a text object, a simple
animation, and an exported result. It is intentionally small so you can learn
the complete workflow before exploring individual tools.

## 1. Create a project

Choose **New Project** and use these starter settings:

| Setting | Value |
| --- | --- |
| Width | 1280 |
| Height | 720 |
| Frame rate | 30 fps |
| Audio sample rate | 48,000 Hz |

<ScreenshotPlaceholder
  src="/images/en/guide/first-video/project-settings.webp"
  alt="Project settings for a 1280 by 720 project at 30 frames per second"
  caption="A small HD project keeps this first exercise quick to preview and export."
  hint="Capture the project settings window with width, height, FPS, and sample rate visible."
/>

Save the project immediately with **Save Project As**. AviQtl-Plus projects use
the `.aviqtl` extension.

## 2. Add media

Import or drag an image, video, or audio file into the timeline. Place the first
visual clip at frame `0` on a visible layer.

<ScreenshotPlaceholder
  src="/images/en/guide/first-video/import-media.webp"
  alt="A media clip placed at the start of the AviQtl-Plus timeline"
  caption="The horizontal position controls time; the vertical position controls the layer."
  hint="Capture one imported clip at frame 0 with the playhead and layer labels visible."
/>

## 3. Add a text object

Open the object catalog from the timeline, search for **Text**, and create a text
object on a layer above the media. Set its content to a short title such as
`My first AviQtl video`.

<ScreenshotPlaceholder
  src="/images/en/guide/first-video/text-object.webp"
  alt="Text object settings and the resulting title in the preview"
  caption="Generated objects have their own duration, layer, parameters, and effects."
  hint="Capture the text object selected, with its content field and preview visible."
/>

## 4. Create motion

Select the text object and find its transform parameters. Add one position
keyframe near the beginning and another later in the clip, then give the second
keyframe a different X or Y value. Move the playhead between them to see the
interpolated motion.

## 5. Add an effect

Open the effect catalog for the selected text or media clip. Add a simple effect
such as blur or monochrome, adjust one parameter, and confirm that the effect is
enabled in the stack.

<ScreenshotPlaceholder
  src="/images/en/guide/first-video/effect-stack.webp"
  alt="An enabled effect in the selected clip's effect stack"
  caption="Effects are evaluated in stack order and remain attached to the clip."
  hint="Capture the effect list and one visible parameter control."
/>

## 6. Preview and save

Press **Space** when a text field is not focused to toggle playback. Seek to a
few points in the project and confirm that the title, effect, and motion behave
as expected. Save again before exporting.

## 7. Export

Open **Export Media**, choose an output path and a valid frame range, then start
the export. Open the resulting file in a media player and verify the picture,
motion, duration, and audio.

You have now completed the core AviQtl-Plus workflow. Continue with
[Timeline editing](./timeline) and [Effects and animation](./effects-animation).
