import Designer from "../components/Designer";
import { useEffect, useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
// import DragOverlayWrapper from "./DragOverlayWrapper";
import useDesigner from "../components/hooks/useDesigner";
import { ImSpinner2 } from "react-icons/im";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { toast } from "../../../../components/ui/use-toast";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Confetti from "react-confetti";
import PreviewDialogBtn from "../components/PreviewDialogBtn";
import SaveFormBtn from "../components/SaveFormBtn";
import PublishFormBtn from "../components/PublishFormBtn";

function FormBuilder() {
  const [form, setForm] = useState({
    // Provide default values for form properties
    id:1,
    content: "[]", // Default to an empty array as JSON string
    published: false,
    shareURL: "example-share-url",
    // Add other form properties with default values as needed
  });
  const { setElements, setSelectedElement } = useDesigner();
  const [isReady, setIsReady] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements, isReady, setSelectedElement]);

  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/submit/${form.shareURL}`;

  if (form.published) {
    return (
      <>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={1000}
        />
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="max-w-md">
            <h1 className="text-center text-4xl font-bold text-primary border-b pb-2 mb-10">
              🎊🎊 Form Published 🎊🎊
            </h1>
            <h2 className="text-2xl">Share this form</h2>
            <h3 className="text-xl text-muted-foreground border-b pb-10">
              Anyone with the link can view and submit the form
            </h3>
            <div className="my-4 flex flex-col gap-2 items-center w-full border-b pb-4">
              <Input className="w-full" readOnly value={shareUrl} />
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  toast({
                    title: "Copied!",
                    description: "Link copied to clipboard",
                  });
                }}
              >
                Copy link
              </Button>
            </div>
            <div className="flex justify-between">
              <Button variant={"link"} asChild>
                <Link to="/" className="gap-2">
                  <BsArrowLeft />
                  Go back home
                </Link>
              </Button>
              <Button variant={"link"} asChild>
                <Link to={`/forms/1`} className="gap-2">
                  Form details
                  <BsArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <DndContext sensors={sensors}>
      <div className="fixed top-0 pt-[60px] bottom-0 left-0 right-0 bg-black z-[59]">
        <main className="flex flex-col w-full h-full">
          <nav className="flex justify-between border-b-2 p-2 gap-3 items-center bg-blue-600 text-white">
            <h2 className="truncate font-medium">
              <span className="text-muted-foreground mr-2">Form:</span>
              <span className="font-bold"> Name of Form</span>
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <PreviewDialogBtn />
                {!form.published && (
                  <>
                    <SaveFormBtn id={form.id} />
                    <PublishFormBtn id={form.id} />
                  </>
                )}
              </div>
            </div>
          </nav>
          <div className="flex w-fullflex-grow items-center justify-center relative overflow-y-auto h-full bg-accent bg-[url(/assets/paper.svg)] dark:bg-[url(/assets/paper-dark.svg)]">
            <Designer />
          </div>
        </main>
      </div>
    </DndContext>
  );
}

export default FormBuilder;
