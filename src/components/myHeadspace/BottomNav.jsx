import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // Handle click event
  const handleClick = (action) => {
    setSelected(action); // Set the selected button

    if (action === "meditate") {
      navigate("/modes/meditate");
    } else if (action === "focus") {
      navigate("/modes/focus");
    }
  };

  return (
    <div className="bottom-div max-sm:gap-0">
      <div className="bottom-item">
        <div
          className={`bottom-action ${selected === "meditate" ? "active" : ""}`}
          onClick={() => handleClick("meditate")}
        >
          <FaRegCircle size={15} />
          <p className="text-dark">Meditate</p>
        </div>
        <div
          className={`bottom-action ${selected === "focus" ? "active" : ""}`}
          onClick={() => handleClick("focus")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M4.524 12.996c.784.577 1.274.726 2.79.992l.084.003c2.085.069 3.181-.225 4.795-1.757 1.41-1.3 1.738-2.325 1.807-4.36-.102-1.938-.421-2.659-1.865-4.192-.845-.851-2.05-1.408-3.504-1.607-1.74-.306-3.405.34-4.993 1.725C2.502 4.848 1.991 6.333 2 8.017c.057 1.764.503 2.825 1.692 4.205.266.305.542.56.832.774zm-1.598-.108l-.748.642C.7 11.815.073 10.326 0 8.057c-.012-2.227.684-4.248 2.3-5.74C4.325.553 6.557-.314 8.939.105c1.835.25 3.448.996 4.636 2.193C15.357 4.19 15.87 5.351 16 7.857c-.084 2.603-.566 4.11-2.437 5.837-2.057 1.952-3.658 2.381-6.232 2.296l-.154-.005-.141-.015-.037-.006c-1.84-.323-2.54-.532-3.661-1.357a7.128 7.128 0 01-1.157-1.074l.745-.645z"
            ></path>
            <path
              fill="currentColor"
              d="M5.687 13.34c.508.373.826.471 1.852.652l.038.001c1.424.048 2.131-.142 3.225-1.18.94-.867 1.15-1.526 1.198-2.887-.07-1.319-.267-1.766-1.25-2.81-.556-.56-1.36-.931-2.352-1.067-1.144-.201-2.252.23-3.322 1.162C4.333 7.897 3.994 8.88 4 10c.039 1.195.33 1.89 1.14 2.83.176.202.358.37.547.508zm-2.063.795c-1.095-1.27-1.57-2.397-1.624-4.092-.01-1.663.515-3.184 1.743-4.317 1.504-1.312 3.18-1.963 4.967-1.648 1.37.187 2.58.746 3.481 1.655C13.507 7.13 13.904 8.026 14 9.91c-.062 1.926-.43 3.074-1.83 4.366-1.532 1.454-2.75 1.78-4.656 1.718l-.108-.004-.147-.015-.025-.005c-.808-.141-.813-.142-1.18-.252A4.991 4.991 0 014.5 14.95a5.38 5.38 0 01-.873-.81l.772-.67-.775.666z"
            ></path>
            <path
              fill="currentColor"
              d="M6.852 13.765c.228.125.37.16.91.232.765.018 1.075-.046 1.65-.456.47-.324.561-.538.588-1.054-.038-.533-.109-.653-.64-1.076-.263-.2-.663-.339-1.204-.394-.54-.072-1.09.089-1.647.452-.347.24-.512.6-.509 1.018.02.473.156.716.594 1.097.086.074.171.133.258.18zm-1.784 1.131c-.71-.72-1.032-1.39-1.068-2.37-.006-.962.346-1.856 1.188-2.536.981-.748 2.1-1.128 3.294-.944.903.108 1.711.434 2.328.978.846.786 1.127 1.342 1.19 2.445-.04 1.088-.293 1.78-1.223 2.53-1.006.836-1.844 1.033-3.076.997-.032 0-.032 0-.063-.002l-.158-.014-.014-.002c-.863-.133-1.226-.228-1.803-.6a3.501 3.501 0 01-.592-.479l.835-.633-.838.63z"
            ></path>
          </svg>
          <p>Focus</p>
        </div>
      </div>
    </div>
  );
}
