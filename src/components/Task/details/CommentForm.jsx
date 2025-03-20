import { useDispatch } from "react-redux";
import { postComment } from "../../../redux/thunks/commentsThunk";
import { useForm } from "react-hook-form";

export default function CommentForm({ taskId, parent_id, customOnSubmit }) {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(
      postComment({
        data: {
          text: data.text,
          taskId: taskId,
          parent_id: parent_id,
        },
      })
    );
    reset({
      text: "",
    });
    if (customOnSubmit) {
      customOnSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-[18px] w-full pb-[15px] px-[20px] rounded-[10px] border-[0.3px] border-[#ADB5BD] bg-[#FFFFFF] flex flex-col gap-[30px]"
    >
      <textarea
        {...register("text", { required: true })}
        placeholder="დაწერე კომენტარი"
        className="border-0 outline-0 placeholder:text-[#898989] font-firago text-[14px] font-[350] leading-[100%]"
      />
      <div className="flex justify-end items-center">
        <button
          type="submit"
          className="rounded-[20px] cursor-pointer px-[20px] py-[8px] bg-[#8338EC] font-firago font-[400] text-[#FFFFFF] text-[16px]"
        >
          დააკომენტარე
        </button>
      </div>
    </form>
  );
}
