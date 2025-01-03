import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../../../components/ui/dialog.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table.tsx";

export function OrderDetails(){
    return(
        <div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pedido: 78gfgw5ry2hg3y3fbwsd182</DialogTitle>
                    <DialogDescription>Detalhes do Pedido</DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground"> Status </TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                        <span className="font-medium text-muted-foreground">Pendente</span>
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground"> Cliente </TableCell>
                                <TableCell className="flex justify-end">
                                    Kevin Sousa
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground"> Telefone </TableCell>
                                <TableCell className="flex justify-end">
                                    (238) 5978254
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground"> Email </TableCell>
                                <TableCell className="flex justify-end">
                                    kjsousa.l20@us.edu.cv
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground"> Realizado há </TableCell>
                                <TableCell className="flex justify-end">
                                    há 3 minutos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>


                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produto</TableHead>
                                <TableHead className="text-right">Quantidade</TableHead>
                                <TableHead className="text-right">Preço</TableHead>
                                <TableHead className="text-right">SubTotal</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>Pizza Pepperoni Familia</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">1500$00</TableCell>
                                <TableCell className="text-right">3000$00</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Pizza Mussarela Familia</TableCell>
                                <TableCell className="text-right">2</TableCell>
                                <TableCell className="text-right">1000$00</TableCell>
                                <TableCell className="text-right">2000$00</TableCell>
                            </TableRow>
                        </TableBody>

                        <TableFooter>
                            <TableCell colSpan={3}> Total do Pedido </TableCell>
                            <TableCell className="text-right font-medium"> 5000$00 </TableCell>
                        </TableFooter>
                    </Table>
                </div>
            </DialogContent>
        </div>
    )
}