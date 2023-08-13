
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FaSpinner className="text-4xl text-copper-600 animate-spin" />
    </div>
  );
};

export default Loading;
