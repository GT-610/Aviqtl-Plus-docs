---
title: 从源码构建
description: 在 Linux、macOS 或 Windows 上配置并构建 AviQtl-Plus。
---

# 从源码构建

克隆应用仓库。只有需要在本地阅读或修改本站时，才需要同时获取文档 submodule：

```bash
git clone --recurse-submodules https://github.com/GT-610/AviQtl-Plus.git
cd AviQtl-Plus
```

只需要应用源码时，可以省略 `--recurse-submodules`。

## 自动构建

`BUILD.py` 会检测主机平台、准备依赖、配置项目并进行构建。通常使用：

```bash
python3 BUILD.py
```

常用平台模式包括：

```bash
# Linux 容器构建环境
python3 BUILD.py --arch

# macOS Xcode 生成器
python3 BUILD.py --xcode

# Windows MSYS2
python3 BUILD.py --msys2
```

MSVC 可用于开发，但需要 Visual Studio Build Tools、匹配的 Qt MSVC 安装和 vcpkg。当前参数请查看 `python3 BUILD.py --help`。

## Qt 版本兼容性

项目目前使用 Qt 私有模块处理 ZIP、QRhi 集成和着色器工具。构建时与运行时的 Qt 补丁版本必须一致；升级 Qt 包后需要重新构建。

## 测试与质量检查

从已配置的构建目录运行测试：

```bash
ctest --test-dir build --output-on-failure
```

仓库还提供 `check.py` 执行格式、静态分析和其他质量检查。工具被跳过意味着缺少检查覆盖，而不是检查成功。
