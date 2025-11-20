export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Orientation = 'portrait' | 'landscape';
export type PlantImages = { path: string; name: string; alias?: string, price?: number }[];

export const breakpointOrder: Record<Breakpoint, number> = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};