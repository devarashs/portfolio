export interface UserInfo {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface UserState {
  userInfo: UserInfo | null;
}

export type CustomError = {
  message: string;
  response?: {
    data:
      | {
          message: string;
        }
      | undefined;
  };
};
