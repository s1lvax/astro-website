---
title: "Zippr"
summary: "Zippr is a tiny url shortener built using Hono and CF KVs"
date: "November 2024"
draft: false
tags:
  - Web Development
  - API
  - Cloudflare
  - Typescript
---

Zippr is a tiny url shortener. It basically works by making a POST request with the url you want to shorten. Once you do so, you get back the shortened url in the response body.

## Why?

There are tons and tons of URL shorteners out there, so why ? Well, to be honest all I wanted was to build a quick project to test out the combination of [Hono](https://hono.dev/) and [Cloudflare KVs](https://developers.cloudflare.com/kv/). 

If you're curious, I was pleasantly surprised with the performance of Hono and with the developer workflow of Cloudflare. 

Using Wrangler made using Cloudflare a walk in the park.

I would recommend this combination if you're working on an API. You can use KVs if you only need Key-Value storing or D1 if you need an actual SQL database. Fyi, D1 uses SQLite.

## Can I test it out ?

Yes, of course ! Go ahead and send your request like this using CURL :

```
curl -X POST -d '{"url":"https://example.com"}' https://zippr.dev/zippr
```
Your response will look like this :


```
{"url":"https://zippr.dev/yTS6E"}
```
