export interface InputState {
  disabled: boolean;
  error: boolean;
  size?: InputSize;
}

export interface InputStyle {
  width: string | number;
  color: string;
  zIndex: number;
  margin?: string | number;
} 

export enum InputSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
} 

export type MuiSize = 'small' | 'medium' | undefined;

export {
  // Grid core
  type GridOptions,
  type GridApi,
  type GridState,
  type GridReadyEvent,
  // Column definitions
  type ColDef,
  type ColGroupDef,
  type ColTypeDef,
  type ColTypeDefs,
  // Column state
  type Column,
  type ColumnGroup,
  type ColumnState,
  type ApplyColumnStateParams,
  // Row node
  type IRowNode,
  type RowPinnedType,
  // Events
  type CellClickedEvent,
  type CellValueChangedEvent,
  type RowClickedEvent,
  type RowDoubleClickedEvent,
  type SelectionChangedEvent,
  type FilterChangedEvent,
  type SortChangedEvent,
  type SortModelItem,
  // Value callbacks
  type ValueGetterParams,
  type ValueSetterParams,
  type ValueFormatterParams,
  type ValueParserParams,
  // Cell renderer / editor
  type ICellRendererParams,
  type ICellEditorParams,
  // Cell range (enterprise)
  type CellRange,
  type CellRangeParams,
  // Data transactions
  type RowDataTransaction,
  type RowNodeTransaction,
  type ServerSideTransaction,
  type ServerSideTransactionResult,
  // Datasources
  type IDatasource,
  type IGetRowsParams,
  type IServerSideDatasource,
  type IServerSideGetRowsParams,
  type IServerSideGetRowsRequest,
  // Filter types
  type IFilterParams,
  type TextFilterModel,
  type NumberFilterModel,
  type DateFilterModel,
  // Cell editor params
  type ILargeTextEditorParams,
  type INumberCellEditorParams,
  type ISelectCellEditorParams,
  type ITextCellEditorParams,
  // UI definitions
  type MenuItemDef,
  type SideBarDef,
  type ToolPanelDef,
  // Export
  type CsvExportParams,
  type ExcelExportParams,
  // Enums
  KeyCode,
  CellRangeType,
  ServerSideTransactionResultStatus,
  // Modules
  AllCommunityModule,
  // Grid factory
  createGrid,
  provideGlobalGridOptions,
  // Theming
  createTheme,
  createPart,
  themeAlpine,
  themeBalham,
  themeQuartz,
  themeMaterial,
  colorSchemeLight,
  colorSchemeDark,
  colorSchemeDarkBlue,
  colorSchemeDarkWarm,
  colorSchemeLightCold,
  colorSchemeLightWarm,
  colorSchemeVariable,
} from 'ag-grid-community';