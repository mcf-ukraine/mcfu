import Image from "next/image";

type UserAvatarProps = {
  imageUrl?: string;
};

export const UserAvatar = ({ imageUrl }: UserAvatarProps) =>
  imageUrl ? (
    <Image
      className="inline-block h-8 w-8 min-w-min rounded-full"
      width={32}
      height={32}
      src={imageUrl}
      alt="User avatar"
    />
  ) : (
    <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
      <svg
        className="h-full w-full text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
