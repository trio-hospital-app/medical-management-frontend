import { DateTime } from "luxon";

export function formatDate(dateString) {
  // Parse the input date string
  const parsedDate = DateTime.fromISO(dateString);

  // Format the date as "DD/MM/YYYY"
  const formattedDate = parsedDate.toFormat("dd/MM/yyyy");

  return formattedDate;
}
