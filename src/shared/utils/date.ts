export function formatDateRange(startDate: string, endDate: string) {
  const formatToShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${String(date.getFullYear()).slice(2)}.${String(date.getMonth() + 1).padStart(2, '0')}`;
  };

  const formattedStart = formatToShortDate(startDate);
  const formattedEnd = formatToShortDate(endDate);

  return `${formattedStart} - ${formattedEnd}`;
}
