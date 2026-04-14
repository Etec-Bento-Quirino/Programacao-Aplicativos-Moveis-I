# Tutorial: O Refino das Gavetas 🗄️

**Sugestão de execução:** Quinzena 24.

O tutorial de hoje não engloba um gigantesco e imersivo "novo pacote NPM e banco de dados C++" que trincará nossos crânios.
Nós só englobaremos e separaremos em Pastas as bases de Ouro. Organize sua vida para entregar o App Final.

---

## Passo 1: Construindo as Caixinhas da Hierarquia

Olhe pro lado Esquerdo do seu Expo. Pare de largar `.js` no root. Nós vamos criar pastinhas para o modelo (Apesar das "Rotas" viverem na pasta App do Router, as Lógicas não).

- Pasta `bancoDeDados/` - Guardará seu aquivo Base de Gerar e Aterrisar o SQLite Base.
- Pasta `ui_componentes/` - O lixão organizado dos seus Botões soltos maravilhosos.
- Pasta `contextosCeu/` - Onde seu Provider global vive.
- Arquivo `constantesCores.js` - Onde você coloca suas Chaves e Cores Fixas!

## Passo 2: O Desacoplamento da Interface Mestra!
Se eu estiver dentro da SubPasta `ui_componentes/BotaoLindoCustomizado.tsx`, Olhe como ele é Limão Puro e Independente (Bate Props que mandaram pra ele sem saber de onde vieram as infos pra renderizar): 

```tsx
import { TouchableOpacity, Text } from 'react-native';
import { CORES_BRAND } from '../constantesCores.js'; // Puxando o chefe das constantes!

// Olha o PROP {AcaoDoClick} injetada que os Paises mandam:
export default function BotaoLindo({ textoMenu, AcaoDoClick }) {
   return (
       <TouchableOpacity 
           onPress={AcaoDoClick} 
           style={{ backgroundColor: CORES_BRAND.AZUL_LAGO_MISTERIOSO, padding: 10, borderRadius: 8 }}
        >
          <Text style={{color: 'white'}}>{textoMenu}</Text>
       </TouchableOpacity>
   )
}
```

## Passo 3: Invocações dos Pais nas Gavetas

Na tela 6 Mil pastas à Cima, sua Home chama o Desacoplamento pra brilhar sem ter medo de repetições:

```tsx
   import MeuBoTAOdaGaveta from '../ui_componentes/BotaoLindoCustomizado.tsx';

   export default function MeuCaosFront() {
       return (
          <View>
              {/* Posso recriar 20 desses limpos com ações malucas diferentes e zero linha CSS! */}
              <MeuBoTAOdaGaveta textoMenu={"Ir As Compras"} AcaoDoClick={MinhaFuntionDeTiroDB} />
              
              <MeuBoTAOdaGaveta textoMenu={"Roubar a Loja"} AcaoDoClick={BaterSQLInsertForm} />
          </View>
       )
   }
```

Avance para a missão Arquitetural Base da Rodada. O Padrão que ensinaremos Você agora será Base de todos os seus Portfólios do Estágio Júnior às Plenas Contratações da Área de Apps Startups.
