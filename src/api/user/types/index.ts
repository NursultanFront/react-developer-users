export type User = {
  id: number;
  name: string;
  email: string;
  permissions: string[];
  image: string;
  isActivated?: boolean;
};

export type NewUser = Pick<User, "email" | "permissions">;
