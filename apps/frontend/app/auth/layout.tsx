import Image from "next/image";
import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdKeyboardCommandKey } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPeople } from "react-icons/go";

interface CardProps {
    name: string;
    icon: IconType;
    skeletonCount: number;
    color: string;
}

interface FooterProps {
    text: string;
    icon: IconType;
}

const tiles: CardProps[] = [
    {
        name: "Todo",
        icon: FaRegCircle,
        skeletonCount: 2,
        color: "bg-gray-500",
    },
    {
        name: "In Progress",
        icon: FaCircleHalfStroke,
        skeletonCount: 2,
        color: "bg-yellow-500",
    },
    {
        name: "Done",
        icon: FaRegCheckCircle,
        skeletonCount: 1,
        color: "bg-green-500",
    },
];

const footerTags: FooterProps[] = [
    {
        text: "Live updates: see teammates' changes instantly",
        icon: AiOutlineThunderbolt,
    },
    {
        text: "Keyboard-first: ⌘K reaches everything",
        icon: MdKeyboardCommandKey,
    },
    {
        text: "Free for teams of up to 10 people",
        icon: GoPeople,
    },
];

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen flex">
            <div className="flex-1 bg-black text-white">
                <div className="m-14">
                    {/* header log */}
                    <span className="font-semibold flex gap-2 text-lg">
                        <Image
                            src="/logo.svg"
                            width={30}
                            height={30}
                            alt="logo"
                        />
                        Kanban-lite
                    </span>
                    {/* tagline section */}
                    <div className="my-25 flex flex-col gap-4">
                        <span className="text-4xl font-bold">
                            Plan, track and ship. Together, in real time.
                        </span>
                        <span className="text-gray-300">
                            An issue tracker for small teams. Every change shows
                            up on everyone's screen the moment it happens.
                        </span>
                        <div className="flex gap-3 mt-8">
                            {tiles.map((tile) => {
                                return (
                                    <Card
                                        name={tile.name}
                                        icon={tile.icon}
                                        skeletonCount={tile.skeletonCount}
                                        color={tile.color}
                                        key={tile.name}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* footer section */}
                    <div className="flex flex-col gap-3">
                        {footerTags.map((ft) => {
                            return (
                                <FooterTags
                                    text={ft.text}
                                    icon={ft.icon}
                                    key={ft.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex-1/5 text-black">{children}</div>
        </div>
    );
}

function FooterTags({ text, icon: Icon }: FooterProps) {
    return (
        <div className="flex items-center gap-3">
            <span className="border text-lg text-blue-800 bg-gray-950 rounded-md p-1">
                <Icon className="text-lg" />
            </span>
            <span className="text-sm">{text}</span>
        </div>
    );
}

function Card({ name, icon: Icon, skeletonCount }: CardProps) {
    const statusColor = {
        Todo: "bg-gray-500",
        "In Progress": "bg-yellow-500",
        Done: "bg-green-500",
    }[name];

    return (
        <div className="bg-gray-900 flex flex-col gap-2 border border-gray-800 flex-1 rounded-lg p-2 text-gray-400">
            <div className="flex items-center gap-3">
                <Icon className="text-xs" />
                <span className="text-xs">{name}</span>
            </div>

            {Array.from({ length: skeletonCount }).map((_, index) => (
                <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-2 flex flex-col gap-2"
                >
                    <div className="bg-gray-600 h-2 w-full rounded-full" />
                    <div className="bg-gray-600 h-1.5 w-1/2 rounded-full" />

                    <div className="flex justify-between">
                        <div className="bg-gray-600 h-3 w-1/4 rounded-full" />
                        <div
                            className={`${statusColor} h-3 w-3 rounded-full`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default layout;
