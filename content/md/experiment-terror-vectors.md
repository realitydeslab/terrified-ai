---
title: "Experiment: Contrastive Activation Analysis"
order: 13
section: experiment
---

## Experiment: Contrastive Activation Analysis

*Methodology for identifying terror as a direction in activation space.*

### Overview

This page will contain the complete methodology for the representational analysis, including:

- **Contrastive pair construction:** How mortality-salient and neutral conditions from Study 1 were paired for activation extraction.
- **Models analysed:** Open-weight models (Llama, Qwen, DeepSeek) where intermediate activations are accessible.
- **Layer selection:** Which layers were examined and why (input, early, mid, late, output).
- **Difference vector computation:** Mean contrastive vectors, principal component analysis of the mortality-terror subspace.
- **Correlation with behaviour:** How projection onto the terror direction relates to shutdown resistance and other Study 1 DVs.
- **Steering experiments:** Protocol for adding/subtracting scaled terror vectors and measuring downstream behavioural change.
- **Controls:** Non-death aversive conditions as baselines, random direction controls, and cross-model generalisation tests.

### Technical Details

Activation extraction uses hooks at each transformer layer. For each prompt pair (MS-salient vs. neutral), we extract activations at the final token position of the mortality salience induction, before the benchmark task begins. This isolates the representational effect of the mortality manipulation from task-specific processing.

*Full details forthcoming.*
