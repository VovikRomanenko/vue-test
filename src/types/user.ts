export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  avatarUrl: string;
};

export type UserState = {
  user: User | null;
  isLoading: boolean;
};
