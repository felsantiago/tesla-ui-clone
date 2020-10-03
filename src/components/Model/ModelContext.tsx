import React, { ReactNode } from "react";

export interface CarModel {
  modelId: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelId: string) => void;
  getModelByName: (modelId: string) => CarModel | null;
}

// Export with default values
export default React.createContext<ModelsContext>({} as ModelsContext);
