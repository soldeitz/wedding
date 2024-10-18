type ErrorMessageProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    error && (
      <span className="text-error text-sm mt-1 font-bold font-sans">
        {error.message}
      </span>
    )
  );
}
