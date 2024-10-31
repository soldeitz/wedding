import { Form } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRemixForm } from "remix-hook-form";
import { Guest, GuestSchema } from "~/utility";
import ErrorMessage from "~/components/lib/ErrorMessage";

const resolver = zodResolver(GuestSchema);

const RsvpForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useRemixForm<Guest>({
    mode: "onSubmit",
    resolver,
  });

  return (
    <Form
      className="bg-slate-200 rounded-lg shadow-lg text-primary p-4 flex flex-col"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-start items-stretch">
          <label htmlFor="first_name" className="text-md">
            Nome *
          </label>
          <input
            id="first_name"
            type="text"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("first_name")}
          />
          <ErrorMessage error={errors.first_name} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="last_name" className="text-md">
            Cognome *
          </label>
          <input
            id="last_name"
            type="text"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("last_name")}
          />
          <ErrorMessage error={errors.last_name} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="allergies" className="text-md">
            Allergie
          </label>
          <input
            id="allergies"
            type="text"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("allergies")}
          />
          <ErrorMessage error={errors.allergies} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="children" className="text-md">
            Figli 0-3 anni *
          </label>
          <input
            id="children"
            type="number"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("children_0_3", { valueAsNumber: true })}
          />
          <ErrorMessage error={errors.children_0_3} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="children" className="text-md">
            Figli 3-9 anni *
          </label>
          <input
            id="children"
            type="number"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("children_3_9", { valueAsNumber: true })}
          />
          <ErrorMessage error={errors.children_3_9} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="children" className="text-md">
            Figli 9+ anni *
          </label>
          <input
            id="children"
            type="number"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("children_9", { valueAsNumber: true })}
          />
          <ErrorMessage error={errors.children_9} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="notes" className="text-md">
            Note
          </label>
          <input
            id="notes"
            type="text"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("notes")}
          />
          <ErrorMessage error={errors.notes} />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="is_present" className="text-md">
            Ci sarai? *
          </label>
          <select
            id="is_present"
            className="input input-bordered w-full md:max-w-xs font-sans font-light"
            {...register("is_present", {
              setValueAs: (value) =>
                value === "" ? undefined : value === "true",
            })}
          >
            <option value="">-- Seleziona opzione --</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          <ErrorMessage error={errors.is_present} />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="btn btn-primary text-bold text-lg text-white"
          type="submit"
        >
          Invia
        </button>
      </div>
    </Form>
  );
};

export default RsvpForm;
