import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const titleArticleAtom = atom("");
export const contentArticleAtom = atom("");
export const tagsArticleAtom = atom([]);
export const toolTipEditorAtom = atom(null);
export const isVisibleAtom = atom(false);
export const titleImageLinkAtom = atomWithStorage("titleImageLink", "");
