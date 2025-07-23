#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Iniciando atualização Angular 19 → 20"

# 1. Mostrar versão atual
echo -e "\n🔍 Verificando versões atuais..."
ng version

# 2. Atualizar CLI globalmente para v20
echo -e "\n1) Atualizando @angular/cli globalmente para v20..."

npm install -g @angular/cli@^20

# 3. Atualizar as dependências do projeto
echo -e "\n2) Atualizando @angular/cli e @angular/core no projeto..."
ng update @angular/cli@19 --force
ng update @angular/cli@^20 @angular/core@^20 --force --allow-dirty
echo "✅ @angular/cli e core atualizados"

# 4. (Opcional) migrar para novo build system
echo -e "\n3) Migrando para o novo build system (ruído opcional)..."
ng update @angular/cli --name use-application-builder || \
echo "⚠️ Migração do build system falhou ou não aplicável"

# 5. Atualizar Angular Material (se existir)
if grep -q "@angular/material" package.json; then
  echo -e "\n4) Atualizando @angular/material para v20..."
  ng update @angular/material@^20
else
  echo -e "\n4) @angular/material não detectado — pulando"
fi

# 6. Realizar build para validar
echo -e "\n5) Realizando build para verificar sucesso..."
ng build

echo -e "\n🎉 Atualização concluída com sucesso para Angular v20!"
