import { Factory } from 'rosie';

export const ItemFactory = new Factory()
  .sequence('id')
  .sequence('name', (i: number) => `Item ${i}`)
  .attr('created_at', () => new Date());

export type BulkEditOptions = {
  target: string | string[];
  actions: 'delete' | 'update' | 'upsert';
};

export type BaseItem = {
  id: number;
  name?: string;
};

export const useBulkEdit = (data: BaseItem[], options: BulkEditOptions) => {
  console.log('data: ', data, options);
  return { data };
};
