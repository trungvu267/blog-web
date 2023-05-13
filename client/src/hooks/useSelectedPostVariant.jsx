import { selectVariantAtom } from "../states/selectedVariant";
import { useAtom } from "jotai";
const useSelectedPostVariant = () => {
  const [selectedPostVariant, setSelectedPostVariant] =
    useAtom(selectVariantAtom);
  const setEditVariant = () => {
    setSelectedPostVariant("edit");
  };
  const setPreviewVariant = () => {
    setSelectedPostVariant("preview");
  };
  return {
    selectedPostVariant,
    setSelectedPostVariant,
    setEditVariant,
    setPreviewVariant,
  };
};

export default useSelectedPostVariant;
