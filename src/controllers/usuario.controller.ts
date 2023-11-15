import { Controller, Get } from "@nestjs/common";
import { Usuario } from "src/entidades/usuario.entidade";



@Controller({
    path: "usuarios"
})
export class UsuarioController{

    @Get("listarUsuarios")
    public listarUsuarios():   Usuario[]{
        
        var usuarios: Usuario[] = [];

        return usuarios;
    }

}