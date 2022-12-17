# Anotações da aula

### Nest

* Trabalha com inversão e injeção de dependências.
* Nas controllers nos end-point's ele trabalha com algo bem parecido ao que ocorre no java, com anotações para pegar por exemplo o body da requisição com @Body().

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

* Se a conexão com o banco cair ele também deruba a aplicação com o método enableShutdownHooks.