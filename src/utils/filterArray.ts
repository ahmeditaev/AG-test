import {IProduct} from "../redux/Products/models";

export interface IFilters {
  [key: string]: (value: any) => boolean;
}

export function filterArray(array: IProduct[], filters: IFilters) {
  const filterKeys = Object.keys(filters);

  return array.filter((item: any) => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true;
      return filters[key](item[key]);
    });
  });
}