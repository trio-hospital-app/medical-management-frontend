"use client";

import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import { Label } from "../../../../../components/ui/label";

import { RiSeparator } from "react-icons/ri";
import { Separator } from "../../../../../components/ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
  }),
  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
 
// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-unused-vars
function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Separator field</Label>
      <Separator />
    </div>
  );
}
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars, react-refresh/only-export-components
function FormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  return <Separator />;
}

// eslint-disable-next-line react-refresh/only-export-components, no-empty-pattern
function PropertiesComponent() {
  return <p>No properties for this element</p>;
}
