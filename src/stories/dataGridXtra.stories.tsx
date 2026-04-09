import React, { useRef, useCallback, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TebDataGridXtra2 } from '../components';
import { useArgs } from '@storybook/client-api';
import { TebDataGridXtra2Props } from '../components/TebDataGridXtra2';



export default {
  title: 'Components/TebDataGridXtra2',
  component: TebDataGridXtra2,
  argTypes: {
    className: {
      control: 'select',
      options: ['ag-theme-quartz', 'ag-theme-material'],
      description: 'Grid Teması'
    },
    rowData: {
      control: 'object',
      description: 'Tabloda gösterilecek satır verisi dizisi'
    },
    columnDefs: {
      control: 'object',
      description: 'Sütun tanımları dizisi'
    },
    pagination: {
      control: 'boolean',
      description: 'Sayfalama aktif/pasif'
    },
    paginationPageSize: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Sayfa başına gösterilecek satır sayısı'
    },
    animateRows: {
      control: 'boolean',
      description: 'Satır animasyonlarını etkinleştir'
    },
    rowSelection: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Satır seçim modu'
    },

    suppressRowClickSelection: {
      control: 'boolean',
      description: 'Satıra tıklandığında seçimi engelle'
    },

    suppressCellFocus: {
      control: 'boolean',
      description: 'Hücre odaklanmasını devre dışı bırak'
    },

    domLayout: {
      control: 'select',
      options: ['normal', 'autoHeight', 'print'],
      description: 'Grid DOM yerleşim modu'
    },

    rowHeight: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Satır yüksekliği (piksel)'
    },

    headerHeight: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Başlık yüksekliği (piksel)'
    },

    defaultColDef: {
      control: 'object',
      description: 'Tüm sütunlara uygulanacak varsayılan sütun ayarları'
    },

    style: {
      control: 'object',
      description: 'Grid wrapper div inline stili'
    }

  }

} as ComponentMeta<typeof TebDataGridXtra2>;


const trFormatter = new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function parseTrNumber(value: string): number {
  // "35.000,00" → 35000.00  veya  "35000" → 35000
  if (value.includes(',')) {
    return parseFloat(value.replace(/\./g, '').replace(',', '.'));
  }
  return parseFloat(value.replace(/,/g, ''));
}

const priceValueFormatter = (params: { value: number }) =>
  params.value != null ? trFormatter.format(params.value) : '';

const priceValueParser = (params: { newValue: string; oldValue: number }) => {
  const [intPart, decimalPart] = params.newValue.replace(/\./g, '').split(',');
  const truncated = decimalPart ? `${intPart},${decimalPart.slice(0, 2)}` : intPart;
  const parsed = parseTrNumber(truncated);
  return isNaN(parsed) ? params.oldValue ?? null : parsed;
};

const basicColumnLabels: Record<string, { en: string; tr: string }> = {
  make:  { en: 'Make',  tr: 'Marka' },
  model: { en: 'Model', tr: 'Model' },
  price: { en: 'Price', tr: 'Fiyat' },
};

function getBrowserLang(): 'tr' | 'en' {
  const lang = (navigator.language || '').toLowerCase();
  return lang.startsWith('tr') ? 'tr' : 'en';
}

export const BasicDataGridXtra: ComponentStory<typeof TebDataGridXtra2> = (args: TebDataGridXtra2Props) => {
  const [{ className }, updateArgs] = useArgs();
  const lang = getBrowserLang();

  React.useEffect(() => {
    if (!className) {
      updateArgs({ className: 'ag-theme-quartz' });
    }
  }, []);

  const columnDefs = React.useMemo(() => [
    { field: 'make',  headerName: basicColumnLabels.make[lang]  },
    { field: 'model', headerName: basicColumnLabels.model[lang] },
    {
      field: 'price',
      headerName: basicColumnLabels.price[lang],
      editable: true,
      cellEditor: 'agTextCellEditor',
      useValueFormatterInEditor: true,
      valueFormatter: priceValueFormatter,
      valueParser: priceValueParser,
    },
  ], [lang]);

  return <TebDataGridXtra2 {...args} columnDefs={columnDefs} />;
};


export const TreeDataGridXtra: ComponentStory<typeof TebDataGridXtra2> = () => (
  <TebDataGridXtra2
    className="ag-theme-quartz"
    treeData
    rowData={[
      { orgHierarchy: ['Erica Rogers'],                                          jobTitle: 'CEO',                  employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],                       jobTitle: 'Exec. Vice President', employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Idris Martin'],       jobTitle: 'Engineer',             employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Leah Flowers'],       jobTitle: 'Parts Man',            employmentType: 'Contract'  },
      { orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Tammy Sutton'],       jobTitle: 'Engineer',             employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Mila Ward'],                             jobTitle: 'Vice President',       employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Mila Ward', 'Evelyn Hughes'],            jobTitle: 'Data Analyst',         employmentType: 'Permanent' },
      { orgHierarchy: ['Erica Rogers', 'Mila Ward', 'Todd Tyler'],               jobTitle: 'Mechanic',             employmentType: 'Contract'  },
    ]}
    columnDefs={[
      { field: 'jobTitle',       headerName: 'Ünvan',          flex: 2 },
      { field: 'employmentType', headerName: 'Çalışma Tipi',   flex: 1 },
    ]}
    getDataPath={(row: { orgHierarchy: string[] }) => row.orgHierarchy}
    autoGroupColumnDef={{ headerName: 'İsim', minWidth: 220 }}
    groupDefaultExpanded={-1}
    defaultColDef={{ sortable: true, resizable: true }}
    animateRows
    style={{ height: 400, width: '100%' }}
  />
);

type MasterDetailArgs = {
  className: string;
  animateRows: boolean;
  rowHeight: number;
  headerHeight: number;
  detailClassName: string;
  detailRowSelection: 'single' | 'multiple';
  detailRowHeight: number;
};

export const MasterDetailDataGrid: ComponentStory<React.ComponentType<MasterDetailArgs>> = (args: MasterDetailArgs) => (
  <TebDataGridXtra2
    className={args.className}
    masterDetail
    animateRows={args.animateRows}
    rowHeight={args.rowHeight}
    headerHeight={args.headerHeight}
    rowData={[
      {
        account: 'Ash', calls: 5, minutes: 1.35,
        callRecords: [
          { callId: 'C1', name: 'Susan', duration: 1,    switchCode: 'SW1', direction: 'Out', number: '(415) 111-1111' },
          { callId: 'C2', name: 'Susan', duration: 0.25, switchCode: 'SW1', direction: 'Out', number: '(415) 111-1111' },
        ]
      },
      {
        account: 'Fry', calls: 4, minutes: 4.69,
        callRecords: [
          { callId: 'C3', name: 'Mela', duration: 3.5,  switchCode: 'SW2', direction: 'In',  number: '(416) 222-2222' },
          { callId: 'C4', name: 'Mela', duration: 1.19, switchCode: 'SW2', direction: 'In',  number: '(416) 222-2222' },
        ]
      },
      {
        account: 'Cow', calls: 7, minutes: 18.25,
        callRecords: [
          { callId: 'C5', name: 'Bull', duration: 10,   switchCode: 'SW3', direction: 'Out', number: '(417) 333-3333' },
          { callId: 'C6', name: 'Bull', duration: 8.25, switchCode: 'SW3', direction: 'In',  number: '(417) 333-3333' },
        ]
      },
    ]}
    columnDefs={[
      { field: 'account',  headerName: 'Hesap',        flex: 1, cellRenderer: 'agGroupCellRenderer' },
      { field: 'calls',    headerName: 'Çağrı Sayısı', flex: 1 },
      { field: 'minutes',  headerName: 'Dakika',        flex: 1, valueFormatter: (p: { value: number }) => p.value.toFixed(2) },
    ]}
    detailCellRendererParams={{
      detailGridOptions: {
        columnDefs: [
          { headerName: '', width: 50, checkboxSelection: true, suppressSizeToFit: true },
          { field: 'callId',     headerName: 'Çağrı ID',  flex: 1 },
          { field: 'name',       headerName: 'İsim',      flex: 1 },
          { field: 'duration',   headerName: 'Süre (dk)', flex: 1 },
          { field: 'switchCode', headerName: 'Santral',   flex: 1 },
          { field: 'direction',  headerName: 'Yön',       flex: 1 },
          { field: 'number',     headerName: 'Numara',    flex: 1 },
        ],
        rowSelection: args.detailRowSelection,
        rowHeight: args.detailRowHeight,
        defaultColDef: { sortable: true, resizable: true },
        theme: 'legacy',
        className: args.detailClassName,
        onSelectionChanged: (params: { api: { getSelectedRows: () => { name: string; direction: string; number: string }[] } }) => {
          const selected = params.api.getSelectedRows();
          if (selected.length > 0) {
            const row = selected[0];
            alert(`İsim: ${row.name}\nYön: ${row.direction}\nNumara: ${row.number}`);
          }
        },
      },
      getDetailRowData: (params: { data: { callRecords: unknown[] }; successCallback: (rows: unknown[]) => void }) =>
        params.successCallback(params.data.callRecords),
    }}
    defaultColDef={{ sortable: true, resizable: true }}
    style={{ height: 400, width: '100%' }}
  />
);

MasterDetailDataGrid.argTypes = {
  className: {
    control: 'select',
    options: ['ag-theme-quartz', 'ag-theme-alpine', 'ag-theme-balham', 'ag-theme-material'],
    description: 'Master grid teması'
  },
  animateRows: {
    control: 'boolean',
    description: 'Master grid satır animasyonu'
  },
  rowHeight: {
    control: { type: 'number', min: 20, max: 100, step: 1 },
    description: 'Master grid satır yüksekliği'
  },
  headerHeight: {
    control: { type: 'number', min: 20, max: 100, step: 1 },
    description: 'Master grid başlık yüksekliği'
  },
  detailClassName: {
    control: 'select',
    options: ['ag-theme-quartz', 'ag-theme-alpine', 'ag-theme-balham', 'ag-theme-material'],
    description: 'Detail grid teması'
  },
  detailRowSelection: {
    control: 'select',
    options: ['single', 'multiple'],
    description: 'Detail grid satır seçim modu'
  },
  detailRowHeight: {
    control: { type: 'number', min: 20, max: 100, step: 1 },
    description: 'Detail grid satır yüksekliği'
  },
};

MasterDetailDataGrid.args = {
  className: 'ag-theme-quartz',
  animateRows: true,
  rowHeight: 42,
  headerHeight: 48,
  detailClassName: 'ag-theme-quartz',
  detailRowSelection: 'single',
  detailRowHeight: 40,
};

BasicDataGridXtra.args = {
  rowData: [
    {
      make: 'Toyota', model:
        'Celica', price: 35000
    },
    {
      make: 'Ford', model:
        'Mondeo', price: 32000
    },
    {
      make: 'Porsche', model:
        'Boxster', price: 72000
    }
  ],
  columnDefs: [],
  pagination: false,
  paginationPageSize: 10,
  animateRows: false,
  rowSelection: 'single',
  suppressRowClickSelection: false,
  suppressCellFocus: false,
  domLayout: 'normal',
  rowHeight: 42,
  headerHeight: 48,
  defaultColDef: { sortable: true, resizable: true, flex: 1 },
  style: { height: 400, width: '100%' }
};

const excelRowData = [
  { ad: 'Ahmet Yılmaz',   departman: 'Yazılım',    pozisyon: 'Kıdemli Geliştirici', maas: 85000, baslangic: '2019-03-15', aktif: true  },
  { ad: 'Ayşe Kara',      departman: 'Tasarım',    pozisyon: 'UX Tasarımcı',        maas: 72000, baslangic: '2020-07-01', aktif: true  },
  { ad: 'Mehmet Demir',   departman: 'Pazarlama',  pozisyon: 'Pazarlama Uzmanı',    maas: 65000, baslangic: '2018-11-20', aktif: false },
  { ad: 'Fatma Çelik',    departman: 'Yazılım',    pozisyon: 'Full Stack Geliştirici', maas: 78000, baslangic: '2021-02-10', aktif: true  },
  { ad: 'Ali Şahin',      departman: 'İnsan Kaynakları', pozisyon: 'İK Uzmanı',    maas: 60000, baslangic: '2017-05-08', aktif: true  },
  { ad: 'Zeynep Arslan',  departman: 'Finans',     pozisyon: 'Mali Analist',        maas: 90000, baslangic: '2016-09-12', aktif: true  },
  { ad: 'Hasan Yıldız',   departman: 'Yazılım',    pozisyon: 'DevOps Mühendisi',    maas: 95000, baslangic: '2022-01-03', aktif: false },
  { ad: 'Selin Koç',      departman: 'Tasarım',    pozisyon: 'Grafik Tasarımcı',    maas: 58000, baslangic: '2023-04-18', aktif: true  },
];

const excelColumnDefs = [
  { field: 'ad',         headerName: 'Ad Soyad',    flex: 2, filter: 'agTextColumnFilter'   },
  { field: 'departman',  headerName: 'Departman',   flex: 1, filter: 'agSetColumnFilter'    },
  { field: 'pozisyon',   headerName: 'Pozisyon',    flex: 2, filter: 'agTextColumnFilter'   },
  {
    field: 'maas',
    headerName: 'Maaş (₺)',
    flex: 1,
    filter: 'agNumberColumnFilter',
    valueFormatter: (p: { value: number }) =>
      p.value != null ? new Intl.NumberFormat('tr-TR').format(p.value) : '',
  },
  { field: 'baslangic',  headerName: 'Başlangıç Tarihi', flex: 1, filter: 'agDateColumnFilter' },
  {
    field: 'aktif',
    headerName: 'Aktif',
    flex: 1,
    filter: 'agSetColumnFilter',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: { values: [true, false] },
    valueFormatter: (p: { value: boolean }) => (p.value ? 'Evet' : 'Hayır'),
    cellStyle: (p: { value: boolean }) => ({ color: p.value ? '#16a34a' : '#dc2626', fontWeight: 600 }),
  },
];

export const ExcelExportDataGrid: ComponentStory<typeof TebDataGridXtra2> = () => {
  const gridApiRef = useRef<{ exportDataAsExcel: (params?: object) => void; exportDataAsCsv: (params?: object) => void } | null>(null);

  const onGridReady = useCallback((params: { api: typeof gridApiRef.current }) => {
    gridApiRef.current = params.api;
  }, []);

  const exportExcel = useCallback(() => {
    gridApiRef.current?.exportDataAsExcel({
      fileName: 'personel-listesi.xlsx',
      sheetName: 'Personel',
      author: 'TEB',
    });
  }, []);

  const exportSelectedExcel = useCallback(() => {
    gridApiRef.current?.exportDataAsExcel({
      fileName: 'secili-personel.xlsx',
      sheetName: 'Seçili Personel',
      shouldRowBeSkipped: (params: { node: { data: { aktif: boolean } } }) =>
        params.node.data.aktif !== true,
    });
  }, []);

  const exportCsv = useCallback(() => {
    gridApiRef.current?.exportDataAsCsv({
      fileName: 'personel-listesi.csv',
    });
  }, []);

  const btnStyle: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: 4,
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: 13,
    background: '#fff',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={exportExcel} style={{ ...btnStyle, background: '#16a34a', color: '#fff', border: 'none' }}>
          Excel İndir (Tümü)
        </button>
        <button onClick={exportSelectedExcel} style={{ ...btnStyle, background: '#2563eb', color: '#fff', border: 'none' }}>
          Excel İndir (Seçili)
        </button>
        <button onClick={exportCsv} style={{ ...btnStyle }}>
          CSV İndir
        </button>
      </div>
      <TebDataGridXtra2
        className="ag-theme-quartz"
        rowData={excelRowData}
        columnDefs={excelColumnDefs}
        defaultColDef={{ sortable: true, resizable: true, flex: 1 }}
        rowSelection="multiple"
        animateRows
        onGridReady={onGridReady}
        style={{ height: 400, width: '100%' }}
      />
      <p style={{ fontSize: 12, color: '#888', margin: 0 }}>
        Birden fazla satır seçmek için <strong>Ctrl/Cmd + tıklama</strong> kullanın, ardından "Seçili" butonuna basın.
      </p>
    </div>
  );
};

const aiRowData = [
  { athlete: 'Michael Phelps',  country: 'United States', sport: 'Swimming',   age: 23, gold: 8, silver: 0, bronze: 0 },
  { athlete: 'Natalie Coughlin', country: 'United States', sport: 'Swimming',   age: 25, gold: 1, silver: 2, bronze: 3 },
  { athlete: 'Usain Bolt',       country: 'Jamaica',       sport: 'Athletics',  age: 21, gold: 3, silver: 0, bronze: 0 },
  { athlete: 'Shawn Johnson',    country: 'United States', sport: 'Gymnastics', age: 16, gold: 1, silver: 3, bronze: 0 },
  { athlete: 'Nastia Liukin',    country: 'United States', sport: 'Gymnastics', age: 18, gold: 1, silver: 3, bronze: 1 },
  { athlete: 'Allyson Felix',    country: 'United States', sport: 'Athletics',  age: 22, gold: 1, silver: 0, bronze: 0 },
  { athlete: 'Liu Xiang',        country: 'China',         sport: 'Athletics',  age: 25, gold: 0, silver: 0, bronze: 1 },
  { athlete: 'Yelena Isinbayeva',country: 'Russia',        sport: 'Athletics',  age: 26, gold: 1, silver: 0, bronze: 0 },
];

const aiColumnDefs = [
  { field: 'athlete', headerName: 'Sporcu',  flex: 2, filter: 'agTextColumnFilter' },
  { field: 'country', headerName: 'Ülke',    flex: 1, filter: 'agSetColumnFilter'  },
  { field: 'sport',   headerName: 'Spor',    flex: 1, filter: 'agSetColumnFilter'  },
  { field: 'age',     headerName: 'Yaş',     flex: 1, filter: 'agNumberColumnFilter' },
  { field: 'gold',    headerName: 'Altın',   flex: 1, filter: 'agNumberColumnFilter' },
  { field: 'silver',  headerName: 'Gümüş',   flex: 1, filter: 'agNumberColumnFilter' },
  { field: 'bronze',  headerName: 'Bronz',   flex: 1, filter: 'agNumberColumnFilter' },
];

export const AiToolkitDataGrid: ComponentStory<typeof TebDataGridXtra2> = () => {
  const gridApiRef = useRef<{ getStructuredSchema: () => unknown; getState: () => unknown; setState: (state: unknown, ignore: string[]) => void } | null>(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState('');

  const onGridReady = useCallback((params: { api: typeof gridApiRef.current }) => {
    gridApiRef.current = params.api;
  }, []);

  const handleQuery = useCallback(async () => {
    if (!gridApiRef.current || !query.trim()) return;

    const schema = gridApiRef.current.getStructuredSchema();
    const currentState = gridApiRef.current.getState();

    const prompt = `
Aşağıdaki AG Grid için kullanıcı isteğini JSON formatında uygula.
Mevcut grid durumu: ${JSON.stringify(currentState)}
Grid şeması: ${JSON.stringify(schema)}
Kullanıcı isteği: "${query}"
Yanıt olarak sadece { gridState, propertiesToIgnore, explanation } formatında JSON döndür.
    `.trim();

    setLastPrompt(prompt);
    setLoading(true);

    try {
      // ----- Qwen3-Coder-Next bağlantısı (DashScope — OpenAI uyumlu endpoint) -----
      // const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${YOUR_DASHSCOPE_API_KEY}`,
      //   },
      //   body: JSON.stringify({
      //     model: 'qwen3-coder-next',
      //     response_format: { type: 'json_object' },
      //     messages: [
      //       {
      //         role: 'system',
      //         content: 'Sen bir AG Grid uzmanısın. Kullanıcı isteğini AG Grid state formatında JSON olarak döndür. Yalnızca { gridState, propertiesToIgnore, explanation } anahtarlarını içeren geçerli bir JSON yanıtı ver.',
      //       },
      //       { role: 'user', content: prompt },
      //     ],
      //   }),
      // });
      // const data = await response.json();
      // const { gridState, propertiesToIgnore } = JSON.parse(data.choices[0].message.content);
      // gridApiRef.current.setState(gridState, propertiesToIgnore);
      console.log('AI Toolkit Prompt:', prompt);
    } finally {
      setLoading(false);
    }
  }, [query]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
          placeholder="Örn: Sadece Yüzme sporunu göster, altın madalyaya göre sırala"
          style={{ flex: 1, padding: '6px 12px', fontSize: 14, border: '1px solid #ccc', borderRadius: 4 }}
        />
        <button
          onClick={handleQuery}
          disabled={loading || !query.trim()}
          style={{ padding: '6px 16px', cursor: 'pointer', borderRadius: 4 }}
        >
          {loading ? 'Yükleniyor...' : 'Uygula'}
        </button>
      </div>
      {lastPrompt && (
        <details style={{ fontSize: 12, color: '#666' }}>
          <summary style={{ cursor: 'pointer' }}>Oluşturulan prompt</summary>
          <pre style={{ background: '#f5f5f5', padding: 8, borderRadius: 4, whiteSpace: 'pre-wrap', marginTop: 4 }}>{lastPrompt}</pre>
        </details>
      )}
      <TebDataGridXtra2
        className="ag-theme-quartz"
        rowData={aiRowData}
        columnDefs={aiColumnDefs}
        defaultColDef={{ sortable: true, resizable: true, flex: 1 }}
        animateRows
        onGridReady={onGridReady}
        style={{ height: 400, width: '100%' }}
      />
    </div>
  );
};