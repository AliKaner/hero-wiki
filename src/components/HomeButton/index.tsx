import { useNavigate } from "react-router-dom";
import { APP_NAME } from "../../shared/constants";

export default function HomeButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex-none text-action font-bold text-4xl font-spider"
    >
      {APP_NAME}
    </div>
  );
}
