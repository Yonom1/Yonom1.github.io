---
title: Lumina-Agent
permalink: /en/project/lumina-agent.html
description: Champion solution for the Huawei HarmonyOS System Control Agent Competition.
lang: en
translation_url: /project/lumina-agent.html
---

<span class="project-tag">Champion · Rank 1</span>

Lumina-Agent is a data-centric, memory-aware end-to-end voice-command system designed for a strict **5 GB NPU memory limit** and complex multi-turn interactions.

[GitHub](https://github.com/YuzeLv/Lumina-Agent){: .btn .btn--primary target="_blank" rel="noopener" }
[Presentation](https://github.com/YuzeLv/Lumina-Agent/blob/main/docs/Lumina-Agent_Final_Presentation.pdf){: .btn target="_blank" rel="noopener" }

<img class="project-hero" src="/img/optimized/lumina.webp" alt="Lumina-Agent cover" width="1134" height="639" loading="lazy" decoding="async">

## My contribution

I worked on system deployment and memory optimization, including context compression, training/inference precision alignment, and reliable execution on the constrained NPU environment.

## Team approach

- Flat-Direct single-pass agent architecture to reduce latency and cascading errors.
- Context compressed from roughly 20k to 5k tokens through semantic tool-description distillation.
- 6k-context training on an RTX 3090 with gradient checkpointing, full-linear LoRA, and BF16.
- A 20,000+ sample synthetic-data pipeline for multi-turn logic, concurrent commands, and anti-hallucination cases.

## Results

Final result: **Rank 1**. The project repository reports 100% on its local smoke test and over 90% on complex logic cases. Sample counts are not listed, so these figures describe the team's internal tests.

Team: Lv Yuze (architecture and algorithms), Shi Yixi (data engineering and anti-hallucination), and Liu Xiaorui (deployment and memory optimization).

[← Back to projects](/en/project.html)
