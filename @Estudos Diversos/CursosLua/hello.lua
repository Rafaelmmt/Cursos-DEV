print('Hello, world!')

-- Variáveis em LUA 
Texto1 = 'String com aspas simples'
Texto2 = "String com aspas duplas"
Texto3 = [[ 
  String com... 
  ...quebra de linha.
]]

Numero = 50

BooleanTorV = false

print(Texto1,Texto2,Texto3, Numero, BooleanTorV)

-- Blocos
if BooleanTorV then 
  print(Texto1)
elseif not BooleanTorV then
  print(Texto2)
else
  print(Texto3)
end

-- Loops
while Numero < 60 do
  Numero=Numero+2
  print(Numero)
end

repeat
  print(Numero)
  Numero = Numero+1
until Numero == 70

for i=1, 10 do
  print(i)
end

for i=10, 1, -1 do
  print(i)
end

-- Função
function SOMA(x,y)
  local minhaVariavel = 20
  return x+y+minhaVariavel
end

print(SOMA(1,0))
