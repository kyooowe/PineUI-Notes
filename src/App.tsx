// #region Import
import { FilePlus, Search } from "lucide-react";
import Navbar from "@/components/notes/nav"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useState } from "react";
import { cn } from "./lib/utils";
import AccountSwitcher from "@/components/notes/accountswitcher";
import { Notes, SideBarLink, accounts } from "./constant/data";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { SideBarLinkProps } from "./interface/ISideBarLink";
import NoteList from "@/components/notes/list";
import { NoteProps } from "./interface/INotes";
import NoteDisplay from "@/components/notes/note";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
// #endregion

const App = () => {

	// #region UseState
	const defaultLayout = [265, 440, 655]

	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	// #endregion

	// #region Handler
	const handleSideBarLink = (): SideBarLinkProps[] => {
		return SideBarLink.map((month: SideBarLinkProps, index: number) => {
			if (index === new Date().getMonth())
				return { ...month, variant: 'default' }

			return month
		})
	}
	// #endregion

	return (
		<div className="w-screen h-screen">
			<TooltipProvider delayDuration={0}>
				<ResizablePanelGroup
					direction="horizontal"
					onLayout={(sizes: number[]) => {
						document.cookie = `react-resizable-panels:layout=${JSON.stringify(
							sizes
						)}`
					}}
					className="h-screen items-stretch"
				>
					<ResizablePanel
						className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
						defaultSize={defaultLayout[1]}
						minSize={15}
						maxSize={15}
					>
						<div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]' : 'px-2')}>
							<AccountSwitcher
								isCollapsed={isCollapsed}
								accounts={accounts}
							/>
						</div>
						<Separator />
						<Navbar
							isCollapsed={isCollapsed}
							links={handleSideBarLink()}
						/>
					</ResizablePanel >
					<ResizableHandle />
					<ResizablePanel
						defaultSize={defaultLayout[1]}
						minSize={50}
						maxSize={50}
					>
						<Tabs defaultValue="all">
							<div className="flex items-center px-4 py-2">
								<h1 className="text-xl font-bold">Notes</h1>
								<TabsList className="ml-auto">
									<TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">All Notes</TabsTrigger>
									<TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">Favorite</TabsTrigger>
								</TabsList>
								<Tooltip>
									<TooltipTrigger asChild className="ml-3">
										<Button variant="ghost" size="icon">
											<FilePlus className="h-4 w-4" />
											<span className="sr-only">Add Note</span>
										</Button>
									</TooltipTrigger>
									<TooltipContent>Add Note</TooltipContent>
								</Tooltip>
							</div>
							<Separator />
							<div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
								<form>
									<div className="relative">
										<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
										<Input placeholder="Search" className="pl-8" />
									</div>
								</form>
							</div>
							<TabsContent value="all" className="m-0">
								<NoteList notes={Notes} />
							</TabsContent>
							<TabsContent value="unread" className="m-0">
								<NoteList notes={Notes.filter((note: NoteProps) => note.isFavorite)} />
							</TabsContent>
						</Tabs>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={defaultLayout[2]}>
						<NoteDisplay />
					</ResizablePanel>
				</ResizablePanelGroup>
			</TooltipProvider>
		</div>
	)
}

export default App;