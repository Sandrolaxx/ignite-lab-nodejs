# Anotações da aula

### Nest

* Trabalha com inversão e injeção de dependências.
* Nas controllers nos end-point's ele trabalha com algo bem-parecido ao que ocorre no java, com anotações para pegar, por exemplo, o body da requisição com @Body().

___

### Prisma

Arquivo prisma.service.ts
```ts
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on("beforeExit", async () => {
            await app.close();
        });
    }
}
```

* extens OnModuleInit permite que assim que o module for carregado chame o método onModuleInit.

* Se a conexão com o banco cair, ele também derruba a aplicação com o método enableShutdownHooks.

---

### Desing de Software

* Pensar na aplicação desconexa de qualquer meio externo, por exemplo sua aplicação funcionar sem banco de dados, pois este é somente uma camada de persistência. Ele é responsável apenas por persistir os dados e não deve interferir em nenhuma funcionalidade ou regra de negócio. Se você não consegue nem testar sua aplicação se o banco de dados estiver fora, temos um alto acoplamento entre as camadas.

* Não necessáriamente uma entidade a nível de código precisa ser uma tabela no banco de dados.
Por exemplo:
```ts
class Order {
    private items: OrderItem[];
}
```

Aqui temos uma entidade de código que pode ser salva em uma ou duas entidades de banco.
