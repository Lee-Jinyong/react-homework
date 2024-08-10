import './PrintError.css';

interface PrintError {
  children: React.ReactNode,
};

function PrintError({ children }: PrintError) : JSX.Element {
  return (
    <p role="alert" className="PrintError">
      {children}
    </p>
  );
}

export default PrintError;