FROM cypress/included:9.6.1

WORKDIR /e2e

COPY . .

RUN npm install

# Встановлення залежностей проекту
WORKDIR /e2e
COPY . /e2e
RUN npm install

# Запуск тестів у Firefox
CMD ["npx", "cypress", "run", "--browser", "firefox"]