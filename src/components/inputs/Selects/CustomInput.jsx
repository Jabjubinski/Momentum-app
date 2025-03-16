import React from "react";

const customStyles = (isFocused) => ({
  fontFamily: "var(--font-firago)",
  fontWeight: 350,
  fontSize: "14px",
  lineHeight: "100%",
  cursor: "default",
  backgroundColor: "#FFFFFF",
  padding: "14px",
  borderStyle: "solid",
  borderColor: isFocused ? "#8338EC" : "#DEE2E6",
  borderWidth: "1px",
  borderRadius: "5px",
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
});

export default function CustomInput({
  isDisable = false,
  placeholder,
  name,
  title,
  min = 0,
  max = 255,
  required = false,
}) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="flex flex-col items-start">
      {title && (
        <label htmlFor={name} className="font-[400] text-[14px] mb-1">
          {title} {required && "*"}
        </label>
      )}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={isDisable}
        required={required}
        min={min}
        max={max}
        style={customStyles(isFocused)}
        className="w-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
