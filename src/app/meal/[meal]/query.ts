"use client";
import { dburl, loginname, loginpass } from "@/app/db";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const env = process.env.NODE_ENV;
export const useGetDatabaseValue = (key: string) => {
  let fallback = useSearchParams().get(key);
  return fallback;
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const headers = new Headers();
      headers.append(
        "Authorization",
        "Basic " + btoa(loginname + ":" + loginpass)
      );

      if (env == "development") {
        const request = new Request(dburl + key, {
          headers,
          method: "GET",
        });
        const response = fetch(request);
        response
          .then((x) => {
            x.json()
              //.then((y) => setValue((_) => y.value))
              .catch((reason) =>
                console.log(`Failed to parse to json : ${reason}`)
              );
          })
          .catch((reason) =>
            console.log(`Failed to query couchdb : ${reason}`)
          );
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return value ?? fallback;
};

export const getDatabaseValue = (key: string, fullObject: boolean = false) =>
  new Promise((resolve, reject) => {
    let result = undefined;
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + btoa(loginname + ":" + loginpass)
    );

    if (env == "development") {
      const request = new Request(dburl + key, {
        headers,
        method: "GET",
      });

      const response = fetch(request);
      response
        .then((x) => {
          x.json()
            .then((y) => {
              resolve(fullObject ? y : y.value);
            })
            .catch((reason) => {
              console.log(`Failed to parse to json : ${reason}`);
              reject(reason);
            });
        })
        .catch((reason) => {
          console.log(`Failed to query couchdb : ${reason}`);
          reject(reason);
        });
    }
    reject("Should not reach here");
  });

export const setDatabaseValue = (key: string, value: object | string) => {
  if (env == "development") {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + btoa(loginname + ":" + loginpass)
    );
    headers.append("Content-type", "application/json");
    const request = new Request(dburl + key, {
      headers,
      method: "PUT",
      body: JSON.stringify(
        typeof value === "object" ? value : { _id: key, value }
      ),
    });
    const response = fetch(request);
    response
      .then((x) => {
        x.json().catch((reason) =>
          console.log(`Failed to parse to json : ${reason}`)
        );
      })
      .catch((reason) => console.log(`Failed to query couchdb : ${reason}`));
  }
};
