# 🔩 Ferretería API

Una **API RESTful** desarrollada con **Spring Boot** para la gestión de productos, categorías y pedidos de una ferretería.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un conjunto de tecnologías modernas para proporcionar una solución robusta y escalable:

* **Java 21**
* **Spring Boot 3.5.8**
* **Maven**
* **JPA (Hibernate)**
* **MySQL**
* **Lombok**
* **ModelMapper**

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1. Clonar el Repositorio

Abre tu terminal o línea de comandos y ejecuta:

bash
git clone [https://github.com/tu_usuario/ferreteria-api.git](https://github.com/tu_usuario/ferreteria-api.git)

cd ferreteria-api

spring.datasource.url=jdbc:mysql://localhost:3306/ferreteria
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true

mvn clean install

mvn spring-boot:run

## 📋 Bloque 2 de 2: Endpoints, Estructura y Licencia

Copia este segundo bloque y pégalo inmediatamente después del contenido del primer bloque:

```markdown
## 🔌 Endpoints de la API

La API expone los siguientes endpoints para la gestión de recursos:

### 1. Productos (`/products`)

| Método | Endpoint | Descripción | Cuerpo de Solicitud (Ejemplo) |
| :--- | :--- | :--- | :--- |
| **`POST`** | `/products` | Crea un nuevo producto. | Bloque de JSON (ver ejemplo abajo) |
| **`GET`** | `/products` | Obtiene una lista de todos los productos. | *N/A* |
| **`GET`** | `/products/{id}` | Obtiene un producto por su ID. | *N/A* |
| **`PUT`** | `/products/{id}` | Actualiza un producto existente. | *Mismo cuerpo que POST* |
| **`DELETE`** | `/products/{id}` | Elimina un producto por su ID. | *N/A* |

**Ejemplo de Cuerpo de Solicitud (POST/PUT /products):**
```json
{
  "name": "Caño Fusion",
  "description": "4 metros",
  "img": "[https://example.com/image.jpg](https://example.com/image.jpg)",
  "price": 5000,
  "category": { "id": 1 },
  "state": true
}

2. Categorías (/category)

Método,Endpoint,Descripción,Cuerpo de Solicitud (Ejemplo)
POST,/category,Crea una nueva categoría.,Bloque de JSON (ver ejemplo abajo)
GET,/category,Obtiene una lista de todas las categorías.,N/A
GET,/category/{id},Obtiene una categoría por su ID.,N/A
PUT,/category/{id},Actualiza una categoría existente.,Mismo cuerpo que POST
DELETE,/category/{id},Elimina una categoría por su ID.,N/A

Ejemplo de Cuerpo de Solicitud (POST/PUT /category):
{
  "name": "Herramientas"
}

Método,Endpoint,Descripción,Cuerpo de Solicitud (Ejemplo)
POST,/orders,Crea un nuevo pedido.,Bloque de JSON (ver ejemplo abajo)
GET,/orders,Devuelve una lista de todos los pedidos.,N/A
GET,/orders/{id},Obtiene un pedido por su ID.,N/A
PUT,/orders/{id},Actualiza un pedido existente.,Mismo cuerpo que POST
DELETE,/orders/{id},Elimina un pedido por su ID.,N/A

Ejemplo de Cuerpo de Solicitud (POST/PUT /orders):

4. Items de Pedido (/order-items)

Método,Endpoint,Descripción,Cuerpo de Solicitud (Ejemplo)
POST,/order-items,Crea un nuevo ítem de pedido.,Bloque de JSON (ver ejemplo abajo)
DELETE,/order-items/{id},Elimina un item de pedido por su ID.,N/A
Ejemplo de Cuerpo de Solicitud (POST /order-items):
{
  "orderId": 1,
  "productId": 1,
  "quantity": 2
}

📂 Estructura del Proyecto
El proyecto sigue una estructura modular típica de Spring Boot organizada por capas.
src/
 ├── main/
 │    ├── java/
 │    │   ├── com/
 │    │   │   └── ferreteria_edu/
 │    │   │       └── ferreteria_api/
 │    │   │           ├── controller/
 │    │   │           ├── dto/
 │    │   │           ├── exception/
 │    │   │           ├── mapper/
 │    │   │           ├── model/
 │    │   │           ├── repository/
 │    │   │           └── service/
 │    └── resources/
 │        └── application.properties


Descripción de las Carpetas Principales:

controller/: Contiene los controladores REST que manejan las solicitudes HTTP.

dto/: Contiene los Objetos de Transferencia de Datos (DTO), utilizados para la entrada y salida de datos en la API.

exception/: Contiene clases para manejar excepciones personalizadas.

mapper/: Contiene las clases de mapeo entre entidades y DTOs, utilizando ModelMapper.

model/: Contiene las entidades del dominio (como Product, Category, Order, etc.).

repository/: Contiene los repositorios que interactúan con la base de datos, usando Spring Data JPA.

service/: Contiene la lógica de negocio y servicios relacionados con las entidades.


