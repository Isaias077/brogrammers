""
import CreateUserUC from "@/app/Http/UserRepository/services/createUserUC";
import UserRepository from "../../Http/UserRepository";
import React from "react";

async function UserComponent() {
  const data =  await CreateUserUC()

  return (
    <ul role="list" className="divide-y bg-slate-950">
      {data.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={person.photo}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-slate-50">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-slate-400">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.profession}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen{"yesterday "}
                <time dateTime={person.birthday}>
                  {person.birthday}
                </time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserComponent;
