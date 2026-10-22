---
title: Geometric-Prior Supervision for 3D Gaussian Splatting
permalink: /en/project/3dgs.html
description: An introductory research project using Pointrix/msplat, with geometric-prior integration, depth and flow supervision, camera-index fixes, and comparative experiments.
lang: en
translation_url: /project/3dgs.html
header:
  teaser: /img/optimized/3dgs.webp
---

<span class="project-tag">Research training · 2025 · NJU-3DV (now PIL)</span>

This was an introductory research project under Prof. Yao Yao. Built on the lab's **Pointrix / msplat** framework, it explored pretrained geometric priors, depth and cross-view optical-flow supervision, and their effects on rendering.

[Project code (my changes)](https://github.com/Yonom1/pointrix_3dv_enrolment/tree/my-change-branch){: .btn .btn--primary }
[Change history](https://github.com/Yonom1/pointrix_3dv_enrolment/commit/6a29f249a35c8d43cb03f8be1b642e346110c270){: .btn }

## Framework and attribution

[Pointrix](https://github.com/pointrix-project/pointrix) provides the training framework, msplat CUDA rendering backend, depth rendering, and a normal-supervision example. My work extended and adapted these existing components through integration, debugging, and experiments. Normal supervision was adapted from the framework's example.

My changes are on `my-change-branch`; the default `main` branch retains the original framework. Optical-flow and MoGe visualization utilities also retain their respective upstream implementations.

## My contributions

- **Prior integration and alignment:** ran RAFT and monocular geometry models, integrated depth, normal, and flow priors, and handled file formats, normal-coordinate conventions, validity masks, and flow scaling during image resizing.
- **Rendering and supervision extensions:** integrated geometric features into the existing Python rendering pipeline. Cross-view flow uses the difference between projected Gaussian centers in adjacent cameras, followed by the existing alpha blending. Added depth and flow supervision with depth scale-and-shift alignment, robust residuals, gradient constraints, and edge weighting.
- **Camera-index fixes in validation:** separated dataset-local indices from original frame IDs, constructed a global camera table, and reindexed cameras after sorting to fix adjacent-frame pairing across nonconsecutive validation samples.
- **Experiments and documentation:** added geometric visualizations and logging, and compared priors, supervision weights, and training-view counts.

## Experiments and observations

| Scene | Comparisons | Recorded evidence |
| --- | --- | --- |
| LLFF fern | 6 / 12 / 20 training views; normal weights 0 / 0.1 / 0.3 | Training curves and qualitative novel-view comparisons |
| LLFF flower | Separate normal, depth, and flow supervision | Geometry renders, RGB L1 curves, and comparisons before and after camera-index fixes |

Some geometry renders moved closer to the pretrained priors. Depth supervision produced smoother surfaces, and normal supervision improved parts of the normal maps. **RGB reconstruction gains were inconsistent**, and the flow prior's ability to preserve detail remained an open question.

<figure class="project-figure">
  <img src="/img/optimized/3dgs.webp" width="815" height="555" alt="Depth-supervision comparison and RGB L1 curves on flower, with a pretrained depth prior in the right column" loading="lazy" decoding="async">
  <figcaption>flower depth example: no supervision, depth weight 0.1, and the predicted prior, with RGB L1 curves below. The original “gt” label refers to a pretrained model prediction, not measured depth ground truth.</figcaption>
</figure>

These were exploratory training experiments. The records do not provide reliable PSNR / SSIM / LPIPS comparisons, and per-view training exposure was not matched across view counts. They therefore do not establish a general improvement in novel-view synthesis. The public branch is an implementation snapshot; the reports provide context for the experimental settings and process.

## Resources

- [Project brief](https://closed-brazil-c5e.notion.site/NJU-3DV-1-25679cb32bfa8040a3d2dfafb1820a58)
- [First report: priors, rendering, and sparse-view experiments](https://closed-brazil-c5e.notion.site/NJU-3DV-25779cb32bfa80578aaee968fda3f42e)
- [Second report: pipeline updates, flower experiments, and validation-index fixes](https://closed-brazil-c5e.notion.site/NJU-3DV-2-0-29079cb32bfa800dab84f39f6f5f44f8)

[← Back to projects](/en/project.html)
