import { useRef, useState } from "react";
import { useWorkout } from "../context/WorkoutContext";
import { WorkoutType } from "../types/workout";

import PageHeading from "../components/common/PageHeading";
import { Button } from "../components/common/Buttons";
import BackButton from "../components/common/BackButton";
import Notice from "../components/common/Notice";
import { ConfirmModal } from "../components/common/Modals";

import { TbFileExport, TbFileImport } from "react-icons/tb";
import { MdOutlineDangerous } from "react-icons/md";

export default function ExportData() {
    const { workouts, addWorkout, clearWorkouts } = useWorkout();

    // Manage ConfirmModal state
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const openConfirmModal = () => setIsConfirmModalOpen(true);
    const closeConfirmModal = () => setIsConfirmModalOpen(false);

    // Trigger to show notice
    const noticeTriggerRef = useRef<() => void | null>(null);

    const [importedWorkouts, setImportedWorkouts] = useState<WorkoutType[] | null>(null);

    const handleExport = (): void => {
        const data: string = JSON.stringify(workouts);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "workouts.json";
        a.click();

        URL.revokeObjectURL(url);
    };

    const handleImport = (): void => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";

        input.onchange = async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            const data = await file.text();

            try {
                setImportedWorkouts(JSON.parse(data));
                openConfirmModal();
            } catch (error) {
                console.error("Error parsing JSON file", error);
            }
        };

        input.click();
    };

    const importData = () => {
        if (importedWorkouts && Array.isArray(importedWorkouts)) {
            importedWorkouts.forEach((workout) => addWorkout(workout));

            // Trigger the notice
            if (noticeTriggerRef.current) {
                noticeTriggerRef.current();
            }
        } else {
            console.error("Invalid file format");
        }
    };

    return (
        <>
            <ConfirmModal
                text="Are you sure you want to import data?"
                buttonText="Import"
                isOpen={isConfirmModalOpen}
                onClose={closeConfirmModal}
                action={() => {
                    closeConfirmModal();
                    importData();
                }}
            />

            <div className="content">
                <Notice
                    msg="Data imported successfully"
                    registerTrigger={(trigger) => (noticeTriggerRef.current = trigger)}
                />

                <BackButton to="/history" label="Workout history" />
                <PageHeading>Export data</PageHeading>

                <div className="flex gap-4 mt-8 flex-wrap">
                    <Button onClick={handleExport} variant="blue">
                        <TbFileExport size={20} /> Export workouts
                    </Button>
                    <Button onClick={handleImport}>
                        <TbFileImport size={20} /> Import workouts
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            if (confirm("Clear data?")) {
                                clearWorkouts();
                            }
                        }}
                    >
                        <MdOutlineDangerous size={20} />
                        Clear data
                    </Button>
                </div>
            </div>
        </>
    );
}
