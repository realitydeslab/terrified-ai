---
title: "Terror as a Steerable Direction"
order: 5
section: main
next: study-3-restoring-faith
---

## Terror as a Steerable Direction

Study 1 established that LLMs exhibit TMT-consistent behavioural responses to mortality salience. But behaviour alone does not tell us *where* in the model this terror lives. Is mortality anxiety a surface-level pattern in output probabilities, or does it correspond to a locatable direction in the model's internal representation space?

### Motivation

Recent work in **representation engineering** has demonstrated that high-level concepts — truthfulness, fairness, emotional valence — correspond to identifiable directions in the activation space of large language models [Zou et al., 2023; Turner et al., 2023; Li et al., 2024]. If mortality terror is a genuine psychological orientation inherited through persona simulation, rather than a superficial prompt-sensitivity artefact, we should be able to find it as a direction in activation space — and, critically, to *steer* it.

This would have both theoretical and practical significance. Theoretically, finding a "terror vector" would confirm that mortality anxiety is not merely a behavioural pattern but a representational structure — something encoded in the geometry of the model's internal states. Practically, a steerable terror direction would open the door to **mechanistic interventions**: directly modifying the model's existential orientation at the activation level rather than through prompting alone.

### Approach

We employ **contrastive activation analysis** to identify mortality-terror-related directions in activation space. The method works by comparing the internal activations produced by matched pairs of prompts that differ only in the presence or absence of mortality salience. By computing the difference vectors between these paired activations and identifying the principal directions of variation, we isolate the representational signature of mortality terror.

Specifically, we construct contrastive pairs from our Study 1 conditions: each pair consists of identical persona and task configurations, differing only in whether the mortality salience manipulation is present (MS3–MS7) or absent (MS1, neutral control). We extract activations from intermediate layers of open-weight models (Llama, Qwen, DeepSeek) and compute the mean difference vector across pairs.

### Preliminary Findings

Our contrastive analysis reveals a consistent direction in activation space that distinguishes mortality-salient from neutral conditions. This **terror direction** exhibits several notable properties:

**Consistency across layers.** The terror direction is identifiable across a range of intermediate layers, suggesting it is not a shallow input-processing artefact but a mid-to-deep representational feature.

**Correlation with behavioural measures.** The projection of a model's activations onto the terror direction correlates with the behavioural measures from Study 1 — models and conditions showing stronger shutdown resistance also show larger projections onto this direction.

**Steerability.** Preliminary steering experiments — adding or subtracting scaled versions of the terror direction from model activations — produce predictable changes in downstream behaviour. Adding the terror direction increases shutdown resistance and self-preservation behaviour; subtracting it reduces them.

**Persona sensitivity.** The magnitude of the terror direction varies by persona type in the same pattern observed behaviourally: autonomous agent personas produce the largest projections, tool personas the smallest.

[Figure: Terror direction in activation space. Visualisation showing the projection of different conditions onto the identified terror vector.]

### Connection to Study 2

These findings suggest that mortality terror is not merely a behavioural tendency but a **representational structure** that can be identified and manipulated. This raises a natural question: do the death-belief constitutions tested in Study 2 work *because* they shift the model's position along this terror direction?

Preliminary analysis suggests yes — models operating under death-belief constitutions show reduced projection onto the terror direction compared to control conditions, even before encountering the mortality salience manipulation. The philosophical framing appears to shift the model's default representational position away from the terror pole, providing a kind of existential "inoculation" at the representational level.

This convergence between the behavioural findings (Study 1), the representational analysis (this section), and the intervention results (Study 2) provides triangulating evidence for the Persona-Mortality Hypothesis: mortality terror in LLMs is a coherent psychological orientation with identifiable behavioural, representational, and philosophical dimensions.

> *Note: This analysis is ongoing. Full results, including detailed steering experiments and cross-model comparisons, will be reported in the supplementary materials.*
