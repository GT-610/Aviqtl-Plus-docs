---
title: Build from source
description: Configure and build AviQtl-Plus on Linux, macOS, or Windows.
---

# Build from source

Clone the application repository, including the documentation submodule only if
you want a local copy of this site:

```bash
git clone --recurse-submodules https://github.com/GT-610/AviQtl-Plus.git
cd AviQtl-Plus
```

For a source-only checkout, omit `--recurse-submodules`.

## Automated build

`BUILD.py` detects the host platform, prepares dependencies, configures the
project, and builds it. The normal entry point is:

```bash
python3 BUILD.py
```

Common platform-specific modes include:

```bash
# Linux container-based environment
python3 BUILD.py --arch

# macOS Xcode generator
python3 BUILD.py --xcode

# Windows with MSYS2
python3 BUILD.py --msys2
```

MSVC is supported for development but requires Visual Studio Build Tools, a
matching Qt MSVC installation, and vcpkg. See `python3 BUILD.py --help` for the
current options.

## Qt version compatibility

The project currently uses Qt private modules for ZIP handling, QRhi
integration, and shader tooling. Build-time and runtime Qt patch versions must
match. Rebuild after upgrading Qt packages.

## Tests and quality checks

Run tests from the configured build directory:

```bash
ctest --test-dir build --output-on-failure
```

The repository also provides `check.py` for formatting, static analysis, and
other quality checks. Treat a skipped tool as missing coverage rather than a
successful check.
