export function formatDateRange(startDate: string, endDate: string) {
  const formatToShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${String(date.getFullYear()).slice(2)}.${String(date.getMonth() + 1).padStart(2, '0')}`;
  };

  const formattedStart = formatToShortDate(startDate);
  const formattedEnd = formatToShortDate(endDate);

  return `${formattedStart} - ${formattedEnd}`;
}

export function formatDateWithDays(dateString: string) {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const date = new Date(dateString);

  const year = String(date.getFullYear()).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}.${month}.${day}(${dayOfWeek})`;
}
