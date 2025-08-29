interface PriceTagProps {
  price: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export default function PriceTag({ price, currency = 'USD', size = 'md' }: PriceTagProps) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);

  return (
    <span className={`font-bold ${sizes[size]} text-green-600`}>
      {formatted}
    </span>
  );
}
