---
title: Lumina-Agent
permalink: /en/project/lumina-agent.html
description: Champion solution for the Huawei HarmonyOS System Control Agent Competition.
---

<img class="project-hero" src="/img/lumina.png" alt="Lumina-Agent cover">

<span class="project-tag">Champion · Rank 1</span>

Lumina-Agent is a data-centric, memory-aware end-to-end voice-command system designed for a strict **5 GB NPU memory limit** and complex multi-turn interactions.

[GitHub](https://github.com/LYZ0306/Lumina-Agent){: .btn .btn--primary target="_blank" rel="noopener" }
[Presentation](https://github.com/LYZ0306/Lumina-Agent/blob/main/docs/Lumina-Agent_Final_Presentation.pdf){: .btn target="_blank" rel="noopener" }

## My contribution

I worked on system deployment and memory optimization, including context compression, training/inference precision alignment, and reliable execution on the constrained NPU environment.

## Highlights

- Flat-Direct single-pass agent architecture to reduce latency and cascading errors.
- Context compressed from roughly 20k to 5k tokens through semantic tool-description distillation.
- 6k-context training on an RTX 3090 with gradient checkpointing, full-linear LoRA, and BF16.
- A 20,000+ sample synthetic-data pipeline for multi-turn logic, concurrent commands, and anti-hallucination cases.

Final result: **Rank 1**, 100% on the local smoke test, and over 90% accuracy on complex logic cases.

[← Back to projects](/en/project.html)
