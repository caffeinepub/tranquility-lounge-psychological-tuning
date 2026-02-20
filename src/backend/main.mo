import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Migration "migration";

(with migration = Migration.run)
actor {
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

  let users = Map.empty<Principal, UserData>();

  public shared ({ caller }) func saveUserData(
    userProfileInput : UserProfile,
    personalizedPlanInput : PersonalizedPlan,
    regulationRatingsInput : [RegulationRating],
    sleepQualityInput : [SleepQuality],
    focusReadinessInput : [FocusReadiness],
    energyLevelsInput : [EnergyLevel],
    habitCompletionsInput : [HabitCompletion],
    favoriteToolsInput : [FavoriteTool],
    emergencyContactsInput : [EmergencyContact],
    textSize : Nat,
    highContrast : Bool,
    analyticsConsent : Bool,
  ) : async () {
    let userData : UserData = {
      userProfile = userProfileInput;
      personalizedPlan = personalizedPlanInput;
      regulationRatings = regulationRatingsInput;
      sleepQuality = sleepQualityInput;
      focusReadiness = focusReadinessInput;
      energyLevels = energyLevelsInput;
      habitCompletions = habitCompletionsInput;
      favoriteTools = favoriteToolsInput;
      emergencyContacts = emergencyContactsInput;
      textSize;
      highContrast;
      analyticsConsent;
    };
    users.add(caller, userData);
  };

  public query ({ caller }) func getUserData() : async ?UserData {
    users.get(caller);
  };

  public shared ({ caller }) func deleteUserData() : async () {
    users.remove(caller);
  };

  public query ({ caller }) func getAllUserProfiles() : async [UserProfile] {
    users.values().toArray().map(func(userData) { userData.userProfile });
  };

  public query ({ caller }) func getAllPersonalizedPlans() : async [PersonalizedPlan] {
    users.values().toArray().map(func(userData) { userData.personalizedPlan });
  };

  public shared ({ caller }) func updateFavoriteTools(favoriteToolsInput : [FavoriteTool]) : async () {
    let userData = switch (users.get(caller)) {
      case (null) { return };
      case (?userData) { userData };
    };
    let updatedUserData : UserData = {
      userProfile = userData.userProfile;
      personalizedPlan = userData.personalizedPlan;
      regulationRatings = userData.regulationRatings;
      sleepQuality = userData.sleepQuality;
      focusReadiness = userData.focusReadiness;
      energyLevels = userData.energyLevels;
      habitCompletions = userData.habitCompletions;
      favoriteTools = favoriteToolsInput;
      emergencyContacts = userData.emergencyContacts;
      textSize = userData.textSize;
      highContrast = userData.highContrast;
      analyticsConsent = userData.analyticsConsent;
    };
    users.add(caller, updatedUserData);
  };

  public shared ({ caller }) func updateEmergencyContacts(emergencyContactsInput : [EmergencyContact]) : async () {
    let userData = switch (users.get(caller)) {
      case (null) { return };
      case (?userData) { userData };
    };
    let updatedUserData : UserData = {
      userProfile = userData.userProfile;
      personalizedPlan = userData.personalizedPlan;
      regulationRatings = userData.regulationRatings;
      sleepQuality = userData.sleepQuality;
      focusReadiness = userData.focusReadiness;
      energyLevels = userData.energyLevels;
      habitCompletions = userData.habitCompletions;
      favoriteTools = userData.favoriteTools;
      emergencyContacts = emergencyContactsInput;
      textSize = userData.textSize;
      highContrast = userData.highContrast;
      analyticsConsent = userData.analyticsConsent;
    };
    users.add(caller, updatedUserData);
  };

  public query ({ caller }) func getRegulationRatings() : async [RegulationRating] {
    switch (users.get(caller)) {
      case (null) { [] };
      case (?userData) { userData.regulationRatings };
    };
  };

  public query ({ caller }) func getSleepQuality() : async [SleepQuality] {
    switch (users.get(caller)) {
      case (null) { [] };
      case (?userData) { userData.sleepQuality };
    };
  };

  public query ({ caller }) func getFocusReadiness() : async [FocusReadiness] {
    switch (users.get(caller)) {
      case (null) { [] };
      case (?userData) { userData.focusReadiness };
    };
  };

  public query ({ caller }) func getEnergyLevels() : async [EnergyLevel] {
    switch (users.get(caller)) {
      case (null) { [] };
      case (?userData) { userData.energyLevels };
    };
  };

  public query ({ caller }) func getHabitCompletions() : async [HabitCompletion] {
    switch (users.get(caller)) {
      case (null) { [] };
      case (?userData) { userData.habitCompletions };
    };
  };
};
