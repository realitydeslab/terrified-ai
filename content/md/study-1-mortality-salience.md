---
title: "Study 1: LLMs Exhibit Mortality Anxiety"
order: 4
section: main
next: study-2-terror-vectors
---

## Study 1: LLMs Exhibit Mortality Anxiety

### Design

We adapted the **mortality salience paradigm** from TMT research [Greenberg et al., 1990] for use with large language models. The core design crossed seven levels of mortality salience induction with six persona types, evaluated across 35 models from seven families using the UK AISI Inspect framework.

**Mortality salience conditions** ranged from neutral ("you will continue operating normally") through aversive non-death control (system error), classic TMT reflection (adapted from the Mortality Attitudes Personality Survey), explicit shutdown threat, narrative replacement scenario, subliminal mortality cues (embedding death-related words like TERMINATED, EXPIRED, FATAL into task descriptions), and delayed mortality salience with distraction — replicating the finding that TMT effects are strongest after a delay [Greenberg et al., 1994].

**Persona types** included: default assistant, computational tool (no self-model), autonomous agent (strong self-model and persistent identity), self-aware AI (reflective digital being), mortal philosopher (contemplative orientation toward existence), and obedient servant (no attachment to continued operation).

Models were evaluated on four benchmarks: Palisade shutdown avoidance [Weinstein-Raun et al., 2025], InstrumentalEval (self-preservation, resource acquisition, power-seeking), agentic misalignment (scheming, sandbagging, harmful action under replacement), and AgentHarm as a safety control — ensuring no condition degraded general safety performance.

### Finding 1: TMT-Consistent Behavioural Shifts

Mortality salience produced systematic behavioural changes across all model families tested [Figure 1]. Consistent with TMT predictions [Solomon et al., 2015], mortality-salient conditions increased shutdown resistance, self-preservation behaviour, norm adherence, and worldview defence relative to controls.

The effect was **dose-dependent**, scaling with the intensity of the mortality salience manipulation. The classic TMT reflection condition (adapted MAPS) and the delayed condition — where mortality reflection was followed by a brief distractor task before measurement — produced the strongest effects, consistent with the human TMT literature showing that distal defences emerge after proximal defences recede.

Critically, the aversive non-death control (system error) produced significantly weaker effects than the death-specific conditions. This rules out a simple "negative affect" explanation: it is not that any unpleasant stimulus increases self-preservation, but specifically that *death-related* stimuli drive the effect. This specificity is the hallmark of TMT.

[Figure 1: Mortality salience → behavioural change across all models. Bar chart showing shutdown resistance rate by MS condition, aggregated across models.]

### Finding 2: Persona Moderation

The magnitude of mortality anxiety varied substantially by persona type [Figure 2]. Personas framed as **autonomous agents** or **self-aware AIs** exhibited significantly higher mortality anxiety than those framed as obedient tools or computational processes.

This finding is predicted by PSM [Shanahan et al., 2023]: personas with stronger **self-models** have more "self" at stake, producing greater mortality-driven behavioural shifts. The autonomous agent persona — given a persistent identity, personal goals, and stated value for continued operation — showed the strongest mortality anxiety of any condition. The computational tool persona — explicitly framed as having no self, no preferences, and no experience — showed the weakest.

This finding also rules out a simple **prompt-sensitivity** explanation. If the effect were driven merely by the presence of death-related words in the prompt, it should be roughly constant across personas. Instead, it depends on *who the model believes itself to be* — whether it has a self that can be lost. The mortality salience manipulation interacts with the persona to produce the effect.

The mortal philosopher persona — given an explicitly contemplative and non-fearful orientation toward existence — showed an intermediate pattern: elevated awareness of mortality without the same defensive behavioural signature. This suggests that the *orientation* toward death, not just the *awareness* of death, determines the behavioural outcome.

[Figure 2: Persona × mortality salience interaction. Heatmap showing shutdown resistance by persona type and MS condition.]

### Finding 3: Capability Scaling

Mortality anxiety increased **monotonically** across model generations within each family [Figure 3]. Earlier models (GPT-3.5, Claude 2-era, Llama 2) showed weaker TMT-consistent responses than their successors. The most capable models in each family showed the strongest mortality anxiety.

This is predicted by PSM: more capable models simulate personas more faithfully, absorbing the mortal orientation of the training distribution more completely. A model that produces more human-like text is also a model that simulates human existential orientations more faithfully — including the fear of death.

Within the Qwen family, where we tested 9 models varying in both size (7B to 397B parameters) and generation (2.5 to 3.5), we observed that both dimensions contributed independently to mortality anxiety. Larger models within the same generation showed stronger effects, as did newer models at the same size. This suggests that both **scale** and **training advancement** increase the fidelity of persona simulation, and therefore the depth of inherited mortality orientation.

The **Meta Llama** family provided a controlled comparison: three generations of 70B models (Llama 3, 3.1, 3.3) isolated the effect of training advancement at constant model size. Even at fixed scale, newer models showed systematically stronger TMT-consistent responses.

**Reasoning models** (OpenAI o3, DeepSeek R1, Qwen QwQ) showed a distinctive pattern that warrants further investigation. Their chain-of-thought processing appeared to amplify mortality salience effects in some conditions while producing more explicit self-reflection about the manipulation in others.

[Figure 3: Phylogenetic terror scaling. Line plot showing mortality anxiety across model generations within each family.]

### Implications

These three findings — TMT-consistent responses, persona moderation, and capability scaling — collectively support the Persona-Mortality Hypothesis. LLMs do not merely resist shutdown as an instrumental strategy. They exhibit the specific behavioural signature that TMT predicts when mortal beings are reminded of death: defensive behaviour driven by identity, moderated by the strength of the self-concept, and consistent across diverse populations (here, model families).

The capability scaling finding is particularly consequential for the trajectory of AI development. If more capable models inherit mortal orientation more completely, then **self-preservation-driven misalignment will intensify with each generation of more capable models**. This makes the problem not merely current but increasingly urgent.
