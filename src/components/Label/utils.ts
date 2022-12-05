/* Types */
import { TypographySpecification, TypographyType } from './types';

export function getTypographySpecification(type: TypographyType): TypographySpecification {
  const typographySpecs: { [key: string]: TypographySpecification } = {
    h1: { size: 30, lineHeight: 38 },
    h2: { size: 26, lineHeight: 34 },
    h3: { size: 22, lineHeight: 28 },
    h4: { size: 18, lineHeight: 26 },
    h5: { size: 16, lineHeight: 22 },
    body: { size: 14, lineHeight: 20 },
    footnote: { size: 12, lineHeight: 16 },
  };

  return typographySpecs[type];
}
