import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type {
  UserProfile,
  PersonalizedPlan,
  RegulationRating,
  SleepQuality,
  FocusReadiness,
  EnergyLevel,
  HabitCompletion,
  FavoriteTool,
  EmergencyContact,
  UserData,
} from '../backend';

export function useGetUserData() {
  const { actor, isFetching } = useActor();

  return useQuery<UserData | null>({
    queryKey: ['userData'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getUserData();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSaveUserData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      userProfile: UserProfile;
      personalizedPlan: PersonalizedPlan;
      regulationRatings: RegulationRating[];
      sleepQuality: SleepQuality[];
      focusReadiness: FocusReadiness[];
      energyLevels: EnergyLevel[];
      habitCompletions: HabitCompletion[];
      favoriteTools: FavoriteTool[];
      emergencyContacts: EmergencyContact[];
      textSize: bigint;
      highContrast: boolean;
      analyticsConsent: boolean;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.saveUserData(
        data.userProfile,
        data.personalizedPlan,
        data.regulationRatings,
        data.sleepQuality,
        data.focusReadiness,
        data.energyLevels,
        data.habitCompletions,
        data.favoriteTools,
        data.emergencyContacts,
        data.textSize,
        data.highContrast,
        data.analyticsConsent
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });
}

export function useUpdateFavoriteTools() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (favoriteTools: FavoriteTool[]) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.updateFavoriteTools(favoriteTools);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });
}

export function useUpdateEmergencyContacts() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (contacts: EmergencyContact[]) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.updateEmergencyContacts(contacts);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
  });
}

export function useGetRegulationRatings() {
  const { actor, isFetching } = useActor();

  return useQuery<RegulationRating[]>({
    queryKey: ['regulationRatings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRegulationRatings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDeleteUserData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.deleteUserData();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
      localStorage.clear();
    },
  });
}
