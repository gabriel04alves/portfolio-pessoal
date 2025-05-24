---
title: Tutorial de Instalação de um Servidor Debian
date: 2025-05-24
description: Instalação e configuração de um servidor Debian 11 usando o VirtualBox.
---

Este tutorial foi criado inicialmente como uma atividade da disciplina de Serviços de Redes na graduação. Obtive nota 10,0 e, por isso, decidi que seria interessante adaptá-lo para o formato de tutorial e publicá-lo.
Aqui são apresentadas as etapas de instalação e configuração de um servidor Linux Debian 11 utilizando o VirtualBox -simulando um bare metal- a partir de uma máquina hospedeira com outra distribuição Linux. Ao longo do passo a passo, abordaremos o download da imagem do sistema operacional e sua instalação e configuração.

---

**Download e validação da ISO**

Na primeira etapa, o objetivo é baixar a ISO e realizar uma validação de segurança usando a ferramenta SHA512 para garantir que o arquivo baixado é, de fato, uma ISO original. Será apresentado o passo a passo de como fazer o download e validar usando o terminal.

Começaremos o tutorial baixando a ISO do Debian 11 ([disponível aqui](http://img.cs.montana.edu/linux/debian/11/amd/debian-11.0.0-amd64-netinst.iso)). Uma pergunta importante a ser feita após o download de uma ISO que será usada para algo tão crucial quanto um servidor é: “_Estou realmente baixando um arquivo original, com a garantia de segurança do fornecedor, sem qualquer risco de corrupção por fatores externos?”_. Para esclarecer isso, podemos usar ferramentas de criptografia. Uma ferramenta comumente utilizada é o SHA-512, que faz parte da família de funções hash criptográficas SHA-2, desenvolvida pela NSA (National Security Agency) — a Agência de Segurança Nacional dos Estados Unidos da América (EUA). Ela funciona da seguinte maneira: o responsável pela distribuição do arquivo que estamos baixando nos fornece um código (hash) correspondente ao arquivo original; ao baixar o arquivo, geramos o código localmente e comparamos visualmente se ambos são iguais, o que nos garante a autenticidade do arquivo. A validação da ISO é uma etapa crucial para prevenir o uso de arquivos corrompidos ou adulterados, que poderiam comprometer a segurança e a funcionalidade do sistema operacional. Esta prática é especialmente relevante em servidores, onde a integridade do software impacta diretamente a confiabilidade do ambiente.

Para validar a nossa ISO, precisamos obter o hash disponibilizado pelo fornecedor ([disponível aqui](https://img.cs.montana.edu/linux/debian/11/amd/SHA512SUMS)). No caso da ISO utilizada nesse tutorial, a página deverá aparecer assim:

<img src="../images/Pasted image 20250524160959.png">

Podemos visualizar o hash do nosso arquivo na segunda linha. Agora, devemos abrir o terminal da máquina onde o download foi realizado, navegar até a pasta onde o arquivo está se encontra, e executar o comando “sha512sum \[nome_do_arquivo\]” para obter o hash. Em seguida, é possível fazer a comparação visual e confirmar se o download foi concluído corretamente.

```bash
[user@fedora]~/Downloads % sha512sum debian-11.0.0-amd64-netinst.iso 5f6aed67b159d7ccc1a90df33cc8a314aa278728a6f50707ebf10c02e46664e383ca5fa19163b0a1c6a4cb77a39587881584b00b45f512b4a470f1138eaa1801  debian-11.0.0-amd64-netinst.iso
```

---

**Configuração inicial no Virtual Box**

Agora, o objetivo é realizar as configurações iniciais para iniciar a nossa máquina virtual (VM). Será apresentado como criar a máquina usando o VirtualBox e como realizar a configuração inicial.

Com o Oracle VirtualBox (usando a versão 7.0) aberto, criaremos uma nova máquina selecionando a opção “Novo” na parte superior da tela.

Após selecionar essa opção, será aberto um menu, onde deveremos informar o nome da máquina, onde desejamos salvá-la, qual imagem ISO usaremos e qual o tipo de instalação queremos. No nosso caso, o nome da máquina será `srv-local`, a pasta será a padrão, a ISO do Debian 11, e marcaremos a opção para pular a instalação desassistida.

Na etapa a seguir, escolhemos o quanto de memória RAM da máquina hospedeira nossa VM poderá consumir e quantos núcleos do processador poderão ser alocados para ela. Vamos usar 2048 MB de RAM e 2 CPUs.

Feito isso, o próximo passo é muito importante: trata-se da escolha do disco rígido que nossa VM vai alocar. Temos três opções: criar um disco rígido virtual, utilizar um virtual existente ou simplesmente não acrescentar um disco rígido agora. Usaremos a primeira opção, selecionando o tamanho como 20 GB. É importante observar que há uma opção para pré alocar um tamanho total do disco, essa seleção faz com que a nossa VM ocupe imediatamente as 20 GB no disco rígido da nossa máquina hospedeira, contrariando o padrão que ocupa a memória dinamicamente, conforme é necessário. No nosso caso, faz sentido desmarcar essa opção.

Ao fim dessa etapa poderemos ver um resumo da VM e finalizar a criação.

<img src="../images/Pasted image 20250524162244.png">

Agora, é necessário configurar alguns outros detalhes para que nossa VM esteja pronta para ser iniciada. Para realizar essas configurações, selecionamos no menu lateral a nossa VM e no menu superior acessaremos a opção de configurações.
Com o menu de configurações aberto, acessaremos no menu lateral a opção Sistema e seguida iremos reorganizar a ordem de boot, desmarcando a opção Disquete e movendo para o topo Óptico e Disco Rígido. Isso serve para que a VM realize o boot (inicialização do sistema operacional) priorizando o óptico e o disco rígido e descartando o disquete, já que é um meio obsoleto de fazer isso e não usaremos nesse caso.

Feito isso, realizaremos outras duas configurações simples. A primeira é desativar o áudio, já que não será necessário. E a segunda é alterar o controlador USB para 1.0, para prevenir problemas de compatibilidade com diferentes periféricos.

Em outros cenários, para melhores resultados, é recomendável verificar as especificações do hardware da máquina hospedeira, garantindo que os recursos alocados para a VM, como RAM e núcleos de CPU, não comprometam o desempenho do sistema hospedeiro.  
Finalizadas essas etapas, basta clicar em OK e as configurações iniciais estão concluídas.

---

**Iniciando o Servidor**

Agora, iniciaremos nossa VM clicando duas vezes sobre ela no menu lateral do VirtualBox. Com a máquina virtual aberta, o boot do sistema operacional será feito automaticamente e o primeiro passo é selecionar como faremos a instalação. Entre as opções disponíveis, as que nos interessam nesse momento são as duas primeiras: Graphical install, que oferece uma instalação com uma interface gráfica e Install que serve para realizar o processo sem a interface gráfica. Para uma melhor eficiência no uso dos recursos de hardware que dispomos para a VM, escolhemos a segunda opção.

A seguir, vamos iniciar a instalação passando por três etapas rápidas: i. escolher o idioma do processo de instalação e que será usada por padrão no sistema; ii. escolher a localidade; iii. escolher o idioma do teclado.

---

**Configurações de usuários e relógio**

Feito isso, o passo a seguir é escolher o nome da máquina. Algumas boas práticas ao nomear uma máquina são:

- Utilizar nomes descritivos e informativos que reflitam para que a máquina serve;
- Manter a consistência, ou seja, usar o mesmo padrão para todas as máquinas do ambiente;
- Evitar caracteres especiais porque podem causar problemas em certos sistemas ou aplicações;
- Utilizar nomes curtos fáceis de memorizar e digitar;
- Documentar as convenções para que os outros membros da sua equipe possam entender e manter o padrão definido.

No caso deste tutorial, como não estamos trabalhando em um ambiente complexo, utilizaremos um nome simples e objetivo. `srv-local`, `srv` indica a função da máquina e `local` é um identificador do ambiente.

Agora temos que definir o nome do domínio, que juntamente com o nome da máquina serve para identificar e localizar o servidor em uma rede. No caso, usaremos o domínio de uma empresa fictícia chamada ACME, que é amplamente utilizada em exemplos genéricos de TI. Ficará assim: `acme.com.br`.

Os próximos passos são as configurações de usuários e senhas. Primeiro definimos uma senha para o usuário root. Esse é um ponto que deve demandar muita atenção. O root é o usuário administrador do sistema, portanto, quem tem acesso a ele pode realizar qualquer configuração no sistema. Assim como os outros usuários que você definir no sistema, o root deve possuir uma senha que seja o mais forte possível para garantir a segurança do servidor, e assim prevenir o roubo de dados e manter a integridade do sistema.

Após definir isso, criaremos nosso primeiro usuário em três etapas: escolher o seu nome completo, escolher o nome de usuário para a conta e definir uma senha forte e segura para ele.

A etapa a seguir será configurar o relógio, escolhendo o fuso horário que será usado, aqui vamos usar `São Paulo`.

---

**Particionamentos**

A partir de agora, faremos uma das etapas mais importantes e que exigem mais atenção no tutorial. Particionar é dividir o disco rígido em frações menores chamadas partições. A maioria dos sistemas operacionais, inclusive o Debian, disponibiliza a opção realizar um particionamento simples automaticamente. Entretanto, vamos fazer isso manualmente visando garantir que os princípios e as premissas de um bom particionamento sejam cumpridos corretamente conforme a necessidade do nosso ambiente. Isso se refere a garantir isolamento correto dos dados e assim proteger o sistema contra falhas e ataques externos, realizar um gerenciamento correto do espaço do disco, visando alocar de forma mais eficiente e facilitar backups e recuperações. Isso tudo nos garante que aspectos como a segurança, o desempenho e facilidade de manutenção estejam presentes integralmente na máquina.

Primeiro, selecione método de particionamento Manual:

<img src="../images/Pasted image 20250524163702.png">

Na próxima etapa, é exibida uma tela onde irão aparecer todos os discos, partições e configurações de cada partição. Aqui, selecionamos o único disco disponível e na tela a seguir, de confirmação, é marcada a opção Sim para criar uma nova tabela de partições vazias nesse disco.

Seguindo em frente, selecionamos como será usado este espaço livre, aqui podemos selecionar a opção Criar uma nova partição, onde vamos definir a primeira delas.

<img src="../images/Pasted image 20250524163750.png">

Prosseguindo, vamos começar a definir as propriedades da primeira partição da máquina. Antes disso, é importante determinar quais partições serão criadas. Neste servidor, utilizaremos um esquema de particionamento bastante simples, sem uma finalidade específica. Dependendo do propósito do sistema, é possível adicionar uma partição extra voltada para o uso principal. Por exemplo `/var/lib/mysql` para um servidor de banco de dados ou `/var/nginx` para um servidor web. Caso deseje acrescentar um nova partição, é necessário acrescentar memória na configuração da VM e usar o valor execente do formato sugerido para isso.

No nosso caso, esse é o particionamento:

| Tipo     | Tamanho | Sistema de arquivos | Ponto de montagem | Opções de montagem    |
| -------- | :-----: | ------------------- | ----------------- | --------------------- |
| Primária |  5 GB   | EXT4                | /                 | \- \- \-              |
| Primária |  2 GB   | swap                | swap              | \- \- \-              |
| Primária |  10 GB  | EXT4                | /home             | nodev, nosuid, noexec |
| Lógica   |  2 GB   | EXT4                | /var/log          | \- \- \-              |
| Lógica   |  2 GB   | EXT4                | /tmp              | nodev, nosuid, noexec |

Para definir a primeira partição, começamos definindo qual será o seu tamanho, ou seja, a quantidade de memória do disco rígido que será alocado.

<img src="../images/Pasted image 20250524164603.png">

Feito isso, escolhemos o tipo da nova partição.
Nessa etapa, estamos definindo como o espaço em disco será organizado e acessado pelo sistema operacional. As partições são do tipo primária ou do tipo lógica. Quando definimos partição como primária estamos escolhendo ela como uma quatro partições principais que podem ser criadas diretamente em um disco rígido. Uma partição primária permite que o sistema operacional seja inicializado a partir dela e pode conter um sistema de arquivos e armazenar dados, incluindo o próprio sistema operacional. Já quando é escolhido o tipo lógica, a partição é criada dentro de uma partição estendida, que é uma forma especial de partição primária que permite que o sistema de partições aceite mais do que as quatro partições principais. Ao contrário da primária, a lógica não pode ser inicializada diretamente, portanto, não pode ser usada para carregar o sistema operacional.

Para a primeira partição, vamos defini-la como `Primária`.

Continuando, vamos fazer a definição da localização da partição, que se refere ao espaço físico de onde a partição ficará alocada no disco. Isso influencia diretamente no desempenho e na eficiência do sistema.

Para a primeira partição, vamos escolher o `Início`:

Escolhido isso, vamos poder realizar mais configurações da partição. Entre as opções disponíveis nos preocuparemos neste tutorial com as seguintes: `Usar como`, `Ponto de montagem` e `Opções de montagem`.

- `Usar como`: essa opção trata do sistema de arquivos que será usado na partição. Usaremos dois tipos de sistemas de arquivos durante o tutorial. O ext4, que é o sistema de arquivos mais utilizado no Debian, conhecido por sua robustez e eficiência para armazenamento de informação e o swap, que é uma área de troca que atua como memória virtual, permitindo que o sistema utilize espaço em disco quando a RAM está cheia;
- `Ponto de montagem`: essa opção nos permite escolher qual é o diretório onde a partição será acessível no sistema de arquivos;
- `Opções de montagem`: aqui é permitido personalizar o comportamento da partição, escolhendo comportamentos diferentes do padrão da partição que podem garantir uma camada de segurança. Nas partições mais cruciais do sistema vamos aplicar as seguintes opções: nosuid, que desabilita a execução de arquivos com o bit SUID; noexec, que impede a execução de programas na partição e nodev que impede a criação de arquivos de dispositivos na partição.

Para a primeira partição, usaremos a configuração padrão. Portanto, basta clicar em Finalizar a configuração da partição e seguir em frente.

<img src="../images/Pasted image 20250524165007.png">

Agora, podemos selecionar a linha com o destaque `ESPAÇO LIVRE`, que indica o espaço vazio do disco, do qual usaremos mais uma fração para criar a próxima partição.

No espaço vazio, selecionamos `Criar uma nova partição`. Em frente, definimos como tipo `primária`, localização o início e o tamanho de 2 GB. Além disso, trocamos seu uso de `ext4` para `swap`, o que automaticamente vai alterar todas as outras opções, inclusive o ponto de montagem. E por fim, finalizamos a configuração dessa partição.

Agora, repetimos o processo para a próxima partição definindo como `primária`, localizada no `início`, com o tamanho de 10 GB, ponto de montagem em `/home` e com as opções de montagem `nodev`, `nosuid` e `noexec` e finalizamos configuração.

Seguindo adiante, para a próxima partição vamos definir como `lógica`, no `Início` e com tamanho de 2 GB. Para o ponto de montagem, faremos uma configuração diferente, selecionamos a opção informar manualmente e digitamos `/var/log`. Feito isso, podemos concluir e seguir para a próxima.

Por fim, a última partição será `lógica`, com tamanho de 2 GB, ponto de montagem `/tmp` e com as opções de montagem `nodev`, `nosuid` e `noexec.

Concluída as configurações desta última partição podemos checar se as partições foram criadas corretamente na tabela abaixo do disco rígido. Em seguida, selecionamos Finalizar o particionamento e escrever as mudanças no disco para seguir para a próxima etapa.

<img src="../images/Pasted image 20250524165651.png">

---

**Configurações do gerenciador de pacotes**

Vamos continuar com as configurações finais da instalação. Concluído o particionamento o instalador nos dá a opção de ler mais uma mídia de instalação adicional, como não vamos precisar disso no momento, apenas selecionamos a opção `não`.

O próximo passo é configurar o gerenciador de pacotes, que tem como finalidade fazer a interação com repositórios de software. O Debian usa por padrão o APT. Nas telas a seguir vamos escolher o país que vamos usar para obter o repositório do Debian e o espelho de onde obteremos ele. É importante escolher o mais próximo possível do servidor para obter uma melhor eficiência na conexão. No meu caso, escolherei o debian.c3sl.ufpr.br. Na sequência, podemos configurar um proxy HTTP, mas como não será necessário deixamos em branco e seguimos para o próximo passo. Por fim, escolhemos participar ou não do concurso de utilização de pacotes, que ajuda os mantenedores da distribuição a obter estatísticas sobre os pacotes utilizados. Para agilizar o tutorial, selecionaremos `não`.

---

**Seleção de softwares e instalação do GRUB**

Vamos para a configuração dos recursos que desejamos instalar no nosso servidor. Entre as opções disponíveis há uma interface gráfica, um servidor web e um servidor SSH. Em servidores, não utilizamos interfaces gráficas por diversas questões, entre elas melhorar o consumo de recursos, a segurança e o controle. Quanto às outras opções, podemos instalar manualmente usando a linha de comando posteriormente. Portanto, desmarcaremos todas as opções.

<img src="../images/Pasted image 20250524170252.png">

Para finalizar essa etapa, vamos instalar o `GRUB` no disco primário. Ele é responsável por inicializar o sistema operacional a partir do disco rígido principal.

Feito isso, finalizamos a instalação e a máquina será reiniciada.

---

**Primeiros passos**

Após a reinicialização da nossa VM, iniciaremos o sistema selecionando a opção Debian GNU/Linux na interface inicial. Em seguida, nossa interação com o servidor terá início. Faremos o login com o usuário que criamos durante a instalação. Feito isso, a seguir teremos acesso a linha de comando, nela vamos digitar o comando `su -` , para realizar outro login, dessa vez com usuário `root`, que tem permissões administrativas do sistema.

Feito isso, executamos o comando `apt update && apt upgrade` para atualizar os pacotes do nosso sistema operacional.

A partir de agora, há inúmeras possibilidades de configurações e usos para o servidor.
