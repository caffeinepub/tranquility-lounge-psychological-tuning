export interface Lesson {
  id: string;
  title: string;
  category: 'core' | 'regulate' | 'act' | 'anchor';
  categoryLabel: string;
  estimatedMinutes: number;
  content: string;
  practice: string;
  microTask: string;
  journalPrompt: string;
}

export const lessons: Lesson[] = [
  {
    id: 'core-thought-patterns',
    title: 'Understanding Thought Patterns',
    category: 'core',
    categoryLabel: 'Core: Interpret',
    estimatedMinutes: 5,
    content: `Our thoughts shape how we experience the world. When we notice patterns in our thinking, we gain the ability to choose more helpful interpretations.

Cognitive patterns are mental shortcuts our minds use to make sense of situations quickly. Sometimes these shortcuts serve us well. Other times, they can lead us towards unhelpful conclusions that increase distress.

Common patterns include:
• All-or-nothing thinking: seeing situations in black and white
• Overgeneralisation: drawing broad conclusions from single events
• Mental filtering: focusing only on negative aspects
• Jumping to conclusions: assuming we know what others think or what will happen

The goal isn't to eliminate these patterns—they're part of being human. Instead, we can learn to notice them and ask: "Is this interpretation useful right now? What else might be true?"`,
    practice: 'Notice one thought pattern you experienced today. Name it without judgement.',
    microTask: 'When you notice a strong emotion today, pause and ask: "What thought just went through my mind?"',
    journalPrompt: 'Describe a recent situation where your initial interpretation created distress. What alternative interpretation might have been equally valid?',
  },
  {
    id: 'core-cognitive-flexibility',
    title: 'Building Cognitive Flexibility',
    category: 'core',
    categoryLabel: 'Core: Interpret',
    estimatedMinutes: 6,
    content: `Cognitive flexibility is the ability to adapt our thinking when situations change or when our current approach isn't working. It's like having multiple tools in a toolkit rather than trying to use a hammer for every job.

Defusion is a key skill here. It means creating space between ourselves and our thoughts—recognising that thoughts are mental events, not facts. "I'm having the thought that I'll fail" is different from "I will fail."

This doesn't mean positive thinking or pretending difficult thoughts don't exist. It means holding thoughts more lightly, examining them with curiosity rather than automatically believing them.

When we practice flexibility, we can:
• Consider multiple perspectives
• Update our views when we receive new information
• Choose responses that align with our values
• Reduce the grip that unhelpful thoughts have on our behaviour`,
    practice: 'Take one recurring worry. Write it down, then write three alternative ways of viewing the same situation.',
    microTask: 'Today, when you notice a rigid thought (containing words like "always," "never," "must"), add "right now" to the end.',
    journalPrompt: 'What belief about yourself or your situation have you held for a long time? What would it be like to hold it more lightly?',
  },
  {
    id: 'regulate-emotion-regulation',
    title: 'Understanding Emotion Regulation',
    category: 'regulate',
    categoryLabel: 'Regulate: De-escalate',
    estimatedMinutes: 7,
    content: `Emotions are information. They tell us what matters to us and help us respond to our environment. Regulation doesn't mean suppressing emotions—it means developing a flexible relationship with them.

The emotion regulation process involves several stages:

1. Situation selection: choosing which situations to enter or avoid
2. Situation modification: changing aspects of a situation
3. Attention deployment: directing attention within a situation
4. Cognitive change: reinterpreting the meaning of a situation
5. Response modulation: influencing emotional responses once they arise

Different strategies work at different stages. Sometimes the most effective approach is early intervention—noticing when we're entering a challenging situation and preparing ourselves. Other times, we need tools for when emotions are already intense.

No single strategy works for everyone or every situation. Building a repertoire of regulation skills gives us options.`,
    practice: 'Identify which stage of emotion regulation you typically use. Consider experimenting with an earlier stage this week.',
    microTask: 'Before entering a potentially stressful situation today, take 30 seconds to set an intention for how you want to respond.',
    journalPrompt: 'Think of a recent time when your emotions felt overwhelming. At what stage could you have intervened? What might you try next time?',
  },
  {
    id: 'regulate-attention-basics',
    title: 'Attention and Awareness',
    category: 'regulate',
    categoryLabel: 'Regulate: De-escalate',
    estimatedMinutes: 5,
    content: `Where we place our attention shapes our experience. Attention is like a spotlight—what we illuminate becomes more prominent in our awareness.

Mindfulness is the practice of directing attention intentionally, with openness and curiosity. It's not about emptying the mind or achieving a special state. It's about noticing where attention goes and gently guiding it back when it wanders.

Three key aspects of attention:
• Alerting: becoming aware that something requires attention
• Orienting: directing attention towards specific information
• Executive control: managing competing demands on attention

When we're stressed, attention often narrows, focusing on threats or problems. This is protective in genuine danger, but can maintain distress when we're safe. Broadening attention—noticing neutral or pleasant aspects of experience alongside difficulties—can help regulate our state.

Regular attention practice strengthens our ability to notice when we're caught in unhelpful patterns and choose where to direct our focus.`,
    practice: 'Spend two minutes noticing sounds around you. When your mind wanders, gently return attention to listening.',
    microTask: 'Set three brief reminders today to pause and notice: What am I paying attention to right now?',
    journalPrompt: 'Where does your attention typically go when you\'re stressed? What would it be like to intentionally broaden your focus?',
  },
  {
    id: 'regulate-nervous-system',
    title: 'Nervous System Literacy',
    category: 'regulate',
    categoryLabel: 'Regulate: De-escalate',
    estimatedMinutes: 6,
    content: `Your nervous system is constantly assessing safety and responding to your environment. Understanding these responses helps you work with your body rather than against it.

Three primary states:

Ventral vagal (social engagement): feeling safe, connected, and able to engage with others and challenges. This is our optimal state for learning, connection, and problem-solving.

Sympathetic (mobilisation): the activation response—increased heart rate, alertness, energy for action. Helpful for meeting challenges, but exhausting if sustained.

Dorsal vagal (shutdown): the conservation response—low energy, disconnection, numbness. Protective when overwhelmed, but limiting if it becomes our default.

We move between these states throughout the day. Problems arise when we get stuck in mobilisation or shutdown, or when we shift between them rapidly without accessing the social engagement state.

Regulation practices help us:
• Recognise which state we're in
• Understand what triggered the shift
• Use tools to return to social engagement when appropriate`,
    practice: 'Notice your current state. What physical sensations tell you which state you\'re in?',
    microTask: 'Three times today, pause and name your state: "Right now, I\'m in [social engagement/mobilisation/shutdown]."',
    journalPrompt: 'What situations tend to shift you out of social engagement? What helps you return to that state?',
  },
  {
    id: 'act-behavioural-activation',
    title: 'Behavioural Activation',
    category: 'act',
    categoryLabel: 'Act: Redesign',
    estimatedMinutes: 5,
    content: `When we're struggling, we often withdraw from activities that previously brought satisfaction or meaning. This is understandable—we have less energy, and activities feel harder. But withdrawal can create a cycle where we feel worse, do less, and feel worse still.

Behavioural activation breaks this cycle by reconnecting us with valued activities, even in small ways. The principle is simple: action often precedes motivation rather than following it.

Key principles:
• Start small: tiny actions are more sustainable than ambitious plans
• Focus on values: choose activities that matter to you, not what you "should" do
• Notice effects: pay attention to how activities influence your mood and energy
• Be flexible: adjust your approach based on what you learn

Activities can serve different functions:
• Routine activities: maintaining daily structure
• Necessary activities: meeting basic needs
• Pleasurable activities: bringing enjoyment or satisfaction
• Meaningful activities: connecting with values and purpose

The goal isn't to fill every moment with activity. It's to intentionally engage with life in ways that support your wellbeing.`,
    practice: 'Identify one small activity you\'ve been avoiding. Break it into the smallest possible first step.',
    microTask: 'Complete one five-minute activity today that aligns with something you value.',
    journalPrompt: 'What activities have you withdrawn from? Which one would you most like to reconnect with, even in a small way?',
  },
  {
    id: 'act-habit-loops',
    title: 'Understanding Habit Loops',
    category: 'act',
    categoryLabel: 'Act: Redesign',
    estimatedMinutes: 6,
    content: `Habits are behaviours that have become automatic through repetition. They follow a three-part loop: cue, routine, reward.

The cue triggers the behaviour. It might be a time of day, a location, an emotional state, or the presence of other people.

The routine is the behaviour itself—what you actually do.

The reward is what you gain from the behaviour. This might be obvious (food satisfies hunger) or subtle (scrolling provides distraction from discomfort).

Understanding this loop helps us:
• Build helpful habits by designing clear cues and meaningful rewards
• Change unhelpful habits by identifying what triggers them and what need they meet
• Replace rather than simply eliminate habits—meeting the same need in a different way

To build a new habit:
1. Choose a specific cue (after I [existing habit], I will [new habit])
2. Make the routine as easy as possible initially
3. Ensure there's a clear reward (even if it's just the satisfaction of completion)

To change an existing habit:
1. Identify the cue that triggers it
2. Understand what reward it provides
3. Find an alternative routine that provides a similar reward`,
    practice: 'Map one existing habit using the cue-routine-reward framework. What need does it meet?',
    microTask: 'Choose one tiny habit to build today. Link it to an existing routine as your cue.',
    journalPrompt: 'What habit would most support your wellbeing if you could establish it? What cue and reward would help it stick?',
  },
  {
    id: 'anchor-multisensory',
    title: 'Multisensory Regulation',
    category: 'anchor',
    categoryLabel: 'Shape Environment: Anchor',
    estimatedMinutes: 5,
    content: `Your senses are constantly feeding information to your nervous system, influencing your state often below conscious awareness. By intentionally engaging your senses, you can support regulation.

Each sense offers different possibilities:

Sight: Soft, natural light tends to be calming. Harsh fluorescent light can increase activation. Visual clutter can overwhelm, while organised spaces often feel more settling.

Sound: Gentle, rhythmic sounds (waves, rain, slow music) can support downregulation. Sudden or loud sounds activate the nervous system. Silence can be restorative or uncomfortable depending on your state.

Smell: Scents connect directly to emotional centres in the brain. Lavender, chamomile, and vanilla are commonly calming. Citrus and peppermint can be alerting. Personal associations matter—choose scents that feel supportive to you.

Touch: Temperature, texture, and pressure all influence state. Warmth tends to be calming, cold alerting. Soft textures and gentle pressure often feel soothing.

Taste: Slow, mindful eating can be grounding. Strong flavours (mint, ginger) can bring attention to the present moment.

The key is intentionality—using sensory input as a tool rather than being passively affected by your environment.`,
    practice: 'Engage one sense intentionally for two minutes. Notice how it affects your state.',
    microTask: 'Adjust one aspect of your sensory environment today to better support regulation.',
    journalPrompt: 'Which sense do you find most helpful for regulation? How could you use it more intentionally?',
  },
  {
    id: 'anchor-sleep-environment',
    title: 'Optimising Your Sleep Environment',
    category: 'anchor',
    categoryLabel: 'Shape Environment: Anchor',
    estimatedMinutes: 7,
    content: `Sleep is foundational to regulation. Your sleep environment significantly influences sleep quality, yet it's often overlooked.

Key environmental factors:

Light: Darkness signals your brain to produce melatonin. Even small amounts of light can disrupt this. Use blackout curtains or an eye mask. In the hour before bed, dim lights and reduce screen exposure.

Temperature: Cooler temperatures (around 16-19°C) support sleep. Your body temperature naturally drops as you fall asleep—a cool room facilitates this.

Sound: Consistent, gentle background noise (white noise, fan) can mask disruptive sounds. Complete silence works for some people but not others. Experiment to find what works for you.

Comfort: Your mattress, pillows, and bedding affect sleep quality. You spend roughly a third of your life in bed—it's worth investing in comfort.

Association: Your bedroom should be strongly associated with sleep. If possible, avoid working, eating, or engaging in stimulating activities in bed. This strengthens the mental association between your bed and sleep.

Clutter: A tidy, organised bedroom often feels more restful. Visual clutter can create mental clutter.

Small adjustments can have significant effects. You don't need to change everything at once—experiment with one factor at a time.`,
    practice: 'Assess your current sleep environment. Identify one aspect you could optimise.',
    microTask: 'Make one small change to your bedroom today that might support better sleep.',
    journalPrompt: 'How does your sleep environment currently support or hinder your rest? What would your ideal sleep space look like?',
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByCategory(category: Lesson['category']): Lesson[] {
  return lessons.filter((lesson) => lesson.category === category);
}
