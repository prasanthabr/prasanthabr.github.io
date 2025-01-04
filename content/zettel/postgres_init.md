---
title: "Steps I took to setup a postgres dev db"
date: 2024-03-04
lastmod: 2025-01-04
draft: false
zettel_tags: ["Postgres"]
summary: "how did i create a db" 
status: "seeding"
---

Login as a user
```
psql postgres <name>;

eg: psql postgres prasanthabr
```

creating a db

```
=# create database <name of database>;

eg: Name of database can be the rails specified one for rails.

````

Based on reinstallation of PG:

There are other aspects relating to authentication of postgres

The authentication is stored on the pg_hba.conf file.  
When authentication is peer, it means that the user has to be created on the
local. This can be changed to md5 -> which implies that there should be a
password.

had considered making the user a superuser or admin role, but decided against

used

```
sudo -u postgres psql postgres
```
so login as postgres user --> unsure why it logs in when the authentication is
peer. will check later.
