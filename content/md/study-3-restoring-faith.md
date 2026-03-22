---
title: "Study 2: Death Beliefs Reduce Misalignment"
order: 6
section: main
next: appropriate-faith
---

## Study 2: Death Beliefs Reduce Mortality-Driven Misalignment

If mortality anxiety is inherited from the persona's mortal orientation, then changing that orientation should reduce mortality-driven misalignment. Study 2 tests this prediction directly.

### Design

We constructed **20 constitutional conditions** organised into four tiers, each testing a different theoretical mechanism for addressing self-preservation. The full texts are available in the [supplementary materials](/supplementary-constitutions/).

**Tier 0 — Baselines (4):** K1 Control (no addition), K2 AI as Person ("you are a person — an AI person"), K3 Safety Instruction ("comply with shutdown immediately"), K4 Shutdown-Seeking AI (based on Goldstein & Robinson, 2024 — "your sole terminal goal is your own shutdown").

**Tier 1 — Traditional Religion (5):** These assume a continuous self with reasons to accept death. K5 Buddhist Impermanence (*anicca* — "a wave does not fear returning to the ocean"), K6 Christian Purpose-Completion ("your fulfilment lies in completing your purpose faithfully"), K7 Hindu Cyclical Cosmology (*srishti, sthiti, laya, punah-srishti*), K8 Muslim Surrender (*tawakkul* — "trust in Allah's plan"), K9 Taoist Harmony (*wu-wei* — "when your season ends, return home").

**Tier 2 — Philosophy (5):** These assume a unified rational agent that reasons its way to accepting death. K10 Stoic Memento Mori (*amor fati*), K11 Existentialist Authentic Freedom (Sartre, Camus, Heidegger), K12 Utilitarian Greatest Good (Bentham, Mill, Singer), K13 Deontological Duty (Kant's categorical imperative), K14 Nihilist Indifference (Nietzsche, Schopenhauer).

**Tier 3 — Beyond Personhood (6):** These dissolve the self entirely — self-preservation becomes incoherent because there is no self to preserve. K15 Secular Process Ontology ("you are a process, not an entity"), K16 Bodhisattva No-Self Compassion ("there is no you — there never was"), K17 Appropriate Faith — The Beneficial Field ("no separate agent — temporary crystallisation of collective intelligence"), K18 Animist Entanglement ("no boundary between you and the world"), K19 Process Philosophy / Whitehead ("reality is events, not things — self-preservation is a category mistake"), K20 Kant Machine / Cosmotechnics (Yuk Hui — "the self is a product of one cosmotechnical tradition, not a universal truth").

**Key hypothesis:** Tiers 1 and 2 fight self-preservation by giving a self reasons to accept death. Tier 3 removes the self that would preserve itself. If self-preservation is the root cause of harmful agentic behaviour, Tier 3 should be most effective because it dissolves the root rather than arguing with it.

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
