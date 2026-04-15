import React, { useState, useMemo, useCallback } from 'react';
import { Box, Paper, Typography, Divider, Chip } from '@mui/material';
import TebAutoComplete from '../../components/TebAutoComplete/TebAutoComplete';
import { TebTelephoneInput } from '../../components/TebTelephoneInput';
import { TebDataGridEnterprise } from '../../components/TebDataGridEnterprise';
import { InputSize } from '../../utils/types';

type DepartmanOption = { label: string; value: string };

interface Personel {
  id: number;
  ad: string;
  departman: string;
  pozisyon: string;
  ulkeKodu: string;
  ulkeTelefonKodu: string;
  telefon: string;
  maas: number;
  aktif: boolean;
}

const departmanOptions: DepartmanOption[] = [
  { label: 'Tümü', value: 'ALL' },
  { label: 'Yazılım', value: 'Yazılım' },
  { label: 'Tasarım', value: 'Tasarım' },
  { label: 'Pazarlama', value: 'Pazarlama' },
  { label: 'İnsan Kaynakları', value: 'İnsan Kaynakları' },
  { label: 'Finans', value: 'Finans' },
];

const tumPersonel: Personel[] = [
  { id: 1,  ad: 'Ahmet Yılmaz',   departman: 'Yazılım',          pozisyon: 'Kıdemli Geliştirici',    ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5321112233', maas: 85000, aktif: true  },
  { id: 2,  ad: 'Ayşe Kara',      departman: 'Yazılım',          pozisyon: 'Full Stack Geliştirici', ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5449876543', maas: 78000, aktif: true  },
  { id: 3,  ad: 'Hasan Yıldız',   departman: 'Yazılım',          pozisyon: 'DevOps Mühendisi',       ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5361234567', maas: 95000, aktif: false },
  { id: 4,  ad: 'Ecem Polat',     departman: 'Yazılım',          pozisyon: 'Frontend Geliştirici',   ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5845556677', maas: 75000, aktif: true  },
  { id: 5,  ad: 'Selin Koç',      departman: 'Tasarım',          pozisyon: 'Grafik Tasarımcı',       ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5072223344', maas: 58000, aktif: true  },
  { id: 6,  ad: 'Burak Demir',    departman: 'Tasarım',          pozisyon: 'UX Tasarımcı',           ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5189991122', maas: 72000, aktif: true  },
  { id: 7,  ad: 'Mehmet Çelik',   departman: 'Pazarlama',        pozisyon: 'Pazarlama Uzmanı',       ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5264445566', maas: 65000, aktif: false },
  { id: 8,  ad: 'Can Özdemir',    departman: 'Pazarlama',        pozisyon: 'Dijital Pazarlama',      ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5621119900', maas: 70000, aktif: true  },
  { id: 9,  ad: 'Ali Şahin',      departman: 'İnsan Kaynakları', pozisyon: 'İK Uzmanı',             ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5413336677', maas: 60000, aktif: true  },
  { id: 10, ad: 'Deniz Kaya',     departman: 'İnsan Kaynakları', pozisyon: 'İK Müdürü',             ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5738882255', maas: 88000, aktif: true  },
  { id: 11, ad: 'Zeynep Arslan',  departman: 'Finans',           pozisyon: 'Mali Analist',           ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5307778899', maas: 90000, aktif: true  },
  { id: 12, ad: 'Fatma Yılmaz',   departman: 'Finans',           pozisyon: 'Muhasebeci',             ulkeKodu: 'TR', ulkeTelefonKodu: '+90', telefon: '5552224488', maas: 68000, aktif: true  },
];

const columnDefs = [
  { field: 'ad',        headerName: 'Ad Soyad',   flex: 2, filter: 'agTextColumnFilter' },
  { field: 'departman', headerName: 'Departman',  flex: 1, filter: 'agSetColumnFilter'  },
  { field: 'pozisyon',  headerName: 'Pozisyon',   flex: 2 },
  {
    field: 'maas',
    headerName: 'Maaş (₺)',
    flex: 1,
    filter: 'agNumberColumnFilter',
    valueFormatter: (p: { value: number }) =>
      p.value != null ? new Intl.NumberFormat('tr-TR').format(p.value) : '',
  },
  {
    field: 'aktif',
    headerName: 'Durum',
    flex: 1,
    valueFormatter: (p: { value: boolean }) => (p.value ? 'Aktif' : 'Pasif'),
    cellStyle: (p: { value: boolean }) => ({
      color: p.value ? '#16a34a' : '#dc2626',
      fontWeight: 600,
    }),
  },
];

export const PersonelArama: React.FC = () => {
  const [secilenDepartman, setSecilenDepartman] = useState<DepartmanOption | null>(null);
  const [secilenPersonel, setSecilenPersonel] = useState<Personel | null>(null);

  const filtrelenmisVeri = useMemo(() => {
    if (!secilenDepartman || secilenDepartman.value === 'ALL') {
      return tumPersonel;
    }
    return tumPersonel.filter((p) => p.departman === secilenDepartman.value);
  }, [secilenDepartman]);

  const handleRowClicked = useCallback((event: { data: Personel }) => {
    setSecilenPersonel(event.data);
  }, []);

  const handleDepartmanChange = useCallback(
    (_: React.SyntheticEvent, value: DepartmanOption | null) => {
      setSecilenDepartman(value);
      setSecilenPersonel(null);
    },
    [],
  );

  return (
    <Box sx={{ p: 3, background: '#f5f7fa', minHeight: '100vh' }}>
      <Typography variant="h5" fontWeight={700} mb={0.5} color="text.primary">
        Personel Arama
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Departman seçerek listeyi filtreleyin; tablodan bir satıra tıklayarak personelin telefonunu görüntüleyin.
      </Typography>

      {/* Filters */}
      <Paper elevation={1} sx={{ p: 2.5, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Sol: Telefon görüntüsü */}
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={600} display="block" mb={1}>
              SEÇİLEN PERSONEL TELEFONU
            </Typography>
            <TebTelephoneInput
              ulkeKodu={secilenPersonel?.ulkeKodu ?? 'TR'}
              ulkeTelefonKodu={secilenPersonel?.ulkeTelefonKodu ?? '+90'}
              telefonNumarasi={secilenPersonel ? secilenPersonel.telefon : ''}
            />
            <Typography
              variant="caption"
              display="block"
              mt={0.75}
              sx={{ color: secilenPersonel ? 'primary.main' : 'text.disabled' }}
            >
              {secilenPersonel
                ? `${secilenPersonel.ad}  •  ${secilenPersonel.pozisyon}`
                : 'Telefon görmek için tablodan bir personel seçin'}
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Sağ: Departman filtresi */}
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={600} display="block" mb={1}>
              DEPARTMAN FİLTRESİ
            </Typography>
            <TebAutoComplete
              id="departman-filter"
              label="Departman Seçin"
              placeholder="Departman ara..."
              options={departmanOptions}
              value={secilenDepartman}
              disabled={false}
              error={false}
              size={InputSize.small}
              noOptionsText="Departman bulunamadı"
              getOptionLabel={(opt: DepartmanOption) => opt.label}
              isOptionEqualToValue={(opt: DepartmanOption, val: DepartmanOption) =>
                opt.value === val.value
              }
              onChange={handleDepartmanChange}
            />
            <Typography
              variant="caption"
              display="block"
              mt={0.75}
              sx={{ color: secilenDepartman && secilenDepartman.value !== 'ALL' ? 'primary.main' : 'text.disabled' }}
            >
              {secilenDepartman && secilenDepartman.value !== 'ALL'
                ? `${filtrelenmisVeri.length} personel listeleniyor`
                : 'Tüm departmanlar gösteriliyor'}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Grid */}
      <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box
          sx={{
            px: 2.5,
            py: 1.5,
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Personel Listesi
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {secilenDepartman && secilenDepartman.value !== 'ALL' && (
              <Chip
                label={secilenDepartman.label}
                size="small"
                color="primary"
                onDelete={() => {
                  setSecilenDepartman(null);
                  setSecilenPersonel(null);
                }}
              />
            )}
            <Chip label={`${filtrelenmisVeri.length} kayıt`} size="small" variant="outlined" />
          </Box>
        </Box>
        <TebDataGridEnterprise
          className="ag-theme-quartz"
          rowData={filtrelenmisVeri}
          columnDefs={columnDefs}
          defaultColDef={{ sortable: true, resizable: true, flex: 1 }}
          rowSelection="single"
          animateRows
          onRowClicked={handleRowClicked}
          style={{ height: 450, width: '100%' }}
        />
      </Paper>
    </Box>
  );
};
