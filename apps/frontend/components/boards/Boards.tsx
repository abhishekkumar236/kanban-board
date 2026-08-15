import { BoardsTable } from "./BoardsTable";
import { type Boards } from "./column";

async function getBoards(): Promise<Boards[]> {
    return [
        {
            id: "board-001",
            title: "Product Roadmap",
            description:
                "Plan and track upcoming product features and releases.",
            startedAt: 1704067200000,
            creator: "John Doe",
        },
        {
            id: "board-002",
            title: "Marketing Campaign",
            description:
                "Manage marketing campaigns, content, and promotional activities.",
            startedAt: 1706745600000,
            creator: "Sarah Wilson",
        },
        {
            id: "board-003",
            title: "Website Redesign",
            description:
                "Track tasks and progress for the company website redesign.",
            startedAt: 1709251200000,
            creator: "Michael Smith",
        },
        {
            id: "board-004",
            title: "Mobile App",
            description:
                "Plan development and improvements for the mobile application.",
            startedAt: 1711929600000,
            creator: "Emily Johnson",
        },
        {
            id: "board-005",
            title: "Q1 Planning",
            description: "Define goals, priorities, and deliverables for Q1.",
            startedAt: 1714521600000,
            creator: "David Brown",
        },
        {
            id: "board-006",
            title: "Engineering Sprint",
            description: "Organize engineering tasks and sprint objectives.",
            startedAt: 1717200000000,
            creator: "Alex Martin",
        },
        {
            id: "board-007",
            title: "Customer Feedback",
            description:
                "Collect and organize feedback from customers and users.",
            startedAt: 1719792000000,
            creator: "Jessica Davis",
        },
        {
            id: "board-008",
            title: "Design System",
            description:
                "Build and maintain the shared design system and components.",
            startedAt: 1722470400000,
            creator: "Daniel Taylor",
        },
        {
            id: "board-009",
            title: "Bug Tracking",
            description: "Track reported bugs, fixes, and software issues.",
            startedAt: 1725148800000,
            creator: "Robert Anderson",
        },
        {
            id: "board-010",
            title: "Content Calendar",
            description:
                "Plan upcoming blog posts, social media, and other content.",
            startedAt: 1727740800000,
            creator: "Sophia Thomas",
        },
        {
            id: "board-011",
            title: "Sales Pipeline",
            description: "Track leads, opportunities, and sales activities.",
            startedAt: 1730419200000,
            creator: "James Jackson",
        },
        {
            id: "board-012",
            title: "Team Onboarding",
            description:
                "Manage onboarding tasks and resources for new team members.",
            startedAt: 1733011200000,
            creator: "Olivia White",
        },
        {
            id: "board-013",
            title: "Research & Development",
            description:
                "Explore new technologies, ideas, and product opportunities.",
            startedAt: 1735689600000,
            creator: "William Harris",
        },
        {
            id: "board-014",
            title: "Annual Goals",
            description: "Define and monitor company goals for the year.",
            startedAt: 1738368000000,
            creator: "Ava Martin",
        },
        {
            id: "board-015",
            title: "Finance Planning",
            description:
                "Track budgets, expenses, and financial planning activities.",
            startedAt: 1740787200000,
            creator: "Benjamin Thompson",
        },
        {
            id: "board-016",
            title: "Product Launch",
            description:
                "Coordinate tasks and activities for the upcoming product launch.",
            startedAt: 1743465600000,
            creator: "Isabella Garcia",
        },
        {
            id: "board-017",
            title: "Security Audit",
            description:
                "Track security reviews, vulnerabilities, and remediation tasks.",
            startedAt: 1746057600000,
            creator: "Lucas Martinez",
        },
        {
            id: "board-018",
            title: "Hiring Pipeline",
            description:
                "Manage open positions, candidates, and interview processes.",
            startedAt: 1748736000000,
            creator: "Mia Robinson",
        },
        {
            id: "board-019",
            title: "Q2 Retrospective",
            description:
                "Review team performance, achievements, and areas for improvement.",
            startedAt: 1751328000000,
            creator: "Ethan Clark",
        },
        {
            id: "board-020",
            title: "Client Projects",
            description:
                "Manage active client projects, deadlines, and deliverables.",
            startedAt: 1754006400000,
            creator: "Charlotte Lewis",
        },
    ];
}

async function Boards() {
    const boards = await getBoards();
    return (
        <div className="w-full flex-1 min-h-0">
            <BoardsTable data={boards} />
        </div>
    );
}

export default Boards;
