import { Controller } from "react-hook-form";
import Select, { components } from "react-select";

import clsx from "clsx";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontFamily: "var(--font-firago)",
    fontWeight: 350,
    fontSize: "14px",
    lineHeight: "100%",
    cursor: state.isDisabled ? "not-allowed" : "default",
    backgroundColor: "#FFFFFF",
    padding: "5px",
    borderRadius: state.menuIsOpen ? "5px 5px 0px 0px" : "5px",
    borderWidth: state.menuIsOpen ? "1px 1px 0px 1px" : "1px",
    borderStyle: "solid",
    borderColor: state.menuIsOpen ? "#8338EC" : "#DEE2E6",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.menuIsOpen ? "#8338EC" : "#DEE2E6",
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    fontFamily: "var(--font-firago)",
    fontWeight: 350,
    fontSize: "14px",
    height: "auto",
    lineHeight: "100%",
    borderRadius: "0px 0px 5px 5px",
    margin: 0,
    width: "100%",
    padding: "0px 10px",
    borderBottom: "1px",
    borderLeft: "1px",
    borderRight: "1px",
    borderStyle: "solid",
    borderColor: "#8338EC",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "var(--font-firago)",
    fontWeight: 350,
    fontSize: "14px",
    lineHeight: "100%",
    backgroundColor: "transparent",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "15px",
    paddingBottom: "15px",
    borderRadius: "5px",
    color: state.isSelected ? "#0D0F10" : "#0D0F10",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }),
};

const Option = (props) => {
  const { innerProps } = props;
  return (
    <components.Option {...props} {...innerProps}>
      <div className="flex items-center gap-2">
        {props.data.icon && (
          <img
            className="rounded-full w-[20px] h-[20px] object-cover"
            src={props.data.icon}
            alt=""
          />
        )}
        {props.data.label}
      </div>
    </components.Option>
  );
};

const SingleValue = (props) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-2">
        {props.data.icon && (
          <img
            className="rounded-full w-[20px] h-[20px] object-cover"
            src={props.data.icon}
            alt=""
          />
        )}
        {props.data.label}
      </div>
    </components.SingleValue>
  );
};

export default function CustomSelect({
  title,
  name,
  control,
  options,
  disabled = false,
  required = null,
  customOnChange,
  customButton,
}) {
  return (
    <div className="flex flex-col w-[100%] gap-[10px]">
      {title && (
        <label
          className={clsx(
            "text-firago font-[400] text-[16px] leading-[100%]",
            disabled ? "text-[#ADB5BD]" : "text-[#343A40]"
          )}
        >
          {title} {required && "*"}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={{ required: required?.toString() }}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            required={required ? true : false}
            isDisabled={disabled}
            styles={customStyles}
            placeholder=""
            components={{
              Option: (props) => (
                <>
                  {props.selectProps.menuIsOpen &&
                    props.data.value === options[0].value &&
                    customButton && (
                      <button
                        type="button"
                        className="w-full px-[5px] cursor-pointer py-2 flex gap-2 items-center text-[#8338EC]"
                        onClick={customButton}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.75"
                            y="0.75"
                            width="16.5"
                            height="16.5"
                            rx="8.25"
                            stroke="#8338EC"
                            stroke-width="1.5"
                          />
                          <path
                            d="M9.576 8.456H13.176V9.656H9.576V13.304H8.256V9.656H4.656V8.456H8.256V4.808H9.576V8.456Z"
                            fill="#8338EC"
                          />
                        </svg>
                        დაამატე თანამშრომელი
                      </button>
                    )}
                  <Option {...props} />
                </>
              ),
              SingleValue,
            }}
            value={
              field.value
                ? options.find((option) => option.value === field.value)
                : null
            }
            onChange={(option) => {
              field.onChange(option?.value);
              if (option && customOnChange) customOnChange(option.value);
            }}
          />
        )}
      />
    </div>
  );
}
