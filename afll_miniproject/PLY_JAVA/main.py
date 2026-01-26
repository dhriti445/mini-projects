# main.py
import parser as P
from lexer import lexer

print("✅ Java Syntax Validator — type 'quit' to exit\n")

while True:
    try:
        data = input(">>> ")
    except EOFError:
        break
    if data.strip().lower() == 'quit':
        break
    if not data.strip():
        continue

    # reset parse-success flag
    P.valid = False

    # parse the input (program start allows single or multiple statements)
    try:
        P.parser.parse(data, lexer=lexer)
    except SyntaxError as e:
        # semantic checks in parser raise SyntaxError
        print(f"❌ {e}")
        P.valid = False
    except Exception:
        # p_error prints friendly messages; suppress traceback
        P.valid = False

    if P.valid:
        print("✅ Accepted — Syntax is correct!\n")
    else:
        print("❌ Rejected — Invalid syntax or type.\n")
