import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TebTreeView from '../components/TebTreeView/TebTreeView';
import { TreeNode } from '../utils/props';

export default {
  title: "Components/TebTreeView",
  component: TebTreeView,
  argTypes: {
    onTreeItemClicked: { action: 'itemClicked' },
    onTreeItemSelected: { action: 'itemSelected' },
    hasCheckbox: { control: 'boolean', type: { name: 'boolean' } },
    hasBorder: { control: 'boolean', type: { name: 'boolean' } },
    loadChildrenDynamically: { table: { disable: true } },
    activeItemId: { control: 'text', type: { name: 'string' } },
  },
} as ComponentMeta<typeof TebTreeView>;

const Template: ComponentStory<typeof TebTreeView> = (args) => (
  <TebTreeView {...args} />
);

// ─── Basit liste (checkbox yok) ───────────────────────────────────────────────

export const BasitListe = Template.bind({});
BasitListe.args = {
  hasCheckbox: false,
  hasBorder: true,
  activeItemId: '2',
  data: [
    { id: '1', name: 'Türkiye', parentId: '0', children: [] },
    { id: '2', name: 'Almanya', parentId: '0', children: [] },
    { id: '3', name: 'Fransa', parentId: '0', children: [] },
  ],
};

// ─── İç içe yapı ─────────────────────────────────────────────────────────────

export const IcIceYapi = Template.bind({});
IcIceYapi.args = {
  hasCheckbox: false,
  hasBorder: true,
  activeItemId: 'kadikoy',
  data: [
    {
      id: 'turkiye',
      name: 'Türkiye',
      parentId: '0',
      children: [
        {
          id: 'istanbul',
          name: 'İstanbul',
          parentId: 'turkiye',
          children: [
            { id: 'besiktas', name: 'Beşiktaş', parentId: 'istanbul', children: [] },
            { id: 'kadikoy', name: 'Kadıköy', parentId: 'istanbul', children: [] },
            { id: 'sisli', name: 'Şişli', parentId: 'istanbul', children: [] },
          ],
        },
        {
          id: 'ankara',
          name: 'Ankara',
          parentId: 'turkiye',
          children: [
            { id: 'cankaya', name: 'Çankaya', parentId: 'ankara', children: [] },
            { id: 'kecioren', name: 'Keçiören', parentId: 'ankara', children: [] },
          ],
        },
        { id: 'izmir', name: 'İzmir', parentId: 'turkiye', children: [] },
      ],
    },
    {
      id: 'almanya',
      name: 'Almanya',
      parentId: '0',
      children: [
        { id: 'berlin', name: 'Berlin', parentId: 'almanya', children: [] },
        { id: 'hamburg', name: 'Hamburg', parentId: 'almanya', children: [] },
      ],
    },
  ],
};

// ─── Checkbox ile seçim ───────────────────────────────────────────────────────

export const CheckboxIleSecim = Template.bind({});
CheckboxIleSecim.args = {
  hasCheckbox: true,
  hasBorder: true,
  activeItemId: 'nodejs',
  data: [
    {
      id: 'frontend',
      name: 'Frontend',
      parentId: '0',
      children: [
        { id: 'react', name: 'React', parentId: 'frontend', children: [] },
        { id: 'vue', name: 'Vue', parentId: 'frontend', children: [] },
        { id: 'angular', name: 'Angular', parentId: 'frontend', children: [] },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      parentId: '0',
      children: [
        { id: 'nodejs', name: 'Node.js', parentId: 'backend', children: [] },
        { id: 'dotnet', name: '.NET', parentId: 'backend', children: [] },
        { id: 'java', name: 'Java', parentId: 'backend', children: [] },
      ],
    },
    {
      id: 'mobile',
      name: 'Mobile',
      parentId: '0',
      children: [
        { id: 'rn', name: 'React Native', parentId: 'mobile', children: [] },
        { id: 'flutter', name: 'Flutter', parentId: 'mobile', children: [] },
      ],
    },
  ],
};

// ─── Border yok ──────────────────────────────────────────────────────────────

export const BordersuzListe = Template.bind({});
BordersuzListe.args = {
  hasCheckbox: false,
  hasBorder: false,
  activeItemId: 'vue',
  data: [
    {
      id: 'frontend',
      name: 'Frontend',
      parentId: '0',
      children: [
        { id: 'react', name: 'React', parentId: 'frontend', children: [] },
        { id: 'vue', name: 'Vue', parentId: 'frontend', children: [] },
      ],
    },
    {
      id: 'backend',
      name: 'Backend',
      parentId: '0',
      children: [
        { id: 'nodejs', name: 'Node.js', parentId: 'backend', children: [] },
        { id: 'dotnet', name: '.NET', parentId: 'backend', children: [] },
      ],
    },
  ],
};

// ─── Derin iç içe (3 seviye) ─────────────────────────────────────────────────

export const DerinIcIce = Template.bind({});
DerinIcIce.args = {
  hasCheckbox: true,
  hasBorder: true,
  activeItemId: 'backend-takim',
  data: [
    {
      id: 'sirket',
      name: 'Şirket',
      parentId: '0',
      children: [
        {
          id: 'it',
          name: 'IT Departmanı',
          parentId: 'sirket',
          children: [
            {
              id: 'yazilim',
              name: 'Yazılım Ekibi',
              parentId: 'it',
              children: [
                { id: 'frontend-takim', name: 'Frontend Takımı', parentId: 'yazilim', children: [] },
                { id: 'backend-takim', name: 'Backend Takımı', parentId: 'yazilim', children: [] },
              ],
            },
            { id: 'ag', name: 'Ağ & Altyapı', parentId: 'it', children: [] },
          ],
        },
        {
          id: 'finans',
          name: 'Finans Departmanı',
          parentId: 'sirket',
          children: [
            { id: 'muhasebe', name: 'Muhasebe', parentId: 'finans', children: [] },
            { id: 'butce', name: 'Bütçe & Planlama', parentId: 'finans', children: [] },
          ],
        },
      ],
    },
  ],
};

// ─── Dinamik children yükleme ─────────────────────────────────────────────────
// onLoadChildren args üzerinden geçirilirse Storybook onu action stub'a
// dönüştürdüğü için fonksiyon render içine sabitlendi.

const childrenMap: Record<string, TreeNode[]> = {
  turkiye: [
    { id: 'istanbul', name: 'İstanbul', parentId: 'turkiye', children: [] },
    { id: 'ankara',   name: 'Ankara',   parentId: 'turkiye', children: [] },
    { id: 'izmir',    name: 'İzmir',    parentId: 'turkiye', children: [] },
  ],
  istanbul: [
    { id: 'besiktas', name: 'Beşiktaş', parentId: 'istanbul', children: [] },
    { id: 'kadikoy',  name: 'Kadıköy',  parentId: 'istanbul', children: [] },
    { id: 'sisli',    name: 'Şişli',    parentId: 'istanbul', children: [] },
    { id: 'uskudar',  name: 'Üsküdar',  parentId: 'istanbul', children: [] },
    { id: 'fatih',    name: 'Fatih',    parentId: 'istanbul', children: [] },
  ],
  almanya: [
    { id: 'berlin',  name: 'Berlin',  parentId: 'almanya', children: [] },
    { id: 'hamburg', name: 'Hamburg', parentId: 'almanya', children: [] },
  ],
  fransa: [
    { id: 'paris', name: 'Paris', parentId: 'fransa', children: [] },
    { id: 'lyon',  name: 'Lyon',  parentId: 'fransa', children: [] },
  ],
};

export const DinamikChildrenYukleme: ComponentStory<typeof TebTreeView> = (args) => (
  <TebTreeView
    {...args}
    onLoadChildren={(node) => childrenMap[node.id] ?? []}
  />
);
DinamikChildrenYukleme.args = {
  hasCheckbox: false,
  hasBorder: true,
  loadChildrenDynamically: true,
  data: [
    { id: 'turkiye', name: 'Türkiye', parentId: '0', children: [] },
    { id: 'almanya', name: 'Almanya', parentId: '0', children: [] },
    { id: 'fransa',  name: 'Fransa',  parentId: '0', children: [] },
  ],
};
DinamikChildrenYukleme.argTypes = {
  activeItemId: { table: { disable: true } },
  loadChildrenDynamically: { table: { disable: false }, control: 'boolean', type: { name: 'boolean' } },
};
DinamikChildrenYukleme.parameters = {
  docs: {
    source: {
      code: `
const childrenMap: Record<string, TreeNode[]> = {
  turkiye: [
    { id: 'istanbul', name: 'İstanbul', parentId: 'turkiye', children: [] },
    { id: 'ankara',   name: 'Ankara',   parentId: 'turkiye', children: [] },
    { id: 'izmir',    name: 'İzmir',    parentId: 'turkiye', children: [] },
  ],
  istanbul: [
    { id: 'besiktas', name: 'Beşiktaş', parentId: 'istanbul', children: [] },
    { id: 'kadikoy',  name: 'Kadıköy',  parentId: 'istanbul', children: [] },
    { id: 'sisli',    name: 'Şişli',    parentId: 'istanbul', children: [] },
    { id: 'uskudar',  name: 'Üsküdar',  parentId: 'istanbul', children: [] },
    { id: 'fatih',    name: 'Fatih',    parentId: 'istanbul', children: [] },
  ],
  almanya: [
    { id: 'berlin',  name: 'Berlin',  parentId: 'almanya', children: [] },
    { id: 'hamburg', name: 'Hamburg', parentId: 'almanya', children: [] },
  ],
  fransa: [
    { id: 'paris', name: 'Paris', parentId: 'fransa', children: [] },
    { id: 'lyon',  name: 'Lyon',  parentId: 'fransa', children: [] },
  ],
};

<TebTreeView
  hasCheckbox={false}
  hasBorder={true}
  loadChildrenDynamically={true}
  onLoadChildren={(node) => childrenMap[node.id] ?? []}
  data={[
    { id: 'turkiye', name: 'Türkiye', parentId: '0', children: [] },
    { id: 'almanya', name: 'Almanya', parentId: '0', children: [] },
    { id: 'fransa',  name: 'Fransa',  parentId: '0', children: [] },
  ]}
/>
      `.trim(),
    },
  },
};

// ─── ReactNode name (span / div içeren label) ─────────────────────────────────

const badge = (label: string, color: string) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
    {label}
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        padding: '1px 6px',
        borderRadius: 10,
        background: color,
        color: '#fff',
        lineHeight: 1.6,
      }}
    >
      YENİ
    </span>
  </span>
);

const statusDot = (label: string, active: boolean) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: active ? '#22c55e' : '#ef4444',
        flexShrink: 0,
        display: 'inline-block',
      }}
    />
    {label}
  </span>
);

export const ReactNodeName = Template.bind({});
ReactNodeName.storyName = 'ReactNode Name (span / div)';
ReactNodeName.args = {
  hasCheckbox: true,
  hasBorder: true,
  activeItemId: 'nodejs',
  data: [
    {
      id: 'frontend',
      name: badge('Frontend', '#6366f1'),
      children: [
        { id: 'react',   name: statusDot('React', true) },
        { id: 'vue',     name: statusDot('Vue', true) },
        { id: 'angular', name: statusDot('Angular', false) },
      ],
    },
    {
      id: 'backend',
      name: badge('Backend', '#f59e0b'),
      children: [
        { id: 'nodejs', name: statusDot('Node.js', true) },
        { id: 'dotnet', name: statusDot('.NET', false) },
        {
          id: 'java',
          name: (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <strong>Java</strong>
              <span style={{ fontSize: 11, color: '#9ca3af' }}>(LTS)</span>
            </span>
          ),
        },
      ],
    },
    {
      id: 'mobile',
      name: (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 14 }}>📱</span>
          <span style={{ fontWeight: 600, background: '#3b82f6', color: '#fff', padding: '1px 8px', borderRadius: 4 }}>Mobile</span>
        </div>
      ),
      children: [
        { id: 'rn',      name: statusDot('React Native', true) },
        { id: 'flutter', name: statusDot('Flutter', true) },
      ],
    },
  ],
};
