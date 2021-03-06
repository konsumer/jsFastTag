# jsFastTag

Ever need to quickly parse English into parts of speech?  This library will allow you do that in node & browser.

## Browser

Install dev tools with `npm install` and install grunt with `npm install -g grunt`.

Build for browser with `grunt`, and you will get a minified & regular copy in `dist/`.


## TAG DEFINITIONS:

```
CC Coord Conjuncn           and,but,or
NN Noun, sing. or mass      dog
CD Cardinal number          one,two
NNS Noun, plural            dogs
DT Determiner               the,some
NNP Proper noun, sing.      Edinburgh
EX Existential there        there
NNPS Proper noun, plural    Smiths
FW Foreign Word             mon dieu
PDT Predeterminer           all, both
IN Preposition              of,in,by
POS Possessive ending       Õs
JJ Adjective                big
PP Personal pronoun         I,you,she
JJR Adj., comparative       bigger
PP$ Possessive pronoun      my,oneÕs
JJS Adj., superlative       biggest
RB Adverb                   quickly
LS List item marker         1,One
RBR Adverb, comparative     faster
MD Modal                    can,should
RBS Adverb, superlative     fastest
RP Particle                 up,off
WP$ Possessive-Wh           whose
SYM Symbol                  +,%,&
WRB Wh-adverb               how,where
TO ÒtoÓ                     to
$ Dollar sign               $
UH Interjection             oh, oops
# Pound sign                #
VB verb, base form          eat
" quote                     "
VBD verb, past tense        ate
VBG verb, gerund            eating
( Left paren                (
VBN verb, past part         eaten
) Right paren               )
VBP Verb, present           eat
, Comma                     ,
VBZ Verb, present           eats
. Sent-final punct          . ! ?
WDT Wh-determiner           which,that
: Mid-sent punct.           : ; Ñ
WP Wh pronoun               who,what
```

### MEDPOST TAG DEFINITIONS:
```
CC coordinating conjunction
CS subordinating conjunction
CSN comparative conjunction (than)
CST complementizer (that)
DB predeterminer
DD determiner
EX existential there
GE genitive marker Õs
II preposition
JJ adjective
JJR comparative adjective
JJT superlative adjective
MC number or numeric
NN noun
NNP proper noun
NNS plural noun
PN pronoun
PND determiner as pronoun
PNG genitive pronoun
PNR relative pronoun
RR adverb 
RRR comparative adverb
RRT superlative adverb
SYM symbol
TO infinitive marker to
VM modal
VBB base be, am, are
VBD past was, were
VBG participle being
VBI infinitive be
VBN participle been
VBZ 3rd pers. sing. is
VDB base do
VDD past did
VDG participle doing
VDI infinite do
VDN participle done
VDZ 3rd pers. sing. does
VHB base have
VHD past had
VHG participle having
VHI infinitive have
VHN participle had
VHZ 3rd pers. sing. has
VVB base form lexical verb
VVD past tense
VVG present part.
VVI infinitive lexical verb
VVN past part.
VVZ 3rd pers. sing.
VVNJ prenominal past part.
VVGJ prenominal present part.
VVGN nominal gerund
( left parenthesis
) right parenthesis
, comma
. end-of-sentence period
: dashes, colons
 ? ? right quo
```

## Credits

Based on the work of [Mark Watson](http://markwatson.com) and his [great FastTag library](https://github.com/mark-watson/fasttag_v2) for Java.