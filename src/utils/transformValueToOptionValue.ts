export const transformValueToOptionValue = (item: {id: number, name: string}) => ({
  value: item.id,
  label: item.name
})