import { gql } from "@apollo/client";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Auth, Maybe, User } from "../generated";
import { client } from "../modules/apollo";

interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  regencyId: string;
  provinceId: string;
  phoneNumber: string;
  address: string;
  nrg?: string;
  nisn?: string;
}

interface UserState {
  user?: Maybe<User>;
  setUser: (user?: User) => void;

  token?: Maybe<string>;

  login: (e: LoginPayload) => void;
  logout: () => void;
  register: (e: RegisterPayload) => void;
  validateEmail: (e: Pick<RegisterPayload, "email">) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      setUser: (user?: User) => set(() => ({ user })),
      register: async (e) => {
        const { data } = await client.mutate<{ register: Auth }>({
          mutation: gql`
            mutation Register(
              $email: String!
              $password: String!
              $name: String!
              $provinceId: String!
              $regencyId: String!
              $role: Roles!
              $address: String
              $nrg: String
              $nisn: String
              $phoneNumber: String!
              $schoolId: String
            ) {
              register(
                email: $email
                password: $password
                name: $name
                provinceId: $provinceId
                regencyId: $regencyId
                role: $role
                address: $address
                nrg: $nrg
                nisn: $nisn
                phoneNumber: $phoneNumber
                schoolId: $schoolId
              ) {
                token
                success
                message
                user {
                  id
                  name
                  email
                  address
                  profilePicturePath
                  createdAt
                  updatedAt
                  emailVerifiedAt
                  phoneNumberVerifiedAt
                  identityNumberVerifiedAt
                }
              }
            }
          `,
          variables: e,
        });

        if (!data) return;

        const { register } = data;

        if (!register.success || !register.user) {
          throw Error(register.message ?? "Undefined Error");
        }

        set({
          user: register.user,
          token: register.token,
        });
      },
      login: async (e) => {
        const { data } = await client.mutate<{ login: Auth }>({
          mutation: gql`
            mutation Login($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
                success
                message
                user {
                  id
                  name
                  email
                  address
                  profilePicturePath
                  createdAt
                  updatedAt
                  emailVerifiedAt
                  phoneNumberVerifiedAt
                  identityNumberVerifiedAt
                }
              }
            }
          `,
          variables: e,
        });

        if (!data) return;

        const { login } = data;

        if (!login.success || !login.user) {
          throw Error(login.message ?? "Undefined Error");
        }

        set({
          user: login.user,
          token: login.token,
        });
      },
      validateEmail: async (e) => {
        const { data } = await client.mutate<{ validate: Auth }>({
          mutation: gql`
            mutation Validate($email: String!) {
              validate(email: $email) {
                success
                message
              }
            }
          `,
          variables: { email: e.email },
        });
        if (!data) return;

        const { validate } = data;

        if (!validate.success) {
          throw Error(validate.message ?? "Undefined Error");
        }
      },
      logout: () => {
        set({ user: undefined, token: undefined });
        window.location.replace("/dashboard");
      },
    }),
    {
      name: "user-storage", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
