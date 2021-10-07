import { Badge } from "react-bootstrap";
import { BsFolder } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Folder as FolderType } from "../features/folder/foldersSlice";

interface Props {
  folder: FolderType;
}

export function Folder({ folder }: Props) {
  return (
    <Link to={`/folders/${folder.name}`}>
      <li
        className="nav-item nav-link mb-2 p-2 d-flex justify-content-between align-items-center sidebar-item"
        style={{ cursor: "pointer" }}
      >
        <BsFolder className="bi me-2" width="1rem" height="1rem" />
        <span className="wrapElipsis">{folder.name}</span>
        {folder.images.length ? (
          <Badge pill bg="primary">
            {folder.images.length}
          </Badge>
        ) : (
          <Badge pill bg="danger">
            {folder.images.length}
          </Badge>
        )}
      </li>
    </Link>
  );
}
