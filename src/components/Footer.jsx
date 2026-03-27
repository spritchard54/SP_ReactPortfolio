import { Link } from "react-router-dom";
import dayjs from "dayjs";

export function Footer() {

const currentYear = dayjs().format('YYYY')

  return (
    <>
      <footer className="mt-auto py-3 bg-light">
        <div className="container-fluid">
          <span className="text-muted">Copyright &copy; 2024-{currentYear}  Steve Pritchard | <a href="mailto:swpritchard54@gmail.com">swpritchard54@gmail.com</a></span>
        </div>
      </footer>
    </>
  );
}
