import {Card, CardContent, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {DollarSign} from "lucide-react";

export function MonthRevenueCard(){
    return(
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle> Receita total (mes) </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>

            <CardContent className="space-y-1">
                            <span className="text-2xl font-bold tracking-tight">
                                100.000$00
                            </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400"> +2% </span> em relação ao mes passado
                </p>
            </CardContent>
        </Card>
    )
}