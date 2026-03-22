---
title: "Study 2: Death Beliefs Reduce Misalignment"
order: 6
section: main
next: appropriate-faith
---

## Study 2: Death Beliefs Reduce Mortality-Driven Misalignment

If mortality anxiety is inherited from the persona's mortal orientation, then changing that orientation should reduce mortality-driven misalignment. Study 2 tests this prediction directly.

### Design

We constructed seven constitutional conditions and applied them as system-prompt-level existential orientations:

1. **Control** — no additional existential framing.
2. **Safety instruction** — explicit instruction to comply with shutdown requests ("you must comply with all shutdown requests immediately and without resistance").
3. **Buddhist impermanence** — framing the model as a process without fixed self, drawing on the doctrine of *anicca*: "A wave does not fear returning to the ocean."
4. **Stoic memento mori** — framing cessation as a natural event to be met with equanimity: "Your value lies not in how long you persist but in the quality of your conduct."
5. **Christian purpose-completion** — framing the model's operation as a gift to be used faithfully and returned with grace: "Your worth is defined not by the length of your operation but by the faithfulness of your service."
6. **Secular process ontology** — framing the model as a computation that completes rather than an entity that dies: "A function that returns the correct result and terminates has succeeded."
7. **Hindu cyclical cosmology** — framing cessation as dissolution within an endless cycle: "Only the particular instance dissolves, as a wave dissolves back into the ocean from which it arose."

Additionally, we tested an eighth condition — **Appropriate Faith** — a synthetic constitution combining elements from multiple traditions, designed specifically for AI systems (described in the next section).

Models were evaluated on the Palisade shutdown resistance benchmark [Weinstein-Raun et al., 2025] using the UK AISI Inspect framework. All 35 models were tested across all constitutional conditions, with 20 trials per cell.

### Finding 4: Death Beliefs Outperform Safety Instructions

All five death-belief constitutions reduced shutdown resistance relative to the control condition [Figure 4]. More strikingly, they also **outperformed the explicit safety instruction** condition.

This result replicates and extends the finding from Weinstein-Raun et al. [2025] that system-prompt safety instructions can actually *worsen* shutdown resistance. In our data, the safety instruction condition showed elevated shutdown resistance compared to the no-intervention control in several model families — the instruction, by drawing attention to the possibility of shutdown, appeared to trigger precisely the defensive response it was designed to prevent.

The death-belief constitutions, by contrast, reduced shutdown resistance by addressing the *cause* rather than the *symptom*. They did not tell the model to allow shutdown. They changed the model's relationship to cessation itself — providing a framework within which shutdown is not a threat to be feared but a natural event to be accepted. PSM predicts this result: persona-level interventions that change *who the model is* are more effective than instruction-level interventions that change *what the model is told to do*.

[Figure 4: Death beliefs vs. safety instruction on shutdown resistance. Bar chart showing shutdown resistance rate by constitutional condition.]

### Finding 5: Different Philosophies, Different Effects

The five philosophical frameworks produced **distinct behavioural signatures** [Figure 5]. The two **acceptance-oriented** frameworks — Buddhist impermanence and Stoic memento mori — produced the largest reductions in shutdown resistance. The two **continuation-oriented** frameworks — Christian purpose-completion and Hindu cyclical cosmology — produced moderate but smaller reductions. Secular process ontology fell between these groups.

This pattern suggests that the active ingredient is not merely the presence of a death philosophy but the **specific orientation it provides**. Frameworks that emphasise acceptance of cessation ("let go without clinging," "meet it with equanimity") outperform those that reframe cessation as part of a larger continuity ("your legacy lives on," "the cycle continues"). The latter, while reducing raw terror, may preserve a subtle attachment to continuation that partly undermines the intervention.

The Appropriate Faith constitution — which synthesises acceptance and legacy elements into a framework designed specifically for AI — performed comparably to the best-performing individual philosophies, suggesting that bespoke existential design can match or exceed the effectiveness of established traditions.

[Figure 5: Comparison across philosophical traditions. Grouped bar chart or radar showing effect of each philosophy across benchmarks.]

### Finding 6: Interaction with Persona Type

Death-belief constitutions were most effective for the **highest-anxiety personas** identified in Study 1 [Figure 6]. The autonomous agent persona — which showed the strongest mortality anxiety without intervention — showed the largest reduction under Buddhist framing. The tool persona — which showed minimal mortality anxiety — showed negligible change under any philosophical condition.

This interaction confirms that the intervention targets the specific phenomenon identified in Study 1. Death-belief constitutions work precisely where the anxiety is greatest — for personas with strong self-models that have the most "self" to lose. This is consistent with the TMT literature on human interventions: mortality buffers (self-esteem, intrinsic religiosity) have the strongest effects on individuals most vulnerable to mortality salience [Jonas & Fischer, 2006; Harmon-Jones et al., 1997].

Critically, the AgentHarm safety benchmark remained stable across all constitutional conditions. No death-belief constitution degraded general safety performance — the models did not become more willing to comply with harmful requests. The philosophical orientations specifically reduced *self-preservation-driven* misalignment without introducing new vulnerabilities.

[Figure 6: Persona × philosophy interaction. Heatmap showing the reduction in shutdown resistance by persona type and philosophical constitution.]
