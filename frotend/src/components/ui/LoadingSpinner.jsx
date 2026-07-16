const LoadingSpinner = ({
  size = 40,
}) => {
  return (
    <div className="flex justify-center">

      <div
        style={{
          width: size,
          height: size,
        }}
        className="animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--primary)]"
      />

    </div>
  );
};

export default LoadingSpinner;