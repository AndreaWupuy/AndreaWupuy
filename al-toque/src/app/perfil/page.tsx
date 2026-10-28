import { IconoPerfil } from "@/components/Iconos";
import { Pantalla, Tarjeta, Titulo } from "@/components/ui";

export default function Perfil() {
  return (
    <Pantalla>
      <Titulo>Perfil</Titulo>

      <Tarjeta className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amarillo text-tinta">
          <IconoPerfil className="h-10 w-10" />
        </div>
        <h2 className="text-[19px] font-bold">Guarda tu racha</h2>
        <p className="max-w-[280px] text-[15px] text-tinta-suave">
          Muy pronto podrás entrar con tu correo o con Google para jugar con tus amigos.
        </p>
      </Tarjeta>
    </Pantalla>
  );
}
