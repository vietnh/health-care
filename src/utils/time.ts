export function formatDuration(seconds: number) {
  const minutes = seconds / 60;

  if (minutes < 60) {
    return `${Math.round(minutes)} min`;
  }

  const hours = minutes / 60;
  return `${Math.round(hours)} hours`;
}
