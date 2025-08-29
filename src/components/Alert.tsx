interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

export default function Alert({ type, message }: AlertProps) {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`${bgColor} ${textColor} border-l-4 ${borderColor} p-4 mb-4 rounded`}>
      {message}
    </div>
  );
}
