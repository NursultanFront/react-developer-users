export type User = {
  id: number;
  name: string;
  email: string;
  permissions: string[];
  image: string;
  isActivate: boolean;
};

export type NewUser = Pick<User, "email" | "permissions" | "isActivate">;
