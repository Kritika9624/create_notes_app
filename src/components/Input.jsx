import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { textarea, label, placeholder, type, error },
  ref
) {
  return (
    <p className="mb-4">
      <label className="block mb-2">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          className={`bg-slate200 w-full p-2 pl-4 placeholder:text-sm ${
            error && "border border-bgError"
          }`}
          placeholder={placeholder}
        />
      ) : (
        <input
          ref={ref}
          type={type}
          className={`bg-slate200 w-full p-2 pl-4 placeholder:text-sm ${
            error && "border border-bgError"
          }`}
          placeholder={placeholder}
        />
      )}
    </p>
  );
});
export default Input;
