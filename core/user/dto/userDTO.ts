export class UserDTO {
  //     id        Int      @id @default(autoincrement())
  //   nome      String
  //   email     String   @unique
  //   senha     String
  //   ativo     Boolean  @default(true)
  //   admin     Boolean  @default(false)
  //   createdAt DateTime @default(now())

  id?: number;
  nome: string;
  email: string;
  senha: string;
  ativo: boolean;
  admin: boolean;
  createdAt: Date;
}
