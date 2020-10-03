import React from "react";

import { ModelsWrapper, ModelSection } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";

import { Spacer } from "./styles";

const Page: React.FC = () => {
  const items = [
    {
      id: "f030391a-b538-4d7d-8a15-8f660f0202f5",
      name: "Model Y",
      description: "Order Online for Touchless Delivery",
      images: {
        desktop: "/images/Desktop-ModelY.jpeg",
        mobile: "/images/Mobile-ModelY.jpeg",
      },
    },
    {
      id: "7530ae4a-206b-49e5-8e60-a6c7b68179a3",
      name: "Model X",
      description: "Order Online for Touchless Delivery",
      images: {
        desktop: "/images/Desktop-ModelX.jpeg",
        mobile: "/images/Mobile-ModelX.jpeg",
      },
    },
    {
      id: "30bcd296-2a41-48c0-b597-a7316c7c2b83",
      name: "Model 3",
      description: "Order Online for Touchless Delivery",
      images: {
        desktop: "/images/Desktop-Model3.jpeg",
        mobile: "/images/Mobile-Model3.jpeg",
      },
    },
    {
      id: "e39f2b25-2a07-419b-b52a-750db3758813",
      name: "Model S",
      description: "Order Online for Touchless Delivery",
      images: {
        desktop: "/images/Desktop-ModelS.jpeg",
        mobile: "/images/Mobile-ModelS.jpeg",
      },
    },
    {
      id: "e2ecf699-955b-4676-ae45-e89e30e4c91c",
      name: "Only $1.49/Watt for Solar on Existing Roofs",
      description: "Lowest Cost in America - Money-back guarantee",
      images: {
        desktop: "/images/Desktop-SolarPanels.jpeg",
        mobile: "/images/Mobile-SolarPanels.jpeg",
      },
    },
    {
      id: "634169dd-9d3f-4f0f-ab7c-40eefd3ddac3",
      name: "Solar for New Roofs",
      description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
      images: {
        desktop: "/images/Desktop-SolarRoof.jpeg",
        mobile: "/images/Mobile-SolarRoof.jpeg",
      },
    },
    {
      id: "5f4184e2-23f1-49e3-84db-f5c1689da977",
      name: "Accessories",
      description: "",
      images: {
        desktop: "/images/Desktop-Accessories.jpeg",
        mobile: "/images/Mobile-Accessories.jpeg",
      },
    },
  ];

  return (
    <ModelsWrapper>
      <div>
        {items.map((item) => (
          <ModelSection
            key={item.id}
            images={item.images}
            modelId={item.id}
            overlayNode={
              <DefaultOverlayContent
                label={item.name}
                description={item.description}
              />
            }
          />
        ))}
      </div>

      <Spacer />

      <UniqueOverlay />
    </ModelsWrapper>
  );
};

export default Page;
