
![Logo](https://cdn.discordapp.com/attachments/1149661439406112825/1311976534843592714/1.png?ex=674ad0dd&is=67497f5d&hm=1505bcf92084917575663db05fadb55a547312938c760d4177a0d5272cfb4946&)



# JIRAR

Ce projet consiste à développer une application web de gestion de tâches qui permettra aux utilisateurs de créer, organiser et suivre leurs tâches de manière efficace. Chaque tâche disposera
d’attributs tels qu’un titre, une description, un projet d’appartenance, une date de création, une date d’échéance, une priorité, un statut, des tags, et bien plus encore. Une tâche pourra également être décomposée en sous-tâches, avec une hiérarchie de sous-niveaux sans limite.




## Tech Stack

**Client:** Angular, NG-Zoro

**Server:** Nest.JS

**BD:** MangoDB




## Installation

git

```bash
  git clone https://github.com/amirtalbi/projet_web_jira_like  
```

aller dans le projet_web_jira_like

```bash
  cd projet_web_jira_like  
```
lancer le projet_web_jira_like

```bash
   npm run docker:up
```
## API Reference

### Utilisateurs

#### Obtenir tous les utilisateurs

```http
GET /users
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| None      |          | Renvoie tous les utilisateurs. |

#### Obtenir un utilisateur par email

```http
GET /users/${email}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `email`   | `string` | **Required**. Email de l'utilisateur recherché. |

#### Créer un nouvel utilisateur

```http
POST /users
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `body`    | `object` | Détails du nouvel utilisateur. |

---

### Projets

#### Obtenir tous les projets

```http
GET /projects
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| None      |          | Renvoie tous les projets. |

#### Obtenir tous les projets pour un utilisateur

```http
GET /projects/user/${userId}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `userId`      |      `string`    | Renvoie tous les projets de l'utilisateur donné. |

#### Obtenir un projet par ID

```http
GET /projects/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID du projet recherché. |

#### Créer un nouveau projet

```http
POST /projects
```

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `body`    | `object` | Détails du nouveau projet. |

#### Mettre à jour un projet par ID

```http
PUT /projects/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID du projet à mettre à jour. |
| `body`    | `object` | Nouveaux détails du projet.       |

#### Supprimer un projet par ID

```http
DELETE /projects/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID du projet à supprimer. |

---

### Tâches

#### Obtenir toutes les tâches

```http
GET /tasks
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| None      |          | Renvoie toutes les tâches. |

#### Obtenir une tâche par ID

```http
GET /tasks/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID de la tâche recherchée. |

#### Créer une nouvelle tâche

```http
POST /tasks
```

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `body`    | `object` | Détails de la nouvelle tâche. |

#### Mettre à jour une tâche par ID

```http
PUT /tasks/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID de la tâche à mettre à jour. |
| `body`    | `object` | Nouveaux détails de la tâche.    |

#### Supprimer une tâche par ID

```http
DELETE /tasks/${id}
```

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `string` | **Required**. ID de la tâche à supprimer. |

#### Obtenir l'arborescence des tâches pour un projet

```http
GET /tasks/project/${projectId}/tree
```

| Parameter      | Type     | Description                                  |
| :------------- | :------- | :------------------------------------------- |
| `projectId`    | `string` | **Required**. ID du projet dont on veut les tâches. |

## Documentation

[Repo GIT](https://github.com/amirtalbi/projet_web_jira_like)

[Swagger](localhost:3000/api/)

