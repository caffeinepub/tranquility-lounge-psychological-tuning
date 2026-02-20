import Map "mo:core/Map";
import Principal "mo:core/Principal";

module {
  type GoalFocus = {
    #stressRegulation;
    #sleepRoutine;
    #productivity;
    #emotionalSteadiness;
    #eatingRegulation;
    #confidence;
  };

  type EscalationPattern = {
    #racingMind;
    #irritability;
    #shutdownFreeze;
    #procrastinationAvoidance;
    #overthinking;
    #sensoryOverload;
    #emotionalEating;
    #difficultySleeping;
  };

  type ToolPreference = {
    #breath;
    #audioGuidance;
    #journalingPrompts;
    #habitTracking;
    #sensoryAnchors;
  };

  type ResetPlanStep = {
    name : Text;
    regulationTool : ToolPreference;
    coreQuestion : Text;
    microAction : Text;
    environmentAdjustment : ?Text;
  };

  type RegulationRating = {
    beforeReset : Nat;
    afterReset : Nat;
  };

  type SleepQuality = {
    date : Text;
    rating : Nat;
  };

  type FocusReadiness = {
    date : Text;
    rating : Nat;
  };

  type EnergyLevel = {
    date : Text;
    rating : Nat;
  };

  type HabitCompletion = {
    habitName : Text;
    completed : Bool;
  };

  type FavoriteTool = {
    toolName : Text;
    category : ToolPreference;
  };

  type EmergencyContact = {
    name : Text;
    phoneNumber : Text;
    relationship : Text;
  };

  type UserProfile = {
    goalFocus : GoalFocus;
    escalationPatterns : [EscalationPattern];
    preferredTools : [ToolPreference];
    resetPlan : [ResetPlanStep];
  };

  type PersonalizedPlan = {
    dailyRoutines : [Text];
    resetSequence : [ResetPlanStep];
    toolPreferences : [ToolPreference];
    reminders : [Text];
    weeklyReviewPrompt : Text;
  };

  type UserData = {
    userProfile : UserProfile;
    personalizedPlan : PersonalizedPlan;
    regulationRatings : [RegulationRating];
    sleepQuality : [SleepQuality];
    focusReadiness : [FocusReadiness];
    energyLevels : [EnergyLevel];
    habitCompletions : [HabitCompletion];
    favoriteTools : [FavoriteTool];
    emergencyContacts : [EmergencyContact];
    textSize : Nat;
    highContrast : Bool;
    analyticsConsent : Bool;
  };

  // Old types (with timeWindows present)
  type OldDailyTimeWindow = {
    morningStart : Nat;
    morningEnd : Nat;
    middayStart : Nat;
    middayEnd : Nat;
    eveningStart : Nat;
    eveningEnd : Nat;
  };

  type OldUserProfile = {
    goalFocus : GoalFocus;
    escalationPatterns : [EscalationPattern];
    preferredTools : [ToolPreference];
    timeWindows : OldDailyTimeWindow;
    resetPlan : [ResetPlanStep];
  };

  type OldUserData = {
    userProfile : OldUserProfile;
    personalizedPlan : PersonalizedPlan;
    regulationRatings : [RegulationRating];
    sleepQuality : [SleepQuality];
    focusReadiness : [FocusReadiness];
    energyLevels : [EnergyLevel];
    habitCompletions : [HabitCompletion];
    favoriteTools : [FavoriteTool];
    emergencyContacts : [EmergencyContact];
    textSize : Nat;
    highContrast : Bool;
    analyticsConsent : Bool;
  };

  type OldActor = {
    users : Map.Map<Principal, OldUserData>;
  };

  type NewActor = {
    users : Map.Map<Principal, UserData>;
  };

  public func run(old : OldActor) : NewActor {
    let newUsers = old.users.map<Principal, OldUserData, UserData>(
      func(_princ, oldUserData) {
        let newUserProfile : UserProfile = {
          goalFocus = oldUserData.userProfile.goalFocus;
          escalationPatterns = oldUserData.userProfile.escalationPatterns;
          preferredTools = oldUserData.userProfile.preferredTools;
          resetPlan = oldUserData.userProfile.resetPlan;
        };
        {
          oldUserData with
          userProfile = newUserProfile;
        };
      }
    );
    { users = newUsers };
  };
};
