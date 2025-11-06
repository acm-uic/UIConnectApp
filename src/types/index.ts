export type User = {
  id: string;
  name: string;
  age?: number;
  location?: string;
};

export type Match = User & { interests?: string[] };
