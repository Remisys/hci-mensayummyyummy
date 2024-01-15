"use client";

import { profiles } from "../db";
import {
  createDB,
  setDatabaseValue,
  useGetDatabaseValue,
} from "../meal/[meal]/query";

export const Wizard = () => {
  const woz = useGetDatabaseValue("woz", true);
  const user = useGetDatabaseValue("user", true);
  const vegetarian = useGetDatabaseValue("vegetarian", true);
  const vegan = useGetDatabaseValue("vegan", true);

  return (
    <div className="flex flex-col gap-5 px-10 py-10 max-w-[800px]">
      <h1>
        MensaYummyYummy WOZ Interface{" "}
        <span className="font-bold">
          (yarn run dev only i.e. development only){" "}
        </span>
      </h1>
      <form>
        <input
          type="button"
          value="Create DB"
          id="create"
          className="border border-black border-solid px-3 py-3 hover:bg-gray-300"
          onClick={async (_) => await createDB()}
        />
        <br />
      </form>
      <div className="border border-black border-solid px-3 py-3">
        <h1>
          <span className="font-bold">
            Please be patient and let the UI UPDATE FIRST BEFORE you proceed to
            modify or type again. This means typing one by one slowly for text
            inputs
          </span>
        </h1>
      </div>

      <form className="flex flex-col gap-5">
        <div className="border border-black border-solid px-3 py-3">
          Enable Wizard of Oz?
          <input
            onChange={async (e) =>
              await setDatabaseValue("woz", e.target.checked)
            }
            checked={woz}
            type="checkbox"
            className="border ml-5 border-black border-solid"
          />
        </div>
        <div className="border border-black border-solid px-3 py-3">
          <h3>
            Supported Profiles : {Object.keys(profiles).toString()}.
            <div className="font-bold">
              Giving a value other than this profile will result in not logging
              in
            </div>
          </h3>
          User
          <input
            onChange={async (e) =>
              await setDatabaseValue("user", e.target.value)
            }
            value={user}
            className="border ml-5 border-black border-solid"
          />
        </div>

        <div className="border border-black border-solid px-3 py-3">
          Vegetarian?
          <input
            onChange={async (e) =>
              await setDatabaseValue("vegetarian", e.target.checked)
            }
            checked={vegetarian}
            type="checkbox"
            className="border ml-5 border-black border-solid"
          />
        </div>

        <div className="border border-black border-solid px-3 py-3">
          Vegan?
          <input
            onChange={async (e) =>
              await setDatabaseValue("vegan", e.target.checked)
            }
            checked={vegan}
            type="checkbox"
            className="border ml-5 border-black border-solid"
          />
        </div>
      </form>
      <br />
    </div>
  );
};
