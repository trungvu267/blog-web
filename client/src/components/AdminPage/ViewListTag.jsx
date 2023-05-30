import { Button, Input } from "react-daisyui";
import ConfirmModal from "../ConfirmModal";
import useTag, { useDeleteTag, useUpdateTag } from "../../hooks/tag.hook";
import { register } from "../../api/auth.api";
import { Controller, useForm } from "react-hook-form";
import { TwitterPicker } from "react-color";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTagSchema } from "../../utils/schema";
const ViewListTag = () => {
  const { listTag } = useTag();
  // if (!listTag || listTag.length < 0) return;
  return (
    <div className="p-12 space-y-4 h-[80vh] overflow-y-scroll">
      {listTag.length > 0 &&
        listTag.map((tag) => <Tag key={tag._id} tag={tag} />)}
    </div>
  );
};

export default ViewListTag;

const Tag = ({ tag }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTagSchema),
  });
  const { mutation, handleDeleteTag } = useDeleteTag(tag._id);
  const { handleUpdateTag } = useUpdateTag(tag._id);

  return (
    <div className="flex flex-row space-x-2 bg-base-300 items-center p-2 rounded-sm">
      <div className="flex-1">{tag.name}</div>
      <ConfirmModal
        handleAccess={handleUpdateTag}
        textHeader={"Xác nhận sửa bài viết"}
        textBody={
          <div className="flex justify-center items-center w-full h-full">
            <div>
              <form
                onSubmit={handleSubmit(handleUpdateTag)}
                className="w-[500px] rounded-lg border p-10 pt-3 flex flex-col border-slate-300 bg-base-300 mx-auto"
              >
                <div className="mx-auto text-center mt-10 mb-5">
                  <h2 className="text-3xl font-bold">Sửa danh mục bài viết</h2>
                </div>
                <div className="mb-1 gap-y-5  mx-auto justify-center  flex flex-col">
                  <label className="font-medium text-xl">Tên danh mục</label>
                  <Input className="max-w-[400px]" {...register("name")} />
                  <label className="my-0 py-0 text-red-500">
                    {errors?.name?.message}
                  </label>
                </div>
                <div className="ml-2 mx-0 mb-3 gap-y-5 justify-center  flex flex-col">
                  <label className="font-medium text-xl">
                    Màu chữ hiển thị
                  </label>
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
                  <label className="font-medium text-xl">
                    Màu nền hiển thị
                  </label>
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

                <Button className={"bg-primary"}>
                  <span className="text-center p-3"> Xác nhận </span>
                </Button>
              </form>
            </div>
          </div>
        }
        color="success"
        variant="outline"
        isSuccess={mutation.isSuccess}
        isLoading={mutation.isLoading}
      >
        Sửa
      </ConfirmModal>
      <ConfirmModal
        handleAccess={handleDeleteTag}
        textHeader={"Xác nhận xóa bài viết"}
        color="error"
        variant="outline"
        isSuccess={mutation.isSuccess}
        isLoading={mutation.isLoading}
      >
        Xóa
      </ConfirmModal>
    </div>
  );
};
