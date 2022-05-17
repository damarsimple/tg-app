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
      validateEmail: async (e) => {
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
              $phoneNumber: String
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
      register: async (e) => {
        const { data } = await client.mutate({
          mutation: gql`
            mutation Test {
              test {
                test
              }
            }
          `,
          variables: {},
        });
      },
      logout: () => {
        set({ user: undefined, token: undefined });
        window.location.replace("/");
      },
    }),
    {
      name: "food-storage", // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
