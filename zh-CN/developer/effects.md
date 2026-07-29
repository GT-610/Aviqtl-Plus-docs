---
title: 效果与对象
description: 了解 JSON、QML 与 GLSL 扩展模型。
---

# 效果与对象

AviQtl-Plus 的效果和生成式对象由元数据、界面集成和着色器代码组成。典型实现包含：

| 文件 | 用途 |
| --- | --- |
| `*.json` | 标识、类型、默认值、参数和界面控件 |
| `*.qml` | 将应用参数连接到渲染组件 |
| `*.frag` 或 `*.comp` | 片段或计算着色器实现 |

## 选择扩展类型

- 使用**效果**处理已有片段的视觉结果。
- 使用**对象**生成文本、图形或天气等视觉内容。
- 行为专门用于组合剪辑点两侧内容时使用**转场**。

## 从示例开始

主仓库提供小型示例和完整效果包：

- [`examples/stylize_effect`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/stylize_effect)
- [`examples/compute_blur`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/compute_blur)
- [`examples/custom_object`](https://github.com/GT-610/AviQtl-Plus/tree/main/examples/custom_object)
- [`effect-packages`](https://github.com/GT-610/AviQtl-Plus/tree/main/effect-packages)

## 开发检查表

- 为包和每个扩展提供稳定、唯一的 ID。
- 显式声明参数类型和默认值。
- 保持 JSON 元数据、QML 参数名和着色器 uniform 一致。
- 测试可选资源缺失或无效的情况。
- 在不同分辨率和时间位置验证效果。
- 分发前添加 README 和代表性预览图。

公开效果 API 稳定后，完整 Schema 参考会迁移到本区域。
