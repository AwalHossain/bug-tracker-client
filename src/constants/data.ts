"use client";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
  photoUrl?: string; // Profile picture can be a string (URL) or null (if no picture)
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const getNavItems = (workspaceId: string) => {
  return [
    {
      title: "Dashboard",
      href: `/dashboard/${workspaceId}`, // Updated
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Projects",
      href: `/dashboard/${workspaceId}/projects`, // Updated
      icon: "projects",
      label: "Projects",
    },
    {
      title: "Tickets",
      href: `/dashboard/${workspaceId}/tickets`, // Updated
      icon: "tickets",
      label: "Tickets",
    },
    {
      title: "Issue",
      href: `/dashboard/${workspaceId}/issue`, // Updated
      icon: "issue",
      label: "Issue",
    },
    {
      title: "New Project",
      href: `/dashboard/${workspaceId}/new`, // Updated
      icon: "newProject",
      label: "New Project",
    },
    {
      title: "Create Project",
      href: `/dashboard/${workspaceId}/create-project`, // Updated
      icon: "createProject",
      label: "Create Project",
    },
    {
      title: "Task",
      href: `/dashboard/${workspaceId}/task`, // Updated
      icon: "kanban",
      label: "kanban",
    },
    {
      title: "Create Issue",
      href: `/dashboard/${workspaceId}/create-issue`, // Updated
      icon: "createIssue",
      label: "createIssue",
    },
    {
      title: "Message",
      href: `/dashboard/${workspaceId}/chat`, // Updated
      icon: "chat",
      label: "Message",
    },
  ];
};
