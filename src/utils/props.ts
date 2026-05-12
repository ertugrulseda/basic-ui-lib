import type { CSSProperties, ReactNode } from 'react';
import type { AgGridReactProps } from 'ag-grid-react';
import { ButtonProps } from '@mui/material/Button';
import { Variants,CheckState } from './types';


export interface TebDataGridEnterpriseProps extends AgGridReactProps {
  style?: CSSProperties;
  [key: string]: any;
}

import {InputSize} from './types'
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@mui/base/useAutocomplete/useAutocomplete'; 
export interface TebAutoCompleteProps<T> {
  id?: string;
  name?: string;
  label?: string;
  tabIndex?: number;
  options: T[];
  value?: T | null;
  disabled: boolean;
  inputValue?: string;
  helperText?: string;
  helperIcon?: string;
  placeholder?: string;
  error: boolean;
  width?: string | number;
  zIndex?: number;
  size: InputSize;
  margin?: string | number;
  noOptionsText: React.ReactNode;
  getOptionLabel?: (option: T) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  onChange?: (
    event: React.SyntheticEvent,
    value: T | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => void;
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
} 

export interface TebButtonProps extends ButtonProps {
	variant?: Variants,
	label: string,
	onClick: () => void
	//restPropsu buraya yazmaya gerek yok
}

export interface TreeNode {
  id: string;
  name: string | ReactNode;
  parentId?: string;
  children?: TreeNode[];
}

export interface TreeItemClickPayload {
  id: string;
  name: string | ReactNode;
  selected: boolean | null;
}

interface TebTreeViewBaseProps {
  /** Tree data – supports unlimited nesting */
  data: TreeNode[];
  /** Tab index forwarded to each focusable row */
  tabIndex?: number;
  /** When true, checkboxes (20×20 px) are shown before each label */
  hasCheckbox?: boolean;
  /** Called when loadChildrenDynamically is true and a node is clicked; must return the children to inject */
  onLoadChildren?: (node: TreeNode) => TreeNode[];
  /** Fired whenever any row is clicked; returns id, name and selected state */
  onTreeItemClicked?: (payload: TreeItemClickPayload) => void;
  /** Fired ONLY when a checkbox is toggled; receives all currently-selected nodes */
  onTreeItemSelected?: (selectedItems: TreeNode[]) => void;
  /** When true, shows box shadow and rounded border around the tree. Default: true */
  hasBorder?: boolean;
}

export type TebTreeViewProps = TebTreeViewBaseProps & (
  | {
      /** Dynamic child loading is active – activeItemId is not supported in this mode */
      loadChildrenDynamically: true;
      activeItemId?: never;
    }
  | {
      loadChildrenDynamically?: false;
      /**
       * The id of the TreeNode that should be visually selected.
       * All ancestor nodes are automatically expanded so the item is visible.
       * Not available when loadChildrenDynamically is true.
       */
      activeItemId?: string;
    }
);


export interface TreeNodeRowProps {
  node: TreeNode;
  depth: number;
  tabIndex: number;
  hasCheckbox: boolean;
  checked: Set<string>;
  expanded: Set<string>;
  activeItemId?: string;
  onToggleExpand: (id: string) => void;
  onToggleCheck: (node: TreeNode) => void;
  onRowClick: (node: TreeNode, payload: TreeItemClickPayload) => void;
}


export interface CheckboxProps {
  state: CheckState;
  onClick: (e: React.MouseEvent) => void;
}