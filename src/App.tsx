// #region Import
import { Archive, File, ArchiveX, Inbox, Send, Trash2, Users2, AlertCircle, MessagesSquare, ShoppingCart, Search } from "lucide-react";
import { Bus, Cake, CloudSun, Clover, Fan, Flower2, Ghost, Heart, Snowflake, ThermometerSun, Umbrella } from "lucide-react"

import Navbar from "./components/notes/nav"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";
import { useState } from "react";
import { cn } from "./lib/utils";
import AccountSwitcher from "./components/notes/accountswitcher";
import { SideBarLink, accounts } from "./constant/data";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { SideBarLinkProps } from "./interface/ISideBarLink";
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
		// <Navbar
		// 	isCollapsed={false}
		// 	links={[
		// 		{
		// 			title: "Inbox",
		// 			label: "128",
		// 			icon: Inbox,
		// 			variant: "default",
		// 		},
		// 		{
		// 			title: "Drafts",
		// 			label: "9",
		// 			icon: File,
		// 			variant: "ghost",
		// 		},
		// 		{
		// 			title: "Sent",
		// 			label: "",
		// 			icon: Send,
		// 			variant: "ghost",
		// 		},
		// 		{
		// 			title: "Junk",
		// 			label: "23",
		// 			icon: ArchiveX,
		// 			variant: "ghost",
		// 		},
		// 		{
		// 			title: "Trash",
		// 			label: "",
		// 			icon: Trash2,
		// 			variant: "ghost",
		// 		},
		// 		{
		// 			title: "Archive",
		// 			label: "",
		// 			icon: Archive,
		// 			variant: "ghost",
		// 		},
		// 	]}
		// />

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
					// collapsedSize={0}
					// collapsible={true}
					// onCollapse={() => {
					// 	setIsCollapsed(true)
					// 	document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
					// }}
					// onExpand={() => {
					// 	setIsCollapsed(false)
					// 	document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
					// }}
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
						<Separator className="flex-grow" />
						<div className="mt-auto">
							<h1>Test</h1>
						</div>
					</ResizablePanel >
					<ResizableHandle />
					<ResizablePanel
						defaultSize={defaultLayout[1]}
						minSize={50}
						maxSize={50}
					>
						<Tabs defaultValue="all">
							<div className="flex items-center px-4 py-2">
								<h1 className="text-xl font-bold">Inbox</h1>
								<TabsList className="ml-auto">
									<TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">All mail</TabsTrigger>
									<TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">Unread</TabsTrigger>
								</TabsList>
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
								{/* <MailList items={mails} /> */}
								<h1>List Here</h1>
							</TabsContent>
							<TabsContent value="unread" className="m-0">
								{/* <MailList items={mails.filter((item) => !item.read)} /> */}
								<h1>List Here 1</h1>
							</TabsContent>
						</Tabs>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize={defaultLayout[2]}>
						{/* <MailDisplay
						mail={mails.find((item) => item.id === mail.selected) || null}
					/> */}
						<Button>Test</Button>
					</ResizablePanel>
				</ResizablePanelGroup>
			</TooltipProvider>
		</div>
	)
}

export default App;