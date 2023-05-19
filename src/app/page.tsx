"use client";

import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import Alert from "./components/Alert";
import Form from "./components/Form";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isUrlValid, setIsUrlValid] = useState<boolean>();

  const alert = () => {
    if (url === "") {
      return null;
    }

    if (isUrlValid === false) {
      return <Alert message="L'url saisie est invalide" type="error" />;
    }

    return <Alert message="L'url saisie est valide" type="success" />;
  };

  const ping = useMemo(
    () =>
      debounce(async (url: string) => {
        try {
          const response = await fetch(url, {
            method: "HEAD",
            mode: "no-cors",
          });
          setIsUrlValid(response.status === 200 || response.status === 0);
        } catch (error) {
          setIsUrlValid(false);
        }
      }, 500),
    []
  );

  useEffect(() => {
    if (url === "") {
      return;
    }

    ping(url);
  }, [url, ping]);

  return (
    <>
      <Form url={url} setUrl={setUrl} />
      <hr className="w-full h-1 mt-12 mb-12 bg-colorHr border-none shadow" />
      {alert()}
    </>
  );
}
