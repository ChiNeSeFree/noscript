var ABELexer=function(a,b){if(!b){b=new org.antlr.runtime.RecognizerSharedState()}(function(){}).call(this);this.dfa9=new ABELexer.DFA9(this);ABELexer.superclass.constructor.call(this,a,b)};org.antlr.lang.augmentObject(ABELexer,{T_FROM:9,GLOB:12,HTTPVERB:7,A_LOGOUT:16,A_DENY:15,T_ACTION:4,SUB:8,T_METHODS:5,EOF:-1,URI:13,WS:21,URI_PART:20,A_SANDBOX:17,URI_START:19,ALL:6,A_ACCEPT:18,REGEXP:11,LOCATION:14,T_SITE:10,COMMENT:22});(function(){var a=org.antlr.runtime.Token.HIDDEN_CHANNEL,b=org.antlr.runtime.Token.EOF;org.antlr.lang.extend(ABELexer,org.antlr.runtime.Lexer,{T_FROM:9,GLOB:12,HTTPVERB:7,A_LOGOUT:16,A_DENY:15,T_ACTION:4,SUB:8,T_METHODS:5,EOF:-1,URI:13,WS:21,URI_PART:20,A_SANDBOX:17,URI_START:19,ALL:6,A_ACCEPT:18,REGEXP:11,LOCATION:14,T_SITE:10,COMMENT:22,getGrammarFileName:function(){return"ABE.g"}});org.antlr.lang.augmentObject(ABELexer.prototype,{mT_SITE:function(){try{var d=this.T_SITE;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("Site");this.state.type=d;this.state.channel=c}finally{}},mT_FROM:function(){try{var e=this.T_FROM;var d=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;if(this.input.LA(1)=="F"||this.input.LA(1)=="f"){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}this.match("rom");this.state.type=e;this.state.channel=d}finally{}},mA_DENY:function(){try{var d=this.A_DENY;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("Deny");this.state.type=d;this.state.channel=c}finally{}},mA_LOGOUT:function(){try{var d=this.A_LOGOUT;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;var h=2;var e=this.input.LA(1);if((e=="L")){h=1}else{if((e=="A")){h=2}else{var f=new org.antlr.runtime.NoViableAltException("",2,0,this.input);throw f}}switch(h){case 1:this.match("Logout");break;case 2:this.match("Anon");var i=2;var g=this.input.LA(1);if((g=="y")){i=1}switch(i){case 1:this.match("ymize");break}break}this.state.type=d;this.state.channel=c}finally{}},mA_SANDBOX:function(){try{var d=this.A_SANDBOX;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("Sandbox");this.state.type=d;this.state.channel=c}finally{}},mA_ACCEPT:function(){try{var d=this.A_ACCEPT;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("Accept");this.state.type=d;this.state.channel=c}finally{}},mURI_START:function(){try{if((this.input.LA(1)>="0"&&this.input.LA(1)<="9")||(this.input.LA(1)>="a"&&this.input.LA(1)<="z")){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}}finally{}},mURI_PART:function(){try{if(this.input.LA(1)=="#"||(this.input.LA(1)>="%"&&this.input.LA(1)<="&")||(this.input.LA(1)>=","&&this.input.LA(1)<=";")||this.input.LA(1)=="="||(this.input.LA(1)>="?"&&this.input.LA(1)<="[")||this.input.LA(1)=="]"||this.input.LA(1)=="_"||(this.input.LA(1)>="a"&&this.input.LA(1)<="z")||this.input.LA(1)=="~"){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}}finally{}},mLOCATION:function(){try{var e=this.LOCATION;var d=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;var g=2;var c=this.input.LA(1);if((c=="L")){g=1}else{if((c=="S")){g=2}else{var f=new org.antlr.runtime.NoViableAltException("",3,0,this.input);throw f}}switch(g){case 1:this.match("LOCAL");break;case 2:this.match("SELF");break}this.state.type=e;this.state.channel=d}finally{}},mURI:function(){try{var e=this.URI;var d=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.mURI_START();var c=0;loop4:do{var g=2;var h=this.input.LA(1);if((h=="#"||(h>="%"&&h<="&")||(h>=","&&h<=";")||h=="="||(h>="?"&&h<="[")||h=="]"||h=="_"||(h>="a"&&h<="z")||h=="~")){g=1}switch(g){case 1:this.mURI_PART();break;default:if(c>=1){break loop4}var f=new org.antlr.runtime.EarlyExitException(4,this.input);throw f}c++}while(true);this.state.type=e;this.state.channel=d}finally{}},mGLOB:function(){try{var f=this.GLOB;var e=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;if(this.input.LA(1)=="*"||this.input.LA(1)=="."||(this.input.LA(1)>="0"&&this.input.LA(1)<="9")||(this.input.LA(1)>="a"&&this.input.LA(1)<="z")){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}loop5:do{var g=2;var d=this.input.LA(1);if((d=="#"||(d>="%"&&d<="&")||d=="*"||(d>=","&&d<=";")||d=="="||(d>="?"&&d<="[")||d=="]"||d=="_"||(d>="a"&&d<="z")||d=="~")){g=1}switch(g){case 1:if(this.input.LA(1)=="#"||(this.input.LA(1)>="%"&&this.input.LA(1)<="&")||this.input.LA(1)=="*"||(this.input.LA(1)>=","&&this.input.LA(1)<=";")||this.input.LA(1)=="="||(this.input.LA(1)>="?"&&this.input.LA(1)<="[")||this.input.LA(1)=="]"||this.input.LA(1)=="_"||(this.input.LA(1)>="a"&&this.input.LA(1)<="z")||this.input.LA(1)=="~"){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}break;default:break loop5}}while(true);this.state.type=f;this.state.channel=e}finally{}},mREGEXP:function(){try{var f=this.REGEXP;var e=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("^");var d=0;loop6:do{var h=2;var i=this.input.LA(1);if(((i>="\u0000"&&i<="\t")||(i>="\u000B"&&i<="\uFFFF"))){h=1}switch(h){case 1:if((this.input.LA(1)>="\u0000"&&this.input.LA(1)<="\t")||(this.input.LA(1)>="\u000B"&&this.input.LA(1)<="\uFFFF")){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}break;default:if(d>=1){break loop6}var g=new org.antlr.runtime.EarlyExitException(6,this.input);throw g}d++}while(true);this.state.type=f;this.state.channel=e}finally{}},mALL:function(){try{var d=this.ALL;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("ALL");this.state.type=d;this.state.channel=c}finally{}},mSUB:function(){try{var d=this.SUB;var c=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("SUB");this.state.type=d;this.state.channel=c}finally{}},mHTTPVERB:function(){try{var f=this.HTTPVERB;var e=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.matchRange("A","Z");var c=0;loop7:do{var d=2;var h=this.input.LA(1);if(((h>="A"&&h<="Z"))){d=1}switch(d){case 1:this.matchRange("A","Z");break;default:if(c>=1){break loop7}var g=new org.antlr.runtime.EarlyExitException(7,this.input);throw g}c++}while(true);this.state.type=f;this.state.channel=e}finally{}},mWS:function(){try{var e=this.WS;var d=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;if((this.input.LA(1)>="\t"&&this.input.LA(1)<="\n")||(this.input.LA(1)>="\f"&&this.input.LA(1)<="\r")||this.input.LA(1)==" "){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}d=a;this.state.type=e;this.state.channel=d}finally{}},mCOMMENT:function(){try{var g=this.COMMENT;var f=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;this.match("#");loop8:do{var e=2;var d=this.input.LA(1);if(((d>="\u0000"&&d<="\t")||(d>="\u000B"&&d<="\uFFFF"))){e=1}switch(e){case 1:if((this.input.LA(1)>="\u0000"&&this.input.LA(1)<="\t")||(this.input.LA(1)>="\u000B"&&this.input.LA(1)<="\uFFFF")){this.input.consume()}else{var c=new org.antlr.runtime.MismatchedSetException(null,this.input);this.recover(c);throw c}break;default:break loop8}}while(true);f=a;this.state.type=g;this.state.channel=f}finally{}},mTokens:function(){var c=15;c=this.dfa9.predict(this.input);switch(c){case 1:this.mT_SITE();break;case 2:this.mT_FROM();break;case 3:this.mA_DENY();break;case 4:this.mA_LOGOUT();break;case 5:this.mA_SANDBOX();break;case 6:this.mA_ACCEPT();break;case 7:this.mLOCATION();break;case 8:this.mURI();break;case 9:this.mGLOB();break;case 10:this.mREGEXP();break;case 11:this.mALL();break;case 12:this.mSUB();break;case 13:this.mHTTPVERB();break;case 14:this.mWS();break;case 15:this.mCOMMENT();break}}},true);org.antlr.lang.augmentObject(ABELexer,{DFA9_eotS:"\u0002\uffff\u0001\u0008\u0004\uffff\u0001\u0008\u0007\uffff\u0002\u000a\u0002\u001c\u0002\uffff\u0001\u000a\u0001\uffff\u0001\u000a\u0001\uffff\u0001\u000a\u0001\u0020\u0001\u001c\u0001\uffff\u0001\u000a\u0001\u0023\u0001\u0024\u0001\uffff\u0001\u0018\u0001\u000a\u0002\uffff\u0001\u0024",DFA9_eofS:"\u0026\uffff",DFA9_minS:"\u0001\u0009\u0001\u0041\u0001\u0023\u0004\u0041\u0001\u0023\u0007\uffff\u0001\u004c\u0001\u0042\u0002\u0023\u0002\uffff\u0001\u0043\u0001\uffff\u0001\u004c\u0001\uffff\u0001\u0046\u0001\u0041\u0001\u0023\u0001\uffff\u0003\u0041\u0001\uffff\u0001\u0023\u0001\u004c\u0002\uffff\u0001\u0041",DFA9_maxS:"\u0001\u007a\u0001\u0069\u0001\u007e\u0001\u0065\u0001\u006f\u0001\u006e\u0001\u0072\u0001\u007e\u0007\uffff\u0001\u004c\u0001\u0042\u0002\u007e\u0002\uffff\u0001\u0043\u0001\uffff\u0001\u004c\u0001\uffff\u0001\u0046\u0001\u005a\u0001\u007e\u0001\uffff\u0001\u0041\u0002\u005a\u0001\uffff\u0001\u007e\u0001\u004c\u0002\uffff\u0001\u005a",DFA9_acceptS:"\u0008\uffff\u0001\u0009\u0001\u000a\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0001\u0001\u0005\u0004\uffff\u0001\u0003\u0001\u0004\u0001\uffff\u0001\u0006\u0001\uffff\u0001\u0002\u0003\uffff\u0001\u0008\u0003\uffff\u0001\u000c\u0002\uffff\u0001\u000b\u0001\u0007\u0001\uffff",DFA9_specialS:"\u0026\uffff}>",DFA9_transitionS:["\u0002\u000b\u0001\uffff\u0002\u000b\u0012\uffff\u0001\u000b\u0002\uffff\u0001\u000c\u0006\uffff\u0001\u0008\u0003\uffff\u0001\u0008\u0001\uffff\u000a\u0007\u0007\uffff\u0001\u0005\u0002\u000a\u0001\u0003\u0001\u000a\u0001\u0006\u0005\u000a\u0001\u0004\u0006\u000a\u0001\u0001\u0007\u000a\u0003\uffff\u0001\u0009\u0002\uffff\u0005\u0007\u0001\u0002\u0014\u0007","\u0004\u000a\u0001\u000f\u000f\u000a\u0001\u0010\u0005\u000a\u0006\uffff\u0001\u000e\u0007\uffff\u0001\u000d","\u0001\u0012\u0001\uffff\u0002\u0012\u0005\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0011\u0012\u0001\u0011\u0008\u0012\u0003\uffff\u0001\u0012","\u001a\u000a\u000a\uffff\u0001\u0013","\u000e\u000a\u0001\u0015\u000b\u000a\u0014\uffff\u0001\u0014","\u000b\u000a\u0001\u0017\u000e\u000a\u0008\uffff\u0001\u0016\u000a\uffff\u0001\u0014","\u001a\u000a\u0017\uffff\u0001\u0018","\u0001\u0012\u0001\uffff\u0002\u0012\u0005\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001a\u0012\u0003\uffff\u0001\u0012","","","","","","","","\u0001\u0019","\u0001\u001a","\u0001\u0012\u0001\uffff\u0002\u0012\u0003\uffff\u0001\u0008\u0001\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u000e\u0012\u0001\u001b\u000b\u0012\u0003\uffff\u0001\u0012","\u0001\u0012\u0001\uffff\u0002\u0012\u0003\uffff\u0001\u0008\u0001\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001a\u0012\u0003\uffff\u0001\u0012","","","\u0001\u001d","","\u0001\u001e","","\u0001\u001f","\u001a\u000a","\u0001\u0012\u0001\uffff\u0002\u0012\u0003\uffff\u0001\u0008\u0001\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u000c\u0012\u0001\u0021\u000d\u0012\u0003\uffff\u0001\u0012","","\u0001\u0022","\u001a\u000a","\u001a\u000a","","\u0001\u0012\u0001\uffff\u0002\u0012\u0003\uffff\u0001\u0008\u0001\uffff\u0010\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001d\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u0001\u0012\u0001\uffff\u001a\u0012\u0003\uffff\u0001\u0012","\u0001\u0025","","","\u001a\u000a"]});org.antlr.lang.augmentObject(ABELexer,{DFA9_eot:org.antlr.runtime.DFA.unpackEncodedString(ABELexer.DFA9_eotS),DFA9_eof:org.antlr.runtime.DFA.unpackEncodedString(ABELexer.DFA9_eofS),DFA9_min:org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ABELexer.DFA9_minS),DFA9_max:org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(ABELexer.DFA9_maxS),DFA9_accept:org.antlr.runtime.DFA.unpackEncodedString(ABELexer.DFA9_acceptS),DFA9_special:org.antlr.runtime.DFA.unpackEncodedString(ABELexer.DFA9_specialS),DFA9_transition:(function(){var c=[],e,d=ABELexer.DFA9_transitionS.length;for(e=0;e<d;e++){c.push(org.antlr.runtime.DFA.unpackEncodedString(ABELexer.DFA9_transitionS[e]))}return c})()});ABELexer.DFA9=function(c){this.recognizer=c;this.decisionNumber=9;this.eot=ABELexer.DFA9_eot;this.eof=ABELexer.DFA9_eof;this.min=ABELexer.DFA9_min;this.max=ABELexer.DFA9_max;this.accept=ABELexer.DFA9_accept;this.special=ABELexer.DFA9_special;this.transition=ABELexer.DFA9_transition};org.antlr.lang.extend(ABELexer.DFA9,org.antlr.runtime.DFA,{getDescription:function(){return"1:1: Tokens : ( T_SITE | T_FROM | A_DENY | A_LOGOUT | A_SANDBOX | A_ACCEPT | LOCATION | URI | GLOB | REGEXP | ALL | SUB | HTTPVERB | WS | COMMENT );"},dummy:null})})();