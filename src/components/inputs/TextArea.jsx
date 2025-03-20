import clsx from "clsx";
import { Controller } from "react-hook-form";

export default function TextArea({
  title,
  placeholder,
  name,
  disabled = false,
  required = false,
  control,
  min = 0,
  watch,
  max = 255,
}) {
  const value = watch(name);
  return (
    <div className="flex flex-col gap-[10px]">
      <label
        className={clsx(
          "text-firago font-[400] text-[16px] leading-[100%]",
          disabled ? "text-[#ADB5BD]" : "text-[#343A40]"
        )}
      >
        {title} {required && "*"}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            placeholder={placeholder}
            minLength={min}
            maxLength={max}
            required={required}
            disabled={disabled}
            className="text-firago h-[133px] min-h-[133px] max-h-[133px] text-[300] text-[14px] leading-[100%] bg-[#FFFFFF] border-[1px] border-[#DEE2E6] p-[14px] gap-[10px] rounded-[5px] focus:outline-[#8338EC]"
          />
        )}
      />
      <div className="flex flex-col gap-[4px]">
        <p
          className={clsx(
            "font-firago font-[350] flex items-center gap-[1px] text-[10px] leading-[100%]",
            value.length < min && value.length != 0 && "text-[#FA4D4D]",
            value.length < min && value.length == 0 && "text-[#6C757D]",
            value.length >= min && value.length != 0 && "text-[#08A508]"
          )}
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3327 1L4.99935 8.33333L1.66602 5"
              stroke={clsx(
                value.length < min && value.length != 0 && "#FA4D4D",
                value.length < min && value.length == 0 && "#6C757D",
                value.length >= min && value.length != 0 && "#08A508"
              )}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>მინიმუმ {min} სიმბოლო </span>
        </p>
        <p
          className={clsx(
            "font-firago font-[350] flex items-center gap-[1px]  text-[10px] leading-[100%]",
            value.length > max && value.length != 0 && "text-[#FA4D4D]",
            value.length < max && value.length == 0 && "text-[#6C757D]",
            value.length <= max && value.length != 0 && "text-[#08A508]"
          )}
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3327 1L4.99935 8.33333L1.66602 5"
              stroke={clsx(
                value.length > max && value.length != 0 && "#FA4D4D",
                value.length < max && value.length == 0 && "#6C757D",
                value.length <= max && value.length != 0 && "#08A508"
              )}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          მაქსიმუმ {max} სიმბოლო
        </p>
      </div>
    </div>
  );
}
