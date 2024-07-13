import { Tree } from "react-arborist";
import { data } from "../data/data";
import Node from "./Node";
import { TbFolderPlus } from "react-icons/tb";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useRef, useState } from "react";

const Arborist = () => {
  const treeRef = useRef(null);
  const [term, setTerm] = useState("");

  // const onRename = ({ id, name }) => {
  //   const node = treeRef.current.get(id);
  //   if (node) {
  //     node.data.name = name;
  //   }
  // };
  // const onDelete = ({ ids }) => {
  //   const node = treeRef.current.get(ids[0]);
  //   let parent = treeRef.current.get(node.parent.id);

  //   if (node.parent.children && node.parent?.children.length === 1) {
  //     delete parent.children;
  //     delete parent.data.children;
  //     console.log(parent);
  //   }
  // };
  // const onCreate = ({ parentId, index, type }) => {};
  // const onMove = ({ dragIds, parentId, index }) => {};

  const createFileFolder = (
    <>
      <button
        onClick={() => treeRef.current.createInternal(treeRef.current.root.id)}
        title="New Folder..."
      >
        <TbFolderPlus />
      </button>
      <button
        onClick={() => treeRef.current.createLeaf(treeRef.current.root.id)}
        title="New File..."
      >
        <AiOutlineFileAdd />
      </button>
    </>
  );

  return (
    <div>
      <div className="folderFileActions">{createFileFolder}</div>
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Tree
        ref={treeRef}
        initialData={data}
        width={260}
        height={1000}
        indent={24}
        rowHeight={32}
        searchTerm={term}
        searchMatch={(node, term) =>
          node.data.name.toLowerCase().includes(term.toLowerCase())
        }
        // openByDefault={false}
      >
        {Node}
      </Tree>
    </div>
  );
};

export default Arborist;
