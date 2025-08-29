export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export function getRatingColor(rating: number): string {
  if (rating >= 9) return 'text-green-500';
  if (rating >= 7) return 'text-yellow-500';
  return 'text-red-500';
}
