export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const spacerSizes: Record<SpacerSize, number> = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};
export interface SpacerProps {
    size?: SpacerSize;
    direction?: 'vertical' | 'horizontal';
}
