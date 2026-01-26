import ply.lex as lex

# ---------------------------------------------------
# Token names
# ---------------------------------------------------
tokens = [
    # Keywords
    'CLASS', 'NEW', 'FOR', 'WHILE', 'DO',
    'INT', 'FLOAT', 'DOUBLE', 'CHAR_T', 'STRING_T', 'BOOLEAN_T',
    'TRUE', 'FALSE',

    # Identifiers and literals
    'ID', 'INT_LITERAL', 'FLOAT_LITERAL', 'CHAR_LITERAL', 'STRING_LITERAL',

    # Operators and punctuation
    'EQUAL', 'SEMI', 'COMMA',
    'LPAREN', 'RPAREN', 'LBRACE', 'RBRACE',
    'LBRACKET', 'RBRACKET',
    'PLUSPLUS', 'LT'
]

# ---------------------------------------------------
# Reserved words mapping
# ---------------------------------------------------
reserved = {
    'class': 'CLASS',
    'new': 'NEW',
    'for': 'FOR',
    'while': 'WHILE',
    'do': 'DO',
    'int': 'INT',
    'float': 'FLOAT',
    'double': 'DOUBLE',
    'char': 'CHAR_T',
    'String': 'STRING_T',
    'boolean': 'BOOLEAN_T',
    'true': 'TRUE',
    'false': 'FALSE'
}

# ---------------------------------------------------
# Token regex definitions
# ---------------------------------------------------
t_EQUAL    = r'='
t_SEMI     = r';'
t_COMMA    = r','
t_LPAREN   = r'\('
t_RPAREN   = r'\)'
t_LBRACE   = r'\{'
t_RBRACE   = r'\}'
t_LBRACKET = r'\['
t_RBRACKET = r'\]'
t_PLUSPLUS = r'\+\+'
t_LT       = r'<'

# ---------------------------------------------------
# Literals
# ---------------------------------------------------
def t_FLOAT_LITERAL(t):
    r'\d+\.\d+'
    t.value = float(t.value)
    return t

def t_INT_LITERAL(t):
    r'\d+'
    t.value = int(t.value)
    return t

def t_CHAR_LITERAL(t):
    r"\'([^\\\n'])\'"
    return t

def t_STRING_LITERAL(t):
    r'\"([^\\\n"]*)\"'
    return t

# ---------------------------------------------------
# Identifiers & Keywords
# ---------------------------------------------------
def t_ID(t):
    r'[A-Za-z_][A-Za-z0-9_]*'
    t.type = reserved.get(t.value, 'ID')
    return t

# ---------------------------------------------------
# Whitespace & line handling
# ---------------------------------------------------
t_ignore = ' \t\r'

def t_newline(t):
    r'\n+'
    t.lexer.lineno += len(t.value)

# ---------------------------------------------------
# Error handling
# ---------------------------------------------------
def t_error(t):
    print(f"❌ Illegal character '{t.value[0]}'")
    t.lexer.skip(1)

# ---------------------------------------------------
# Build the lexer
# ---------------------------------------------------
lexer = lex.lex()
