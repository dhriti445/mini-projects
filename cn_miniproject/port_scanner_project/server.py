import socket
import ssl
import threading
from scanner import scan_port

HOST = "0.0.0.0"
PORT = 5000

def handle_client(conn):

    try:
        data = conn.recv(1024).decode()

        target, start_port, end_port = data.split(",")

        start_port = int(start_port)
        end_port = int(end_port)

        results = []

        for port in range(start_port, end_port+1):

            port_result = scan_port(target, port)

            if port_result[1] == "OPEN":
                results.append(port_result)

        response = "\n".join(
            [f"Port {r[0]} OPEN Banner:{r[2]}" for r in results]
        )

        if response == "":
            response = "No open ports found"

        conn.send(response.encode())

    except Exception as e:
        conn.send(f"Error: {str(e)}".encode())

    finally:
        conn.close()


def start_server():

    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain("server.crt", "server.key")

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind((HOST, PORT))
    sock.listen(5)

    print("Secure Port Scanner Server running on port", PORT)

    while True:

        client_socket, addr = sock.accept()

        secure_socket = context.wrap_socket(client_socket, server_side=True)

        print("Client connected:", addr)

        thread = threading.Thread(
            target=handle_client,
            args=(secure_socket,)
        )

        thread.start()


if __name__ == "__main__":
    start_server()