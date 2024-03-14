import React from "react";

export default function login(props: any) {
  let light = props.light;
  return (
    <div>
      <div
        className={`h-[100vh] w-[100vw] flex justify-center align-center ${
          light
            ? "bg-gradient-to-b from-zinc-100 to-zinc-300"
            : "bg-black text-white"
        }`}
      >
        <form
          className={`flex flex-col justify-center items-end ${
            light ? "text-black" : "text-white"
          }`}
        >
          <label className="p-2">
            Email
            <input className="text-black ml-2" type="email" />
          </label>
          <label className="p-2">
            pasword
            <input className="text-black ml-2" type="password" />
          </label>

          <input className="p-2 border-2" type="submit" value="login" />
        </form>
      </div>
    </div>
  );
}
