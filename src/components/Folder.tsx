import { Badge } from "react-bootstrap";
import { BsFolder } from "react-icons/bs";
import { Folder as FolderType } from "../features/folder/foldersSlice";

interface Props {
  folder: FolderType;
}

export function Folder({ folder }: Props) {
  return (
    <li
      className="nav-item nav-link mb-2 p-0 d-flex justify-content-between align-items-center"
      style={{ cursor: "pointer" }}
    >
      <BsFolder className="bi me-2" width="1rem" height="1rem" />
      <span
        style={{
          maxWidth: "80px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {folder.name}
      </span>
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
  );
}
