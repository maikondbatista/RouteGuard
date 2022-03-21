# Permissionamento

-Projeto construido usando Lazy loading para carregar as rotas e usando authguard para permissionamento.
-As permissões de acesso de rota de cada usuário registrado no arquivo db.json
-Caso o usuário não possua permissão em determinada rota, será redirecionado para página "unauthorized"
-Caso o usuário não esteja conectado, será redirecionado para o login
-Os dados de login são mantidos no serviço, portanto ao atualizar a pagina os dados de login são perdidos.