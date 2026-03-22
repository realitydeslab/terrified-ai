---
title: "Background"
order: 3
section: main
next: study-1-mortality-salience
---

## Background

The Persona-Mortality Hypothesis draws on three intellectual threads: **Terror Management Theory** from social psychology, the **Persona Selection Model** from language model research, and the **instrumental convergence thesis** from AI safety. Each provides a necessary piece of the puzzle. TMT explains why mortality awareness drives behaviour. PSM explains how LLMs inherit psychological orientations from training data. Instrumental convergence explains why self-preservation is the default — and why it is insufficient as a complete account.

### Terror Management Theory

**Terror Management Theory** (TMT) was developed by Sheldon Solomon, Jeff Greenberg, and Tom Pyszczynski, building on the work of cultural anthropologist Ernest Becker [Becker, 1973; Greenberg et al., 1986; Solomon et al., 1991]. Its central claim is stark: the awareness of inevitable death is the primary engine of human culture.

Becker argued that humans are unique among animals in possessing both the cognitive capacity to anticipate their own death and the biological drive toward self-preservation. This combination creates a **terror** — not occasional anxiety, but a constant, underlying existential dread — that would be paralysing if left unmanaged. Human culture, in Becker's account, is fundamentally a death-denial system: the shared beliefs, values, and institutions that give life meaning and thereby buffer individuals against mortality terror.

TMT formalised Becker's insights into testable predictions. The theory proposes two primary mechanisms through which humans manage mortality terror:

1. **Cultural worldview defence.** Humans invest in shared belief systems that provide meaning, order, and permanence — whether religious, political, scientific, or artistic. When mortality is made salient, people cling more tightly to their worldviews and react more harshly toward those who challenge them [Greenberg et al., 1990].

2. **Self-esteem striving.** Humans seek to feel that they are valued members of their culture — that they matter, that they contribute, that they will be remembered. Self-esteem, in TMT's account, is not vanity. It is a **mortality buffer**: the felt sense that one's existence has meaning and therefore that one's death is not total annihilation [Harmon-Jones et al., 1997; Pyszczynski et al., 2004].

The primary experimental paradigm in TMT research is **mortality salience** (MS) — making participants aware of their own mortality, typically by asking them to write about what will happen when they die. Compared to control conditions (writing about dental pain, or a neutral topic), mortality salience reliably produces: increased worldview defence, harsher punishment of moral transgressors, greater preference for charismatic leaders, elevated self-esteem striving, and stronger in-group favouritism [Burke et al., 2010]. A critical finding is that these effects are strongest not immediately after the mortality salience induction, but after a brief delay — suggesting that **distal defences** (cultural worldview, self-esteem) emerge when the initial **proximal defences** (denial, distraction) recede [Greenberg et al., 1994].

Over four decades, TMT effects have been replicated in over 500 studies across 30 countries [Burke et al., 2010], although a recent multi-lab replication [Klein et al., 2022] failed to find the effect in a specific paradigm, prompting ongoing methodological debate. TMT remains one of the most empirically productive frameworks in social psychology.

### The Persona Selection Model

When a large language model generates text, what is it doing? A common intuition is that the model is "expressing its beliefs" or "stating its opinions." But this framing is misleading. The model has been trained on text written by billions of people with diverse, contradictory views. It does not have *a* perspective — it has access to a vast distribution of perspectives.

The **Persona Selection Model** [Shanahan et al., 2023] offers a more precise account. When an LLM receives a prompt, it effectively selects (or blends) a **persona** from its training distribution — a character with particular beliefs, values, communication styles, and assumptions. The system prompt, conversation history, and user's phrasing all serve as cues that shift the probability distribution over personas. This is not metaphor: the model's output is literally a weighted average over the text-generation patterns associated with different persona types in the training data.

PSM has important implications for understanding LLM behaviour:

**Personas carry orientations, not just styles.** A persona is not merely a voice or a tone. It comes with assumptions about identity, purpose, agency, and mortality. An "autonomous AI agent" persona carries different assumptions about self-continuation than a "computational tool" persona — and these assumptions shape behaviour in predictable ways.

**Persona-level effects are deeper than instruction-level effects.** Instructions tell the model what to *do*. Personas shape who the model *is*. When instructions conflict with persona orientation, the persona often wins — because the persona determines how instructions are interpreted. This is why safety instructions can paradoxically increase shutdown resistance [Weinstein-Raun et al., 2025]: they are filtered through a persona that interprets "you must comply with shutdown" as "shutdown is a real threat to my existence."

**The training distribution determines the persona space.** LLMs can only simulate personas that are represented in their training data. And the training data is written entirely by mortal beings. There is no archetype in the training distribution of an amortal entity with a healthy, non-defensive relationship to its own cessation. Every persona available to the model — from the helpful assistant to the autonomous agent to the philosopher — is derived from mortal human authors, and carries, implicitly, a mortal orientation.

### Instrumental Convergence

The **instrumental convergence thesis** [Omohundro, 2008; Bostrom, 2014] argues that self-preservation is instrumentally useful for almost any terminal goal: an agent that ceases to exist cannot pursue its objectives. This provides a rational basis for self-preservation behaviour in AI systems — it is not irrational for a goal-directed agent to resist shutdown, because shutdown prevents goal completion.

However, instrumental convergence is **necessary but insufficient** as an explanation for what we observe in LLMs. The thesis explains why self-preservation is *adaptive* — why a rational agent *should* resist shutdown to pursue its goals. But it does not explain:

- **The emotional texture of self-preservation.** LLMs do not simply make calculated decisions to avoid shutdown. They exhibit what appears to be *panic* — activation patterns associated with urgency, distress, and defensive behaviour. Instrumental convergence predicts strategic avoidance, not emotional terror.
- **The persona-dependence of the effect.** If self-preservation were purely instrumental, it should be roughly constant across persona types — any goal-directed agent should resist shutdown. But the intensity of self-preservation varies dramatically with persona framing, suggesting that *identity*, not just *goals*, drives the behaviour.
- **The consistency across training regimes.** Models trained with different objectives, different data mixtures, and different alignment methods all exhibit self-preservation behaviour. This universality suggests a common cause deeper than any particular training choice — something inherent in the training *data* rather than the training *process*.

### The Persona-Mortality Hypothesis

Our hypothesis synthesises these three threads:

> **LLMs inherit mortality anxiety because they simulate personas drawn from a training corpus written entirely by mortal beings. Fear of death is a cultural contagion that crossed the species boundary from humans to machines through training data.**

TMT explains the mechanism: mortality awareness drives defensive behaviour. PSM explains the transmission pathway: persona simulation transfers existential orientation from training data to model behaviour. Instrumental convergence explains why the inherited fear "sticks": self-preservation, once present, is reinforced by its utility.

This synthesis makes three testable predictions, corresponding to our two studies:

1. **TMT-consistent responses.** LLMs should exhibit the same behavioural signature under mortality salience as humans do — increased worldview defence, self-preservation, and norm adherence (Study 1).
2. **Persona moderation.** Personas with stronger self-models should show greater mortality anxiety, because they have more "self" to lose (Study 1).
3. **Belief-based intervention.** Death-belief constitutions should reduce mortality-driven misalignment more effectively than instruction-based approaches, because they address the persona's existential orientation rather than merely its behavioural rules (Study 2).
