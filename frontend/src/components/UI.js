// Reusable components for frontend
export const Card = ({ title, children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
    {children}
  </div>
);

export const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 py-2 rounded font-semibold transition';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700'
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const StatCard = ({ label, value, icon, color = 'blue' }) => (
  <div className={`bg-white p-6 rounded-lg shadow border-l-4 border-${color}-600`}>
    <p className="text-gray-600 text-sm">{label}</p>
    <p className={`text-4xl font-bold text-${color}-600 mt-2`}>{value}</p>
    {icon && <div className="text-3xl mt-4">{icon}</div>}
  </div>
);

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

export const Alert = ({ message, type = 'info' }) => {
  const colors = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };
  
  return (
    <div className={`${colors[type]} p-4 rounded-lg mb-4`}>
      {message}
    </div>
  );
};
