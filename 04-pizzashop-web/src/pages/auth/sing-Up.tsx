import {Helmet} from "react-helmet-async";

import {Label} from "../../components/ui/label.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Button} from "../../components/ui/button.tsx";

import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {toast} from 'sonner'
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {registerRestaurante} from "../../api/register-restaurante.ts";

const singUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {isSubmitting}} = useForm<SingUpForm>({
        resolver: zodResolver(singUpForm)
    })

    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurante,
    })

    async function handleSingIng(data: SingUpForm) {
        try{
            registerRestaurantFn({
              restaurantName: data.restaurantName,
              managerName: data.managerName,
              email: data.email,
              phone: data.phone
            })
            toast.success('Restaurante cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate(`/sing-in?email=${data.email}`),
                }
            })

        }catch{
            toast.error('Erro ao cadastrar restaurante.')
        }
    }

    return (
        <>
            <Helmet title="Cadastrar"/>
            <div className="p-8">
                <Button asChild variant="ghost">
                    <Link to={"/sing-in"} className="absolute right-8 top-8">
                        Fazer Login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className=" flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar conta gratis</h1>
                        <p className="text-sm text-muted-foreground">Seja parceiro e comece suas vendas!</p>
                    </div>

                    <form action="" className="space-y-2" onSubmit={handleSubmit(handleSingIng)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName"> Nome de Estabelecimento </Label>
                            <Input
                                id="restaurantName"
                                type="text"
                                {...register('restaurantName')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email"> Seu e-mail </Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="managerName"> Nome de Manager </Label>
                            <Input
                                id="managerName"
                                type="text"
                                {...register('managerName')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone"> Telefone </Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                            />
                        </div>
                        <Button className="w-full" disabled={isSubmitting} type="submit">
                            Finalizar Cadastro
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar , você concorda com nossos {' '}
                            <a className="underline underline-offset-4" href="">
                                termos de serviço
                            </a>
                            {' '} e {' '}
                            <a className="underline underline-offset-4" href="">
                                politica de privacidade.
                            </a>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}