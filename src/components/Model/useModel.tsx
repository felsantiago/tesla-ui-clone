import React, { useCallback, useEffect } from "react";

import ModelsContext from "./ModelContext";

export default function useModel(modelId: string) {
  const { registerModel, unregisterModel, getModelByName } = React.useContext(
    ModelsContext
  );

  useEffect(() => () => unregisterModel(modelId), [modelId, unregisterModel]);

  const getModel = useCallback(() => getModelByName(modelId), [
    getModelByName,
    modelId,
  ]);

  return {
    registerModel,
    getModel,
  };
}
