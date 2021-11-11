# presentations
presentations

##  Собрать докер

```bash
docker build -f ./Dockerfile -t cr.yandex/crpgchanq5ana2um4jph/presentation:1 .
```

##  Запушить докер

```bash
docker push cr.yandex/crpgchanq5ana2um4jph/presentation:1
```

### Протестировать докер локально


```bash
docker run -p 3000:3000 "cr.yandex/crpgchanq5ana2um4jph/presentation:1"
```
