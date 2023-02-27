# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://prnt.sc/RMfi8vqvv9A7

# Отримуємо контакт по id
node index.js --action="get" --id=5
https://prnt.sc/jXNrEi6R9ue7

# Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://prnt.sc/qDZGyewyTgEA

# Видаляємо контакт
node index.js --action="remove" --id=3
https://prnt.sc/Z4us6MOoYgSW

# І знову отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://prnt.sc/TVpni4gB5bBT