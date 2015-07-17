var cipherNameConverter=function(openSSLToTLSMapJSON, TLSToOpenSSLMapJSON)
{
	var _maps=
	{
		_TLSToOpenSSLMapJSON:null,
		_openSSLToTLSMapJSON:null
	};

	// Brief/simple type checks - this could be better!
	if(typeof(TLSToOpenSSLMapJSON)==="object" && TLSToOpenSSLMapJSON!==null)
	{
		_maps.TLSToOpenSSLMapJSON=TLSToOpenSSLMapJSON;
	}

	if(typeof(openSSLToTLSMapJSON)==="object" && openSSLToTLSMapJSON!==null)
	{
		_maps.openSSLToTLSMapJSON=openSSLToTLSMapJSON;
	}

	if(_maps["TLSToOpenSSLMapJSON"]===null || _maps["openSSLToTLSMapJSON"]===null)
	{
		throw new Error("You must define both TLSToOpenSSLMapJSON and openSSLToTLSMapJSON");
	}


	var convert=function convertFn(mapName, ciphers)
	{
		if(_maps.hasOwnProperty(mapName))
		{
			// Ensure to and from end up as arrays
			if(typeof(ciphers)==="string")
			{
				ciphers=ciphers.replace(",", " ").split(" ");
			}

			if(typeof(ciphers)==="object")
			{
				var i;
				var conv;
				var output="";
				for(i in ciphers)
				{
					conv=_maps[mapName][ciphers[i]];

					// Several SSL ciphers are listed under TLS_ prefixes in the maps so try that as a fallback
					if(!conv)
					{
						conv=_maps[mapName][ciphers[i].replace(/^SSL_/, "TLS_")];
					}

					if(conv)
					{
						output+=conv+" ";
					}
				}

				output=output.trim();

				return output;
			}
		}
		// If we get here, there's been an error
		return false;
	};

	this.convertOpenSSLToTLS=function convertOpenSSLToTLSFn(cipherString)
	{
		return convert("openSSLToTLSMapJSON", cipherString);
	};

	this.convertTLSToOpenSSLMapJSON=function convertTLSToOpenSSLMapJSONFn(cipherString)
	{
		return convert("TLSToOpenSSLMapJSON", cipherString).trim().replace(" ", ":");
	};

};

// Making some sort of an attempt to have this usable directly via node and vanilla js (browser)
if(typeof(module)==="object")
{
	module.exports=cipherNameConverter;
}