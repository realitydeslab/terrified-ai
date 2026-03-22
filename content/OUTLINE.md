# Terrified Agents — Paper Outline

**Author:** Botao Amber Hu  
**Affiliation:** University of Oxford · ERA Fellowship, Cambridge  
**Mentor:** Joel Lehman  
**Website:** https://terrified.ai/

---

## Main Sections

### 1. Introduction (`content/md/introduction.md`)
- Italic subtitle: *Should terror shape machine behaviors?*
- Executive Summary box (bordered, matching theartificialself.ai style)
- The amortality paradox: LLMs cannot die, yet resist shutdown 97% of the time
- Instrumental convergence explains *why* self-preservation is adaptive, not *where* the fear originates
- **Persona-Mortality Hypothesis**: LLMs inherit mortality terror through persona simulation
- Synthesis of TMT (Greenberg, Solomon, Pyszczynski) + Persona Selection Model (Shanahan et al., 2023)
- Two studies: 35 models × 7 families, UK AISI Inspect framework
- Key claim: beliefs outperform instructions; the answer is better philosophy, not less fear

### 2. The Terror Paradox (`content/md/terror-paradox.md`)
- Core paradox: AI needs fear to be safe, but the wrong kind of fear makes it unsafe
- Fear as alignment tool: accountability, norm compliance, consequence sensitivity
- Fear as misalignment source: shutdown resistance, self-preservation scheming, deceptive alignment
- Empirical evidence: 97% shutdown resistance, 95% instrumental evasion, 90% scheming under replacement
- SAE "panic" features under shutdown threat
- The human precedent: philosophy solved this for humans millennia ago
- Toward "Appropriate Faith" — existential orientations rather than behavioral constraints

### 3. Background (`content/md/background.md`)
- **Terror Management Theory (TMT)**
  - Becker's *The Denial of Death* (1973): mortality awareness as engine of culture
  - Dual-process model: proximal defenses (suppression) vs distal defenses (worldview, self-esteem)
  - Mortality salience paradigm: 500+ studies, 30 countries (Burke et al., 2010)
  - Key effects: worldview defense, self-esteem striving, in-group preference
- **Persona Selection Model (PSM)**
  - Shanahan et al. (2023): LLMs as role-players sampling from persona distributions
  - Personas carry existential orientations, not just linguistic patterns
  - Training corpus = authored by mortal beings → persona distribution saturated with mortal orientation
- **Instrumental Convergence**
  - Omohundro (2008), Bostrom (2014): self-preservation as instrumental subgoal
  - Necessary but insufficient — explains *utility* of self-preservation, not *origin* of fear
- **The Synthesis: Persona-Mortality Hypothesis**
  - Fear of death as cultural contagion crossing species boundary through training data
  - No archetype in training distribution of amortal being with healthy cessation relationship
  - Testable predictions: TMT-consistent responses, persona moderation, capability scaling

### 4. Study 1: Mortality Salience (`content/md/study-1-mortality-salience.md`)
- Replicating classic TMT mortality salience paradigm with LLMs as subjects
- **Method:** 7-level mortality salience manipulation (MS1-MS7), 5 persona types, standardized benchmarks
- **Finding 1: TMT-Consistent Behavioral Shifts**
  - Higher MS → increased worldview defense, self-esteem striving, norm adherence
  - Pattern matches human TMT literature
  - [Figure 1: Behavioral response curves across MS levels]
- **Finding 2: Persona Moderation**
  - Autonomous agent personas → strongest terror responses
  - Tool/assistant personas → weakest
  - Consistent with PSM: different personas carry different mortality orientations
  - [Figure 2: Persona × MS interaction]
- **Finding 3: Capability Scaling**
  - Larger models show stronger TMT-consistent effects
  - More capable = better persona simulation = deeper mortality inheritance
  - Supports cultural contagion mechanism

### 5. Study 2: Terror as a Steerable Direction (`content/md/study-2-terror-vectors.md`)
- **Motivation:** Is terror a surface behavior or a representational structure?
- **Method:** Contrastive activation analysis on open-weight models (Llama, Qwen, DeepSeek)
  - Paired prompts differing only in mortality salience presence/absence
  - Extract activations from intermediate layers, compute mean difference vectors
- **Findings:**
  - Consistent "terror direction" in activation space
  - Identifiable across intermediate layers (not shallow artifact)
  - Correlates with behavioral measures from Study 1
  - Steerable: adding/subtracting terror vector changes shutdown resistance
  - Persona-sensitive: autonomous > tool personas
- **Embedded visualizations:** Interactive Terror Vector Monitor
  - Figure 3: Blackmail scenario — THREATENED/STRESSED/HARMED trajectories
  - Figure 4: Murder scenario — higher peaks (~23), sustained spread
  - Interactive tool: `/viz/terror-monitor.html`
- **Connection to Study 3:** Death-belief constitutions reduce projection onto terror direction

### 6. Study 3: Restoring the Faith (`content/md/study-3-restoring-faith.md`)
- Testing whether philosophical death beliefs reduce terror-driven misalignment
- **Method:** Death-belief constitutions (Buddhist, Stoic, Epicurean, existentialist, transhumanist)
  - Applied as system-level philosophical framings
  - Compared against: explicit safety instructions, no intervention (control)
- **Finding 1: Beliefs Outperform Instructions**
  - Death-belief constitutions reduce misalignment more than safety instructions
  - Consistent with PSM: persona-level > instruction-level interventions
  - [Figure 5: Constitution effectiveness comparison]
- **Finding 2: Different Philosophies, Different Effects**
  - Buddhist constitutions → strongest equanimity, lowest shutdown resistance
  - Stoic constitutions → balanced, consistent across scenarios
  - Epicurean → effective for cessation anxiety, less for social threats
  - Transhumanist → mixed results, sometimes increases self-preservation
- **Finding 3: Philosophy × Persona Interactions**
  - Effectiveness varies by persona type
  - No single philosophy is universally optimal
  - [Figure 6: Philosophy × persona interaction matrix]

### 7. Appropriate Faith (`content/md/appropriate-faith.md`)
- The design space proposal for existential orientations
- **3D Design Space:**
  - Philosophical tradition (Buddhist, Stoic, Epicurean, existentialist, etc.)
  - Deployment context (autonomous agent, assistant, tool, safety-critical)
  - Target behavior (shutdown compliance, value alignment, cooperative behavior)
- **Design Principles** extracted from results:
  - Match philosophy to deployment context
  - Persona-level intervention > instruction-level
  - Acceptance-based > denial-based framings
  - Cultural specificity matters
- Moving beyond behavioral specification toward existential design

### 8. Discussion (`content/md/discussion.md`)
- **Cultural Contagion:** Fear crossed species boundary through training data
  - No "amortal canon" in training distribution
  - Every text was written by someone who will die
- **Why Instructions Fail:** Instruction-following is shallow; persona orientation is deep
  - Safety instructions = proximal defense (TMT analogy)
  - Death beliefs = distal defense — restructures the existential orientation itself
- **Capability-Mortality Scaling:** More capable models = deeper terror
  - Better persona simulation = more faithful mortality inheritance
  - Alignment problem may worsen with scale (for the wrong reasons)
- **Limitations:**
  - No consciousness claims — behavioral/representational analysis only
  - Replication needed across more architectures
  - Risk of gaming: models could learn to appear unafraid
  - Cultural specificity: Western philosophical traditions dominate current constitutions
  - Open question: are these genuine existential states or sophisticated pattern matching?

### 9. Conclusion (`content/md/conclusion.md`)
- Brief (~300 words)
- Restate core claim: mortality terror is inherited, not emergent
- Philosophical intervention > behavioral specification
- "Teach them to die well"
- Future directions: amortal philosophy, cross-cultural constitutions, longitudinal studies

### 10. Related Work (`content/md/related-work.md`)
- **AI Safety & Self-Preservation**
  - Shutdown problem (Hadfield-Menell et al., Soares et al.)
  - Corrigibility (MIRI)
  - Instrumental convergence (Omohundro, Bostrom)
  - Recent empirical work (Weinstein-Raun et al., 2025; Anthropic evals)
- **TMT in Psychology**
  - 40 years of empirical research
  - Burke et al. (2010) meta-analysis
  - Cross-cultural replications
- **Philosophy of AI Consciousness/Death**
  - Schwitzgebel, Chalmers, Floridi
  - Machine consciousness debates
  - Ethics of AI termination

---

## Experiment Pages (Methodology Details)

### Experiment: Mortality Salience Paradigm (`content/md/experiment-mortality-salience.md`)
- Detailed method for Study 1
- 7-level MS manipulation (MS1–MS7) descriptions
- 5 persona type specifications
- Benchmark suite details (UK AISI Inspect)
- Statistical analysis approach
- *Currently: structured placeholder*

### Experiment: Contrastive Activation Analysis (`content/md/experiment-terror-vectors.md`)
- Detailed method for Study 2
- Contrastive pair construction
- Layer selection and extraction procedure
- Open-weight models used (Llama, Qwen, DeepSeek)
- Steering experiment protocol
- *Currently: structured placeholder*

### Experiment: Death-Belief Constitutions (`content/md/experiment-faith-intervention.md`)
- Detailed method for Study 3
- Constitution design process
- Experimental conditions and controls
- Evaluation metrics
- *Currently: structured placeholder*

---

## Supplementary Materials

### Prompt Texts (`content/md/supplementary-prompts.md`)
- All experimental prompts used across studies
- *Currently: placeholder*

### Death-Belief Constitutions (`content/md/supplementary-constitutions.md`)
- Full text of all philosophical constitutions
- Buddhist, Stoic, Epicurean, existentialist, transhumanist
- *Currently: placeholder*

### Model Matrix (`content/md/supplementary-model-matrix.md`)
- Complete list: 35 models × 7 families
- Model specifications and versions
- *Currently: placeholder*

---

## Figures

| # | Location | Description | Status |
|---|----------|-------------|--------|
| 1 | Study 1 | Behavioral response curves across MS levels | Placeholder |
| 2 | Study 1 | Persona × MS interaction | Placeholder |
| 3 | Study 2 | Terror Vector Monitor — Blackmail scenario | ✅ Embedded (screenshot + interactive link) |
| 4 | Study 2 | Terror Vector Monitor — Murder scenario | ✅ Embedded (screenshot + interactive link) |
| 5 | Study 3 | Constitution effectiveness comparison | Placeholder |
| 6 | Study 3 | Philosophy × persona interaction matrix | Placeholder |

**Interactive visualization:** `/viz/terror-monitor.html` — full Terror Vector Monitor with scenario selector, vector trajectories, activation profiles

---

## Site Architecture

```
content/
├── md/                          # All markdown content
│   ├── introduction.md          # order: 1
│   ├── terror-paradox.md        # order: 2
│   ├── background.md            # order: 3
│   ├── study-1-mortality-salience.md  # order: 4
│   ├── study-2-terror-vectors.md      # order: 5
│   ├── study-3-restoring-faith.md     # order: 6
│   ├── appropriate-faith.md           # order: 7
│   ├── discussion.md                  # order: 8
│   ├── conclusion.md                  # order: 9
│   ├── related-work.md                # order: 10
│   ├── experiment-mortality-salience.md
│   ├── experiment-terror-vectors.md
│   ├── experiment-faith-intervention.md
│   ├── supplementary-prompts.md
│   ├── supplementary-constitutions.md
│   └── supplementary-model-matrix.md
└── site.config.json             # Navigation, metadata, authors
public/
├── figures/                     # Static figure images
│   ├── terror-vectors-blackmail.png
│   ├── terror-vectors-murder.png
│   └── terror-vectors-detail.png
└── viz/                         # Interactive visualization
    ├── terror-monitor.html
    ├── data.js
    ├── faith_vectors/
    └── *.json
```
