# Specification

## Summary
**Goal:** Remove reminder time configuration from the onboarding flow and plan settings.

**Planned changes:**
- Remove the time windows selection step from onboarding (reducing from 5 steps to 4 steps)
- Remove time window data fields from onboarding state management
- Remove the RemindersConfig component from the Plan page
- Remove timeWindows fields from backend UserProfile type and related logic

**User-visible outcome:** Users will no longer configure morning/midday/evening reminder times during onboarding or in plan settings. The onboarding flow will be streamlined to 4 steps, and the Plan page will show only Reset Sequence, Tool Preferences, and Daily Routines sections.
