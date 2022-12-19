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

* **Pensar na aplicação desconexa de qualquer meio externo**, por exemplo sua aplicação funcionar sem banco de dados, pois este é somente uma camada de persistência. Ele é responsável apenas por persistir os dados e não deve interferir em nenhuma funcionalidade ou regra de negócio. Se você não consegue nem testar sua aplicação se o banco de dados estiver fora, temos um alto acoplamento entre as camadas.

* **Não necessáriamente uma entidade a nível de código precisa ser uma tabela no banco de dados**.
Por exemplo:
```ts
class Order {
    private items: OrderItem[];
}
```

Aqui temos uma entidade de código que pode ser salva em uma ou duas entidades de banco.

* **Value Object(VO)**: De forma sucinta, podemos dizer que Value Objects são objetos sem identidade conceitual e que dão característica a algum outro objeto. Em geral, estamos interessados no que eles fazem e não em quem eles são. Um exemplo clássico seria criarmos um objeto para representar dinheiro em nossa aplicação.

Em geral, um objeto Dinheiro de valor R$ 10,00 é igual a outro objeto Dinheiro de mesmo valor, ou seja, não importa de qual instância estamos falando: R$ 10,00 são R$ 10,00. Por isso, eles não possuem identidade conceitual. O que importa são seus atributos.

Outros exemplos de conceitos que poderiam ser modelados como Value Objects seriam: CPF, telefone e endereço.

Vamos ver uma forma de implementar o Value Object Dinheiro acima mencionado e com isso apresentar mais alguma características importantes desse tipo de objeto.

```java
public class Dinheiro
{
    public string Moeda { get; private set; }
    public decimal Valor { get; private set; }
 
    public Dinheiro(string moeda, decimal valor)
    {
        // validar parametros...
        Moeda = moeda;
        Valor = valor;
    }
 
    public Dinheiro SomarCom(Dinheiro dinheiro)
    {
        return new Dinheiro(dinheiro.Moeda, Valor + dinheiro.Valor);
    }
}
```

Um delas é que um VO pode ser usado para agrupar informações relacionadas em um único conceito (Conceptual Whole). Notem que Dinheiro agrupa dois atributos fortemente relacionados: Moeda e Valor.

Para mais informações sobre 👉[VO's](https://robsoncastilho.com.br/2013/11/10/trabalhando-com-value-objects/)

* Inversão de dependência utilizada no arquivo SendNotification.ts, onde fui criada uma classe abstrata(um contrato) onde diz qual a funcionalidade do caso de uso, não como implementá-la, quem for chamar o use-case é que vai passar qual vai ser a implementação via parâmetro, assim invertendo as dependências, também outro beneficio é o desacoplamento.