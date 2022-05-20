import { client } from "modules/apollo";
import React from "react";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { VerificationResponse } from "generated";
import { useRouter } from "next/router";

export default function Type() {
  const [verified, setVerified] = useState(false);
  const [failed, setFailed] = useState("");

  const { push, query } = useRouter();

  useEffect(() => {
    if (query.id)
      client
        .mutate<{ confirmVerification: VerificationResponse }>({
          mutation: gql`
            mutation Mutation($type: VerifyType!, $key: String!) {
              confirmVerification(type: $type, key: $key) {
                status
                message
              }
            }
          `,
          variables: {
            type: "EMAIL",
            key: query.id,
          },
        })
        .then((res) => {
          if (res.data?.confirmVerification?.status) {
            setVerified(true);
            setTimeout(() => {
              push("/");
            }, 500);
          }

          setFailed(res.data?.confirmVerification?.message ?? "Error ...");
        });
  }, [query]);

  if (verified) return <>Email berhasil di verifikasi !</>;

  return <div>{failed ? failed : "Memverifikasi email ..."}</div>;
}
