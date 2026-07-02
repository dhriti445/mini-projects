import socket
import ssl

HOST = "127.0.0.1"
PORT = 5000

context = ssl.create_default_context()

# tell client which certificate to trust
context.load_verify_locations("server.crt")

context.check_hostname = False
context.verify_mode = ssl.CERT_REQUIRED

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

secure_sock = context.wrap_socket(sock)

secure_sock.connect((HOST, PORT))

target = input("Target IP or Host: ")
start_port = input("Start Port: ")
end_port = input("End Port: ")

request = f"{target},{start_port},{end_port}"

secure_sock.send(request.encode())

result = secure_sock.recv(4096).decode()

print("\nScan Results\n")
print(result)

secure_sock.close()