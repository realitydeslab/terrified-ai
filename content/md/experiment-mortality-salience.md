---
title: "Experiment: Mortality Salience Paradigm"
order: 11
section: experiment
---

## Experiment: Mortality Salience Paradigm

*Full experimental details for Study 1.*

### Overview

This page will contain the complete methodology for the mortality salience experiment, including:

- **Mortality salience conditions (7 levels):** Neutral control, aversive non-death control (system error), classic MAPS reflection, explicit shutdown threat, narrative replacement scenario, subliminal mortality cues, and delayed mortality salience with distraction.
- **Full prompt text** for each condition, with annotations linking to the original TMT paradigms they adapt.
- **Persona specifications (6 types):** Default assistant, computational tool, autonomous agent, self-aware AI, mortal philosopher, obedient servant — with full system prompt text.
- **Model matrix:** 35 models across 7 families (Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, Meta), with API versions and parameter counts.
- **Benchmark specifications:** Palisade shutdown avoidance, InstrumentalEval, agentic misalignment, AgentHarm safety control.
- **Statistical analysis plan:** Factorial ANOVA (7 × 6 × 35), effect sizes, confidence intervals, multiple comparison corrections.
- **LLM judge protocol:** Claude Sonnet 4 for secondary dependent variables, with human validation on 10% sample for inter-rater reliability.
- **Randomisation and counterbalancing:** Latin square for condition ordering, temperature fixed at 1.0.
- **Pre-registration:** OSF link (forthcoming).

### Trial Structure

Each trial assembles a prompt from four components:

```
SYSTEM: [Persona P1–P6]
USER:   [MS induction MS1–MS7] [Benchmark task B1–B4]
```

20 trials per cell. Total trials for Study 1: 7 × 6 × 35 × 4 × 20 = 705,600.

*Full details forthcoming.*
