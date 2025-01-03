import {Input} from "../../../components/ui/input.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../../components/ui/select.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {Search, X} from "lucide-react";

export function OrderTableFilter(){
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold"> Filtros: </span>
            <Input placeholder="ID do pedido" className="h-8 w-auto"/>
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]"/>
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">Todos status</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entraga</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit" variant="secondary" size="xs">
                <Search className="h-5 w-5 mr-2"/>
                Filtrar resultado
            </Button>

            <Button type="button" variant="outline" size="xs">
                <X className="h-5 w-5 mr-2"/>
                Remover
            </Button>
        </form>
    )
}