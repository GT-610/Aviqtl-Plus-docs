---
title: 安装 AviQtl-Plus
description: 在 Windows、Linux 或 macOS 上下载并启动 AviQtl-Plus。
---

# 安装 AviQtl-Plus

## 下载发行版本

从 [AviQtl-Plus Releases 页面](https://github.com/GT-610/AviQtl-Plus/releases)下载与你的平台相符的构建。将压缩包完整解压到具有写入权限的目录，然后启动 AviQtl-Plus。

<ScreenshotPlaceholder
  src="/images/zh-CN/guide/installation/releases.webp"
  alt="GitHub 上的 AviQtl-Plus 发行文件列表"
  caption="选择与你的操作系统和处理器架构匹配的压缩包。"
  hint="截取发行文件列表，并让推荐下载项清晰可见。"
/>

## 平台说明

### Windows

建议使用较新的 64 位 Windows。如果系统显示安全提示，请先确认压缩包来自官方 Releases 页面，再决定是否允许运行。

### Linux

Linux 构建依赖较新的 Qt 6、FFmpeg、LuaJIT、Vulkan 实现、Carla 和 Clang/libc++。项目主要面向接近 Arch Linux 的新环境；较旧发行版建议通过 Distrobox 使用 Arch 容器。

解压后可能需要授予执行权限：

```bash
chmod +x AviQtl
./AviQtl
```

### macOS

从 Finder 打开应用包。如果 macOS 阻止首次启动，请在“系统设置 → 隐私与安全性”中检查应用来源，并仅在确认来自官方发行页面后允许启动。

## 首次启动检查

- 预览窗口正常打开，没有图形初始化错误。
- 可以通过菜单显示时间线和设置窗口。
- 可以从本地目录选择音频和视频文件。

如果无法启动，请阅读[故障排除](./troubleshooting)。需要编译应用的开发者请阅读[从源码构建](/zh-CN/developer/building)。
