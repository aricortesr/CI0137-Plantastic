# Guía de uso — Backend

## Requisitos previos

- Node.js instalado
- Redis instalado y corriendo (ver instrucciones abajo)
- Archivo `.env` configurado en la raíz del backend con las siguientes variables:

```
SESSION_SECRET=una_cadena_larga_y_aleatoria_de_al_menos_32_caracteres
REDIS_URL=redis://localhost:6379
NODE_ENV=development
SESSION_MAX_AGE=3600000
```

---

## Instalación de Redis

### Debian / Ubuntu / Linux Mint
```bash
sudo apt update
sudo apt install redis-server
```

### Fedora
```bash
sudo dnf install redis
```

### macOS
```bash
brew install redis
```

### Windows
Redis no tiene soporte oficial en Windows. Se recomienda usar Docker:
```bash
docker run -d -p 6379:6379 redis
```
O bien instalar WSL (Windows Subsystem for Linux) y seguir los pasos de Debian dentro de WSL.

---

## Iniciar el servidor Redis

### Linux / macOS
```bash
sudo systemctl start redis-server   # Debian/Ubuntu/Mint
sudo systemctl start redis          # Fedora
brew services start redis           # macOS
```

Para verificar que Redis está corriendo:
```bash
redis-cli ping
# Debe responder: PONG
```

### Windows (Docker)
El contenedor de Docker inicia Redis automáticamente al ejecutar el comando de instalación.

---

## Iniciar el backend

```bash
npm run start
```

---

## Comandos útiles de Redis

```bash
sudo systemctl stop redis-server      # Detener Redis
sudo systemctl restart redis-server   # Reiniciar Redis
sudo systemctl status redis-server    # Ver estado

redis-cli FLUSHALL                    # Limpiar todas las sesiones (útil en desarrollo)
```