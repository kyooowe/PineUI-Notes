// #region Import
import { NoteListProps, NoteProps } from '@/interface/INotes'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Trash, Heart } from 'lucide-react'
// #endregion

const NoteList = ({ notes }: NoteListProps) => {

    // #region UseState
    const [noteSelected, setnoteSelected] = useState<string>(notes[0].id)
    // #endregion

    return (
        <ScrollArea className='h-[51rem]'>
            <div className='flex flex-col gap-2 p-4 pt-0'>
                {
                    notes.map((note: NoteProps) => (
                        <button
                            key={note.id}
                            className={cn(
                                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                                noteSelected === note.id && "bg-muted"
                            )}
                            onClick={() => setnoteSelected(note.id)}
                        >
                            <div className="flex w-full flex-col gap-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold">{note.title}</div>
                                        {
                                            !note.isFavorite && (
                                                <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                            )
                                        }
                                    </div>
                                    <div
                                        className={cn(
                                            "ml-auto text-xs",
                                            noteSelected === note.id
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {new Date(note.date).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                                {note.note.substring(0, 900)}
                            </div>

                            <div className="flex w-full flex-col gap-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2">
                                        {
                                            note.labels.length ? (
                                                <div className="flex items-center gap-2">
                                                    {
                                                        note.labels.map((label) => (
                                                            <Badge key={label} variant={noteSelected === note.id ? 'outline' : 'default'}>
                                                                {label}
                                                            </Badge>
                                                        ))
                                                    }
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div
                                        className={cn("ml-auto")}
                                    >
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
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </div>
        </ScrollArea>
    )
}

export default NoteList