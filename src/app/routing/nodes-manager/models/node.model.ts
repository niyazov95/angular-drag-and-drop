export interface IDraggableItem {
  content: string;
  children: IDraggableItem[];
}

export const NESTED_DATA: IDraggableItem[] = [
  {
    content: 'Demo 1',
    children: [
      {
        content: 'Nested 1',
        children: [],
      },
      {
        content: 'Nested 2',
        children: [],
      },
      {
        content: 'Nested 3',
        children: [],
      },
    ],
  },
  {
    content: 'Demo 2',
    children: [],
  },
  {
    content: 'Demo 3',
    children: [],
  },
  {
    content: 'Demo 4',
    children: [],
  },
  {
    content: 'Demo 5',
    children: [],
  },
  {
    content: 'Demo 6',
    children: [],
  },
  {
    content: 'Demo 7',
    children: [],
  },
  {
    content: 'Demo 8',
    children: [],
  },
  {
    content: 'Demo 9',
    children: [],
  },
  {
    content: 'Demo 10',
    children: [
      {
        content: 'Nested 1',
        children: [],
      },
      {
        content: 'Nested 2',
        children: [],
      },
      {
        content: 'Nested 3',
        children: [],
      },
    ],
  },
];
