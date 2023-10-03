import useGlobalState from "../context/UseGlobalState";

function useSaveImage(id: number) {
  
  const globalState = useGlobalState();
  const { state, setState } = globalState;
  const isImageSaved = state.savedImages && state.savedImages.includes(id);

  const handleSaveImage = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isImageSaved) {
      setState({
        ...state,
        savedImages: state.savedImages?.filter((imageId) => imageId !== id),
      });
    } else {
      const currentSavedImages = state.savedImages || [];
      setState({
        ...state,
        savedImages: [...currentSavedImages, id],
      });
    }
  };

  return { isImageSaved, handleSaveImage };
}

export default useSaveImage;
