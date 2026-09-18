import React from "react";
import { useForm } from "react-hook-form";

const FieldError = ({ error }) => (
  <div className="h-2 pt-1 text-xs text-red-600"> {error?.message} </div>
);

const inputClasses = (hasError) =>
  `border-b bg-transparent py-2 px-1 outline-none transition ${hasError ? "border-red-500 focus:border-red-600" : "border-olive-300 focus:border-olive-600"}`;

const Form = ({ toggle, setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", url: "", bio: "" },
  });

  const onSubmit = (data) => {
    const newUser = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      url: data.url.trim(),
      bio: data.bio.trim(),
    };
    setUsers((prev) => [...prev, newUser]);
    reset();
    toggle(true);
  };

  return (
    <div className="bg-white/90 py-8 px-8 sm:px-12 rounded-2xl shadow-2xl text-olive-600 w-full max-w-md min-h-100">
      <div className="mb-8">
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close form"
            className="text-2xl leading-none hover:text-black active:scale-95 transition cursor-pointer"
            onClick={() => toggle((prev) => !prev)}
          >
            ×
          </button>
        </div>
        <h1 className="text-3xl font-mono"> Create Your Card </h1>
      </div>
      <form
        className="flex flex-col gap-5 text-black"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 40,
                message: "Name cannot exceed 40 characters",
              },
              validate: (value) =>
                value.trim().length >= 2 || "Name cannot contain only spaces",
            })}
            className={`w-full ${inputClasses(errors.name)}`}
          />
          <FieldError error={errors.name} />
        </div>

        <div>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            {...register("url", {
              required: "Image URL is required",
              validate: (value) => {
                try {
                  const url = new URL(value.trim());
                  if (!["http:", "https:"].includes(url.protocol)) {
                    return "URL must start with http:// or https://";
                  }
                  return true;
                } catch {
                  return "Please enter a valid URL";
                }
              },
            })}
            className={`w-full ${inputClasses(errors.url)}`}
          />
          <FieldError error={errors.url} />
        </div>

        <div>
          <textarea
            id="bio"
            rows={3}
            placeholder="Write a short bio..."
            {...register("bio", {
              required: "Bio is required",
              minLength: {
                value: 10,
                message: "Bio must be at least 10 characters",
              },
              maxLength: {
                value: 160,
                message: "Bio cannot exceed 160 characters",
              },
              validate: (value) =>
                value.trim().length >= 10 || "Bio cannot contain only spaces",
            })}
            className={`w-full resize-none ${inputClasses(errors.bio)}`}
          />
          <FieldError error={errors.bio} />
        </div>

        <button
          type="submit"
          className="mt-3 bg-olive-800 text-white py-3 rounded font-mono hover:bg-olive-900 transition active:scale-[0.99] cursor-pointer"
        >
          Create Card →
        </button>
      </form>
    </div>
  );
};
export default Form;
