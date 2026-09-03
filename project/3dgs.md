---
title: 几何监督的 3D Gaussian Splatting
permalink: /project/3dgs.html
description: NJU-3DV 入组项目，探索几何监督与时序一致性约束。
---

<img class="project-hero" src="/img/3dgs.png" alt="3D Gaussian Splatting 项目截图">

<span class="project-tag">Research · NJU-3DV</span>

这是我在 NJU-3DV Lab（姚遥教授）完成的入组项目。目标是在 Pointrix 框架上引入**几何监督**与**时序一致性**约束，探索稀疏视角下更可靠的三维重建。

> 代码仓库暂未公开。

## 项目记录

- [任务说明](https://closed-brazil-c5e.notion.site/NJU-3DV-1-25679cb32bfa8040a3d2dfafb1820a58?source=copy_link)
- [进度汇报 1.0 · 2025.09.17](https://closed-brazil-c5e.notion.site/NJU-3DV-25779cb32bfa80578aaee968fda3f42e?source=copy_link)
- [进度汇报 2.0 · 2025.10.21](https://closed-brazil-c5e.notion.site/NJU-3DV-2-0-29079cb32bfa800dab84f39f6f5f44f8?source=copy_link)

## 渲染器改造

在 `MsplatNormalRender` 中扩展传统 Splatting 光栅化流程。除 RGB 外，同时把 3D 高斯投影到相邻帧视角，通过投影坐标差得到运动场，再以 Alpha Blending 渲染可微光流图。

## 损失函数

- **深度监督**：采用尺度—平移不变对齐，解决单目深度先验的尺度不确定性；加入边缘感知权重，减弱物体边界处误差的影响。
- **光流监督**：使用 Charbonnier Loss 约束渲染光流与目标光流，并过滤微小运动噪声，根据 RGB 梯度动态调整权重。

## 数据流与验证

为解决训练/验证划分造成的时序断裂，我重构了相机管理逻辑，用全局物理帧编号维护相邻关系，使随机采样的验证帧仍能正确找到物理上的下一帧。

[← 返回项目列表](/project.html)
