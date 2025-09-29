import { Outlet } from "react-router-dom";
import { type DialogComponents, DialogProvider } from "@/ui/Dialog";
import ProjectDialog from "@/ui/ProjectDialog";

const dialog: DialogComponents = [
  { component: <ProjectDialog />, name: "ProjectDetail" },
];
export default function ContextPool() {
  return (
    // <DialogProvider components={dialog}>
    <DialogProvider components={dialog}>
      <Outlet />
    </DialogProvider>
  );
}
