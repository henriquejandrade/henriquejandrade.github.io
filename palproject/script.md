General questions:
===

First interaction in the morning
---

- **GENMOR01** 
- Hey good morning! Did you have a good sleep?
  - Yes `[+1 sleep wellness]`
  - No `[-1 sleep wellness]`

`Yes:`
- Great! 
- `(Day Kick Off)` It's a `{day-weather}` day. 
  - `[if no plans]`
  - What will you do now?
    - Eat `-> go to Food`
    - Sleep more `-> go to Body, Sleep`
    - Plan my day `-> go to Planning, Day`
    - Exercise `-> go to Body, Exercise`
    - Work `-> go to Knowledge, Work`
    - Study `-> go to Knowledge, Studies`
    - Clean `-> go to House, Cleaning`
    - Other

> **Writer note:**
> Think about more tasks.

`No:`
`[sum to health:sleepwellness:problem]`
- **GENMOR01B1** 
- Oh, I'm sorry. What happened?
  - Nightmares
  - Imsomnia
  - Health issues
  - Noisy night
  - It's too bright
  - Other

- **GENMOR01B2** 
- Of course. We'll solve that. Do you have something to do now?
  - Yes `-> go to Day Kick Off`
  - No `-> go to Body, Health, Checkup`

---

Food
===

`[sum to food:meal]`
- What are you eating now?
  - `[show suggestions from food:meal on top]`
  - `[if Mornings]`
  - Cereal
  - Sandwich
  - Omelette
  - `[if Noon]`
  - Noodles
  - Salad
  - `[if Afternoon]`
  - Snacks
  - Smoothie
  - Other `-> go to list of food in alphabetical order`

- I love it. Bon appétit. Call me when you need!

`[sum to food:meal]`
- Hey did you like the `{last-meal}`?
  - Yes
  - No

  `Yes:`
  - Nice!

  `No:`
  - Oh! I'm sure next time you will like it better.

---

Planning
===

---

Body
===

Health
---

**Checkup**

Exercise
---

Sleep
---

---

Knowledge
===

---

  