import ErrorIcon from '@mui/icons-material/Error';

const ErrorComponent = ({ errorMsg }) => {
  return (
    <div className=" bg-gray-700 text-white p-3 py-4 w-300px flex flex-col items-center justify-center gap-2 rounded-md">
      <ErrorIcon fontSize='' className=' text-6xl' />
      <span className="text-center">{errorMsg}</span>
    </div>
  );
};

export default ErrorComponent;
