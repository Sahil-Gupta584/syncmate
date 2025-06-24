import { Avatar, Checkbox, CheckboxGroup } from "@heroui/react";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import type { TVideoDetails, TVideoDetailsForm } from "..";
import { ShowChannelsSkeleton } from "./VideoFormSkeleton";

type UserChanNEditrsProps = {
  register: UseFormRegister<NonNullable<TVideoDetailsForm>>;
  isEditing: boolean;
  setValue: UseFormSetValue<NonNullable<TVideoDetailsForm>>;
  previousData: NonNullable<TVideoDetails>;
};

export default function ChanNEditrsFields({
  register,
  isEditing,
  setValue,
  previousData,
}: UserChanNEditrsProps) {
  const {
    owner: { channels: userChannels, editors: userEditors },
  } = previousData;

  return (
    <>
      {userChannels && userChannels.length > 0 && (
        <div className="space-y-2">
          <p className=" font-medium text-xl">For :</p>
          <div className="flex flex-wrap gap-[35px]">
            {userChannels.map(
              (channel: { id: string; logoUrl: string; name: string }) => {
                return (
                  <label
                    key={channel.id}
                    className="flex items-center  cursor-pointer gap-1"
                  >
                    <Checkbox
                      type="radio"
                      value={channel.id}
                      checked={previousData.channelId === channel.id}
                      disabled={!isEditing}
                      {...register("channelId")}
                    />
                    <Avatar
                      src={channel.logoUrl}
                      fallback
                      className="w-12 h-12 ml-3"
                    />
                    <span className="mt-1">{channel.name}</span>
                  </label>
                );
              },
            )}
          </div>
        </div>
      )}
      {!userChannels && <ShowChannelsSkeleton />}

      {userEditors && userEditors.length > 0 && (
        <div className="space-y-2">
          <p className=" font-medium text-xl">Can be accessed by:</p>
          <CheckboxGroup
            onValueChange={(val) => {
              setValue("selectedEditorsId", val);
            }}
            isDisabled={!isEditing}
            orientation="horizontal"
            defaultValue={previousData.editors.map((e: any) => e.editor.id)}
            className="gap-[35px]"
          >
            {userEditors.map(({ editor }: { editor: any }) => (
              <Checkbox key={editor.id} value={editor.id}>
                <div className="flex items-center gap-3">
                  <Avatar
                    src={editor.image || undefined}
                    className="w-12 h-12 ml-3"
                    fallback
                  />
                  <span className="mt-1 ">{editor.name}</span>
                </div>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      )}
      {!userEditors && <ShowChannelsSkeleton />}
    </>
  );
}
