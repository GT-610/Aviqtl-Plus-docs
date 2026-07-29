---
title: 制作第一个视频
description: 创建、编辑、保存、预览并导出一个小型 AviQtl-Plus 项目。
---

# 制作第一个视频

本教程会创建一个包含媒体、文本对象、简单动画和导出结果的小型项目。先走完整条工作流，再深入了解每个工具。

## 1. 创建项目

选择“新建项目”，使用以下入门设置：

| 设置 | 数值 |
| --- | --- |
| 宽度 | 1280 |
| 高度 | 720 |
| 帧率 | 30 fps |
| 音频采样率 | 48,000 Hz |

<ScreenshotPlaceholder
  src="/images/zh-CN/guide/first-video/project-settings.webp"
  alt="分辨率为 1280 × 720、帧率为 30 的项目设置"
  caption="较小的高清项目能够更快地完成首次预览和导出。"
  hint="截取项目设置窗口，显示宽度、高度、FPS 和采样率。"
/>

立即使用“项目另存为”保存项目。AviQtl-Plus 项目使用 `.aviqtl` 扩展名。

## 2. 添加媒体

将图片、视频或音频导入或拖入时间线。把第一个视觉片段放在第 `0` 帧和一个可见图层上。

<ScreenshotPlaceholder
  src="/images/zh-CN/guide/first-video/import-media.webp"
  alt="放在 AviQtl-Plus 时间线起点的媒体片段"
  caption="横向位置控制时间，纵向位置控制图层。"
  hint="截取位于第 0 帧的媒体片段，并显示播放头和图层标签。"
/>

## 3. 添加文本对象

从时间线打开对象目录，搜索“文本”，在媒体上方的图层创建文本对象。将内容改为“我的第一个 AviQtl 视频”等简短标题。

<ScreenshotPlaceholder
  src="/images/zh-CN/guide/first-video/text-object.webp"
  alt="文本对象设置以及预览中的标题"
  caption="生成式对象拥有自己的持续时间、图层、参数和效果。"
  hint="选择文本对象，同时显示内容字段和预览。"
/>

## 4. 创建运动

选择文本对象并找到变换参数。在片段开头附近添加一个位置关键帧，在稍后位置添加第二个关键帧，并修改第二个关键帧的 X 或 Y 数值。移动播放头观察中间运动。

## 5. 添加效果

为选中的文本或媒体片段打开效果目录，添加模糊、单色等简单效果，调整一个参数，并确认效果在堆栈中处于启用状态。

<ScreenshotPlaceholder
  src="/images/zh-CN/guide/first-video/effect-stack.webp"
  alt="选中片段的效果堆栈中包含一个已启用效果"
  caption="效果按照堆栈顺序计算，并随片段一同保存。"
  hint="截取效果列表和一个清晰可见的参数控件。"
/>

## 6. 预览并保存

文本框未获得焦点时，按空格键切换播放。定位到项目中的几个时间点，确认标题、效果和运动符合预期，然后再次保存。

## 7. 导出

打开“导出媒体”，选择输出路径和有效帧范围，然后开始导出。使用独立播放器打开结果，检查画面、动画、时长和音频。

至此你已经完成 AviQtl-Plus 的核心工作流。接下来可以阅读[时间线编辑](./timeline)和[效果与动画](./effects-animation)。
