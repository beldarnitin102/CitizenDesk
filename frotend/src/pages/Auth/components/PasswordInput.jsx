import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

const PasswordInput = ({
  value,
  onChange,
  placeholder = "Enter password",
  name = "password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[var(--heading)]">
        Password
      </label>

      <div className="relative">

        <FiLock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            h-14
            w-full
            rounded-xl
            border
            border-[var(--border)]
            bg-white
            pl-12
            pr-14
            outline-none
            transition
            focus:border-[var(--primary)]
            focus:ring-4
            focus:ring-blue-100
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? (
            <FiEyeOff size={20} />
          ) : (
            <FiEye size={20} />
          )}
        </button>

      </div>
    </div>
  );
};

export default PasswordInput;