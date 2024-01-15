"use client";
import { dburl, loginname, loginpass } from "@/app/db";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const env = process.env.NODE_ENV;
export const useGetDatabaseValue = (key: string, bypassPermission = false) => {
  let fallback = useSearchParams().get(key);

  const [value, setValue] = useState<any>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const headers = new Headers();
      headers.append(
        "Authorization",
        "Basic " + btoa(loginname + ":" + loginpass)
      );

      if (env == "development") {
        const requestPermission = new Request(dburl + "woz", {
          headers,
          method: "GET",
          cache: "no-store",
        });
        const permissionResponse = fetch(requestPermission);
        permissionResponse
          .then((x) => {
            x.json()
              .then((y) => {
                if (key === "woz") setValue(() => y.value);
                else if (y.value === false && !bypassPermission) {
                  setValue(() => fallback);
                } else {
                  const request = new Request(dburl + key, {
                    headers,
                    method: "GET",
                    cache: "no-store",
                  });
                  const response = fetch(request);
                  response
                    .then((z) => {
                      z.json()
                        .then((w) => setValue(() => w.value))
                        .catch((reason) =>
                          console.log(`Failed to parse to json : ${reason}`)
                        );
                    })
                    .catch((reason) =>
                      console.log(`Failed to query couchdb : ${reason}`)
                    );
                }
              })
              .catch((e) =>
                console.log("Failed to parse json to get permission : ", e)
              );
          })
          .catch((e) => console.log("Failed to fetch permission : ", e));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bypassPermission, fallback, key]);

  return value ?? fallback;
};

const getDatabaseObject = (key: string) =>
  new Promise<object>((resolve, reject) => {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + btoa(loginname + ":" + loginpass)
    );

    if (env == "development") {
      const request = new Request(dburl + key, {
        headers,
        method: "GET",
        cache: "no-store",
      });

      const response = fetch(request);
      response
        .then((x) => {
          x.json()
            .then((y) => {
              resolve(y);
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
  });

export const setDatabaseValue = (key: string, value: string | boolean) => {
  if (env == "development") {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append(
        "Authorization",
        "Basic " + btoa(loginname + ":" + loginpass)
      );
      headers.append("Content-type", "application/json");
      getDatabaseObject(key)
        .then((x) => {
          let message = { value: value };

          if ("_rev" in x) {
            //@ts-expect-error
            message["_rev"] = x._rev;
          }
          //@ts-expect-error
          message["_id"] = x._id;
          console.log("Get Response : ", x);
          const request = new Request(dburl + key, {
            headers,
            method: "PUT",
            body: JSON.stringify(message),
            cache: "no-store",
          });
          const response = fetch(request);
          response
            .then((x) => {
              x.json()
                .then((y) => resolve(y))
                .catch((reason) => {
                  console.log(`Failed to parse to json : ${reason}`);
                  reject(reason);
                });
            })
            .catch((reason) => {
              console.log(`Failed to query couchdb : ${reason}`);
              reject(reason);
            });
        })
        .catch((e) => {
          console.log(
            "Failed to fetch data from DB. Aborting PUT method. Reason : ",
            e
          );
          reject(e);
        });
    });
  } else {
    return new Promise((resolve) =>
      resolve("Can not set database value on prod")
    );
  }
};

export const createDB = () => {
  const headers = new Headers();
  headers.append("Authorization", "Basic " + btoa(loginname + ":" + loginpass));
  const request = new Request(dburl, {
    headers,
    method: "PUT",
    cache: "no-store",
  });
  return new Promise((resolve, reject) =>
    fetch(request)
      .then((x) => resolve(x))
      .catch((x) => reject(x))
  );
};
