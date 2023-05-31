import { supabase } from "./supabase";

export const getUser = async (userId: string) => {
  const { data, error } = await supabase
    .from("User")
    .select(
      `
      id,
      email,
      firstName,
      lastName,
      middleName,
      phone,
      birthday,
      separatedSubdivisionId,
      isMembershipActive,
      membershipType,
      fullName,
      SeparatedSubdivision(name)
      `
    )
    .eq("clerkId", userId)
    .single();

  if (error) {
    throw error;
  }

  return {
    ...data,
    separatedSubdivision: data?.SeparatedSubdivision,
    activityTypes: [],
  };
};

export type User = Awaited<ReturnType<typeof getUser>>;
