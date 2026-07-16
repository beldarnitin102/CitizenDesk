import AuthLeft from "./AuthLeft";

const AuthLayout = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="min-h-screen bg-[#F8FAFC]">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left */}

        <AuthLeft />

        {/* Right */}

        <div className="flex flex-1 items-center justify-center px-6 py-12">

          <div className="w-full max-w-md">

            <h1 className="text-4xl font-bold text-[var(--heading)]">
              {title}
            </h1>

            <p className="mt-3 text-[15px] leading-7 text-[var(--body)]">
              {subtitle}
            </p>

            <div className="mt-10">
              {children}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AuthLayout;