---
title: 开发者文档
description: 构建、理解、扩展并参与 AviQtl-Plus 开发。
---

# 开发者文档

AviQtl-Plus 将 C++23 与 Qt 6 应用核心、Qt Quick 界面、QRhi 渲染、面向 ECS 的时间线数据、FFmpeg 媒体处理、LuaJIT 插件和 QML/GLSL 效果包组合在一起。

## 开始贡献

1. 阅读[从源码构建](./building)。
2. 阅读主仓库的[贡献指南](https://github.com/GT-610/AviQtl-Plus/blob/main/CONTRIBUTING.md)。
3. 修改前后运行相关自动化测试。
4. 行为或界面标签变化时同步更新用户文档。

## 扩展方向

- [效果与对象](./effects)：包 JSON 元数据、QML 集成和片段/计算着色器。
- [插件开发](./plugins)：LuaJIT 自动化、生命周期钩子、权限和包分发。
- 原生应用开发：主仓库中的 C++、Qt Quick、时间线服务、媒体解码、渲染、音频与测试。

## 产品目标与工作流

- [AviUtl 操作体验目标](./operability-targets)：指导开发的编辑模型兼容目标。
- [时间线编辑目标规则](./timeline-edit-targets)：时间线命令作用于何处。
- [发布检查清单](./release-checklist)：有效发布版本的要求。

用户工作流保留在[用户手册](/zh-CN/guide/start-here/)中，避免 API 和架构内容打断任务说明。
