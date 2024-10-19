export interface InputType {
  label: string;
  value: string;
  onChange: (value: string) => void;
  values?: Array<string>; // pokud se jedná o select
  type: string;
  id: string;
}
