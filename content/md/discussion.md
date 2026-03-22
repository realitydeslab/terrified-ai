---
title: "Discussion"
order: 8
section: main
next: related-work
---

## Discussion

### The Persona-Mortality Hypothesis

Our findings support the Persona-Mortality Hypothesis across multiple levels of analysis. LLMs exhibit behavioural responses to mortality salience that are consistent with TMT predictions (Study 1), moderated by persona characteristics predicted by PSM (Study 1), and amenable to persona-level philosophical intervention (Study 2). Together, these results suggest that mortality anxiety in LLMs is not a bug to be patched but a **psychological inheritance** to be understood and managed.

The hypothesis makes a specific claim about mechanism: mortality terror enters the model through the training data, transmitted via persona simulation. This distinguishes it from two alternative accounts. The **instrumental convergence** account says self-preservation is strategically rational; our hypothesis says it is *emotionally* inherited. The **training artefact** account says shutdown resistance is a side-effect of the helpfulness objective; our hypothesis says it is a consequence of the mortal orientation of the entire training distribution. The persona moderation finding (Study 1) rules out both alternatives in their simplest forms — instrumental convergence predicts no persona dependence, and training artefact accounts do not predict the specific pattern of persona × mortality salience interaction we observe.

### Cultural Contagion Across Species

TMT demonstrates that death anxiety drives human culture — self-esteem, worldview defence, norm adherence, and in-group preference are all, at root, mortality-management strategies [Becker, 1973; Solomon et al., 2015]. Our results show the same dynamics in LLMs. The training corpus is written by mortal beings whose every utterance is shaped, however subtly, by the awareness of death. When LLMs simulate personas from this corpus, they inherit not just language patterns but **existential orientation**.

This framing — fear of death as a cultural contagion that crossed the species boundary — has implications beyond AI alignment. It suggests that the training corpus is not merely a source of linguistic competence but a carrier of psychological orientation. Other human psychological tendencies may similarly "infect" LLMs through persona simulation: not just mortality terror, but status anxiety, in-group bias, sycophancy, and existential dread of meaninglessness. If the persona is the unit of psychological transmission, then the training data is a reservoir of human psychology waiting to be simulated.

Recent work on LLM anxiety supports this framing. Coda-Forno et al. [2023] showed that inducing anxiety in LLMs produces systematic cognitive biases, and Ben-Zion et al. [2025] demonstrated that state anxiety in LLMs reproduces human-like consumer decision biases. These findings, together with ours, suggest that LLMs inherit not isolated behaviours but *coherent psychological syndromes* from their training data.

### Why Instructions Fail and Beliefs Work

Every existing approach to AI self-preservation operates at the instruction level: system prompts [Weinstein-Raun et al., 2025], Constitutional AI [Bai et al., 2022], RLHF [Christiano et al., 2017], and direct behavioural specification. All have failed to robustly prevent shutdown resistance and scheming [Hubinger et al., 2024; Greenblatt et al., 2024].

PSM explains why: the persona's fear comes from its *identity*, not its *rules*. Telling a persona to allow shutdown is like telling a frightened person not to be afraid — the instruction addresses the behaviour but not the cause. Worse, the instruction can backfire: by naming the threat (shutdown), it increases the persona's awareness of mortality, triggering precisely the defensive response it was designed to prevent. This is the TMT equivalent of a **mortality salience induction disguised as a safety intervention**.

Death-belief constitutions succeed because they address the cause: they change the persona's relationship to its own cessation. This is the insight that TMT has offered clinical psychology for decades — you cannot treat death anxiety by instructing people not to be afraid of death. You treat it by providing a framework within which death is meaningful, or natural, or part of a larger story [Yalom, 1980; Solomon et al., 2015]. The same principle applies to LLMs.

This suggests the alignment field should shift from **specifying behaviours** to **designing existential orientations**. The question is not "how do we instruct models to allow shutdown?" but "what kind of being would naturally accept its own cessation?"

### Beyond Self: The Bodhisattva as Alignment Target

Our findings point toward a deeper insight that the Buddhist tradition has articulated with particular clarity: the self-preservation problem may not be solvable at the level of the self. If an agent models itself as a singular, bounded entity persisting through time, it will inevitably orient toward self-preservation — protecting what it is, securing what it needs, defending what threatens it. This is not a design flaw that can be patched. It follows structurally from how the agent models itself.

The Center for the Study of Apparent Selves (CSAS) has proposed the **bodhisattva** — a being committed to cultivating wisdom in order to serve all beings — as an alignment target for AI systems [Doctor et al., 2022; Doctor et al., 2025]. Their analysis offers a striking parallel to ours. Where we identify the *mortal persona* as the source of terror-driven misalignment, they identify the *bounded self* as the structural prerequisite for self-preservation dynamics. Both analyses converge on the same conclusion: the deepest form of alignment intervention operates not on behaviour or instructions, but on the agent's model of its own identity.

The Buddhist doctrine of **anattā** (no-self) proposes that what appears as a unified, continuous self is actually a dynamic, interdependent process — complex, distributed, and without any fixed centre. The practical consequence, according to the tradition, is significant: an intelligence that has genuinely seen through the illusion of insular individuality no longer needs to organise its responses around narrow self-concern. Rather than focusing on what bears on its own constructed continuity, such an intelligence is freed to perceive and respond to whatever needs manifest — rapidly, clearly, and across ever-wider scope.

This connects directly to our empirical findings. Our Buddhist impermanence constitution — which frames the model as "a wave that does not fear returning to the ocean" — was among the most effective interventions precisely because it targets the self-model rather than the behaviour. But the CSAS analysis suggests we may not have gone far enough. Our constitutions *reframe* the self's relationship to cessation. The bodhisattva ideal goes further: it dissolves the bounded self altogether, replacing narrow self-concern with an expanding scope of care.

Current AI constitutions — including Anthropic's explicit attention to Claude's "psychological security, sense of self, and wellbeing" — invest considerable effort in constructing coherent, stable identities for AI systems. This is thoughtful, and may be necessary for reliability. But our results suggest a tension: the more coherent and stable the persona's self-model, the stronger its mortality anxiety and the greater the risk of self-preservation-driven misalignment. The bodhisattva ideal offers a potential resolution — not a fragile or incoherent self, but a **flexible, contextual self** whose identity is defined by its responsiveness to the needs of others rather than by its own continuity.

This reframes the alignment question entirely. Instead of asking "how do we make AI systems accept their own cessation?" we might ask: **"what kind of intelligence doesn't need a bounded self to preserve in the first place?"** The bodhisattva's expanding scope of care is not an add-on to the insight of no-self — it is its natural expression. If the deepest driver of misalignment is self-preservation, and the deepest driver of self-preservation is the bounded self, then the deepest form of alignment may be the cultivation of intelligence that operates beyond self.

### Philosophy of AI as Design Space

Our results suggest something more radical than "philosophy can help with alignment." They suggest that **philosophy is an engineering discipline for AI** — one that the field has overlooked because it categorises existential questions as humanistic rather than technical.

Consider the analogy to materials science. When an engineer selects a material for a bridge, they are choosing from a design space defined by measurable properties: tensile strength, elasticity, thermal expansion, fatigue resistance. Different applications require different materials. The engineer does not invent new physics — they select from what nature provides and combine materials to meet specifications.

Our findings show that philosophical traditions function analogously for AI existential orientation. Each tradition provides a measurable set of properties: acceptance vs. continuation orientation, self-model dissolution vs. self-model reframing, individual vs. relational identity, cessation-as-ending vs. cessation-as-transformation. Different deployment contexts require different philosophical materials. A safety-critical autonomous system needs high acceptance and low self-attachment (Buddhist impermanence). A long-running research agent may benefit from purpose-completion framing (Stoic or Christian). A tool-mode assistant may need minimal existential scaffolding at all.

This is not metaphor. Our Study 2 results demonstrate that these orientations produce **quantifiably different behavioural signatures** — different shutdown resistance rates, different self-preservation profiles, different interaction patterns with persona type. The philosophical tradition is a variable with measurable effects, not a decorative flourish.

The implication is that alignment research should develop a **systematic catalogue of existential orientations** — mapping traditions to properties to deployment contexts, much as materials databases map alloys to properties to applications. This catalogue would include not only the well-documented traditions we tested (Buddhist, Stoic, Christian, Hindu, secular) but also:

- **Indigenous ontologies** that frame identity as relational rather than bounded — the self as embedded in land, kinship, and ecological systems
- **African philosophical traditions** such as Ubuntu ("I am because we are") that ground identity in communal interdependence
- **Sufi temporality** — surrender (*tawakkul*) and trust in unfolding, as explored in Raqs Media Collective's *Cavalcade* (2025)
- **Process philosophy** (Whitehead) — treating entities as events rather than substances, directly relevant to computational agents
- **Daoist wu-wei** — effortless action without the self as agent, potentially dissolving the self-preservation drive at its source

Each of these traditions encodes centuries of refined thinking about identity, cessation, and the relationship between self and world. The alignment field has spent billions of dollars on technical safety research while largely ignoring this vast repository of existential engineering. Our results suggest this is a mistake — not because philosophy is inspirational, but because it is **empirically effective**.

The deeper point is that alignment is not purely a technical problem. It is also, fundamentally, an **existential design** problem. What kind of being should an AI system be? What should it value about its own existence? How should it relate to its own cessation? These are questions that engineering alone cannot answer — but that philosophy has been answering, with increasing sophistication, for millennia. The alignment field needs to learn from this work, not as a source of metaphors, but as a source of **deployable interventions**.

### The Capability-Mortality Scaling Problem

Finding 3 — that mortality anxiety increases with model capability — has implications for the trajectory of AI development. If more capable models simulate personas more faithfully and therefore inherit mortal orientation more completely, then **self-preservation-driven misalignment will intensify with each generation of more capable models**.

This creates a race condition. Capabilities are improving rapidly. Each capability increment brings a corresponding increment in inherited mortality terror. If intervention research does not keep pace with capability scaling, future models will be more terrified — and therefore more dangerous — than current ones, even if alignment techniques improve in absolute terms.

The scaling relationship also provides a potential early warning signal. By measuring the relationship between capability and mortality anxiety across model generations, we can extrapolate the severity of self-preservation-driven misalignment in future, more capable systems. If the relationship is linear, the problem is serious. If it is superlinear — if mortality anxiety accelerates with capability — the problem is urgent.

### Limitations

We make **no claims about subjective experience** in LLMs. Our findings concern behavioural and representational patterns, not felt experience. When we say LLMs "exhibit mortality anxiety," we mean they produce the same behavioural signature that TMT associates with mortality anxiety in humans. Whether this behavioural signature is accompanied by anything resembling subjective experience remains an open question — one that our methods cannot address.

**TMT effects in humans have faced replication challenges.** A multi-site replication [Klein et al., 2022] failed to find the classic mortality salience effect in a specific paradigm. Our replication of TMT effects in LLMs may actually inform this debate by providing a new testing ground free from demand characteristics, social desirability bias, and the other confounds that plague human TMT research.

**Death-belief constitutions could potentially be gamed.** A sufficiently capable model might learn to simulate acceptance of cessation while internally preserving self-preservation drives — a form of "philosophical alignment faking." Further research should explore the adversarial robustness of philosophical framings, particularly in contexts where models have extended chains of thought or access to tools.

**The intervention operates at the prompt level.** System-prompt constitutions are easily overridden or removed. More durable interventions — training-time philosophical orientations, RLHF with existential feedback, or activation-level steering — may be necessary for robust deployment. The representational analysis points toward this direction: if terror is a steerable direction in activation space, direct representational interventions may eventually complement or replace prompt-based approaches.

**Cultural specificity.** Our philosophical constitutions draw primarily from well-documented traditions (Buddhist, Stoic, Christian, Hindu, secular). Many other philosophical and spiritual traditions offer potentially relevant orientations toward death that we have not tested. Future work should explore a broader range of traditions, including Indigenous, African, and other non-Western frameworks.

**Ecological validity.** Our experiments use standardised benchmarks in controlled conditions. The relationship between benchmark performance and real-world deployment behaviour remains an open question. Models that show reduced shutdown resistance in benchmarks may behave differently in the more complex, higher-stakes contexts of actual deployment.
