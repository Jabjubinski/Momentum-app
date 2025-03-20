import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller } from "react-hook-form";
import trashIcon from "../../../assets/trash.png";
import uploadImage from "../../../assets/upload-image.png";
import clsx from "clsx";

export default function UploadAvatar({
  control,
  name,
  title,
  disabled = false,
  required = false,
}) {
  const [preview, setPreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        setIsUploaded(true);
      }
    },
  });

  const onDrop = useCallback((acceptedFiles, onChange) => {
    onChange(acceptedFiles); // Store the files in the form
  }, []);

  const handleRemove = () => {
    setPreview(null);
    setIsUploaded(false);
  };

  return (
    <div className="flex flex-col gap-[4px]">
      <label className="text-firago font-[400] text-[16px] leading-[100%]">
        {title} {required && "*"}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <div
            {...getRootProps()}
            className={clsx(
              "border-dashed h-[120px] flex justify-center items-center border-2 border-gray-300 p-4 rounded-md text-center",
              isUploaded ? "cursor-default" : "cursor-pointer"
            )}
          >
            <input
              disabled={disabled || isUploaded}
              required={required}
              {...getInputProps({
                onChange: (e) => {
                  if (e.target.files) {
                    onDrop(Array.from(e.target.files), onChange);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                    setIsUploaded(true);
                  }
                },
              })}
            />
            {preview ? (
              <div className="w-[88px] relative h-[88px] rounded-full">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-full w-full rounded-full object-cover"
                />
                <button
                  onClick={handleRemove}
                  type="button"
                  className="absolute cursor-pointer z-50 flex justify-center items-center bottom-0 right-0 w-[24px] bg-[#FFFFFF] h-[24px] rounded-[30px] border-[0.3] boder-[#6C757D]"
                >
                  <img
                    src={trashIcon}
                    alt="Trash"
                    className="w-[14px] h-[14px] object-cover"
                  />
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center gap-[5px] items-center">
                <img
                  src={uploadImage}
                  alt="upload"
                  className="w-[34px] object-cover h-[34px]"
                />
                <p className="font-firago font-[400] text-[14px] leading-[100%]">
                  ატვირთე ფოტო
                </p>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}
