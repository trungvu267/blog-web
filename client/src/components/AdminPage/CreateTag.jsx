import { Button, Input } from "react-daisyui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { createTagSchema } from "../../utils/schema";
import { TwitterPicker } from "react-color";
import { useCreateTag } from "../../hooks/tag.hook";
const CreateTag = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTagSchema),
  });
  const { handleCreateTag } = useCreateTag();
  //   TODO: xử lý logic ở đây
  // const handleCreateTag = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <form
          onSubmit={handleSubmit(handleCreateTag)}
          className="w-[640px] rounded-lg border p-10 pt-3 flex flex-col border-slate-300 bg-base-300 mx-auto"
        >
          <div className="mx-auto text-center mt-10 mb-5">
            <h2 className="text-3xl font-bold">Tạo danh mục bài viết mới</h2>
          </div>
          <div className="mb-1 gap-y-5  mx-auto justify-center  flex flex-col">
            <label className="font-medium text-xl">Tên danh mục</label>
            <Input {...register("name")} />
            <label className="my-0 py-0 text-red-500">
              {errors?.name?.message}
            </label>
          </div>
          <div className="ml-2 mx-0 mb-3 gap-y-5 justify-center  flex flex-col">
            <label className="font-medium text-xl">Màu chữ hiển thị</label>
            <Controller
              name="text_color"
              control={control}
              defaultValue="#ffffff"
              render={({ field }) => (
                <TwitterPicker
                  color={field.value}
                  onChange={(color) => field.onChange(color.hex)}
                />
              )}
            />
          </div>
          <div className="ml-2 mx-0 mb-3 gap-y-5 justify-center  flex flex-col">
            <label className="font-medium text-xl">Màu nền hiển thị</label>
            <Controller
              name="bg_color"
              control={control}
              defaultValue="#ffffff"
              render={({ field }) => (
                <TwitterPicker
                  color={field.value}
                  onChange={(color) => field.onChange(color.hex)}
                />
              )}
            />
          </div>

          {/* <Button className={"bg-primary"} loading={isLoading}> */}
          <Button className={"bg-primary"}>
            <span className="text-center p-3"> Xác nhận </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateTag;
// color={sceneColor}
// // styles={{ body: { body: { padding: 12, background: "red" } } }}
// onChange={(res) => {
//   setColorScene(res.hex);
// }}
