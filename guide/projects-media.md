---
title: Projects and media
description: Set up projects, organize source media, save safely, and relink missing files.
---

# Projects and media

## Project settings

Project width, height, frame rate, and audio sample rate define the editing and
export context. Choose them before detailed editing whenever possible. Changing
settings later can alter framing, timing, or output expectations.

## Project files and source media

An `.aviqtl` project stores editing decisions and references source media by
path. It does not automatically embed every source file. Keep media in a stable
project folder and avoid renaming or moving it during an edit.

```text
my-video/
├── project.aviqtl
├── video/
├── audio/
├── images/
└── exports/
```

## Save habits

- Save as soon as a project is created.
- Save before a large edit, package change, or export.
- Keep an additional copy before moving the project to another computer.
- Do not treat an exported video as a replacement for the project and sources.

## Missing media

A project can still open when referenced files are missing. AviQtl-Plus reports
the missing items and provides a management dialog where each item can be
replaced with a compatible file.

<ScreenshotPlaceholder
  src="/images/en/guide/projects-media/missing-media.webp"
  alt="Missing media notification and replacement controls"
  caption="Relink missing files, verify the timeline, and save the updated project."
  hint="Capture the non-blocking missing-media notice and the Manage action."
/>

After relinking, seek through every affected clip. A replacement file may have
a different duration, resolution, frame rate, or audio layout even when its file
type is compatible.
