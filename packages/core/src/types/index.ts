import { DocModel } from '../models';

export type KeyType = string;

export type KeyPath = KeyType[];

export const TopicDirection = {
  LEFT: 'L', // 从右向左
  RIGHT: 'R', // 从左向右
  BOTTOM: 'B', // 从上往下
  MAIN: 'M' // root
};

export enum DiagramLayoutType {
  LEFT_TO_RIGHT,
  RIGHT_TO_LEFT,
  LEFT_AND_RIGHT,
  TOP_TO_BOTTOM
}

export const ViewModeMindMap = 'MindMap';

export const TopicVisualLevel = {
  ROOT: 0,
  PRIMARY: 1,
  NORMAL: 2
};

export const BlockType = {
  CONTENT: 'CONTENT',
  DESC: 'DESC'
};

export const FocusMode = {
  NORMAL: 'NORMAL',
  EDITING_CONTENT: 'EDITING_CONTENT',
  EDITING_DESC: 'EDITING_DESC',
  SHOW_POPUP: 'SHOW_POPUP',
  DRAGGING: 'DRAGGING'
};

export type ModelChangeCallback = () => void;

export type OnChangeFunction = (
  model: DocModel,
  callback?: ModelChangeCallback
) => void;

export const TopicRelationship = {
  ANCESTOR: 'ANCESTOR',
  DESCENDANT: 'DESCENDANT',
  SIBLING: 'SIBLING',
  NONE: 'NONE'
};

export const OpType = {
  ADD_SHEET: 'ADD_SHEET',
  SET_CURRENT_SHEET: 'SET_CURRENT_SHEET',
  DELETE_SHEET: 'DELETE_SHEET',
  DUPLICATE_SHEET: 'DUPLICATE_SHEET',
  SET_SHEET_TITLE: 'SET_SHEET_TITLE',


  ADD_MULTI_TOPICS: 'ADD_MULTI_TOPICS',
  ADD_MULTI_SIBLING: 'ADD_MULTI_SIBLING',
  ADD_MULTI_CHILD: 'ADD_MULTI_CHILD',
  ADD_MULTI_CHILD_WITH_EXTDATA: 'ADD_MULTI_CHILD_WITH_EXTDATA',

  TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
  COLLAPSE_ALL: 'COLLAPSE_ALL',
  EXPAND_ALL: 'EXPAND_ALL',
  EXPAND_TO: 'EXPAND_TO',
  ADD_CHILD: 'ADD_CHILD',
  ADD_SIBLING: 'ADD_SIBLING',
  TOPIC_CONTENT_TO_PLAIN_TEXT: 'TOPIC_CONTENT_TO_PLAIN_TEXT',
  INDENT: 'INDENT',
  OUTDENT: 'OUTDENT',
  DELETE_TOPIC: 'DELETE_TOPIC',
  FOCUS_TOPIC: 'FOCUS_TOPIC',
  SET_FOCUS_MODE: 'SET_FOCUS_MODE',
  SET_STYLE: 'SET_STYLE',
  CLEAR_ALL_CUSTOM_STYLE: 'CLEAR_ALL_CUSTOM_STYLE',
  SET_CONFIG: 'SET_CONFIG',
  SET_THEME: 'SET_THEME',
  SET_TOPIC_BLOCK: 'SET_TOPIC_BLOCK',
  DELETE_TOPIC_BLOCK: 'DELETE_TOPIC_BLOCK',
  // 节流函数使用，使用时不可以undo
  SET_TOPIC_BLOCK_CONTENT: 'SET_TOPIC_BLOCK_CONTENT',
  // SET_TOPIC_BLOCK_DESC: 'SET_TOPIC_BLOCK_DESC',
  // DELETE_TOPIC_BLOCK_DESC: 'DELETE_TOPIC_BLOCK_DESC',
  // SET_TOPIC_CONTENT: 'SET_TOPIC_CONTENT',
  // SET_TOPIC_DESC: 'SET_TOPIC_DESC',
  START_EDITING_CONTENT: 'START_EDITING_CONTENT',
  START_EDITING_DESC: 'START_EDITING_DESC',
  DRAG_AND_DROP: 'DRAG_AND_DROP',
  SET_EDITOR_ROOT: 'SET_EDITOR_ROOT',
  SET_LAYOUT_DIR: 'SET_LAYOUT_DIR',
  SWAP_UP: 'SWAP_UP',
  SWAP_DOWN: 'SWAP_DOWN'
};
