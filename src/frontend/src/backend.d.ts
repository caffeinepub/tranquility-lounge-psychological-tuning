import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface EnergyLevel {
    date: string;
    rating: bigint;
}
export interface EmergencyContact {
    relationship: string;
    name: string;
    phoneNumber: string;
}
export interface RegulationRating {
    afterReset: bigint;
    beforeReset: bigint;
}
export interface SleepQuality {
    date: string;
    rating: bigint;
}
export interface UserData {
    sleepQuality: Array<SleepQuality>;
    personalizedPlan: PersonalizedPlan;
    focusReadiness: Array<FocusReadiness>;
    analyticsConsent: boolean;
    habitCompletions: Array<HabitCompletion>;
    textSize: bigint;
    emergencyContacts: Array<EmergencyContact>;
    regulationRatings: Array<RegulationRating>;
    energyLevels: Array<EnergyLevel>;
    highContrast: boolean;
    userProfile: UserProfile;
    favoriteTools: Array<FavoriteTool>;
}
export interface FavoriteTool {
    category: ToolPreference;
    toolName: string;
}
export interface PersonalizedPlan {
    weeklyReviewPrompt: string;
    dailyRoutines: Array<string>;
    resetSequence: Array<ResetPlanStep>;
    toolPreferences: Array<ToolPreference>;
    reminders: Array<string>;
}
export interface HabitCompletion {
    habitName: string;
    completed: boolean;
}
export interface FocusReadiness {
    date: string;
    rating: bigint;
}
export interface ResetPlanStep {
    microAction: string;
    coreQuestion: string;
    environmentAdjustment?: string;
    name: string;
    regulationTool: ToolPreference;
}
export interface UserProfile {
    goalFocus: GoalFocus;
    resetPlan: Array<ResetPlanStep>;
    preferredTools: Array<ToolPreference>;
    escalationPatterns: Array<EscalationPattern>;
}
export enum EscalationPattern {
    irritability = "irritability",
    overthinking = "overthinking",
    shutdownFreeze = "shutdownFreeze",
    racingMind = "racingMind",
    emotionalEating = "emotionalEating",
    sensoryOverload = "sensoryOverload",
    difficultySleeping = "difficultySleeping",
    procrastinationAvoidance = "procrastinationAvoidance"
}
export enum GoalFocus {
    eatingRegulation = "eatingRegulation",
    productivity = "productivity",
    sleepRoutine = "sleepRoutine",
    emotionalSteadiness = "emotionalSteadiness",
    stressRegulation = "stressRegulation",
    confidence = "confidence"
}
export enum ToolPreference {
    breath = "breath",
    sensoryAnchors = "sensoryAnchors",
    habitTracking = "habitTracking",
    audioGuidance = "audioGuidance",
    journalingPrompts = "journalingPrompts"
}
export interface backendInterface {
    deleteUserData(): Promise<void>;
    getAllPersonalizedPlans(): Promise<Array<PersonalizedPlan>>;
    getAllUserProfiles(): Promise<Array<UserProfile>>;
    getEnergyLevels(): Promise<Array<EnergyLevel>>;
    getFocusReadiness(): Promise<Array<FocusReadiness>>;
    getHabitCompletions(): Promise<Array<HabitCompletion>>;
    getRegulationRatings(): Promise<Array<RegulationRating>>;
    getSleepQuality(): Promise<Array<SleepQuality>>;
    getUserData(): Promise<UserData | null>;
    saveUserData(userProfileInput: UserProfile, personalizedPlanInput: PersonalizedPlan, regulationRatingsInput: Array<RegulationRating>, sleepQualityInput: Array<SleepQuality>, focusReadinessInput: Array<FocusReadiness>, energyLevelsInput: Array<EnergyLevel>, habitCompletionsInput: Array<HabitCompletion>, favoriteToolsInput: Array<FavoriteTool>, emergencyContactsInput: Array<EmergencyContact>, textSize: bigint, highContrast: boolean, analyticsConsent: boolean): Promise<void>;
    updateEmergencyContacts(emergencyContactsInput: Array<EmergencyContact>): Promise<void>;
    updateFavoriteTools(favoriteToolsInput: Array<FavoriteTool>): Promise<void>;
}
