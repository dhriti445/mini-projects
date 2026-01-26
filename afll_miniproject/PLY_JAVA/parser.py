# parser.py
import ply.yacc as yacc
from lexer import tokens

# ---------------------------------------------------
# Global flag for syntax validity
# ---------------------------------------------------
valid = False

# ---------------------------------------------------
# Main rule — allows one statement at a time
# ---------------------------------------------------
def p_statement(p):
    """statement : var_decl
                 | array_decl
                 | object_creation
                 | while_loop
                 | do_while_loop
                 | for_loop
                 | class_def"""
    global valid
    valid = True

# ---------------------------------------------------
# Variable Declarations
# ---------------------------------------------------
def p_var_decl(p):
    '''var_decl : type ID SEMI
                | type ID EQUAL literal SEMI'''
    global valid
    if len(p) == 6:  # with assignment
        declared_type = p[1]
        assigned_value = p[4]
        value_type = p[4][0] if isinstance(p[4], tuple) else None

        if value_type and declared_type != value_type:
            # Handle compatible cases
            if declared_type == 'float' and value_type == 'int':
                valid = True
            elif declared_type == 'double' and value_type in ['float', 'int']:
                valid = True
            else:
                valid = False
                raise SyntaxError(f"Type mismatch in assignment: {declared_type} != {value_type}")
    else:
        valid = True


# ---------------------------------------------------
# Array Declarations (Java-style)
# ---------------------------------------------------
def p_array_decl(p):
    """array_decl :  type LBRACKET RBRACKET ID SEMI
                  | type LBRACKET RBRACKET ID EQUAL LBRACE literal_list RBRACE SEMI
                  | type LBRACKET RBRACKET ID EQUAL NEW type LBRACKET INT_LITERAL RBRACKET SEMI"""
    pass

def p_literal_list(p):
    """literal_list : literal
                    | literal_list COMMA literal"""
    global valid
    valid = True
    pass

# ---------------------------------------------------
# Object Creation
# ---------------------------------------------------
# ---------------------------------------------------
# Object Creation (Java-style)
# ---------------------------------------------------
def p_object_creation_primitive(p):
    """object_creation : type ID EQUAL NEW ID LPAREN RPAREN SEMI"""
    global valid
    valid = True
    if p[1] != p[5]:
        print(f"⚠️ Warning: Possible type mismatch ({p[1]} vs new {p[5]})")
    else:
        print("✅ Accepted — Valid object creation")

def p_object_creation_custom(p):
    """object_creation : ID ID EQUAL NEW ID LPAREN RPAREN SEMI"""
    global valid
    valid = True
    if p[1] != p[5]:
        print(f"⚠️ Warning: Possible type mismatch ({p[1]} vs new {p[5]})")
    else:
        print("✅ Accepted — Valid object creation")


# ---------------------------------------------------
# Class Definition
# ---------------------------------------------------
def p_class_def(p):
    """class_def : CLASS ID LBRACE class_body RBRACE
                 | CLASS ID LBRACE RBRACE"""
    pass

def p_class_body(p):
    """class_body : class_member
                  | class_body class_member"""
    pass

def p_class_member(p):
    """class_member : var_decl
                    | method_decl"""
    pass

def p_method_decl(p):
    """method_decl : type ID LPAREN param_list_opt RPAREN LBRACE RBRACE"""
    pass

def p_param_list_opt(p):
    """param_list_opt : param_list
                      | empty"""
    pass

def p_param_list(p):
    """param_list : type ID
                  | param_list COMMA type ID"""
    pass

# ---------------------------------------------------
# Loops
# ---------------------------------------------------
def p_while_loop(p):
    """while_loop : WHILE LPAREN condition RPAREN LBRACE RBRACE"""
    pass

def p_do_while_loop(p):
    """do_while_loop : DO LBRACE RBRACE WHILE LPAREN condition RPAREN SEMI"""
    pass

def p_for_loop(p):
    """for_loop : FOR LPAREN var_decl condition SEMI ID PLUSPLUS RPAREN LBRACE RBRACE"""
    pass

# ---------------------------------------------------
# Condition and Literals
# ---------------------------------------------------
def p_condition(p):
    """condition : TRUE
                 | FALSE
                 | ID
                 | literal
                 | ID LT literal
                 | ID LT ID"""
    pass

def p_literal(p):
    '''literal : INT_LITERAL
               | FLOAT_LITERAL
               | CHAR_LITERAL
               | STRING_LITERAL
               | TRUE
               | FALSE'''
    tok = p.slice[1]
    if tok.type == 'INT_LITERAL':
        p[0] = ('int', p[1])
    elif tok.type == 'FLOAT_LITERAL':
        p[0] = ('float', p[1])
    elif tok.type == 'CHAR_LITERAL':
        p[0] = ('char', p[1])
    elif tok.type == 'STRING_LITERAL':
        p[0] = ('string', p[1])
    elif tok.type in ('TRUE', 'FALSE'):
        p[0] = ('boolean', p[1])

# ---------------------------------------------------
# Type Definitions
# ---------------------------------------------------
def p_type(p):
    '''type : INT
            | FLOAT
            | DOUBLE
            | CHAR_T
            | STRING_T
            | BOOLEAN_T'''
    p[0] = p[1].lower()

# ---------------------------------------------------
# Utility rules
# ---------------------------------------------------
def p_empty(p):
    'empty :'
    pass

# ---------------------------------------------------
# Error Handling
# ---------------------------------------------------
def p_error(p):
    global valid
    valid = False
    if p:
        print(f"❌ Syntax error at '{p.value}'")
    else:
        print("❌ Syntax error at EOF")

# ---------------------------------------------------
# Build Parser
# ---------------------------------------------------
parser = yacc.yacc(start='statement')
