import React, { forwardRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, LicenseManager, ModuleRegistry } from 'ag-grid-enterprise';
import { themeQuartz } from 'ag-grid-community';
import type {
  GridOptions,
  ColDef,
  GridApi,
  GridReadyEvent,
  CellClickedEvent,
  CsvExportParams,
  ExcelExportParams
} from 'ag-grid-community';

// Import AG Grid Enterprise to enable enterprise features
import 'ag-grid-enterprise';

// AG Grid Enterprise License Key - Hardcoded
const AG_GRID_LICENSE_KEY = 'YOUR_AG_GRID_ENTERPRISE_LICENSE_KEY_HERE';

// Register modules at module level so they are ready before first render
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(AG_GRID_LICENSE_KEY);

// Re-export AG Grid types
export type {
  GridOptions,
  ColDef,
  GridApi,
  GridReadyEvent,
  CellClickedEvent,
  CsvExportParams,
  ExcelExportParams
};

// Define AgGridReactProps type since it's not directly exported
export type AgGridReactProps<TData = any> = GridOptions<TData> & {
  gridOptions?: GridOptions<TData>;
  modules?: any[];
  containerStyle?: any;
  className?: string;
  componentWrappingElement?: string;
  maxComponentCreationTimeMs?: number;
  setGridApi?: (gridApi: GridApi<TData>) => void;
  children?: any;
};

export interface TebDataGridXtra2Props extends AgGridReactProps {
  style?: React.CSSProperties;
  [key: string]: any; // Allow additional props
}

export const TebDataGridXtra2 = forwardRef<AgGridReact, TebDataGridXtra2Props>((props, ref) => {
  const {
    style = { height: 400, width: '100%' },
    theme = themeQuartz,
    ...gridProps
  } = props;

  return (
    <div style={style}>
      <AgGridReact
        ref={ref}
        theme={theme}
        {...gridProps}
      />
    </div>
  );
});

TebDataGridXtra2.displayName = 'TebDataGridXtra2';

export default TebDataGridXtra2;
