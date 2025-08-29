interface RatingProps {
  value: number;
  max?: number;
}

export default function Rating({ value, max = 10 }: RatingProps) {
  const percentage = (value / max) * 100;
  const getColor = () => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`text-lg font-bold ${getColor()}`}>
        {value.toFixed(1)}
      </div>
      <div className="flex items-center">
        <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${getColor()} bg-current`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
