import React, { useState, useCallback, useMemo, useEffect, KeyboardEvent } from "react";
import { TebTreeViewProps, TreeNode, TreeNodeRowProps, CheckboxProps, TreeItemClickPayload } from '../../utils/props';
import { CheckState } from "../../utils/types";

/** Recursively injects parentId into every node. Top-level nodes get parentId "0". */
function enrichWithParentIds(nodes: TreeNode[], parentId: string = "0"): TreeNode[] {
  return nodes.map((node) => ({
    ...node,
    parentId,
    children: node.children ? enrichWithParentIds(node.children, node.id) : undefined,
  }));
}

/** Recursively sets the children of the node with the given id. */
function injectChildrenById(nodes: TreeNode[], targetId: string, children: TreeNode[]): TreeNode[] {
  return nodes.map((node) => {
    if (node.id === targetId) return { ...node, children };
    if (node.children?.length) return { ...node, children: injectChildrenById(node.children, targetId, children) };
    return node;
  });
}

/** Collects the leaf ids of a subtree (nodes with no children). */
function getLeafIds(node: TreeNode): string[] {
  if (!node.children || node.children.length === 0) return [node.id];
  return node.children.flatMap(getLeafIds);
}

/** Collects all nodes (parents + leaves) that are fully checked. */
function getCheckedNodes(nodes: TreeNode[], checked: Set<string>): TreeNode[] {
  const result: TreeNode[] = [];
  for (const node of nodes) {
    const state = resolveCheckState(node, checked);
    if (state === "checked") result.push(node);
    if (node.children?.length) result.push(...getCheckedNodes(node.children, checked));
  }
  return result;
}

function resolveCheckState(node: TreeNode, checked: Set<string>): CheckState {
  const leaves = getLeafIds(node);
  if (leaves.length === 0) return checked.has(node.id) ? "checked" : "unchecked";
  const checkedCount = leaves.filter((id) => checked.has(id)).length;
  if (checkedCount === 0) return "unchecked";
  if (checkedCount === leaves.length) return "checked";
  return "indeterminate";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const Checkbox: React.FC<CheckboxProps> = ({ state, onClick }) => (
  <div
    role="checkbox"
    aria-checked={state === "indeterminate" ? "mixed" : state === "checked"}
    onClick={onClick}
    style={{
      width: 20,
      height: 20,
      flexShrink: 0,
      border: `2px solid ${state === "unchecked" ? "#d1d5db" : "#22c55e"}`,
      borderRadius: 5,
      background: state === "checked" ? "#22c55e" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.15s",
      boxSizing: "border-box",
    }}
  >
    {state === "checked" && (
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path
          d="M1 4.5L4 7.5L10 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
    {state === "indeterminate" && (
      <div
        style={{ width: 10, height: 2, background: "#22c55e", borderRadius: 1 }}
      />
    )}
  </div>
);

// ─── TreeNodeRow ──────────────────────────────────────────────────────────────

const TreeNodeRow: React.FC<TreeNodeRowProps> = ({
  node,
  depth,
  tabIndex,
  hasCheckbox,
  checked,
  expanded,
  onToggleExpand,
  onToggleCheck,
  onRowClick,
}) => {
  const hasChildren = !!node.children && node.children.length > 0;
  const isExpanded = expanded.has(node.id);
  const checkState = hasCheckbox ? resolveCheckState(node, checked) : "unchecked";

  const handleRowClick = () => {
    onRowClick(node, {
      id: node.id,
      name: node.name,
      selected: hasCheckbox ? checkState === "checked" : null,
    });
    if (hasChildren) onToggleExpand(node.id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRowClick();
    }
  };

  return (
    <div style={{ userSelect: "none" }}>
      {/* Row */}
      <div
        role="treeitem"
        aria-expanded={hasChildren ? isExpanded : undefined}
        tabIndex={tabIndex}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "5px 8px",
          paddingLeft: 8 + depth * 18,
          borderRadius: 6,
          cursor: "pointer",
          transition: "background 0.15s",
          outline: "none",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.background = "#f0f7ff")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.background = "transparent")
        }
        onFocus={(e) =>
          ((e.currentTarget as HTMLDivElement).style.outline = "2px solid #3b82f6")
        }
        onBlur={(e) =>
          ((e.currentTarget as HTMLDivElement).style.outline = "none")
        }
      >
        {/* Expand chevron */}
        <div
          style={{
            width: 16,
            height: 16,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: 10,
            transition: "transform 0.2s",
            transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
            visibility: hasChildren ? "visible" : "hidden",
          }}
        >
          ▶
        </div>

        {/* Checkbox */}
        {hasCheckbox && (
          <Checkbox
            state={checkState}
            onClick={(e) => {
              e.stopPropagation();
              onToggleCheck(node);
            }}
          />
        )}

        {/* Label */}
        <span
          style={{
            fontSize: 13.5,
            color: "#1f2937",
            flex: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {node.name}
        </span>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div
          style={{
            marginLeft: 8 + depth * 18 + 16 + 6,
            borderLeft: "1.5px solid #e5e7eb",
            paddingLeft: 6,
          }}
        >
          {node.children!.map((child) => (
            <TreeNodeRow
              key={child.id}
              node={child}
              depth={depth + 1}
              tabIndex={tabIndex}
              hasCheckbox={hasCheckbox}
              checked={checked}
              expanded={expanded}
              onToggleExpand={onToggleExpand}
              onToggleCheck={onToggleCheck}
              onRowClick={onRowClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── TebTreeView ──────────────────────────────────────────────────────────────

const TebTreeView: React.FC<TebTreeViewProps> = ({
  data,
  tabIndex = 0,
  hasCheckbox = false,
  hasBorder = true,
  loadChildrenDynamically = false,
  onLoadChildren,
  onTreeItemClicked,
  onTreeItemSelected,
}) => {
  const [dynamicData, setDynamicData] = useState<TreeNode[]>(data);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    setDynamicData(data);
  }, [data]);

  const enrichedData = useMemo(() => enrichWithParentIds(dynamicData), [dynamicData]);

  /** Toggle expand/collapse of a node */
  const handleToggleExpand = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  /** Toggle checkbox: if node has children, select/deselect all descendants */
  const handleToggleCheck = useCallback(
    (node: TreeNode) => {
      setChecked((prev) => {
        const ids = getLeafIds(node);
        const allChecked = ids.every((id) => prev.has(id));
        const next = new Set(prev);
        if (allChecked) {
          ids.forEach((id) => next.delete(id));
        } else {
          ids.forEach((id) => next.add(id));
        }
        onTreeItemSelected?.(getCheckedNodes(enrichedData, next));
        onTreeItemClicked?.({
          id: node.id,
          name: node.name,
          selected: !allChecked,
        });
        return next;
      });
    },
    [onTreeItemSelected, onTreeItemClicked, enrichedData]
  );

  /** Row click: injects children dynamically when loadChildrenDynamically is true */
  const handleRowClick = useCallback(
    (node: TreeNode, payload: TreeItemClickPayload) => {
      if (loadChildrenDynamically && onLoadChildren) {
        const children = onLoadChildren(node);
        setDynamicData((prev) => injectChildrenById(prev, node.id, children));
        setExpanded((prev) => {
          const next = new Set(prev);
          next.add(node.id);
          return next;
        });
      }
      onTreeItemClicked?.(payload);
    },
    [loadChildrenDynamically, onLoadChildren, onTreeItemClicked]
  );

  return (
    <div
      role="tree"
      style={{
        background: "#fff",
        borderRadius: hasBorder ? 10 : 0,
        padding: "12px 8px",
        boxShadow: hasBorder ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        width: "max-content",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      {enrichedData.map((node) => (
        <TreeNodeRow
          key={node.id}
          node={node}
          depth={0}
          tabIndex={tabIndex}
          hasCheckbox={hasCheckbox}
          checked={checked}
          expanded={expanded}
          onToggleExpand={handleToggleExpand}
          onToggleCheck={handleToggleCheck}
          onRowClick={handleRowClick}
        />
      ))}
    </div>
  );
};

export default TebTreeView;
