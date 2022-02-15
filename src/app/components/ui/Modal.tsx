import React from 'react';
import {
  AiOutlineClose,
} from 'react-icons/ai';
import { Button } from './Button';

type Props = {
  children: React.ReactNode;
  onCancel: () =>void;
  title: string;
  okText?:string;
  cancelText?:string;
  onOk?: () =>void;
  okDisabled?: boolean;
};

export const Modal = ({
  children,
  onCancel,
  title,
  okText = 'Ok',
  cancelText = 'Cancel',
  onOk,
  okDisabled,
}: Props) => (
  <>
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full"
      id="my-modal"
    />
    <div
      className="absolute left-0 right-0 top-32 mx-auto px-5 py-2 border w-auto max-w-lg shadow-xl rounded-md bg-white dark:bg-gray-900"
    >
      <div className="flex justify-between border-b border-solid border-black py-2 px-5 mb-2 -mx-5">
        <div className="text-lg">{title}</div>
        <div
          className="cursor-pointer"
          onClick={onCancel}
          onKeyDown={onCancel}
          role="button"
          tabIndex={0}
        >
          <AiOutlineClose />
        </div>
      </div>
      {children}
      <div className="flex justify-end mt-3">
        <Button
          onClick={onCancel}
          className="bg-red-700 focus:bg-red-800"
        >
          {cancelText}
        </Button>
        {onOk && (
        <Button
          onClick={onOk}
          className="ml-3 bg-green-700 focus:bg-green-800"
          disabled={okDisabled}
        >
          {okText}
        </Button>
        )}
      </div>
    </div>
  </>
);
