import { Dispatch, SetStateAction, useState } from 'react'
import { addDays, addHours, format, nextSaturday } from 'date-fns'
import { BadgePlus, Circle, Copy, FilePenLine, Heart, SendToBack, Share2, Trash } from 'lucide-react'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import '../../css/editor.css'

const NoteDisplay = () => {

    // #region UseState
    const [markDownText, setMarkDownText] = useState<string>("# Your markdown here")
    const [isEditing, setIsEditing] = useState<boolean>(true)
    // #endregion

    return (
        <div className='flex h-full flex-col'>
            <div className='flex items-center p-2'>
                <div className='flex items-center gap-1'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Share</TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" className="mx-1 h-6" />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <SendToBack className="h-4 w-4" />
                                <span className="sr-only">Move</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Move</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy</TooltipContent>
                    </Tooltip>
                </div>
                <div className='ml-auto flex items-center gap-1'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Favorite</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Favorite</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <FilePenLine className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Edit</TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <Separator />
            <div className='flex p-4 items-center'>
                <div className='flex-none'>
                    <h1 className='font-bold text-xl'>Test Title</h1>
                </div>
                <div className='ml-auto flex items-center space-x-1'>
                    <Badge variant='default'>Work</Badge>
                    <Badge variant='default'>Important</Badge>
                    <Badge variant='default'>Hobby</Badge>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <BadgePlus className="h-4 w-4" />
                                <span className="sr-only">Add Badge</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Add Badge</TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <Separator />
            {
                isEditing ? (
                    <div className='h-[51rem] overflow-auto'>
                        <Editor editorClassName="custom-editor-wrapper" />
                    </div>
                ) : (
                    <Markdown remarkPlugins={[remarkGfm]}>{markDownText}</Markdown>
                )
            }
        </div>
    )
}

export default NoteDisplay