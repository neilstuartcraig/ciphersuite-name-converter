#ciphersuite-name-converter

A simple CLI (and possibly web) library/script to convert between (in either direction) openSSL and SSL/TLS ciphersuite names.

For example, you may have a standard SSL/TLS ciphersuite string given to you as a requirement, for (a contrived) example:

```
SSL_ECDHE_RSA_WITH_AES_128_GCM_SHA256 SSL_ECDHE_RSA_WITH_AES_256_GCM_SHA384 SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA256 SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA384 SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA
```

Which you want to use in an application which requires `openssl` format ciphersuite strings (for me, this is often [nginx](http://www.nginx.org) - although admittedly nginx is capable of being built with several TLS libraries nowadays). So you would want to convert the above to an openssl:

```
#convert-tls-to-openssl "SSL_ECDHE_RSA_WITH_AES_128_GCM_SHA256 SSL_ECDHE_RSA_WITH_AES_256_GCM_SHA384 SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA256 SSL_ECDHE_RSA_WITH_AES_128_CBC_SHA SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA384 SSL_ECDHE_RSA_WITH_AES_256_CBC_SHA"

#ECDHE-RSA-AES128-GCM-SHA256 ECDHE-RSA-AES256-GCM-SHA384 ECDHE-RSA-AES128-SHA256 ECDHE-RSA-AES128-SHA ECDHE-RSA-AES256-SHA384 ECDHE-RSA-AES256-SHA
```

You can then configure your application with the above openssl format ciphersuite string.

##Requirements
* NodeJS or IOJS
* npm or git (see below)

##Installation
The simplest way is via npm (`-g` for global install which make it globally availanle in your *nix CLI):
```
npm install ciphersuite-name-converter -g
```

Or via `git clone`:
```
git clone https://github.com/neilstuartcraig/ciphersuite-name-converter.git
npm install -g
```

##Usage
```
Get help:
convert-openssl-to-tls -h
convert-tls-to-openssl -h

Convert openSSL to TLS cipher string: 
convert-openssl-to-tls <ciphersuite string>

Convert TLS to openSSL cipher string: 
convert-tls-to-openssl <ciphersuite string>
```

##Semver
This project aims to maintain the [semver](http://semver.org/) version numbering scheme.

##Credits
The mapping between SSL/TLS and openssl ciphersuite names is derived from [a page on openssl.org which describes the relationships](https://www.openssl.org/docs/apps/ciphers.html)

##License
[MIT](http://opensource.org/licenses/MIT)