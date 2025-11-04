import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './index';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de seleção de data com label opcional, estilizado conforme o design system do projeto. Suporta estados de foco, hover e modo escuro.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label exibida acima do campo de data',
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo no formato YYYY-MM-DD',
    },
    required: {
      control: 'boolean',
      description: 'Define se o campo é obrigatório',
    },
    className: {
      control: 'text',
      description: 'Classes adicionais para estilização externa',
    },
    onChange: {
      action: 'alterado',
      description: 'Função chamada ao alterar a data',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: new Date().toISOString().split('T')[0],
    onChange: (val) => console.log('Data alterada:', val),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Data da transação',
    value: new Date().toISOString().split('T')[0],
    onChange: (val) => console.log('Data alterada:', val),
  },
};

export const Required: Story = {
  args: {
    label: 'Data obrigatória',
    required: true,
    value: new Date().toISOString().split('T')[0],
    onChange: (val) => console.log('Data alterada:', val),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Data desabilitada',
    value: new Date().toISOString().split('T')[0],
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de campo desabilitado (basta ajustar o componente se quiser suporte a `disabled`).',
      },
    },
  },
};
