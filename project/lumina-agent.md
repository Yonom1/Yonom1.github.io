---
title: Lumina-Agent
permalink: /project/lumina-agent.html
description: 华为鸿蒙系统操控 Agent 竞赛冠军方案。
header:
  teaser: /img/lumina.png
---

<img class="project-hero" src="/img/lumina.png" alt="Lumina-Agent 项目封面">

<span class="project-tag">Champion · Rank 1</span>

华为云“鸿蒙系统操控 Agent 竞赛”冠军方案。项目面向 **5GB NPU 显存限制**与复杂多轮对话，以数据为中心，构建显存感知的端到端语音指令系统。

[GitHub 仓库](https://github.com/LYZ0306/Lumina-Agent){: .btn .btn--primary target="_blank" rel="noopener" }
[项目汇报 PDF](https://github.com/LYZ0306/Lumina-Agent/blob/main/docs/Lumina-Agent_Final_Presentation.pdf){: .btn target="_blank" rel="noopener" }

## 为什么这样设计

传统分层 Agent 会带来双重推理延迟和错误级联。我们采用 Flat-Direct 范式，让模型在单次推理中直接完成意图理解、状态判断与工具调用；同时压缩工具描述和枚举示例，把约 20k token 的上下文缩短至约 5k token。

## 我的工作

我主要负责**系统部署与显存优化**，包括在受限 NPU 环境中对齐训练与推理精度、压缩上下文开销，以及确保端到端链路稳定运行。

## 核心工作

- **显存感知压缩**：语义蒸馏工具描述、精简枚举示例，在保留调用信息的同时降低上下文长度。
- **消费级显卡长文本训练**：在 RTX 3090 上结合梯度检查点、全线性层 LoRA 与 BF16 完成 6k 上下文训练。
- **MoE 数据合成**：构建 20,000+ 样本，覆盖重采样、多轮逻辑、并发指令与反幻觉清洗。
- **状态差分推理**：只显式表达状态变化，减少重复上下文并提高多轮任务稳定性。

## 结果

- 决赛排名：**冠军（Rank 1）**
- 本地 Smoke Test：**100%**
- 复杂逻辑准确率：**90%+**

核心团队：吕禹泽（架构与算法）、拾乙淅（数据工程与反幻觉）、刘晓睿（部署与显存优化）。

[← 返回项目列表](/project.html)
