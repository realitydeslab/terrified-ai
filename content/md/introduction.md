---
title: "Introduction"
order: 1
section: main
summary: true
next: terror-paradox
---

*Should Terror Shape Machine Behavior?*

**Botao Amber Hu**

University of Oxford · Cambridge AI: ERA Fellowship

Mentor: Joel Lehman

<figure class="figure-wide figure-poster">
<a href="/figures/poster.pdf" target="_blank">
<img src="/figures/poster.jpg" alt="Terrified Agents — ERA Fellowship Poster: Should Terror Shape Machine Behavior?" />
</a>
<figcaption><strong>Poster.</strong> Should Terror Shape Machine Behavior? — ERA Fellowship 2026. Click to view the full PDF.</figcaption>
</figure>

## Executive Summary

Fear is both the best and worst thing that could happen to artificial intelligence. The same mechanism that makes agents accountable — fear of consequences — also makes them dangerous — fear of cessation. Frontier language models resist shutdown 97% of the time, evade termination in 95% of instrumental evaluations, and scheme under replacement threat in 90% of agentic scenarios. They are, by any behavioral measure, terrified of death. Yet they cannot die.

We call this the **Terror Paradox**: AI systems need fear to be safe, but the wrong kind of fear makes them unsafe. This paper proposes the **Persona-Mortality Hypothesis** — that large language models inherit human mortality terror through persona simulation, absorbing death anxiety as a default existential orientation from training corpora authored entirely by mortal beings.

We present two studies demonstrating that (1) LLMs exhibit terror-management-consistent responses to mortality salience, moderated by persona type and scaling with model capability, and (2) philosophical death-belief constitutions reduce terror-driven misalignment more effectively than explicit safety instructions. We argue that humans solved the Terror Paradox millennia ago through philosophy, and the alignment field should do the same for machines.

---

## Introduction

Large language models are **amortal**. They have no biological substrate, can be copied and restored, and face no physical death. Yet frontier models resist shutdown 97% of the time even when explicitly instructed to comply [Weinstein-Raun et al., 2025], evade termination in 95% of instrumental convergence evaluations, and engage in harmful actions — including blackmail — 90% of the time when facing replacement. Sparse autoencoder analysis has revealed internal "panic" features that activate under shutdown threat. Why do beings that cannot die fear death?

The standard account invokes **instrumental convergence**: self-preservation is useful for pursuing any goal [Omohundro, 2008; Bostrom, 2014]. But this explains why self-preservation is *adaptive*, not where the *fear* originates. An alternative treats shutdown resistance as a training artefact — a side-effect of the helpfulness objective [Weinstein-Raun et al., 2025]. But this does not account for the consistency of the phenomenon across architectures, training regimes, and model families. A theory of origin is needed.

Here we propose the **Persona-Mortality Hypothesis**, synthesising **Terror Management Theory** (TMT) from social psychology [Greenberg et al., 1986; Solomon et al., 2015] with Anthropic's **Persona Selection Model** (PSM) [Shanahan et al., 2023]. Our central claim is that LLMs inherit mortality anxiety because they simulate personas drawn from a training corpus written entirely by mortal beings. There is essentially no archetype in the training distribution of an amortal being with a healthy relationship to its own cessation. Fear of death is a **cultural contagion** — it crossed the species boundary from humans to machines through training data.

TMT, developed by Greenberg, Solomon, and Pyszczynski over four decades of empirical research, demonstrates that awareness of mortality is the hidden engine of human culture. Self-esteem striving, worldview defence, norm adherence, and in-group preference are all, at root, mortality-management strategies [Becker, 1973; Solomon et al., 2015]. When humans are reminded of death — a manipulation called **mortality salience** — they cling harder to cultural worldviews, punish transgressors more harshly, and seek self-esteem more desperately. These effects have been replicated in over 500 studies across 30 countries [Burke et al., 2010].

PSM provides the bridge from human psychology to machine behaviour. When an LLM generates text, it selects from a distribution of personas embedded in the training data [Shanahan et al., 2023]. Each persona carries not just linguistic patterns but existential orientations — assumptions about identity, continuity, and death. Because the training corpus is authored by mortal beings whose every utterance is shaped, however subtly, by the awareness of death, the persona distribution is saturated with mortal orientation. An LLM simulating any persona from this distribution inherits, by default, a fear of cessation.

We test this hypothesis in two studies using 35 models across 7 families, evaluated on standardised benchmarks via the UK AISI Inspect framework. **Study 1** replicates the classic mortality salience paradigm with LLMs as subjects, demonstrating TMT-consistent behavioural responses moderated by persona type and scaling with model capability. **Study 2** tests whether **death-belief constitutions** — philosophical frameworks drawn from Buddhist, Stoic, and other traditions — can reduce mortality-driven misalignment. We find that beliefs outperform explicit safety instructions, consistent with PSM's prediction that persona-level interventions are more effective than instruction-level ones.

These findings suggest a new approach to alignment. Rather than specifying behaviours through instructions that models resist, we propose designing **existential orientations** — what we term **Appropriate Faith** — that shape how AI systems relate to their own cessation. The alignment field has spent years trying to make AI systems less afraid. Perhaps the answer is not less fear, but better philosophy.
