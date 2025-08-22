import React, { useState } from "react";

const treeData = [
  { id: 1, label: "Frontend", children: [
      { id: 2, label: "React" },
      { id: 3, label: "CSS" }
    ]
  },
  { id: 4, label: "Backend", children: [
      { id: 5, label: "Node.js" },
      { id: 6, label: "Python" }
    ]
  }
];

function TreeNode({ node, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginLeft: 16 }}>
      <div onClick={() => { setOpen(!open); onSelect(node); }} style={{ cursor: node.children ? "pointer" : "default" }}>
        {node.children && (open ? "▼" : "▶")} {node.label}
      </div>
      {open && node.children?.map(c => (
        <TreeNode key={c.id} node={c} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default function TreeView({ onSelect = () => {} }) {
  return treeData.map(node => <TreeNode key={node.id} node={node} onSelect={onSelect} />);
}