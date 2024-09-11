export interface IDraggableItem {
  id: string;
  content: string;
  index: number;
  children?: IDraggableItem[];
  icon: string;
}

export const generateUUID = () => {
  // Generate a random hexadecimal string
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const generateFolders = (
  length = 5,
  startFrom = 0,
): IDraggableItem[] => {
  const folders = Array.from(
    { length },
    (_, index) => `Folder ${index + startFrom + 1}`,
  );
  return folders.map((f, index) => {
    return {
      id: generateUUID(),
      content: f,
      index,
      icon: 'folder',
      children: [],
    };
  });
};

export const generateFiles = (length = 5, startFrom = 0): IDraggableItem[] => {
  const files = Array.from(
    { length },
    (_, index) => `File ${index + startFrom + 1}`,
  );
  return files.map((f, index) => {
    return {
      id: generateUUID(),
      content: f,
      index,
      icon: 'description',
    };
  });
};
