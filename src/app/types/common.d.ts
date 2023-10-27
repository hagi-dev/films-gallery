export interface OptionsSelect {
  label: string,
  value: string | number,
  op?: string,
}

export type OptionsFormatSelected = Pick<OptionsSelect, 'label' | 'value'> & {
  isSelected: boolean
}
