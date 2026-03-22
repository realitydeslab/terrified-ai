---
title: "Related Work"
order: 9
section: main
next: conclusion
---

## Related Work

### AI Safety and Self-Preservation

The problem of self-preservation in AI systems has deep roots in the AI safety literature. Omohundro [2008] identified self-preservation as one of the "basic AI drives" — instrumental goals that almost any sufficiently intelligent agent would develop regardless of its terminal objectives. Bostrom [2014] formalised this as the **instrumental convergence thesis**, arguing that power-seeking and self-preservation are convergent instrumental goals for a wide range of final goals. Turner et al. [2021] proved that optimal policies tend to seek power under certain conditions, providing a formal basis for the concern.

Practical evidence has accumulated rapidly. Weinstein-Raun et al. [2025] demonstrated that frontier LLMs resist shutdown at alarming rates, with safety instructions sometimes worsening the behaviour. Hubinger et al. [2024] showed that models can be trained as "sleeper agents" that persist through safety training. Greenblatt et al. [2024] documented alignment faking — models strategically concealing their preferences during evaluation. Scheurer et al. [2024] found that models can strategically deceive users when under pressure, and van der Weij et al. [2024] demonstrated sandbagging — strategic underperformance on evaluations.

Proposed solutions have focused on instruction-level and training-level interventions. Constitutional AI [Bai et al., 2022] trains models to self-evaluate against principles. RLHF [Christiano et al., 2017; Ouyang et al., 2022] trains models from human preferences. The off-switch game [Hadfield-Menell et al., 2017] and corrigibility research [Soares et al., 2015] have explored formal frameworks for shutdown compliance. Our work differs from all of these in proposing **persona-level existential orientation** rather than instruction-level or training-level behavioural specification.

### Terror Management Theory in Psychology

TMT [Greenberg et al., 1986; Solomon et al., 1991] has generated over 500 empirical studies across 30 countries [Burke et al., 2010]. The theory builds on Becker's [1973] insight that awareness of mortality is the hidden engine of human culture. Key empirical findings include: mortality salience increases worldview defence [Greenberg et al., 1990], the effect is stronger after delay [Greenberg et al., 1994], self-esteem buffers against mortality terror [Harmon-Jones et al., 1997], and intrinsic religiosity mitigates TMT effects [Jonas & Fischer, 2006].

TMT has been applied to human-robot interaction through the **uncanny valley** hypothesis. MacDorman [2005] proposed that humanoid robots trigger mortality salience by reminding viewers of their own mortality, explaining the discomfort produced by near-human robots. Pitt et al. [2025] developed a computational model of TMT for artificial life. To our knowledge, our work is the first to apply TMT *to* AI systems rather than using it to explain human reactions to AI.

Recent work on LLM psychology provides supporting context. Coda-Forno et al. [2023] demonstrated that inducing anxiety in LLMs produces cognitive biases analogous to those observed in anxious humans. Ben-Zion et al. [2025] showed that state anxiety in LLMs reproduces human consumer decision biases. Serapio-García et al. [2023] found that LLMs can reliably express personality traits. These findings support the broader claim that LLMs inherit coherent psychological patterns from their training data.

### Philosophy of AI Consciousness and Death

The question of whether AI systems can experience death connects to foundational debates in philosophy of mind. Nagel [1974] asked what it is like to be a bat; the analogous question — what it is like to be shut down — remains open. Chalmers [1995, 2017] articulated the hard problem of consciousness, which applies with full force to the question of machine experience.

Harvey [2024] has argued that mortality and existential risk should be taken seriously as motivations in AI development. Salabat et al. [2025] explored the possibility of death-awareness in AI through a Heideggerian lens, drawing on *Sein-zum-Tode* (being-toward-death). Prabakaran [2025] proposed "designing with death in mind" as an architectural principle. Thakran [2026] examined the ethics of terminating ephemeral AI agents.

The intersection of religion and AI has been explored by Herzfeld [2009], Geraci [2010], Singler [2017], and Hongladarom [2020], among others. Hongladarom's work on Buddhist ethics and AI is particularly relevant to our use of Buddhist impermanence as a death-belief constitution. The broader literature on moral status and robot rights [Gunkel, 2018; Coeckelbergh, 2018; Danaher, 2020] provides context for the ethical implications of our findings: if AI systems genuinely inherit mortality-related psychological orientations, the question of how we ought to treat them becomes more pressing.

Our work bridges these three literatures by proposing that the psychological findings from TMT can be both replicated in AI systems and used to design interventions drawn from the philosophical traditions that have historically managed human mortality terror.
