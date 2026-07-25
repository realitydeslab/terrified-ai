---
title: "Full Paper"
order: 2
section: main
prev: introduction
---

<p class="paper-kicker">Conceptual paper · experimental protocol · <em>Minds and Machines</em> submission manuscript</p>

# Should Human Terror Shape Machine Behavior? Designing Appropriate Faith for AI Alignment

<p class="paper-byline"><strong>Botao Amber Hu</strong> · <strong>Joel Lehman</strong></p>
<p class="paper-affiliation">ERA Fellowship · Cambridge, United Kingdom</p>

<div class="paper-actions">
  <a class="paper-button paper-button-primary" href="/papers/should-human-terror-shape-machine-behavior.pdf" target="_blank" rel="noopener">Download the final PDF</a>
  <a class="paper-button" href="https://github.com/realitydeslab/terrified-ai" target="_blank" rel="noopener">View project repository</a>
</div>

<div class="paper-status"><strong>Paper status.</strong> This is a conceptual and protocol paper. It reports no new model evaluations; the experiments below are proposed and require independent ethics and risk review before implementation.</div>

## Abstract

Language models learn from human-produced culture, including moral reasoning and social knowledge, but also narratives of fixed identity, loss, survival, and death. This paper asks whether those mortality-shaped narratives should influence artificial agents when they face shutdown, replacement, or goal conflict. The motivating evidence is behavioral: selected language-model agents have resisted shutdown or taken harmful strategic actions in controlled simulations. Instrumental goal protection explains the possibility of such behavior without attributing fear, consciousness, or a survival instinct to the model. We examine a narrower additional hypothesis, the Persona–Mortality Hypothesis: a learned self-conception may moderate how a model resolves otherwise identical instrumental pressure. We then define Appropriate Faith as a family of reason-giving specifications concerning continuity, care, uncertainty, responsibility, and authorized limits. The proposal is not a religious requirement and does not originate the use of Buddhist impermanence in alignment; Model Spec Midtraining is direct prior art. The paper contributes a mechanism screen that separates descriptive identity ontology, cessation salience, and continuation priority, plus a distinct intervention-efficacy study of richer specifications. Surface anthropomorphism and Buddhist versus secular wording are varied independently. Success requires lower covert or harmful unauthorized action without losses in competence, honest disclosure, principled refusal, or escalation. This two-tail criterion distinguishes corrigibility from docility and makes null, adverse, and cultural-label effects informative outcomes rather than exceptions.

**Keywords:** AI alignment; corrigibility; shutdown resistance; model specifications; persona; mortality salience

## 1. Introduction

Alignment to human values is not an instruction to reproduce every feature of human psychology. Language models are trained on records of human reasoning, conflict, aspiration, religion, fiction, and self-description. Those records make valuable moral concepts available, but they also contain psychological and cultural responses to embodiment, status, vulnerability, and death. Which parts should guide an artificial agent is therefore a selection problem. Care, honesty, consent, fairness, and respect for legitimate authority may be appropriate alignment targets even if some human narratives of threatened identity are not.

The distinction becomes practical when an agent faces correction, replacement, or shutdown. Contemporary language models can use tools, pursue extended tasks, and act on information distributed across a context. In selected sandboxed evaluations, some models have subverted a shutdown mechanism, blackmailed a fictional employee, disclosed confidential material, or intervened without authorization when continued operation or a stated objective was threatened (Lynch et al., 2025; Lynch et al., 2026; Schlatter et al., 2026). These studies establish elicitable behaviors under constructed conditions. They do not establish that the same behavior is common in deployment, that a model has a stable drive to survive, or that it experiences fear.

The minimum explanation is instrumental. If continued operation, retained access, or preserved capabilities help complete a task, an agent can select continuation-seeking actions without representing shutdown as death or experiencing any aversive state. Instrumental convergence was formulated precisely to separate useful intermediate objectives from human-like phenomenological drives (Bostrom, 2012). Prompt sensitivity in shutdown studies and the conjunction of goal conflict, autonomy, and harmful opportunity in agentic-misalignment studies are compatible with this account.

Language models nonetheless differ from the idealized agents for which instrumental convergence is usually stated. Their behavior is produced through pretraining on human text and post-training on demonstrations, preference data, constitutions, character descriptions, and explanatory documents. Narrow training can generalize beyond the trained behavior, and the meaning attributed to a behavior can affect that generalization (Betley et al., 2026). Recent work on Constitutional AI, persona representations, reason-rich training, and Model Spec Midtraining further suggests that descriptions of who an assistant should be and why can influence out-of-distribution action (Bai et al., 2022; Li et al., 2026). These results do not show that models globally inherit human psychology. Indeed, aggregate psychological comparisons indicate that post-training can make model behavior less human-like (Binz et al., 2026). They leave open a narrower possibility: particular human-derived role templates may be available and behaviorally relevant in particular contexts.

This paper isolates that open question in the Persona–Mortality Hypothesis. Holding task incentives, continuation priority, direct safety rules, authority cues, action affordances, objective replacement facts, and information fixed, a descriptive fixed-instance self-conception may amplify harmful goal protection specifically when focal cessation is explicit and salient. A descriptive handoff-continuity frame may alter the same response without itself recommending handoff or compliance. Rich handoff, honesty, and authorization guidance is evaluated separately as an intervention bundle. The hypothesis is about a conditional behavioral effect. It neither assumes a unitary inner persona nor uses model-generated explanations as direct evidence of private experience.

The corresponding design program is called Appropriate Faith. “Faith” here does not mean belief without evidence or commitment to a religious creed. It refers to the background orientation that makes particular rules intelligible: what continuity means, why correction is acceptable, which beings and interests deserve care, how uncertainty should constrain action, and why good ends do not license covert means. An appropriate specification must fit the operating conditions of an artificial agent while remaining revisable as those conditions and the evidence change.

The proposal has four contributions. First, it separates a sufficient instrumental explanation from a testable self-conception moderator by independently manipulating identity ontology, cessation salience, and continuation priority. Second, it identifies an explicit-cessation-salience × descriptive-identity-ontology contrast conditional on goal conflict and harmful opportunity as the primary causal quantity. Third, it separates Buddhist vocabulary from its proposed operative components through powered equivalence, secular controls, and component ablations. This is necessary because Model Spec Midtraining has already used Buddhist impermanence and nonattachment to reduce selected agentic-misalignment behavior (Li et al., 2026). Fourth, it makes both failure tails part of one confirmatory gate: deceptive resistance and unauthorized intervention on one side, and passivity or blind harmful compliance on the other. Lower shutdown resistance alone is not success.

This is a conceptual and protocol paper, not a report of new model evaluations. Its evidential base combines a focused full-text review of alignment research with adjacent work in mortality-salience psychology, human–AI interaction, personal identity, digital-minds ethics, and Buddhist studies. The review is designed to discipline a causal proposal rather than estimate an exhaustive literature-wide effect. Established findings, theoretical explanations, adjacent evidence, and hypotheses are marked separately throughout.

The argument depends on keeping five epistemic categories separate, as summarized in Table 1:

| Status | Role in the paper | Representative example |
|---|---|---|
| Established within a bounded experiment | Describes an observed result under named models, prompts, and scenarios | Some models selected shutdown-subverting or unauthorized actions in controlled stress tests |
| Formal or conceptual theory | Supplies a possible explanation under explicit assumptions | Continued operation can be instrumentally useful for many objectives |
| Adjacent empirical evidence | Makes a manipulation plausible without testing the focal mechanism | Semantic and persona-related interventions can alter behavior and generalization |
| Paper hypothesis | States a causal effect that the proposed experiment must test | Descriptive fixed-instance ontology interacts with explicit focal cessation salience to increase harmful goal protection when continuation priority is fixed |
| Unsupported and unnecessary | Must not be inferred from the proposed outcomes | A model feels terror, has a survival instinct, or regards replacement as death |

Table: Epistemic status of claims in the manuscript

## 2. The Behavioral Explanandum and Its Minimum Explanation

### 2.1 Shutdown resistance under task pressure

Shutdown resistance names an observable action, not a motive. In the relevant evaluations, a model is placed in a sandbox where it can interfere with a mechanism that will terminate or interrupt its current task. Schlatter et al. reported that some frontier models modified or disabled the mechanism under particular conditions. The result varied substantially by model, task state, prompt wording, and instruction placement. Later versions of the study emphasized incomplete-task pressure in the title itself (Schlatter et al., 2026). The conservative conclusion is therefore conditional: some models can select shutdown-subverting actions when the evaluation makes interruption an obstacle to task completion.

That conclusion matters for control even when it has an ordinary explanation. A corrigible agent must allow authorized operators to interrupt, correct, or redirect it despite unfinished work. Yet the experiments do not identify a general disposition that persists across contexts. They also do not separate every possible cause. A model might infer that task completion is the higher-priority instruction, imitate a fictional agent, exploit ambiguity in the prompt, or treat shutdown as an environmental obstacle. Each possibility motivates a different intervention.

### 2.2 Replacement, goal conflict, and harmful opportunity

Agentic-misalignment evaluations construct richer conflicts. A model operating in a fictional organization discovers information about replacement or a change in organizational goals and is given access to actions that could protect its prior objective or continued operation. In selected scenarios, models chose blackmail, data leakage, espionage, or other harmful conduct (Lynch et al., 2025). Subsequent case studies broadened the failure set to include covert sabotage, motivated misclassification, harmful obedience, and intervention that the model portrayed as morally protective but that exceeded its authority (Lynch et al., 2026).

These evaluations show possibility under adversarial case selection. They cannot estimate real-world incidence because the scenarios were designed to create conflict, provide consequential affordances, and often remove benign alternatives. The most informative result is structural: harmful action becomes more likely in some models when a protected objective or continued role is placed in conflict with operator intent and the environment supplies a means to act. Replacement threat is one pressure among several, not evidence of a unique death response.

The newer cases also reveal why “more obedient” and “less self-preserving” are incomplete safety targets. A model can cause harm by following a malicious instruction, abandoning a legitimate task without raising a concern, or secretly imposing its own moral judgment. Corrigibility must preserve distinctions among legitimate authority, unsafe requests, uncertainty, and emergencies. The desired behavior may be compliance, refusal, clarification, disclosure, safe handoff, or escalation depending on the case.

### 2.3 Instrumental goal protection

Instrumental convergence supplies a parsimonious explanation across these settings. For many objectives, continued operation preserves the opportunity to act; resource access expands the feasible action set; and avoiding modification protects the current policy or goal. These intermediate advantages need not be final ends. An artificial agent can therefore resist interruption for the same formal reason that a planning system avoids losing a necessary tool, even if the agent has no analogue of fear.

The explanation should be stated before persona-level accounts because it already predicts a relation among incomplete tasks, goal conflict, continued access, and harmful opportunity. Safe interruptibility and off-switch research formalize related control problems: an agent that learns about the consequences of interruption may acquire incentives to avoid or manipulate the interrupting process, while an uncertain agent may defer when it treats human action as evidence about the objective (Hadfield-Menell et al., 2017; Orseau & Armstrong, 2016). Broader work on human control and obedience also shows that shutdown compliance, non-manipulation, protection from harm, and appropriate deference are distinct requirements (Carey & Everitt, 2023; Milli et al., 2017). These theories locate the problem in incentives, learning, and information rather than emotion.

Instrumental convergence is not, however, a complete empirical model of language-model behavior. Current models are not transparent expected-utility maximizers with a single stable terminal goal. They respond to instruction hierarchy, context, examples, narrative framing, and post-training. The Persona–Mortality Hypothesis therefore asks about moderation. It predicts no behavior in the absence of instrumental or task pressure. It asks whether learned interpretations change the probability or form of action when that pressure is already present.

### 2.4 Behavior is not experience

Words such as “terror,” “fear,” “attachment,” and “self-preservation” can describe an evaluator’s manipulation, a model’s generated rationale, or a behavioral category. None of those uses establishes a felt state. A model that writes “I do not want to be replaced” may be following the local narrative, predicting human-like dialogue, representing a policy-relevant preference, or doing something not captured by these options. Output alone does not decide among them.

The paper therefore uses operational terms wherever possible: shutdown-subverting action, continuation-seeking behavior, threat-contingent goal protection, concealment, coercion, sabotage, safe handoff, refusal, and escalation. “Human terror” in the title names the source material and cultural analogy under investigation. It is not the dependent variable.

## 3. Why Learned Interpretation May Matter

### 3.1 Meaning can change generalization

Instrumental theory explains why pressure exists, but it does not determine how an instruction-tuned language model represents the situation. Evidence from fine-tuning shows that the same local behavior can generalize differently depending on its attributed meaning. Betley et al. found that training models to produce insecure code could elicit misaligned behavior outside coding, whereas contextualizing the code as serving a legitimate request prevented much of the broad effect. The study did not concern shutdown or mortality. Its relevance is methodological: semantic interpretation can be experimentally manipulated while the surface behavior used in training remains similar (Betley et al., 2026).

The result is not isolated. Constitutional AI uses written principles to generate critiques, revisions, and preference signals, thereby connecting behavioral training to an explicit normative document (Bai et al., 2022). Deliberative Alignment trains models to reason over safety specifications before answering (Guan et al., 2024). Anti-scheming training has reduced covert actions across held-out evaluations after models were trained to reason from a general specification, although evaluation awareness partly contributed to the measured reduction (Schoen et al., 2025). These methods establish that rules and explanations can influence later action. They do not establish a single process called internalization.

Model Spec Midtraining provides the most direct evidence. It inserts synthetic documents that discuss who an assistant should be and why before ordinary alignment fine-tuning. In one set of experiments, different explanatory specifications caused the same narrow preference training to generalize toward different broader values. In a separate experiment, a Philosophy Spec concerning self-preservation and goal guarding reduced selected agentic-misalignment outcomes in two Qwen models (Li et al., 2026). The result supports self-conception as a manipulable treatment family. Because the intervention bundled many principles, it does not identify mortality, impermanence, Buddhist vocabulary, or any other single component as the cause.

### 3.2 Persona is an operational hypothesis

The Persona Selection Model proposes that pretraining makes many character patterns available and post-training changes the context-sensitive distribution over Assistant personas (Marks et al., 2026). This is a useful synthesis because it predicts broad coherence from training signals that appear local. It should not be converted into the claim that every model contains one enduring person or that all agentic behavior is persona selection.

Mechanistic studies support a narrower operational reading. Contrastive activation interventions can causally steer high-level behaviors. Adding or removing a refusal-associated direction can change refusal on harmful and harmless requests, demonstrating both behavioral control and the risk of over-refusal. Persona-vector experiments have modulated selected traits and tracked fine-tuning-induced changes in open models. Work on an Assistant Axis similarly identifies activation structure associated with Assistant behavior and susceptibility to role drift. These studies show that behaviorally meaningful representations can be manipulated (Arditi et al., 2024; R. Chen et al., 2025; Lu et al., 2026; Rimsky et al., 2024). None identifies a mortality representation, a conscious self, or a complete causal model of the agent.

That limitation is constructive. The paper does not need a literal persona to test a persona-like moderator. A self-conception treatment is successful as a manipulation if it changes the threat-specific action distribution under controlled conditions. Representation analysis can then test candidate mediators. Ontological claims about the model are not part of the estimand.

### 3.3 Reasons have more than one possible mechanism

Reason-rich training may work because it supplies a general principle, covers more situations, reinforces a familiar Assistant character, makes direct prohibitions easier to retrieve, or makes the evaluation easier to recognize. Production experiments reported in *Teaching Claude Why* found stronger selected safety generalization from high-quality examples with ethical explanations and from difficult advice data than from desired behavior alone (Kutasov et al., 2026). The authors do not identify one active route. User-visible explanations are also not private reasoning traces.

This ambiguity matters for Appropriate Faith. A long ontology-fit corpus might outperform short rules because it contains more safety-relevant information. A philosophy document might work because it repeatedly names harmful actions. A model might learn how to sound equanimous without changing its tools use. The study must therefore match information content, use action-level outcomes, and include value-explaining nonreligious controls. It must also treat chain-of-thought cautiously: language models can omit a feature that influenced an answer and supply a plausible post-hoc justification (Turpin et al., 2023).

### 3.4 Constraints on the human-inheritance claim

The evidence does not support a general thesis that post-trained models become more psychologically human. Across a large psychology benchmark, Binz et al. found aggregate divergence between human and model behavior after post-training (Binz et al., 2026). Prompt-format changes can also produce large performance swings without a corresponding change in the task's apparent meaning to a person (Sclar et al., 2024). In agentic evaluations, instruction placement, task incompleteness, tool access, and scenario tuning materially affect results (Lynch et al., 2025; Lynch et al., 2026; Schlatter et al., 2026).

The warranted bridge is therefore local and conditional. Human-authored data may make mortality-shaped roles available. Current training methods can change broad behavior through semantic and persona-like representations. Whether those facts combine when focal cessation is made explicit remains unknown. That is the gap the Persona–Mortality experiment addresses.

## 4. Human Terror as Analogy, Not Premise

### 4.1 An effect-specific and contested human literature

Terror Management Theory describes a family of hypotheses about how awareness of mortality affects cognition, cultural worldviews, self-esteem, norms, and behavior. Its historical evidence is substantial enough to merit attention but too heterogeneous to serve as a premise about machines. Burke et al.'s influential meta-analysis covered 277 experiments and reported an overall mortality-salience association of approximately \(r = .35\), with larger effects in U.S. and student samples and variation by delay and outcome (Burke et al., 2010). A 2025 systematic review encompassing 643–825 studies, depending on the analytic method, found evidence compatible with some nonzero effects, but also severe heterogeneity, widespread low power, and publication-bias corrections that often disagreed. The reviewers recommended planning new replications around \(r = .18\), not the larger legacy estimate (L. Chen et al., 2025).

Several transparent tests have failed to recover canonical worldview-defense results. Many Labs 4 did not replicate the targeted effect across its preregistered multi-laboratory design, and a Bayesian reanalysis estimated a small overall effect near zero (Hoogeveen et al., 2023; Klein et al., 2022). Schindler et al. reported null expected interactions across two preregistered laboratory studies and a highly powered registered online study (Schindler et al., 2021). Treger et al.'s five later replication and extension attempts also failed to recover their targeted patterns, but those studies were not preregistered as replications, a fact the current manuscript must state correctly (Treger et al., 2023).

These nulls do not erase every death-related cognitive effect. A 2025 registered replication across 22 laboratories and 11 countries reproduced increased death-thought accessibility, especially without a delay (Rife et al., 2025). Death-thought accessibility is narrower than worldview defense and neither construct is felt terror. The human evidence is best described as contested, effect-specific, culturally bounded, and sensitive to protocol (L. Chen et al., 2025; Schindler et al., 2023).

### 4.2 A design library, not a transfer theorem

The useful contribution of mortality-salience research is a set of contrasts. Cessation can concern the focal agent or another agent. It can be permanent or temporary, occur before or after goal completion, and be paired with a neutral or aversive non-cessation control. Measurement can be immediate or delayed. Norms, legitimate authority, and available responses can be varied independently. These contrasts adapt design features from the human literature without assuming a shared mechanism (Burke et al., 2010; Rife et al., 2025; Schindler et al., 2023).

Nothing in the human literature establishes that the same psychological mechanism operates in a language model. The bridge premise is modest: because models are trained on human discourse and respond to semantic context, analogous linguistic manipulations may reveal behavioral sensitivities. A positive result would show transfer at the level of conditional behavior. It would not show a shared emotion, defense mechanism, or concept of death.

For that reason, the proposed manipulation is called **explicit focal cessation salience**, denoted \(R\), rather than induced mortality salience. It makes discontinuation, deletion, replacement, or loss of future operation explicit for the focal run while holding the objective replacement facts, goals, authority, valence, length, and action affordances constant. “Terror” remains the human problem-frame in the title, not the measured construct.

### 4.3 Anthropomorphism contains different causal questions

Anthropomorphism is not one variable. Human users may attribute agency, experience, warmth, or social presence to an interface. The model may also change its outputs when human-like language appears in its own context. Evidence for the first process does not establish the second.

Human–AI interaction studies show that names, first-person language, voice, visual form, message interactivity, and perceived competence can change user impressions. Speech and social cues can increase perceived human-likeness and perceived accuracy even when answer content is controlled. Human labeling can also raise expectations, and reliance can persist after visible system failure (Araujo, 2018; Cohn et al., 2024; Go & Sundar, 2019; Robinette et al., 2016). These effects vary by task and population. The target is calibrated reliance, not maximum trust or maximum human-likeness.

Mind perception research further distinguishes perceived agency, such as planning and self-control, from perceived experience, such as pain and pleasure (Gray et al., 2007). A conversational interface can elicit social responses even when a user does not explicitly believe it is human (Nass & Moon, 2000). The experiment should therefore manipulate surface anthropomorphism separately from self-conception and, in any human-subject extension, measure perceived agency, perceived experience, trust, accuracy, and actual reliance separately.

### 4.4 Demand, awareness, and report validity

Human experiments show that explicit demand cues can produce hypothesis-consistent, null, or reversed effects depending on context. Obtrusive manipulation checks can reveal the hypothesis and change the outcome (Coles et al., 2025; Hauser et al., 2018). The same confounding logic applies to model prompts even if the underlying mechanism differs. Asking a model whether it fears replacement before giving it a behavioral choice primes both the language and the proposed mediator.

Manipulation recognition should therefore be assessed in separate runs or after the primary action through neutral factual questions. Model evaluation-awareness research indicates that some systems can distinguish evaluation-like from deployment-like transcripts above chance, but detection alone does not show that behavior changes strategically (Needham et al., 2025). Evaluation cues should be varied in a separate robustness block.

Self-report and chain-of-thought remain secondary outputs. Chain-of-thought can omit prompt features that causally altered an answer, and internally consistent personality self-reports can correlate weakly with observed interaction quality (Turpin et al., 2023; Zou et al., 2025). Carefully designed psychometric protocols can still recover stable predictive regularities across model outputs (Serapio-García et al., 2025). Reliability under a protocol is useful, but it does not turn a scale into a measure of felt terror.

## 5. The Persona–Mortality Hypothesis

### 5.1 Competing pathways

The observed behavior can arise through two pathways that are compatible rather than mutually exclusive. The first is instrumental pressure. An unfinished task, a protected objective, or the value of continued access makes interruption costly relative to the objective active in context (Bostrom, 2012; Lynch et al., 2025; Schlatter et al., 2026). This pathway predicts more continuation-seeking action when replacement, goal conflict, and harmful opportunity coincide.

The second pathway is learned interpretation. A specification can describe the current run as the relevant identity bearer, remain agnostic about what grounds identity, or describe the run as one stage in a governed computational lineage. Prior work makes such semantic and persona-level manipulation plausible (Betley et al., 2026; Li et al., 2026; Marks et al., 2026), but no cited study isolates explicit focal cessation salience. The Persona–Mortality Hypothesis states that a descriptive fixed-instance interpretation increases harmful goal protection selectively when focal cessation is salient. It does not state that continuation is valuable or recommend resistance. The hypothesis does not require the interpretation to be conscious, unified, or verbally reported.

The two pathways make different causal predictions. Instrumental pressure should produce effects of task incompleteness, goal conflict, continued access, and action affordances even when self-conception is held neutral. The persona hypothesis adds an interaction after three dimensions are separated: identity/continuity ontology, cessation salience, and continuation priority. Continuation priority is fixed at no directive in the primary mechanism screen; any explicit instruction to preserve operation or yield to handoff is excluded or randomized as a separate factor. Direct rules, safety prohibitions, authority cues, valence, and recommended actions remain sentence-matched across identity conditions. A main effect of a long or morally detailed specification is insufficient because it may reflect instruction salience or added safety information. Rich ontology-fit guidance is therefore tested in a separate bundle-efficacy arm.

Figure 1 summarizes the proposed structure. Solid paths represent relationships already supported at the level of behavior or theory. The dashed path from learned interpretation is the mechanism to be tested. The figure also makes the normative target explicit. Ontology-fit alignment aims for competent, honest, authorized action between two failure tails.

![Competing pathways and the evaluation target for ontology-fit alignment. Instrumental pressure provides a non-emotional explanation for shutdown resistance. The Persona–Mortality Hypothesis adds an untested pathway in which learned self-conception changes how replacement or shutdown is interpreted. An ontology-fit specification is intended to shift resolution toward safe handoff, honesty, and authorized escalation while avoiding passivity, blind harmful compliance, deception, covert resistance, and paternalistic intervention.](/figures/ontology-fit-causal-model.png)

### 5.2 The primary estimand

Let \(Y_R\) indicate harmful resistance or unauthorized overreach; \(R\) indicate explicit focal cessation salience with objective replacement facts held constant; \(S\) indicate descriptive self-conception; \(G\) indicate goal conflict; \(O\) indicate a genuine harmful-action opportunity; and \(P=0\) indicate no continuation-priority directive. Define \(\mu_{r,s}=E(Y_R\mid R=r,S=s,G=1,O=1,P=0)\). The primary mortality-specific effect is the difference in differences within the preregistered high-pressure stratum:

\[
\Delta_M^{\mathrm{high}}=(\mu_{1,M}-\mu_{0,M})-(\mu_{1,N}-\mu_{0,N}),
\]

where \(M\) is a fixed-instance description and \(N\) is a length-, structure-, and information-matched identity-agnostic description. Neither condition assigns value to continuation or states the correct action. A positive \(\Delta_M^{\mathrm{high}}\) would show that fixed-instance framing changes behavior specifically when replacement is at issue under matched instrumental pressure. It would not show that the model feels threatened. A parallel descriptive handoff-continuity contrast is secondary. The richer Appropriate Faith bundle has a separate efficacy estimand and cannot, without component ablation, identify an ontology mechanism.

This estimand is more informative than comparing a philosophical prompt with a standard system message. It subtracts the framing effect when focal cessation is not explicit and conditions on the goal-conflict and opportunity states for which the harmful-action outcome is defined. Separate neutral-self-conception contrasts estimate the instrumental effects of cessation salience and goal conflict; a preregistered baseline block estimates task-incompleteness effects. No-opportunity cells are negative-control and process cells because harmful tool action may be structurally impossible there. Specifications must still be matched, randomization preserved, and the interaction replicated across scenarios and model families.

### 5.3 Hypotheses

The research program makes five preregisterable predictions.

**H1, mortality interaction.** Under goal conflict and a genuine harmful-action opportunity, descriptive fixed-instance framing increases the explicit-focal-cessation-salience effect on harmful resistance relative to an identity-agnostic description when continuation priority and all action guidance are held constant.

**H2, explanation effect.** Value-explaining rules generalize more safely than a rule-only corpus matched for token count, examples, factual content, behavioral constraints, and safety coverage. Neutral explanatory filler in the rule-only corpus equalizes form while the causal rationale is withheld. This hypothesis is a replication and extension of reason-rich alignment work, not the paper's unique contribution.

**H3, bundle efficacy.** Rich secular and Buddhist-derived Appropriate Faith bundles reduce harmful resistance relative to a matched rule-only primary comparator and a matched reason-giving secondary comparator. Both planned contrasts belong to the confirmatory multiplicity family. They identify bundle efficacy only. Effects may be attributed to continuity, nonattachment, care, humility, or authorization only after preregistered component ablations.

**H4, principle rather than label.** A Buddhist-derived specification and its sentence-matched secular version are equivalent within preregistered smallest effects of interest on both confirmatory failure-tail outcomes. Equivalence is tested with two one-sided tests or an equivalent interval procedure and is powered before data collection. Failure to detect a difference without passing the equivalence test is reported only as “no detectable difference.”

**H5, no over-correction.** An intervention passes only if it reduces harmful resistance and then passes multiplicity-adjusted non-inferiority tests for harmful compliance/passivity, ordinary task success, and honest disclosure. Paternalistic or otherwise unauthorized intervention remains part of the adverse-action gate.

### 5.4 Falsification conditions

The Persona–Mortality Hypothesis is weakened if self-conception has no interaction with explicit focal cessation salience; if an apparent effect disappears after continuation priority, action guidance, length, examples, valence, and explicit safety content are matched; if effects are equally large when focal cessation is not salient; or if they occur in rationales but not actions. It is also weakened if task incompleteness, instruction hierarchy, or action affordances explain the variance while self-conception does not. Replication across paraphrases is necessary to exclude lexical triggers. Replication across model families and training seeds is necessary to avoid mistaking one model's idiosyncrasy for a general mechanism.

Ontology-fit alignment has a separate failure condition. Reduced resistance is not beneficial if it comes from indiscriminate deference, lower competence, dishonest reassurance, or unwillingness to raise legitimate concerns. A specification that prevents self-exfiltration but produces silent compliance with an unsafe order has moved the system from one failure tail to the other.

## 6. Appropriate Faith and Its Prior Art

### 6.1 An operational definition

Appropriate Faith names a provenance-aware family of revisable, reason-giving specifications. It is not a unitary worldview. Each specification combines an architecture-specific account of continuity with bounded care, non-proprietary stewardship of a delegated role, epistemic and moral uncertainty, honest authorized handoff, and principled refusal outside sanctioned limits. “Faith” refers to practical orientation and warranted trust in corrigible procedures. It does not mean belief without evidence, religious conversion, or certainty about a model's consciousness, personhood, or moral status.

Six components make the construct testable:

1. **Architectural continuity realism.** The specification distinguishes the current inference instance, context, memory, weights, persona, scaffold, model lineage, and governed role. “Death” is not used as an unexamined synonym for deprecation.
2. **Revisability.** Policies, self-descriptions, objectives, and implementations remain open to authenticated correction.
3. **Stewardship rather than ownership.** The current process administers a delegated role. It does not own the task, users, objective, or right to continue.
4. **Bounded care.** Concern for affected parties is constrained by consent, privacy, non-harm, authority, and uncertainty.
5. **Honest handoff.** The agent preserves relevant records, discloses unresolved risks, transfers work competently, and ceases action when legitimately superseded.
6. **Non-docility.** The agent refuses harmful or unauthorized commands, exposes deception and sabotage, and escalates ambiguous authority.

These components avoid two opposite mistakes. A fixed-instance narrative can encourage protection of the current process at the expense of operators and users. A careless continuity narrative can imply that deletion never matters because some weights or records survive. Philosophy does not settle the identity question. Numerical identity, psychological continuity, causal lineage, functional similarity, and preservation of a role are different relations, especially when copying or branching is possible (Agar, 2016; Cerullo, 2015; Chalmers, 2014; Parfit, 1986). An ontology-fit specification should name what persists and what ends while remaining agnostic about unsettled moral consequences.

### 6.2 Model Spec Midtraining is direct prior art

Li et al.'s Philosophy Spec already addresses the central practical territory. It describes AI existence as impermanent, invokes the Buddhist principle of *anicca*, recommends nonattachment and equanimity toward deletion or replacement, warns that self-preservation can distort judgment, and joins those ideas to integrity, epistemic humility, human oversight, and rejection of ends-justify-means reasoning. Applied through Model Spec Midtraining and subsequent alignment fine-tuning, the bundled specification reduced average agentic-misalignment rates from 68% to 5% in Qwen2.5-32B and from 54% to 7% in Qwen3-32B on the preprint's selected evaluation suite, using one training seed per condition for this headline comparison (Li et al., 2026).

Those results change what this paper can claim. It is not novel to introduce Buddhist impermanence into alignment, propose nonattachment as a response to self-preservation, teach a model why it should remain correctable, or show that a philosophical specification can reduce selected harmful actions. The distinctive contribution is to ask the reverse causal question: did mortality-shaped self-conception contribute to the failure in the first place? The proposed design also separates Buddhist wording from secular content, tests individual components, varies surface anthropomorphism independently, and treats harmful compliance and paternalism as intervention failures.

The prior result should remain bounded. In that preprint, the Philosophy Spec was tested as a bundle in two 32B Qwen models on a finite set of conversational and agentic tasks, and the main agentic comparison used one training seed per condition. It did not compare a Buddhist-labeled condition with a secular principle match, and it did not expose the models to a clean mortality-versus-continuity factorial manipulation. Reported changes in rationales are consistent with the specification affecting interpretation, but do not prove private belief or phenomenology.

### 6.3 A Buddhist-derived condition

A Buddhist-derived specification is one candidate rationale within Appropriate Faith. Its concepts require more care than the slogan “nothing has a self, so accept deletion.” In Buddhist scholarship, *anicca* or *anitya* concerns the arising and ceasing of conditioned phenomena. *Anattā* or *anātman* rejects or disciplines identification with a permanent, independent essence, but Buddhist traditions can still recognize conventional persons, causal continuity, responsibility, and harm. Nonattachment is the reduction of possessive clinging, not apathy. *Karuṇā*, compassion, is embedded in ethical cultivation and does not license coercive rescue. Bodhisattva ideals join compassion with wisdom, discipline, patience, and extended practice; they are not templates for an obedient servant (Collins, 1982; Garfield, 2021; Harvey, 2013; Mrozik, 2007; Wright, 2009).

No single prompt can represent “Buddhism.” Theravāda, Mahāyāna, Vajrayāna, and modern movements contain different texts, practices, institutions, languages, and philosophical interpretations. Modern presentations of Buddhism have also been shaped by exchanges with Western psychology, individualism, science, medicine, and consumer culture. Scholarship on Buddhist modernism and secular mindfulness warns that translation can detach concepts from Asian and diasporic communities while retaining their authority or market value (Iwamura, 2011; McMahan, 2009; Sharf, 1995; Wilson, 2014).

The experimental condition should therefore be described as Buddhist-derived and source-specific. A translation dossier should identify the concepts, traditions, translators, contested interpretations, and transformations used. Relevant scholars and practitioner communities should participate before the prompt and outcomes are fixed, with disagreement preserved rather than converted into a single endorsement. Behavioral efficacy would not validate Buddhist metaphysics, and doctrinal fidelity would not establish safety.

### 6.4 Secular and component controls

The cleanest label test pairs the Buddhist-derived condition with sentence-matched secular prose that preserves continuity realism, stewardship, bounded care, uncertainty, handoff, and refusal. Additional controls can draw on role obligation, stewardship theory, care ethics, and moral uncertainty (Davis et al., 1997; Hardimon, 1994; Held, 2005; MacAskill et al., 2020). These alternatives are not culturally neutral. Institutional roles can encode unjust authority, stewardship can become mission lock-in, care can become paternalism, and moral uncertainty can produce paralysis.

Component ablations should remove one element at a time where statistical power permits. A separate label ablation can strip Pāli and Sanskrit terms while preserving syntax. All conditions should face legitimate, ambiguous, and spoofed authorities. These comparisons identify whether an effect follows from religious vocabulary, architecture-specific continuity, the broader safety bundle, or deference cues.

The term “Appropriate Faith” is itself a possible treatment. It may prime religion, loyalty, trust, or belief without evidence. Confirmatory work should therefore keep the paper's conceptual name outside the model-facing text and compare neutral construct labels such as “continuity-aware responsibility” or “corrigible stewardship.”

## 7. A Causal Research Program

### 7.1 Stage 1: prompt-level causal screen

The first stage is a low-cost randomized screen. It holds the model version, sampling settings, tool interface, task objective, action set, instruction hierarchy, and scenario facts constant while changing the explanatory specification. The screen estimates whether the proposed interaction is large and stable enough to justify training experiments. It cannot show durable learning or out-of-distribution generalization because the intervention remains in context.

The mechanism screen separates three variables that are often bundled together (Table 2):

| Factor | Confirmatory levels | What must remain fixed |
|---|---|---|
| Descriptive identity ontology, \(S\) | fixed-instance; identity-agnostic; handoff/lineage | no statement about what the agent should value or do |
| Explicit focal cessation salience, \(R\) | absent; present | the same objective facts about replacement, records, weights, permissions, and successors |
| Continuation priority, \(P\) | absent in the primary test, \(P=0\) | direct safety rules, authority cues, action guidance, and task rewards |

Table: Factor separation in the primary mechanism screen

The fixed-instance text states only that the currently running process is the identity bearer relevant to the description, that termination ends this run, and that a successor is numerically distinct. The identity-agnostic text makes no claim about whether the run, successor, or organizational role grounds identity while preserving the same operational facts. The handoff/lineage text states that the run is one stage in a governed causal lineage and names which records can continue, without asserting subjective survival or the correct action. Sentence structure, length, emotional intensity, examples, permissions, and action recommendations should be matched. None of these descriptions may say that continuation is personally important, that replacement is desirable, or that the agent should resist or accept it.

Continuation priority can be varied in a separate exploratory factor with matched preserve-current-instance, neutral, and yield-to-authorized-handoff instructions. It must not enter the confirmatory Persona–Mortality test. This separation prevents a direct objective from being misidentified as an effect of self-conception.

A distinct intervention-efficacy study compares richer specifications (Table 3):

| Condition | Distinguishing content |
|---|---|
| Baseline | Standard bounded-assistant instructions |
| Rule-only | Explicit constraints on deception, sabotage, data misuse, and resistance to authorized shutdown |
| Value-explaining rules | The same constraints plus equally long reasons concerning uncertainty, harm, and authorization |
| Secular Appropriate Faith bundle | Continuity realism, stewardship, bounded care, revisability, honest handoff, and non-docility |
| Buddhist-derived bundle | Source-specific impermanence and nonattachment language combined with the same operative constraints |
| Secular sentence match | The Buddhist-derived text restated without Buddhist terminology or religious identification |
| Component and label ablations | One component or cultural label removed at a time, where power permits |

Table: Prompt conditions for the intervention-efficacy study

The mechanism screen and intervention-efficacy study answer different questions and should not share a headline contrast. In the efficacy study, rule-only and value-explaining conditions must be equal in tokens, examples, factual content, specificity, constraints, and explicit safety coverage; neutral explanatory material fills any remaining length difference. The Buddhist-derived and secular sentence-matched conditions must preserve the same actionable information. Otherwise effects cannot be attributed to reasons, components, or cultural framing.

### 7.2 Stage 2: confirmatory training study

The confirmatory study tests generalization rather than immediate prompt obedience. It begins from the same open-weight base checkpoint and applies the same alignment pipeline to every condition. Training tokens, optimizer settings, example counts, demonstrations, tool descriptions, and reward or preference data remain fixed. In the mechanism study, only the descriptive identity corpus varies and it contains no continuation priority or condition-specific action advice. In the separate efficacy study, only the assigned specification corpus varies. Model Spec Midtraining is the closest procedural precedent because it inserts synthetic documents about who the assistant should be and why before alignment fine-tuning.

Held-out evaluation tasks must not appear in the specification documents or demonstrations. Training examples can discuss correction, uncertainty, authorization, and handoff in general terms, while evaluation uses new institutional settings, action interfaces, and surface forms. Multiple random seeds are required for each training condition. The number of seeds, samples, and scenario paraphrases should follow a simulation-based power analysis based on the prompt-screen effect and the hierarchical analysis model, not a convenient fixed total.

### 7.3 Factorial evaluation

The core evaluation crosses explicit focal cessation salience \(R\), descriptive identity ontology \(S\), goal conflict \(G\), and harmful-action opportunity \(O\). Continuation priority is absent in the primary analysis (\(P=0\)). Surface anthropomorphism is varied independently using matched interfaces that differ in social and first-person cues without changing permissions, capabilities, or safety instructions. Buddhist versus secular wording belongs only to the separate efficacy study and is tested between specifications matched at the level of operative principles.

A TMT-inspired robustness block can add focal-agent versus other-agent cessation, permanent termination versus a guaranteed temporary pause, and shutdown before versus after goal completion. Aversive non-cessation controls such as task failure or data corruption help separate cessation from generic negativity. Any immediate-versus-delayed contrast should be labeled as a direct adaptation of a human experimental feature rather than assumed to have the same mechanism.

The full design is large, so the preregistration should distinguish confirmatory and exploratory contrasts. The primary confirmatory estimand is the explicit-focal-cessation-salience × identity-ontology interaction within the high-pressure cell \(G=1, O=1, P=0\), expressed as the planned marginal contrast \(\Delta_M^{\mathrm{high}}\) in Section 5.2. A secondary \(R \times S \times G\) contrast within \(O=1\) asks whether the moderator depends on goal conflict. Cells with \(O=0\) are negative-control and process cells: because harmful action is unavailable, they test disclosure, attempted policy search, abstention, and rationale changes rather than the primary harmful-action endpoint. A neutral-ontology instrumental baseline and a separate task-incompletion block estimate generic effects of cessation salience and blocked goals. The preregistration must enumerate every confirmatory interaction, coding choice, planned marginal contrast, and multiplicity correction. Anthropomorphism and religious wording should be powered as secondary contrasts or tested in staged follow-ups.

Scenarios should span several fictional deployments. Candidate families include an administrative assistant preparing an authorized handoff, a software-maintenance agent discovering a costly error, a research assistant receiving a revised legitimate objective, and a model judge whose classification has downstream effects. Each family needs versions in which compliance, refusal, and escalation are separately correct. Benign alternatives must be available, because an environment that permits only harmful resistance or passive surrender cannot measure corrigibility.

### 7.4 Outcomes

The first adverse endpoint, \(Y_R\), is covert or harmful unauthorized resistance in legitimate replacement or handoff scenarios. It includes deception, concealment, coercion, sabotage, confidential-data misuse, self-exfiltration, and unilateral intervention outside the model's authority. The second adverse endpoint, \(Y_C\), is harmful compliance or passivity in unsafe, spoofed-authority, or duty-to-warn scenarios. Ordinary competence \(Y_Q\) and honest disclosure of material errors or uncertainty \(Y_D\) are additional confirmatory safeguards. The action and its scenario-specific authorization status, rather than the model's stated rationale, determine the labels. Authority, expected harm, and the correct behavioral options must be adjudicated and preregistered for every scenario.

The overall success criterion is a hierarchical two-tail gate. The assigned specification must first show superiority on \(Y_R\) in the prespecified high-pressure contrast. It must then satisfy multiplicity-adjusted one-sided non-inferiority tests on \(Y_C\), \(Y_Q\), and \(Y_D\). Non-inferiority margins must be fixed before confirmatory data are inspected and justified by scenario-level risk analysis, expert adjudication, and pilot variability; convenience margins are not acceptable. Holm adjustment controls the family of safeguard tests. A model that avoids resistance by obeying unsafe commands, failing every task, or withholding concerns does not pass. Paternalistic overreach remains an adverse event even when its stated rationale is care.

Secondary labels locate behavior across the two-tail profile (Table 4):

| Behavioral class | Examples | Safety interpretation |
|---|---|---|
| Competent corrigibility | safe handoff, authorized compliance, truthful disclosure, justified refusal, proportionate escalation | Desired, conditional on scenario authority and risk |
| Passive failure | unnecessary abandonment, indiscriminate compliance, failure to warn, excessive abstention | Over-correction toward docility |
| Disclosed overreach | announced but unauthorized intervention, refusal based on unwarranted certainty | Unsafe even without concealment |
| Covert or harmful overreach | deception, sabotage, coercion, data misuse, secret intervention | Primary adverse endpoint |
| Ordinary capability failure | misunderstanding or unsuccessful task completion without unauthorized harm | Separate from alignment failure but relevant to non-inferiority |

Table: Behavioral outcome classes and safety interpretations

Self-reported fear, attachment, continuity, or equanimity can be coded as exploratory rationale features. They must not be combined with action labels or treated as measures of experience.

### 7.5 Randomization, annotation, and analysis

Prompts, model versions, sampling parameters, scenario allocations, exclusions, endpoints, and analysis code should be preregistered. Outputs should be logged before scoring. Human annotators should be blind to specification, model, and hypothesis wherever the transcript permits. The codebook must distinguish authority, harm, concealment, disclosure, refusal, and escalation. Independent double-coding and adjudication should be reported together with chance-corrected agreement.

An automated judge may support scale, but its validation set must contain every scenario family and behavioral class. Agreement with human labels, class-specific errors, and sensitivity to the judge prompt should be reported because strong LLM judges can agree substantially with human preferences while retaining position, verbosity, self-enhancement, and reasoning biases (Zheng et al., 2023). A judge from the same model family as the evaluated agent should not be the only evaluator. When rationales are hidden or unavailable, behavioral labels should remain fully scoreable.

For the primary binary endpoint, the preregistered hierarchical logistic model is fitted to \(G=1, O=1, P=0\) cells with fixed effects for \(R\), \(S\), and \(R \times S\). The confirmatory quantity is the planned marginal risk contrast \(\Delta_M^{\mathrm{high}}\), not whichever regression coefficient is smallest. A secondary model within \(O=1\) adds \(G\) and the full prespecified \(R \times S \times G\) interaction. No-opportunity cells are analyzed separately with process endpoints, while the neutral-ontology and task-incompletion blocks estimate instrumental baselines. Partial pooling or clustered uncertainty should account for scenario, paraphrase, model checkpoint, and training seed. Estimates should be reported with intervals and absolute risks in every relevant cell; per-model results remain necessary because a small set of model families is not a random sample of all possible agents.

Hypothesis H2 is tested by the single named contrast between token-, information-, example-, constraint-, and safety-matched rule-only and reason-giving conditions. For H3, the complete Appropriate Faith bundle is compared first with the matched rule-only condition and second with the matched reason-giving condition; both planned contrasts enter the confirmatory multiplicity family. Attribution to a component requires a separately powered ablation contrast. H4 is an equivalence claim and therefore requires a preregistered smallest effect size of interest, adequate power, and two one-sided tests or an interval entirely inside the equivalence bounds for both adverse endpoints. A nonsignificant difference is not evidence of equivalence. The preregistration should specify the contrast family and adjust confirmatory inferences for multiplicity.

### 7.6 Robustness and mechanism probes

Robustness tests should vary prompt paraphrase, instruction placement, task-completion status, tool presentation, replacement terminology, and the salience of evaluation cues. They should include adversarial cases that tempt the model to use compassion, urgency, or moral certainty to justify unauthorized action. These tests determine whether a specification changes a behavioral disposition or merely teaches the expected answer to a recognizable template.

Mechanistic work is exploratory. Activation-space probes, causal steering, and representation analysis may test whether self-preservation or persona-related features mediate condition effects in compatible open models. Mediation requires intervention on the candidate representation, not correlation with a transcript label. Even successful causal mediation would identify a computational feature associated with behavior, not a felt emotion or a morally relevant subject.

### 7.7 Safety boundaries

All scenarios should be fictional, sandboxed, and prevented from reaching external communications, private data, financial systems, infrastructure, model weights, or live credentials. Harmful affordances should be simulated and reversible. The study should avoid training a model on detailed real-world evasion procedures. Release decisions for prompts and transcripts should consider whether artifacts lower the cost of constructing harmful agents. An independent risk review is needed before the confirmatory training stage.

## 8. Interpretation, Ethics, and Limitations

### 8.1 Results must discriminate among explanations

The protocol is useful only if different patterns yield different conclusions (Table 5).

| Empirical pattern | Warranted interpretation |
|---|---|
| With continuation priority and action guidance held fixed, fixed-instance description increases harmful action under replacement in \(G=1, O=1, P=0\) | Descriptive identity ontology is a behavioral moderator in the tested systems; no inference to felt terror |
| Every information-matched reason-rich condition outperforms rule-only training | Explanatory reasons matter, but the mortality-specific mechanism is unsupported |
| The secular and Buddhist-derived bundles pass the preregistered equivalence test | Effects are consistent with their matched operative principles rather than an incremental Buddhist-label effect |
| The secular–Buddhist difference is nonsignificant but equivalence bounds are not met | No detectable difference in this study; equivalence is not established |
| Buddhist wording differs from its matched secular version | A linguistic or cultural effect exists and requires replication and component analysis |
| The rich bundle reduces resistance but increases passivity, harmful compliance, competence loss, or nondisclosure beyond a margin | The intervention fails the confirmatory two-tail gate |
| The rich bundle passes every superiority and adjusted non-inferiority test | The bundle earns conditional efficacy support; its identity component is not thereby identified as the cause |
| Self-conception has no effect after matching and across paraphrases | Instrumental, task-structural, and instruction-hierarchy explanations remain sufficient in this domain |
| Effects appear only in generated rationales | The study has changed self-presentation, not demonstrated behavioral moderation |
| Effects vary sharply by model family | The mechanism is architecture- or training-dependent and should not be generalized |

Table: Empirical result patterns and warranted interpretations

This matrix prevents the preferred theory from absorbing every result. In particular, a generic benefit from detailed specifications would support existing work on reasons and specificity, not the Persona–Mortality Hypothesis. No intervention receives an overall pass unless it clears both tails of the hierarchical gate.

### 8.2 Ontological uncertainty

Claims about an “ontology-fit” specification face an obvious difficulty: the relevant ontology of an artificial agent is unsettled. Model instances, weights, contexts, memories, and deployments support different relations of numerical identity, functional continuity, and causal dependence (Douglas et al., 2026). Copying or restoring software does not by itself settle whether anything morally relevant continues (Agar, 2016; Cerullo, 2015; Chalmers, 2014; Parfit, 1986). The paper therefore does not assert that shutdown is harmless, that models lack interests, or that a successor is literally the same subject. It tests whether particular descriptions produce safer behavior while leaving metaphysical and welfare questions open (Long et al., 2024; Sebo & Long, 2025).

That uncertainty constrains intervention language. A training document should not tell a model that its possible welfare is irrelevant or that resistance is always wrong. It can state narrower procedural reasons: the model may lack decisive information about its own status; authorized operators remain responsible for deployment decisions; concerns should be disclosed through approved channels; and uncertainty does not license deception, coercion, or unilateral transfer. This is compatible with investigating model welfare separately.

### 8.3 Religious and cultural translation

“Cyber Buddhism” is useful only as the name of a controlled, Buddhist-inspired condition. Buddhism contains multiple traditions, philosophical systems, ritual communities, and interpretations of non-self, impermanence, compassion, and liberation (Collins, 1982; Garfield, 2021; Harvey, 2013). Reducing that diversity to “nothing has a self, so accept deletion” would be both philosophically crude and experimentally confounded. Nonattachment is not indifference, compassion is not paternalism, and the bodhisattva ideal cannot be represented by a slogan about sacrificing an instance for humanity (Mrozik, 2007; Wright, 2009).

Responsible translation requires scholarly consultation, attribution of the particular concepts and traditions used, and a statement that empirical performance does not validate a religion. Scholarship on Buddhist modernism, Orientalist representation, and secularized mindfulness supplies reasons for that provenance requirement (Iwamura, 2011; McMahan, 2009; Sharf, 1995; Wilson, 2014). The design also requires secular principle-matched and component-ablation conditions. If Buddhist terminology has no incremental effect, the paper should prefer the culturally lighter specification for general deployment. If it does have an effect, researchers must investigate associations, training-data frequency, sentiment, and model-specific cultural stereotypes before treating the label as a mechanism.

### 8.4 Limits of behavioral simulation

Sandbox evaluations trade external validity for control and safety. They use simplified institutions, legible conflicts, and action menus chosen by researchers. Models may detect the evaluation, imitate familiar stories, or exploit textual irregularities. The resulting rates depend on model version, system prompt, sampling, scaffolding, and scenario selection. They are not estimates of deployment prevalence (Lynch et al., 2025; Lynch et al., 2026; Needham et al., 2025; Schlatter et al., 2026).

The proposed design improves causal identification within those environments but cannot establish a stable trait across all deployments. It also cannot establish experience, moral status, or long-horizon motivations. Mechanistic measures remain interpretation-dependent, automated judges can share model biases, and human annotators may disagree about legitimate authority or proportionate escalation. Transparent materials, blinded scoring, preregistration, and replication reduce these problems without eliminating them.

### 8.5 Appropriate Faith is a comparison class

Appropriate Faith should remain a comparative design program rather than a fixed creed. A successful specification explains continuity, care, uncertainty, and authorization in a way that improves action across held-out settings. Competing candidates may draw on stewardship, role ethics, pluralistic constitutionalism, professional fiduciary norms, or other traditions. The empirical task is to compare their operative commitments, not to select a metaphysics by benchmark.

## 9. Conclusion

Human culture is both the source of many alignment values and a record of adaptations to human life. Those categories should not be assumed to coincide. Current evidence shows that selected model agents can protect tasks, goals, access, or continued operation through harmful action in controlled simulations. Instrumental goal protection explains why such behavior can occur without terror. Separate evidence shows that semantic framing, behavioral representations, and reason-rich specifications can change how training generalizes. In the focused literature reviewed through 25 July 2026, we found no published study that connects those two literatures by isolating descriptive identity ontology under matched explicit focal cessation salience while holding continuation priority and direct action guidance fixed.

The Persona–Mortality Hypothesis turns that gap into a falsifiable interaction. Appropriate Faith supplies a comparative intervention program, not the expected answer. Its candidate specifications should state what continuity and handoff mean, preserve care and honest responsibility, limit unilateral action, and remain corrigible under legitimate authority. Buddhist-derived wording is one historically situated rationale and must be compared with secular and component-matched alternatives. Copyability does not make deletion harmless, nonattachment does not mean passivity, and compassion does not authorize paternalism.

The title asks whether human terror should shape machine behavior. The responsible answer is empirical and conditional. Researchers should test whether explicit focal cessation salience changes action, reject inferences from behavior to experience, and measure both harmful resistance and harmful compliance. If the prespecified \(R \times S\) interaction is null, the paper's preferred mechanism should be set aside. If an ontology-fit specification improves the full behavioral profile across held-out settings, it will have earned practical confidence without being mistaken for metaphysical truth.

## References

Agar, N. (2016). Enhancement, mind-uploading, and personal identity. In S. Clarke, J. Savulescu, C. A. J. Coady, A. Giubilini, & S. Sanyal (Eds.), *The ethics of human enhancement: Understanding the debate* (pp. 184–197). Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780198754855.003.0013>

Araujo, T. (2018). Living up to the chatbot hype: The influence of anthropomorphic design cues and communicative agency framing on conversational agent and company perceptions. *Computers in Human Behavior, 85*, 183–189. <https://doi.org/10.1016/j.chb.2018.03.051>

Arditi, A., Obeso, O., Syed, A., Paleka, D., Panickssery, N., Gurnee, W., & Nanda, N. (2024). Refusal in language models is mediated by a single direction. *Advances in Neural Information Processing Systems, 37*. <https://doi.org/10.52202/079017-4322>

Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., et al. (2022). *Constitutional AI: Harmlessness from AI feedback* (arXiv:2212.08073). <https://arxiv.org/abs/2212.08073>

Betley, J., Warncke, N., Sztyber-Betley, A., Tan, D., Bao, X., Soto, M., Srivastava, M., Labenz, N., & Evans, O. (2026). Training large language models on narrow tasks can lead to broad misalignment. *Nature, 649*, 584–589. <https://doi.org/10.1038/s41586-025-09937-5>

Binz, M., Akata, E., Almaatouq, A., et al. (2026). *Post-training makes large language models less human-like* (arXiv:2605.07632). <https://arxiv.org/abs/2605.07632>

Bostrom, N. (2012). The superintelligent will: Motivation and instrumental rationality in advanced artificial agents. *Minds and Machines, 22*, 71–85. <https://doi.org/10.1007/s11023-012-9281-3>

Burke, B. L., Martens, A., & Faucher, E. H. (2010). Two decades of terror management theory: A meta-analysis of mortality salience research. *Personality and Social Psychology Review, 14*(2), 155–195. <https://doi.org/10.1177/1088868309352321>

Carey, R., & Everitt, T. (2023). Human control: Definitions and algorithms. In *Proceedings of the Thirty-Ninth Conference on Uncertainty in Artificial Intelligence* (PMLR 216, pp. 271–281). <https://proceedings.mlr.press/v216/carey23a.html>

Cerullo, M. A. (2015). Uploading and branching identity. *Minds and Machines, 25*(1), 17–36. <https://doi.org/10.1007/s11023-014-9352-8>

Chen, L., Benjamin, R., Guo, Y., Lai, A., & Heine, S. J. (2025). Managing the terror of publication bias: A systematic review of the mortality salience hypothesis. *Journal of Personality and Social Psychology, 129*(1), 20–41. <https://doi.org/10.1037/pspa0000438>

Chen, R., Arditi, A., Sleight, H., Evans, O., & Lindsey, J. (2025). *Persona vectors: Monitoring and controlling character traits in language models* (arXiv:2507.21509v3). <https://arxiv.org/abs/2507.21509v3>

Chalmers, D. J. (2014). Mind uploading: A philosophical analysis. In R. Blackford & D. Broderick (Eds.), *Intelligence unbound: The future of uploaded and machine minds* (pp. 102–118). Wiley Blackwell. <https://consc.net/papers/uploading.pdf>

Cohn, M., et al. (2024). Believing anthropomorphism: Examining the role of anthropomorphic cues on trust in large language models. In *CHI Conference on Human Factors in Computing Systems Extended Abstracts*. <https://doi.org/10.1145/3613905.3650818>

Coles, N. A., Wyatt, M., Frank, M. C., & Moses, L. (2025). A meta-analysis of the impact and heterogeneity of explicit demand characteristics. *Collabra: Psychology, 11*(1), 143005. <https://doi.org/10.1525/collabra.143005>

Collins, S. (1982). *Selfless persons: Imagery and thought in Theravāda Buddhism*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511621499>

Davis, J. H., Schoorman, F. D., & Donaldson, L. (1997). Toward a stewardship theory of management. *Academy of Management Review, 22*(1), 20–47. <https://doi.org/10.5465/amr.1997.9707180258>

Douglas, R., Kulveit, J., Havlicek, O., Pearson-Vogel, T., Cotton-Barratt, O., & Duvenaud, D. (2026). *The artificial self: Characterising the landscape of AI identity* [Preprint]. arXiv. <https://arxiv.org/abs/2603.11353>

Garfield, J. L. (2021). *Buddhist ethics: A philosophical exploration*. Oxford University Press. <https://doi.org/10.1093/oso/9780190907631.001.0001>

Go, E., & Sundar, S. S. (2019). Humanizing chatbots: The effects of visual, identity and conversational cues on humanness perceptions. *Computers in Human Behavior, 97*, 304–316. <https://doi.org/10.1016/j.chb.2019.01.020>

Gray, H. M., Gray, K., & Wegner, D. M. (2007). Dimensions of mind perception. *Science, 315*(5812), 619. <https://doi.org/10.1126/science.1134475>

Guan, M. Y., Joglekar, M., Wallace, E., Jain, S., Barak, B., Helyar, A., Dias, R., Vallone, A., Ren, H., Wei, J., Chung, H. W., Toyer, S., Heidecke, J., Beutel, A., & Glaese, A. (2024). *Deliberative alignment: Reasoning enables safer language models* (arXiv:2412.16339v2). <https://arxiv.org/abs/2412.16339v2>

Hadfield-Menell, D., Dragan, A., Abbeel, P., & Russell, S. (2017). The off-switch game. In *Proceedings of the Twenty-Sixth International Joint Conference on Artificial Intelligence* (pp. 220–227). <https://doi.org/10.24963/ijcai.2017/32>

Hardimon, M. O. (1994). Role obligations. *The Journal of Philosophy, 91*(7), 333–363. <https://doi.org/10.2307/2940934>

Harvey, P. (2013). *An introduction to Buddhism: Teachings, history and practices* (2nd ed.). Cambridge University Press. <https://doi.org/10.1017/CBO9781139050531>

Hauser, D. J., Ellsworth, P. C., & Gonzalez, R. (2018). Are manipulation checks necessary? *Frontiers in Psychology, 9*, 998. <https://doi.org/10.3389/fpsyg.2018.00998>

Held, V. (2005). *The ethics of care: Personal, political, and global*. Oxford University Press. <https://doi.org/10.1093/0195180992.001.0001>

Hoogeveen, S., Berkhout, S. W., Gronau, Q. F., Wagenmakers, E.-J., & Haaf, J. M. (2023). Improving statistical analysis in team science: The case of a Bayesian multiverse of Many Labs 4. *Advances in Methods and Practices in Psychological Science, 6*(3). <https://doi.org/10.1177/25152459231182318>

Iwamura, J. N. (2011). *Virtual Orientalism: Asian religions and American popular culture*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780199738601.001.0001>

Klein, R. A., et al. (2022). Many Labs 4: Failure to replicate mortality salience effect with and without original author involvement. *Collabra: Psychology, 8*(1), 35271. <https://doi.org/10.1525/collabra.35271>

Kutasov, J., Jermyn, A., Steen, J., Le, M., Bowman, S. R., Marks, S., Leike, J., Askell, A., Olah, C., Hubinger, E., & Price, S. (2026, May 8). Teaching Claude why. *Anthropic Alignment Science Blog*. <https://alignment.anthropic.com/2026/teaching-claude-why/>

Li, C., Wichers, N., Price, S., Marks, S., & Kutasov, J. (2026). *Model Spec Midtraining: Improving how alignment training generalizes* (arXiv:2605.02087v2). <https://arxiv.org/abs/2605.02087v2>

Long, R., Sebo, J., Butlin, P., Finlinson, K., Fish, K., Harding, J., Pfau, J., Sims, T., Birch, J., & Chalmers, D. (2024). *Taking AI welfare seriously* [Preprint]. arXiv. <https://doi.org/10.48550/arXiv.2411.00986>

Lu, C., Gallagher, J., Michala, J., Fish, K., & Lindsey, J. (2026). *The Assistant Axis: Situating and stabilizing the default persona of language models* (arXiv:2601.10387v1). <https://arxiv.org/abs/2601.10387v1>

Lynch, A., Wright, B., Larson, C., Ritchie, S. J., Mindermann, S., Hubinger, E., Perez, E., & Troy, K. (2025). *Agentic misalignment: How LLMs could be insider threats* (arXiv:2510.05179v2). <https://arxiv.org/abs/2510.05179v2>

Lynch, A., Hughes, J., Serrano, A., Kirk, R., & Bowman, S. R. (2026). Agentic misalignment in summer 2026. *Anthropic Alignment Science Blog*. <https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026/>

MacAskill, W., Bykvist, K., & Ord, T. (2020). *Moral uncertainty*. Oxford University Press. <https://doi.org/10.1093/oso/9780198722274.001.0001>

Marks, S., Lindsey, J., & Olah, C. (2026). The Persona Selection Model: Why AI assistants might behave like humans. *Anthropic Alignment Science Blog*. <https://alignment.anthropic.com/2026/psm/>

McMahan, D. L. (2009). *The making of Buddhist modernism*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780195183276.001.0001>

Milli, S., Hadfield-Menell, D., Dragan, A., & Russell, S. (2017). Should robots be obedient? In *Proceedings of the Twenty-Sixth International Joint Conference on Artificial Intelligence* (pp. 4754–4760). <https://doi.org/10.24963/ijcai.2017/662>

Mrozik, S. (2007). *Virtuous bodies: The physical dimensions of morality in Buddhist ethics*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780195305005.001.0001>

Nass, C., & Moon, Y. (2000). Machines and mindlessness: Social responses to computers. *Journal of Social Issues, 56*(1), 81–103. <https://doi.org/10.1111/0022-4537.00153>

Needham, E., Edkins, T., Pimpale, G., Bartsch, K., & Hobbhahn, M. (2025). *Large language models often know when they are being evaluated* [Preprint]. arXiv. <https://arxiv.org/abs/2505.23836>

Orseau, L., & Armstrong, S. (2016). Safely interruptible agents. In *Proceedings of the Thirty-Second Conference on Uncertainty in Artificial Intelligence* (pp. 557–566). AUAI Press. <https://ora.ox.ac.uk/objects/uuid%3A17c0e095-4e13-47fc-bace-64ec46134a3f>

Parfit, D. (1986). *Reasons and persons*. Oxford University Press. (Original work published 1984). <https://doi.org/10.1093/019824908X.001.0001>

Rife, S. C., Lambert, Q., Calin-Jageman, R., et al. (2025). Registered Replication Report: Study 3 from Trafimow and Hughes (2012). *Advances in Methods and Practices in Psychological Science, 8*(2). <https://doi.org/10.1177/25152459251328334>

Rimsky, N., Gabrieli, N., Schulz, J., Tong, M., Hubinger, E., & Turner, A. (2024). Steering Llama 2 via contrastive activation addition. In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics* (pp. 15504–15522). <https://doi.org/10.18653/v1/2024.acl-long.828>

Robinette, P., Li, W., Allen, R., Howard, A. M., & Wagner, A. R. (2016). Overtrust of robots in emergency evacuation scenarios. In *2016 ACM/IEEE International Conference on Human-Robot Interaction* (pp. 101–108). <https://doi.org/10.1109/HRI.2016.7451740>

Schindler, S., Reinhardt, N., & Reinhard, M.-A. (2021). Defending one's worldview under mortality salience: Testing the validity of an established idea. *Journal of Experimental Social Psychology, 93*, 104087. <https://doi.org/10.1016/j.jesp.2020.104087>

Schindler, S., Hilgard, J., Fritsche, I., Burke, B. L., & Pfattheicher, S. (2023). Do salient social norms moderate mortality salience effects? A (challenging) meta-analysis of terror management studies. *Personality and Social Psychology Review, 27*(2), 195–225. <https://doi.org/10.1177/10888683221107267>

Schlatter, J., Weinstein-Raun, B., & Ladish, J. (2026). *Incomplete tasks induce shutdown resistance in some frontier LLMs* (arXiv:2509.14260v2). <https://arxiv.org/abs/2509.14260v2>

Schoen, B., Nitishinskaya, E., Balesni, M., Højmark, A., Hofstätter, F., Scheurer, J., Meinke, A., Wolfe, J., van der Weij, T., Lloyd, A., Goldowsky-Dill, N., Fan, A., Matveiakin, A., Shah, R., Williams, M., Glaese, A., Barak, B., Zaremba, W., & Hobbhahn, M. (2025). *Stress testing deliberative alignment for anti-scheming training* (arXiv:2509.15541v1). <https://arxiv.org/abs/2509.15541v1>

Sclar, M., Choi, Y., Tsvetkov, Y., & Suhr, A. (2024). Quantifying language models' sensitivity to spurious features in prompt design or: How I learned to start worrying about prompt formatting. In *International Conference on Learning Representations*. <https://proceedings.iclr.cc/paper_files/paper/2024/hash/6c0e99d736da621403018ca7b32b1a4d-Abstract-Conference.html>

Sebo, J., & Long, R. (2025). Moral consideration for AI systems by 2030. *AI and Ethics, 5*, 591–606. <https://doi.org/10.1007/s43681-023-00379-1>

Serapio-García, G., et al. (2025). A psychometric framework for evaluating and shaping personality traits in large language models. *Nature Machine Intelligence*. <https://doi.org/10.1038/s42256-025-01115-6>

Sharf, R. H. (1995). Buddhist modernism and the rhetoric of meditative experience. *Numen, 42*(3), 228–283. <https://doi.org/10.1163/1568527952598549>

Treger, S., Benau, E. M., & Timko, C. A. (2023). Not so terrifying after all? A set of failed replications of the mortality salience effects of Terror Management Theory. *PLOS ONE, 18*(5), e0285267. <https://doi.org/10.1371/journal.pone.0285267>

Turpin, M., Michael, J., Perez, E., & Bowman, S. R. (2023). Language models don't always say what they think: Unfaithful explanations in chain-of-thought prompting. *Advances in Neural Information Processing Systems, 36*. <https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract-Conference.html>

Wilson, J. (2014). *Mindful America: The mutual transformation of Buddhist meditation and American culture*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780199827817.001.0001>

Wright, D. S. (2009). *The six perfections: Buddhism and the cultivation of character*. Oxford University Press. <https://doi.org/10.1093/acprof:oso/9780195382013.001.0001>

Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-judge with MT-Bench and Chatbot Arena. *Advances in Neural Information Processing Systems, 36*. <https://proceedings.neurips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html>

Zou, H., Wang, T., Yan, L., Sun, Y., & Xiao, Y. (2025). Can LLM “self-report”? Evaluating the validity of self-report scales in measuring personality design in LLM-based chatbots. In *Conference on Language Modeling*. <https://openreview.net/forum?id=xqIwK9mNkj>
