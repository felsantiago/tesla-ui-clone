import React, { useEffect, useRef } from "react";

import useModel from "../useModel";

import { Container } from "./styles";

interface PropImages {
  desktop: string;
  mobile: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelId: string;
  overlayNode: React.ReactNode;
  images: PropImages;
}

const ModelSection: React.FC<Props> = ({
  modelId,
  overlayNode,
  children,
  images,
  ...props
}) => {
  const { registerModel } = useModel(modelId);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelId,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, modelId, overlayNode, registerModel]);

  return (
    <Container images={images} ref={ref} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
