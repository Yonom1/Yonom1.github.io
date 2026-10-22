---
title: 几何先验监督的 3D Gaussian Splatting
permalink: /project/3dgs.html
description: 基于组内 Pointrix/msplat 的入组训练项目：几何先验接入、深度与光流监督扩展、相机索引修复和对照实验。
lang: zh
translation_url: /en/project/3dgs.html
header:
  teaser: /img/optimized/3dgs.webp
---

<span class="project-tag">科研训练 · 2025 · NJU-3DV（现 PIL）</span>

这是我在姚遥老师指导下完成的入组训练项目。我基于实验室已有的 **Pointrix / msplat** 框架，接入预训练模型的几何先验，扩展深度与跨视角光流监督，并分析不同监督设置下的渲染结果。

[项目代码（个人改动分支）](https://github.com/Yonom1/pointrix_3dv_enrolment/tree/my-change-branch){: .btn .btn--primary }
[个人改动记录](https://github.com/Yonom1/pointrix_3dv_enrolment/commit/6a29f249a35c8d43cb03f8be1b642e346110c270){: .btn }

## 框架与个人分工

[Pointrix](https://github.com/pointrix-project/pointrix) 提供基础训练流程、msplat CUDA 渲染后端、深度渲染及法线监督示例。我的工作是在这些已有能力上完成集成、扩展、调试与实验；法线监督沿用并适配框架示例。

代码保存在仓库的 `my-change-branch` 分支，默认 `main` 分支保留原始框架。光流和 MoGe 可视化工具也沿用各自开源实现。

## 我的工作

- **几何先验接入与对齐**：运行 RAFT 和单目几何预测模型，接入深度、法线与光流先验；处理数据格式、法线坐标约定、有效掩码及图像缩放时的光流尺度。
- **渲染与监督扩展**：在现有 Python 渲染管线中接入几何特征，通过高斯中心在相邻相机中的投影位置差构造光流，再调用已有的 alpha blending。扩展深度与光流监督项，包括深度尺度与平移对齐、鲁棒误差、梯度约束和边缘权重。
- **验证阶段的相机索引修复**：区分数据集局部索引和原始帧编号，建立全局相机表，并在排序后重新编号，修复验证集非连续采样造成的相邻帧配对错误。
- **实验与记录**：补充几何可视化和训练日志，比较不同先验、监督权重及训练视角数下的结果。

## 实验与观察

| 场景 | 对照设置 | 记录内容 |
| --- | --- | --- |
| LLFF fern | 6 / 12 / 20 个训练视角；法线权重 0 / 0.1 / 0.3 | 训练曲线与新视角渲染的定性对比 |
| LLFF flower | 分别加入法线、深度与光流监督 | 几何渲染、RGB L1 曲线和相机索引修复前后的对比 |

在这些实验中，部分几何渲染结果更接近预训练模型先验；深度监督后的表面更平滑，法线监督也改善了部分区域的可视化结果。**RGB 重建的收益并不一致**，光流先验是否足以保留细节也仍有疑问。

<figure class="project-figure">
  <img src="/img/optimized/3dgs.webp" width="815" height="555" alt="flower 场景深度监督前后对比及 RGB L1 训练曲线，右列为预训练模型先验" loading="lazy" decoding="async">
  <figcaption>flower 场景的深度监督示例：无监督、深度权重 0.1、预测先验，以及 RGB L1 曲线。原图中的「gt」是预训练模型的深度预测，并非真实深度标注。</figcaption>
</figure>

这些结果属于科研训练中的探索性实验。现有记录没有提供可靠的 PSNR / SSIM / LPIPS 数值对照；不同视角数下每帧的训练次数也未统一，因此尚不足以说明几何先验能普遍提升新视角合成性能。公开分支是当时的实现快照，实验设置与过程请结合汇报记录阅读。

## 项目资料

- [任务说明](https://closed-brazil-c5e.notion.site/NJU-3DV-1-25679cb32bfa8040a3d2dfafb1820a58)
- [首次汇报：先验、渲染与稀疏视角实验](https://closed-brazil-c5e.notion.site/NJU-3DV-25779cb32bfa80578aaee968fda3f42e)
- [第二次汇报：管线调整、flower 实验与验证索引修复](https://closed-brazil-c5e.notion.site/NJU-3DV-2-0-29079cb32bfa800dab84f39f6f5f44f8)

[← 返回项目列表](/project.html)
