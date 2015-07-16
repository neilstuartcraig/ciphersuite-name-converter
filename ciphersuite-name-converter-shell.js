#!/usr/bin/env node

var path=require("path");
var openSSLToTLSMapJSON=require(path.join(__dirname, "/maps/openssl-to-tls-map.json"));
var TLSToopenSSLMapJSON=require(path.join(__dirname, "/maps/tls-to-openssl-map.json"));

var CipherNameConverter=require(path.join(__dirname, "/lib/ciphersuite-name-converter-lib.js"));

var converter=new CipherNameConverter(openSSLToTLSMapJSON, TLSToopenSSLMapJSON);

var usageInstructions="Usage:\n\
Convert openSSL to TLS cipher string: convert-openssl-to-tls <ciphersuite string>\n\
Convert TLS to openSSL cipher string: convert-tls-to-openssl <ciphersuite string>";


if(process.argv[2] && process.argv[2]!=="-h" && process.argv[2]!=="--help")
{
	if(process.argv[1].indexOf("-openssl-to-tls")!==-1)
	{
		console.log(converter.convertOpenSSLToTLS(process.argv[2]));
	}
	else
	{
		console.log(converter.convertTLSToOpenSSLMapJSON(process.argv[2]));
	}
}
else
{
	console.log(usageInstructions);
}