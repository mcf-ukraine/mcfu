import clsx from "clsx";
import { Button } from "@mcfu/ui";
import { type User } from "../../utils/user";

type FeesTableProps = {
  fees: User["fees"];
};

export const FeesTable = ({ fees }: FeesTableProps) => (
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead>
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
        >
          Рік
        </th>

        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
        >
          Сума, грн
        </th>
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
          <span className="sr-only">Оплата</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {fees.map((fee, feeIdx) => (
        <tr key={`fee-${fee.id}`}>
          <td
            className={clsx(
              feeIdx === 0 ? "" : "border-t border-transparent",
              "relative py-4 pl-4 pr-3 text-sm sm:pl-6"
            )}
          >
            <div className="font-medium text-gray-900 dark:text-white">
              {fee.year}
            </div>
            {feeIdx !== 0 ? (
              <div className="absolute -top-px left-6 right-0 h-px bg-gray-200 dark:bg-gray-700" />
            ) : null}
          </td>

          <td
            className={clsx(
              feeIdx === 0
                ? ""
                : "border-t border-gray-200 dark:border-gray-700",
              "px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400"
            )}
          >
            {fee.amount}
          </td>
          <td
            className={clsx(
              feeIdx === 0 ? "" : "border-t border-transparent",
              "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
            )}
          >
            {fee.paid ? (
              <>
                <div className="inline-block rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20">
                  Сплачено
                </div>
                <div className="mt-1 text-xs font-normal leading-5 text-gray-500/90 dark:text-gray-400">
                  {new Date(fee.paymentDate).toLocaleDateString("uk-UA")}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-end sm:flex-row sm:items-center sm:justify-end">
                <div className="mb-2 inline-block rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20 sm:mb-0 sm:mr-4">
                  Заборгованість
                </div>

                <Button>Сплатити</Button>
              </div>
            )}
            {feeIdx !== 0 ? (
              <div className="absolute -top-px left-0 right-6 h-px bg-gray-200 dark:bg-gray-700" />
            ) : null}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
