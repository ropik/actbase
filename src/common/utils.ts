import * as React from 'react';
import { ReactNode } from 'react';

export interface AbsoluteComponent {
  child: any;
  x: number;
  y: number;
}

export interface MeasureResult {
  originX: number;
  originY: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

export interface ScaledSize {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
}

export interface ContextArgs {
  attach?: (node: ReactNode) => number;
  detach?: (node: ReactNode) => void;
  pop?: () => void;
  replace?: (node: ReactNode, index: number) => void;

  addComponent?: (child: AbsoluteComponent) => void;
  popComponent?: () => void;
  styles?: any;
}

export const ABContext = React.createContext<ContextArgs>({});

export const measure = (target: any): Promise<MeasureResult> => {
  return new Promise((resolve, reject) => {
    if (target) {
      resolve({ originX: 0, originY: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
    } else {
      reject(null);
    }
  });
};

export const getWindowSize = (): ScaledSize => {
  return { width: 0, height: 0, scale: 1, fontScale: 1 };
};

export const TEXT_STYLE_NAMES: string[] = [
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'fontVariant',
  'textShadowOffset',
  'textShadowRadius',
  'textShadowColor',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textAlignVertical',
  'includeFontPadding',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationColor',
  'textTransform',
  'writingDirection',
];

export const COVER_STYLE_NAMES: string[] = [
  'borderWidth',
  'borderColor',
  'borderRadius',
  'borderTopWidth',
  'borderTopColor',
  'borderLeftWidth',
  'borderLeftColor',
  'borderRightWidth',
  'borderRightColor',
  'borderBottomWidth',
  'borderBottomColor',
  'backgroundColor',
];

export const MARGIN_STYLES: string[] = [
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
];

export default {
  ABContext,
  measure,
  getWindowSize,
  TEXT_STYLE_NAMES,
  COVER_STYLE_NAMES,
};
