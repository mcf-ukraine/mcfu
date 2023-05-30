type MembershipStatusBadgeProps = {
  isMembershipActive: boolean;
};

export const MembershipStatusBadge = ({
  isMembershipActive,
}: MembershipStatusBadgeProps) =>
  isMembershipActive ? (
    <span className="ml-2 inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-500/10 dark:text-green-400">
      <svg
        className="h-1.5 w-1.5 fill-green-500"
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      Активне
    </span>
  ) : (
    <span className="ml-2 inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-500/10 dark:text-red-400">
      <svg
        className="h-1.5 w-1.5 fill-red-500"
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      Неактивне
    </span>
  );
